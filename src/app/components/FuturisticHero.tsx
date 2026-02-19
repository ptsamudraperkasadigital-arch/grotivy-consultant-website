import { Link } from "react-router";
import { ArrowRight, Sparkles, TrendingUp, CheckCircle, Users, Clock } from "lucide-react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

const WA_NUMBER = "6283861537366";
const WA_MESSAGE = "Halo Grotivy Consultant, saya ingin konsultasi gratis mengenai kebutuhan bisnis saya.";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

const metrics = [
  { label: "Kepuasan Klien", value: 98, color: "from-[#5FBDBE] to-[#2C5F6F]" },
  { label: "Proyek Berhasil", value: 95, color: "from-emerald-400 to-emerald-600" },
  { label: "Tepat Waktu", value: 92, color: "from-violet-400 to-violet-600" },
];

const notifications = [
  { icon: <CheckCircle className="w-4 h-4 text-emerald-400" />, text: "PT Maju Bersama — Pendirian selesai", time: "2 jam lalu" },
  { icon: <TrendingUp className="w-4 h-4 text-[#5FBDBE]" />, text: "Glow Beauty — Revenue +300%", time: "Kemarin" },
  { icon: <Users className="w-4 h-4 text-violet-400" />, text: "Bank Nusantara — Audit selesai", time: "3 hari lalu" },
];

export function FuturisticHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#071c23] via-[#0d2830] to-[#071c23] text-white overflow-hidden flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-0 -left-40 w-[500px] h-[500px] bg-[#5FBDBE] rounded-full blur-[150px] opacity-35"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-[#2C5F6F] rounded-full blur-[150px] opacity-40"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT COPY ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 mb-8 border border-white/10"
            >
              <Sparkles className="w-5 h-5 text-[#5FBDBE]" />
              <span className="text-sm font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                One Stop Business Solution — Terpercaya sejak 2022
              </span>
            </motion.div>

            {/* Main Heading — Bahasa Indonesia, outcome-driven */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            >
              Dari Pendirian PT hingga{" "}
              <span className="bg-gradient-to-r from-[#5FBDBE] via-[#7dd5d6] to-[#5FBDBE] bg-clip-text text-transparent">
                Transformasi Digital
              </span>
              {" "}— Satu Partner untuk Semua
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-400 mb-12 leading-relaxed max-w-xl"
            >
              50+ layanan bisnis dalam satu atap: legalitas, strategi, keuangan, HR, digital marketing,
              hingga publikasi media nasional. Konsultasi pertama{" "}
              <span className="text-white font-semibold">100% gratis</span>, respon dalam{" "}
              <span className="text-[#5FBDBE] font-semibold">&lt;1 jam</span>.
            </motion.p>

            {/* CTA Buttons — WhatsApp as Primary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* PRIMARY: WhatsApp */}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#25D366] to-[#128C7E] px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                <span className="relative z-10">Konsultasi Gratis via WhatsApp</span>
              </a>

              {/* SECONDARY: Services */}
              <Link
                to="/all-services"
                className="inline-flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Lihat 50+ Layanan Kami
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            {/* Micro-copy trust */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-4 text-xs text-gray-500 flex items-center gap-2"
            >
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              Tanpa biaya tersembunyi &nbsp;•&nbsp;
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              Tanpa komitmen awal &nbsp;•&nbsp;
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              Respon &lt;1 jam
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-8 mt-12 pt-12 border-t border-white/10"
            >
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#5FBDBE] to-white bg-clip-text text-transparent">
                  500+
                </div>
                <p className="text-sm text-gray-400 mt-1">Klien Seluruh Indonesia</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#5FBDBE] to-white bg-clip-text text-transparent">
                  50+
                </div>
                <p className="text-sm text-gray-400 mt-1">Jenis Layanan</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#5FBDBE] to-white bg-clip-text text-transparent">
                  4+
                </div>
                <p className="text-sm text-gray-400 mt-1">Tahun Pengalaman</p>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT — Professional Dashboard Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Main dashboard card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Grotivy Dashboard</p>
                  <p className="text-white font-semibold mt-1">Performa Konsultasi</p>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium">Live</span>
                </div>
              </div>

              {/* Metrics with progress bars */}
              <div className="space-y-5 mb-6">
                {metrics.map((m, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-gray-300">{m.label}</span>
                      <span className="text-sm font-bold text-white">{m.value}%</span>
                    </div>
                    <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${m.value}%` }}
                        transition={{ duration: 1.2, delay: 0.6 + i * 0.15, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${m.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 mb-5" />

              {/* Recent activity */}
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Aktivitas Terkini</p>
              <div className="space-y-3">
                {notifications.map((n, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
                    className="flex items-center gap-3 bg-white/5 rounded-xl px-3 py-2.5"
                  >
                    <div className="flex-shrink-0">{n.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-200 truncate">{n.text}</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 flex-shrink-0">
                      <Clock className="w-3 h-3" />
                      <span className="text-[10px]">{n.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating stat — top right */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-2xl px-5 py-4 shadow-2xl border border-white/20"
            >
              <p className="text-2xl font-bold">98%</p>
              <p className="text-xs text-white/80 mt-0.5">Klien Puas</p>
            </motion.div>

            {/* Floating stat — bottom left */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl px-5 py-4 shadow-2xl border border-white/20"
            >
              <p className="text-2xl font-bold">&lt;1 Jam</p>
              <p className="text-xs text-white/80 mt-0.5">Waktu Respon</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}