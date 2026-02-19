import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router";
import { SEO, buildOrganizationSchema, buildLocalBusinessSchema, buildWebSiteSchema } from "../components/SEO";
import { serviceCategories } from "../data/servicesData";
import { Testimonials } from "../components/Testimonials";
import { ClientLogos } from "../components/ClientLogos";
import { MediaCoverage } from "../components/MediaCoverage";
import { Partners } from "../components/Partners";
import { Certifications } from "../components/Certifications";
import { FuturisticHero } from "../components/FuturisticHero";
import { GlassCards } from "../components/GlassCards";
import { FuturisticServices } from "../components/FuturisticServices";
import { PainPoints } from "../components/PainPoints";
import { TrackingUSP } from "../components/TrackingUSP";
import { GuaranteeSection } from "../components/GuaranteeSection";
import { Suspense } from "react";

const WA_NUMBER = "6283861537366";
const WA_MESSAGE = "Halo Grotivy Consultant, saya siap memulai konsultasi gratis.";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export function Home() {
  const stats = [
    { number: "500+", label: "Klien Seluruh Indonesia" },
    { number: "4+", label: "Tahun Pengalaman" },
    { number: "50+", label: "Konsultan & Mitra Ahli" },
    { number: "50+", label: "Layanan Komprehensif" },
  ];

  const industries = [
    { label: "Banking & Finance", icon: "🏦" },
    { label: "Healthcare", icon: "🏥" },
    { label: "Retail & FMCG", icon: "🛒" },
    { label: "Manufacturing", icon: "🏭" },
    { label: "Technology", icon: "💻" },
    { label: "Energi", icon: "⚡" },
    { label: "Telekomunikasi", icon: "📡" },
    { label: "Properti", icon: "🏢" },
    { label: "Pendidikan", icon: "🎓" },
    { label: "F&B", icon: "🍽️" },
    { label: "Logistik", icon: "🚚" },
    { label: "Otomotif", icon: "🚗" },
  ];

  return (
    <div>
      <SEO
        canonicalPath="/"
        description="Grotivy Consultant — One Stop Business Solution. Jasa konsultan bisnis terpercaya: pendirian PT/CV, perizinan OSS, HKI/paten, sertifikasi HALAL, perpajakan, publikasi media, dan 50+ layanan bisnis. 500+ klien seluruh Indonesia. Hubungi kami sekarang!"
        keywords="grotivy, grotivy consultant, grotivy indonesia, konsultan bisnis terpercaya, pendirian PT murah, jasa perizinan usaha, konsultan HKI indonesia, sertifikasi halal, one stop business solution, jasa legalitas perusahaan, konsultan pajak, izin OSS, pendirian CV, BPOM, konsultan startup indonesia"
        structuredData={[
          buildOrganizationSchema(),
          buildLocalBusinessSchema(),
          buildWebSiteSchema(),
        ]}
      />
      {/* 1. HERO */}
      <FuturisticHero />

      {/* 2. TRUST BAR — Client Logos */}
      <Suspense fallback={<div className="h-40 bg-white" />}>
        <ClientLogos />
      </Suspense>

      {/* 3. MEDIA COVERAGE — Authority */}
      <Suspense fallback={<div className="h-40 bg-gray-50" />}>
        <MediaCoverage />
      </Suspense>

      {/* 4. PAIN POINTS — Empati dulu sebelum solusi */}
      <PainPoints />

      {/* 5. WHY GROTIVY — Keunggulan */}
      <GlassCards />

      {/* 6. TRACKING USP — Fitur eksklusif & diferensiasi */}
      <TrackingUSP />

      {/* 7. SERVICES — Solusi */}
      <FuturisticServices />

      {/* 8. TESTIMONIALS — Social proof dekat titik keputusan */}
      <Suspense fallback={<div className="h-96 bg-gray-50" />}>
        <Testimonials />
      </Suspense>

      {/* 9. GUARANTEE — Garansi 100% */}
      <GuaranteeSection />

      {/* 10. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 backdrop-blur-xl rounded-full px-6 py-3 mb-6 border border-[#5FBDBE]/20">
              <span className="text-sm font-medium text-[#2C5F6F]">Keahlian Lintas Industri</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C5F6F] mb-6">
              Industri yang Kami Layani
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pengalaman terbukti di berbagai sektor industri di seluruh Indonesia
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 p-6 rounded-2xl text-center hover:shadow-xl hover:border-[#5FBDBE] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {industry.icon}
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-[#2C5F6F]">
                  {industry.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CERTIFICATIONS — Authority */}
      <Suspense fallback={<div className="h-96 bg-white" />}>
        <Certifications />
      </Suspense>

      {/* 12. PARTNERS */}
      <Suspense fallback={<div className="h-96 bg-[#071c23]" />}>
        <Partners />
      </Suspense>

      {/* 13. FINAL CTA */}
      <section className="relative bg-gradient-to-br from-[#071c23] via-[#0d2830] to-[#071c23] text-white py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5FBDBE] rounded-full blur-[150px] opacity-30" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2C5F6F] rounded-full blur-[150px] opacity-35" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 mb-8 border border-white/10">
            <span className="text-sm font-medium text-gray-300">Siap Bertransformasi?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Mulai Transformasi Bisnis Anda Hari Ini
          </h2>
          <p className="text-xl mb-4 text-gray-400 max-w-2xl mx-auto">
            Konsultasikan kebutuhan bisnis Anda dengan tim expert kami.
            Konsultasi pertama <span className="text-white font-semibold">100% gratis</span>.
          </p>
          <p className="text-sm text-gray-500 mb-12">
            ⚡ Rata-rata respon kurang dari 1 jam di jam kerja
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary: WhatsApp */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi Gratis via WhatsApp
            </a>
            {/* Secondary: Form */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Isi Form Konsultasi
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Micro-trust copy */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Tanpa biaya tersembunyi
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Tanpa komitmen awal
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Data Anda terjaga kerahasiaannya
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}