import { TrendingUp } from "lucide-react";
import { motion } from "motion/react";

// SVG Logo marks styled after each media's real brand identity
function KompasLogo() {
  return (
    <svg viewBox="0 0 160 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="60" fill="#CC0000" rx="6" />
      <text x="80" y="38" textAnchor="middle" fill="white" fontFamily="Georgia, serif" fontSize="26" fontWeight="900" letterSpacing="3">KOMPAS</text>
    </svg>
  );
}

function DetikLogo() {
  return (
    <svg viewBox="0 0 160 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="60" fill="#ffffff" rx="6" />
      <rect width="160" height="60" fill="none" rx="6" stroke="#e5e7eb" strokeWidth="1" />
      <text x="80" y="40" textAnchor="middle" fill="#E30613" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="900" letterSpacing="-0.5">detikcom</text>
    </svg>
  );
}

function KontanLogo() {
  return (
    <svg viewBox="0 0 160 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="60" fill="#ffffff" rx="6" />
      <rect width="160" height="60" fill="none" rx="6" stroke="#e5e7eb" strokeWidth="1" />
      <text x="80" y="40" textAnchor="middle" fill="#F37021" fontFamily="Georgia, serif" fontSize="30" fontWeight="800" fontStyle="italic">Kontan</text>
    </svg>
  );
}

function BisnisIndonesiaLogo() {
  return (
    <svg viewBox="0 0 160 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="60" fill="#003478" rx="6" />
      <text x="80" y="28" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="900" letterSpacing="1">BISNIS</text>
      <text x="80" y="48" textAnchor="middle" fill="#FFD700" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="600" letterSpacing="2">INDONESIA</text>
    </svg>
  );
}

function CnbcLogo() {
  return (
    <svg viewBox="0 0 160 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="60" fill="#0A2240" rx="6" />
      <text x="50" y="40" textAnchor="middle" fill="white" fontFamily="Arial Black, sans-serif" fontSize="28" fontWeight="900" letterSpacing="-1">CNBC</text>
      <text x="118" y="35" textAnchor="middle" fill="#4FC3F7" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="600" letterSpacing="1">INDONESIA</text>
    </svg>
  );
}

function TribunLogo() {
  return (
    <svg viewBox="0 0 160 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="60" fill="#ffffff" rx="6" />
      <rect width="160" height="60" fill="none" rx="6" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="0" y="0" width="8" height="60" fill="#E8001C" rx="6" />
      <text x="90" y="39" textAnchor="middle" fill="#E8001C" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="900" letterSpacing="-0.5">tribunews</text>
    </svg>
  );
}

function TempoLogo() {
  return (
    <svg viewBox="0 0 160 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="60" fill="#8B0000" rx="6" />
      <text x="80" y="42" textAnchor="middle" fill="white" fontFamily="Times New Roman, serif" fontSize="36" fontWeight="900" letterSpacing="6">TEMPO</text>
    </svg>
  );
}

function Liputan6Logo() {
  return (
    <svg viewBox="0 0 160 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="60" fill="#ffffff" rx="6" />
      <rect width="160" height="60" fill="none" rx="6" stroke="#e5e7eb" strokeWidth="1" />
      <text x="80" y="40" textAnchor="middle" fill="#FF6600" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="900" letterSpacing="-0.5">Liputan<tspan fill="#CC3300">6</tspan></text>
    </svg>
  );
}

function SindoLogo() {
  return (
    <svg viewBox="0 0 160 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="60" fill="#003399" rx="6" />
      <text x="80" y="36" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="900" letterSpacing="1">sindonews</text>
      <line x1="20" y1="44" x2="140" y2="44" stroke="#FFD700" strokeWidth="2" />
    </svg>
  );
}

function KatadataLogo() {
  return (
    <svg viewBox="0 0 160 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="60" fill="#ffffff" rx="6" />
      <rect width="160" height="60" fill="none" rx="6" stroke="#e5e7eb" strokeWidth="1" />
      <text x="80" y="39" textAnchor="middle" fill="#009B77" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="800" letterSpacing="-0.5">Katadata</text>
    </svg>
  );
}

function JakartaPostLogo() {
  return (
    <svg viewBox="0 0 160 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="60" fill="#ffffff" rx="6" />
      <rect width="160" height="60" fill="none" rx="6" stroke="#e5e7eb" strokeWidth="1" />
      <text x="80" y="26" textAnchor="middle" fill="#B22222" fontFamily="Georgia, serif" fontSize="10" fontWeight="600" letterSpacing="2">THE</text>
      <text x="80" y="42" textAnchor="middle" fill="#1A1A2E" fontFamily="Georgia, serif" fontSize="16" fontWeight="900" letterSpacing="1">JAKARTA POST</text>
    </svg>
  );
}

function InvestorDailyLogo() {
  return (
    <svg viewBox="0 0 160 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="60" fill="#ffffff" rx="6" />
      <rect width="160" height="60" fill="none" rx="6" stroke="#e5e7eb" strokeWidth="1" />
      <text x="80" y="28" textAnchor="middle" fill="#003478" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="900" letterSpacing="1">INVESTOR</text>
      <text x="80" y="46" textAnchor="middle" fill="#C0392B" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" letterSpacing="3">DAILY</text>
    </svg>
  );
}

const mediaLogos = [
  { name: "Kompas",            category: "Print Media",    Logo: KompasLogo },
  { name: "Detik.com",         category: "Online News",    Logo: DetikLogo },
  { name: "Kontan",            category: "Business News",  Logo: KontanLogo },
  { name: "Bisnis Indonesia",  category: "Business Daily", Logo: BisnisIndonesiaLogo },
  { name: "CNBC Indonesia",    category: "Business TV",    Logo: CnbcLogo },
  { name: "Tribun News",       category: "News Network",   Logo: TribunLogo },
  { name: "Tempo",             category: "News Magazine",  Logo: TempoLogo },
  { name: "Liputan6",          category: "TV & Digital",   Logo: Liputan6Logo },
  { name: "Sindonews",         category: "News Portal",    Logo: SindoLogo },
  { name: "Katadata",          category: "Data Journalism",Logo: KatadataLogo },
  { name: "The Jakarta Post",  category: "English Daily",  Logo: JakartaPostLogo },
  { name: "Investor Daily",    category: "Financial News", Logo: InvestorDailyLogo },
];

export function MediaCoverage() {
  return (
    <section className="py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 text-[#5FBDBE]" />
            <span className="text-sm font-medium text-[#2C5F6F]">Media Coverage</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
            Diliput oleh Media Nasional Terkemuka
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kepercayaan dan pencapaian kami telah diliput oleh berbagai media nasional
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {mediaLogos.map((media, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -3, scale: 1.04 }}
              className="group flex flex-col items-center gap-2 p-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:border-[#5FBDBE]/40 transition-all duration-300 cursor-default"
            >
              {/* Logo */}
              <div className="w-full h-14 rounded-lg overflow-hidden shadow-sm">
                <media.Logo />
              </div>
              {/* Category */}
              <p className="text-[10px] text-gray-400 text-center font-medium">
                {media.category}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-gradient-to-r from-[#2C5F6F]/5 to-[#5FBDBE]/5 rounded-2xl p-8 border border-[#5FBDBE]/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#2C5F6F] mb-2">12+</div>
              <p className="text-gray-600">Media Partner</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#2C5F6F] mb-2">50+</div>
              <p className="text-gray-600">Liputan Media</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#2C5F6F] mb-2">2024</div>
              <p className="text-gray-600">Best Consultant Award</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
