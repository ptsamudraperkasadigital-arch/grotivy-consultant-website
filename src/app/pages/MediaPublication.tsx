import { useState } from "react";
import { 
  Newspaper, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Award,
  Megaphone,
  Globe,
  Star,
  Zap,
  MessageCircle,
  Shield
} from "lucide-react";
import { SEO, buildBreadcrumbSchema, buildServiceSchema } from "../components/SEO";

export function MediaPublication() {
  const mediaPackages = [
    {
      tier: "Tier 1 - Media Nasional Premium",
      media: ["Kompas", "Detik.com", "CNBC Indonesia", "Bisnis Indonesia", "Kontan"],
      price: "Rp 15.000.000 - Rp 35.000.000",
      features: [
        "Liputan di media nasional tier 1",
        "Reach 5-10 juta pembaca",
        "SEO-friendly article",
        "Social media amplification",
        "Media monitoring report"
      ],
      recommended: true
    },
    {
      tier: "Tier 2 - Media Nasional",
      media: ["Tribun News", "Liputan6", "SindoNews", "Tempo", "Katadata"],
      price: "Rp 5.000.000 - Rp 15.000.000",
      features: [
        "Publikasi di media nasional",
        "Reach 2-5 juta pembaca",
        "Article optimization",
        "Basic monitoring",
        "Performance report"
      ]
    },
    {
      tier: "Tier 3 - Media Regional",
      media: ["Media lokal & regional", "Portal berita daerah", "Media komunitas"],
      price: "Rp 2.000.000 - Rp 7.000.000",
      features: [
        "Publikasi media regional",
        "Target audience lokal",
        "SEO optimization",
        "Basic report"
      ]
    }
  ];

  const prServices = [
    {
      title: "Press Release Distribution",
      description: "Distribusi siaran pers ke 50+ media nasional",
      price: "Rp 2.500.000 - Rp 5.000.000",
      icon: <FileText className="w-8 h-8" />,
      features: [
        "Press release writing",
        "Distribusi ke 50+ media",
        "Media contact database",
        "Distribution report"
      ]
    },
    {
      title: "Media Kit Development",
      description: "Pembuatan media kit profesional untuk publikasi",
      price: "Rp 7.500.000 - Rp 15.000.000",
      icon: <Globe className="w-8 h-8" />,
      features: [
        "Company profile media",
        "Executive bios",
        "Product fact sheets",
        "High-res images",
        "Digital media kit"
      ]
    },
    {
      title: "Media Relations Management",
      description: "Manajemen hubungan media berkelanjutan",
      price: "Rp 20.000.000 - Rp 40.000.000/bulan",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Monthly media strategy",
        "Media pitching",
        "Relationship building",
        "Monthly reports",
        "Crisis communication support"
      ]
    },
    {
      title: "Crisis Communication Management",
      description: "Manajemen komunikasi krisis dan reputasi",
      price: "Rp 25.000.000 - Rp 60.000.000",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Crisis response strategy",
        "Media statement",
        "Spokesperson training",
        "24/7 support",
        "Reputation recovery"
      ]
    },
    {
      title: "Advertorial Content Creation",
      description: "Pembuatan konten advertorial berkualitas",
      price: "Rp 3.000.000 - Rp 8.000.000",
      icon: <Megaphone className="w-8 h-8" />,
      features: [
        "Professional copywriting",
        "SEO optimization",
        "Branded content",
        "Multiple revisions",
        "Editorial approval"
      ]
    },
    {
      title: "Influencer & Media Partnership",
      description: "Kolaborasi dengan influencer dan media partner",
      price: "Rp 10.000.000 - Rp 30.000.000",
      icon: <Star className="w-8 h-8" />,
      features: [
        "Influencer selection",
        "Partnership negotiation",
        "Campaign management",
        "Content creation",
        "Performance analytics"
      ]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Brand Awareness",
      description: "Tingkatkan awareness brand Anda di media nasional"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Kredibilitas",
      description: "Bangun kredibilitas melalui liputan media terpercaya"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Reach Luas",
      description: "Jangkau jutaan pembaca potensial"
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "SEO Boost",
      description: "Backlink berkualitas dari domain authority tinggi"
    }
  ];

  const mediaLogos = [
    "Kompas", "Detik.com", "CNBC Indonesia", "Bisnis Indonesia", 
    "Kontan", "Tribun News", "Liputan6", "Tempo",
    "SindoNews", "Katadata", "The Jakarta Post", "Investor Daily"
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEO
        title="Jasa Publikasi Media Nasional & PR"
        canonicalPath="/services/media-publication"
        description="Publikasikan bisnis Anda di 12+ media nasional terkemuka bersama Grotivy Consultant. Layanan press release, liputan media, manajemen reputasi, dan strategi PR profesional. Tingkatkan kredibilitas brand Anda sekarang!"
        keywords="jasa publikasi media, press release indonesia, liputan media nasional, PR consultant, grotivy media, publikasi berita bisnis, branding media, manajemen reputasi brand, media nasional indonesia"
        structuredData={[
          buildBreadcrumbSchema([
            { name: "Beranda", path: "/" },
            { name: "Semua Layanan", path: "/all-services" },
            { name: "Publikasi Media & PR", path: "/services/media-publication" },
          ]),
          buildServiceSchema(
            "Jasa Publikasi Media Nasional & PR",
            "Layanan publikasi press release dan liputan media di 12+ media nasional terkemuka Indonesia, termasuk manajemen reputasi dan strategi PR.",
            "/services/media-publication"
          ),
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2C5F6F] to-[#5FBDBE] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Newspaper className="w-5 h-5" />
              <span className="text-sm font-medium">Media Publication Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Publikasi Media Nasional & Media Relations
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Tingkatkan visibilitas brand Anda melalui publikasi di media nasional terkemuka. 
              Kami telah bekerja sama dengan 12+ media partner untuk membantu bisnis Anda dikenal luas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-[#2C5F6F] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Konsultasi Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/6283861537366?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Publikasi%20Media"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2C5F6F] transition-all duration-300"
              >
                WhatsApp Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Media Partners */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-[#5FBDBE] mb-4">MEDIA PARTNERS</p>
          <h2 className="text-2xl font-bold text-[#2C5F6F] text-center mb-8">
            Akses ke 12+ Media Nasional Terkemuka
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {mediaLogos.map((media, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-all"
              >
                <p className="font-bold text-[#2C5F6F] text-sm">{media}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Paket Publikasi Media
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilih paket publikasi yang sesuai dengan target dan budget Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaPackages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border-2 ${
                  pkg.recommended 
                    ? 'border-[#5FBDBE] shadow-xl scale-105' 
                    : 'border-gray-200 shadow-lg'
                } hover:shadow-2xl transition-all duration-300`}
              >
                {pkg.recommended && (
                  <div className="bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#2C5F6F] mb-4">{pkg.tier}</h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Target Media:</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.media.slice(0, 3).map((media, idx) => (
                      <span key={idx} className="bg-[#5FBDBE]/10 text-[#2C5F6F] text-xs px-3 py-1 rounded-full">
                        {media}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#2C5F6F] mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#5FBDBE] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center px-6 py-3 rounded-full font-semibold transition-all ${
                    pkg.recommended
                      ? 'bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white hover:shadow-xl'
                      : 'bg-gray-100 text-[#2C5F6F] hover:bg-gray-200'
                  }`}
                >
                  Pilih Paket
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PR Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Layanan Media Relations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Layanan lengkap untuk kebutuhan public relations dan media management Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#5FBDBE] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-2xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2C5F6F] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-[#2C5F6F] mb-6">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#5FBDBE] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center bg-[#5FBDBE]/10 text-[#2C5F6F] px-6 py-3 rounded-full font-semibold hover:bg-[#5FBDBE] hover:text-white transition-all"
                >
                  Hubungi Kami
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Mengapa Publikasi Media Penting?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2C5F6F] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#2C5F6F] to-[#5FBDBE] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Publikasi Brand Anda di Media Nasional?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Konsultasikan strategi publikasi media Anda dengan tim expert kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-[#2C5F6F] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/6283861537366?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Publikasi%20Media"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2C5F6F] transition-all duration-300"
            >
              WhatsApp: +62 838-6153-7366
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}