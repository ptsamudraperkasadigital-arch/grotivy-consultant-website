import { CheckCircle, Award, Users, TrendingUp, Globe, Target, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Certifications } from "../components/Certifications";
import { Partners } from "../components/Partners";
import { Link } from "react-router";
import logo from "figma:asset/135f0bbbb51f7cb406b971dd0e7b14505df17d22.png";
import { SEO, buildOrganizationSchema, buildBreadcrumbSchema } from "../components/SEO";

export function About() {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Integritas",
      description: "Kami berkomitmen pada kejujuran dan transparansi dalam setiap interaksi",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Keunggulan",
      description: "Standar kualitas tertinggi dalam setiap layanan yang kami berikan",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Kolaborasi",
      description: "Bekerja sama dengan klien sebagai partner strategis jangka panjang",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Inovasi",
      description: "Solusi kreatif dan adaptif mengikuti perkembangan bisnis modern",
    },
  ];

  const timeline = [
    {
      year: "2022",
      title: "Pendirian Perusahaan",
      description: "Grotivy Consultant didirikan dengan visi menjadi partner bisnis terpercaya",
    },
    {
      year: "2023",
      title: "Ekspansi Layanan",
      description: "Menambahkan layanan konsultasi hukum dan manajemen SDM",
    },
    {
      year: "2024",
      title: "Sertifikasi Internasional",
      description: "Tim konsultan memperoleh sertifikasi internasional dari berbagai badan",
    },
    {
      year: "2025",
      title: "Transformasi Digital",
      description: "Meluncurkan layanan konsultasi digital dan pemasaran online",
    },
    {
      year: "2026",
      title: "500+ Klien",
      description: "Mencapai milestone 500+ klien dari berbagai industri",
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <SEO
        title="Tentang Kami"
        canonicalPath="/about"
        description="Kenali Grotivy Consultant lebih dalam. Berdiri sejak 2022, kami telah melayani 500+ klien bisnis seluruh Indonesia dengan 50+ layanan konsultasi. Tim berpengalaman, transparan, dan berorientasi hasil."
        keywords="tentang grotivy, profil grotivy consultant, sejarah grotivy, tim grotivy, konsultan bisnis terpercaya indonesia, grotivy 2022, one stop business solution"
        structuredData={[
          buildOrganizationSchema(),
          buildBreadcrumbSchema([
            { name: "Beranda", path: "/" },
            { name: "Tentang Kami", path: "/about" },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C5F6F] to-[#5FBDBE] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Grotivy Consultant</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Partner terpercaya dalam transformasi bisnis dengan pengalaman lebih dari 4 tahun
              membantu perusahaan mencapai tujuan strategis mereka
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-6">
                Cerita Kami
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Grotivy Consultant lahir dari visi sederhana: membantu bisnis Indonesia
                berkembang melalui strategi yang tepat dan solusi yang berkelanjutan.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sejak 2022, kami telah berkembang menjadi firma konsultan terkemuka yang
                dipercaya oleh ratusan perusahaan dari berbagai industri. Tim kami terdiri
                dari para profesional berpengalaman yang passionate dalam membantu klien
                mencapai kesuksesan.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kami percaya bahwa setiap bisnis unik, sehingga kami menyediakan solusi
                yang disesuaikan dengan kebutuhan spesifik setiap klien, bukan pendekatan
                one-size-fits-all.
              </p>
            </div>
            <div>
              <div className="relative flex items-center justify-center bg-gradient-to-br from-[#071c23] via-[#0d2830] to-[#071c23] rounded-3xl shadow-2xl overflow-hidden p-12 min-h-[340px]">
                {/* Glow blob */}
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#5FBDBE]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#2C5F6F]/25 rounded-full blur-3xl" />
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                {/* Logo */}
                <img
                  src={logo}
                  alt="Grotivy Consultant"
                  className="relative z-10 w-full max-w-xs drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-2xl flex items-center justify-center text-white mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C5F6F] mb-4">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi firma konsultan terdepan di Indonesia yang dikenal dengan
                keunggulan dalam memberikan solusi bisnis inovatif dan berkelanjutan,
                serta menjadi partner terpercaya dalam setiap transformasi bisnis klien.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-2xl flex items-center justify-center text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C5F6F] mb-4">Misi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Memberikan solusi konsultasi berkualitas tinggi yang disesuaikan dengan
                kebutuhan unik setiap klien, menggunakan pendekatan berbasis data dan
                best practices industri untuk mendorong pertumbuhan bisnis yang berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prinsip fundamental yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#2C5F6F] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-xl text-gray-600">
              Milestone penting dalam perjalanan Grotivy Consultant
            </p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm group-hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-[#2C5F6F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#2C5F6F] to-[#5FBDBE] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mari Berdiskusi Tentang Bisnis Anda
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Konsultasikan kebutuhan bisnis Anda dengan tim expert kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-[#2C5F6F] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Hubungi Kami
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2C5F6F] transition-all duration-300"
            >
              Lihat Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* Partners */}
      <Partners />
    </div>
  );
}