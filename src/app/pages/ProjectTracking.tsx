import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search, CheckCircle2, Clock, AlertCircle, FileText,
  ChevronRight, Phone, MessageCircle, Download, Bell,
  User, Briefcase, Calendar, Shield, Star, RefreshCw,
  Lock, Eye, EyeOff, Zap, ArrowRight, ChevronDown,
  Cloud, CloudOff
} from "lucide-react";
import { SEO, buildBreadcrumbSchema } from "../components/SEO";
import type { Project, ProjectStatus, StepStatus } from "../types/tracking";
import { fetchProjectsFromSheets, getSheetId } from "../services/googleSheetsService";

const WA_NUMBER = "6283861537366";

/* ─── Mock project database ────────────────────────────────────────────────── */
type Step = import("../types/tracking").Step;
type Document = import("../types/tracking").Document;
type Activity = import("../types/tracking").Activity;

const MOCK_PROJECTS: Record<string, Project> = {
  "GRV-2025-001": {
    id: "GRV-2025-001",
    phone: "081234567890",
    clientName: "Elang Hernawan",
    company: "PT Sumber Makmur Indonesia",
    service: "Pendirian PT & Perizinan BPOM",
    serviceType: "Legal & Perizinan",
    status: "selesai",
    progress: 100,
    startDate: "10 Jan 2025",
    estimatedFinish: "28 Feb 2025",
    consultant: "Rina Kusuma, S.H.",
    consultantPhone: "6283861537366",
    steps: [
      { id: 1, label: "Pendaftaran & Verifikasi", desc: "Dokumen awal diterima & diverifikasi", date: "10 Jan 2025", status: "done" },
      { id: 2, label: "Konsultasi & Analisis", desc: "Rapat konsultasi kebutuhan klien selesai", date: "14 Jan 2025", status: "done" },
      { id: 3, label: "Penyusunan Dokumen Legal", desc: "Akta pendirian & anggaran dasar selesai", date: "22 Jan 2025", status: "done" },
      { id: 4, label: "Pengajuan ke Instansi", desc: "Pengajuan ke Kemenkumham & OSS selesai", date: "05 Feb 2025", status: "done" },
      { id: 5, label: "Verifikasi & Persetujuan", desc: "Semua izin disetujui instansi berwenang", date: "20 Feb 2025", status: "done" },
      { id: 6, label: "Dokumen Diserahkan", desc: "Seluruh dokumen legal diserahkan ke klien", date: "28 Feb 2025", status: "done" },
    ],
    documents: [
      { name: "Akta Pendirian PT", status: "verified" },
      { name: "SK Kemenkumham", status: "verified" },
      { name: "NIB (Nomor Induk Berusaha)", status: "verified" },
      { name: "SIUP & TDP", status: "verified" },
      { name: "NPWP Perusahaan", status: "verified" },
      { name: "Sertifikat BPOM", status: "verified" },
    ],
    activities: [
      { time: "28 Feb 2025, 14:30", text: "Seluruh dokumen diserahkan — proyek SELESAI 🎉", type: "success" },
      { time: "20 Feb 2025, 10:00", text: "Sertifikat BPOM telah terbit", type: "success" },
      { time: "05 Feb 2025, 09:00", text: "Pengajuan NIB melalui OSS berhasil", type: "success" },
    ],
  },
  "GRV-2025-087": {
    id: "GRV-2025-087",
    phone: "082233445566",
    clientName: "Adi Prasetio Budi",
    company: "PT ADA Kargo Logistik",
    service: "Transformasi Sistem Manajemen & ISO 9001",
    serviceType: "Business Transformation",
    status: "proses",
    progress: 60,
    startDate: "15 Jan 2025",
    estimatedFinish: "30 Apr 2025",
    consultant: "Budi Santoso, M.M.",
    consultantPhone: "6283861537366",
    steps: [
      { id: 1, label: "Pendaftaran & Verifikasi", desc: "Dokumen awal diterima & diverifikasi", date: "15 Jan 2025", status: "done" },
      { id: 2, label: "Audit & Analisis Sistem", desc: "Gap analysis operasional selesai", date: "25 Jan 2025", status: "done" },
      { id: 3, label: "Penyusunan SOP & Sistem Baru", desc: "Sedang menyusun 24 SOP operasional", date: "Estimasi 10 Mar 2025", status: "active" },
      { id: 4, label: "Implementasi & Training", desc: "Training tim internal (menunggu)", date: "Estimasi 25 Mar 2025", status: "pending" },
      { id: 5, label: "Audit Pre-Sertifikasi ISO", desc: "Internal audit sebelum sertifikasi", date: "Estimasi 10 Apr 2025", status: "pending" },
      { id: 6, label: "Sertifikasi ISO 9001 Diterbitkan", desc: "Sertifikat ISO resmi dari lembaga terakreditasi", date: "Estimasi 30 Apr 2025", status: "pending" },
    ],
    documents: [
      { name: "Laporan Gap Analysis", status: "verified" },
      { name: "Peta Proses Bisnis", status: "verified" },
      { name: "Draft SOP Operasional (24 SOP)", status: "pending" },
      { name: "Manual Mutu ISO 9001", status: "pending" },
      { name: "Laporan Audit Internal", status: "pending" },
      { name: "Sertifikat ISO 9001:2015", status: "pending" },
    ],
    activities: [
      { time: "Hari ini, 09:15", text: "Progress SOP Operasional: 14 dari 24 SOP selesai disusun", type: "info" },
      { time: "Kemarin, 16:00", text: "Review draft SOP dengan tim manajemen Anda selesai", type: "success" },
      { time: "25 Jan 2025, 11:00", text: "Laporan Gap Analysis final diserahkan ke klien", type: "success" },
    ],
  },
  "GRV-2025-134": {
    id: "GRV-2025-134",
    phone: "087788990011",
    clientName: "Muhammad Hilmi",
    company: "PT Nayaka Citra Kreasindo",
    service: "Pendirian PT & Perizinan Kominfo",
    serviceType: "Legal & Digital",
    status: "baru",
    progress: 20,
    startDate: "03 Feb 2025",
    estimatedFinish: "15 Apr 2025",
    consultant: "Anisa Rahmawati, S.H.",
    consultantPhone: "6283861537366",
    steps: [
      { id: 1, label: "Pendaftaran & Verifikasi", desc: "Dokumen awal diterima & sedang diverifikasi", date: "03 Feb 2025", status: "done" },
      { id: 2, label: "Konsultasi & Analisis", desc: "Jadwal rapat konsultasi: 25 Feb 2025", date: "Estimasi 25 Feb 2025", status: "active" },
      { id: 3, label: "Penyusunan Dokumen Legal", desc: "Akta pendirian & anggaran dasar", date: "Estimasi 10 Mar 2025", status: "pending" },
      { id: 4, label: "Pengajuan ke Instansi", desc: "Kemenkumham, OSS, Kominfo", date: "Estimasi 20 Mar 2025", status: "pending" },
      { id: 5, label: "Verifikasi & Persetujuan", desc: "Menunggu persetujuan instansi", date: "Estimasi 05 Apr 2025", status: "pending" },
      { id: 6, label: "Dokumen Diserahkan", desc: "Semua dokumen legal siap", date: "Estimasi 15 Apr 2025", status: "pending" },
    ],
    documents: [
      { name: "KTP & NPWP Pendiri", status: "verified" },
      { name: "Draft Akta Pendirian", status: "pending" },
      { name: "SK Kemenkumham", status: "pending" },
      { name: "NIB & SIUP", status: "pending" },
      { name: "Sertifikat PSE Kominfo", status: "pending" },
    ],
    activities: [
      { time: "03 Feb 2025, 10:00", text: "Proyek resmi dimulai — konsultan telah ditugaskan", type: "success" },
      { time: "03 Feb 2025, 10:05", text: "Verifikasi KTP & NPWP pendiri selesai ✓", type: "success" },
      { time: "03 Feb 2025, 10:10", text: "Jadwal konsultasi awal dikonfirmasi: 25 Feb 2025", type: "info" },
    ],
  },
};

