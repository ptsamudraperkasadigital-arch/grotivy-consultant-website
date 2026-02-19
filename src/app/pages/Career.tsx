import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Briefcase, MapPin, Clock, ChevronRight, Star, Users, TrendingUp,
  Heart, Zap, Shield, Globe, GraduationCap, Coffee, Laptop,
  Award, CheckCircle, ArrowRight, Search, Filter, Building2,
  DollarSign, MessageCircle, Sparkles, BookOpen, Target, Send
} from "lucide-react";
import { SEO, buildOrganizationSchema, buildBreadcrumbSchema } from "../components/SEO";

const WA_NUMBER = "6283861537366";

const benefits = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Karir Berkembang Pesat",
    desc: "Jalur karir yang jelas, review promosi setiap 6 bulan, dan mentoring langsung dari senior konsultan berpengalaman.",
    color: "from-[#5FBDBE] to-[#2C5F6F]",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Pengembangan Diri",
    desc: "Budget pelatihan & sertifikasi tahunan, akses ke 1000+ kursus online, dan program beasiswa sertifikasi internasional.",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Kesehatan & Kesejahteraan",
    desc: "BPJS Kesehatan + asuransi swasta, tunjangan kesehatan gigi & mata, serta program wellness bulanan.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: <Laptop className="w-7 h-7" />,
    title: "Fleksibilitas Kerja",
    desc: "Hybrid working system, flexible hours, dan fasilitas laptop + allowance internet untuk produktivitas optimal.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: <Coffee className="w-7 h-7" />,
    title: "Lingkungan Positif",
    desc: "Kantor modern di lokasi strategis, tim muda & kolaboratif, team building rutin, dan budaya kerja yang inklusif.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: <DollarSign className="w-7 h-7" />,
    title: "Kompensasi Kompetitif",
    desc: "Gaji di atas rata-rata industri, bonus performa kuartalan, THR, dan insentif project berbasis hasil nyata.",
    color: "from-blue-500 to-indigo-600",
  },
];

