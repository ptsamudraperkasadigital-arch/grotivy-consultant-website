import { useParams, Link, Navigate } from "react-router";
import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";
import { allServices } from "../data/servicesData";

export function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  console.log("ServiceDetail loaded, serviceId:", serviceId);
  console.log("All services:", allServices.map(s => s.id));
  
  if (!serviceId) {
    console.log("No serviceId, redirecting to all-services");
    return <Navigate to="/all-services" replace />;
  }

  const service = allServices.find(s => s.id === serviceId);
  
  console.log("Found service:", service);

  if (!service) {
    console.log("Service not found, redirecting to all-services");
    return <Navigate to="/all-services" replace />;
  }

  // Get related services from same category
  const relatedServices = allServices
    .filter(s => s.categoryId === service.categoryId && s.id !== serviceId)
    .slice(0, 3);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C5F6F] to-[#5FBDBE] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">{service.category}</span>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                {service.icon}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              {service.description}
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
                href="https://wa.me/6283861537366?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20{service.title}"
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

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#2C5F6F] mb-6">
                Tentang Layanan Ini
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <h3 className="text-2xl font-bold text-[#2C5F6F] mt-8 mb-4">
                  Manfaat Utama
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Konsultasi dari expert berpengalaman",
                    "Solusi yang disesuaikan dengan kebutuhan bisnis Anda",
                    "Implementasi yang terstruktur dan terukur",
                    "Dukungan berkelanjutan dari tim profesional",
                    "ROI yang jelas dan terukur",
                    "Compliance dengan regulasi terkini"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#5FBDBE] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-[#2C5F6F] mt-8 mb-4">
                  Proses Kerja
                </h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Konsultasi Awal", desc: "Memahami kebutuhan dan tantangan bisnis Anda" },
                    { step: "2", title: "Analisis & Perencanaan", desc: "Menyusun strategi dan roadmap implementasi" },
                    { step: "3", title: "Implementasi", desc: "Eksekusi solusi dengan pendampingan penuh" },
                    { step: "4", title: "Monitoring & Evaluasi", desc: "Tracking progress dan continuous improvement" }
                  ].map((process, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {process.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2C5F6F] mb-1">{process.title}</h4>
                        <p className="text-gray-600 text-sm">{process.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-[#2C5F6F] to-[#5FBDBE] rounded-2xl p-8 text-white mb-6 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Hubungi Kami</h3>
                <p className="text-gray-100 mb-6">
                  Diskusikan kebutuhan Anda dengan tim expert kami
                </p>
                <div className="space-y-4 mb-6">
                  <a
                    href="https://wa.me/6283861537366"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+62 838-6153-7366</span>
                  </a>
                  <a
                    href="mailto:info@grotivy.com"
                    className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@grotivy.com</span>
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="block w-full bg-white text-[#2C5F6F] text-center px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Konsultasi Gratis
                </Link>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
                <h3 className="font-bold text-[#2C5F6F] mb-4">Layanan Terkait</h3>
                <div className="space-y-3">
                  {relatedServices.map((related) => (
                    <Link
                      key={related.id}
                      to={related.path}
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-[#5FBDBE]/10 hover:border-[#5FBDBE] border border-transparent transition-all"
                    >
                      <h4 className="font-semibold text-[#2C5F6F] text-sm mb-1">
                        {related.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {related.description}
                      </p>
                    </Link>
                  ))}
                  <Link
                    to="/all-services"
                    className="block text-center text-[#5FBDBE] font-semibold text-sm hover:text-[#2C5F6F] transition-colors mt-4"
                  >
                    Lihat Semua Layanan →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C5F6F] to-[#5FBDBE] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Konsultasikan kebutuhan {service.title.toLowerCase()} Anda dengan tim expert kami sekarang
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
              href="https://wa.me/6283861537366"
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