import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Handshake, Star, TrendingUp, Users, Globe, CheckCircle, ArrowRight,
  MessageCircle, Sparkles, Award, DollarSign, Zap, ChevronDown,
  Building2, Scale, GraduationCap, Landmark, Briefcase, BarChart3,
  Shield, BadgeCheck, Gift, Megaphone, BookOpen, FileText,
  Send, Target, Heart, Clock, Phone,
  Tag, Repeat2, MapPin, Layers, Cpu, ShoppingBag, Home, CreditCard,
  Calculator, Network, Rocket, ChevronRight
} from "lucide-react";
import { SEO, buildOrganizationSchema, buildBreadcrumbSchema, buildFAQSchema } from "../components/SEO";

const WA_NUMBER = "6283861537366";

/* ─── PARTNER TIERS ─── */
const tiers = [
  {
    id: "referral",
    badge: "Starter",
    icon: <Send className="w-7 h-7" />,
    title: "Mitra Referral",
    subtitle: "Untuk individu & freelancer",
    color: "from-[#5FBDBE] to-[#2C5F6F]",
    glow: "rgba(95,189,190,0.25)",
    borderActive: "border-[#5FBDBE]",
    description:
      "Cocok untuk Anda yang memiliki jaringan bisnis dan ingin mendapatkan penghasilan tambahan dengan mereferensikan klien ke Grotivy.",
    commission: "5–8%",
    commissionLabel: "Komisi per Deal",
    perks: [
      "Komisi 5–8% dari nilai kontrak klien yang berhasil",
      "Akses dashboard tracking referral real-time",
      "Materi marketing siap pakai (flyer, konten sosmed)",
      "Pembayaran komisi tepat waktu setiap bulan",
      "Tidak ada target minimum bulanan",
      "Pelatihan onboarding produk & layanan Grotivy",
    ],
    cta: "Daftar Gratis Sekarang",
    popular: false,
  },
  {
    id: "bisnis",
    badge: "Most Popular",
    icon: <Building2 className="w-7 h-7" />,
    title: "Mitra Bisnis",
    subtitle: "Untuk perusahaan & firma profesional",
    color: "from-purple-500 to-indigo-700",
    glow: "rgba(139,92,246,0.25)",
    borderActive: "border-purple-500",
    description:
      "Ideal untuk kantor notaris, KAP, firma hukum, atau konsultan lain yang ingin memperluas portofolio layanan melalui kolaborasi strategis.",
    commission: "8–12%",
    commissionLabel: "Komisi per Deal",
    perks: [
      "Komisi 8–12% dari nilai kontrak yang direferensikan",
      "Co-branding: nama mitra tercantum di materi Grotivy",
      "Bundling layanan lintas firma (cross-selling)",
      "Priority client handling untuk klien mitra",
      "Joint marketing event & webinar bersama",
      "Akses ke database legalitas & regulasi terbaru",
      "Dedicated partner manager personal",
      "Sertifikat resmi Mitra Bisnis Grotivy",
    ],
    cta: "Ajukan Kemitraan",
    popular: true,
  },
  {
    id: "strategis",
    badge: "Premium",
    icon: <Star className="w-7 h-7 fill-current" />,
    title: "Mitra Strategis",
    subtitle: "Untuk institusi, bank & asosiasi",
    color: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.25)",
    borderActive: "border-amber-500",
    description:
      "Kemitraan eksklusif level tertinggi untuk lembaga keuangan, universitas, asosiasi bisnis, dan korporasi yang ingin integrasi penuh dengan ekosistem Grotivy.",
    commission: "Negosiasi",
    commissionLabel: "Skema Khusus",
    perks: [
      "Skema komisi & revenue sharing yang fleksibel",
      "White-label services atas nama institusi mitra",
      "MOU/PKS resmi dengan Grotivy Consultant",
      "Co-develop program khusus kebutuhan mitra",
      "Eksklusivitas wilayah atau segmen industri",
      "Representasi di semua materi & event Grotivy",
      "Laporan bisnis kuartalan bersama",
      "Prioritas tertinggi dalam semua operasional",
      "Board meeting triwulan & strategic review",
    ],
    cta: "Diskusi Langsung",
    popular: false,
  },
];

