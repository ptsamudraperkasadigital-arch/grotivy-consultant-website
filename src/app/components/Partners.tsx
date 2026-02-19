import { Handshake } from "lucide-react";
import { motion } from "motion/react";

// ── Real-brand SVG Logos ────────────────────────────────────────────────────

function GoogleCloudLogo() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="white" rx="14" />
      {/* Google G shape */}
      <g transform="translate(14,10) scale(0.72)">
        <path d="M72.6 36.8c0-2.5-.2-4.9-.7-7.2H37.1v13.6h19.9c-.9 4.6-3.5 8.5-7.4 11.1v9.2h12c7-6.5 11-16 11-26.7z" fill="#4285F4"/>
        <path d="M37.1 74c10 0 18.4-3.3 24.5-9l-12-9.2c-3.3 2.2-7.5 3.5-12.5 3.5-9.6 0-17.8-6.5-20.7-15.2H4.1v9.5C10.1 66.5 23 74 37.1 74z" fill="#34A853"/>
        <path d="M16.4 44.1c-.7-2.2-1.1-4.6-1.1-7s.4-4.8 1.1-7V20.6H4.1C1.5 25.8 0 31.7 0 37.1s1.5 11.3 4.1 16.5l12.3-9.5z" fill="#FBBC05"/>
        <path d="M37.1 14.9c5.4 0 10.2 1.9 14 5.5l10.5-10.5C55.5 3.8 47 0 37.1 0 23 0 10.1 7.5 4.1 20.6l12.3 9.5c2.9-8.7 11.1-15.2 20.7-15.2z" fill="#EA4335"/>
      </g>
      <text x="40" y="74" textAnchor="middle" fill="#4285F4" fontFamily="Arial,sans-serif" fontSize="9" fontWeight="700">Cloud</text>
    </svg>
  );
}

function MicrosoftAzureLogo() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="white" rx="14" />
      {/* Microsoft 4-squares */}
      <rect x="13" y="13" width="24" height="24" fill="#F25022" rx="2"/>
      <rect x="43" y="13" width="24" height="24" fill="#7FBA00" rx="2"/>
      <rect x="13" y="43" width="24" height="24" fill="#00A4EF" rx="2"/>
      <rect x="43" y="43" width="24" height="24" fill="#FFB900" rx="2"/>
    </svg>
  );
}

function AwsLogo() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="#232F3E" rx="14" />
      {/* AWS text */}
      <text x="40" y="38" textAnchor="middle" fill="white" fontFamily="Arial Black,sans-serif" fontSize="20" fontWeight="900" letterSpacing="-0.5">aws</text>
      {/* Smile arrow */}
      <path d="M22 48 Q40 58 58 48" stroke="#FF9900" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <polygon points="55,44 62,47 56,52" fill="#FF9900"/>
    </svg>
  );
}

function SapLogo() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="#0070F2" rx="14" />
      <text x="40" y="50" textAnchor="middle" fill="white" fontFamily="Arial Black,sans-serif" fontSize="32" fontWeight="900" letterSpacing="2">SAP</text>
    </svg>
  );
}

function OracleLogo() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="white" rx="14" />
      <rect x="0" y="0" width="80" height="80" fill="none" rx="14" stroke="#f3f4f6" strokeWidth="1"/>
      {/* Oracle red ellipse + text */}
      <ellipse cx="40" cy="32" rx="26" ry="16" fill="#C74634"/>
      <text x="40" y="37" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontSize="13" fontWeight="900" letterSpacing="0.5">ORACLE</text>
      <text x="40" y="60" textAnchor="middle" fill="#C74634" fontFamily="Arial,sans-serif" fontSize="8" fontWeight="600" letterSpacing="1">DATABASE PARTNER</text>
    </svg>
  );
}

