import {
  TrendingUp,
  Users,
  Award,
  Target,
  BookOpen,
  BarChart,
  Shield,
  Megaphone,
  Settings,
  Globe,
  Briefcase,
  LineChart,
  FileText,
  Building2,
  Landmark,
  Coins,
  Laptop,
  ShoppingCart,
  Network,
  Scale,
  GraduationCap,
  Handshake,
  Zap,
  Cloud,
  Lock,
  Database,
  Workflow,
  PieChart,
  TrendingDown,
  Building,
  Factory,
  Newspaper,
  Fingerprint,
  Star,
} from "lucide-react";

export const serviceCategories = [
  {
    id: "business-advisory",
    name: "Business Advisory",
    description: "Konsultasi strategis untuk pertumbuhan dan transformasi bisnis",
    icon: <TrendingUp className="w-6 h-6" />,
    services: [
      {
        id: "business-strategy",
        title: "Strategi Bisnis & Perencanaan",
        description: "Pengembangan strategi bisnis komprehensif untuk pertumbuhan berkelanjutan",
        icon: <Target className="w-10 h-10" />,
        path: "/services/business-strategy"
      },
      {
        id: "business-transformation",
        title: "Transformasi Bisnis",
        description: "Program transformasi end-to-end untuk meningkatkan kinerja perusahaan",
        icon: <Zap className="w-10 h-10" />,
        path: "/services/business-transformation"
      },
      {
        id: "mergers-acquisitions",
        title: "Merger & Akuisisi",
        description: "Advisory untuk M&A dari due diligence hingga post-merger integration",
        icon: <Briefcase className="w-10 h-10" />,
        path: "/services/mergers-acquisitions"
      },
      {
        id: "market-entry",
        title: "Market Entry Strategy",
        description: "Strategi ekspansi pasar domestik dan internasional",
        icon: <Globe className="w-10 h-10" />,
        path: "/services/market-entry"
      },
      {
        id: "business-valuation",
        title: "Valuasi Bisnis",
        description: "Penilaian nilai perusahaan untuk berbagai keperluan bisnis",
        icon: <PieChart className="w-10 h-10" />,
        path: "/services/business-valuation"
      },
      {
        id: "turnaround-management",
        title: "Turnaround & Restrukturisasi",
        description: "Pemulihan dan restrukturisasi bisnis yang mengalami kesulitan",
        icon: <TrendingDown className="w-10 h-10" />,
        path: "/services/turnaround-management"
      },
    ]
  },
  {
    id: "financial-services",
    name: "Financial Services",
    description: "Solusi keuangan dan akuntansi profesional",
    icon: <BarChart className="w-6 h-6" />,
    services: [
      {
        id: "financial-advisory",
        title: "Konsultasi Keuangan",
        description: "Advisory untuk perencanaan keuangan dan optimalisasi cash flow",
        icon: <Coins className="w-10 h-10" />,
        path: "/services/financial-advisory"
      },
      {
        id: "accounting-bookkeeping",
        title: "Akuntansi & Pembukuan",
        description: "Layanan akuntansi lengkap dan pembukuan profesional",
        icon: <FileText className="w-10 h-10" />,
        path: "/services/accounting-bookkeeping"
      },
      {
        id: "audit-assurance",
        title: "Audit & Assurance",
        description: "Layanan audit internal, eksternal, dan due diligence",
        icon: <Shield className="w-10 h-10" />,
        path: "/services/audit-assurance"
      },
      {
        id: "tax-consulting",
        title: "Konsultasi Perpajakan",
        description: "Perencanaan pajak, compliance, dan optimalisasi beban pajak",
        icon: <Landmark className="w-10 h-10" />,
        path: "/services/tax-consulting"
      },
      {
        id: "fundraising",
        title: "Fundraising & Investment",
        description: "Bantuan penggalangan dana dan strategi investasi",
        icon: <TrendingUp className="w-10 h-10" />,
        path: "/services/fundraising"
      },
      {
        id: "financial-modeling",
        title: "Financial Modeling",
        description: "Pembuatan model keuangan untuk forecasting dan analisis",
        icon: <LineChart className="w-10 h-10" />,
        path: "/services/financial-modeling"
      },
    ]
  },
  {
    id: "legal-compliance",
    name: "Legal & Compliance",
    description: "Layanan hukum bisnis dan kepatuhan regulasi",
    icon: <Scale className="w-6 h-6" />,
    services: [
      {
        id: "corporate-legal",
        title: "Hukum Korporasi",
        description: "Konsultasi hukum perusahaan dan corporate governance",
        icon: <Award className="w-10 h-10" />,
        path: "/services/corporate-legal"
      },
      {
        id: "contract-management",
        title: "Manajemen Kontrak",
        description: "Drafting, review, dan negosiasi kontrak bisnis",
        icon: <FileText className="w-10 h-10" />,
        path: "/services/contract-management"
      },
      {
        id: "business-licensing",
        title: "Perizinan Usaha",
        description: "Pengurusan lengkap perizinan dan legalitas bisnis",
        icon: <Building2 className="w-10 h-10" />,
        path: "/services/business-licensing"
      },
      {
        id: "ip-protection",
        title: "Perlindungan IP",
        description: "Trademark, patent, dan copyright protection",
        icon: <Lock className="w-10 h-10" />,
        path: "/services/ip-protection"
      },
      {
        id: "compliance-management",
        title: "Compliance Management",
        description: "Manajemen kepatuhan terhadap regulasi dan standar",
        icon: <Shield className="w-10 h-10" />,
        path: "/services/compliance-management"
      },
      {
        id: "dispute-resolution",
        title: "Penyelesaian Sengketa",
        description: "Mediasi, arbitrase, dan litigasi bisnis",
        icon: <Scale className="w-10 h-10" />,
        path: "/services/dispute-resolution"
      },
    ]
  },
  {
    id: "hr-organization",
    name: "HR & Organization",
    description: "Solusi manajemen SDM dan pengembangan organisasi",
    icon: <Users className="w-6 h-6" />,
    services: [
      {
        id: "hr-consulting",
        title: "Konsultasi HR",
        description: "Strategic HR planning dan organizational development",
        icon: <Users className="w-10 h-10" />,
        path: "/services/hr-consulting"
      },
      {
        id: "recruitment-headhunting",
        title: "Recruitment & Headhunting",
        description: "Executive search dan talent acquisition",
        icon: <Target className="w-10 h-10" />,
        path: "/services/recruitment-headhunting"
      },
      {
        id: "training-development",
        title: "Training & Development",
        description: "Program pelatihan karyawan dan leadership development",
        icon: <GraduationCap className="w-10 h-10" />,
        path: "/services/training-development"
      },
      {
        id: "performance-management",
        title: "Performance Management",
        description: "Sistem penilaian kinerja dan KPI development",
        icon: <BarChart className="w-10 h-10" />,
        path: "/services/performance-management"
      },
      {
        id: "compensation-benefits",
        title: "Compensation & Benefits",
        description: "Struktur gaji, benefit, dan reward system",
        icon: <Coins className="w-10 h-10" />,
        path: "/services/compensation-benefits"
      },
      {
        id: "organizational-design",
        title: "Organizational Design",
        description: "Desain struktur organisasi dan job architecture",
        icon: <Network className="w-10 h-10" />,
        path: "/services/organizational-design"
      },
    ]
  },
  {
    id: "digital-technology",
    name: "Digital & Technology",
    description: "Transformasi digital dan solusi teknologi",
    icon: <Laptop className="w-6 h-6" />,
    services: [
      {
        id: "digital-transformation",
        title: "Digital Transformation",
        description: "End-to-end digital transformation program",
        icon: <Settings className="w-10 h-10" />,
        path: "/services/digital-transformation"
      },
      {
        id: "it-consulting",
        title: "IT Strategy & Consulting",
        description: "Perencanaan IT infrastructure dan technology roadmap",
        icon: <Laptop className="w-10 h-10" />,
        path: "/services/it-consulting"
      },
      {
        id: "software-implementation",
        title: "Software Implementation",
        description: "ERP, CRM, dan business software implementation",
        icon: <Database className="w-10 h-10" />,
        path: "/services/software-implementation"
      },
      {
        id: "data-analytics",
        title: "Data Analytics & BI",
        description: "Business intelligence dan data-driven decision making",
        icon: <LineChart className="w-10 h-10" />,
        path: "/services/data-analytics"
      },
      {
        id: "cybersecurity",
        title: "Cybersecurity",
        description: "Security assessment dan cyber risk management",
        icon: <Lock className="w-10 h-10" />,
        path: "/services/cybersecurity"
      },
      {
        id: "cloud-solutions",
        title: "Cloud Solutions",
        description: "Cloud migration dan cloud infrastructure management",
        icon: <Cloud className="w-10 h-10" />,
        path: "/services/cloud-solutions"
      },
    ]
  },
  {
    id: "marketing-sales",
    name: "Marketing & Sales",
    description: "Strategi pemasaran dan pengembangan penjualan",
    icon: <Megaphone className="w-6 h-6" />,
    services: [
      {
        id: "marketing-strategy",
        title: "Marketing Strategy",
        description: "Perencanaan strategi pemasaran komprehensif",
        icon: <Megaphone className="w-10 h-10" />,
        path: "/services/marketing-strategy"
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "SEO, SEM, social media, dan content marketing",
        icon: <Laptop className="w-10 h-10" />,
        path: "/services/digital-marketing"
      },
      {
        id: "media-publication",
        title: "Publikasi Media & PR",
        description: "Layanan publikasi media nasional dan media relations management",
        icon: <Newspaper className="w-10 h-10" />,
        path: "/services/media-publication"
      },
      {
        id: "brand-management",
        title: "Brand Management",
        description: "Brand strategy, positioning, dan brand development",
        icon: <Globe className="w-10 h-10" />,
        path: "/services/brand-management"
      },
      {
        id: "sales-excellence",
        title: "Sales Excellence",
        description: "Sales strategy, training, dan process optimization",
        icon: <TrendingUp className="w-10 h-10" />,
        path: "/services/sales-excellence"
      },
      {
        id: "customer-experience",
        title: "Customer Experience",
        description: "CX strategy dan customer journey optimization",
        icon: <Users className="w-10 h-10" />,
        path: "/services/customer-experience"
      },
      {
        id: "market-research",
        title: "Market Research",
        description: "Riset pasar dan consumer insights",
        icon: <BarChart className="w-10 h-10" />,
        path: "/services/market-research"
      },
    ]
  },
  {
    id: "operations-supply",
    name: "Operations & Supply Chain",
    description: "Optimalisasi operasional dan supply chain",
    icon: <Workflow className="w-6 h-6" />,
    services: [
      {
        id: "operations-excellence",
        title: "Operations Excellence",
        description: "Process improvement dan operational efficiency",
        icon: <Settings className="w-10 h-10" />,
        path: "/services/operations-excellence"
      },
      {
        id: "supply-chain",
        title: "Supply Chain Management",
        description: "Supply chain optimization dan logistics management",
        icon: <Network className="w-10 h-10" />,
        path: "/services/supply-chain"
      },
      {
        id: "lean-six-sigma",
        title: "Lean & Six Sigma",
        description: "Continuous improvement dan quality management",
        icon: <TrendingUp className="w-10 h-10" />,
        path: "/services/lean-six-sigma"
      },
      {
        id: "procurement",
        title: "Procurement Optimization",
        description: "Strategic sourcing dan vendor management",
        icon: <ShoppingCart className="w-10 h-10" />,
        path: "/services/procurement"
      },
      {
        id: "manufacturing",
        title: "Manufacturing Excellence",
        description: "Production optimization dan smart manufacturing",
        icon: <Factory className="w-10 h-10" />,
        path: "/services/manufacturing"
      },
    ]
  },
  {
    id: "risk-governance",
    name: "Risk & Governance",
    description: "Manajemen risiko dan corporate governance",
    icon: <Shield className="w-6 h-6" />,
    services: [
      {
        id: "risk-management",
        title: "Enterprise Risk Management",
        description: "Comprehensive risk assessment dan mitigation",
        icon: <Shield className="w-10 h-10" />,
        path: "/services/risk-management"
      },
      {
        id: "internal-audit",
        title: "Internal Audit",
        description: "Internal audit services dan control assessment",
        icon: <FileText className="w-10 h-10" />,
        path: "/services/internal-audit"
      },
      {
        id: "corporate-governance",
        title: "Corporate Governance",
        description: "Good corporate governance implementation",
        icon: <Building className="w-10 h-10" />,
        path: "/services/corporate-governance"
      },
      {
        id: "business-continuity",
        title: "Business Continuity",
        description: "BCP/DRP planning dan crisis management",
        icon: <Shield className="w-10 h-10" />,
        path: "/services/business-continuity"
      },
      {
        id: "fraud-investigation",
        title: "Fraud Investigation",
        description: "Fraud detection, investigation, dan prevention",
        icon: <Lock className="w-10 h-10" />,
        path: "/services/fraud-investigation"
      },
    ]
  },
  {
    id: "industry-specific",
    name: "Industry Specific Solutions",
    description: "Solusi khusus untuk berbagai industri",
    icon: <Building2 className="w-6 h-6" />,
    services: [
      {
        id: "banking-finance",
        title: "Banking & Finance",
        description: "Solusi khusus untuk industri perbankan dan keuangan",
        icon: <Landmark className="w-10 h-10" />,
        path: "/services/banking-finance"
      },
      {
        id: "healthcare",
        title: "Healthcare & Pharmaceuticals",
        description: "Konsultasi untuk rumah sakit dan perusahaan farmasi",
        icon: <Building2 className="w-10 h-10" />,
        path: "/services/healthcare"
      },
      {
        id: "retail-consumer",
        title: "Retail & Consumer Goods",
        description: "Solusi untuk retail dan FMCG",
        icon: <ShoppingCart className="w-10 h-10" />,
        path: "/services/retail-consumer"
      },
      {
        id: "energy-resources",
        title: "Energy & Natural Resources",
        description: "Konsultasi untuk sektor energi dan pertambangan",
        icon: <Zap className="w-10 h-10" />,
        path: "/services/energy-resources"
      },
      {
        id: "telecommunication",
        title: "Telecommunication & Media",
        description: "Solusi untuk telekomunikasi dan media",
        icon: <Network className="w-10 h-10" />,
        path: "/services/telecommunication"
      },
      {
        id: "manufacturing-industrial",
        title: "Manufacturing & Industrial",
        description: "Konsultasi untuk perusahaan manufaktur",
        icon: <Factory className="w-10 h-10" />,
        path: "/services/manufacturing-industrial"
      },
    ]
  },
  {
    id: "hki-halal-sertifikasi",
    name: "HKI & Sertifikasi",
    description: "Perlindungan kekayaan intelektual dan sertifikasi HALAL resmi",
    icon: <Fingerprint className="w-6 h-6" />,
    services: [
      {
        id: "hki-merek",
        title: "Pendaftaran Merek (Trademark)",
        description: "Lindungi nama, logo, dan identitas brand Anda secara hukum di DJKI Kemenkumham RI. Proses resmi, cepat, dan terjamin.",
        icon: <Fingerprint className="w-10 h-10" />,
        path: "/services/hki-merek",
        price: "Mulai Rp 1.500.000",
        priceNote: "Sudah termasuk biaya PNBP pemerintah",
        timeline: "7–14 hari kerja",
        highlight: true,
      },
      {
        id: "hki-hak-cipta",
        title: "Pendaftaran Hak Cipta",
        description: "Sertifikasi hak cipta untuk karya tulis, software, musik, desain, dan konten digital melalui DJKI secara resmi.",
        icon: <FileText className="w-10 h-10" />,
        path: "/services/hki-hak-cipta",
        price: "Mulai Rp 800.000",
        priceNote: "Per karya/konten yang didaftarkan",
        timeline: "5–10 hari kerja",
        highlight: false,
      },
      {
        id: "hki-paten",
        title: "Pendaftaran Paten",
        description: "Proteksi inovasi dan invensi produk Anda melalui Paten Sederhana maupun Paten Biasa di DJKI Kemenkumham.",
        icon: <Award className="w-10 h-10" />,
        path: "/services/hki-paten",
        price: "Mulai Rp 3.500.000",
        priceNote: "Paten sederhana; paten biasa mulai Rp 6.500.000",
        timeline: "14–30 hari kerja",
        highlight: false,
      },
      {
        id: "hki-desain-industri",
        title: "Desain Industri",
        description: "Perlindungan desain tampilan produk industri — bentuk, konfigurasi, komposisi warna — dari KI Desain Industri DJKI.",
        icon: <Star className="w-10 h-10" />,
        path: "/services/hki-desain-industri",
        price: "Mulai Rp 2.000.000",
        priceNote: "Sudah termasuk konsultasi dan drafting",
        timeline: "10–21 hari kerja",
        highlight: false,
      },
      {
        id: "halal-umkm",
        title: "Sertifikasi HALAL — UMKM & UMK",
        description: "Pendampingan lengkap sertifikasi HALAL via BPJPH untuk pelaku UMKM dan Usaha Kecil: makanan, minuman, kosmetik, dan produk konsumsi.",
        icon: <Shield className="w-10 h-10" />,
        path: "/services/halal-umkm",
        price: "Mulai Rp 1.500.000",
        priceNote: "Paket all-in: pendampingan, dokumen, & pengajuan",
        timeline: "14–30 hari kerja",
        highlight: true,
      },
      {
        id: "halal-menengah-besar",
        title: "Sertifikasi HALAL — Usaha Menengah & Besar",
        description: "Solusi sertifikasi HALAL komprehensif untuk perusahaan menengah dan besar: audit pabrik, dokumen SJH, hingga sertifikat MUI/BPJPH terbit.",
        icon: <Building2 className="w-10 h-10" />,
        path: "/services/halal-menengah-besar",
        price: "Mulai Rp 7.500.000",
        priceNote: "Harga tergantung skala usaha dan jumlah produk",
        timeline: "30–90 hari kerja",
        highlight: false,
      },
    ]
  },
];

// Flatten all services for easy access
export const allServices = serviceCategories.flatMap(category => 
  category.services.map(service => ({
    ...service,
    category: category.name,
    categoryId: category.id
  }))
);

// Get services by category
export const getServicesByCategory = (categoryId: string) => {
  const category = serviceCategories.find(cat => cat.id === categoryId);
  return category ? category.services : [];
};

// Get service by ID
export const getServiceById = (serviceId: string) => {
  return allServices.find(service => service.id === serviceId);
};