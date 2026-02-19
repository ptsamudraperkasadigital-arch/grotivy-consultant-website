import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { Clock, Tag, ArrowLeft, ArrowRight, Share2, MessageCircle, CheckCircle } from "lucide-react";
import { SEO, buildBreadcrumbSchema, SITE_URL } from "../components/SEO";
import { getBlogPostBySlug, blogPosts } from "../data/blogData";

const WA_NUMBER = "6283861537366";
const WA_MESSAGE = "Halo Grotivy Consultant, saya ingin konsultasi bisnis gratis.";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

const categoryColors: Record<string, string> = {
  "Legalitas Bisnis": "bg-blue-100 text-blue-700",
  "HKI & Sertifikasi": "bg-purple-100 text-purple-700",
  "Perizinan & Regulasi": "bg-orange-100 text-orange-700",
  "Tips Bisnis": "bg-emerald-100 text-emerald-700",
};

// Simple markdown-like renderer
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;
  let inTable = false;
  let tableRows: string[][] = [];
  let tableHeaders: string[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];

  const flushTable = () => {
    if (tableRows.length === 0) return;
    elements.push(
      <div key={key++} className="overflow-x-auto my-6 rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#5FBDBE]/10">
              {tableHeaders.map((h, i) => (
                <th key={i} className="px-4 py-3 text-left font-semibold text-[#2C5F6F] border-b border-gray-200">
                  {h.trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-3 text-gray-700 border-b border-gray-100">
                    {cell.trim()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableHeaders = [];
    tableRows = [];
    inTable = false;
  };

  const flushCode = () => {
    if (codeLines.length === 0) return;
    elements.push(
      <pre key={key++} className="bg-gray-900 text-green-400 rounded-xl p-5 my-6 overflow-x-auto text-sm font-mono">
        <code>{codeLines.join("\n")}</code>
      </pre>
    );
    codeLines = [];
    inCodeBlock = false;
  };

  const parseInline = (text: string) => {
    // Bold **text**
    return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        flushCode();
      } else {
        if (inTable) flushTable();
        inCodeBlock = true;
      }
      continue;
    }
    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    // Table
    if (line.trim().startsWith("|")) {
      const cells = line.split("|").filter((_, i, arr) => i > 0 && i < arr.length - 1);
      if (line.includes("---")) {
        // separator row, skip
        continue;
      }
      if (!inTable) {
        inTable = true;
        tableHeaders = cells;
      } else {
        tableRows.push(cells);
      }
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Horizontal rule
    if (line.trim() === "---") {
      elements.push(<hr key={key++} className="my-8 border-gray-200" />);
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-[#2C5F6F] mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-xl font-bold text-gray-800 mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={key++} className="border-l-4 border-[#5FBDBE] pl-5 py-2 my-4 bg-[#5FBDBE]/5 rounded-r-xl text-gray-700 italic">
          {parseInline(line.slice(2))}
        </blockquote>
      );
      continue;
    }

    // Bullet list
    if (line.startsWith("- ") || line.startsWith("✅ ") || line.startsWith("❌ ")) {
      const isCheck = line.startsWith("✅ ");
      const isCross = line.startsWith("❌ ");
      const text = line.startsWith("- ") ? line.slice(2) : line.slice(3);
      elements.push(
        <div key={key++} className="flex items-start gap-2.5 my-1.5">
          <span className="mt-1 shrink-0">
            {isCheck ? "✅" : isCross ? "❌" : <span className="w-1.5 h-1.5 bg-[#5FBDBE] rounded-full block mt-2" />}
          </span>
          <p className="text-gray-700 leading-relaxed">{parseInline(text)}</p>
        </div>
      );
      continue;
    }

    // Numbered list
    if (/^\d+\. /.test(line)) {
      const match = line.match(/^(\d+)\. (.+)/);
      if (match) {
        elements.push(
          <div key={key++} className="flex items-start gap-3 my-1.5">
            <span className="shrink-0 w-6 h-6 bg-[#5FBDBE] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
              {match[1]}
            </span>
            <p className="text-gray-700 leading-relaxed">{parseInline(match[2])}</p>
          </div>
        );
        continue;
      }
    }

    // Empty line
    if (line.trim() === "") {
      elements.push(<div key={key++} className="h-2" />);
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={key++} className="text-gray-700 leading-relaxed my-2">
        {parseInline(line)}
      </p>
    );
  }

  if (inTable) flushTable();
  if (inCodeBlock) flushCode();

  return elements;
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || "");

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const shareUrl = `${SITE_URL}/blog/${post.slug}`;
  const shareWA = `https://wa.me/?text=${encodeURIComponent(`${post.title} — Baca selengkapnya di ${shareUrl}`)}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      "@type": "Organization",
      name: "Grotivy Consultant",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Grotivy Consultant",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": shareUrl },
    keywords: post.keywords,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.keywords}
        canonicalPath={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.image}
        structuredData={[
          articleSchema,
          buildBreadcrumbSchema([
            { name: "Beranda", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      {/* Hero / Cover */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Blog
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>
                {post.category}
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 min-w-0"
          >
            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#5FBDBE]" />
                {post.readTime}
              </span>
              <span>
                {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="text-gray-400">oleh {post.author}</span>
              {/* Share */}
              <a
                href={shareWA}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-1.5 text-[#5FBDBE] hover:text-[#2C5F6F] transition-colors"
              >
                <Share2 className="w-4 h-4" /> Bagikan
              </a>
            </div>

            {/* Excerpt */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8 p-5 bg-[#5FBDBE]/5 border border-[#5FBDBE]/20 rounded-2xl">
              {post.excerpt}
            </p>

            {/* Article Body */}
            <div className="prose-content">
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-gray-200">
              <Tag className="w-4 h-4 text-gray-400" />
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Box */}
            <div className="mt-10 p-8 bg-gradient-to-br from-[#071c23] to-[#0d2830] rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-3">
                Butuh Bantuan untuk Bisnis Anda?
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Tim konsultan Grotivy siap membantu Anda mengimplementasikan solusi yang tepat. Konsultasi pertama <strong className="text-white">100% gratis</strong>.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] px-6 py-3 rounded-full font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" /> Konsultasi via WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/20 transition-all duration-300"
                >
                  Isi Form Konsultasi <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Prev / Next */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {prevPost && (
                <Link to={`/blog/${prevPost.slug}`}>
                  <div className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-[#5FBDBE] hover:shadow-md transition-all duration-300">
                    <span className="text-xs text-gray-400 flex items-center gap-1 mb-2">
                      <ArrowLeft className="w-3 h-3" /> Artikel Sebelumnya
                    </span>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-[#2C5F6F] transition-colors line-clamp-2">
                      {prevPost.title}
                    </p>
                  </div>
                </Link>
              )}
              {nextPost && (
                <Link to={`/blog/${nextPost.slug}`} className="sm:ml-auto">
                  <div className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-[#5FBDBE] hover:shadow-md transition-all duration-300 text-right">
                    <span className="text-xs text-gray-400 flex items-center gap-1 mb-2 justify-end">
                      Artikel Berikutnya <ArrowRight className="w-3 h-3" />
                    </span>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-[#2C5F6F] transition-colors line-clamp-2">
                      {nextPost.title}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </motion.article>

          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0 space-y-6">
            {/* About Grotivy */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-3">Tentang Grotivy Consultant</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                One Stop Business Solution untuk 500+ pengusaha Indonesia. Kami hadir sejak 2022 dengan 50+ layanan bisnis dan tim konsultan bersertifikasi.
              </p>
              <div className="space-y-2">
                {["500+ Klien Indonesia", "50+ Layanan Bisnis", "Konsultasi Gratis"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#5FBDBE] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" /> Konsultasi Gratis
              </a>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">Artikel Terkait</h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link key={related.slug} to={`/blog/${related.slug}`}>
                      <div className="group flex gap-3 hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-16 h-16 rounded-lg object-cover shrink-0"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-800 group-hover:text-[#2C5F6F] transition-colors line-clamp-2 leading-snug">
                            {related.title}
                          </p>
                          <span className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                            <Clock className="w-3 h-3" /> {related.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* All Blog */}
            <div className="bg-gradient-to-br from-[#5FBDBE]/10 to-[#2C5F6F]/10 border border-[#5FBDBE]/20 rounded-2xl p-6">
              <h3 className="font-bold text-[#2C5F6F] mb-2">Lihat Semua Artikel</h3>
              <p className="text-sm text-gray-600 mb-4">Tips & panduan bisnis lengkap untuk pengusaha Indonesia.</p>
              <Link
                to="/blog"
                className="flex items-center gap-2 text-[#5FBDBE] font-semibold text-sm hover:gap-3 transition-all"
              >
                Lihat Semua <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}