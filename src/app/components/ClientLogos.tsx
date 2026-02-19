import { motion } from "motion/react";
import {
  Package2,
  Building2,
  Zap,
  Truck,
  Monitor,
  Gem,
  Leaf,
  Radio,
  Tv,
  Palette,
  MapPin,
  HardHat,
} from "lucide-react";

const clients = [
  {
    name: "PT Sumber Makmur Indonesia",
    suffix: null,
    abbr: "SMI",
    category: "F&B & General Trading",
    icon: Package2,
    bg: "from-emerald-500 to-emerald-700",
    glow: "shadow-emerald-200",
    light: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
    shape: "rounded-2xl",
  },
  {
    name: "PT Ratu Properti Indonesia",
    suffix: null,
    abbr: "RPI",
    category: "Properti & Real Estate",
    icon: Building2,
    bg: "from-blue-500 to-blue-700",
    glow: "shadow-blue-200",
    light: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
    shape: "rounded-full",
  },
  {
    name: "PT Mahadaya Putra Energi",
    suffix: null,
    abbr: "MPE",
    category: "Energi & Resources",
    icon: Zap,
    bg: "from-amber-500 to-orange-600",
    glow: "shadow-amber-200",
    light: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-700",
    shape: "rounded-xl",
  },
  {
    name: "PT ADA Kargo Logistik",
    suffix: null,
    abbr: "ADA",
    category: "Logistik & Kargo",
    icon: Truck,
    bg: "from-purple-500 to-purple-700",
    glow: "shadow-purple-200",
    light: "bg-purple-50",
    border: "border-purple-100",
    text: "text-purple-700",
    shape: "rounded-2xl",
  },
  {
    name: "PT ITMVISION Digital Technology",
    suffix: null,
    abbr: "ITV",
    category: "Digital Technology",
    icon: Monitor,
    bg: "from-[#5FBDBE] to-[#2C5F6F]",
    glow: "shadow-teal-200",
    light: "bg-teal-50",
    border: "border-teal-100",
    text: "text-teal-700",
    shape: "rounded-2xl",
  },
  {
    name: "PT Adhitama Dwijaya Emerald",
    suffix: null,
    abbr: "ADE",
    category: "Investasi & Properti",
    icon: Gem,
    bg: "from-cyan-500 to-cyan-700",
    glow: "shadow-cyan-200",
    light: "bg-cyan-50",
    border: "border-cyan-100",
    text: "text-cyan-700",
    shape: "rounded-full",
  },
  {
    name: "PT Agriintech Renewable Energy",
    suffix: null,
    abbr: "ARE",
    category: "AgriTech & Energi Hijau",
    icon: Leaf,
    bg: "from-lime-500 to-green-600",
    glow: "shadow-green-200",
    light: "bg-green-50",
    border: "border-green-100",
    text: "text-green-700",
    shape: "rounded-2xl",
  },
  {
    name: "PT Sarana Jaya Mandiri Electrik",
    suffix: null,
    abbr: "SJM",
    category: "Teknik Elektrikal",
    icon: Radio,
    bg: "from-yellow-400 to-yellow-600",
    glow: "shadow-yellow-200",
    light: "bg-yellow-50",
    border: "border-yellow-100",
    text: "text-yellow-700",
    shape: "rounded-xl",
  },
  {
    name: "PT Celebes Lintas Media",
    suffix: null,
    abbr: "CLM",
    category: "Media & Komunikasi",
    icon: Tv,
    bg: "from-pink-500 to-rose-600",
    glow: "shadow-rose-200",
    light: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-700",
    shape: "rounded-2xl",
  },
  {
    name: "PT Nayaka Citra Kreasindo",
    suffix: null,
    abbr: "NCK",
    category: "Creative & Branding",
    icon: Palette,
    bg: "from-violet-500 to-purple-700",
    glow: "shadow-violet-200",
    light: "bg-violet-50",
    border: "border-violet-100",
    text: "text-violet-700",
    shape: "rounded-full",
  },
  {
    name: "PT Love Bali Holiday",
    suffix: null,
    abbr: "LBH",
    category: "Pariwisata & Hospitality",
    icon: MapPin,
    bg: "from-orange-400 to-red-500",
    glow: "shadow-orange-200",
    light: "bg-orange-50",
    border: "border-orange-100",
    text: "text-orange-700",
    shape: "rounded-2xl",
  },
  {
    name: "PT Adhi Karya Utama",
    suffix: null,
    abbr: "AKU",
    category: "Konstruksi & Infrastruktur",
    icon: HardHat,
    bg: "from-slate-500 to-slate-700",
    glow: "shadow-slate-200",
    light: "bg-slate-50",
    border: "border-slate-100",
    text: "text-slate-700",
    shape: "rounded-2xl",
  },
];

function LogoMark({
  abbr,
  icon: Icon,
  bg,
  glow,
  shape,
}: {
  abbr: string;
  icon: React.ElementType;
  bg: string;
  glow: string;
  shape: string;
}) {
  return (
    <div
      className={`relative w-16 h-16 bg-gradient-to-br ${bg} ${shape} flex flex-col items-center justify-center shadow-lg ${glow} mx-auto`}
    >
      {/* icon */}
      <Icon className="w-6 h-6 text-white/90 mb-0.5" strokeWidth={1.8} />
      {/* abbr text */}
      <span className="text-[9px] font-black text-white/80 tracking-widest leading-none">
        {abbr}
      </span>

      {/* shine overlay */}
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-black/20 via-transparent to-white/20 pointer-events-none" />
    </div>
  );
}

export function ClientLogos() {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-[#5FBDBE] uppercase mb-2">
            Klien Kami
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C5F6F]">
            Dipercaya oleh Perusahaan Terkemuka di Indonesia
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className={`flex flex-col items-center gap-3 p-5 rounded-2xl border ${client.border} ${client.light} hover:shadow-xl transition-all duration-300 cursor-default`}
            >
              <LogoMark
                abbr={client.abbr}
                icon={client.icon}
                bg={client.bg}
                glow={client.glow}
                shape={client.shape}
              />

              {/* Company name */}
              <div className="text-center">
                <p className={`text-[11px] font-bold ${client.text} leading-snug`}>
                  {client.name}
                </p>
                {client.suffix && (
                  <span className="text-[10px] font-semibold text-gray-400">
                    {client.suffix}
                  </span>
                )}
              </div>

              {/* Category chip */}
              <span
                className={`text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white border ${client.border} ${client.text}`}
              >
                {client.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-500 text-sm">
            Dan{" "}
            <span className="font-bold text-[#2C5F6F]">500+ klien lainnya</span>{" "}
            dari berbagai industri di seluruh Indonesia
          </p>
        </motion.div>
      </div>
    </section>
  );
}