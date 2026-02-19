import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Shield, CheckCircle2, Clock, Star, Award, ThumbsUp,
  FileCheck, ArrowRight, MessageCircle, Zap, RefreshCw
} from "lucide-react";

const WA_NUMBER = "6283861537366";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Grotivy, saya ingin tahu lebih lanjut tentang Garansi 100% Anda.")}`;

const guarantees = [
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Garansi Tepat Waktu",
    tagline: "Selesai sesuai jadwal atau kami beri kompensasi",
    desc: "Kami berkomitmen menyelesaikan setiap proyek tepat waktu sesuai timeline yang disepakati. Jika terjadi keterlambatan dari pihak kami, Anda berhak mendapatkan kompensasi.",
    points: [
      "Timeline tertulis & terikat kontrak",
      "Progress report mingguan",
      "Kompensasi jika terlambat",
    ],
    gradient: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.25)",
    badge: "On-Time",
  },
  {
    icon: <FileCheck className="w-7 h-7" />,
    title: "Garansi Dokumen Legal Valid",
    tagline: "100% dokumen sah & diakui secara hukum",
    desc: "Seluruh dokumen yang kami proses dijamin valid secara hukum, diakui instansi pemerintah, dan sesuai regulasi yang berlaku. Jika ada masalah legalitas, kami tangani tanpa biaya tambahan.",
    points: [
      "Akta & SK dari notaris terakreditasi",
      "Diterima semua instansi pemerintah",
      "Revisi gratis jika ada kekeliruan",
    ],
    gradient: "from-[#5FBDBE] to-[#2C5F6F]",
    glow: "rgba(95,189,190,0.25)",
    badge: "Legal Valid",
  },
  {
    icon: <ThumbsUp className="w-7 h-7" />,
    title: "Garansi Kepuasan 100%",
    tagline: "Revisi tidak terbatas hingga Anda puas",
    desc: "Kepuasan Anda adalah prioritas utama. Kami menyediakan revisi tidak terbatas dalam lingkup pekerjaan hingga Anda benar-benar puas dengan hasilnya.",
    points: [
      "Revisi unlimited dalam scope",
      "Konsultasi sepanjang proses",
      "Tidak puas? Kami perbaiki",
    ],
    gradient: "from-purple-500 to-pink-500",
    glow: "rgba(168,85,247,0.25)",
    badge: "Satisfaction",
  },
  {
    icon: <RefreshCw className="w-7 h-7" />,
    title: "Garansi Tracking Transparan",
    tagline: "Pantau setiap langkah proyek Anda real-time",
    desc: "Dengan sistem Project Tracking eksklusif kami, Anda bisa memantau progres 24/7 — tidak ada informasi yang disembunyikan dari klien.",
    points: [
      "Dashboard real-time 24/7",
      "Notifikasi setiap milestone",
      "Akses langsung ke konsultan PIC",
    ],
    gradient: "from-emerald-500 to-green-400",
    glow: "rgba(16,185,129,0.25)",
    badge: "Transparan",
  },
];

// Big stamp visual
function GuaranteeStamp() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
      whileInView={{ scale: 1, opacity: 1, rotate: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      className="relative w-52 h-52 mx-auto"
    >
      {/* Outer ring animated */}
      <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#5FBDBE]/40 animate-spin" style={{ animationDuration: "20s" }} />
      <div className="absolute inset-3 rounded-full border-2 border-[#5FBDBE]/30" />

      {/* Main stamp */}
      <div className="absolute inset-5 bg-gradient-to-br from-[#5FBDBE]/20 to-[#2C5F6F]/30 backdrop-blur-xl rounded-full border-2 border-[#5FBDBE]/50 flex flex-col items-center justify-center shadow-2xl shadow-[#5FBDBE]/20">
        <Shield className="w-10 h-10 text-[#5FBDBE] mb-1" />
        <p className="text-4xl font-black text-white leading-none">100%</p>
        <p className="text-[#5FBDBE] font-bold text-sm tracking-widest uppercase mt-0.5">GARANSI</p>
        <p className="text-gray-400 text-[9px] tracking-wider uppercase mt-1">Grotivy Consultant</p>
      </div>

      {/* Stars */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 + i * 0.3, delay: i * 0.2 }}
          className="absolute"
          style={{
            top: "50%", left: "50%",
            transform: `rotate(${deg}deg) translateY(-96px) translate(-50%, -50%)`,
          }}
        >
          <Star className="w-3 h-3 text-[#5FBDBE] fill-[#5FBDBE]" />
        </motion.div>
      ))}
    </motion.div>
  );
}

export function GuaranteeSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#5FBDBE08_1px,transparent_1px),linear-gradient(to_bottom,#5FBDBE08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#5FBDBE]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 border border-[#5FBDBE]/20 rounded-full px-5 py-2.5 mb-6">
              <Award className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm font-bold text-[#2C5F6F] tracking-wide uppercase">Jaminan Kualitas</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2C5F6F] mb-6">
              Garansi{" "}
              <span className="bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] bg-clip-text text-transparent">
                100%
              </span>{" "}
              Untuk Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami tidak sekadar berjanji — kami mengikat komitmen dalam kontrak. Kepuasan dan keberhasilan bisnis Anda adalah tanggung jawab kami.
            </p>
          </motion.div>
        </div>

        {/* Stamp + tagline */}
        <div className="flex flex-col items-center mb-20">
          <GuaranteeStamp />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-500 mt-6 max-w-lg text-sm"
          >
            Sejak 2022, lebih dari <strong className="text-[#2C5F6F]">500+ klien</strong> di seluruh Indonesia telah merasakan komitmen garansi kami — dan <strong className="text-[#2C5F6F]">0 klaim pengembalian</strong> karena kami selalu menepati janji.
          </motion.p>
        </div>

        {/* 4 Guarantee cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {guarantees.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${g.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${g.glow}, transparent 70%)` }}
              />

              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className={`text-xs font-bold text-white bg-gradient-to-r ${g.gradient} rounded-full px-3 py-1`}>
                  {g.badge}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${g.gradient} rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {g.icon}
              </div>

              <h3 className="text-xl font-bold text-[#2C5F6F] mb-2 group-hover:text-[#2C5F6F]">{g.title}</h3>
              <p className="text-sm font-semibold text-[#5FBDBE] mb-4 italic">"{g.tagline}"</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{g.desc}</p>

              <ul className="space-y-2">
                {g.points.map((pt, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 bg-gradient-to-br ${g.gradient} rounded-full p-0.5 text-white`} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#071c23] to-[#0d2830] rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#5FBDBE]/15 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#2C5F6F]/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#5FBDBE]" />
                <span className="text-[#5FBDBE] font-semibold text-sm">Berani Bergaransi, Karena Kami Ahlinya</span>
              </div>
              <h3 className="text-3xl font-bold mb-3">
                Siap Mulai Proyek dengan Garansi 100%?
              </h3>
              <p className="text-gray-400 max-w-lg">
                Konsultasi gratis pertama, kontrak jelas, garansi tertulis. Kami hanya sukses jika Anda sukses — itu filosofi kami sejak 2022.
              </p>
              <div className="flex flex-wrap gap-4 mt-5">
                {["✓ Garansi tertulis di kontrak", "✓ Konsultasi pertama gratis", "✓ Tidak ada biaya tersembunyi"].map((t, i) => (
                  <span key={i} className="text-sm text-gray-400">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href={WA_URL}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" /> Klaim Garansi Saya
              </a>
              <Link
                to="/tracking"
                className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/15 transition-all duration-300 whitespace-nowrap"
              >
                Pantau Proyek Saya <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}