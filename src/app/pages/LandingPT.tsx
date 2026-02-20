import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle, Star, Shield, Clock, ChevronDown, Phone,
  FileText, TrendingUp, Building2, Zap, Award, Gift,
  Users, ArrowRight, AlertCircle, BookOpen, Palette, Tag
} from "lucide-react";

// ─── COUNTDOWN HOOK ────────────────────────────────────────────────────────────
function useCountdown(targetDate: Date) {
  const calc = () => {
    const diff = targetDate.getTime() - Date.now();
    if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 };
    return {
      hours: Math.floor(diff / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// ─── COUNTDOWN DISPLAY ─────────────────────────────────────────────────────────
function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-900 text-white rounded-xl px-4 py-3 min-w-[70px] text-center shadow-lg border border-red-500">
        <span className="text-4xl font-black tabular-nums">{String(value).padStart(2, "0")}</span>
      </div>
      <span className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{label}</span>
    </div>
  );
}

// ─── FAQ ITEM ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800 pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#2C5F6F] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-gray-600 leading-relaxed bg-gray-50 border-t border-gray-100">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── WA BUTTON ─────────────────────────────────────────────────────────────────
function WAButton({ text = "KLAIM PROMO SEKARANG →", size = "lg" }: { text?: string; size?: "sm" | "lg" }) {
  return (
    <a
      href="https://wa.me/6283861537366?text=Halo%20Grotivy%2C%20saya%20ingin%20mendirikan%20PT%20dengan%20promo%20pra%20Ramadhan.%20Boleh%20info%20lebih%20lanjut%3F"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black rounded-full shadow-xl hover:shadow-green-500/40 hover:scale-105 transition-all duration-300 ${
        size === "lg" ? "px-10 py-5 text-xl" : "px-6 py-3 text-base"
      }`}
    >
      <svg className={size === "lg" ? "w-7 h-7" : "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.12 1.531 5.847L.057 23.25c-.094.35.207.668.563.563l5.404-1.474A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.74-.505-5.3-1.393l-.38-.225-3.205.874.889-3.204-.247-.394A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
      {text}
    </a>
  );
}

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────────
export function LandingPT() {
  // Countdown: sampai 1 Maret 2026 (akhir periode pra-Ramadhan)
  const deadline = new Date("2026-03-01T00:00:00+07:00");
  const time = useCountdown(deadline);
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Kepercayaan Klien Melonjak Seketika",
      desc: "Customer jauh lebih yakin transfer ke rekening atas nama PT dibandingkan rekening pribadi. Kredibilitas langsung naik kelas.",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "Akses Prioritas Tender Pemerintah & Korporat",
      desc: "Pintu gerbang proyek besar yang mewajibkan NIB & SK Kemenkumham kini terbuka lebar untuk bisnis Anda.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Aset Pribadi 100% Aman & Terlindungi",
      desc: "Harta keluarga Anda tidak akan terseret jika terjadi risiko utang piutang bisnis (Limited Liability).",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Validasi untuk Suntikan Modal",
      desc: "Investor dan Bank lebih mudah mencairkan dana untuk bisnis dengan legalitas yang jelas dan terdokumentasi.",
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Bisnis Bisa Diwariskan & Auto-Pilot",
      desc: "Langkah awal membangun sistem perusahaan yang profesional, bukan sekadar 'One Man Show' yang bergantung satu orang.",
    },
  ];

  const testimonials = [
    {
      name: "Bpk. Kurniawan",
      company: "PT SINERGI INFINITI SEJAHTERA BERSAMA",
      text: "Pelayanan grotivy sangat cepat dan memuaskan. Tidak menyangka proses bisa secepat ini!",
      rating: 5,
      photo: "/testimoni-kurniawan.jpg",
    },
    {
      name: "Bpk. Ahmad Fauz",
      company: "PT ANDALAS INTI NUSANTARA",
      text: "Dokumen sampai, Mitra yang Amanah dan menjadi solusi untuk pengurusan berbagai dokumen, cepat dan akurat.",
      rating: 5,
      photo: "/testimoni-fauz.jpg",
    },
    {
      name: "Bpk. Isro Doni",
      company: "PT HASANAH JAYA BERSAMA",
      text: "Dokumen lengkap dan sampai tujuan dengan amanah. Rekomendasi banget untuk yang mau buat PT!",
      rating: 5,
      photo: "/testimoni-isrodni.jpg",
    },
  ];

  const bonuses = [
    {
      icon: <Palette className="w-8 h-8" />,
      label: "BONUS #1",
      title: "STARTER KIT BRANDING",
      items: ["Logo Perusahaan Profesional", "Ide Konten Promosi 1 Tahun"],
      desc: "Agar PT Anda langsung bonafit dan siap promosi dari hari pertama.",
      originalPrice: "3.000.000",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: <Tag className="w-8 h-8" />,
      label: "BONUS #2",
      title: "VOUCHER LEGALITAS",
      items: ["Voucher HKI Merek", "Voucher Sertifikasi Halal", "Voucher Pembuatan Website"],
      desc: "Potongan harga eksklusif untuk layanan legalitas lanjutan bisnis Anda.",
      originalPrice: "1.500.000",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      label: "BONUS #3",
      title: "40 EBOOK BISNIS",
      items: ["Manajemen Bisnis", "Keuangan Perusahaan", "Marketing & Branding"],
      desc: "Library ilmu bisnis lengkap untuk memandu Anda membesarkan PT.",
      originalPrice: "2.000.000",
      color: "from-orange-500 to-orange-700",
    },
  ];

  const checklist = [
    { text: "Cek Nama PT Gratis", highlight: false },
    { text: "Sertifikat Pendirian PT (Akta Notaris)", highlight: false },
    { text: "SK Kemenkumham (Resmi Berbadan Hukum)", highlight: false },
    { text: "NIB — Izin Usaha Resmi", highlight: false },
    { text: "NPWP Perusahaan", highlight: false },
    { text: "Rekening Perusahaan Aktif", highlight: true },
    { text: "Akun OSS RBA", highlight: false },
    { text: "Pengiriman Dokumen Fisik GRATIS ke Rumah", highlight: true },
    { text: "BAYAR SETELAH JADI — Tanpa DP", highlight: true },
    { text: "Bonus Konsultasi Bisnis (Senilai Rp 2.500.000)", highlight: false },
    { text: "Voucher HKI Merek (Senilai Rp 1.500.000)", highlight: false },
    { text: "Voucher Sertifikasi Halal (Senilai Rp 2.500.000)", highlight: false },
    { text: "Voucher Pembuatan Website (Senilai Rp 500.000)", highlight: false },
    { text: "Logo Perusahaan Profesional GRATIS (Senilai Rp 500.000)", highlight: true },
    { text: "Ide Konten Promosi 1 Tahun Penuh", highlight: false },
    { text: "40 Ebook Bisnis Premium", highlight: false },
  ];

  const faqs = [
    {
      q: "Kenapa harus PT, tidak CV saja?",
      a: "PT merupakan badan usaha yang memiliki keuntungan jauh lebih besar dibanding CV. PT memiliki kredibilitas tinggi di mata klien dan investor, memungkinkan partisipasi dalam tender pemerintah, lebih dipercaya bank untuk pinjaman modal, dan memiliki akses yang lebih luas untuk kegiatan bisnis apapun. PT juga memberikan perlindungan aset pribadi yang tidak dimiliki CV.",
    },
    {
      q: "Apakah dokumen fisik akan dikirim ke rumah saya?",
      a: "Ya, jelas! Seluruh dokumen fisik akan kami kirimkan ke alamat rumah atau kantor Anda secara GRATIS tanpa biaya pengiriman tambahan. Selain itu, kami juga akan mengirimkan seluruh dokumen dalam bentuk softcopy/digital ke email Anda.",
    },
    {
      q: "Apakah ini penipuan? Kok harganya murah banget?",
      a: "Kami menjamin 100% legal dan sah di mata pemerintah. Dalam setiap transaksi, kami hanya menggunakan rekening resmi perusahaan BCA No. 4452287432 atas nama PT Samudra Perkasa Digital — yang pasti terjamin keamanannya. Visi Grotivy adalah membantu meningkatkan ekonomi Indonesia dengan harga yang terjangkau untuk para pengusaha.",
    },
    {
      q: "Apakah bisa sekalian buat rekening perusahaan?",
      a: "Ya, bisa! Pembuatan rekening perusahaan sudah termasuk dalam paket layanan kami. Tim kami akan memandu proses pembukaan rekening atas nama PT Anda.",
    },
    {
      q: "Berapa lama proses pendirian PT-nya?",
      a: "Proses pendirian PT kami selesaikan dalam 1-2 hari kerja untuk proses administrasi online (AHU, NIB, NPWP). Dokumen fisik akan tiba di tangan Anda dalam 3-7 hari kerja setelahnya tergantung lokasi pengiriman.",
    },
    {
      q: "Apakah ada biaya tersembunyi setelah bayar?",
      a: "Tidak ada sama sekali! Harga yang tertera sudah all-in termasuk biaya notaris, biaya pemerintah (PNBP), dan biaya pengiriman dokumen. Anda hanya bayar satu kali setelah PT jadi.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── ANNOUNCEMENT BAR ── */}
      <div className="bg-red-600 text-white text-center py-3 px-4 sticky top-0 z-50">
        <p className="text-sm font-semibold animate-pulse">
          🔥 PROMO RAMADHAN 2026 — Diskon Besar-Besaran! Berakhir 28 Mar 2026 &nbsp;|&nbsp;
          <a href="https://wa.me/6283861537366" target="_blank" rel="noopener noreferrer" className="underline font-black">
            Hubungi Kami Sekarang
          </a>
        </p>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-[#0d2e3a] via-[#1a4a5c] to-[#2C5F6F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#5FBDBE] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#5FBDBE] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 pt-10 pb-16 text-center">
          {/* Logo */}
          <img src="/logo.png" alt="Grotivy Consultant" className="h-16 mx-auto mb-8 drop-shadow-lg" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-green-500/40"
          >
            <Shield className="w-4 h-4" />
            GARANSI BAYAR SETELAH JADI — TANPA DP!
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6"
          >
            Jasa Pendirian PT Resmi &{" "}
            <span className="text-[#5FBDBE]">Bonafit</span>{" "}
            <br className="hidden sm:block" />
            Tanpa Was-Was Uang Hilang
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Kami urus seluruh legalitas —{" "}
            <span className="text-[#5FBDBE] font-semibold">AHU, NIB, NPWP, AMDAL, SPPL, REKENING PERUSAHAAN</span>{" "}
            — sampai tuntas dalam <strong className="text-white">1–2 hari kerja</strong>.
            Anda cukup duduk tenang, dokumen jadi, <em>baru</em> lakukan pembayaran.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {["✅ Legal & Resmi", "🏛️ Kemenkumham", "⚡ 1–2 Hari Kerja", "🔒 100% Aman", "🎁 Bonus Jutaan Rupiah"].map((b) => (
              <span key={b} className="bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full">
                {b}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <WAButton text="DAPATKAN PROMO SEKARANG →" />
          </motion.div>

          <p className="text-gray-400 text-sm mt-4">
            Atau hubungi kami via WhatsApp:{" "}
            <a href="tel:+6283861537366" className="text-[#5FBDBE] font-semibold">+62 838-6153-7366</a>
          </p>
        </div>

        {/* Stats bar */}
        <div className="bg-white/10 backdrop-blur border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { n: "500+", l: "Klien Aktif" },
              { n: "2022", l: "Berdiri Sejak" },
              { n: "1–2 Hari", l: "Proses Selesai" },
              { n: "100%", l: "Legal Resmi" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-black text-[#5FBDBE]">{s.n}</div>
                <div className="text-gray-300 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#5FBDBE] font-bold uppercase tracking-wider text-sm">Kata Mereka</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">
              yang Sudah Pakai Jasa Grotivy Consultant
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow overflow-hidden"
              >
                {/* Foto Testimoni */}
                <div className="relative w-full h-52 overflow-hidden bg-gray-100">
                  <img
                    src={t.photo}
                    alt={`Testimoni ${t.name}`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow" />
                    ))}
                  </div>
                </div>

                {/* Konten */}
                <div className="p-6">
                  <p className="text-gray-700 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-[#2C5F6F]">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 text-gray-500 font-medium">
            Dan <span className="text-[#2C5F6F] font-black">ratusan testimoni lainnya</span> yang sangat memuaskan... ⭐
          </div>
        </div>
      </section>

      {/* ── BENEFITS OF PT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#5FBDBE] font-bold uppercase tracking-wider text-sm">Kenapa Perlu PT?</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">
              Yang Akan Anda Dapatkan Jika Bisnis
              <br />
              <span className="text-[#2C5F6F]">Sudah Berbadan Hukum Resmi (PT)</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-[#5FBDBE] hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {b.icon}
                </div>
                <h3 className="font-black text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}

            {/* Extra card for the 5th benefit spanning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#2C5F6F] to-[#5FBDBE] rounded-2xl p-6 text-white"
            >
              <div className="text-5xl mb-4">💼</div>
              <h3 className="font-black text-xl mb-2">Sudah Siap?</h3>
              <p className="text-white/90 text-sm mb-4">Ratusan pengusaha Indonesia sudah buktikan manfaatnya. Giliran Anda sekarang!</p>
              <button
                onClick={scrollToPricing}
                className="bg-white text-[#2C5F6F] px-5 py-2 rounded-full font-black text-sm hover:bg-gray-100 transition"
              >
                Lihat Harga Promo →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM → SOLUTION ── */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-[#0d2e3a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-400 px-5 py-2 rounded-full text-sm font-bold mb-8">
              <AlertCircle className="w-4 h-4" />
              MASALAH YANG SERING DIRASAKAN
            </div>

            <h2 className="text-3xl font-black mb-6">
              Mengurus Izin Sendiri Itu Bikin{" "}
              <span className="text-red-400">Pusing, Mahal, dan Lama...</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                { emoji: "😵", label: "Birokrasi Berbelit", desc: "Bolak-balik instansi, antri panjang, dokumen ditolak berulang kali" },
                { emoji: "💸", label: "Biaya Membengkak", desc: "Biaya jasa tidak transparan, muncul tagihan baru di tengah proses" },
                { emoji: "⏰", label: "Buang Waktu Berbulan-bulan", desc: "Proses berlarut membuat Anda tidak bisa fokus mengembangkan bisnis" },
              ].map((p) => (
                <div key={p.label} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl mb-3">{p.emoji}</div>
                  <h3 className="font-black text-white mb-2">{p.label}</h3>
                  <p className="text-gray-400 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-[#5FBDBE] text-3xl font-black mb-4">↓ SOLUSINYA ↓</div>

            <div className="bg-gradient-to-r from-[#5FBDBE]/20 to-[#2C5F6F]/20 border border-[#5FBDBE]/40 rounded-3xl p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-black text-[#5FBDBE] mb-4">
                Jasa Pembuatan PT Full Service
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Layanan <strong className="text-white">POWERFUL</strong> yang memangkas waktu birokrasi{" "}
                <span className="text-yellow-400 font-bold">berbulan-bulan menjadi hitungan hari</span>,
                sehingga Anda bisa <strong className="text-white">fokus jualan dan membesarkan omzet</strong>{" "}
                tanpa terganggu urusan administrasi.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BONUSES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-sm font-bold mb-4">
              <Gift className="w-4 h-4" />
              BONUS SPESIAL UNTUK ANDA
            </div>
            <h2 className="text-3xl font-black text-gray-900">
              Dapatkan 3 Bonus Bernilai Jutaan Rupiah
              <br />
              <span className="text-[#2C5F6F]">Gratis Untuk Anda!</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bonuses.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-[#5FBDBE] hover:shadow-2xl transition-all"
              >
                <div className={`bg-gradient-to-r ${b.color} p-5 text-white`}>
                  <div className="text-xs font-black tracking-widest opacity-80 mb-1">{b.label}</div>
                  <div className="flex items-center gap-3">
                    {b.icon}
                    <h3 className="font-black text-lg">{b.title}</h3>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-2 mb-4">
                    {b.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-500 text-xs mb-4">{b.desc}</p>
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                    <span className="text-gray-500 text-sm">Nilai Bonus</span>
                    <div className="text-right">
                      <div className="text-gray-400 line-through text-sm">Rp {b.originalPrice}</div>
                      <div className="text-green-600 font-black">GRATIS!</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLETE CHECKLIST ── */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#5FBDBE] font-bold uppercase tracking-wider text-sm">Apa Saja yang Didapat?</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">
              Paket Pendirian PT Grotivy —
              <br />
              <span className="text-[#2C5F6F]">Semua Sudah Termasuk!</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <div className="grid grid-cols-1 gap-3">
              {checklist.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-center gap-4 p-3 rounded-xl ${item.highlight ? "bg-green-50 border border-green-200" : "hover:bg-gray-50"}`}
                >
                  <CheckCircle className={`w-6 h-6 flex-shrink-0 ${item.highlight ? "text-green-600" : "text-[#5FBDBE]"}`} />
                  <span className={`${item.highlight ? "font-black text-green-700" : "text-gray-700 font-medium"}`}>
                    {item.text}
                  </span>
                  {item.highlight && (
                    <span className="ml-auto text-xs bg-green-500 text-white px-2 py-1 rounded-full font-bold whitespace-nowrap">
                      SPESIAL
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#2C5F6F] to-[#5FBDBE] rounded-2xl p-6 text-white text-center">
              <p className="text-sm opacity-80 mb-1">Total Nilai Keseluruhan Paket</p>
              <p className="text-4xl font-black">Rp 6.880.000</p>
              <p className="text-sm mt-1 opacity-80">Semua GRATIS kecuali biaya jasa pendirian PT</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING + COUNTDOWN ── */}
      <section ref={pricingRef} className="py-20 bg-gradient-to-br from-[#0d2e3a] to-[#2C5F6F] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-black mb-6 animate-pulse">
              🔥 PROMO SPESIAL RAMADHAN 2026
            </div>

            <h2 className="text-3xl font-black mb-2">Berapa Harganya?</h2>
            <p className="text-gray-300 mb-8">Promo berakhir dalam:</p>

            {/* Countdown */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <CountdownBox value={time.hours} label="Jam" />
              <span className="text-4xl font-black text-[#5FBDBE] mb-4">:</span>
              <CountdownBox value={time.minutes} label="Menit" />
              <span className="text-4xl font-black text-[#5FBDBE] mb-4">:</span>
              <CountdownBox value={time.seconds} label="Detik" />
            </div>

            {/* Price box */}
            <div className="bg-white rounded-3xl p-8 text-gray-900 mb-8 shadow-2xl">
              <p className="text-gray-500 mb-2">Harga Normal</p>
              <p className="text-3xl font-black text-gray-400 line-through mb-4">Rp 5.580.000</p>

              <div className="bg-red-100 text-red-600 rounded-full px-6 py-2 inline-block font-black text-lg mb-6">
                🎉 HEMAT Rp 3.735.000!
              </div>

              <div>
                <p className="text-gray-500 mb-1">Harga Promo Anda Hari Ini</p>
                <p className="text-6xl font-black text-[#2C5F6F]">
                  Rp 1.845.000
                </p>
                <p className="text-gray-500 text-sm mt-2">Bayar SETELAH PT jadi — tanpa DP, tanpa risiko</p>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-2xl text-sm text-yellow-800">
                💡 Harga ini setara <strong>1x gaji staf admin</strong> — tapi Anda mendapatkan{" "}
                <strong>legalitas bisnis seumur hidup</strong> dan bonus senilai Rp 6.880.000!
              </div>
            </div>

            {/* Quota warning */}
            <div className="bg-red-500/20 border border-red-500/40 rounded-2xl p-5 mb-8">
              <div className="flex items-center justify-center gap-2 text-red-300 font-black text-lg">
                <Users className="w-6 h-6" />
                ⚠️ KUOTA TERSISA: 5 ORANG TERCEPAT HARI INI
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Penawaran ini akan hilang setelah kuota terpenuhi atau periode promo berakhir
              </p>
            </div>

            <WAButton text="YA, SAYA MAU KLAIM PROMO INI →" />

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-green-400" /> Transaksi Aman 100%</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> Bayar Setelah Jadi</span>
              <span className="flex items-center gap-1"><FileText className="w-4 h-4 text-green-400" /> Dokumen Legal Resmi</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROMO HUNTER SECTION ── */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900">
              Jika Anda adalah{" "}
              <span className="text-yellow-600">PEMBURU DISKON & PROMO...</span>
            </h2>
            <p className="text-gray-600 mt-2">Dapatkan semua bonus ini GRATIS saat transaksi sekarang!</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-yellow-200 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-white text-center">
              <Gift className="w-12 h-12 mx-auto mb-2" />
              <h3 className="text-2xl font-black">TOTAL BONUS GRATIS</h3>
              <p className="text-5xl font-black mt-2">Rp 6.880.000</p>
            </div>
            <div className="p-8 grid grid-cols-1 gap-3">
              {[
                { item: "40 Ebook Ilmu Bisnis Premium", val: "Rp 500.000" },
                { item: "Konten Kalender Promosi 1 Tahun Penuh", val: "Rp 500.000" },
                { item: "Pengiriman Dokumen ke Seluruh Indonesia", val: "GRATIS" },
                { item: "Bayar SETELAH Jadi (No DP)", val: "✅ TERJAMIN" },
                { item: "Konsultasi Bisnis Eksklusif", val: "Rp 2.500.000" },
                { item: "Voucher HKI Merek Dagang", val: "Rp 1.500.000" },
                { item: "Voucher Sertifikasi Halal BPJPH", val: "Rp 2.500.000" },
                { item: "Voucher Pembuatan Website Profesional", val: "Rp 380.000" },
                { item: "Pembuatan LOGO Perusahaan", val: "Rp 300.000" },
              ].map((r) => (
                <div key={r.item} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{r.item}</span>
                  </div>
                  <span className={`font-black text-sm whitespace-nowrap ml-4 ${r.val === "GRATIS" || r.val === "✅ TERJAMIN" ? "text-green-600" : "text-[#2C5F6F]"}`}>
                    {r.val}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-8 pb-8 text-center">
              <p className="text-gray-500 text-sm mb-4">
                Total manfaat di atas mencapai{" "}
                <strong className="text-[#2C5F6F]">Rp 6.880.000</strong>{" "}
                — dan Anda cukup bayar
              </p>
              <p className="text-5xl font-black text-[#2C5F6F] mb-2">Rp 1.845.000</p>
              <p className="text-sm text-red-500 font-semibold mb-6">⏰ Kuota hanya 5 orang tercepat hari ini!</p>
              <WAButton />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#5FBDBE] font-bold uppercase tracking-wider text-sm">FAQ</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">
              Pertanyaan yang Ada di Pikiran Anda
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#2C5F6F] to-[#5FBDBE] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🏆</div>
            <h2 className="text-3xl font-black mb-4">
              Jadikan Bisnis Anda Resmi & Bonafit
              <br />Mulai Hari Ini!
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Bergabung dengan <strong>500+ pengusaha Indonesia</strong> yang sudah mempercayakan legalitas bisnisnya kepada Grotivy Consultant.
            </p>
            <WAButton text="KONSULTASI GRATIS SEKARANG →" />
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <span>📞 +62 838-6153-7366</span>
              <span>🌐 grotivyconsultant.my.id</span>
              <span>⏰ Respon dalam 5 Menit</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
        <img src="/logo.png" alt="Grotivy Consultant" className="h-10 mx-auto mb-4 opacity-80" />
        <p className="mb-2">
          <strong className="text-white">PT Samudra Perkasa Digital</strong> — Grotivy Consultant
        </p>
        <p className="mb-1">Rekening BCA: 4452287432 a/n PT Samudra Perkasa Digital</p>
        <p className="mb-4">One Stop Business Solution · Berdiri Sejak 2022</p>
        <div className="flex justify-center gap-6">
          <a href="/" className="hover:text-white transition">Beranda</a>
          <a href="/pendirian-perusahaan" className="hover:text-white transition">Layanan PT</a>
          <a href="/blog" className="hover:text-white transition">Blog</a>
          <a href="/contact" className="hover:text-white transition">Kontak</a>
        </div>
        <p className="mt-6 text-xs text-gray-600">© 2026 Grotivy Consultant. All rights reserved.</p>
      </footer>
    </div>
  );
}