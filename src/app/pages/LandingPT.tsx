import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import heroImage from "figma:asset/a1db49c5a0d8bd34cd282ada977824c32c957c5e.png";
import legalDocImage from "figma:asset/ca32959bd4491a192b0cd09cbd662440a85235ff.png";

// ─── TRACKING ────────────────────────────────────────────────────────────────
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
const CLARITY_ID = "vkbyrebe57";
const META_PIXEL_ID = "520138225624460";

function initClarity() {
  if (typeof window === "undefined" || window.clarity) return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c = window as any;
  c["clarity"] = c["clarity"] || function (...args: unknown[]) { (c["clarity"].q = c["clarity"].q || []).push(args); };
  const t = document.createElement("script"); t.async = true;
  t.src = "https://www.clarity.ms/tag/" + CLARITY_ID;
  document.getElementsByTagName("script")[0].parentNode?.insertBefore(t, document.getElementsByTagName("script")[0]);
}
function initMetaPixel() {
  if (typeof window === "undefined" || window.fbq) return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const n: any = function (...args: unknown[]) { n.callMethod ? n.callMethod(...args) : n.queue.push(args); };
  n.push = n; n.loaded = true; n.version = "2.0"; n.queue = [];
  window.fbq = n; window._fbq = n;
  const s = document.createElement("script"); s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  window.fbq("init", META_PIXEL_ID); window.fbq("track", "PageView");
}
function trackLead() { if (typeof window !== "undefined" && window.fbq) window.fbq("track", "Lead"); }
function trackScrollSection(name: string) {
  if (typeof window === "undefined") return;
  if (window.fbq) window.fbq("trackCustom", "ScrollSection", { section: name });
  if (window.clarity) { window.clarity("event", `scroll_${name}`); window.clarity("set", "scroll_section", name); }
}
function useScrollSectionTracking() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-track-section]");
    const fired = new Set<string>();
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { const n = (e.target as HTMLElement).dataset.trackSection; if (n && !fired.has(n)) { fired.add(n); trackScrollSection(n); } } });
    }, { threshold: 0.25 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── COUNTDOWN ───────────────────────────────────────────────────────────────
function useCountdown(target: Date) {
  const calc = () => { const d = target.getTime() - Date.now(); if (d <= 0) return { h: 0, m: 0, s: 0 }; return { h: Math.floor(d / 3600000), m: Math.floor((d % 3600000) / 60000), s: Math.floor((d % 60000) / 1000) }; };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return t;
}

// ─── SOCIAL PROOF ────────────────────────────────────────────────────────────
const NOTIF_DATA = [
  { name: "Budi S.",   city: "Jakarta",    time: "2 menit lalu"  },
  { name: "Dewi R.",   city: "Surabaya",   time: "5 menit lalu"  },
  { name: "Hendra K.", city: "Medan",      time: "8 menit lalu"  },
  { name: "Siti A.",   city: "Semarang",   time: "12 menit lalu" },
  { name: "Rian F.",   city: "Makassar",   time: "3 menit lalu"  },
  { name: "Anita W.",  city: "Bandung",    time: "15 menit lalu" },
  { name: "Doni P.",   city: "Yogyakarta", time: "7 menit lalu"  },
  { name: "Mega L.",   city: "Palembang",  time: "1 menit lalu"  },
  { name: "Fajar N.",  city: "Balikpapan", time: "10 menit lalu" },
  { name: "Rini H.",   city: "Malang",     time: "4 menit lalu"  },
  { name: "Eko S.",    city: "Pekanbaru",  time: "6 menit lalu"  },
  { name: "Nadia C.",  city: "Denpasar",   time: "9 menit lalu"  },
];
function SocialProofNotif() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const show = (idx: number) => {
    setCurrent(idx); setVisible(true);
    timer.current = setTimeout(() => { setVisible(false); timer.current = setTimeout(() => show((idx + 1) % NOTIF_DATA.length), 3500); }, 4500);
  };
  useEffect(() => { timer.current = setTimeout(() => show(0), 6000); return () => { if (timer.current) clearTimeout(timer.current); }; }, []);
  const n = NOTIF_DATA[current];
  return (
    <div className="fixed bottom-6 left-4 z-[100] max-w-[300px]" style={{ pointerEvents: "none" }}>
      <AnimatePresence>
        {visible && (
          <motion.div key={current} initial={{ opacity: 0, y: 16, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.97 }} transition={{ duration: 0.35 }} className="bg-white border border-gray-200 rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3" style={{ pointerEvents: "auto" }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#5FBDBE" }}>
              <span className="text-white text-xs font-black">{n.name.charAt(0)}</span>
            </div>
            <div className="min-w-0">
              <p className="text-gray-900 font-black text-xs leading-snug truncate">{n.name} dari {n.city}</p>
              <p className="text-gray-500 text-xs leading-snug">baru saja mendaftar PT · {n.time}</p>
            </div>
            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── DESIGN HELPERS ──────────────────────────────────────────────────────────
const TEAL = "#5FBDBE";

function TealLine() {
  return <div className="h-[3px] rounded-full my-6" style={{ background: TEAL }} />;
}

/** Teal italic bold keyword — used for "KAN?" style */
function TK({ children }: { children: React.ReactNode }) {
  return <span className="font-black italic" style={{ color: TEAL }}>{children}</span>;
}

/** Yellow marker highlight — used for "SEGERA!" */
function Hl({ children }: { children: React.ReactNode }) {
  return <mark className="bg-yellow-300 px-1 not-italic font-black text-gray-900">{children}</mark>;
}

/** Section header:  N/ <Keyword> rest  */
function SectionHeader({ n, kw, rest }: { n: string; kw: string; rest: string }) {
  return (
    <>
      <h2 className="text-xl font-black text-gray-900 mb-0">
        {n}/ <span className="underline decoration-[3px]" style={{ textDecorationColor: TEAL, color: TEAL }}>{kw}</span>{" "}{rest}
      </h2>
      <TealLine />
    </>
  );
}

/** WhatsApp CTA button */
function WAButton({ text, small = false }: { text: string; small?: boolean }) {
  return (
    <a href="https://wa.me/6283861537366?text=Halo%20Grotivy%2C%20saya%20ingin%20mendirikan%20PT%20dengan%20promo%20Ramadhan.%20Boleh%20info%20lebih%20lanjut%3F" target="_blank" rel="noopener noreferrer" onClick={trackLead}
      className={`flex items-center justify-center gap-2 w-full font-black text-white rounded-lg transition-colors duration-200 ${small ? "py-3 px-4 text-sm" : "py-4 px-5 text-base"}`}
      style={{ background: "#16a34a" }}
      onMouseEnter={e => (e.currentTarget.style.background = "#15803d")}
      onMouseLeave={e => (e.currentTarget.style.background = "#16a34a")}
    >
      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.12 1.531 5.847L.057 23.25c-.094.35.207.668.563.563l5.404-1.474A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.74-.505-5.3-1.393l-.38-.225-3.205.874.889-3.204-.247-.394A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
      {text}
    </a>
  );
}

/** FAQ accordion */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="font-black text-gray-900 pr-6 leading-snug text-sm">{q}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <p className="pb-5 text-gray-600 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
export function LandingPT() {
  useEffect(() => { initMetaPixel(); }, []);
  useEffect(() => { initClarity(); }, []);
  useScrollSectionTracking();

  const deadline = new Date("2026-03-01T00:00:00+07:00");
  const { h, m, s } = useCountdown(deadline);

  const bonusList = [
    { emoji: "📕", item: "40 Ebook ilmu bisnis", value: "seharga Rp 500.000" },
    { emoji: "🗓️", item: "Konten kalender selama 1 tahun", value: "seharga Rp 500.000" },
    { emoji: "📦", item: "Pengiriman Dokumen GRATIS", value: "" },
    { emoji: "🔥", item: "Bayar SETELAH JADI", value: "" },
    { emoji: "🤝", item: "Bonus Konsultasi Bisnis", value: "Seharga Rp 2.500.000" },
    { emoji: "📜", item: "Voucher HKI Merek", value: "Seharga Rp 1.500.000" },
    { emoji: "✅", item: "Voucher Sertifikasi Halal", value: "Seharga Rp 2.500.000" },
    { emoji: "🌐", item: "Voucher Pembuatan Website", value: "Seharga Rp 380.000" },
    { emoji: "🎨", item: "Pembuatan LOGO GRATIS", value: "Seharga Rp 300.000" },
  ];

  const faqs = [
    { q: "Kenapa harus PT tidak CV?", a: "PT merupakan badan usaha yang memiliki keuntungan lebih dibanding CV, salah satunya adalah memiliki kredibilitas tinggi, sehingga mempermudah bisnis Anda dalam melakukan kegiatan apapun seperti berpartisipasi dalam tender, lebih dipercaya investor, dan memiliki akses yang lebih luas untuk kegiatan bisnis lainnya." },
    { q: "Apakah berkas akan dikirim ke rumah?", a: "Jelas akan kami kirim ke alamat rumah anda secara GRATIS. Selain itu kami juga akan mengirimkan dalam bentuk softcopy ke email anda." },
    { q: "Apakah ini penipuan? Kok murah banget?", a: "Kami menjamin 100% legal dan sah di pemerintah. Karena di transaksi kamipun hanya menggunakan rekening perusahaan BCA 4452287432 PT Samudra Perkasa Digital yang pasti terjamin keamanannya." },
    { q: "Apakah bisa buat rekening perusahaan?", a: "Ya Bisa.!" },
    { q: "Apakah kemahalan?", a: "Anda pasti sudah tau mahalnya jasa pembuatan PT hingga 7-10 jutaan. Sangat jauh dibanding harga kami. Visi grotivy adalah untuk membantu meningkatkan ekonomi indonesia dengan membantu para pebisnisnya." },
  ];

  const testimonials = [
    {
      photo: "/testimoni-kurniawan.jpg",
      text: "Awalnya sempet ragu, kok bikin PT murah banget biasanya sampe 10 Juta ini dapet PROMO Ramadhan cuma 2 jt-an. Eh ternyata beneran jadi dong!\n\nSaya sudah punya PT sendiri, bisa buka rekening BCA perusahaan juga. Gak nyangka banget! Padahal bisnis masih rumahan. Makasih Grotivy Consultant...",
      name: "Bu Mala", location: "Palembang",
    },
    {
      photo: "/testimoni-fauz.jpg",
      text: "Setelah bisnis saya punya PT saya jadi aman tanpa perlu khawatir dalam menjalankan bisnis. Proses cepat banget 1 hari sudah jadi. Saya jadi Pede buat nawarin kerja sama bisnis ke temen. Terima kasih Grotivy!",
      name: "Pak Udien", location: "Bandung",
    },
    {
      photo: "/testimoni-isrodni.jpg",
      text: "Karna udah punya PT saya jadi gampang dapet suntikan modal tambahan. Ditambah gampang banget buat ikut tender pemerintah. Wah ga nyangka sih, bagus banget pelayanan Grotivy ini.. Untungnya saya dapet harga diskon jadi lebih murah.. hahaha",
      name: "Pak Ahmad", location: "Jogjakarta",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif" }}>
      <SocialProofNotif />

      {/* ── TOP BAR ── */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-[520px] mx-auto px-5 py-3 flex items-center justify-between">
          <img src="/logo.png" alt="Grotivy Consultant" className="h-8" />
          <a href="https://wa.me/6283861537366" target="_blank" rel="noopener noreferrer" onClick={trackLead}
            className="text-xs font-black flex items-center gap-1.5 transition-colors"
            style={{ color: TEAL }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.12 1.531 5.847L.057 23.25c-.094.35.207.668.563.563l5.404-1.474A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.74-.505-5.3-1.393l-.38-.225-3.205.874.889-3.204-.247-.394A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
            Hubungi Kami
          </a>
        </div>
      </div>

      <div className="max-w-[520px] mx-auto px-5">

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section data-track-section="hero" className="pt-10 pb-4">

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-[2rem] font-black leading-tight text-gray-900 mb-5"
          >
            Intinya Banget Anda Pengen Bisnis Rumahan Anda Disegani Layaknya Perusahaan Profesional, Biar Klien Gak Ragu Transfer & Anda Bangga Menyandang Status 'Direktur Utama', <TK>KAN?</TK>
          </motion.h1>

          {/* Sub */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="font-semibold text-gray-900 mb-4 leading-relaxed">
            Itulah kemudian kenapa setelah melihat saingan bisnis Anda makin maju, Anda jadi tertarik mencari tahu...
          </motion.p>

          {/* Quote */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="font-black text-gray-900 mb-6 leading-relaxed">
            "Gimana sih ceritanya kerja cuma dari rumah, tapi bisa punya rekening PT resmi, tembus tender, dan omzet <span style={{ color: TEAL }}>GONG BANGET</span> pakai legalitas Grotivy!"
          </motion.p>

          <TealLine />

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Biar bisnis rumahan Anda segera berubah jadi entitas resmi & mulai terima transferan besar tanpa minder.
            </p>

            <p className="font-black text-gray-900 mb-4">
              Cuma butuh <span style={{ color: TEAL }}>4 Langkah Super Gampang</span> yang bisa Anda lakukan sekarang:
            </p>

            <ol className="space-y-2 mb-8 ml-1">
              <li className="text-gray-900">1. Klaim kuota promo ← <Hl>SEGERA!</Hl></li>
              <li className="text-gray-700">2. Chat WA CS kami ← Untuk cek ketersediaan.</li>
              <li className="text-gray-700">3. Klaim nama PT incaran Anda ← Biar gak keduluan orang lain.</li>
              <li className="text-gray-700">4. Sisanya Grotivy yang ngurus sampe beres! <span className="text-gray-400">(Anda tinggal duduk manis).</span></li>
            </ol>

            <p className="text-center text-gray-400 text-2xl select-none">↓</p>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════
            STEP 1 — KLAIM KUOTA
        ══════════════════════════════════════════════ */}
        <section data-track-section="klaim" className="py-4">
          <SectionHeader n="1" kw="Klaim" rest="Kuota Promo:" />

          <h3 className="font-black text-gray-900 text-base mb-3 leading-snug">
            Kenapa Anda harus chat WA sekarang juga?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Nama PT itu hak paten eksklusif. Kalau nama yang Anda incar keburu didaftarkan orang lain di sistem Kemenkumham, Anda tidak bisa memakainya lagi.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            CS kami akan bantu <strong>CEK KETERSEDIAAN NAMA PT ANDA SECARA GRATIS</strong> detik ini juga.
          </p>

          <WAButton text=">> KLIK DI SINI UNTUK KLAIM NAMA PT SAYA VIA WA <<" />

          <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
            (Note: Proses ini 100% Online & Terima Beres. Selama weekday & jam kerja 09.00 - 17.00, InsyaAllah CS kami fast response).
          </p>

          <TealLine />
        </section>

        {/* ══════════════════════════════════════════════
            BROWSING LOGIKA
        ══════════════════════════════════════════════ */}
        <section data-track-section="logika" className="py-2">
          <p className="font-black text-gray-900 text-sm mb-0">Browsing Logika &amp; Buktinya:</p>
          <TealLine />
          <p className="text-sm text-gray-400 italic text-center leading-relaxed mb-3">
            (Jika Anda masih ragu untuk klik tombol WA di atas, silakan cek realita di bawah ini).
          </p>
          <p className="text-center text-gray-300 text-2xl select-none mb-2">↓</p>
        </section>

        {/* ══════════════════════════════════════════════
            COMPARISON
        ══════════════════════════════════════════════ */}
        <section data-track-section="comparison" className="py-4">
          <h2 className="text-xl font-black text-gray-900 mb-6 leading-snug">
            Pak / Bu Bos, Coba Cek Anda Sedang di Fase Mana?
          </h2>

          {/* ❌ Before */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-xl border border-red-200 bg-red-50 p-5 mb-4"
          >
            <p className="font-black text-gray-900 mb-4 leading-snug">
              ❌ Bisnis Rumahan Tanpa Legalitas{" "}
              <span className="text-red-600">(Rugi &amp; Canggung):</span>
            </p>
            <ul className="space-y-3">
              {[
                { cat: "Kepercayaan", desc: "Rekening pribadi = Klien korporat ragu & mundur. Omzet hilang jutaan." },
                { cat: "Keamanan Aset", desc: "Ada sengketa/hutang = Harta & rumah keluarga terancam disita." },
                { cat: "Akses Modal", desc: "Pengajuan bank / investor = Ditolak otomatis." },
                { cat: "Birokrasi", desc: 'Urus sendiri = Pusing antri, bolak-balik instansi, & banyak biaya "siluman".' },
                { cat: "Gengsi (Lebaran)", desc: 'Ditanya relasi "Gimana bisnisnya?" = Minder jawab "Masih jualan kecil-kecilan." Terus dianggap bisnis sampingan.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-red-400 font-black flex-shrink-0 text-sm mt-0.5">✕</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">{item.cat}:</strong> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ✅ After */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="rounded-xl border border-green-200 bg-green-50 p-5"
          >
            <p className="font-black text-gray-900 mb-4 leading-snug">
              ✅ Perusahaan Profesional Pake PT Sendiri{" "}
              <span className="text-green-700">(Aman &amp; Kredibel):</span>
            </p>
            <ul className="space-y-3">
              {[
                { cat: "Kepercayaan", desc: "Rekening PT resmi = Konsumen gercep transfer tanpa takut ditipu. Omzet naik 5x lipat!" },
                { cat: "Keamanan Aset", desc: "Resiko bisnis terpisah = Tabungan & rumah keluarga 100% terlindungi." },
                { cat: "Akses Modal", desc: "Legalitas lengkap = Bank kasih prioritas pinjaman, investor gampang masuk." },
                { cat: "Birokrasi", desc: "Pakai Jasa Grotivy = Anda tetap di rumah ngurus bisnis, legalitas tahu-tahu beres." },
                { cat: "Gengsi (Lebaran)", desc: 'Ditanya relasi = Bangga kasih kartu nama resmi. "Alhamdulillah, PT saya lagi ekspansi." Diakui sebagai Direktur Utama yang serius 😎.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-green-600 font-black flex-shrink-0 text-sm mt-0.5">✓</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">{item.cat}:</strong> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════
            TESTIMONI
        ══════════════════════════════════════════════ */}
        <section data-track-section="testimoni" className="py-8">

          {/* Opening quote box */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-xl p-5 mb-8"
            style={{ borderLeft: `4px solid ${TEAL}`, background: "#f8fffe" }}
          >
            <p className="text-gray-700 leading-relaxed italic mb-4">
              "Setelah saya pakai legalitas Grotivy ini selama 3 hari, Customer saya jadi{" "}
              <strong className="not-italic">10X langsung percaya buat transfer! Tanpa takut ditipu!</strong>{" "}
              Bisnis saya jadi punya rekening perusahaan dan PT profesional, Padahal aslinya bisnis masih ala kadar dan cuma dari rumah..."
            </p>
            <p className="font-black text-sm" style={{ color: TEAL }}>— Klien Grotivy Consultant</p>
          </motion.div>

          {/* 3 photo testimonials */}
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-xl overflow-hidden border border-gray-200"
              >
                <div className="bg-gray-50 w-full">
                  <img src={t.photo} alt={`Testimoni ${t.name}`} className="w-full object-cover object-top" style={{ maxHeight: 280 }} />
                </div>
                <div className="p-5">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 whitespace-pre-line italic">"{t.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-px bg-gray-300" />
                    <p className="font-black text-gray-900 text-sm">{t.name}</p>
                    <span className="text-gray-300 text-xs">·</span>
                    <p className="text-gray-500 text-sm">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SOLUSI
        ══════════════════════════════════════════════ */}
        <section data-track-section="solusi" className="py-4">
          <p className="font-black text-gray-900 text-sm mb-0">Solusi Terima Beres Untuk Anda</p>
          <TealLine />

          {/* Hero image */}
          <div className="rounded-xl overflow-hidden mb-5">
            <img src={heroImage} alt="Grotivy PT Package" className="w-full h-auto object-cover" />
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Memperkenalkan <strong className="text-gray-900">Grotivy</strong>, layanan legalitas end-to-end yang tidak hanya membereskan dokumen Anda, tapi merubah status bisnis rumahan Anda menjadi korporat profesional.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dengan layanan pendirian PT secara kilat dan transparan, Anda langsung mendapatkan akses krusial: <strong className="text-gray-900">Membuka Rekening Atas Nama Perusahaan.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Secara fungsional, dokumen lengkap dari kami (NIB, SK Kemenkumham, NPWP Perusahaan) adalah <strong className="text-gray-900">"kunci master"</strong> untuk memenangkan tender besar dan mencairkan pinjaman modal bernilai tinggi.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dan apa puncak kepuasannya? <strong className="text-gray-900">Validasi sosial.</strong> Anda tidak perlu lagi merasa canggung saat silaturahmi Lebaran. Anda pulang membawa identitas baru sebagai <strong className="text-gray-900">Direktur Utama</strong> yang sah, menjalankan entitas bisnis resmi yang aset pribadinya sama sekali tidak bisa diganggu gugat oleh resiko bisnis.
          </p>

          {/* Legal doc image */}
          <div className="rounded-xl overflow-hidden mb-4">
            <img src={legalDocImage} alt="Dokumen Legal PT Grotivy" className="w-full h-auto object-cover" />
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            HARGA
        ══════════════════════════════════════════════ */}
        <section data-track-section="harga" className="py-4">
          <p className="font-black text-gray-900 text-sm mb-0">Berapa Investasinya?</p>
          <TealLine />

          {/* Strikethrough price */}
          <p className="text-gray-400 text-sm mb-1">Value aslinya</p>
          <p className="text-gray-300 line-through text-2xl font-black mb-4">Rp. 5.580.000</p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Tapi karena kami lagi ada{" "}
            <strong className="text-gray-900">PROMO SPESIAL HARGA RAMADHAN 2026 ADA DISKON BESAR-BESARAN</strong>{" "}
            maka Anda berhak mendapatkan diskon sampai tanggal 30 bulan ini saja!
          </p>

          {/* Price box */}
          <div className="rounded-xl p-6 text-center mb-5" style={{ background: "#111827" }}>
            <p className="text-gray-400 text-sm mb-2">Anda cukup membayar sebanyak</p>
            <p className="text-white text-4xl font-black mb-2">Rp. 1.845.000</p>
            <p className="text-gray-400 text-sm">
              atau Anda telah menghemat <strong className="text-white">Rp. 3.735.000</strong>
            </p>
          </div>

          <p className="text-gray-500 text-sm text-center leading-relaxed mb-6">
            Harga legalitas PT perorangan ini setelah diskon hanya setara{" "}
            <strong className="text-gray-900">1x gaji customer service</strong> atau{" "}
            <strong className="text-gray-900">5x nongkrong sama pasangan</strong>{" "}
            tapi Anda sudah mendapat legalitas seumur hidup.
          </p>
        </section>

        {/* ══════════════════════════════════════════════
            BONUS
        ══════════════════════════════════════════════ */}
        <section data-track-section="bonus" className="py-4">
          <p className="font-black text-gray-900 mb-1">Jika Anda <Hl>PEMBURU DISKON &amp; PROMO</Hl>..</p>
          <p className="text-gray-500 mb-4">Maka...</p>
          <p className="font-black text-gray-900 mb-5">Dapatkan BONUS secara GRATIS :</p>

          <ul className="space-y-3 mb-6">
            {bonusList.map((b, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-base flex-shrink-0">{b.emoji}</span>
                <p className="text-sm text-gray-700">
                  {b.item}{b.value ? <> — <strong className="text-gray-900">{b.value}</strong></> : ""}
                </p>
              </li>
            ))}
          </ul>

          <p className="text-gray-700 text-sm mb-1">
            Total seharga <strong className="text-gray-900">Rp. 6.880.000</strong> dapatkan secara GRATIS kalau Anda transaksi sekarang juga!
          </p>

          <TealLine />

          {/* Total recap */}
          <div className="text-center mb-8 space-y-1">
            <p className="text-gray-500 text-sm font-black tracking-wide">TOTAL MANFAAT DI ATAS MENCAPAI</p>
            <p className="text-4xl font-black text-gray-900">Rp 6.880.000</p>
            <div className="h-px w-12 bg-gray-200 mx-auto my-4" />
            <p className="text-gray-500 text-sm">Anda cukup membayar</p>
            <p className="text-3xl font-black text-gray-900">Rp 1.845.000.</p>
            <p className="text-gray-500 text-sm mt-2">
              Dengan <strong className="text-gray-900">kuota 5 orang tercepat hari ini.</strong>
            </p>
          </div>

          {/* Countdown */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 mb-8">
            <p className="text-center text-gray-400 text-xs tracking-widest uppercase font-black mb-5">
              (HARGA KEMBALI NORMAL JIKA WAKTU MENJADI 0)
            </p>
            <div className="flex items-center justify-center gap-3 mb-6">
              {[
                { val: h, max: 24, label: "JAM"   },
                { val: m, max: 60, label: "MENIT" },
                { val: s, max: 60, label: "DETIK" },
              ].map((t, i) => {
                const R = 34, C = 2 * Math.PI * R;
                const offset = C * (1 - t.val / t.max);
                return (
                  <div key={t.label} className="flex flex-col items-center gap-2">
                    <svg width="88" height="88" viewBox="0 0 88 88">
                      <circle cx="44" cy="44" r={R} fill="none" stroke="#f3f4f6" strokeWidth="4" />
                      <circle cx="44" cy="44" r={R} fill="none" stroke={TEAL} strokeWidth="4" strokeLinecap="round"
                        strokeDasharray={C} strokeDashoffset={offset}
                        style={{ transform: "rotate(-90deg)", transformOrigin: "center", transition: "stroke-dashoffset 0.5s ease" }} />
                      <text x="44" y="50" textAnchor="middle" fontSize="22" fontWeight="900" fill="#111827" fontFamily="system-ui">
                        {String(t.val).padStart(2, "0")}
                      </text>
                    </svg>
                    <span className="text-[10px] font-black tracking-[0.15em] text-gray-400 uppercase">{t.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="text-center text-gray-400 text-xl select-none mb-5">⬇️ ⬇️ ⬇️</div>
            <WAButton text=">> KLAIM PROMO RAMADHAN & BAYAR SETELAH JADI: CHAT WA SEKARANG! <<" />
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════ */}
        <section data-track-section="faq" className="py-4">
          <p className="font-black text-gray-900 text-sm mb-0">Pertanyaan yang ada di pikiran anda</p>
          <TealLine />
          <div className="rounded-xl border border-gray-200 px-5 mb-10">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
          <WAButton text="Saya Mau Tanya Langsung ke Tim Grotivy!" />
        </section>

      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-100 bg-white py-10 mt-8">
        <div className="max-w-[520px] mx-auto px-5 text-center">
          <img src="/logo.png" alt="Grotivy Consultant" className="h-8 mx-auto mb-5" />
          <p className="font-black text-gray-900 mb-1">PT Samudra Perkasa Digital</p>
          <p className="text-gray-400 text-sm mb-1">Rekening BCA: 4452287432 a/n PT Samudra Perkasa Digital</p>
          <p className="text-gray-400 text-sm mb-7">One Stop Business Solution · Berdiri Sejak 2022</p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <a href="/" className="hover:text-gray-900 transition-colors">Beranda</a>
            <a href="/pendirian-perusahaan" className="hover:text-gray-900 transition-colors">Layanan PT</a>
            <a href="/blog" className="hover:text-gray-900 transition-colors">Blog</a>
            <a href="/contact" className="hover:text-gray-900 transition-colors">Kontak</a>
          </div>
          <p className="mt-6 text-xs text-gray-300">© 2026 Grotivy Consultant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
