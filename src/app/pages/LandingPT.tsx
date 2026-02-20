import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
// Letakkan file "Produk.jpg" di folder /public, lalu path ini akan otomatis terbaca
const productImage = "/Produk.jpg";
// Letakkan file "testimoni-kurniawan.jpg" di folder /public
const heroTestimonialImage = "/testimoni-kurniawan.jpg";

// ─── META PIXEL ────────────────────────────────────────────────────────────────
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _fbq: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clarity: any;
  }
}

// ─── MICROSOFT CLARITY ─────────────────────────────────────────────────────────
const CLARITY_ID = "vkbyrebe57";

function initClarity() {
  if (typeof window === "undefined" || window.clarity) return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c = window as any;
  c["clarity"] = c["clarity"] || function (...args: unknown[]) {
    (c["clarity"].q = c["clarity"].q || []).push(args);
  };
  const t = document.createElement("script");
  t.async = true;
  t.src = "https://www.clarity.ms/tag/" + CLARITY_ID;
  const y = document.getElementsByTagName("script")[0];
  y.parentNode?.insertBefore(t, y);
}

const META_PIXEL_ID = "520138225624460";

function initMetaPixel() {
  if (typeof window === "undefined" || window.fbq) return;
  // Inline Meta Pixel base code
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const n: any = function (...args: unknown[]) {
    n.callMethod ? n.callMethod(...args) : n.queue.push(args);
  };
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  window.fbq = n;
  window._fbq = n;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
}

function trackLead() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead");
  }
}

// ─── SCROLL SECTION TRACKER ────────────────────────────────────────────────────
function trackScrollSection(sectionName: string) {
  if (typeof window === "undefined") return;

  // ── Meta Pixel — Custom Event
  if (window.fbq) {
    window.fbq("trackCustom", "ScrollSection", { section: sectionName });
    console.debug(`[Meta Pixel] ScrollSection → ${sectionName}`);
  }

  // ── Microsoft Clarity — dual approach:
  //    (1) clarity("event", ...) : tampil di Custom Events Clarity
  //    (2) clarity("set", ...)   : tampil sebagai Custom Tag → bisa difilter di dashboard
  if (window.clarity) {
    window.clarity("event", `scroll_${sectionName}`);
    window.clarity("set", "scroll_section", sectionName);
    console.debug(`[Clarity] event=scroll_${sectionName} | tag scroll_section=${sectionName}`);
  } else {
    console.warn(`[Clarity] window.clarity belum tersedia saat section="${sectionName}" terdeteksi`);
  }
}

