import { motion } from "motion/react";
import { Building2, FileText, TrendingUp, Newspaper, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const painPoints = [
  {
    icon: <Building2 className="w-7 h-7" />,
    question: "Bingung mendirikan PT yang benar dan legal?",
    description:
      "Proses birokrasi berlapis, dokumen yang tidak jelas, dan risiko kesalahan bisa menghambat bisnis Anda sejak awal.",
    solution: "Pendirian Perusahaan",
    link: "/pendirian-perusahaan",
    color: "from-blue-500 to-blue-700",
    bg: "from-blue-50 to-blue-100/50",
    border: "border-blue-200",
  },
  {
    icon: <FileText className="w-7 h-7" />,
    question: "Kesulitan mengurus perizinan & compliance bisnis?",
    description:
      "Regulasi yang terus berubah dan compliance yang ketat membuat banyak bisnis rentan terhadap risiko hukum.",
    solution: "Konsultasi Legal & Perizinan",
    link: "/all-services",
    color: "from-purple-500 to-purple-700",
    bg: "from-purple-50 to-purple-100/50",
    border: "border-purple-200",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    question: "Bisnis stagnan dan butuh strategi pertumbuhan baru?",
    description:
      "Tanpa roadmap yang jelas dan strategi yang tepat, sulit untuk scale up dan bersaing di pasar yang semakin kompetitif.",
    solution: "Konsultasi Strategi Bisnis",
    link: "/all-services",
    color: "from-[#5FBDBE] to-[#2C5F6F]",
    bg: "from-teal-50 to-teal-100/50",
    border: "border-teal-200",
  },
  {
    icon: <Newspaper className="w-7 h-7" />,
    question: "Ingin dikenal media publik tapi tidak tahu caranya?",
    description:
      "Brand yang minim eksposur media kehilangan peluang besar untuk membangun kepercayaan dari calon klien dan investor.",
    solution: "Publikasi Media & PR",
    link: "/services/media-publication",
    color: "from-orange-500 to-orange-700",
    bg: "from-orange-50 to-orange-100/50",
    border: "border-orange-200",
  },
];

export function PainPoints() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 rounded-full px-5 py-2 mb-5 border border-[#5FBDBE]/20">
            <span className="text-sm font-medium text-[#2C5F6F]">Kami Paham Tantangan Anda</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-5">
            Apakah Anda Menghadapi Salah Satu dari Ini?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ribuan pebisnis Indonesia pernah merasakan hal yang sama — dan Grotivy hadir
            untuk menyelesaikannya bersama Anda.
          </p>
        </motion.div>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={item.link}>
                <div className={`relative bg-gradient-to-br ${item.bg} border ${item.border} rounded-2xl p-7 hover:shadow-xl transition-all duration-400 hover:-translate-y-1 overflow-hidden`}>
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#2C5F6F] transition-colors">
                    {item.question}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Solution CTA */}
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      Solusi: {item.solution}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-2 group-hover:text-[#5FBDBE] transition-all duration-300" />
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${item.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Atau punya tantangan lain yang belum terdaftar di sini?
          </p>
          <a
            href={`https://wa.me/6283861537366?text=${encodeURIComponent("Halo Grotivy, saya punya pertanyaan tentang bisnis saya.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-xl hover:shadow-[#5FBDBE]/30 transition-all duration-300 hover:scale-105"
          >
            Ceritakan Tantangan Bisnis Anda — Gratis
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