/* ─── WHO CAN PARTNER ─── */
const whoCanPartner = [
  {
    icon: <Scale className="w-7 h-7" />,
    title: "Notaris & PPAT",
    desc: "Sinergi layanan legalitas perusahaan, akta pendirian, dan aset bisnis klien bersama.",
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Kantor Akuntan Publik",
    desc: "Kolaborasi audit, perpajakan, dan advisory keuangan untuk klien skala UMKM hingga korporat.",
    color: "bg-emerald-50 text-emerald-600",
    border: "border-emerald-100",
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Firma Hukum",
    desc: "Saling melengkapi dalam layanan kontrak, sengketa bisnis, dan kepatuhan regulasi.",
    color: "bg-purple-50 text-purple-600",
    border: "border-purple-100",
  },
  {
    icon: <Landmark className="w-7 h-7" />,
    title: "Bank & Lembaga Keuangan",
    desc: "Referral klien UMKM & startup yang membutuhkan akses modal, rekening korporat, dan layanan bisnis.",
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-100",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Universitas & Lembaga Pelatihan",
    desc: "Program magang, guest lecture, dan inkubator bisnis bagi mahasiswa & alumni wirausaha.",
    color: "bg-rose-50 text-rose-600",
    border: "border-rose-100",
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: "Digital Agency & Konsultan Marketing",
    desc: "Bundling layanan digital dengan legalitas & sertifikasi bisnis untuk klien yang lebih siap.",
    color: "bg-indigo-50 text-indigo-600",
    border: "border-indigo-100",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Asosiasi & Komunitas Bisnis",
    desc: "KADIN, HIPMI, IWAPI, dan komunitas UKM lainnya — bersama membantu anggota tumbuh lebih kuat.",
    color: "bg-teal-50 text-teal-600",
    border: "border-teal-100",
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: "Konsultan & Freelancer Independen",
    desc: "Individu dengan jaringan bisnis yang ingin menghasilkan komisi tanpa modal dan tanpa target minimum.",
    color: "bg-[#5FBDBE]/10 text-[#2C5F6F]",
    border: "border-[#5FBDBE]/20",
  },
];

/* ─── BENEFITS ─── */
const benefits = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Komisi Kompetitif",
    desc: "Dapatkan komisi 5–12% dari setiap klien yang berhasil dikonversi. Dibayar tepat waktu tanpa syarat rumit.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: "Kredibilitas Bersama",
    desc: "Nama mitra tercantum di materi Grotivy, meningkatkan kepercayaan dan nilai brand Anda di mata klien.",
    color: "from-[#5FBDBE] to-[#2C5F6F]",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Akses Jaringan 500+ Klien",
    desc: "Potensi cross-selling ke klien Grotivy yang sudah terpercaya, memperluas pasar Anda secara signifikan.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Dukungan & Pelatihan",
    desc: "Onboarding lengkap, training produk, dan materi marketing siap pakai — kami siapkan semua untuk Anda.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Proses Mudah & Cepat",
    desc: "Daftar mitra cukup via WhatsApp, tidak perlu birokrasi panjang. Aktif dalam 1–3 hari kerja.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Komitmen Jangka Panjang",
    desc: "Kami percaya pada relasi jangka panjang. Mitra kami tumbuh bersama Grotivy, bukan hanya transaksi sesaat.",
    color: "from-blue-500 to-indigo-600",
  },
];

/* ─── HOW IT WORKS ─── */
const steps = [
  {
    step: "01",
    icon: <Phone className="w-6 h-6" />,
    title: "Hubungi Kami",
    desc: "Kirim pesan via WhatsApp atau isi form ketertarikan. Tim partnership kami akan merespons dalam 1×24 jam.",
  },
  {
    step: "02",
    icon: <Target className="w-6 h-6" />,
    title: "Diskusi & Sinkronisasi",
    desc: "Kami pelajari profil, jaringan, dan tujuan Anda untuk menentukan tier kemitraan yang paling tepat.",
  },
  {
    step: "03",
    icon: <FileText className="w-6 h-6" />,
    title: "Penandatanganan MOU",
    desc: "PKS atau MOU ditandatangani secara resmi, lengkap dengan hak, kewajiban, dan skema komisi yang transparan.",
  },
  {
    step: "04",
    icon: <Gift className="w-6 h-6" />,
    title: "Aktif & Mulai Berkolaborasi",
    desc: "Terima materi marketing, akses dashboard, dan dukungan penuh dari tim kami. Langsung mulai menghasilkan!",
  },
];

/* ─── FAQ ─── */
const faqs = [
  {
    q: "Apakah ada biaya untuk menjadi mitra Grotivy?",
    a: "Tidak ada biaya pendaftaran untuk semua tier mitra. Program kemitraan Grotivy sepenuhnya gratis dan Anda hanya perlu meluangkan waktu untuk proses onboarding awal.",
  },
  {
    q: "Berapa lama proses menjadi mitra setelah mendaftar?",
    a: "Untuk Mitra Referral, proses bisa selesai dalam 1–3 hari kerja setelah diskusi awal. Mitra Bisnis dan Strategis memerlukan waktu 5–10 hari kerja untuk finalisasi PKS/MOU.",
  },
  {
    q: "Bagaimana sistem pembayaran komisi bekerja?",
    a: "Komisi dibayarkan pada tanggal 10 setiap bulan untuk deal yang sudah berstatus 'terlaksana' di bulan sebelumnya. Anda bisa memantau status referral dan komisi secara real-time di dashboard mitra.",
  },
  {
    q: "Apakah ada target referral minimum yang harus dipenuhi?",
    a: "Untuk Mitra Referral, tidak ada target minimum. Untuk Mitra Bisnis dan Strategis, target akan didiskusikan dan disepakati bersama sesuai kapasitas mitra.",
  },
  {
    q: "Layanan apa saja yang bisa direferensikan untuk mendapat komisi?",
    a: "Hampir semua layanan Grotivy masuk dalam program komisi: pendirian perusahaan, perizinan usaha, perpajakan, HKI, sertifikasi HALAL, publikasi media, dan konsultasi bisnis strategis.",
  },
  {
    q: "Apakah bisa menjadi mitra di luar Jakarta?",
    a: "Tentu! Kami sangat terbuka untuk mitra dari seluruh Indonesia. Klien Grotivy sudah tersebar di 500+ kota, dan mitra daerah sangat kami butuhkan untuk penetrasi pasar lokal.",
  },
];

