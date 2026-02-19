import { motion } from "motion/react";
import { Target, Shield, Zap, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function GlassCards() {
  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Satu Atap, Semua Solusi",
      description: "Semua kebutuhan bisnis tersedia dalam satu tempat — dari legalitas, keuangan, HR, hingga transformasi digital. Tidak perlu pindah-pindah vendor.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Partner Terpercaya",
      description: "Dipercaya oleh 500+ perusahaan di seluruh Indonesia — dari startup early-stage hingga korporasi multinasional — dengan track record yang terverifikasi.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cepat & Terstruktur",
      description: "Proses kerja kami sistematis dengan metodologi terbukti dan teknologi terkini. Respon konsultasi kurang dari 1 jam, hasil dalam waktu nyata.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Tim Ahli Bersertifikasi",
      description: "50+ konsultan dan mitra profesional bersertifikasi dari berbagai bidang — hukum, keuangan, HR, digital, dan komunikasi bisnis.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#071c23] via-[#0a2330] to-[#071c23] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-5 py-2.5 mb-5 border border-white/10">
            <span className="text-sm font-medium text-gray-300">Keunggulan Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Mengapa Memilih Grotivy?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Partner strategis yang memberikan solusi menyeluruh untuk setiap aspek bisnis Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glass morphism card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-white/20 hover:scale-[1.02] overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="relative text-2xl font-bold mb-4 text-white group-hover:text-[#5FBDBE] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="relative text-gray-400 leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Hover arrow */}
                <div className="relative flex items-center text-[#5FBDBE] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Pelajari lebih lanjut</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/about"
            className="inline-flex items-center bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#5FBDBE]/50 transition-all duration-300 hover:scale-105"
          >
            Kenali Kami Lebih Lanjut
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}