const openings = [
  {
    id: 1,
    title: "Senior Business Consultant",
    dept: "Business Advisory",
    location: "Jakarta Selatan",
    type: "Full-time",
    level: "Senior",
    salary: "Rp 12.000.000 – 20.000.000",
    posted: "3 hari lalu",
    urgent: true,
    requirements: [
      "Min. S1 semua jurusan (S2 diutamakan)",
      "Pengalaman 4+ tahun di bidang konsultasi bisnis",
      "Kemampuan analisis strategis dan presentasi tinggi",
      "Pernah mengelola klien korporat skala menengah–besar",
    ],
    description:
      "Bergabunglah sebagai garda terdepan Grotivy dalam memberikan solusi strategis kepada klien-klien terkemuka. Anda akan memimpin tim konsultan, mengelola hubungan klien, dan merancang solusi bisnis yang berdampak nyata.",
  },
  {
    id: 2,
    title: "Konsultan Hukum Bisnis",
    dept: "Legal & Compliance",
    location: "Jakarta Selatan",
    type: "Full-time",
    level: "Mid-Senior",
    salary: "Rp 10.000.000 – 17.000.000",
    posted: "5 hari lalu",
    urgent: true,
    requirements: [
      "Lulusan S1/S2 Hukum (diutamakan Hukum Bisnis/Perdata)",
      "Pengalaman 3+ tahun di firma hukum atau legal korporat",
      "Memahami regulasi bisnis, perizinan, dan hukum kontrak",
      "Kemampuan drafting & review kontrak yang kuat",
    ],
    description:
      "Anda akan menangani berbagai aspek hukum bisnis klien, mulai dari pendirian perusahaan, perizinan usaha, review kontrak, hingga pendampingan kepatuhan regulasi. Kesempatan besar untuk menangani klien dari berbagai industri.",
  },
  {
    id: 3,
    title: "Spesialis HKI & Sertifikasi",
    dept: "HKI & Sertifikasi",
    location: "Jakarta / Remote",
    type: "Full-time",
    level: "Mid-level",
    salary: "Rp 8.000.000 – 13.000.000",
    posted: "1 minggu lalu",
    urgent: false,
    requirements: [
      "Pengalaman mengurus pendaftaran Merek, Hak Cipta, atau Paten di DJKI",
      "Familiar dengan prosedur BPJPH / sertifikasi HALAL",
      "Kemampuan komunikasi klien yang baik",
      "Teliti, berorientasi deadline, dan mampu multitasking",
    ],
    description:
      "Layanan HKI dan sertifikasi HALAL adalah salah satu unit tumbuh tercepat di Grotivy. Anda akan membantu klien melindungi kekayaan intelektual mereka dan mendapatkan sertifikasi resmi dari lembaga berwenang.",
  },
  {
    id: 4,
    title: "Financial Advisor & Tax Consultant",
    dept: "Financial Services",
    location: "Jakarta Selatan",
    type: "Full-time",
    level: "Mid-Senior",
    salary: "Rp 10.000.000 – 16.000.000",
    posted: "1 minggu lalu",
    urgent: false,
    requirements: [
      "Lulusan S1 Akuntansi / Keuangan / Perpajakan",
      "Memiliki Brevet Pajak A & B (C diutamakan)",
      "Pengalaman 3+ tahun di KAP atau konsultasi keuangan",
      "Menguasai software akuntansi (MYOB, Accurate, SAP Basic)",
    ],
    description:
      "Bantu klien Grotivy dari berbagai industri dalam mengelola keuangan secara optimal, menyusun strategi perpajakan yang efisien, dan memastikan kepatuhan terhadap regulasi fiskal yang terus berkembang.",
  },
  {
    id: 5,
    title: "Digital Marketing Specialist",
    dept: "Marketing & Sales",
    location: "Jakarta / Hybrid",
    type: "Full-time",
    level: "Mid-level",
    salary: "Rp 7.000.000 – 12.000.000",
    posted: "2 minggu lalu",
    urgent: false,
    requirements: [
      "Pengalaman 2+ tahun di digital marketing agency atau in-house",
      "Mahir Meta Ads, Google Ads, dan SEO on/off-page",
      "Kemampuan analitik data (GA4, Meta Insights, dsb.)",
      "Kreatif, data-driven, dan paham tren digital terkini",
    ],
    description:
      "Perkuat brand Grotivy dan bantu klien kami tampil dominan di dunia digital. Anda akan mengelola kampanye iklan berbayar, strategi konten, dan membangun ekosistem digital yang menghasilkan leads berkualitas.",
  },
  {
    id: 6,
    title: "Business Development Executive",
    dept: "Sales & Partnerships",
    location: "Jakarta / Field",
    type: "Full-time",
    level: "Junior-Mid",
    salary: "Rp 6.000.000 – 10.000.000 + Komisi",
    posted: "2 minggu lalu",
    urgent: false,
    requirements: [
      "Pengalaman 1–3 tahun di sales B2B atau business development",
      "Memiliki jaringan luas di kalangan bisnis / profesional",
      "Kemampuan presentasi dan negosiasi yang kuat",
      "Target-oriented dan bersemangat dalam membangun relasi",
    ],
    description:
      "Jadilah penghubung antara Grotivy dengan calon klien potensial. Anda akan membangun pipeline penjualan, mengelola hubungan mitra strategis, dan membuka peluang bisnis baru yang berdampak pada pertumbuhan perusahaan.",
  },
  {
    id: 7,
    title: "HR Generalist",
    dept: "HR & Organization",
    location: "Jakarta Selatan",
    type: "Full-time",
    level: "Junior-Mid",
    salary: "Rp 6.000.000 – 9.000.000",
    posted: "3 minggu lalu",
    urgent: false,
    requirements: [
      "Lulusan S1 Psikologi / Manajemen SDM",
      "Pengalaman 2+ tahun di posisi HR generalis",
      "Memahami UU Ketenagakerjaan dan administrasi HRD",
      "Kemampuan interpersonal dan empati yang tinggi",
    ],
    description:
      "Bergabung sebagai bagian dari tim HR internal Grotivy dan bantu kami membangun budaya kerja yang luar biasa. Tanggung jawab meliputi rekrutmen, onboarding, penggajian, dan program pengembangan karyawan.",
  },
  {
    id: 8,
    title: "Junior Consultant (Fresh Graduate)",
    dept: "Business Advisory",
    location: "Jakarta / Hybrid",
    type: "Full-time",
    level: "Entry Level",
    salary: "Rp 4.500.000 – 7.000.000",
    posted: "3 minggu lalu",
    urgent: false,
    requirements: [
      "Fresh graduate S1/S2 semua jurusan (IPK 3.2+)",
      "Berpikir analitis dan kritis terhadap masalah bisnis",
      "Komunikatif, proaktif, dan mau belajar dengan cepat",
      "Mampu bekerja dalam tim dan di bawah tekanan",
    ],
    description:
      "Program akselerasi untuk talenta muda terbaik Indonesia. Anda akan langsung terlibat dalam proyek nyata, dibimbing oleh konsultan senior, dan mendapatkan eksposur ke berbagai industri dari minggu pertama bergabung.",
  },
];

