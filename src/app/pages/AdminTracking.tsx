import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Lock, Eye, EyeOff, Settings, CheckCircle2, AlertCircle,
  RefreshCw, ExternalLink, ChevronDown, ChevronUp, Copy,
  Table2, FileSpreadsheet, LogOut, Shield, Zap, Cloud,
  CloudOff, Users, BookOpen, Key, ArrowRight, Info,
  Clipboard, Check
} from "lucide-react";
import {
  getSheetId, saveSheetId, testSheetConnection,
  extractSheetId, DEFAULT_ADMIN_PASSWORD,
  ADMIN_PASSWORD_KEY, SHEETS_CONFIG_KEY
} from "../services/googleSheetsService";
import type { Project } from "../types/tracking";
import { fetchProjectsFromSheets } from "../services/googleSheetsService";

/* ─── Constants ─────────────────────────────────────────────────────────────── */
const SESSION_KEY = "grotivy_admin_session";

function getStoredPassword(): string {
  return localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_ADMIN_PASSWORD;
}

// ── Sheet structure template ──
const SHEET_STRUCTURE = [
  {
    name: "Proyek",
    color: "text-[#5FBDBE]",
    bg: "bg-[#5FBDBE]/10",
    border: "border-[#5FBDBE]/30",
    columns: ["id", "phone", "clientName", "company", "service", "serviceType", "status", "progress", "startDate", "estimatedFinish", "consultant", "consultantPhone"],
    example: ["GRV-2025-001", "081234567890", "Elang Hernawan", "PT Sumber Makmur", "Pendirian PT", "Legal", "selesai", "100", "10 Jan 2025", "28 Feb 2025", "Rina, S.H.", "6283861537366"],
  },
  {
    name: "Tahapan",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/30",
    columns: ["projectId", "id", "label", "desc", "date", "status"],
    example: ["GRV-2025-001", "1", "Pendaftaran & Verifikasi", "Dokumen diterima", "10 Jan 2025", "done"],
  },
  {
    name: "Dokumen",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/30",
    columns: ["projectId", "name", "status"],
    example: ["GRV-2025-001", "Akta Pendirian PT", "verified"],
  },
  {
    name: "Aktivitas",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/30",
    columns: ["projectId", "time", "text", "type"],
    example: ["GRV-2025-001", "10 Jan 2025, 09:00", "Proyek dimulai", "success"],
  },
];

const STATUS_OPTIONS = [
  { value: "baru", label: "baru", desc: "Baru Dimulai" },
  { value: "proses", label: "proses", desc: "Dalam Proses" },
  { value: "review", label: "review", desc: "Dalam Review" },
  { value: "selesai", label: "selesai", desc: "Selesai" },
];

const STEP_STATUS_OPTIONS = [
  { value: "done", label: "done" },
  { value: "active", label: "active" },
  { value: "pending", label: "pending" },
];

/* ═══════════════════════════════════════════════════════════════════════════ */