function SalesforceLogo() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="white" rx="14" />
      <rect x="0" y="0" width="80" height="80" fill="none" rx="14" stroke="#f3f4f6" strokeWidth="1"/>
      {/* Salesforce cloud shape */}
      <path d="M27 45 Q22 45 22 39 Q22 33 28 33 Q29 27 35 27 Q38 23 43 25 Q47 21 52 24 Q58 24 58 31 Q63 32 63 38 Q63 45 57 45 Z" fill="#00A1E0"/>
      <text x="40" y="62" textAnchor="middle" fill="#00A1E0" fontFamily="Arial,sans-serif" fontSize="8" fontWeight="700" letterSpacing="0.5">salesforce</text>
    </svg>
  );
}

function ZoomLogo() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="#2D8CFF" rx="14" />
      {/* Camera icon */}
      <rect x="14" y="26" width="36" height="28" rx="5" fill="white"/>
      <polygon points="52,30 66,24 66,56 52,50" fill="white"/>
    </svg>
  );
}

function HubSpotLogo() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="white" rx="14" />
      <rect x="0" y="0" width="80" height="80" fill="none" rx="14" stroke="#f3f4f6" strokeWidth="1"/>
      {/* HubSpot sprocket */}
      <circle cx="40" cy="36" r="10" fill="#FF7A59"/>
      <circle cx="40" cy="36" r="4" fill="white"/>
      <rect x="38" y="14" width="4" height="10" rx="2" fill="#FF7A59"/>
      <rect x="38" y="48" width="4" height="10" rx="2" fill="#FF7A59"/>
      <rect x="14" y="34" width="10" height="4" rx="2" fill="#FF7A59"/>
      <rect x="56" y="34" width="10" height="4" rx="2" fill="#FF7A59"/>
      <rect x="22" y="20" width="4" height="10" rx="2" fill="#FF7A59" transform="rotate(45 24 25)"/>
      <rect x="54" y="20" width="4" height="10" rx="2" fill="#FF7A59" transform="rotate(-45 56 25)"/>
      <text x="40" y="68" textAnchor="middle" fill="#FF7A59" fontFamily="Arial,sans-serif" fontSize="9" fontWeight="800">HubSpot</text>
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="#0A66C2" rx="14" />
      {/* LinkedIn "in" */}
      <rect x="16" y="26" width="10" height="30" rx="1" fill="white"/>
      <circle cx="21" cy="19" r="6" fill="white"/>
      <rect x="32" y="26" width="10" height="30" rx="1" fill="white"/>
      <path d="M42 36 Q42 26 52 26 Q62 26 62 36 L62 56 L52 56 L52 38 Q52 33 47 33 Q42 33 42 38 Z" fill="white"/>
    </svg>
  );
}

function StripeLogo() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="#635BFF" rx="14" />
      {/* Stripe "S" stylized */}
      <text x="40" y="52" textAnchor="middle" fill="white" fontFamily="Arial Black,sans-serif" fontSize="40" fontWeight="900">S</text>
    </svg>
  );
}

function SlackLogo() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="white" rx="14" />
      <rect x="0" y="0" width="80" height="80" fill="none" rx="14" stroke="#f3f4f6" strokeWidth="1"/>
      {/* Slack hashtag-like logo */}
      {/* Top-left (green) */}
      <rect x="17" y="17" width="10" height="22" rx="5" fill="#36C5F0"/>
      <rect x="17" y="17" width="22" height="10" rx="5" fill="#36C5F0"/>
      {/* Dot top-left */}
      <circle cx="17" cy="22" r="5" fill="#2EB67D"/>
      {/* Top-right (yellow) */}
      <rect x="53" y="17" width="10" height="22" rx="5" fill="#ECB22E"/>
      <rect x="41" y="17" width="22" height="10" rx="5" fill="#ECB22E"/>
      {/* Dot top-right */}
      <circle cx="63" cy="22" r="5" fill="#E01E5A"/>
      {/* Bottom-left (blue) */}
      <rect x="17" y="41" width="22" height="10" rx="5" fill="#36C5F0"/>
      <rect x="17" y="41" width="10" height="22" rx="5" fill="#2EB67D"/>
      <circle cx="17" cy="58" r="5" fill="#36C5F0"/>
      {/* Bottom-right (red) */}
      <rect x="41" y="53" width="22" height="10" rx="5" fill="#E01E5A"/>
      <rect x="53" y="41" width="10" height="22" rx="5" fill="#ECB22E"/>
      <circle cx="63" cy="58" r="5" fill="#E01E5A"/>
    </svg>
  );
}

