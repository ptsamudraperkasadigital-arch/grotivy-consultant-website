import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { serviceCategories } from "../data/servicesData";

export function FuturisticServices() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5FBDBE] rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2C5F6F] rounded-full blur-[150px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 backdrop-blur-xl rounded-full px-6 py-3 mb-6 border border-[#5FBDBE]/20">
            <span className="text-sm font-medium text-[#2C5F6F]">Solusi Komprehensif</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C5F6F] mb-6">
            50+ Layanan dalam 9 Kategori
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Semua yang Anda butuhkan untuk membangun, mengelola, dan mengembangkan bisnis — dalam satu partner terpercaya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5FBDBE]/5 to-[#2C5F6F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold text-[#2C5F6F] mb-4 group-hover:text-[#5FBDBE] transition-colors duration-300">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="relative text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Services List */}
                <ul className="relative space-y-3 mb-6">
                  {category.services.slice(0, 4).map((service, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#5FBDBE] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="group-hover:text-gray-800 transition-colors">
                        {service.title}
                      </span>
                    </li>
                  ))}
                  {category.services.length > 4 && (
                    <li className="text-sm text-[#5FBDBE] font-semibold pl-6">
                      +{category.services.length - 4} layanan lainnya
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <Link
                  to="/all-services"
                  className="relative inline-flex items-center text-[#2C5F6F] font-semibold group-hover:text-[#5FBDBE] transition-colors"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#5FBDBE]/20 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] opacity-0 group-hover:opacity-10 blur-xl rounded-3xl transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            to="/all-services"
            className="inline-flex items-center bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-[#5FBDBE]/50 transition-all duration-300 hover:scale-105"
          >
            Lihat Semua 50+ Layanan Kami
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
