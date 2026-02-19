import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, MessageCircle, ArrowRight } from "lucide-react";
import logo from "figma:asset/135f0bbbb51f7cb406b971dd0e7b14505df17d22.png";

const WA_NUMBER = "6283861537366";
const WA_MESSAGE = "Halo Grotivy Consultant, saya ingin konsultasi bisnis.";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2C5F6F] to-[#1a3a45] text-white">

      {/* Mini CTA strip */}
      <div className="border-b border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300 font-medium">
            Siap memulai? Konsultasi pertama <span className="text-white font-bold">GRATIS</span> — respon &lt;1 jam.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b85a] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Chat WhatsApp Sekarang
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="Grotivy Consultant" className="h-14 mb-5 brightness-0 invert" />
            <p className="text-gray-300 mb-6 leading-relaxed text-sm max-w-sm">
              Grotivy Consultant adalah <strong className="text-white">One Stop Business Solution</strong> yang menyediakan
              50+ layanan komprehensif — dari pendirian perusahaan, konsultasi bisnis, keuangan,
              legal, HR, hingga transformasi digital dan publikasi media nasional.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#5FBDBE] flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#5FBDBE] flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#5FBDBE] flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] flex items-center justify-center text-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Menu Cepat */}
          <div>
            <h3 className="font-semibold mb-5 text-base">Menu Cepat</h3>
            <ul className="space-y-3">
              {[
                { label: "Beranda", to: "/" },
                { label: "Tentang Kami", to: "/about" },
                { label: "Semua Layanan", to: "/all-services" },
                { label: "Pendirian Perusahaan", to: "/pendirian-perusahaan" },
                { label: "Publikasi Media", to: "/services/media-publication" },
                { label: "Kontak", to: "/contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-gray-300 hover:text-[#5FBDBE] transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-semibold mb-5 text-base">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#5FBDBE] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  Jl. Jenderal Sudirman No. 123<br />
                  Jakarta Selatan 12910
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-[#5FBDBE] flex-shrink-0" />
                <a href="tel:+6283861537366" className="text-gray-300 text-sm hover:text-[#5FBDBE] transition-colors">
                  +62 838-6153-7366
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-[#5FBDBE] flex-shrink-0" />
                <a href="mailto:info@grotivy.com" className="text-gray-300 text-sm hover:text-[#5FBDBE] transition-colors">
                  info@grotivy.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle size={16} className="text-[#25D366] flex-shrink-0" />
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: +62 838-6153-7366
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-600/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} Grotivy Consultant. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              PSE Kominfo Terdaftar
            </span>
            <span>|</span>
            <span>ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}