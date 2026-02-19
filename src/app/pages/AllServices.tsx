import { useState, useMemo } from "react";
import { Link } from "react-router";
import { Search, Filter, ArrowRight } from "lucide-react";
import { serviceCategories, allServices } from "../data/servicesData";
import { SEO, buildBreadcrumbSchema, buildServiceSchema } from "../components/SEO";

export function AllServices() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = useMemo(() => {
    return allServices.filter((service) => {
      const matchesSearch = 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "all" || service.categoryId === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEO
        title="Semua Layanan — 50+ Solusi Bisnis"
        canonicalPath="/all-services"
        description="Temukan 50+ layanan konsultasi bisnis Grotivy: pendirian PT/CV, perizinan OSS, HKI & paten, sertifikasi HALAL, perpajakan, publikasi media nasional, dan banyak lagi. One Stop Business Solution terpercaya di Indonesia."
        keywords="layanan grotivy, semua layanan konsultan bisnis, pendirian PT, pendirian CV, perizinan OSS, konsultan HKI paten, sertifikasi HALAL, konsultan pajak, konsultasi bisnis, media publikasi, grotivy layanan lengkap"
        structuredData={[
          buildBreadcrumbSchema([
            { name: "Beranda", path: "/" },
            { name: "Semua Layanan", path: "/all-services" },
          ]),
          buildServiceSchema("Layanan Konsultan Bisnis Grotivy", "50+ layanan konsultasi bisnis mencakup pendirian perusahaan, perizinan, HKI, perpajakan, sertifikasi HALAL, dan publikasi media.", "/all-services"),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C5F6F] to-[#5FBDBE] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Semua Layanan Kami
            </h1>
            <p className="text-xl text-gray-100">
              50+ layanan profesional untuk mendukung pertumbuhan bisnis Anda
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b sticky top-20 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari layanan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-[#5FBDBE] focus:outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-12 pr-8 py-3 border-2 border-gray-200 rounded-full focus:border-[#5FBDBE] focus:outline-none appearance-none bg-white min-w-[250px] cursor-pointer"
              >
                <option value="all">Semua Kategori</option>
                {serviceCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center text-gray-600">
            Menampilkan <span className="font-bold text-[#2C5F6F]">{filteredServices.length}</span> layanan
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedCategory === "all" ? (
            // Group by Category
            serviceCategories.map((category) => {
              const categoryServices = filteredServices.filter(
                (service) => service.categoryId === category.id
              );

              if (categoryServices.length === 0) return null;

              return (
                <div key={category.id} className="mb-16">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-xl flex items-center justify-center text-white">
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#2C5F6F]">
                        {category.name}
                      </h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryServices.map((service) => (
                      <Link
                        key={service.id}
                        to={service.path}
                        className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#5FBDBE] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#2C5F6F] mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {service.description}
                        </p>
                        <div className="flex items-center text-[#5FBDBE] font-semibold group-hover:gap-2 transition-all">
                          Lihat Detail
                          <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            // Single Category View
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Link
                  key={service.id}
                  to={service.path}
                  className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#5FBDBE] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2C5F6F] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{service.category}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center text-[#5FBDBE] font-semibold group-hover:gap-2 transition-all">
                    Lihat Detail
                    <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-[#2C5F6F] mb-2">
                Layanan tidak ditemukan
              </h3>
              <p className="text-gray-600 mb-6">
                Coba kata kunci lain atau pilih kategori yang berbeda
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C5F6F] to-[#5FBDBE] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tidak menemukan yang Anda cari?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Hubungi kami untuk konsultasi gratis dan solusi kustom untuk bisnis Anda
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
              href="https://wa.me/6283861537366?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20layanan"
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