export function AdminTracking() {
  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");

  // Config state
  const [sheetInput, setSheetInput] = useState("");
  const [savedSheetId, setSavedSheetId] = useState<string | null>(null);
  const [testStatus, setTestStatus] = useState<"idle" | "testing" | "ok" | "error">("idle");
  const [testMsg, setTestMsg] = useState("");
  const [projectCount, setProjectCount] = useState(0);

  // Data state
  const [projects, setProjects] = useState<Record<string, Project>>({});
  const [dataLoading, setDataLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"config" | "projects" | "guide">("config");

  // Change password state
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [pwMsg, setPwMsg] = useState("");

  // UI
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  // ── Init ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    const session = sessionStorage.getItem(SESSION_KEY);
    if (session === "true") setIsLoggedIn(true);
    const id = getSheetId();
    if (id) {
      setSavedSheetId(id);
      setSheetInput(id);
    }
  }, []);

  // Load projects when logged in and sheet configured
  useEffect(() => {
    if (isLoggedIn && savedSheetId && activeTab === "projects") {
      loadProjects(savedSheetId);
    }
  }, [isLoggedIn, savedSheetId, activeTab]);

  // ── Auth ──────────────────────────────────────────────────────────────────
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (passwordInput === getStoredPassword()) {
      setIsLoggedIn(true);
      sessionStorage.setItem(SESSION_KEY, "true");
      setAuthError("");
    } else {
      setAuthError("Password salah. Coba lagi.");
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    sessionStorage.removeItem(SESSION_KEY);
    setPasswordInput("");
  }

  // ── Sheet config ──────────────────────────────────────────────────────────
  async function handleSaveSheet(e: React.FormEvent) {
    e.preventDefault();
    const extracted = extractSheetId(sheetInput);
    setTestStatus("testing");
    setTestMsg("");
    const result = await testSheetConnection(extracted);
    if (result.ok) {
      saveSheetId(extracted);
      setSavedSheetId(extracted);
      setTestStatus("ok");
      setTestMsg(`Koneksi berhasil! ${result.count} proyek ditemukan.`);
      setProjectCount(result.count);
    } else {
      setTestStatus("error");
      setTestMsg(result.error || "Koneksi gagal. Cek Sheet ID dan pastikan sheet dibagikan (Anyone with link).");
    }
  }

  async function loadProjects(sheetId: string) {
    setDataLoading(true);
    try {
      const data = await fetchProjectsFromSheets(sheetId);
      setProjects(data);
    } catch {
      setProjects({});
    } finally {
      setDataLoading(false);
    }
  }

  function handleRefresh() {
    if (savedSheetId) loadProjects(savedSheetId);
  }

  // ── Change password ───────────────────────────────────────────────────────
  function handleChangePw(e: React.FormEvent) {
    e.preventDefault();
    if (newPw.length < 6) { setPwMsg("Password minimal 6 karakter."); return; }
    if (newPw !== confirmPw) { setPwMsg("Konfirmasi password tidak cocok."); return; }
    localStorage.setItem(ADMIN_PASSWORD_KEY, newPw);
    setPwMsg("Password berhasil diperbarui!");
    setNewPw(""); setConfirmPw("");
  }

  // ── Copy columns ─────────────────────────────────────────────────────────
  function copyColumns(idx: number, cols: string[]) {
    navigator.clipboard.writeText(cols.join("\t"));
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  }

  // ── Status badge ─────────────────────────────────────────────────────────
  function statusBadge(status: string) {
    const map: Record<string, string> = {
      selesai: "bg-emerald-400/20 text-emerald-400 border-emerald-400/30",
      proses: "bg-[#5FBDBE]/20 text-[#5FBDBE] border-[#5FBDBE]/30",
      baru: "bg-blue-400/20 text-blue-400 border-blue-400/30",
      review: "bg-yellow-400/20 text-yellow-400 border-yellow-400/30",
    };
    return map[status] || "bg-white/10 text-white border-white/20";
  }

  /* ── LOGIN SCREEN ── */
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#071c23] flex items-center justify-center px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#5FBDBE]/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-[#2C5F6F]/10 rounded-full blur-[80px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-2xl mb-4 shadow-xl shadow-[#5FBDBE]/20">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">Admin Panel</h1>
            <p className="text-gray-500 text-sm">Grotivy Consultant — Project Tracking</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Password Admin</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={passwordInput}
                    onChange={e => setPasswordInput(e.target.value)}
                    placeholder="Masukkan password admin"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-12 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#5FBDBE]/60 transition-all"
                    required
                  />
                  <button type="button" onClick={() => setShowPassword(v => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              {authError && (
                <p className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 rounded-xl px-4 py-3">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" /> {authError}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#5FBDBE]/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" /> Masuk ke Admin Panel
              </button>
            </form>
            <p className="text-center text-xs text-gray-600 mt-6">
              Password default: <span className="font-mono text-gray-500">grotivy2024</span>
            </p>
          </div>

          <a href="/" className="block text-center mt-6 text-sm text-gray-600 hover:text-gray-400 transition-colors">
            ← Kembali ke website
          </a>
        </motion.div>
      </div>
    );
  }

  /* ── DASHBOARD ── */
  const projectList = Object.values(projects);
  const sheetUrl = savedSheetId
    ? `https://docs.google.com/spreadsheets/d/${savedSheetId}/edit`
    : null;

  return (
    <div className="min-h-screen bg-[#071c23]">
      {/* ── Header ── */}
      <div className="border-b border-white/10 bg-white/3 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-lg flex items-center justify-center">
              <Settings className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Admin Panel</p>
              <p className="text-gray-600 text-xs">Project Tracking Manager</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {savedSheetId && (
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1.5">
                <Cloud className="w-3 h-3" /> Google Sheets Terhubung
              </div>
            )}
            {!savedSheetId && (
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-3 py-1.5">
                <CloudOff className="w-3 h-3" /> Belum dikonfigurasi
              </div>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-white/10 hover:border-white/20 rounded-xl px-3 py-2 transition-all"
            >
              <LogOut className="w-3.5 h-3.5" /> Keluar
            </button>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex gap-1 bg-white/5 rounded-2xl p-1 mb-8 w-fit">
          {[
            { id: "config", label: "Konfigurasi", icon: <Settings className="w-4 h-4" /> },
            { id: "projects", label: "Data Proyek", icon: <Users className="w-4 h-4" /> },
            { id: "guide", label: "Panduan Setup", icon: <BookOpen className="w-4 h-4" /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* ══════════════ TAB: KONFIGURASI ══════════════ */}
        {activeTab === "config" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 pb-16">

            {/* Google Sheet ID */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#5FBDBE]/20 rounded-xl flex items-center justify-center">
                  <FileSpreadsheet className="w-5 h-5 text-[#5FBDBE]" />
                </div>
                <div>
                  <h2 className="text-white font-bold">Google Sheets ID</h2>
                  <p className="text-gray-500 text-xs">Tempelkan URL atau ID sheet Google Sheets Anda</p>
                </div>
              </div>

              <form onSubmit={handleSaveSheet} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">URL atau Sheet ID</label>
                  <input
                    type="text"
                    value={sheetInput}
                    onChange={e => setSheetInput(e.target.value)}
                    placeholder="https://docs.google.com/spreadsheets/d/... atau paste Sheet ID saja"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#5FBDBE]/60 transition-all text-sm font-mono"
                    required
                  />
                  <p className="text-xs text-gray-600 mt-1.5">
                    Sheet ID ada di URL: docs.google.com/spreadsheets/d/<span className="text-[#5FBDBE]">INI_SHEET_ID_NYA</span>/edit
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={testStatus === "testing"}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#5FBDBE]/30 transition-all hover:scale-[1.02] disabled:opacity-60"
                >
                  {testStatus === "testing" ? (
                    <><RefreshCw className="w-4 h-4 animate-spin" /> Mengecek Koneksi...</>
                  ) : (
                    <><Zap className="w-4 h-4" /> Simpan & Test Koneksi</>
                  )}
                </button>

                <AnimatePresence>
                  {testStatus === "ok" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-xl px-4 py-3 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> {testMsg}
                    </motion.div>
                  )}
                  {testStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3 text-sm"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Koneksi gagal</p>
                        <p className="text-xs text-red-300/70 mt-0.5">{testMsg}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              {savedSheetId && sheetUrl && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Sheet aktif:</p>
                      <p className="font-mono text-[#5FBDBE] text-sm break-all">{savedSheetId}</p>
                    </div>
                    <a
                      href={sheetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-[1.02]"
                    >
                      <ExternalLink className="w-4 h-4" /> Buka Google Sheet
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Status nilai */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-4 h-4 text-[#5FBDBE]" />
                  <h3 className="text-white font-bold text-sm">Nilai Status Proyek</h3>
                </div>
                <div className="space-y-2">
                  {STATUS_OPTIONS.map(s => (
                    <div key={s.value} className="flex items-center gap-3">
                      <span className={`font-mono text-xs border rounded px-2 py-1 ${statusBadge(s.value)}`}>{s.value}</span>
                      <span className="text-gray-400 text-xs">→ {s.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-4 h-4 text-purple-400" />
                  <h3 className="text-white font-bold text-sm">Nilai Status Tahapan</h3>
                </div>
                <div className="space-y-2 mb-6">
                  {STEP_STATUS_OPTIONS.map(s => (
                    <div key={s.value} className="flex items-center gap-3">
                      <span className="font-mono text-xs bg-white/10 border border-white/20 text-white rounded px-2 py-1">{s.value}</span>
                      <span className="text-gray-400 text-xs">
                        {s.value === "done" ? "✅ Selesai" : s.value === "active" ? "🔄 Sedang berjalan" : "⏳ Belum dimulai"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500"><span className="text-amber-400">type aktivitas:</span> success / info / warning</p>
                  <p className="text-xs text-gray-500 mt-1"><span className="text-amber-400">status dokumen:</span> verified / received / pending</p>
                </div>
              </div>
            </div>

            {/* Ubah password */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-xl flex items-center justify-center">
                  <Key className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-white font-bold">Ubah Password Admin</h2>
                  <p className="text-gray-500 text-xs">Ganti dari password default</p>
                </div>
              </div>
              <form onSubmit={handleChangePw} className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Password Baru</label>
                  <input
                    type="password"
                    value={newPw}
                    onChange={e => setNewPw(e.target.value)}
                    placeholder="Min. 6 karakter"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/60 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Konfirmasi Password</label>
                  <input
                    type="password"
                    value={confirmPw}
                    onChange={e => setConfirmPw(e.target.value)}
                    placeholder="Ulangi password baru"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/60 transition-all"
                  />
                </div>
                {pwMsg && (
                  <p className={`text-sm flex items-center gap-2 ${pwMsg.includes("berhasil") ? "text-emerald-400" : "text-red-400"}`}>
                    {pwMsg.includes("berhasil") ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                    {pwMsg}
                  </p>
                )}
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 px-5 py-2.5 rounded-xl font-semibold hover:bg-yellow-500/30 transition-all text-sm"
                >
                  <Key className="w-4 h-4" /> Simpan Password Baru
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {/* ══════════════ TAB: DATA PROYEK ══════════════ */}
        {activeTab === "projects" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="pb-16">
            {!savedSheetId ? (
              <div className="text-center py-20">
                <CloudOff className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">Belum ada Google Sheet</h3>
                <p className="text-gray-500 text-sm mb-6">Konfigurasi Sheet ID dulu di tab Konfigurasi</p>
                <button
                  onClick={() => setActiveTab("config")}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-6 py-3 rounded-xl font-semibold"
                >
                  <Settings className="w-4 h-4" /> Buka Konfigurasi
                </button>
              </div>
            ) : (
              <>
                {/* Toolbar */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-white font-bold text-lg">Daftar Proyek</h2>
                    <p className="text-gray-500 text-xs mt-0.5">
                      {dataLoading ? "Memuat..." : `${projectList.length} proyek dari Google Sheets`}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleRefresh}
                      disabled={dataLoading}
                      className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm hover:bg-white/10 transition-all disabled:opacity-50"
                    >
                      <RefreshCw className={`w-4 h-4 ${dataLoading ? "animate-spin" : ""}`} /> Refresh
                    </button>
                    {sheetUrl && (
                      <a
                        href={sheetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-[#5FBDBE]/20 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" /> Edit di Google Sheet
                      </a>
                    )}
                  </div>
                </div>

                {dataLoading ? (
                  <div className="text-center py-20">
                    <RefreshCw className="w-10 h-10 text-[#5FBDBE] animate-spin mx-auto mb-4" />
                    <p className="text-gray-400">Memuat data dari Google Sheets...</p>
                  </div>
                ) : projectList.length === 0 ? (
                  <div className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl">
                    <Table2 className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                    <h3 className="text-white font-bold mb-2">Belum ada data proyek</h3>
                    <p className="text-gray-500 text-sm">Tambahkan data di tab "Proyek" di Google Sheet Anda</p>
                    {sheetUrl && (
                      <a href={sheetUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 bg-white/5 border border-white/10 text-[#5FBDBE] px-5 py-2.5 rounded-xl text-sm hover:bg-white/10 transition-all">
                        <ExternalLink className="w-4 h-4" /> Buka Sheet untuk Tambah Data
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {projectList.map(p => (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-all"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#5FBDBE]/20 to-[#2C5F6F]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Users className="w-5 h-5 text-[#5FBDBE]" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <span className="font-mono text-sm text-[#5FBDBE] font-bold">{p.id}</span>
                                <span className={`text-xs border rounded-full px-2 py-0.5 font-semibold ${statusBadge(p.status)}`}>
                                  {p.status}
                                </span>
                              </div>
                              <p className="text-white font-semibold text-sm">{p.clientName} — {p.company}</p>
                              <p className="text-gray-500 text-xs mt-0.5">{p.service}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 ml-14 sm:ml-0">
                            {/* Progress */}
                            <div className="text-center">
                              <p className="text-xs text-gray-500 mb-1">Progress</p>
                              <p className="text-white font-bold text-lg">{p.progress}%</p>
                            </div>
                            <div className="text-center hidden sm:block">
                              <p className="text-xs text-gray-500 mb-1">Tahapan</p>
                              <p className="text-white font-bold text-lg">{p.steps.length}</p>
                            </div>
                            <div className="text-center hidden sm:block">
                              <p className="text-xs text-gray-500 mb-1">Dokumen</p>
                              <p className="text-white font-bold text-lg">{p.documents.length}</p>
                            </div>
                          </div>
                        </div>
                        {/* Mini progress bar */}
                        <div className="mt-4 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              p.status === "selesai" ? "bg-emerald-400" :
                              p.status === "proses" ? "bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]" :
                              "bg-blue-400"
                            }`}
                            style={{ width: `${p.progress}%` }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </>
            )}
          </motion.div>
        )}

        {/* ══════════════ TAB: PANDUAN SETUP ══════════════ */}
        {activeTab === "guide" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="pb-16 space-y-6">

            {/* Steps */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h2 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#5FBDBE]" /> Cara Setup Google Sheets (5 Langkah)
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Buat Google Sheets baru",
                    desc: "Buka sheets.google.com → klik '+ Blank'. Beri nama: 'Grotivy Project Tracking'",
                    color: "bg-[#5FBDBE]",
                  },
                  {
                    step: "2",
                    title: "Buat 4 tab dengan nama persis",
                    desc: "Klik '+' di bawah untuk tambah tab. Buat tab bernama: Proyek • Tahapan • Dokumen • Aktivitas (huruf kapital, tanpa spasi ekstra)",
                    color: "bg-purple-500",
                  },
                  {
                    step: "3",
                    title: "Salin header kolom ke setiap tab",
                    desc: "Gunakan tombol 'Salin' di bagian Struktur Sheet di bawah, lalu paste ke baris pertama masing-masing tab",
                    color: "bg-amber-500",
                  },
                  {
                    step: "4",
                    title: "Bagikan sheet ke 'Anyone with link'",
                    desc: "Klik tombol 'Share' (kanan atas) → 'Change to anyone with the link' → pilih 'Viewer' → klik 'Done'",
                    color: "bg-emerald-500",
                  },
                  {
                    step: "5",
                    title: "Salin Sheet ID & tempel di Konfigurasi",
                    desc: "Ambil ID dari URL: docs.google.com/spreadsheets/d/[INI_ID_NYA]/edit → tempel di tab Konfigurasi → klik Test",
                    color: "bg-rose-500",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className={`w-8 h-8 ${s.color} rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm`}>
                      {s.step}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-white font-semibold text-sm">{s.title}</p>
                      <p className="text-gray-400 text-xs mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sheet structure */}
            <div className="space-y-4">
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                <Table2 className="w-5 h-5 text-[#5FBDBE]" /> Struktur Setiap Tab Sheet
              </h2>
              {SHEET_STRUCTURE.map((sheet, idx) => (
                <div key={idx} className={`bg-white/5 backdrop-blur-xl border ${sheet.border} rounded-2xl overflow-hidden`}>
                  <button
                    onClick={() => setOpenSection(openSection === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold ${sheet.bg} ${sheet.color} border ${sheet.border} rounded-lg px-3 py-1 font-mono`}>
                        Tab: {sheet.name}
                      </span>
                      <span className="text-gray-400 text-sm">{sheet.columns.length} kolom</span>
                    </div>
                    {openSection === idx ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </button>
                  <AnimatePresence>
                    {openSection === idx && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 border-t border-white/10 pt-4">
                          {/* Columns header */}
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-xs text-gray-500">Header baris ke-1 (salin ke Google Sheet):</p>
                            <button
                              onClick={() => copyColumns(idx, sheet.columns)}
                              className="flex items-center gap-1.5 text-xs bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg transition-all"
                            >
                              {copiedIdx === idx ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                              {copiedIdx === idx ? "Tersalin!" : "Salin Semua"}
                            </button>
                          </div>

                          {/* Columns table */}
                          <div className="overflow-x-auto rounded-xl border border-white/10">
                            <table className="w-full text-xs">
                              <thead>
                                <tr className="bg-white/5">
                                  {sheet.columns.map((col) => (
                                    <th key={col} className={`px-3 py-2.5 text-left font-mono font-bold ${sheet.color} whitespace-nowrap border-r border-white/5 last:border-r-0`}>
                                      {col}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t border-white/5">
                                  {sheet.example.map((val, i) => (
                                    <td key={i} className="px-3 py-2.5 text-gray-400 whitespace-nowrap border-r border-white/5 last:border-r-0">
                                      {val}
                                    </td>
                                  ))}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="text-xs text-gray-600 mt-2">Baris abu-abu di atas adalah contoh data</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-[#5FBDBE]/10 to-[#2C5F6F]/15 border border-[#5FBDBE]/20 rounded-3xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Clipboard className="w-4 h-4 text-[#5FBDBE]" /> Tips Penggunaan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { title: "ID Proyek", tip: "Format: GRV-YYYY-XXX (contoh: GRV-2025-042). Harus sama di semua tab." },
                  { title: "Progress", tip: "Isi angka 0–100 (tanpa %). Contoh: 75" },
                  { title: "Update langsung", tip: "Edit Google Sheet → save → klik Refresh di tab Data Proyek. Klien langsung lihat perubahan." },
                  { title: "Tidak perlu login Google", tip: "Cukup share sheet ke 'Anyone with link' → View. Tidak perlu API key atau login." },
                  { title: "Tambah proyek baru", tip: "Tambah baris di tab Proyek, Tahapan, Dokumen, Aktivitas dengan ID proyek yang sama." },
                  { title: "Urutan tahapan", tip: "Isi kolom 'id' di tab Tahapan dengan angka urutan (1, 2, 3, dst)." },
                ].map((t, i) => (
                  <div key={i} className="flex gap-3 bg-white/5 rounded-xl p-3">
                    <CheckCircle2 className="w-4 h-4 text-[#5FBDBE] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-xs font-semibold">{t.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{t.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setActiveTab("config")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-[#5FBDBE]/30 transition-all hover:scale-105"
              >
                Siap! Ke Konfigurasi <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
