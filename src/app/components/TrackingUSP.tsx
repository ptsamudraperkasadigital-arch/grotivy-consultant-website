import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Eye, RefreshCw, Bell, Shield, CheckCircle2, ArrowRight,
  Smartphone, Lock, Award, Zap, FileText, MessageCircle
} from "lucide-react";

const WA_NUMBER = "6283861537366";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Grotivy, saya ingin memulai proyek dan menikmati fitur Project Tracking.")}`;

const features = [
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Transparansi Penuh",
    desc: "Lihat setiap tahap pengerjaan proyek Anda secara real-time — tidak ada yang disembunyikan.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Notifikasi Otomatis",
    desc: "Dapatkan update langsung via WhatsApp setiap kali ada progres baru atau milestone selesai.",
    color: "from-[#5FBDBE] to-[#2C5F6F]",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Akses Dokumen 24/7",
    desc: "Pantau status setiap dokumen — dari draft hingga dokumen legal final yang sudah terbit.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Konsultan Siap Sedia",
    desc: "Hubungi konsultan PIC Anda kapan saja langsung dari dashboard tracking proyek.",
    color: "from-green-400 to-emerald-500",
  },
];

// Mini mock tracker visual
function MiniTrackerMockup() {
  const steps = [
    { label: "Verifikasi Dokumen", done: true },
    { label: "Konsultasi & Analisis", done: true },
    { label: "Penyusunan Legal", active: true },
    { label: "Pengajuan Instansi", done: false },
    { label: "Selesai & Serah Terima", done: false },
  ];

  return (
    <div className="bg-[#071c23]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">ID Proyek</p>
          <p className="text-xs font-mono text-[#5FBDBE] font-bold">GRV-2025-087</p>
        </div>
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#5FBDBE] bg-[#5FBDBE]/10 border border-[#5FBDBE]/30 rounded-full px-2.5 py-1">
          <RefreshCw className="w-2.5 h-2.5 animate-spin" /> Dalam Proses
        </span>
      </div>

      {/* Progress */}
      <div className="mb-5">
        <div className="flex justify-between text-[10px] text-gray-500 mb-1.5">
          <span>Progress</span><span className="text-[#5FBDBE] font-bold">60%</span>
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }} animate={{ width: "60%" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="h-full bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] rounded-full"
          />
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-2.5">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
              step.done ? "bg-emerald-400/20 text-emerald-400" :
              step.active ? "bg-[#5FBDBE]/20 text-[#5FBDBE] ring-2 ring-[#5FBDBE]/30" :
              "bg-white/5 text-gray-700"
            }`}>
              {step.done
                ? <CheckCircle2 className="w-3 h-3" />
                : step.active
                ? <RefreshCw className="w-3 h-3 animate-spin" />
                : <div className="w-1.5 h-1.5 rounded-full bg-current" />
              }
            </div>
            <p className={`text-[11px] ${
              step.done ? "text-gray-400 line-through" :
              step.active ? "text-white font-semibold" :
              "text-gray-700"
            }`}>{step.label}</p>
            {step.active && (
              <span className="ml-auto text-[9px] text-[#5FBDBE] bg-[#5FBDBE]/10 rounded px-1.5 py-0.5 font-semibold">Aktif</span>
            )}
          </div>
        ))}
      </div>

      {/* Separator */}
      <div className="border-t border-white/8 my-4" />

      {/* Notification */}
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="flex items-start gap-2.5 bg-[#5FBDBE]/8 border border-[#5FBDBE]/15 rounded-xl p-3"
      >
        <Bell className="w-3.5 h-3.5 text-[#5FBDBE] mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-[10px] text-white font-semibold">Update Baru</p>
          <p className="text-[10px] text-gray-400 mt-0.5">14 dari 24 SOP operasional selesai disusun ✓</p>
        </div>
      </motion.div>
    </div>
  );
}

export function TrackingUSP() {
  return (
    <section className="py-28 bg-gradient-to-br from-[#0a2330] via-[#071c23] to-[#0a2330] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#5FBDBE]/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#2C5F6F]/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* USP Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5FBDBE]/20 to-[#2C5F6F]/20 border border-[#5FBDBE]/30 rounded-full px-5 py-2.5 mb-6">
            <Zap className="w-4 h-4 text-[#5FBDBE]" />
            <span className="text-sm font-bold text-[#5FBDBE] tracking-wide uppercase">Keunggulan Eksklusif #1 di Indonesia</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pantau Proyek Anda{" "}
            <span className="bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] bg-clip-text text-transparent">
              Real-Time
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Satu-satunya konsultan bisnis di Indonesia yang memberi klien akses{" "}
            <span className="text-white font-semibold">dashboard tracking proyek langsung</span> — transparansi penuh, tidak ada yang disembunyikan.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Floating glow */}
            <div className="absolute -inset-8 bg-[#5FBDBE]/10 rounded-3xl blur-2xl" />
            {/* Device frame */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-1 border border-white/20 shadow-2xl">
              <div className="bg-[#0d2030] rounded-2xl p-4">
                {/* Mock browser bar */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  <div className="flex-1 bg-white/5 rounded-lg px-3 py-1 flex items-center gap-2">
                    <Lock className="w-2.5 h-2.5 text-gray-600" />
                    <span className="text-[10px] text-gray-600">grotivy.id/tracking</span>
                  </div>
                  <Smartphone className="w-3.5 h-3.5 text-gray-600" />
                </div>
                <MiniTrackerMockup />
              </div>
            </div>

            {/* Floating badge: Live */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-emerald-400 text-white text-xs font-bold rounded-full px-3 py-1.5 shadow-lg shadow-emerald-500/40 flex items-center gap-1.5"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              LIVE UPDATE
            </motion.div>

            {/* Floating badge: Notif */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-[#5FBDBE]" />
                <div>
                  <p className="text-white text-xs font-semibold">Progres Diperbarui</p>
                  <p className="text-gray-400 text-[10px]">2 menit yang lalu</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-start gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-[#5FBDBE]/30 hover:bg-white/8 transition-all duration-300 cursor-default"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feat.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{feat.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/tracking"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-6 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#5FBDBE]/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <Eye className="w-4 h-4" /> Cek Status Proyek
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={WA_URL}
                target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white px-6 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-green-400" /> Mulai Proyek Baru
              </a>
            </div>
          </motion.div>
        </div>

        {/* Differentiator stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: <Eye className="w-5 h-5" />, val: "24/7", label: "Akses Dashboard", sub: "Pantau kapan saja" },
            { icon: <RefreshCw className="w-5 h-5" />, val: "Real-Time", label: "Status Update", sub: "Setiap ada progres" },
            { icon: <Shield className="w-5 h-5" />, val: "100%", label: "Transparansi", sub: "Tanpa informasi tersembunyi" },
            { icon: <Award className="w-5 h-5" />, val: "#1", label: "Di Indonesia", sub: "Konsultan dengan tracking" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center hover:border-[#5FBDBE]/30 transition-all"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-white mb-0.5">{stat.val}</p>
              <p className="text-sm font-semibold text-[#5FBDBE]">{stat.label}</p>
              <p className="text-xs text-gray-600 mt-1">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
