import { MessageCircle, X, Clock } from "lucide-react";
import { useState } from "react";

const WA_NUMBER = "6283861537366";
const WA_MESSAGE = "Halo Grotivy Consultant, saya tertarik untuk konsultasi bisnis gratis.";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(WA_URL, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 w-80 animate-fadeIn border border-gray-200/50">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Grotivy Consultant</h3>
                  <p className="text-xs text-green-600 flex items-center gap-1 mt-0.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Online — Siap membantu Anda
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 mb-5">
              <p className="text-sm text-gray-700 leading-relaxed">
                Halo! 👋 Ada yang bisa kami bantu untuk kebutuhan bisnis Anda hari ini?
                <br /><br />
                Konsultasi pertama <strong>100% gratis</strong>, dan kami biasanya merespon dalam waktu kurang dari 1 jam.
              </p>
              <div className="flex items-center gap-1 mt-2 text-gray-400">
                <Clock className="w-3 h-3" />
                <span className="text-[11px]">Rata-rata respon &lt;1 jam</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-4 py-3 rounded-2xl font-semibold hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              Mulai Chat Sekarang — Gratis!
            </button>

            <p className="text-center text-[11px] text-gray-400 mt-3">
              🔒 Data Anda aman · Tanpa commitment awal
            </p>
          </div>
        )}

        {/* Floating button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/40 hover:scale-110 transition-all duration-300 group overflow-hidden"
          aria-label="Chat WhatsApp"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] to-[#128C7E] opacity-50 blur-xl group-hover:opacity-100 transition-opacity" />
          {isOpen ? (
            <X className="w-7 h-7 relative z-10" />
          ) : (
            <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform relative z-10" />
          )}

          {/* Pulse ring when closed */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20" />
          )}
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
}