/* ─── Status config ─────────────────────────────────────────────────────────── */
const STATUS_CONFIG: Record<ProjectStatus, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
  selesai: { label: "Selesai", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/30", icon: <CheckCircle2 className="w-4 h-4" /> },
  proses:  { label: "Dalam Proses", color: "text-[#5FBDBE]", bg: "bg-[#5FBDBE]/10 border-[#5FBDBE]/30", icon: <RefreshCw className="w-4 h-4 animate-spin" /> },
  baru:    { label: "Baru Dimulai", color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/30", icon: <Zap className="w-4 h-4" /> },
  review:  { label: "Dalam Review", color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/30", icon: <Clock className="w-4 h-4" /> },
};

/* ─── Demo IDs ──────────────────────────────────────────────────────────────── */
const DEMO_IDS = [
  { id: "GRV-2025-001", label: "Proyek Selesai (100%)", color: "text-emerald-400" },
  { id: "GRV-2025-087", label: "Dalam Proses (60%)", color: "text-[#5FBDBE]" },
  { id: "GRV-2025-134", label: "Baru Dimulai (20%)", color: "text-blue-400" },
];

/* ─── Helper: progress color ────────────────────────────────────────────────── */
function progressGradient(p: number) {
  if (p === 100) return "from-emerald-400 to-emerald-500";
  if (p >= 50) return "from-[#5FBDBE] to-[#2C5F6F]";
  return "from-blue-400 to-blue-600";
}

/* ═══════════════════════════════════════════════════════════════════════════ */

export function ProjectTracking() {
  const [projectId, setProjectId] = useState("");
  const [phone, setPhone] = useState("");
  const [showPhone, setShowPhone] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showFAQ, setShowFAQ] = useState<number | null>(null);
  const [projects, setProjects] = useState<Record<string, Project>>(MOCK_PROJECTS);
  const [dataSource, setDataSource] = useState<"sheets" | "mock">("mock");
  const [sheetsLoading, setSheetsLoading] = useState(false);

  // Coba fetch dari Google Sheets jika sudah dikonfigurasi
  useEffect(() => {
    const sheetId = getSheetId();
    if (!sheetId) return;
    setSheetsLoading(true);
    fetchProjectsFromSheets(sheetId)
      .then((data) => {
        if (Object.keys(data).length > 0) {
          setProjects(data);
          setDataSource("sheets");
        }
      })
      .catch(() => {
        // Fallback ke mock data
        setDataSource("mock");
      })
      .finally(() => setSheetsLoading(false));
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      const found = projects[projectId.toUpperCase().trim()];
      if (found) {
        setProject(found);
      } else {
        setError("ID Proyek tidak ditemukan. Pastikan ID proyek dan nomor HP yang Anda masukkan benar.");
      }
      setLoading(false);
    }, 1200);
  }

  function fillDemo(id: string) {
    const p = MOCK_PROJECTS[id];
    setProjectId(id);
    setPhone(p.phone);
    setProject(null);
    setError("");
  }

  const cfg = project ? STATUS_CONFIG[project.status] : null;

  const faqs = [
    { q: "Bagaimana cara mendapatkan ID Proyek saya?", a: "ID Proyek dikirimkan ke nomor WhatsApp Anda saat proyek resmi dimulai. Format: GRV-YYYY-XXX. Jika belum menerima, hubungi konsultan Anda." },
    { q: "Berapa lama sekali status diperbarui?", a: "Tim kami memperbarui status proyek setiap ada progres signifikan — biasanya 2–3 kali per minggu atau setiap milestone selesai." },
    { q: "Apakah saya bisa menghubungi konsultan langsung?", a: "Ya! Setiap proyek memiliki konsultan PIC yang bisa dihubungi langsung via WhatsApp melalui tombol yang tersedia di dashboard tracking Anda." },
    { q: "Bagaimana jika proyek tidak selesai tepat waktu?", a: "Grotivy memberikan Garansi Ketepatan Waktu 100%. Jika ada keterlambatan dari pihak kami, kami memberikan kompensasi yang telah disepakati dalam kontrak layanan." },
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#071c23]">
      <SEO
        title="Project Tracking — Pantau Proyek Anda Real-Time"
        canonicalPath="/tracking"
        description="Pantau perkembangan proyek bisnis Anda bersama Grotivy secara real-time. Lacak status pendirian perusahaan, perizinan, HKI, dan layanan lainnya kapan saja dan di mana saja. Fitur eksklusif Grotivy Consultant."
        keywords="project tracking grotivy, pantau proyek konsultan, cek status perizinan, tracking pendirian PT, status layanan grotivy, grotivy dashboard klien"
        structuredData={[
          buildBreadcrumbSchema([
            { name: "Beranda", path: "/" },
            { name: "Track Proyek", path: "/tracking" },
          ]),
        ]}
      />
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#5FBDBE]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#2C5F6F]/15 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 border border-[#5FBDBE]/30 rounded-full px-5 py-2.5 mb-6">
              <div className="w-2 h-2 bg-[#5FBDBE] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#5FBDBE]">Real-Time Project Tracking</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Pantau Proyek Anda{" "}
            <span className="bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] bg-clip-text text-transparent">
              Secara Real-Time
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Transparansi penuh 24/7 — lihat progres, dokumen, dan aktivitas terbaru proyek konsultasi bisnis Anda kapan saja, di mana saja.
          </motion.p>

          {/* ── Search form ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-left shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <Search className="w-5 h-5 text-[#5FBDBE]" />
              <h2 className="text-white font-bold text-lg">Cek Status Proyek</h2>
            </div>

            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">ID Proyek</label>
                <input
                  type="text"
                  placeholder="Contoh: GRV-2025-001"
                  value={projectId}
                  onChange={e => setProjectId(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#5FBDBE]/60 focus:bg-white/10 transition-all font-mono tracking-wider"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Nomor HP Terdaftar</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type={showPhone ? "text" : "password"}
                    placeholder="08xxxxxxxxxx"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-12 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#5FBDBE]/60 focus:bg-white/10 transition-all"
                    required
                  />
                  <button type="button" onClick={() => setShowPhone(v => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
                    {showPhone ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#5FBDBE]/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <><RefreshCw className="w-5 h-5 animate-spin" /> Mengecek...</>
                ) : (
                  <><Search className="w-5 h-5" /> Cek Status Proyek</>
                )}
              </button>
            </form>

            {/* Demo shortcuts */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-500 mb-3 flex items-center gap-1.5">
                <Lock className="w-3 h-3" /> Demo — Coba salah satu ID berikut:
              </p>
              <div className="flex flex-wrap gap-2">
                {DEMO_IDS.map(d => (
                  <button
                    key={d.id}
                    onClick={() => fillDemo(d.id)}
                    className="text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 hover:bg-white/10 transition-all flex items-center gap-1.5"
                  >
                    <span className="font-mono text-white">{d.id}</span>
                    <span className={d.color}>— {d.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Project Dashboard ── */}
      <AnimatePresence>
        {project && cfg && (
          <motion.section
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
          >
            {/* Header card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-sm text-[#5FBDBE] bg-[#5FBDBE]/10 border border-[#5FBDBE]/20 rounded-lg px-3 py-1">
                      {project.id}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 border rounded-full px-3 py-1 text-sm font-semibold ${cfg.bg} ${cfg.color}`}>
                      {cfg.icon} {cfg.label}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-1">{project.service}</h2>
                  <p className="text-gray-400 flex items-center gap-2">
                    <User className="w-4 h-4" />{project.clientName} —
                    <Briefcase className="w-4 h-4 ml-1" />{project.company}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/${project.consultantPhone}?text=${encodeURIComponent(`Halo, saya ${project.clientName} ingin menanyakan proyek ${project.id}`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4" /> Hubungi Konsultan
                  </a>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400 font-medium">Progress Keseluruhan</span>
                  <span className={`font-bold ${cfg.color}`}>{project.progress}%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    className={`h-full bg-gradient-to-r ${progressGradient(project.progress)} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
                  </motion.div>
                </div>
                <div className="flex justify-between text-xs text-gray-600 mt-2">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Mulai: {project.startDate}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Target: {project.estimatedFinish}</span>
                </div>
              </div>

              {/* Info badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10">
                {[
                  { icon: <Briefcase className="w-4 h-4" />, label: "Layanan", val: project.serviceType },
                  { icon: <User className="w-4 h-4" />, label: "Konsultan PIC", val: project.consultant },
                  { icon: <Calendar className="w-4 h-4" />, label: "Tanggal Mulai", val: project.startDate },
                  { icon: <Clock className="w-4 h-4" />, label: "Target Selesai", val: project.estimatedFinish },
                ].map((info, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-1">{info.icon} {info.label}</div>
                    <p className="text-white text-sm font-semibold">{info.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Main grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Timeline (2/3) */}
              <div className="lg:col-span-2 space-y-6">
                {/* Steps */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  <h3 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#5FBDBE]" /> Timeline & Milestone
                  </h3>
                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10" />
                    <div className="space-y-6">
                      {project.steps.map((step, i) => (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex gap-5 relative"
                        >
                          {/* Circle */}
                          <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${
                            step.status === "done"
                              ? "bg-emerald-400/20 border-emerald-400 text-emerald-400"
                              : step.status === "active"
                              ? "bg-[#5FBDBE]/20 border-[#5FBDBE] text-[#5FBDBE]"
                              : "bg-white/5 border-white/10 text-gray-600"
                          }`}>
                            {step.status === "done" ? (
                              <CheckCircle2 className="w-5 h-5" />
                            ) : step.status === "active" ? (
                              <RefreshCw className="w-5 h-5 animate-spin" />
                            ) : (
                              <span className="text-sm font-bold">{step.id}</span>
                            )}
                          </div>
                          {/* Content */}
                          <div className={`flex-1 rounded-2xl p-4 border transition-all ${
                            step.status === "done"
                              ? "bg-emerald-400/5 border-emerald-400/20"
                              : step.status === "active"
                              ? "bg-[#5FBDBE]/10 border-[#5FBDBE]/30 shadow-lg shadow-[#5FBDBE]/10"
                              : "bg-white/3 border-white/5"
                          }`}>
                            <div className="flex items-center justify-between mb-1">
                              <p className={`font-semibold text-sm ${
                                step.status === "done" ? "text-emerald-400" :
                                step.status === "active" ? "text-[#5FBDBE]" : "text-gray-500"
                              }`}>{step.label}</p>
                              {step.status === "active" && (
                                <span className="text-xs bg-[#5FBDBE]/20 text-[#5FBDBE] border border-[#5FBDBE]/30 rounded-full px-2 py-0.5 font-semibold">
                                  Sedang Berjalan
                                </span>
                              )}
                            </div>
                            <p className={`text-xs ${step.status === "pending" ? "text-gray-600" : "text-gray-400"}`}>{step.desc}</p>
                            <p className="text-xs text-gray-600 mt-1">{step.date}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Activity feed */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-[#5FBDBE]" /> Aktivitas Terbaru
                  </h3>
                  <div className="space-y-4">
                    {project.activities.map((act, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`flex gap-4 p-4 rounded-xl border ${
                          act.type === "success" ? "bg-emerald-400/5 border-emerald-400/15" :
                          act.type === "warning" ? "bg-yellow-400/5 border-yellow-400/15" :
                          "bg-white/3 border-white/8"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          act.type === "success" ? "bg-emerald-400/20 text-emerald-400" :
                          act.type === "warning" ? "bg-yellow-400/20 text-yellow-400" :
                          "bg-[#5FBDBE]/20 text-[#5FBDBE]"
                        }`}>
                          {act.type === "success" ? <CheckCircle2 className="w-4 h-4" /> :
                           act.type === "warning" ? <AlertCircle className="w-4 h-4" /> :
                           <Bell className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="text-white text-sm">{act.text}</p>
                          <p className="text-gray-600 text-xs mt-0.5">{act.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar (1/3) */}
              <div className="space-y-6">
                {/* Documents */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <h3 className="text-white font-bold mb-5 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#5FBDBE]" /> Dokumen
                  </h3>
                  <div className="space-y-3">
                    {project.documents.map((doc, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          doc.status === "verified" ? "bg-emerald-400" :
                          doc.status === "received" ? "bg-[#5FBDBE]" :
                          "bg-gray-600"
                        }`} />
                        <p className={`text-xs flex-1 ${doc.status === "pending" ? "text-gray-600" : "text-gray-300"}`}>
                          {doc.name}
                        </p>
                        {doc.status === "verified" && (
                          <div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 rounded px-1.5 py-0.5">
                            <CheckCircle2 className="w-3 h-3" />
                            <span className="text-[10px] font-semibold">Valid</span>
                          </div>
                        )}
                        {doc.status === "pending" && (
                          <span className="text-[10px] text-gray-600 font-medium">Menunggu</span>
                        )}
                      </div>
                    ))}
                  </div>
                  {project.status === "selesai" && (
                    <button className="w-full mt-5 flex items-center justify-center gap-2 bg-[#5FBDBE]/10 border border-[#5FBDBE]/30 text-[#5FBDBE] rounded-xl py-3 text-sm font-semibold hover:bg-[#5FBDBE]/20 transition-all">
                      <Download className="w-4 h-4" /> Unduh Semua Dokumen
                    </button>
                  )}
                </div>

                {/* Guarantee badge */}
                <div className="bg-gradient-to-br from-[#5FBDBE]/15 to-[#2C5F6F]/20 border border-[#5FBDBE]/30 rounded-3xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-2xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Garansi 100%</p>
                      <p className="text-xs text-gray-400">Grotivy Consultant</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "Tepat waktu atau kompensasi",
                      "Dokumen legal valid & sah",
                      "Revisi tidak terbatas",
                      "Konsultasi sepanjang proses",
                    ].map((g, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5FBDBE] flex-shrink-0" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consultant card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <p className="text-gray-500 text-xs mb-4 uppercase tracking-wider">Konsultan PIC Anda</p>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {project.consultant.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{project.consultant}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo ${project.consultant}, saya ingin menanyakan proyek ${project.id}`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-3 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-green-500/20 transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4" /> Chat via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h3 className="text-white font-bold text-2xl mb-8 text-center">Pertanyaan Umum</h3>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <button
                onClick={() => setShowFAQ(showFAQ === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-white font-medium text-sm">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#5FBDBE] flex-shrink-0 ml-4 transition-transform ${showFAQ === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {showFAQ === i && (
                  <motion.div
                    initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm text-gray-400 border-t border-white/10 pt-4">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Belum menjadi klien Grotivy? Mulai konsultasi gratis sekarang.</p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Grotivy, saya ingin memulai konsultasi gratis.")}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#5FBDBE]/30 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" /> Konsultasi Gratis Sekarang
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}