/* ─── B2B PROGRAMS ─── */
const b2bPrograms = [
  {
    id: "reseller",
    icon: <Tag className="w-8 h-8" />,
    badge: "Paling Fleksibel",
    title: "Reseller B2B",
    tagline: "Jual layanan Grotivy, tentukan harga Anda sendiri",
    color: "from-[#5FBDBE] to-[#2C5F6F]",
    shadowColor: "shadow-[#5FBDBE]/20",
    discount: "Diskon 15–25%",
    discountLabel: "dari harga retail",
    description:
      "Beli layanan Grotivy dengan harga reseller eksklusif, lalu jual kepada klien Anda dengan margin yang Anda tentukan sendiri. Model bisnis yang terbukti menghasilkan pendapatan berulang dan stabil.",
    perks: [
      "Harga reseller 15–25% lebih murah dari harga publik",
      "Kebebasan penuh menentukan harga jual ke klien",
      "Dashboard terpusat manajemen order & klien",
      "Branded invoice & dokumen atas nama perusahaan Anda",
      "Priority processing untuk semua order reseller",
      "Laporan penjualan & komisi bulanan otomatis",
      "Tidak ada kuota minimum order per bulan",
    ],
    bestFor: ["Konsultan Multiservice", "Digital Agency", "BPO Company", "Firma Hukum & Akuntansi"],
  },
  {
    id: "whitelabel",
    icon: <Layers className="w-8 h-8" />,
    badge: "Most Exclusive",
    title: "White-Label B2B",
    tagline: "Dikerjakan Grotivy, brand Anda yang tampil",
    color: "from-violet-600 to-indigo-700",
    shadowColor: "shadow-violet-500/20",
    discount: "Full NDA",
    discountLabel: "Kerahasiaan terjamin",
    description:
      "Grotivy mengerjakan semua layanan di belakang layar tanpa pernah menyebut nama kami ke klien akhir Anda. Semua dokumen, laporan, dan output tampil 100% atas nama brand perusahaan Anda.",
    perks: [
      "Zero brand mention Grotivy ke end-client Anda",
      "Customisasi penuh: dokumen, template, logo perusahaan Anda",
      "Tim dedicated khusus operasional white-label",
      "NDA ketat & perlindungan data klien yang komprehensif",
      "Onboarding tim internal Anda dengan SOP kami",
      "Review kualitas berlapis sebelum output diserahkan",
      "Eskalasi prioritas untuk proyek mendesak",
    ],
    bestFor: ["Firma Konsultan Besar", "Legaltech & Regtech", "Perusahaan Multiservice", "Holding Company"],
  },
  {
    id: "eksklusif",
    icon: <MapPin className="w-8 h-8" />,
    badge: "Tertinggi",
    title: "Mitra Eksklusif Wilayah",
    tagline: "Hak distribusi eksklusif di area atau industri Anda",
    color: "from-amber-500 to-orange-600",
    shadowColor: "shadow-amber-500/20",
    discount: "Eksklusif",
    discountLabel: "Per wilayah / industri",
    description:
      "Dapatkan hak eksklusif menjadi satu-satunya mitra Grotivy di wilayah atau segmen industri tertentu. Cocok untuk perusahaan yang ingin mendominasi pasar di daerahnya.",
    perks: [
      "Eksklusivitas wilayah (kota/provinsi) atau segmen industri",
      "Revenue sharing model yang disepakati & transparan",
      "Co-branding: nama Anda + Grotivy di semua materi marketing",
      "Joint proposal & pitch deck untuk klien enterprise",
      "Quarterly business review dengan manajemen Grotivy",
      "Dukungan marketing lokal & event bersama",
      "Akses ke pipeline proyek Grotivy di wilayah Anda",
    ],
    bestFor: ["Perusahaan Regional", "Asosiasi Bisnis Daerah", "Koperasi & BUMN Daerah", "Inkubator Lokal"],
  },
];

