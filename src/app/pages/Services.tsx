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
  Check,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "strategy",
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Strategi Bisnis",
      description: "Mengembangkan strategi bisnis komprehensif yang sejalan dengan visi dan misi perusahaan Anda",
      packages: [
        {
          name: "Basic",
          price: "15.000.000",
          duration: "1 Bulan",
          features: [
            "Analisis SWOT perusahaan",
            "Riset pasar kompetitor (3 kompetitor)",
            "Business model canvas",
            "Roadmap strategi 6 bulan",
            "2x sesi konsultasi online",
            "Laporan analisis lengkap",
          ],
        },
        {
          name: "Professional",
          price: "35.000.000",
          duration: "3 Bulan",
          popular: true,
          features: [
            "Semua fitur paket Basic",
            "Riset pasar mendalam (10 kompetitor)",
            "Analisis tren industri",
            "Perencanaan KPI & metrik bisnis",
            "Revenue stream optimization",
            "Roadmap strategi 12 bulan",
            "6x sesi konsultasi (online & offline)",
            "Pendampingan implementasi",
          ],
        },
        {
          name: "Enterprise",
          price: "75.000.000",
          duration: "6 Bulan",
          features: [
            "Semua fitur paket Professional",
            "Market research komprehensif",
            "Financial modeling & projection",
            "M&A opportunity analysis",
            "Digital transformation roadmap",
            "Change management plan",
            "Unlimited konsultasi",
            "Dedicated consultant team",
            "Quarterly business review",
          ],
        },
      ],
    },
    {
      id: "hr",
      icon: <Users className="w-10 h-10" />,
      title: "Manajemen SDM",
      description: "Optimalisasi sumber daya manusia untuk meningkatkan produktivitas dan engagement karyawan",
      packages: [
        {
          name: "Basic",
          price: "12.000.000",
          duration: "1 Bulan",
          features: [
            "HR audit & assessment",
            "Job description development (10 posisi)",
            "Recruitment strategy",
            "Performance appraisal template",
            "2x sesi konsultasi",
            "HR handbook template",
          ],
        },
        {
          name: "Professional",
          price: "28.000.000",
          duration: "3 Bulan",
          popular: true,
          features: [
            "Semua fitur paket Basic",
            "Unlimited job descriptions",
            "Talent acquisition support",
            "Performance management system",
            "Compensation & benefit review",
            "Employee engagement survey",
            "Training needs analysis",
            "6x sesi konsultasi",
          ],
        },
        {
          name: "Enterprise",
          price: "65.000.000",
          duration: "6 Bulan",
          features: [
            "Semua fitur paket Professional",
            "HR transformation program",
            "Leadership development plan",
            "Organizational restructuring",
            "HRIS implementation support",
            "Succession planning",
            "Culture transformation",
            "Unlimited konsultasi",
            "Dedicated HR consultant",
          ],
        },
      ],
    },
    {
      id: "legal",
      icon: <Award className="w-10 h-10" />,
      title: "Konsultasi Hukum",
      description: "Solusi hukum bisnis yang komprehensif untuk melindungi dan mengembangkan perusahaan Anda",
      packages: [
        {
          name: "Basic",
          price: "10.000.000",
          duration: "1 Bulan",
          features: [
            "Legal compliance audit",
            "Review 5 kontrak bisnis",
            "Konsultasi perizinan usaha",
            "Legal risk assessment",
            "2x sesi konsultasi",
            "Legal checklist dokumen",
          ],
        },
        {
          name: "Professional",
          price: "25.000.000",
          duration: "3 Bulan",
          popular: true,
          features: [
            "Semua fitur paket Basic",
            "Unlimited contract review",
            "Penyusunan 10 kontrak baru",
            "Pengurusan legalitas perusahaan",
            "IP protection strategy",
            "Employment agreement templates",
            "Dispute resolution support",
            "6x sesi konsultasi",
          ],
        },
        {
          name: "Enterprise",
          price: "60.000.000",
          duration: "6 Bulan",
          features: [
            "Semua fitur paket Professional",
            "Full legal compliance program",
            "Corporate governance setup",
            "M&A legal support",
            "Litigation support",
            "Data privacy compliance (GDPR)",
            "Legal training untuk team",
            "Unlimited konsultasi",
            "Dedicated legal counsel",
          ],
        },
      ],
    },
    {
      id: "marketing",
      icon: <Megaphone className="w-10 h-10" />,
      title: "Pemasaran Digital",
      description: "Strategi pemasaran digital terintegrasi untuk meningkatkan brand awareness dan penjualan",
      packages: [
        {
          name: "Basic",
          price: "18.000.000",
          duration: "3 Bulan",
          features: [
            "Digital marketing audit",
            "Social media strategy (2 platform)",
            "Content calendar (1 bulan)",
            "SEO basic optimization",
            "Competitor analysis",
            "Monthly performance report",
            "2x sesi konsultasi/bulan",
          ],
        },
        {
          name: "Professional",
          price: "45.000.000",
          duration: "6 Bulan",
          popular: true,
          features: [
            "Semua fitur paket Basic",
            "Multi-channel strategy (5 platform)",
            "Content calendar (6 bulan)",
            "SEO advanced optimization",
            "Paid ads strategy & setup",
            "Email marketing campaign",
            "Influencer marketing plan",
            "Weekly performance review",
            "4x sesi konsultasi/bulan",
          ],
        },
        {
          name: "Enterprise",
          price: "100.000.000",
          duration: "12 Bulan",
          features: [
            "Semua fitur paket Professional",
            "Full digital transformation",
            "Marketing automation setup",
            "CRM implementation",
            "Video marketing strategy",
            "Brand repositioning",
            "Growth hacking program",
            "Dedicated marketing team",
            "Daily performance monitoring",
          ],
        },
      ],
    },
    {
      id: "finance",
      icon: <BarChart className="w-10 h-10" />,
      title: "Analisis Keuangan",
      description: "Layanan konsultasi keuangan untuk optimalisasi cash flow dan profitabilitas",
      packages: [
        {
          name: "Basic",
          price: "14.000.000",
          duration: "1 Bulan",
          features: [
            "Financial health check",
            "Cash flow analysis",
            "Profitability review",
            "Cost structure optimization",
            "Budget template & guidelines",
            "2x sesi konsultasi",
          ],
        },
        {
          name: "Professional",
          price: "32.000.000",
          duration: "3 Bulan",
          popular: true,
          features: [
            "Semua fitur paket Basic",
            "Financial forecasting (12 bulan)",
            "Budget planning & monitoring",
            "Investment analysis",
            "Working capital optimization",
            "Financial KPI dashboard",
            "Quarterly financial review",
            "6x sesi konsultasi",
          ],
        },
        {
          name: "Enterprise",
          price: "70.000.000",
          duration: "6 Bulan",
          features: [
            "Semua fitur paket Professional",
            "Financial modeling advanced",
            "Fundraising support",
            "Investor relations strategy",
            "M&A financial advisory",
            "Tax optimization strategy",
            "CFO advisory services",
            "Unlimited konsultasi",
          ],
        },
      ],
    },
    {
      id: "digital",
      icon: <Settings className="w-10 h-10" />,
      title: "Transformasi Digital",
      description: "Membantu perusahaan beradaptasi dengan era digital melalui teknologi dan proses",
      packages: [
        {
          name: "Basic",
          price: "20.000.000",
          duration: "2 Bulan",
          features: [
            "Digital readiness assessment",
            "Technology gap analysis",
            "Digital roadmap (6 bulan)",
            "Process automation planning",
            "Tool & platform recommendation",
            "3x sesi konsultasi",
          ],
        },
        {
          name: "Professional",
          price: "50.000.000",
          duration: "4 Bulan",
          popular: true,
          features: [
            "Semua fitur paket Basic",
            "Digital roadmap (12 bulan)",
            "System integration planning",
            "Change management program",
            "Digital training program",
            "Vendor selection support",
            "Implementation support",
            "8x sesi konsultasi",
          ],
        },
        {
          name: "Enterprise",
          price: "120.000.000",
          duration: "8 Bulan",
          features: [
            "Semua fitur paket Professional",
            "End-to-end transformation",
            "Custom software development plan",
            "Data analytics implementation",
            "AI & automation strategy",
            "Cybersecurity framework",
            "Full implementation support",
            "Dedicated digital consultant",
          ],
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C5F6F] to-[#5FBDBE] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Paket Layanan & Harga</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda.
              Semua harga sudah termasuk konsultasi dan dokumentasi lengkap.
            </p>
          </div>
        </div>
      </section>

      {/* Services with Pricing */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className="py-20 odd:bg-white even:bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Service Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-2xl text-white mb-6">
                {service.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
                {service.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {service.description}
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {service.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                    pkg.popular
                      ? "border-[#5FBDBE] scale-105"
                      : "border-gray-200"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-4 py-1 text-sm font-semibold rounded-bl-xl">
                      Terpopuler
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#2C5F6F] mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-gray-600">Rp</span>
                        <span className="text-4xl font-bold text-[#2C5F6F]">
                          {pkg.price.split(".")[0]}
                        </span>
                        {pkg.price.split(".")[1] && (
                          <span className="text-2xl font-bold text-[#2C5F6F]">
                            .{pkg.price.split(".").slice(1).join(".")}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mt-1">{pkg.duration}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#5FBDBE] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        pkg.popular
                          ? "bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white hover:shadow-lg hover:scale-105"
                          : "bg-gray-100 text-[#2C5F6F] hover:bg-gray-200"
                      }`}
                    >
                      Pilih Paket
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Quick Navigation */}
      <section className="py-12 bg-white border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-lg font-semibold text-[#2C5F6F] mb-6">
            Navigasi Cepat Layanan
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-6 py-2 bg-gray-100 hover:bg-gradient-to-r hover:from-[#5FBDBE] hover:to-[#2C5F6F] hover:text-white text-[#2C5F6F] rounded-full font-medium transition-all duration-300"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-10 border-2 border-[#5FBDBE]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Butuh Paket Kustom?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Kami dapat menyesuaikan layanan dengan kebutuhan spesifik bisnis Anda.
              Hubungi kami untuk paket custom atau bundling layanan dengan harga spesial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Konsultasi Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+6283861537366"
                className="inline-flex items-center justify-center border-2 border-[#2C5F6F] text-[#2C5F6F] px-8 py-4 rounded-full font-semibold hover:bg-[#2C5F6F] hover:text-white transition-all duration-300"
              >
                Hubungi: +62 838-6153-7366
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] text-center mb-12">
            Pertanyaan Umum
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Apakah harga sudah termasuk pajak?",
                a: "Harga yang tertera belum termasuk PPN 11%. Total harga final akan dikonfirmasi saat quotation.",
              },
              {
                q: "Bagaimana metode pembayaran?",
                a: "Kami menerima pembayaran melalui transfer bank, dengan skema 50% di awal dan 50% setelah selesai. Untuk paket Enterprise tersedia cicilan.",
              },
              {
                q: "Apakah bisa upgrade paket di tengah jalan?",
                a: "Tentu! Anda dapat upgrade paket kapan saja dengan membayar selisih harga yang disesuaikan dengan durasi tersisa.",
              },
              {
                q: "Berapa lama waktu pengerjaan?",
                a: "Waktu pengerjaan sesuai dengan durasi yang tertera di setiap paket. Kami juga menyediakan express service dengan biaya tambahan.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-[#2C5F6F] mb-2 text-lg">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}