function useScrollSectionTracking() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-track-section]");
    if (!sections.length) return;

    const fired = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const name = (entry.target as HTMLElement).dataset.trackSection;
            if (name && !fired.has(name)) {
              fired.add(name);
              trackScrollSection(name);
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
import {
  CheckCircle, Star, Shield, Clock, ChevronDown, Phone,
  FileText, TrendingUp, Building2, Zap, Award,
  ArrowRight, AlertCircle
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
      onClick={trackLead}
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
  // ── Init Meta Pixel (PageView)
  useEffect(() => { initMetaPixel(); }, []);

  // ── Init Microsoft Clarity
  useEffect(() => { initClarity(); }, []);

  // ── Scroll tracking per section → Meta Pixel + Clarity
  useScrollSectionTracking();

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

  const checklist = [
    { text: "Cek Nama PT Gratis", highlight: false },
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
          🔥 PROMO RAMADHAN 2026 — Diskon Besar-Besaran! &nbsp;|&nbsp;
          <a href="https://wa.me/6283861537366" target="_blank" rel="noopener noreferrer" onClick={trackLead} className="underline font-black">
            Hubungi Kami Sekarang
          </a>
        </p>
      </div>

      {/* ── HERO / SECTION 1 : PROBLEM SETUP ── */}
      <section data-track-section="hero" className="relative bg-gradient-to-br from-[#0d2e3a] via-[#1a4a5c] to-[#2C5F6F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#5FBDBE] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#5FBDBE] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-2xl mx-auto px-4 pt-10 pb-16 text-center">
          {/* Logo */}
          <img src="/logo.png" alt="Grotivy Consultant" className="h-14 mx-auto mb-8 drop-shadow-lg" />

          {/* ── (1) HEADLINE ── */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-xs font-black mb-5 shadow-lg">
              🔥 PROMO RAMADHAN 2026 — TERBATAS!
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
              Mau Bikin PT Tapi Takut{" "}
              <span className="text-red-400 underline decoration-wavy decoration-red-400/60">
                Kena Tipu & Uang Hilang?
              </span>
            </h1>
          </motion.div>

          {/* ── (2) SUB-HEADLINE ── */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-gray-200 max-w-xl mx-auto mb-8 leading-relaxed"
          >
            Tenang! Cara bikin PT sekarang bisa{" "}
            <span className="text-[#5FBDBE] font-black">tanpa DP, tanpa antri, tanpa bolak-balik kantor</span>
            {" "}— cukup chat, semua dokumen beres{" "}
            <strong className="text-white">1–2 hari kerja</strong> dan dikirim ke rumah Anda.
          </motion.p>

          {/* ── (3) IMAGE MOCKUP ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 }}
            className="relative mx-auto mb-8 max-w-sm"
          >
            {/* Dokumen mockup card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#5FBDBE]/40">
              {/* Testimonial header */}
              <div className="bg-[#075e54] px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-white text-xs font-semibold">WhatsApp — Testimoni Klien ⭐</span>
              </div>
              <img
                src={heroTestimonialImage}
                alt="Testimoni Klien Grotivy - Dokumen legalitas sudah diterima"
                className="w-full object-cover"
              />
              <div className="p-5 text-left bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Status Pendirian PT</p>
                    <p className="font-black text-green-600 text-sm">✅ SELESAI & TERKIRIM</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { label: "SK Kemenkumham", status: "✅" },
                    { label: "NIB OSS", status: "✅" },
                    { label: "NPWP Perusahaan", status: "✅" },
                    { label: "Rekening BCA", status: "✅" },
                    { label: "Dokumen Fisik", status: "🚚 Dikirim" },
                  ].map((d) => (
                    <div key={d.label} className="flex items-center justify-between bg-gray-50 rounded-lg px-2 py-1.5">
                      <span className="text-gray-600">{d.label}</span>
                      <span className="font-bold text-green-600">{d.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* floating badge */}
            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg rotate-6">
              BAYAR SETELAH JADI!
            </div>
          </motion.div>

          {/* ── (4) AGITATE ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-red-500/15 border border-red-400/40 rounded-2xl p-5 mb-8 text-left"
          >
            <p className="text-red-300 font-black text-center mb-3 flex items-center justify-center gap-2">
              <AlertCircle className="w-5 h-5" />
              ⚠️ MAKIN LAMA BISNIS TANPA PT, MAKIN RUGI!
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-black mt-0.5">✗</span>
                <span>Klien besar <strong className="text-white">tidak mau transfer ke rekening pribadi</strong> — bisnis stagnasi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-black mt-0.5">✗</span>
                <span>Tender pemerintah & korporat <strong className="text-white">tertutup</strong> karena tidak punya legalitas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-black mt-0.5">✗</span>
                <span>Aset & harta keluarga <strong className="text-white">ikut terseret</strong> jika ada masalah hutang bisnis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-black mt-0.5">✗</span>
                <span>Tidak bisa mengajukan <strong className="text-white">PINJAMAN BANK</strong> — bisnis Anda susah berkembang karena bank butuh legalitas</span>
              </li>
            </ul>
          </motion.div>

          {/* ── (5) CALL TO ACTION ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45 }}
            className="space-y-4"
          >
            <WAButton text="KLAIM PROMO SEKARANG — BAYAR SETELAH JADI →" />
            <p className="text-gray-400 text-sm">
              📞 <a href="tel:+6283861537366" className="text-[#5FBDBE] font-semibold hover:underline">+62 838-6153-7366</a>
              {" "}· Respon dalam 5 menit · 500+ klien puas
            </p>
          </motion.div>
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

      {/* ── SECTION 2 : PROBLEM → SOLUTION ── */}
      <section data-track-section="masalah" className="py-20 bg-gradient-to-br from-gray-900 to-[#0d2e3a] text-white">
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

      {/* ── SECTION 3 : BENEFITS OF PT ── */}
      <section data-track-section="manfaat_pt" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#5FBDBE] font-bold uppercase tracking-wider text-sm">Kenapa Perlu PT?</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">
              Yang Akan Anda Dapatkan Jika Bisnis
              <br />
              <span className="text-[#2C5F6F]">Sudah Berbadan Hukum Resmi (PT) Perorangan</span>
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

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
           SECTION 4 : PRODUCT BRIDGING — FBM
           (8) HEADLINE → (9) MOCKUP → (10) FBM → (11) CTA
      ══════════════════════════════════════════════════ */}
      <section data-track-section="produk_fbm" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">

          {/* ── (8) HEADLINE — masalah lain yang relate ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-block bg-red-100 text-red-600 text-xs font-black px-4 py-1.5 rounded-full mb-5 tracking-wide">
              😤 MASALAH YANG RELATE BANGET
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              Sama seperti kamu, <span className="text-[#2C5F6F]">PENGUSAHA SUKSES</span>{" "}
              juga tidak mau mengurus PT yang{" "}
              <span className="text-red-500 underline decoration-wavy">RIBET, LAMA, DAN BERBELIT</span>
            </h2>
          </motion.div>

          {/* ── (9) IMAGE MOCKUP ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative mb-8"
          >
            {/* Stack mockup effect — 3 "document cards" */}
            <div className="relative mx-auto w-full max-w-sm">
              {/* Shadow card belakang kanan */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 translate-x-6 w-[88%] h-full bg-[#5FBDBE]/20 rounded-3xl border-2 border-[#5FBDBE]/30 rotate-3" />
              {/* Shadow card belakang kiri */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-x-6 w-[88%] h-full bg-[#2C5F6F]/15 rounded-3xl border-2 border-[#2C5F6F]/20 -rotate-3" />

              {/* Kartu utama */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#5FBDBE]/50 z-10">
                {/* Header kartu */}
                <div className="bg-gradient-to-r from-[#2C5F6F] to-[#5FBDBE] px-6 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white/70 text-xs">Grotivy Consultant</p>
                    <p className="text-white font-black text-sm">PAKET PENDIRIAN PT LENGKAP</p>
                  </div>
                  <div className="ml-auto bg-green-400 text-white text-xs font-black px-2 py-1 rounded-full">RESMI</div>
                </div>

                {/* Foto Produk Asli */}
                <img
                  src={productImage}
                  alt="Paket Pendirian PT Lengkap - SK Kemenkumham, NIB, NPWP, Rekening Perusahaan"
                  className="w-full object-cover"
                />
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-black px-5 py-2 rounded-full shadow-lg whitespace-nowrap z-20">
                ⚡ SELESAI DALAM 1–2 HARI KERJA
              </div>
            </div>
          </motion.div>

          {/* ── (10) FITUR — BENEFIT — MEANING ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-10 bg-gradient-to-br from-[#f0fafa] to-white border-2 border-[#5FBDBE]/40 rounded-3xl p-7 text-left shadow-sm mb-8"
          >
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              Layanan{" "}
              <span className="font-black text-[#2C5F6F]">FULL SERVICE yang mengurus SEMUA dokumen PT dari A–Z</span>{" "}
              <span className="text-gray-400 italic text-sm">(fitur)</span>
              , namun sangat{" "}
              <span className="font-black text-[#5FBDBE]">POWERFUL untuk memangkas proses berbulan-bulan menjadi hanya 1–2 hari kerja</span>{" "}
              <span className="text-gray-400 italic text-sm">(benefit)</span>
              , sehingga bisnis Anda{" "}
              <span className="font-black text-green-600">LANGSUNG LEGAL, profesional, dan siap tembus klien serta pasar yang lebih besar</span>{" "}
              <span className="text-gray-400 italic text-sm">(meaning)</span>
              .
            </p>

            {/* Visual FBM breakdown */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { label: "FITUR", color: "bg-blue-100 border-blue-300 text-blue-700", icon: "⚙️", desc: "Full service A–Z, semua dokumen diurus" },
                { label: "BENEFIT", color: "bg-teal-100 border-teal-300 text-teal-700", icon: "⚡", desc: "Proses berbulan-bulan jadi 1–2 hari" },
                { label: "MEANING", color: "bg-green-100 border-green-300 text-green-700", icon: "🚀", desc: "Bisnis legal & siap naik kelas" },
              ].map((f) => (
                <div key={f.label} className={`${f.color} border rounded-2xl p-3 text-center`}>
                  <div className="text-2xl mb-1">{f.icon}</div>
                  <div className="text-xs font-black tracking-wider mb-1">{f.label}</div>
                  <div className="text-xs leading-snug">{f.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── (11) CALL TO ACTION ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            <WAButton text="Ya, Saya Mau PT Saya Jadi Hari Ini! →" />
            <p className="text-gray-400 text-sm mt-3">
              💬 Chat langsung · Respon &lt; 5 menit · Gratis konsultasi
            </p>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
           SECTION 5 : 3 LAYERS BONUS
           (12) HEADLINE → BONUS #1 → BONUS #2 → BONUS #3
      ══════════════════════════════════════════════════ */}
      <section data-track-section="bonus" className="py-20 bg-[#fffdf5]">
        <div className="max-w-2xl mx-auto px-4">

          {/* ── (12) HEADLINE ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-full text-sm font-black mb-5 shadow-md">
              🎁 KABAR BAIK! Khusus Kamu HARI INI
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              BONUS KHUSUS UNTUK KAMU{" "}
              <span className="text-yellow-500 underline decoration-wavy">HARI INI!!</span>
            </h2>
            <p className="text-gray-500 mt-3">
              Daftar sekarang dan dapatkan 3 bonus eksklusif ini — GRATIS, tanpa syarat tambahan.
            </p>
          </motion.div>

          {/* ── BONUS LIST ── */}
          <div className="space-y-8">

            {/* ── BONUS #1 — Starter Kit Branding ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl shadow-lg border border-yellow-100 overflow-hidden flex flex-col sm:flex-row"
            >
              <div className="sm:w-48 flex-shrink-0 relative bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center p-4 min-h-[180px]">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ28lMjBkZXNpZ24lMjBidXNpbmVzcyUyMGlkZW50aXR5JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzcxNTg3OTUxfDA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Bonus Branding"
                    className="w-32 h-40 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute left-0 top-0 w-3 h-40 bg-purple-600 rounded-l-2xl opacity-60" />
                </div>
                <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-black px-2 py-1 rounded-lg shadow">
                  #1
                </div>
              </div>
              <div className="flex-1 p-6">
                <span className="text-purple-600 font-black text-xs tracking-widest uppercase">BONUS #1</span>
                <h3 className="font-black text-gray-900 text-xl mt-1 mb-1">Starter Kit Branding Bisnis</h3>
                <p className="text-yellow-600 font-bold text-sm mb-3">
                  (Senilai{" "}
                  <span className="line-through text-gray-400 mr-1">Rp 3.000.000</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">GRATIS!</span>)
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "Bingung mau branding bisnis dari mana?" Dapatkan{" "}
                  <strong>Logo Perusahaan Profesional</strong> dan{" "}
                  <strong>Kalender Ide Konten Promosi 1 Tahun Penuh</strong> — bisnis Anda langsung tampak bonafit dan profesional dari hari pertama PT jadi.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["✅ Logo Perusahaan", "✅ Ide Konten 1 Tahun"].map((t) => (
                    <span key={t} className="bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full border border-purple-200">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Divider arrow */}
            <div className="text-center text-3xl text-yellow-400 font-black select-none">↓</div>

            {/* ── BONUS #2 — Voucher Legalitas ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-3xl shadow-lg border border-yellow-100 overflow-hidden flex flex-col sm:flex-row"
            >
              <div className="sm:w-48 flex-shrink-0 relative bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center p-4 min-h-[180px]">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1604235250721-0e4bc4a78213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNlcnRpZmljYXRlJTIwZG9jdW1lbnQlMjBzdGFtcCUyMG9mZmljaWFsfGVufDF8fHx8MTc3MTU4Nzk1NHww&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Bonus Legalitas"
                    className="w-32 h-40 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute left-0 top-0 w-3 h-40 bg-blue-600 rounded-l-2xl opacity-60" />
                </div>
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-black px-2 py-1 rounded-lg shadow">
                  #2
                </div>
              </div>
              <div className="flex-1 p-6">
                <span className="text-blue-600 font-black text-xs tracking-widest uppercase">BONUS #2</span>
                <h3 className="font-black text-gray-900 text-xl mt-1 mb-1">Voucher Paket Legalitas Lengkap</h3>
                <p className="text-yellow-600 font-bold text-sm mb-3">
                  (Senilai{" "}
                  <span className="line-through text-gray-400 mr-1">Rp 4.380.000</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">GRATIS!</span>)
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "Ada apa yang perlu diperhatikan kalau sudah punya PT?" Voucher eksklusif ini memberi Anda akses potongan harga untuk{" "}
                  <strong>HKI Merek Dagang, Sertifikasi Halal BPJPH, dan Pembuatan Website Profesional</strong>{" "}
                  — legalitas bisnis Anda semakin lengkap dan tak tergoyahkan.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["🏷️ HKI Merek", "🌿 Sertifikasi Halal", "🌐 Website"].map((t) => (
                    <span key={t} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Divider arrow */}
            <div className="text-center text-3xl text-yellow-400 font-black select-none">↓</div>

            {/* ── BONUS #3 — 40 Ebook Bisnis ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-lg border border-yellow-100 overflow-hidden flex flex-col sm:flex-row"
            >
              <div className="sm:w-48 flex-shrink-0 relative bg-gradient-to-br from-orange-100 to-yellow-50 flex items-center justify-center p-4 min-h-[180px]">
                <div className="relative">
                  <div className="w-28 h-40 bg-gray-900 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-gray-700 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1532961130800-58bc2c157ce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYm9vayUyMGJ1c2luZXNzJTIwYm9vayUyMHJlYWRpbmclMjB0YWJsZXQlMjBkaWdpdGFsfGVufDF8fHx8MTc3MTU4Nzk1NHww&ixlib=rb-4.1.0&q=80&w=400"
                      alt="40 Ebook Bisnis"
                      className="absolute inset-0 w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute top-2 left-2 w-6 h-1.5 bg-white/30 rounded-full" />
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-gray-600 rounded-full" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-black px-2 py-1 rounded-lg shadow">
                  #3
                </div>
              </div>
              <div className="flex-1 p-6">
                <span className="text-orange-500 font-black text-xs tracking-widest uppercase">BONUS #3</span>
                <h3 className="font-black text-gray-900 text-xl mt-1 mb-1">40 Ebook Bisnis Premium</h3>
                <p className="text-yellow-600 font-bold text-sm mb-3">
                  (Senilai{" "}
                  <span className="line-through text-gray-400 mr-1">Rp 500.000</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">GRATIS!</span>)
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "Ada apa yang harus diperhatikan agar bisnis terus berkembang?" Library bisnis premium ini menyajikan panduan lengkap untuk{" "}
                  <strong>Manajemen, Keuangan, Marketing & Branding</strong>{" "}
                  — semua ilmu yang Anda butuhkan untuk membesarkan PT.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["📊 Manajemen", "💰 Keuangan", "📣 Marketing"].map((t) => (
                    <span key={t} className="bg-orange-50 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full border border-orange-200">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* ── Total value + CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-7 text-center shadow-xl"
          >
            <p className="text-gray-900 font-black text-sm mb-1 tracking-wide">TOTAL NILAI 3 BONUS DI ATAS</p>
            <p className="text-5xl font-black text-gray-900 mb-1">Rp 7.880.000</p>
            <p className="text-gray-800 text-sm mb-5">Semua ini GRATIS untuk Anda — tanpa syarat tambahan!</p>
            <WAButton text="KLAIM SEMUA BONUS SEKARANG →" />
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
           SECTION 6 : SOCIAL PROOF
           (13) HEADLINE → (14) IMAGE DESC → (15) GALERI SCREENSHOT HP
      ══════════════════════════════════════════════════ */}
      <section data-track-section="testimoni" className="py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">

          {/* ── (13) HEADLINE ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/15 text-[#2C5F6F] px-5 py-2 rounded-full text-xs font-black mb-5 tracking-wider border border-[#5FBDBE]/40">
              ⭐ SOCIAL PROOF — BUKTI NYATA DARI KLIEN
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              Mereka yang Sudah{" "}
              <span className="text-[#2C5F6F]">Merasakan Manfaat</span>{" "}
              dari Jasa{" "}
              <span className="text-[#5FBDBE]">Grotivy Consultant</span>
            </h2>
          </motion.div>

          {/* ── (14) IMAGE DESCRIPTION — 1 kalimat inti ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center mb-14"
          >
            <div className="inline-block bg-gray-900 text-white text-sm italic px-5 py-2.5 rounded-xl shadow-lg">
              "Klien mendirikan PT legal, cepat, & dokumen sampai ke tangan — tanpa ribet, tanpa DP"
            </div>
          </motion.div>

          {/* ── (15) GALERI SCREENSHOT HP PORTRAIT ── */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-start">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex-1 flex flex-col items-center max-w-[260px] mx-auto sm:mx-0"
              >
                {/* ── FOTO TESTIMONI (plain, tanpa mockup) ── */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: 260 }}>
                  <img
                    src={t.photo}
                    alt={`Testimoni ${t.name}`}
                    className="w-full object-cover object-top"
                    style={{ aspectRatio: "3/4" }}
                  />
                  {/* Gradient overlay bawah */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-4">
                    <div className="flex gap-0.5 mb-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-white text-xs font-black">{t.name}</p>
                    <p className="text-white/70 text-[10px]">{t.company}</p>
                  </div>
                </div>
                {/* Teks testimoni di bawah foto */}
                <div className="mt-4 px-1">
                  <p className="text-gray-700 text-sm leading-relaxed italic">"{t.text}"</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-14 space-y-4"
          >
            <p className="text-gray-500 font-medium">
              Dan{" "}
              <span className="text-[#2C5F6F] font-black">ratusan testimoni lainnya</span>{" "}
              yang sangat memuaskan… ⭐
            </p>
            <WAButton text="Saya Juga Mau Seperti Mereka →" size="sm" />
          </motion.div>

        </div>
      </section>


      {/* ── KLIEN KAMI — MARQUEE ── */}
      <section data-track-section="klien" className="py-14 bg-white border-y border-gray-100 overflow-hidden">
        <style>{`
          @keyframes marquee-ltr {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-rtl {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee-ltr { animation: marquee-ltr 28s linear infinite; }
          .marquee-rtl { animation: marquee-rtl 28s linear infinite; }
          .marquee-ltr:hover, .marquee-rtl:hover { animation-play-state: paused; }
        `}</style>

        <div className="text-center mb-10">
          <span className="text-[#5FBDBE] font-bold uppercase tracking-wider text-sm">Klien Kami</span>
          <h2 className="text-2xl font-black text-gray-900 mt-1">
            Dipercaya oleh Perusahaan Terkemuka di Indonesia
          </h2>
        </div>

        {/* Baris 1 — kiri ke kanan */}
        <div className="relative mb-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 marquee-ltr w-max">
            {[
              "PT Sumber Makmur Indonesia",
              "PT Ratu Properti Indonesia",
              "PT Mahadaya Putra Energi",
              "PT ADA Kargo Logistik",
              "PT ITMVISION Digital Technology",
              "PT Adhitama Dwijaya Emerald",
              "PT Agriintech Renewable Energy",
              "PT Sumber Makmur Indonesia",
              "PT Ratu Properti Indonesia",
              "PT Mahadaya Putra Energi",
              "PT ADA Kargo Logistik",
              "PT ITMVISION Digital Technology",
              "PT Adhitama Dwijaya Emerald",
              "PT Agriintech Renewable Energy",
            ].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-gradient-to-br from-[#f0fafa] to-white border border-[#5FBDBE]/30 rounded-xl px-5 py-3 shadow-sm"
              >
                <span className="text-sm font-bold text-[#2C5F6F] whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Baris 2 — kanan ke kiri */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 marquee-rtl w-max">
            {[
              "PT Sarana Jaya Mandiri Electrik",
              "PT Celebes Lintas Media",
              "PT Nayaka Citra Kreasindo",
              "PT Love Bali Holiday",
              "PT Adhi Karya Utama",
              "PT Samudra Perkasa Digital",
              "Dan 500+ Klien Lainnya",
              "PT Sarana Jaya Mandiri Electrik",
              "PT Celebes Lintas Media",
              "PT Nayaka Citra Kreasindo",
              "PT Love Bali Holiday",
              "PT Adhi Karya Utama",
              "PT Samudra Perkasa Digital",
              "Dan 500+ Klien Lainnya",
            ].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-gradient-to-br from-[#2C5F6F]/5 to-white border border-[#2C5F6F]/20 rounded-xl px-5 py-3 shadow-sm"
              >
                <span className="text-sm font-bold text-[#2C5F6F] whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs mt-8">
          🏆 500+ perusahaan dari berbagai industri di seluruh Indonesia telah mempercayai Grotivy Consultant
        </p>
      </section>

      {/* ── COMPLETE CHECKLIST ── */}
      <section data-track-section="checklist" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">

          {/* ── Header ── */}
          <div className="text-center mb-14">
            <span className="text-[#5FBDBE] font-bold uppercase tracking-wider text-sm">Apa Saja yang Didapat?</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">
              Paket Pendirian PT Grotivy —
              <br />
              <span className="text-[#2C5F6F]">Semua Sudah Termasuk!</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* ── KIRI: Mockup Dokumen ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Foto dokumen utama */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2lhbCUyMGxlZ2FsJTIwZG9jdW1lbnRzJTIwY2VydGlmaWNhdGUlMjBzdGFtcCUyMG5vdGFyeXxlbnwxfHx8fDE3NzE1ODk0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dokumen PT Resmi"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2e3a]/90 via-[#0d2e3a]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-center">
                  <p className="text-xs opacity-70 mb-1">Dokumen Legal Resmi Negara</p>
                  <p className="font-black">Semua Dokumen Fisik Dikirim ke Rumah Anda</p>
                </div>
              </div>

              {/* Dokumen cards mockup */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { emoji: "🏛️", title: "SK Kemenkumham", subtitle: "Berbadan Hukum Resmi", badge: "LEGAL", badgeColor: "bg-red-600" },
                  { emoji: "🆔", title: "NIB & NPWP", subtitle: "Izin Usaha + Pajak", badge: "OSS", badgeColor: "bg-green-600" },
                  { emoji: "🏦", title: "Rekening PT", subtitle: "Rekening Perusahaan Aktif", badge: "BANK", badgeColor: "bg-purple-600" },
                ].map((doc, i) => (
                  <motion.div
                    key={doc.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.12 }}
                    className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{doc.emoji}</span>
                      <span className={`text-[10px] font-black text-white px-2 py-0.5 rounded-full ${doc.badgeColor}`}>
                        {doc.badge}
                      </span>
                    </div>
                    {/* Simulasi baris teks dokumen */}
                    <div className="space-y-1.5 mb-3">
                      <div className="h-2 bg-gray-800 rounded-full w-4/5" />
                      <div className="h-1.5 bg-gray-300 rounded-full w-3/5" />
                      <div className="h-1.5 bg-gray-200 rounded-full w-2/3" />
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[11px] font-black text-gray-800">{doc.title}</p>
                        <p className="text-[10px] text-gray-400">{doc.subtitle}</p>
                      </div>
                      {/* Stempel merah simulasi */}
                      <div className="w-8 h-8 rounded-full border-2 border-dashed border-red-400 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-red-100 border border-red-300" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Badge SEMUA TERMASUK */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-green-500 text-white rounded-2xl px-4 py-3 shadow-xl text-center"
              >
                <div className="text-2xl">✅</div>
                <div className="text-xs font-black leading-tight">SEMUA<br/>TERMASUK</div>
              </motion.div>
            </motion.div>

            {/* ── KANAN: Checklist ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6"
            >
              <div className="grid grid-cols-1 gap-2">
                {checklist.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className={`flex items-center gap-3 p-3 rounded-xl ${item.highlight ? "bg-green-50 border border-green-200" : "hover:bg-gray-50"}`}
                  >
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${item.highlight ? "text-green-600" : "text-[#5FBDBE]"}`} />
                    <span className={`text-sm flex-1 ${item.highlight ? "font-black text-green-700" : "text-gray-700 font-medium"}`}>
                      {item.text}
                    </span>
                    {item.highlight && (
                      <span className="text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-full font-black whitespace-nowrap">
                        SPESIAL
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Total nilai */}
              <div className="mt-6 bg-gradient-to-r from-[#2C5F6F] to-[#5FBDBE] rounded-2xl p-5 text-white text-center">
                <p className="text-xs opacity-80 mb-1">Total Nilai Keseluruhan Paket</p>
                <p className="text-4xl font-black">Rp 6.880.000</p>
                <p className="text-xs mt-1 opacity-80">Semua GRATIS kecuali biaya jasa pendirian PT</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── (19) OFFERING + (20) SCARCITY + (21) CTA — tepat setelah checklist ── */}
      <section ref={pricingRef} data-track-section="harga" className="py-12 bg-white">
        <div className="max-w-lg mx-auto px-4 space-y-4">

          {/* ── (19) OFFERING ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-2 border-red-500 rounded-xl overflow-hidden"
          >
            <div className="bg-red-500 text-white text-center py-3 px-4">
              <p className="font-black text-sm tracking-wide">Total yang akan kamu dapatkan</p>
            </div>
            <div className="bg-white p-6 text-center">
              <p className="text-gray-500 text-sm mb-1">Senilai</p>
              <p className="text-gray-400 line-through text-2xl font-black mb-4">Rp 6.880.000</p>
              <div className="border-t border-dashed border-gray-200 pt-4 mb-4">
                <p className="text-gray-700 font-black text-base mb-2">Menjadi Hanya</p>
                <p className="text-gray-400 line-through text-lg font-semibold mb-2">Rp 5.580.000</p>
                <div className="inline-block bg-red-500 text-white rounded-lg px-8 py-3">
                  <p className="font-black text-3xl">Rp 1.845.000</p>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 mt-4">
                <p className="text-red-600 font-black text-sm">
                  Diskon 73% hanya <span className="uppercase">BERLAKU HARI INI SAJA!</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── (20) SCARCITY ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white px-4 py-6"
          >
            {/* Circular progress rings */}
            <div className="flex items-center justify-center gap-8 mb-5">
              {([ 
                { value: 0,            max: 24, label: "JAM",   color: "#9ca3af", textColor: "#6b7280" },
                { value: time.minutes, max: 60, label: "MENIT", color: "#f97316", textColor: "#f97316" },
                { value: time.seconds, max: 60, label: "DETIK", color: "#ef4444", textColor: "#ef4444" },
              ] as const).map((t) => {
                const R = 30;
                const C = 2 * Math.PI * R;
                const progress = t.value / t.max;
                const offset = C * (1 - progress);
                return (
                  <div key={t.label} className="flex flex-col items-center gap-1">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r={R} fill="none" stroke="#e5e7eb" strokeWidth="5" />
                      <circle
                        cx="40" cy="40" r={R}
                        fill="none"
                        stroke={t.color}
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray={C}
                        strokeDashoffset={offset}
                        style={{ transform: "rotate(-90deg)", transformOrigin: "center", transition: "stroke-dashoffset 0.5s ease" }}
                      />
                      <text x="40" y="45" textAnchor="middle" fontSize="18" fontWeight="900" fill={t.textColor} fontFamily="sans-serif">
                        {t.value}
                      </text>
                    </svg>
                    <span className="text-[11px] font-black tracking-widest" style={{ color: t.textColor }}>{t.label}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-gray-600 text-sm leading-relaxed italic">
              Ingat, diskon 73% hanya berlaku sebelum waktu menunjukkan{" "}
              <strong className="not-italic">00:00:00</strong>, setelah itu kembali ke harga{" "}
              <strong className="not-italic">NORMAL!</strong>
            </p>
          </motion.div>

          {/* ── (21) CALL TO ACTION ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href={`https://wa.me/6283861537366?text=${encodeURIComponent("Halo Grotivy, saya ingin klaim promo pendirian PT hari ini!")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackLead}
              className="flex items-stretch w-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-black transition-all border-2 border-red-700 rounded overflow-hidden shadow-md"
            >
              <span className="flex items-center justify-center bg-red-700 px-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
                  <rect x="9" y="3" width="6" height="4" rx="1"/>
                  <line x1="9" y1="12" x2="15" y2="12"/>
                  <line x1="9" y1="16" x2="13" y2="16"/>
                </svg>
              </span>
              <span className="flex-1 text-center text-sm py-4 px-3 uppercase tracking-wide">
                AKU INGIN KLAIM PROMO PENDIRIAN PT SEKARANG!
              </span>
            </a>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
           SECTION 7 : HANDLING OBJECTION
      ══════════════════════════════════════════════════ */}
      <section data-track-section="objeksi" className="py-14 bg-white">
        <div className="max-w-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-gray-300 rounded-sm px-6 py-8 space-y-5 text-center"
          >
            <p className="font-black text-gray-900 text-base">Bayangkan...</p>

            <p className="text-gray-700 text-sm leading-relaxed">
              Kita selalu percaya bahwa{" "}
              <strong className="text-red-600">waktu adalah hal yang lebih berharga daripada uang</strong>,
              betul? Karena{" "}
              <span className="underline">waktu yang terlewat tidak bisa didapatkan kembali</span>.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed">
              Lantas, kenapa kita seringkali{" "}
              <strong className="italic">membuang-buang waktu berbisnis tanpa badan hukum yang jelas?</strong>
            </p>

            <p className="text-gray-700 text-sm leading-relaxed">
              Aku ingin kamu memiliki{" "}
              <strong className="text-red-600">PT yang resmi & legal</strong> agar kamu{" "}
              <span className="text-blue-600">bisa ekspansi, menangkan tender besar, dan dipercaya klien korporat</span>.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed">
              Investasi sebesar{" "}
              <strong>Rp 1.845.000</strong> akan menjadi{" "}
              <span className="underline">tidak ternilai</span> jika dibandingkan dengan{" "}
              <strong>kerugian bisnis akibat tidak punya legalitas.</strong>
            </p>

            <p className="text-gray-700 text-sm">
              Buatlah pilihanmu sekarang juga.
            </p>
          </motion.div>

          {/* CTA setelah objection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-6"
          >
            <a
              href={`https://wa.me/6283861537366?text=${encodeURIComponent("Halo Grotivy, saya ingin klaim promo pendirian PT hari ini!")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackLead}
              className="flex items-stretch w-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-black transition-all border-2 border-red-700 rounded overflow-hidden shadow-md"
            >
              <span className="flex items-center justify-center bg-red-700 px-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
                  <rect x="9" y="3" width="6" height="4" rx="1"/>
                  <line x1="9" y1="12" x2="15" y2="12"/>
                  <line x1="9" y1="16" x2="13" y2="16"/>
                </svg>
              </span>
              <span className="flex-1 text-center text-sm py-4 px-3 uppercase tracking-wide">
                YA, SAYA MAU DIRIKAN PT SEKARANG!
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section data-track-section="faq" className="py-20 bg-white">
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
      <section data-track-section="final_cta" className="py-20 bg-gradient-to-br from-[#2C5F6F] to-[#5FBDBE] text-white">
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