const b2bBenefits = [
  {
    icon: <Tag className="w-6 h-6" />,
    title: "Harga Khusus B2B",
    desc: "Diskon 15–25% dari harga publik untuk semua layanan. Semakin besar volume, semakin besar diskon yang bisa dinegosiasikan.",
    color: "from-[#5FBDBE] to-[#2C5F6F]",
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: "Dedicated B2B Account Manager",
    desc: "Satu titik kontak personal yang memahami bisnis Anda, selalu siap dalam jam kerja tanpa perlu antri ke CS umum.",
    color: "from-violet-500 to-indigo-600",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Priority SLA & Turnaround",
    desc: "Order B2B mendapat prioritas penanganan dengan turnaround time lebih cepat 30–50% dibanding order regular.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Repeat2 className="w-6 h-6" />,
    title: "Recurring Revenue Stream",
    desc: "Bangun sumber pendapatan berulang yang stabil dari klien yang terus menggunakan layanan melalui platform Anda.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Co-Marketing & Joint Proposal",
    desc: "Grotivy mendukung tim sales Anda dengan materi co-branded, pitch deck bersama, dan dukungan teknis saat presentasi klien besar.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Keamanan Data & Kepatuhan",
    desc: "Terdaftar PSE Kominfo, sistem keamanan berlapis, dan kepatuhan penuh terhadap regulasi perlindungan data Indonesia.",
    color: "from-blue-500 to-indigo-700",
  },
];

const b2bIndustries = [
  { icon: <Scale className="w-5 h-5" />, label: "Legaltech & Regtech", color: "bg-blue-100 text-blue-700" },
  { icon: <CreditCard className="w-5 h-5" />, label: "Fintech & Perbankan", color: "bg-emerald-100 text-emerald-700" },
  { icon: <Home className="w-5 h-5" />, label: "Properti & Real Estate", color: "bg-amber-100 text-amber-700" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "E-commerce & Marketplace", color: "bg-rose-100 text-rose-700" },
  { icon: <Users className="w-5 h-5" />, label: "HR Tech & Payroll", color: "bg-purple-100 text-purple-700" },
  { icon: <BarChart3 className="w-5 h-5" />, label: "Accounting & ERP Software", color: "bg-indigo-100 text-indigo-700" },
  { icon: <Cpu className="w-5 h-5" />, label: "Business Process Outsourcing", color: "bg-teal-100 text-teal-700" },
  { icon: <Rocket className="w-5 h-5" />, label: "Inkubator & Akselerator Startup", color: "bg-orange-100 text-orange-700" },
  { icon: <Network className="w-5 h-5" />, label: "Asosiasi & Koperasi Bisnis", color: "bg-cyan-100 text-cyan-700" },
  { icon: <Megaphone className="w-5 h-5" />, label: "Digital & Creative Agency", color: "bg-pink-100 text-pink-700" },
];

