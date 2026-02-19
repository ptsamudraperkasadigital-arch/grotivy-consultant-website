import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, MessageCircle, Building2, Newspaper, LayoutGrid, ArrowRight, Radio, GraduationCap } from "lucide-react";
import logo from "figma:asset/135f0bbbb51f7cb406b971dd0e7b14505df17d22.png";

const WA_NUMBER = "6283861537366";
const WA_MESSAGE = "Halo Grotivy Consultant, saya ingin konsultasi gratis.";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

const serviceDropdown = [
  {
    icon: <LayoutGrid className="w-4 h-4" />,
    label: "Semua Layanan",
    sub: "50+ layanan dalam 9 kategori",
    path: "/all-services",
  },
  {
    icon: <Building2 className="w-4 h-4" />,
    label: "Pendirian Perusahaan",
    sub: "PT, CV, Yayasan & perizinan",
    path: "/pendirian-perusahaan",
  },
  {
    icon: <Newspaper className="w-4 h-4" />,
    label: "Publikasi Media & PR",
    sub: "12+ media nasional terkemuka",
    path: "/services/media-publication",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false);
  const [isMobileLayananOpen, setIsMobileLayananOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsLayananOpen(false);
    setIsMobileLayananOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsLayananOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isLayananActive = ["/all-services", "/pendirian-perusahaan", "/services/media-publication"].some(
    (p) => location.pathname.startsWith(p)
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-lg border-b border-gray-200/50"
          : "bg-white/70 backdrop-blur-xl border-b border-gray-200/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img
              src={logo}
              alt="Grotivy Consultant"
              className="h-12 group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">

            {/* Beranda */}
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                location.pathname === "/"
                  ? "text-white bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]"
                  : "text-[#2C5F6F] hover:bg-gray-100"
              }`}
            >
              Beranda
            </Link>

            {/* Layanan Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLayananOpen((v) => !v)}
                onMouseEnter={() => setIsLayananOpen(true)}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isLayananActive
                    ? "text-white bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]"
                    : "text-[#2C5F6F] hover:bg-gray-100"
                }`}
              >
                Layanan
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isLayananOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isLayananOpen && (
                <div
                  onMouseLeave={() => setIsLayananOpen(false)}
                  className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl shadow-gray-200/60 p-3 z-50"
                >
                  {serviceDropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-[#5FBDBE]/10 group transition-all duration-200"
                    >
                      <div className="mt-0.5 w-8 h-8 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#2C5F6F] group-hover:text-[#5FBDBE] transition-colors">
                          {item.label}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#5FBDBE] ml-auto self-center opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tentang Kami */}
            <Link
              to="/about"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                location.pathname === "/about"
                  ? "text-white bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]"
                  : "text-[#2C5F6F] hover:bg-gray-100"
              }`}
            >
              Tentang Kami
            </Link>

            {/* Karir */}
            <Link
              to="/career"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                location.pathname === "/career"
                  ? "text-white bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]"
                  : "text-[#2C5F6F] hover:bg-gray-100"
              }`}
            >
              Karir
            </Link>

            {/* Kemitraan */}
            <Link
              to="/partnership"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                location.pathname === "/partnership"
                  ? "text-white bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]"
                  : "text-[#2C5F6F] hover:bg-gray-100"
              }`}
            >
              Kemitraan
            </Link>

            {/* Kontak */}
            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                location.pathname === "/contact"
                  ? "text-white bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]"
                  : "text-[#2C5F6F] hover:bg-gray-100"
              }`}
            >
              Kontak
            </Link>

            {/* Track Project — CTA pill khusus */}
            <Link
              to="/tracking"
              className={`relative flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                location.pathname === "/tracking"
                  ? "text-white bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]"
                  : "text-[#2C5F6F] hover:bg-[#5FBDBE]/10 border border-[#5FBDBE]/30"
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              Track Proyek
              {location.pathname !== "/tracking" && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse border-2 border-white" />
              )}
            </Link>

            {/* CTA: WhatsApp */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-6 py-2.5 rounded-full hover:shadow-xl hover:shadow-[#5FBDBE]/30 transition-all duration-300 hover:scale-105 font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#2C5F6F] hover:text-[#5FBDBE] transition-colors p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50 space-y-1">
            <Link
              to="/"
              className={`block py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${
                location.pathname === "/" ? "text-white bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]" : "text-[#2C5F6F] hover:bg-gray-100"
              }`}
            >
              Beranda
            </Link>

            {/* Mobile Layanan accordion */}
            <div>
              <button
                onClick={() => setIsMobileLayananOpen((v) => !v)}
                className={`w-full flex items-center justify-between py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isLayananActive ? "text-white bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]" : "text-[#2C5F6F] hover:bg-gray-100"
                }`}
              >
                Layanan
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileLayananOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileLayananOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#5FBDBE]/30 pl-4">
                  {serviceDropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-2 py-2 px-3 text-sm text-[#2C5F6F] hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <span className="text-[#5FBDBE]">{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`block py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${
                location.pathname === "/about" ? "text-white bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]" : "text-[#2C5F6F] hover:bg-gray-100"
              }`}
            >
              Tentang Kami
            </Link>

            <Link
              to="/career"
              className={`block py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${
                location.pathname === "/career" ? "text-white bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]" : "text-[#2C5F6F] hover:bg-gray-100"
              }`}
            >
              Karir
            </Link>

            <Link
              to="/partnership"
              className={`block py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${
                location.pathname === "/partnership" ? "text-white bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]" : "text-[#2C5F6F] hover:bg-gray-100"
              }`}
            >
              Kemitraan
            </Link>

            <Link
              to="/contact"
              className={`block py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${
                location.pathname === "/contact" ? "text-white bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]" : "text-[#2C5F6F] hover:bg-gray-100"
              }`}
            >
              Kontak
            </Link>

            <Link
              to="/tracking"
              className={`flex items-center gap-2 py-3 px-4 text-sm font-semibold rounded-lg transition-all duration-300 ${
                location.pathname === "/tracking" ? "text-white bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F]" : "text-[#2C5F6F] border border-[#5FBDBE]/30 hover:bg-[#5FBDBE]/10"
              }`}
            >
              <Radio className="w-4 h-4" />
              Track Proyek
              <span className="ml-auto w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            </Link>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-3 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-4 py-3 rounded-full text-sm font-semibold hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Konsultasi Gratis via WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}