import { useState } from "react";
import { Link } from "react-router";
import { SEO, buildBreadcrumbSchema, buildServiceSchema } from "../components/SEO";

export function PendirianPerusahaan() {
  const packages = [
    {
      type: "PT (Perseroan Terbatas)",
      description: "Badan usaha berbadan hukum dengan modal dasar minimal Rp 50 juta",
      popular: true,
      price: "5.500.000",
      duration: "7-14 Hari Kerja",
      features: [
        "Konsultasi gratis pemilihan nama",
        "Pengecekan nama perusahaan",
        "Pembuatan akta pendirian di notaris",
        "Pengesahan Kemenkumham",
        "NPWP Perusahaan",
        "NIB (Nomor Induk Berusaha)",
        "SK Domisili perusahaan",
        "Virtual Office 1 tahun (optional)",
        "SIUP & TDP (jika diperlukan)",
        "API jika perusahaan import",
      ],
      requirements: [
        "KTP Direksi & Komisaris",
        "KK Direksi & Komisaris", 
        "NPWP Pribadi",
        "Surat Domisili/Kontrak Sewa",
        "Pas foto 3x4 (2 lembar)",
      ],
    },
    {
      type: "PT Perorangan",
      description: "Solusi praktis untuk UMKM, cukup 1 orang dengan modal minimal Rp 0",
      popular: true,
      price: "3.500.000",
      duration: "5-10 Hari Kerja",
      features: [
        "Konsultasi gratis",
        "Pengecekan nama perusahaan",
        "Pembuatan akta pendirian",
        "Pengesahan Kemenkumham",
        "NPWP Perusahaan",
        "NIB (Nomor Induk Berusaha)",
        "SK Domisili",
        "Tanpa modal minimum",
        "Proses lebih cepat",
        "Biaya lebih terjangkau",
      ],
      requirements: [
        "KTP Pendiri",
        "KK Pendiri",
        "NPWP Pribadi",
        "Surat Domisili",
        "Pas foto 3x4",
      ],
    },
    {
      type: "CV (Commanditaire Vennootschap)",
      description: "Persekutuan komanditer dengan 2 atau lebih pendiri",
      popular: false,
      price: "4.000.000",
      duration: "7-10 Hari Kerja",
      features: [
        "Konsultasi gratis",
        "Pengecekan nama",
        "Pembuatan akta pendirian",
        "NPWP Perusahaan",
        "NIB (Nomor Induk Berusaha)",
        "SK Domisili",
        "Pendaftaran akta ke notaris",
        "Tanpa pengesahan Kemenkumham",
        "Proses lebih sederhana",
      ],
      requirements: [
        "KTP semua pendiri (min. 2 orang)",
        "KK semua pendiri",
        "NPWP Pribadi",
        "Surat Domisili",
        "Pas foto 3x4",
      ],
    },
    {
      type: "Firma",
      description: "Persekutuan untuk menjalankan usaha dengan nama bersama",
      popular: false,
      price: "3.800.000",
      duration: "7-10 Hari Kerja",
      features: [
        "Konsultasi gratis",
        "Pengecekan nama",
        "Pembuatan akta pendirian",
        "NPWP Perusahaan",
        "NIB (Nomor Induk Berusaha)",
        "SK Domisili",
        "Tanggung jawab bersama",
      ],
      requirements: [
        "KTP semua pendiri (min. 2 orang)",
        "KK semua pendiri",
        "NPWP Pribadi",
        "Surat Domisili",
      ],
    },
    {
      type: "UD (Usaha Dagang)",
      description: "Bentuk usaha paling sederhana untuk perorangan",
      popular: false,
      price: "2.500.000",
      duration: "3-7 Hari Kerja",
      features: [
        "Konsultasi gratis",
        "Pembuatan akta",
        "NPWP Perusahaan",
        "NIB (Nomor Induk Berusaha)",
        "Surat Keterangan Usaha",
        "Proses paling cepat",
      ],
      requirements: [
        "KTP Pemilik",
        "KK Pemilik",
        "NPWP Pribadi",
        "Surat Domisili",
      ],
    },
    {
      type: "Yayasan",
      description: "Badan hukum nirlaba untuk kegiatan sosial, keagamaan, atau kemanusiaan",
      popular: false,
      price: "7.000.000",
      duration: "14-21 Hari Kerja",
      features: [
        "Konsultasi gratis",
        "Pengecekan nama yayasan",
        "Pembuatan akta pendirian",
        "Pengesahan Kemenkumham",
        "NPWP Yayasan",
        "SK Domisili",
        "Anggaran dasar & anggaran rumah tangga",
      ],
      requirements: [
        "KTP Pengurus (min. 3 orang)",
        "KK Pengurus",
        "NPWP Pribadi",
        "Surat Domisili",
        "Program kerja yayasan",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Terpercaya & Legal",
      description: "Bekerja sama dengan notaris bersertifikat dan terdaftar",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Proses Cepat",
      description: "Dijamin selesai tepat waktu atau uang kembali",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Dokumen Lengkap",
      description: "Semua dokumen legal diserahkan dalam bentuk fisik & digital",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Gratis Konsultasi",
      description: "Konsultasi tanpa batas selama proses pendirian",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Konsultasi & Pemilihan Paket",
      description: "Diskusi kebutuhan bisnis dan pilih jenis badan usaha yang tepat",
    },
    {
      step: "02",
      title: "Persiapan Dokumen",
      description: "Kirimkan dokumen persyaratan yang diperlukan",
    },
    {
      step: "03",
      title: "Pengecekan Nama",
      description: "Kami cek ketersediaan nama perusahaan yang diinginkan",
    },
    {
      step: "04",
      title: "Pembuatan Akta",
      description: "Pembuatan akta pendirian di notaris terpercaya",
    },
    {
      step: "05",
      title: "Pengurusan Legalitas",
      description: "Mengurus NIB, NPWP, dan dokumen legalitas lainnya",
    },
    {
      step: "06",
      title: "Serah Terima Dokumen",
      description: "Penyerahan dokumen lengkap fisik dan digital",
    },
  ];

  const comparisons = [
    {
      aspect: "Modal Minimum",
      pt: "Rp 50 juta",
      ptPerorangan: "Rp 0",
      cv: "Tidak ada",
      firma: "Tidak ada",
    },
    {
      aspect: "Jumlah Pendiri",
      pt: "Min. 2 orang",
      ptPerorangan: "1 orang",
      cv: "Min. 2 orang",
      firma: "Min. 2 orang",
    },
    {
      aspect: "Badan Hukum",
      pt: "Ya",
      ptPerorangan: "Ya",
      cv: "Tidak",
      firma: "Tidak",
    },
    {
      aspect: "Tanggung Jawab",
      pt: "Terbatas",
      ptPerorangan: "Terbatas",
      cv: "Tidak terbatas",
      firma: "Tidak terbatas",
    },
    {
      aspect: "Pengesahan",
      pt: "Kemenkumham",
      ptPerorangan: "Kemenkumham",
      cv: "Tidak perlu",
      firma: "Tidak perlu",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEO
        title="Jasa Pendirian Perusahaan PT, CV & Yayasan"
        canonicalPath="/pendirian-perusahaan"
        description="Jasa pendirian PT, CV, Yayasan, dan badan usaha lainnya oleh Grotivy Consultant. Proses cepat, legal, dan terpercaya. Melayani perizinan OSS, NPWP, SIUP, TDP, dan dokumen legalitas bisnis lengkap. Konsultasi gratis!"
        keywords="jasa pendirian PT, buat PT murah, pendirian CV, jasa pendirian perusahaan jakarta, buka PT cepat, pendirian yayasan, legalitas perusahaan, OSS perizinan, NPWP perusahaan, grotivy pendirian perusahaan"
        structuredData={[
          buildBreadcrumbSchema([
            { name: "Beranda", path: "/" },
            { name: "Semua Layanan", path: "/all-services" },
            { name: "Pendirian Perusahaan", path: "/pendirian-perusahaan" },
          ]),
          buildServiceSchema(
            "Jasa Pendirian Perusahaan (PT, CV, Yayasan)",
            "Layanan pendirian PT, CV, Yayasan, dan badan usaha lengkap dengan perizinan OSS, NPWP, SIUP oleh Grotivy Consultant.",
            "/pendirian-perusahaan"
          ),
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C5F6F] to-[#5FBDBE] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pendirian Perusahaan
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed mb-8">
              Layanan pendirian PT, PT Perorangan, CV, dan badan usaha lainnya.
              Proses cepat, aman, dan terpercaya dengan harga terjangkau.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Proses Cepat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Harga Transparan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Legal & Terpercaya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-xl text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-[#2C5F6F] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Paket Pendirian Perusahaan
            </h2>
            <p className="text-xl text-gray-600">
              Pilih jenis badan usaha yang sesuai dengan kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.popular ? "border-[#5FBDBE]" : "border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-4 py-2 text-center text-sm font-semibold">
                    <Star className="w-4 h-4 inline mr-1" />
                    Paling Populer
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#2C5F6F] mb-2">
                    {pkg.type}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 min-h-[40px]">
                    {pkg.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-gray-600">Rp</span>
                      <span className="text-4xl font-bold text-[#2C5F6F]">
                        {pkg.price.split(".")[0]}
                      </span>
                      {pkg.price.split(".")[1] && (
                        <span className="text-2xl font-bold text-[#2C5F6F]">
                          .{pkg.price.split(".").slice(1).join(".")}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mt-1 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#2C5F6F] mb-3 text-sm">
                      Yang Anda Dapatkan:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-[#5FBDBE] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 pb-6 border-b">
                    <h4 className="font-semibold text-[#2C5F6F] mb-3 text-sm">
                      Persyaratan:
                    </h4>
                    <ul className="space-y-1">
                      {pkg.requirements.map((req, idx) => (
                        <li key={idx} className="text-gray-600 text-xs flex items-center gap-1">
                          <span className="w-1 h-1 bg-[#5FBDBE] rounded-full"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white hover:shadow-lg hover:scale-105"
                        : "bg-gray-100 text-[#2C5F6F] hover:bg-gray-200"
                    }`}
                  >
                    Pesan Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Perbandingan Badan Usaha
            </h2>
            <p className="text-xl text-gray-600">
              Bandingkan untuk memilih yang paling sesuai
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#2C5F6F] to-[#5FBDBE] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Aspek</th>
                  <th className="px-6 py-4 text-left font-semibold">PT</th>
                  <th className="px-6 py-4 text-left font-semibold">PT Perorangan</th>
                  <th className="px-6 py-4 text-left font-semibold">CV</th>
                  <th className="px-6 py-4 text-left font-semibold">Firma</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-[#2C5F6F]">
                      {row.aspect}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{row.pt}</td>
                    <td className="px-6 py-4 text-gray-700">{row.ptPerorangan}</td>
                    <td className="px-6 py-4 text-gray-700">{row.cv}</td>
                    <td className="px-6 py-4 text-gray-700">{row.firma}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Proses Pendirian
            </h2>
            <p className="text-xl text-gray-600">
              6 langkah mudah untuk mendirikan perusahaan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[#2C5F6F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] text-center mb-12">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Apa perbedaan PT dan PT Perorangan?",
                a: "PT memerlukan minimal 2 pendiri dengan modal minimum Rp 50 juta, sedangkan PT Perorangan cukup 1 orang dan tanpa modal minimum. Keduanya berbadan hukum dan memiliki tanggung jawab terbatas.",
              },
              {
                q: "Berapa lama proses pendirian perusahaan?",
                a: "Tergantung jenis badan usaha. PT memakan waktu 7-14 hari kerja, PT Perorangan 5-10 hari kerja, CV dan Firma 7-10 hari kerja, dan UD paling cepat 3-7 hari kerja.",
              },
              {
                q: "Apakah harga sudah termasuk biaya notaris?",
                a: "Ya, harga yang tertera sudah termasuk biaya notaris, pengurusan dokumen, dan semua biaya administrasi. Tidak ada biaya tersembunyi.",
              },
              {
                q: "Dokumen apa saja yang saya terima?",
                a: "Anda akan menerima Akta Pendirian, SK Kemenkumham (untuk PT), NIB, NPWP Perusahaan, SK Domisili, dan dokumen pendukung lainnya dalam bentuk fisik dan digital.",
              },
              {
                q: "Apakah bisa konsultasi dulu sebelum pesan?",
                a: "Tentu! Kami menyediakan konsultasi gratis untuk membantu Anda memilih jenis badan usaha yang paling sesuai dengan kebutuhan bisnis Anda.",
              },
              {
                q: "Bagaimana jika nama perusahaan yang saya inginkan sudah terpakai?",
                a: "Kami akan melakukan pengecekan ketersediaan nama terlebih dahulu dan memberikan alternatif nama jika diperlukan sebelum proses pembuatan akta dimulai.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-[#2C5F6F] mb-2 text-lg">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#2C5F6F] to-[#5FBDBE] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Mendirikan Perusahaan Anda?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami sekarang
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-[#2C5F6F] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/6283861537366"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2C5F6F] transition-all duration-300"
            >
              WhatsApp Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}