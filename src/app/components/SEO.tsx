import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

<<<<<<< Updated upstream
export const SITE_URL = "https://www.grotivyconsultant.my.id"; // Ganti dengan domain Anda yang sebenarnya
=======
export const SITE_URL = "https://www.grotivyconsultant.my.id//"; // Ganti dengan domain Anda yang sebenarnya
>>>>>>> Stashed changes
export const SITE_NAME = "Grotivy Consultant";
export const DEFAULT_DESCRIPTION =
  "Grotivy Consultant — One Stop Business Solution. Layanan konsultan bisnis terpercaya: pendirian PT/CV, perizinan, HKI, sertifikasi HALAL, perpajakan, dan 50+ layanan bisnis lainnya. Melayani 500+ klien seluruh Indonesia sejak 2022.";
export const DEFAULT_KEYWORDS =
  "grotivy, grotivy consultant, grotivy indonesia, konsultan bisnis, pendirian PT, perizinan usaha, HKI, sertifikasi halal, konsultan pajak, one stop business solution, jasa legalitas perusahaan, konsultan CV, izin OSS, BPOM, SIUP, TDP";
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  noIndex?: boolean;
  structuredData?: object | object[];
}

/* ─────────────────────────────────────────────────────
   StructuredData — renders JSON-LD outside of Helmet
   to avoid react-helmet-async v2 element type errors
───────────────────────────────────────────────────── */
function StructuredData({ data }: { data: object | object[] }) {
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath = "/",
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  noIndex = false,
  structuredData,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — One Stop Business Solution`;

  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const robots = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  /* Set lang="id" on <html> via DOM — avoids Helmet v2 child element error */
  useEffect(() => {
    document.documentElement.lang = "id";
  }, []);

  return (
    <>
      <Helmet>
        {/* ── Core ── */}
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content={robots} />
        <meta name="author" content={SITE_NAME} />
        <link rel="canonical" href={canonicalUrl} />

        {/* ── Geo & Language ── */}
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="Indonesian" />
        <meta name="revisit-after" content="7 days" />

        {/* ── Open Graph ── */}
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${SITE_NAME} — One Stop Business Solution`} />
        <meta property="og:locale" content="id_ID" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@grotivy" />
      </Helmet>

      {/* JSON-LD rendered outside Helmet as regular script tags */}
      {structuredData && <StructuredData data={structuredData} />}
    </>
  );
}

/* ─────────────────────────────────────────────────────
   Reusable JSON-LD Schema Builders
───────────────────────────────────────────────────── */

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["Grotivy", "Grotivy Indonesia"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 200,
      height: 60,
    },
    description: DEFAULT_DESCRIPTION,
    foundingDate: "2022",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 20 },
    areaServed: { "@type": "Country", name: "Indonesia" },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+62-838-6153-7366",
        contactType: "customer service",
        areaServed: "ID",
        availableLanguage: ["Indonesian", "English"],
        contactOption: "TollFree",
      },
    ],
    sameAs: [
      "https://www.instagram.com/grotivy",
      "https://www.linkedin.com/company/grotivy",
      "https://www.facebook.com/grotivy",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressRegion: "Jakarta",
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: "+62-838-6153-7366",
    priceRange: "$$",
    description: DEFAULT_DESCRIPTION,
    foundingDate: "2022",
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, Transfer Bank",
    areaServed: "Indonesia",
    hasMap: "https://maps.google.com/?q=Grotivy+Consultant",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressRegion: "Jakarta",
      addressLocality: "Jakarta",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "id-ID",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/all-services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function buildServiceSchema(
  name: string,
  description: string,
  path: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Indonesia" },
    serviceType: "Business Consulting",
  };
}