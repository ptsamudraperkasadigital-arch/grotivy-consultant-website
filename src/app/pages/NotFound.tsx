import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { SEO } from "../components/SEO";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2C5F6F] to-[#5FBDBE] px-4">
      <SEO
        title="404 — Halaman Tidak Ditemukan"
        canonicalPath="/404"
        noIndex={true}
      />
      <div className="text-center text-white">
        <div className="mb-8">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-white text-[#2C5F6F] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Home className="mr-2 w-5 h-5" />
            Kembali ke Beranda
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2C5F6F] transition-all duration-300"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}