const depts = ["Semua", "Business Advisory", "Legal & Compliance", "HKI & Sertifikasi", "Financial Services", "Marketing & Sales", "Sales & Partnerships", "HR & Organization"];
const levels = ["Semua Level", "Entry Level", "Junior-Mid", "Mid-level", "Mid-Senior", "Senior"];

const culture = [
  { icon: <Target className="w-6 h-6" />, title: "Impact-Driven", desc: "Setiap pekerjaan kami punya dampak nyata bagi bisnis klien dan ekonomi Indonesia." },
  { icon: <BookOpen className="w-6 h-6" />, title: "Growth Mindset", desc: "Belajar adalah inti budaya kami. Kami merayakan eksperimen dan belajar dari kegagalan." },
  { icon: <Users className="w-6 h-6" />, title: "One Team", desc: "Tidak ada ego di sini. Kami berkolaborasi lintas divisi demi hasil terbaik untuk klien." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Excellence First", desc: "Standar tinggi bukan tekanan — itu kebanggaan kami. Kami tidak pernah puas dengan biasa-biasa saja." },
];

function JobCard({ job, index }: { job: typeof openings[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  const waMsg = encodeURIComponent(
    `Halo Grotivy Consultant, saya tertarik melamar posisi *${job.title}* (${job.dept}). Boleh saya mengetahui informasi lebih lanjut?`
  );

  const levelColor: Record<string, string> = {
    "Entry Level": "bg-emerald-100 text-emerald-700",
    "Junior-Mid": "bg-blue-100 text-blue-700",
    "Mid-level": "bg-indigo-100 text-indigo-700",
    "Mid-Senior": "bg-purple-100 text-purple-700",
    "Senior": "bg-rose-100 text-rose-700",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#5FBDBE]/40 transition-all duration-300 group"
    >
      {/* Card header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              {job.urgent && (
                <span className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-[11px] font-bold px-2 py-0.5 rounded-full">
                  <Zap className="w-3 h-3" /> URGENT
                </span>
              )}
              <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${levelColor[job.level] ?? "bg-gray-100 text-gray-600"}`}>
                {job.level}
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#5FBDBE]/10 text-[#2C5F6F]">
                {job.type}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#2C5F6F] group-hover:text-[#5FBDBE] transition-colors leading-tight">
              {job.title}
            </h3>
            <p className="text-sm text-[#5FBDBE] font-semibold mt-0.5">{job.dept}</p>
          </div>
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#5FBDBE]/10 to-[#2C5F6F]/10 rounded-xl flex items-center justify-center group-hover:from-[#5FBDBE]/20 group-hover:to-[#2C5F6F]/20 transition-all">
            <Briefcase className="w-6 h-6 text-[#5FBDBE]" />
          </div>
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mt-3">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#5FBDBE]" />
            {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5 text-[#5FBDBE]" />
            {job.salary}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            {job.posted}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 mx-6" />

      {/* Body */}
      <div className="px-6 py-4">
        <p className="text-sm text-gray-600 leading-relaxed">{job.description}</p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-[#2C5F6F] mb-3">Persyaratan:</p>
                <ul className="space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#5FBDBE] flex-shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 mt-3 text-sm font-semibold text-[#5FBDBE] hover:text-[#2C5F6F] transition-colors"
        >
          {expanded ? "Sembunyikan detail" : "Lihat persyaratan"}
          <ChevronRight className={`w-4 h-4 transition-transform ${expanded ? "rotate-90" : ""}`} />
        </button>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6">
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white py-3 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-[#5FBDBE]/30 hover:scale-[1.02] transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4" />
          Lamar Posisi Ini via WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

export function Career() {
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("Semua");
  const [selectedLevel, setSelectedLevel] = useState("Semua Level");

  const filtered = openings.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.dept.toLowerCase().includes(search.toLowerCase());
    const matchDept = selectedDept === "Semua" || job.dept === selectedDept;
    const matchLevel = selectedLevel === "Semua Level" || job.level === selectedLevel;
    return matchSearch && matchDept && matchLevel;
  });

  const waGeneral = encodeURIComponent("Halo Grotivy Consultant, saya tertarik bergabung dengan tim Grotivy. Boleh saya mengetahui informasi karir lebih lanjut?");

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEO
        title="Lowongan Karir — Bergabung dengan Tim Grotivy"
        canonicalPath="/career"
        description="Bergabunglah dengan tim Grotivy Consultant dan berkembang bersama kami. Tersedia 8+ lowongan kerja: konsultan bisnis, legal advisor, marketing, dan lainnya. Lingkungan kerja dinamis, kompensasi kompetitif, dan growth yang nyata."
        keywords="karir grotivy, lowongan kerja grotivy, loker konsultan bisnis, karir konsultan, grotivy hiring, lowongan konsultan indonesia, kerja di grotivy, rekrutmen grotivy 2024"
        structuredData={[
          buildOrganizationSchema(),
          buildBreadcrumbSchema([
            { name: "Beranda", path: "/" },
            { name: "Karir", path: "/career" },
          ]),
        ]}
      />

      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-[#071c23] via-[#0d2830] to-[#0a2535] overflow-hidden py-24">
        {/* Decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] bg-[#5FBDBE]/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] bg-[#2C5F6F]/15 rounded-full blur-[100px]" />
        {/* Floating pills */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-[10%] hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-xs font-medium"
        >
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          Great Place to Work
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-20 right-[8%] hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-xs font-medium"
        >
          <TrendingUp className="w-3.5 h-3.5 text-[#5FBDBE]" />
          Grow with Us
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-16 left-[15%] hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-xs font-medium"
        >
          <Globe className="w-3.5 h-3.5 text-[#5FBDBE]" />
          500+ Klien Indonesia
        </motion.div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/15 border border-[#5FBDBE]/30 rounded-full px-5 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm font-semibold text-[#5FBDBE]">We're Hiring!</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Bergabunglah &amp; <br />
              <span className="bg-gradient-to-r from-[#5FBDBE] to-[#7dd8d9] bg-clip-text text-transparent">
                Ubah Bisnis Indonesia
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Bersama Grotivy Consultant, Anda bukan sekadar karyawan — Anda adalah konsultan
              yang membentuk masa depan ratusan bisnis di seluruh Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#lowongan"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#5FBDBE]/30 hover:scale-105 transition-all duration-300"
              >
                <Briefcase className="w-5 h-5" />
                Lihat Lowongan ({openings.length} Posisi)
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waGeneral}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Kirim CV Umum
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: openings.length + "+", label: "Posisi Tersedia" },
              { val: "4+", label: "Tahun Berdiri" },
              { val: "30+", label: "Tim Profesional" },
              { val: "500+", label: "Klien Aktif" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-white">{s.val}</p>
                <p className="text-sm text-gray-400 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY GROTIVY ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 rounded-full px-4 py-2 mb-4">
              <Heart className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm font-medium text-[#2C5F6F]">Mengapa Grotivy?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Lebih dari Sekadar Pekerjaan
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Kami membangun lingkungan di mana setiap individu bisa berkembang, berdampak, dan meraih potensi terbaiknya.
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
                <div className={`w-14 h-14 bg-gradient-to-br ${b.color} rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2C5F6F] mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CULTURE ─── */}
      <section className="py-20 bg-gradient-to-br from-[#071c23] via-[#0d2830] to-[#071c23] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#5FBDBE]/8 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/15 border border-[#5FBDBE]/30 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm font-medium text-[#5FBDBE]">Budaya Kerja Kami</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nilai Yang Kami Pegang Setiap Hari
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Budaya Grotivy bukan sekadar slogan di dinding — ini adalah cara kami bekerja dan berinteraksi setiap hari.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {culture.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#5FBDBE]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{c.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPEN POSITIONS ─── */}
      <section id="lowongan" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 rounded-full px-4 py-2 mb-4">
              <Briefcase className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm font-medium text-[#2C5F6F]">Posisi Tersedia</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Temukan Peran Terbaik Anda
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {filtered.length} posisi menunggu kandidat terbaik dari seluruh Indonesia
            </p>
          </motion.div>

          {/* Filters */}
          <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-8 flex flex-col md:flex-row gap-3">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari posisi atau departemen..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-[#5FBDBE] focus:outline-none"
              />
            </div>
            {/* Dept filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="pl-9 pr-8 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-[#5FBDBE] focus:outline-none bg-white cursor-pointer appearance-none min-w-[210px]"
              >
                {depts.map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
            {/* Level filter */}
            <div className="relative">
              <Award className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="pl-9 pr-8 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-[#5FBDBE] focus:outline-none bg-white cursor-pointer appearance-none min-w-[175px]"
              >
                {levels.map((l) => <option key={l}>{l}</option>)}
              </select>
            </div>
          </div>

          {/* Job Cards */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((job, i) => (
                <JobCard key={job.id} job={job} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Building2 className="w-14 h-14 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">Tidak ada posisi yang sesuai filter Anda.</p>
              <button
                onClick={() => { setSearch(""); setSelectedDept("Semua"); setSelectedLevel("Semua Level"); }}
                className="mt-4 text-sm text-[#5FBDBE] hover:underline font-semibold"
              >
                Reset filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── SPONTANEOUS APPLICATION ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#071c23] via-[#0d2830] to-[#0a2535] rounded-3xl p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#5FBDBE]/10 rounded-full blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#2C5F6F]/15 rounded-full blur-3xl" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/15 border border-[#5FBDBE]/30 rounded-full px-4 py-2 mb-5">
                <Send className="w-4 h-4 text-[#5FBDBE]" />
                <span className="text-sm font-semibold text-[#5FBDBE]">Open Submission</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Tidak Ada Posisi yang Cocok?
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                Kami selalu mencari talenta luar biasa. Kirim CV Anda secara umum dan kami akan menghubungi Anda ketika posisi yang sesuai terbuka. Jangan lewatkan kesempatan bergabung bersama Grotivy!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${waGeneral}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#5FBDBE]/30 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Kirim CV via WhatsApp
                </a>
                <a
                  href="mailto:karir@grotivy.com"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                  karir@grotivy.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 rounded-full px-4 py-2 mb-4">
              <Target className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm font-medium text-[#2C5F6F]">Proses Rekrutmen</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-3">
              Bergabung Hanya 4 Tahap
            </h2>
            <p className="text-gray-500">Proses seleksi yang transparan, cepat, dan profesional.</p>
          </motion.div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", icon: <Send className="w-6 h-6" />, title: "Kirim Lamaran", desc: "Via WhatsApp atau email dengan CV + portofolio terbaru Anda." },
                { step: "02", icon: <BookOpen className="w-6 h-6" />, title: "Seleksi Awal", desc: "Review CV & screening singkat via WhatsApp/telepon (1–3 hari)." },
                { step: "03", icon: <Users className="w-6 h-6" />, title: "Wawancara", desc: "Interview dengan HR dan user/kepala divisi terkait." },
                { step: "04", icon: <CheckCircle className="w-6 h-6" />, title: "Offering & Onboard", desc: "Surat penawaran, negosiasi, dan onboarding menyenangkan!" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-full flex items-center justify-center text-white mb-4 shadow-xl z-10">
                    {s.icon}
                    <span className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-white border-2 border-[#5FBDBE] rounded-full text-[10px] font-bold text-[#2C5F6F] flex items-center justify-center">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#2C5F6F] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}