import type { Project, Step, Document, Activity, StepStatus, ProjectStatus } from "../types/tracking";

export const SHEETS_CONFIG_KEY = "grotivy_sheets_id";
export const ADMIN_PASSWORD_KEY = "grotivy_admin_pw";
export const DEFAULT_ADMIN_PASSWORD = "grotivy2024";

// Nama tab di Google Sheet (harus sama persis)
export const SHEET_NAMES = {
  PROJECTS: "Proyek",
  STEPS: "Tahapan",
  DOCUMENTS: "Dokumen",
  ACTIVITIES: "Aktivitas",
};

// ── Ambil SHEET_ID dari localStorage ──────────────────────────────────────────
export function getSheetId(): string | null {
  return localStorage.getItem(SHEETS_CONFIG_KEY);
}

export function saveSheetId(id: string): void {
  localStorage.setItem(SHEETS_CONFIG_KEY, id.trim());
}

// ── Fetch satu sheet via gviz/tq (no API key needed, sheet harus "shared - anyone with link") ─
async function fetchSheet(
  sheetId: string,
  sheetName: string
): Promise<Record<string, string>[]> {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Gagal mengambil data dari sheet: ${sheetName}`);

  const text = await res.text();
  // Strip JSONP wrapper
  const jsonStr = text.replace(/^[^(]*\(/, "").replace(/\);\s*$/, "");
  const parsed = JSON.parse(jsonStr);

  if (parsed.status === "error") {
    const msg = parsed.errors?.[0]?.detailed_message || parsed.errors?.[0]?.message || "Error pada Google Sheet";
    throw new Error(msg);
  }

  const cols: string[] = (parsed.table?.cols || []).map(
    (c: { label?: string; id?: string }) => c.label || c.id || ""
  );

  const rows: Record<string, string>[] = (parsed.table?.rows || [])
    .map((row: { c: Array<{ v: unknown } | null> }) => {
      const obj: Record<string, string> = {};
      (row.c || []).forEach((cell, i) => {
        obj[cols[i]] = cell?.v != null ? String(cell.v) : "";
      });
      return obj;
    })
    .filter((r) => Object.values(r).some((v) => v !== ""));

  return rows;
}

// ── Fetch semua data & gabungkan jadi Record<id, Project> ──────────────────────
export async function fetchProjectsFromSheets(
  sheetId: string
): Promise<Record<string, Project>> {
  const [projectRows, stepRows, docRows, actRows] = await Promise.all([
    fetchSheet(sheetId, SHEET_NAMES.PROJECTS),
    fetchSheet(sheetId, SHEET_NAMES.STEPS),
    fetchSheet(sheetId, SHEET_NAMES.DOCUMENTS),
    fetchSheet(sheetId, SHEET_NAMES.ACTIVITIES),
  ]);

  const projects: Record<string, Project> = {};

  for (const row of projectRows) {
    if (!row.id) continue;
    projects[row.id] = {
      id: row.id,
      phone: row.phone || "",
      clientName: row.clientName || "",
      company: row.company || "",
      service: row.service || "",
      serviceType: row.serviceType || "",
      status: (row.status as ProjectStatus) || "baru",
      progress: Number(row.progress) || 0,
      startDate: row.startDate || "",
      estimatedFinish: row.estimatedFinish || "",
      consultant: row.consultant || "",
      consultantPhone: row.consultantPhone || "",
      steps: [],
      documents: [],
      activities: [],
    };
  }

  for (const row of stepRows) {
    if (!row.projectId || !projects[row.projectId]) continue;
    const step: Step = {
      id: Number(row.id) || 0,
      label: row.label || "",
      desc: row.desc || "",
      date: row.date || "",
      status: (row.status as StepStatus) || "pending",
    };
    projects[row.projectId].steps.push(step);
  }

  for (const row of docRows) {
    if (!row.projectId || !projects[row.projectId]) continue;
    const doc: Document = {
      name: row.name || "",
      status: (row.status as Document["status"]) || "pending",
    };
    projects[row.projectId].documents.push(doc);
  }

  for (const row of actRows) {
    if (!row.projectId || !projects[row.projectId]) continue;
    const act: Activity = {
      time: row.time || "",
      text: row.text || "",
      type: (row.type as Activity["type"]) || "info",
    };
    projects[row.projectId].activities.push(act);
  }

  return projects;
}

// ── Test koneksi (hanya fetch sheet Proyek) ────────────────────────────────────
export async function testSheetConnection(sheetId: string): Promise<{ ok: boolean; count: number; error?: string }> {
  try {
    const rows = await fetchSheet(sheetId, SHEET_NAMES.PROJECTS);
    return { ok: true, count: rows.length };
  } catch (e) {
    return { ok: false, count: 0, error: (e as Error).message };
  }
}

// ── Ekstrak Sheet ID dari URL Google Sheets ────────────────────────────────────
export function extractSheetId(input: string): string {
  // Jika input adalah URL, ekstrak ID
  const match = input.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match) return match[1];
  // Jika sudah berupa ID langsung
  return input.trim();
}
