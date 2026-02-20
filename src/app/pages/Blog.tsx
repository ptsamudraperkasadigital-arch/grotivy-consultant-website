import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Clock, Tag, ArrowRight, Search, BookOpen } from "lucide-react";
import { SEO, buildBreadcrumbSchema } from "../components/SEO";
import { blogPosts, blogCategories } from "../data/blogData";

const WA_NUMBER = "6283861537366";
const WA_MESSAGE = "Halo Grotivy Consultant, saya ingin konsultasi bisnis gratis.";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

const categoryColors: Record<string, string> = {
  "Legalitas Bisnis": "bg-blue-100 text-blue-700",
  "HKI & Sertifikasi": "bg-purple-100 text-purple-700",
  "Perizinan & Regulasi": "bg-orange-100 text-orange-700",
  "Perpajakan": "bg-red-100 text-red-700",
  "Tips Bisnis": "bg-emerald-100 text-emerald-700",
};

export function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = blogPosts.filter((post) => {
    const matchCat =
      activeCategory === "Semua" || post.category === activeCategory;
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Blog & Artikel Bisnis"
        description="Baca artikel dan tips bisnis terpercaya dari Grotivy Consultant — panduan pendirian PT, HKI, sertifikasi halal, perizinan OSS, dan strategi bisnis untuk pengusaha Indonesia."
        keywords="blog bisnis indonesia, artikel pendirian PT, tips bisnis UMKM, panduan HKI merek, sertifikasi halal BPJPH, perizinan usaha OSS"
        canonicalPath="/blog"
        structuredData={buildBreadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#071c23] via-[#0d2830] to-[#071c23] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#5FBDBE] rounded-full blur-[120px] opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 mb-6 border border-white/10">
              <BookOpen className="w-4 h-4 text-[#5FBDBE]" />
              <span className="text-sm text-gray-300">Tips & Panduan Bisnis</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Blog Grotivy Consultant
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Artikel, panduan, dan tips bisnis praktis dari para konsultan berpengalaman — khusus untuk pengusaha Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5FBDBE]/40 focus:border-[#5FBDBE]"
              />
            </div>
            {/* Category filter */}
            <div className="flex gap-2 flex-wrap">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#5FBDBE] text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p>Artikel tidak ditemukan. Coba kata kunci lain.</p>
          </div>
        ) : (
          <>
            {/* Featured Article (first one) */}
            {activeCategory === "Semua" && search === "" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <Link to={`/blog/${filtered[0].slug}`}>
                  <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 md:flex">
                    <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                      <img
                        src={filtered[0].image}
                        alt={filtered[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#5FBDBE]/10 text-[#2C5F6F] px-3 py-1 rounded-full text-xs font-semibold">
                          ⭐ Artikel Unggulan
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[filtered[0].category] || "bg-gray-100 text-gray-600"}`}>
                          {filtered[0].category}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#2C5F6F] transition-colors leading-snug">
                        {filtered[0].title}
                      </h2>
                      <p className="text-gray-500 mb-6 leading-relaxed">
                        {filtered[0].excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {filtered[0].readTime}
                        </span>
                        <span>{new Date(filtered[0].publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                      </div>
                      <div className="inline-flex items-center text-[#5FBDBE] font-semibold group-hover:gap-3 gap-2 transition-all">
                        Baca Artikel <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Rest of Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activeCategory === "Semua" && search === "" ? filtered.slice(1) : filtered).map(
                (post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100 hover:-translate-y-1 h-full flex flex-col">
                        {/* Image */}
                        <div className="h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>
                              {post.category}
                            </span>
                          </div>
                          <h3 className="font-bold text-gray-900 mb-3 group-hover:text-[#2C5F6F] transition-colors leading-snug flex-1">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                            {post.excerpt}
                          </p>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="flex items-center gap-1 text-xs text-gray-400">
                                <Tag className="w-3 h-3" />{tag}
                              </span>
                            ))}
                          </div>
                          {/* Meta */}
                          <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime}
                            </span>
                            <span>{new Date(post.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </>
        )}
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Butuh Solusi Langsung untuk Bisnis Anda?</h2>
          <p className="text-white/80 mb-8">
            Konsultasikan tantangan bisnis Anda dengan tim ahli Grotivy — gratis, tanpa komitmen.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#2C5F6F] px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Konsultasi Gratis via WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}