import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Elang Hernawan",
    position: "Direktur Utama",
    company: "PT Sumber Makmur Indonesia",
    industry: "F&B & General Trading",
    image: "https://images.unsplash.com/photo-1769069918427-86dad80a5bcf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&w=150&q=80",
    content:
      "Grotivy benar-benar membantu kami dari nol — dari pendirian perusahaan, perizinan BPOM, hingga sistem keuangan yang terstruktur. Dalam 8 bulan operasional, kami sudah bisa supply ke 3 jaringan supermarket besar. Prosesnya smooth dan timnya sangat responsif.",
    rating: 5,
    service: "Pendirian PT & Perizinan",
    result: "Supply ke 3 jaringan supermarket",
  },
  {
    name: "Rura Johan Tambun",
    position: "CEO",
    company: "PT Ratu Properti Indonesia",
    industry: "Properti & Real Estate",
    image: "https://images.unsplash.com/photo-1763598461615-610264129bea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&w=150&q=80",
    content:
      "Kami sempat stuck di proses perizinan IMB dan AMDAL selama berbulan-bulan. Grotivy hadir dan dalam 6 minggu semua izin selesai. Konsultasinya sangat komprehensif, tidak hanya legal tapi juga strategi pemasaran properti kami. Hasilnya luar biasa.",
    rating: 5,
    service: "Perizinan & Legal",
    result: "Izin selesai dalam 6 minggu",
  },
  {
    name: "Venska Pandu Sunarya Putra",
    position: "Direktur Operasional",
    company: "PT Mahadaya Putra Energi",
    industry: "Energi & Resources",
    image: "https://images.unsplash.com/photo-1757494516307-810b3ead1dbb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&w=150&q=80",
    content:
      "Bisnis energi punya regulasi yang sangat ketat. Grotivy mendampingi kami dari aspek legal, compliance lingkungan, sampai kontrak B2B dengan mitra korporat. Mereka betul-betul mengerti industri ini. Investasi terbaik yang pernah kami lakukan untuk perusahaan.",
    rating: 5,
    service: "Konsultasi Legal & Compliance",
    result: "Ekspansi ke 4 provinsi baru",
  },
  {
    name: "Adi Prasetio Budi",
    position: "COO",
    company: "PT ADA Kargo Logistik",
    industry: "Logistik & Kargo",
    image: "https://images.unsplash.com/photo-1713454056924-11f2d755bd75?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&w=150&q=80",
    content:
      "Setelah menggunakan jasa Grotivy untuk transformasi sistem manajemen logistik kami, efisiensi operasional meningkat 45%. Mereka tidak hanya konsultan — mereka mitra bisnis. Tracking real-time yang mereka bantu implementasikan benar-benar game changer.",
    rating: 5,
    service: "Business Transformation",
    result: "Efisiensi naik 45%",
  },
  {
    name: "Haeri Priatna",
    position: "CTO",
    company: "PT ITMVISION Digital Technology",
    industry: "Digital Technology",
    image: "https://images.unsplash.com/photo-1632893037506-aac33bf18107?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&w=150&q=80",
    content:
      "Sebagai perusahaan tech, kami butuh struktur legal dan kepatuhan yang solid untuk pitching ke investor. Grotivy membantu kami merapikan seluruh dokumen korporat, SOP internal, sampai struktur saham. Hasilnya? Kami berhasil menutup seed round dengan valuasi yang kami inginkan.",
    rating: 5,
    service: "Legal Korporat & Investor Ready",
    result: "Berhasil tutup seed round",
  },
  {
    name: "Doni Permadi",
    position: "Managing Director",
    company: "PT Agriintech Renewable Energy Consultan",
    industry: "AgriTech & Energi Hijau",
    image: "https://images.unsplash.com/photo-1750189953388-5ef155c12369?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&w=150&q=80",
    content:
      "Grotivy membantu kami mengurus sertifikasi energi hijau dan mendampingi proses mendapatkan grant pemerintah untuk program agritech kami. Pengetahuan mereka tentang regulasi sektor hijau sangat mendalam. Saya tidak tahu bisa secepat ini tanpa mereka.",
    rating: 5,
    service: "Sertifikasi & Grant Government",
    result: "Grant pemerintah senilai Rp 2 M",
  },
];

const avgRating = (
  testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length
).toFixed(1);

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setActive((a) => (a + 1) % testimonials.length);
  };

  const t = testimonials[active];

  return (
    <section className="py-24 bg-gradient-to-br from-[#0d2830] via-[#0f3040] to-[#0d2830] overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#5FBDBE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#2C5F6F]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/15 border border-[#5FBDBE]/30 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-[#5FBDBE] fill-[#5FBDBE]" />
            <span className="text-sm font-medium text-[#5FBDBE]">Testimoni Klien</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Apa Kata Klien Kami?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
            Dengarkan langsung dari klien-klien terpilih yang telah merasakan transformasi bisnis bersama Grotivy
          </p>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-white">{avgRating}/5</span>
            <span className="text-gray-400 text-sm">dari 200+ ulasan terverifikasi</span>
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-[#5FBDBE]/10" />

              {/* Service badge */}
              <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/20 border border-[#5FBDBE]/30 rounded-full px-3 py-1 mb-8">
                <span className="text-xs font-semibold text-[#5FBDBE]">Layanan: {t.service}</span>
              </div>

              {/* Content */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed italic mb-8">
                "{t.content}"
              </p>

              {/* Result highlight */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-10 bg-gradient-to-b from-[#5FBDBE] to-[#2C5F6F] rounded-full" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Hasil Nyata</p>
                  <p className="text-[#5FBDBE] font-bold">{t.result}</p>
                </div>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-5 border-t border-white/10 pt-6">
                <div className="relative">
                  <ImageWithFallback
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-[#5FBDBE]/50"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-[#0d2830] flex items-center justify-center">
                    <span className="text-[7px] text-white font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{t.name}</h3>
                  <p className="text-sm text-gray-400">{t.position}</p>
                  <p className="text-sm text-[#5FBDBE] font-semibold">{t.company}</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i <= t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600 fill-gray-600"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-[#5FBDBE]/30 hover:border-[#5FBDBE]/50 transition-all flex items-center justify-center text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                  className={`transition-all rounded-full ${
                    i === active
                      ? "w-8 h-2.5 bg-[#5FBDBE]"
                      : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-[#5FBDBE]/30 hover:border-[#5FBDBE]/50 transition-all flex items-center justify-center text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* All avatar thumbnails */}
        <div className="flex justify-center gap-4 flex-wrap">
          {testimonials.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center gap-2 transition-all ${i === active ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
            >
              <div className={`rounded-full p-0.5 ${i === active ? "bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F]" : "bg-transparent"}`}>
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <span className={`text-[10px] font-medium text-center max-w-[72px] leading-tight ${i === active ? "text-[#5FBDBE]" : "text-gray-500"}`}>
                {item.name.split(" ")[0]}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}