function AtlassianLogo() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="white" rx="14" />
      <rect x="0" y="0" width="80" height="80" fill="none" rx="14" stroke="#f3f4f6" strokeWidth="1"/>
      {/* Atlassian blue "A" mountain/wave shape */}
      <defs>
        <linearGradient id="atl-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2684FF"/>
          <stop offset="100%" stopColor="#0052CC"/>
        </linearGradient>
      </defs>
      <path d="M36 62 Q28 46 22 32 Q28 36 34 44 L40 18 L46 44 Q52 36 58 32 Q52 46 44 62 Z" fill="url(#atl-grad)"/>
      <text x="40" y="74" textAnchor="middle" fill="#0052CC" fontFamily="Arial,sans-serif" fontSize="8" fontWeight="700" letterSpacing="0.5">Atlassian</text>
    </svg>
  );
}

// ── Partner data ─────────────────────────────────────────────────────────────

const partners = [
  { name: "Google Cloud",   category: "Cloud Partner",       Logo: GoogleCloudLogo,   glow: "rgba(66,133,244,0.3)" },
  { name: "Microsoft Azure",category: "Technology Partner",  Logo: MicrosoftAzureLogo,glow: "rgba(0,164,239,0.3)" },
  { name: "AWS",            category: "Cloud Services",      Logo: AwsLogo,           glow: "rgba(255,153,0,0.3)" },
  { name: "SAP",            category: "ERP Partner",         Logo: SapLogo,           glow: "rgba(0,112,242,0.3)" },
  { name: "Oracle",         category: "Database Partner",    Logo: OracleLogo,        glow: "rgba(199,70,52,0.3)" },
  { name: "Salesforce",     category: "CRM Partner",         Logo: SalesforceLogo,    glow: "rgba(0,161,224,0.3)" },
  { name: "Zoom",           category: "Communication",       Logo: ZoomLogo,          glow: "rgba(45,140,255,0.3)" },
  { name: "HubSpot",        category: "Marketing Partner",   Logo: HubSpotLogo,       glow: "rgba(255,122,89,0.3)" },
  { name: "LinkedIn",       category: "Recruitment",         Logo: LinkedInLogo,      glow: "rgba(10,102,194,0.3)" },
  { name: "Stripe",         category: "Payment Partner",     Logo: StripeLogo,        glow: "rgba(99,91,255,0.3)" },
  { name: "Slack",          category: "Collaboration",       Logo: SlackLogo,         glow: "rgba(54,197,240,0.3)" },
  { name: "Atlassian",      category: "Project Management",  Logo: AtlassianLogo,     glow: "rgba(38,132,255,0.3)" },
];

// ─────────────────────────────────────────────────────────────────────────────

export function Partners() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#071c23] via-[#0d2830] to-[#071c23] text-white relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5FBDBE] rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2C5F6F] rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 mb-6 border border-white/10">
            <Handshake className="w-5 h-5 text-[#5FBDBE]" />
            <span className="text-sm font-medium text-gray-300">Technology Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Strategic Technology Partners
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Integrated with world-class platforms to deliver exceptional results
          </p>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="group relative"
            >
              <div
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:border-white/25 flex flex-col items-center gap-4"
              >
                {/* Logo box */}
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <partner.Logo />
                </div>

                {/* Text */}
                <div className="text-center">
                  <h3 className="font-bold text-white mb-1 text-sm group-hover:text-[#5FBDBE] transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">{partner.category}</p>
                </div>
              </div>

              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
                style={{ background: partner.glow }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "12+", label: "Technology Partners" },
              { value: "50+", label: "Certified Specialists" },
              { value: "100%", label: "Enterprise Grade" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