/* ─── B2B REVENUE CALCULATOR ─── */
function B2BCalculator() {
  const [clients, setClients] = useState(10);
  const [avgValue, setAvgValue] = useState(5000000);
  const [program, setProgram] = useState<"reseller" | "whitelabel" | "eksklusif">("reseller");

  const marginMap = { reseller: 0.20, whitelabel: 0.30, eksklusif: 0.25 };
  const labelMap = {
    reseller: "Margin Reseller rata-rata ~20%",
    whitelabel: "Margin White-Label rata-rata ~30%",
    eksklusif: "Revenue Share rata-rata ~25%",
  };
  const margin = marginMap[program];
  const monthly = clients * avgValue * margin;
  const yearly = monthly * 12;

  const fmt = (n: number) =>
    n >= 1_000_000_000
      ? `Rp ${(n / 1_000_000_000).toFixed(1)} M`
      : `Rp ${(n / 1_000_000).toFixed(0)} Jt`;

  return (
    <div className="bg-white border-2 border-[#5FBDBE]/20 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-7">
        <div className="w-12 h-12 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-xl flex items-center justify-center text-white shadow-md">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-[#2C5F6F]">Kalkulator Estimasi Pendapatan B2B</h3>
          <p className="text-xs text-gray-400 mt-0.5">Ilustrasi potensi — bukan jaminan penghasilan</p>
        </div>
      </div>

      <div className="space-y-7">
        {/* Program */}
        <div>
          <label className="text-sm font-semibold text-[#2C5F6F] mb-3 block">Pilih Program B2B</label>
          <div className="grid grid-cols-3 gap-2">
            {(["reseller", "whitelabel", "eksklusif"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setProgram(p)}
                className={`py-2.5 px-2 rounded-xl text-xs font-semibold border-2 transition-all duration-200 ${
                  program === p
                    ? "bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white border-transparent shadow-md"
                    : "border-gray-200 text-gray-500 hover:border-[#5FBDBE]/40"
                }`}
              >
                {p === "reseller" ? "Reseller" : p === "whitelabel" ? "White-Label" : "Eksklusif"}
              </button>
            ))}
          </div>
          <p className="text-xs text-[#5FBDBE] mt-2 font-medium">{labelMap[program]}</p>
        </div>

        {/* Clients slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-[#2C5F6F]">Jumlah Klien / Bulan</label>
            <span className="text-xl font-bold text-[#2C5F6F]">{clients} klien</span>
          </div>
          <input
            type="range" min={1} max={100} value={clients}
            onChange={(e) => setClients(Number(e.target.value))}
            className="w-full accent-[#5FBDBE] h-2 rounded-full cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1.5">
            <span>1 klien</span><span>100 klien</span>
          </div>
        </div>

        {/* Avg value slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-[#2C5F6F]">Rata-rata Nilai Layanan</label>
            <span className="text-xl font-bold text-[#2C5F6F]">Rp {(avgValue / 1_000_000).toFixed(1)} Jt</span>
          </div>
          <input
            type="range" min={1000000} max={50000000} step={500000} value={avgValue}
            onChange={(e) => setAvgValue(Number(e.target.value))}
            className="w-full accent-[#5FBDBE] h-2 rounded-full cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1.5">
            <span>Rp 1 Jt</span><span>Rp 50 Jt</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-7 grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-[#5FBDBE]/10 to-[#2C5F6F]/10 rounded-2xl p-5 text-center border border-[#5FBDBE]/20">
          <p className="text-xs text-gray-500 mb-1 font-medium">Estimasi / Bulan</p>
          <p className="text-2xl font-bold text-[#2C5F6F]">{fmt(monthly)}</p>
        </div>
        <div className="bg-gradient-to-br from-[#2C5F6F] to-[#5FBDBE] rounded-2xl p-5 text-center shadow-lg">
          <p className="text-xs text-white/70 mb-1 font-medium">Estimasi / Tahun</p>
          <p className="text-2xl font-bold text-white">{fmt(yearly)}</p>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 mt-3">
        *Berdasarkan margin rata-rata. Nilai aktual sesuai kesepakatan.
      </p>
      <a
        href={`https://wa.me/6283861537366?text=${encodeURIComponent("Halo Grotivy, saya tertarik dengan Program Kemitraan B2B. Boleh saya diskusikan lebih lanjut?")}`}
        target="_blank" rel="noopener noreferrer"
        className="mt-5 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-[#5FBDBE]/30 hover:scale-[1.01] transition-all duration-300"
      >
        <MessageCircle className="w-4 h-4" />
        Diskusi Program B2B via WhatsApp
      </a>
    </div>
  );
}

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#5FBDBE]/40 transition-all"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <span className="font-semibold text-[#2C5F6F] pr-4 group-hover:text-[#5FBDBE] transition-colors">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#5FBDBE] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Partnership() {
  const [activeTier, setActiveTier] = useState("bisnis");
  const [activeB2B, setActiveB2B] = useState("reseller");

  const activeB2BData = b2bPrograms.find((p) => p.id === activeB2B)!;

  const buildWaMsg = (tier: string) => {
    const t = tiers.find((t) => t.id === tier);
    return encodeURIComponent(
      `Halo Grotivy Consultant, saya tertarik untuk bergabung sebagai *${t?.title ?? "Mitra"}*. Boleh saya mendapatkan informasi lebih lanjut mengenai program kemitraan ini?`
    );
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEO
        title="Program Kemitraan & B2B Partnership"
        canonicalPath="/partnership"
        description="Bergabunglah dengan program kemitraan Grotivy Consultant. Tersedia Mitra Referral (komisi 5–8%), Mitra Bisnis (8–12%), Mitra Strategis, dan Program B2B: Reseller, White-Label, serta Eksklusif Wilayah. Daftar gratis!"
        keywords="kemitraan grotivy, mitra grotivy, partner grotivy, program referral grotivy, mitra bisnis konsultan, program B2B indonesia, reseller layanan konsultan, white label konsultan bisnis, grotivy partnership"
        structuredData={[
          buildOrganizationSchema(),
          buildBreadcrumbSchema([
            { name: "Beranda", path: "/" },
            { name: "Kemitraan", path: "/partnership" },
          ]),
          buildFAQSchema(faqs),
        ]}
      />

      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-[#071c23] via-[#0d2830] to-[#0a2535] overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-[#5FBDBE]/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] bg-[#2C5F6F]/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5FBDBE]/5 rounded-full blur-[80px]" />

        {/* Floating pills */}
        {[
          { icon: <Award className="w-3.5 h-3.5 text-amber-400" />, text: "50+ Mitra Aktif", delay: 0, pos: "top-16 left-[8%]", dir: [0, -10, 0] },
          { icon: <DollarSign className="w-3.5 h-3.5 text-emerald-400" />, text: "Komisi hingga 12%", delay: 1.2, pos: "top-24 right-[8%]", dir: [0, 10, 0] },
          { icon: <Globe className="w-3.5 h-3.5 text-[#5FBDBE]" />, text: "Seluruh Indonesia", delay: 0.6, pos: "bottom-20 left-[14%]", dir: [0, -8, 0] },
        ].map((pill, i) => (
          <motion.div
            key={i}
            animate={{ y: pill.dir as [number, number, number] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: pill.delay }}
            className={`absolute ${pill.pos} hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-xs font-medium z-10`}
          >
            {pill.icon}
            {pill.text}
          </motion.div>
        ))}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/15 border border-[#5FBDBE]/30 rounded-full px-5 py-2 mb-6">
              <Handshake className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm font-semibold text-[#5FBDBE]">Program Kemitraan Resmi</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tumbuh Bersama <br />
              <span className="bg-gradient-to-r from-[#5FBDBE] to-[#7dd8d9] bg-clip-text text-transparent">
                Grotivy Consultant
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Bergabunglah dengan jaringan mitra eksklusif Grotivy dan jadikan jaringan bisnis Anda
              sebagai sumber penghasilan nyata. Bersama kami, saling menguntungkan dan berkelanjutan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="#tier"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#5FBDBE]/30 hover:scale-105 transition-all duration-300"
              >
                <Handshake className="w-5 h-5" />
                Tier Kemitraan
              </a>
              <a
                href="#b2b"
                className="inline-flex items-center justify-center gap-2 bg-white/15 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Network className="w-5 h-5" />
                Program B2B
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Grotivy, saya ingin tahu lebih lanjut tentang program kemitraan.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Kemitraan
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "50+", label: "Mitra Aktif" },
              { val: "3", label: "Program B2B" },
              { val: "30%", label: "Margin White-Label" },
              { val: "1×24 Jam", label: "Respons Tim" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-white">{s.val}</p>
                <p className="text-sm text-gray-400 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY PARTNER ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 rounded-full px-4 py-2 mb-4">
              <Heart className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm font-medium text-[#2C5F6F]">Keuntungan Mitra</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Mengapa Bermitra dengan Grotivy?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Kami tidak hanya menawarkan komisi — kami menawarkan ekosistem bisnis yang saling menguatkan dan bertumbuh bersama.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#5FBDBE]/30 rounded-2xl p-7 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-13 h-13 w-12 h-12 bg-gradient-to-br ${b.color} rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  {b.icon}
                </div>
                <h3 className="font-bold text-[#2C5F6F] mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO CAN PARTNER ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 rounded-full px-4 py-2 mb-4">
              <Users className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm font-medium text-[#2C5F6F]">Siapa yang Bisa Bermitra?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Terbuka untuk Semua Profesi Bisnis
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Selama Anda memiliki semangat kolaborasi dan jaringan yang relevan, Grotivy siap menjadi mitra pertumbuhan Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whoCanPartner.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`group bg-white border ${item.border} rounded-2xl p-6 hover:shadow-lg hover:border-[#5FBDBE]/40 transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#2C5F6F] mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIERS ─── */}
      <section id="tier" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm font-medium text-[#2C5F6F]">Tier Kemitraan</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Pilih Level Kolaborasi Anda
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Setiap tier dirancang untuk memaksimalkan nilai yang Anda dapatkan sesuai profil dan kapasitas Anda.
            </p>
          </motion.div>

          {/* Tier selector (mobile) */}
          <div className="flex md:hidden gap-2 mb-6 overflow-x-auto pb-2">
            {tiers.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTier(t.id)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTier === t.id
                    ? "bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setActiveTier(tier.id)}
                className={`relative rounded-3xl border-2 overflow-hidden cursor-pointer transition-all duration-300 ${
                  tier.popular
                    ? "border-purple-400 shadow-2xl shadow-purple-200/50 md:scale-105"
                    : activeTier === tier.id
                    ? `${tier.borderActive} shadow-xl`
                    : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
                } ${activeTier === tier.id ? "md:ring-2 md:ring-offset-2 md:ring-[#5FBDBE]" : ""}`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-600" />
                )}

                {/* Header */}
                <div className={`bg-gradient-to-br ${tier.color} p-7 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                      {tier.icon}
                    </div>
                    <span className="text-xs font-bold bg-white/25 px-3 py-1.5 rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{tier.title}</h3>
                  <p className="text-sm text-white/70">{tier.subtitle}</p>
                  <div className="mt-5 pt-5 border-t border-white/20">
                    <p className="text-3xl font-bold">{tier.commission}</p>
                    <p className="text-sm text-white/70 mt-0.5">{tier.commissionLabel}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="bg-white p-7">
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-7">
                    {tier.perks.map((perk, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#5FBDBE] flex-shrink-0 mt-0.5" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${buildWaMsg(tier.id)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] ${
                      tier.popular
                        ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-200"
                        : "bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white hover:shadow-lg hover:shadow-[#5FBDBE]/30"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {tier.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Small print */}
          <p className="text-center text-xs text-gray-400 mt-6">
            Tidak ada biaya pendaftaran. Tier dapat di-upgrade kapan saja sesuai perkembangan kemitraan.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ─── B2B PARTNERSHIP SECTION ───
      ════════════════════════════════════════ */}
      <section id="b2b" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(95,189,190,0.07),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(44,95,111,0.07),transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── Header ── */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5FBDBE]/20 to-[#2C5F6F]/20 border border-[#5FBDBE]/30 rounded-full px-5 py-2.5 mb-5">
              <Network className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm font-bold text-[#2C5F6F] tracking-wide uppercase">Program Kemitraan B2B</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C5F6F] mb-5 leading-tight">
              Integrasikan Grotivy ke <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] bg-clip-text text-transparent">
                Ekosistem Bisnis Anda
              </span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Program B2B dirancang khusus untuk perusahaan yang ingin menjadikan layanan Grotivy
              sebagai bagian permanen dari solusi yang mereka tawarkan ke klien mereka.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                { val: "15–25%", label: "Diskon B2B" },
                { val: "30%", label: "Margin White-Label" },
                { val: "24 Jam", label: "Dedicated Support" },
                { val: "Full NDA", label: "Kerahasiaan Terjamin" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
                  <span className="font-bold text-[#5FBDBE]">{s.val}</span>
                  <span className="text-sm text-gray-500">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Program Selector + Detail ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
            {/* Left tabs */}
            <div className="lg:col-span-2 space-y-3">
              {b2bPrograms.map((prog, i) => (
                <motion.button
                  key={prog.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  onClick={() => setActiveB2B(prog.id)}
                  className={`w-full text-left rounded-2xl border-2 p-5 transition-all duration-300 group ${
                    activeB2B === prog.id
                      ? "border-[#5FBDBE] bg-white shadow-xl shadow-[#5FBDBE]/10"
                      : "border-gray-200 bg-white hover:border-[#5FBDBE]/40 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${prog.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md transition-transform duration-300 ${activeB2B === prog.id ? "scale-110" : "group-hover:scale-105"}`}>
                      {prog.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className={`font-bold transition-colors ${activeB2B === prog.id ? "text-[#2C5F6F]" : "text-gray-700"}`}>{prog.title}</h3>
                        <span className="text-[10px] font-bold bg-[#5FBDBE]/10 text-[#5FBDBE] px-2 py-0.5 rounded-full flex-shrink-0">{prog.badge}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{prog.tagline}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 mt-1 transition-all duration-300 ${activeB2B === prog.id ? "text-[#5FBDBE] translate-x-1" : "text-gray-300"}`} />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right detail */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeB2B}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border-2 border-[#5FBDBE]/20 rounded-3xl overflow-hidden shadow-xl"
                >
                  <div className={`bg-gradient-to-br ${activeB2BData.color} p-8 text-white`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold bg-white/20 rounded-full px-3 py-1">{activeB2BData.badge}</span>
                        <h3 className="text-2xl font-bold mt-3">{activeB2BData.title}</h3>
                        <p className="text-white/75 text-sm mt-1">{activeB2BData.tagline}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-2xl font-bold">{activeB2BData.discount}</p>
                        <p className="text-xs text-white/60 mt-0.5">{activeB2BData.discountLabel}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-sm text-white/80 leading-relaxed bg-white/10 rounded-xl p-4">{activeB2BData.description}</p>
                  </div>
                  <div className="p-8">
                    <p className="text-xs font-bold text-[#5FBDBE] uppercase tracking-widest mb-4">Yang Anda Dapatkan</p>
                    <ul className="space-y-3 mb-7">
                      {activeB2BData.perks.map((perk, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#5FBDBE] flex-shrink-0 mt-0.5" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                    <div className="mb-7">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Cocok untuk</p>
                      <div className="flex flex-wrap gap-2">
                        {activeB2BData.bestFor.map((tag, i) => (
                          <span key={i} className="text-xs bg-[#5FBDBE]/10 text-[#2C5F6F] font-semibold px-3 py-1.5 rounded-full border border-[#5FBDBE]/20">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo Grotivy, saya tertarik dengan program *${activeB2BData.title}* untuk kemitraan B2B. Boleh saya diskusikan lebih lanjut?`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${activeB2BData.color} text-white py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 hover:scale-[1.01] transition-all duration-300 shadow-lg`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Mulai Program {activeB2BData.title}
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── B2B Benefits ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2C5F6F] mb-3">Keunggulan Eksklusif untuk Mitra B2B</h3>
            <p className="text-gray-500">Lebih dari sekadar diskon — sebuah ekosistem bisnis yang saling menguntungkan.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {b2bBenefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-[#5FBDBE]/30 transition-all duration-300"
              >
                <div className={`w-11 h-11 bg-gradient-to-br ${b.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}>{b.icon}</div>
                <h4 className="font-bold text-[#2C5F6F] mb-2 text-sm">{b.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ── Industries + Calculator ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-[#2C5F6F] mb-2">Industri yang Cocok Bermitra B2B</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Program B2B Grotivy terbuka untuk semua sektor, namun industri berikut memiliki
                potensi sinergi tertinggi karena kebutuhan layanan konsultan bisnis yang sangat tinggi dari klien mereka.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {b2bIndustries.map((ind, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`flex items-center gap-3 ${ind.color} rounded-xl px-4 py-3 font-semibold text-sm`}
                  >
                    {ind.icon}
                    {ind.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <B2BCalculator />
            </motion.div>
          </div>

          {/* ── B2B CTA Banner ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 relative bg-gradient-to-br from-[#071c23] via-[#0d2830] to-[#0a2535] rounded-3xl p-10 md:p-14 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
            <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#5FBDBE]/10 rounded-full blur-3xl" />
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#2C5F6F]/15 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/15 border border-[#5FBDBE]/30 rounded-full px-4 py-1.5 mb-4">
                  <Rocket className="w-3.5 h-3.5 text-[#5FBDBE]" />
                  <span className="text-xs font-bold text-[#5FBDBE]">B2B Partner Eksklusif</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Siap Jadi Mitra B2B Grotivy?</h3>
                <p className="text-gray-300 max-w-lg leading-relaxed text-sm">
                  Hubungi tim B2B Partnership kami sekarang. Diskusi tanpa tekanan, proposal disesuaikan
                  dengan kebutuhan dan skala bisnis Anda secara spesifik.
                </p>
                <div className="flex flex-wrap gap-4 mt-5 justify-center md:justify-start">
                  {[
                    { icon: <BadgeCheck className="w-3.5 h-3.5" />, text: "Tanpa biaya daftar" },
                    { icon: <Shield className="w-3.5 h-3.5" />, text: "NDA tersedia" },
                    { icon: <Clock className="w-3.5 h-3.5" />, text: "Respon 1×24 jam" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-gray-400">
                      <span className="text-[#5FBDBE]">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0 w-full md:w-auto">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Grotivy, saya ingin mendaftar sebagai Mitra B2B. Boleh saya mendapatkan informasi dan proposal kemitraan B2B?")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-8 py-4 rounded-full font-semibold text-sm hover:shadow-2xl hover:shadow-[#5FBDBE]/30 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5" />
                  Daftar Mitra B2B via WA
                </a>
                <a
                  href="mailto:b2b@grotivy.com"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
                >
                  <Send className="w-4 h-4" />
                  b2b@grotivy.com
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 bg-gradient-to-br from-[#071c23] via-[#0d2830] to-[#071c23] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#5FBDBE]/8 rounded-full blur-[80px]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/15 border border-[#5FBDBE]/30 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm font-medium text-[#5FBDBE]">Cara Bergabung</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mulai dalam 4 Langkah Mudah
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Proses kemitraan yang sederhana, transparan, dan tanpa birokrasi yang menyulitkan.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[calc(12.5%+10px)] right-[calc(12.5%+10px)] h-px bg-gradient-to-r from-[#5FBDBE]/30 via-[#5FBDBE] to-[#5FBDBE]/30" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-full flex items-center justify-center text-white mb-5 shadow-xl z-10">
                    {s.icon}
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#071c23] border-2 border-[#5FBDBE] rounded-full text-[10px] font-bold text-[#5FBDBE] flex items-center justify-center">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS / SOCIAL PROOF ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm font-medium text-[#2C5F6F]">Suara Mitra Kami</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Apa Kata Mitra yang Sudah Bergabung?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Budi S., Notaris",
                location: "Jakarta Selatan",
                tier: "Mitra Bisnis",
                text: "Bermitra dengan Grotivy sangat menguntungkan. Klien notaris saya yang butuh legalitas usaha kini bisa langsung saya referensikan, dan komisinya dibayar tepat waktu tanpa ribet.",
                rating: 5,
                initials: "BS",
                color: "from-[#5FBDBE] to-[#2C5F6F]",
              },
              {
                name: "Dewi R., Konsultan HR",
                location: "Surabaya",
                tier: "Mitra Referral",
                text: "Saya freelance HR dan sering ketemu klien yang butuh bantuan legalitas. Dengan jadi mitra referral Grotivy, saya bisa bantu klien sekaligus dapat penghasilan tambahan yang lumayan.",
                rating: 5,
                initials: "DR",
                color: "from-purple-500 to-indigo-600",
              },
              {
                name: "PT Maju Jaya Finansial",
                location: "Bandung",
                tier: "Mitra Strategis",
                text: "Kolaborasi dengan Grotivy membuka segmen klien baru yang kami tidak pernah jangkau sebelumnya. MOU-nya profesional, komunikasi tim mereka responsif, dan hasilnya terasa nyata.",
                rating: 5,
                initials: "MJ",
                color: "from-amber-500 to-orange-600",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:border-[#5FBDBE]/30 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className={`w-11 h-11 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C5F6F] text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location} · <span className="text-[#5FBDBE]">{t.tier}</span></p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 rounded-full px-4 py-2 mb-4">
              <BookOpen className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm font-medium text-[#2C5F6F]">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-gray-500">Semua yang ingin Anda tahu tentang program kemitraan Grotivy.</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#071c23] via-[#0d2830] to-[#0a2535] rounded-3xl p-10 md:p-16 overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-[#5FBDBE]/10 rounded-full blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-[#2C5F6F]/15 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl">
                <Handshake className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Siap Memulai Kemitraan?
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                Hubungi tim partnership kami sekarang. Diskusi gratis, tanpa komitmen awal, dan kami siap
                menjawab semua pertanyaan Anda dalam 1×24 jam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Grotivy Consultant, saya ingin mendaftar sebagai mitra. Boleh dikirimkan informasi selengkapnya?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#5FBDBE]/30 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Daftar via WhatsApp
                </a>
                <a
                  href="mailto:partner@grotivy.com"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                  partner@grotivy.com
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
                {[
                  { icon: <Clock className="w-4 h-4 text-[#5FBDBE]" />, text: "Respons 1×24 Jam" },
                  { icon: <Shield className="w-4 h-4 text-[#5FBDBE]" />, text: "Tanpa Biaya Daftar" },
                  { icon: <BadgeCheck className="w-4 h-4 text-[#5FBDBE]" />, text: "MOU Resmi & Transparan" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    {item.icon}
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
