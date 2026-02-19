import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { SEO, buildOrganizationSchema, buildBreadcrumbSchema } from "../components/SEO";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waNumber = "6283861537366";
    const text = encodeURIComponent(
      `Halo Grotivy Consultant! 👋\n\nSaya ingin berkonsultasi mengenai layanan Anda.\n\n*Nama:* ${formData.name}\n*No. WhatsApp:* ${formData.phone}\n*Email:* ${formData.email || "-"}\n\n*Pesan:*\n${formData.message}`
    );

    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat Kantor",
      content: "Jl. Jenderal Sudirman No. 123\nJakarta Selatan 12910, Indonesia",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      content: "+62 21 1234 5678\n+62 812 3456 7890",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@grotivy.com\ncareer@grotivy.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      content: "Senin - Jumat: 09:00 - 18:00\nSabtu: 09:00 - 14:00",
    },
  ];

  const offices = [
    {
      city: "Jakarta",
      address: "Jl. Jenderal Sudirman No. 123",
      phone: "+62 838-6153-7366",
      type: "Kantor Pusat",
    },
    {
      city: "Surabaya",
      address: "Jl. HR Muhammad No. 456",
      phone: "+62 31 8765 4321",
      type: "Kantor Cabang",
    },
    {
      city: "Bandung",
      address: "Jl. Asia Afrika No. 789",
      phone: "+62 22 5678 1234",
      type: "Kantor Cabang",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEO
        title="Kontak Kami — Konsultasi Gratis"
        canonicalPath="/contact"
        description="Hubungi Grotivy Consultant untuk konsultasi bisnis gratis. WhatsApp: +62 838-6153-7366. Kami merespons dalam 1 jam di jam kerja. Tersedia untuk pendirian PT, perizinan, HKI, perpajakan, dan semua kebutuhan bisnis Anda."
        keywords="kontak grotivy, hubungi grotivy consultant, konsultasi gratis grotivy, whatsapp grotivy, nomor telepon grotivy, email grotivy, kantor grotivy jakarta"
        structuredData={[
          buildOrganizationSchema(),
          buildBreadcrumbSchema([
            { name: "Beranda", path: "/" },
            { name: "Kontak", path: "/contact" },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C5F6F] to-[#5FBDBE] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Mari berdiskusi tentang bagaimana kami dapat membantu
              mengembangkan bisnis Anda
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#2C5F6F] mb-8">
                Informasi Kontak
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#5FBDBE] to-[#2C5F6F] rounded-lg flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C5F6F] mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 text-sm whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-[#2C5F6F] mb-2">
                  Kirim Pesan
                </h2>
                <p className="text-gray-600 mb-8">
                  Isi formulir di bawah ini dan tim kami akan menghubungi Anda segera
                </p>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5FBDBE] focus:border-transparent outline-none transition-all"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5FBDBE] focus:border-transparent outline-none transition-all"
                        placeholder="+62 xxx xxxx xxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5FBDBE] focus:border-transparent outline-none transition-all"
                      placeholder="email@example.com (opsional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5FBDBE] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Ceritakan kebutuhan bisnis Anda..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Kirim via WhatsApp
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    Atau hubungi kami langsung via{" "}
                    <a
                      href="https://wa.me/6283861537366"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-semibold hover:underline"
                    >
                      WhatsApp
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Kantor Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan kami di berbagai kota besar di Indonesia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#5FBDBE]"
              >
                <div className="inline-block px-3 py-1 bg-[#5FBDBE] text-white text-sm rounded-full mb-4">
                  {office.type}
                </div>
                <h3 className="text-2xl font-bold text-[#2C5F6F] mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start gap-2">
                    <MapPin size={18} className="text-[#5FBDBE] mt-1 flex-shrink-0" />
                    {office.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={18} className="text-[#5FBDBE] flex-shrink-0" />
                    {office.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="h-96 bg-gradient-to-br from-[#2C5F6F] to-[#5FBDBE] flex items-center justify-center">
              <div className="text-white text-center">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-xl">Peta Lokasi Kantor</p>
                <p className="text-sm text-gray-200 mt-2">
                  Jl. Jenderal Sudirman No. 123, Jakarta Selatan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}