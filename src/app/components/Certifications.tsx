import { Award, Shield, CheckCircle, FileCheck, Building2, Globe2 } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "ISO 9001:2015",
      description: "Quality Management System",
      issuer: "International Organization for Standardization",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: "PSE Kominfo",
      description: "Penyelenggara Sistem Elektronik",
      issuer: "Kementerian Kominfo RI",
      color: "from-green-500 to-green-700",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "ISO 27001:2013",
      description: "Information Security Management",
      issuer: "ISO/IEC Standard",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "SNI Consultant",
      description: "Standar Nasional Indonesia",
      issuer: "Badan Standardisasi Nasional",
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "LPJK Certified",
      description: "Lembaga Pengembangan Jasa Konstruksi",
      issuer: "LPJK Indonesia",
      color: "from-teal-500 to-teal-700",
    },
    {
      icon: <Globe2 className="w-10 h-10" />,
      title: "GDPR Compliant",
      description: "General Data Protection Regulation",
      issuer: "European Union",
      color: "from-indigo-500 to-indigo-700",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#5FBDBE]/10 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4 text-[#5FBDBE]" />
            <span className="text-sm font-medium text-[#2C5F6F]">Certifications & Licenses</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
            Sertifikasi & Lisensi Resmi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tersertifikasi dan terdaftar resmi di berbagai lembaga nasional dan internasional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#5FBDBE] transition-all duration-300 hover:shadow-xl relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                {cert.icon}
              </div>
              
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#2C5F6F] group-hover:text-[#5FBDBE] transition-colors">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-gray-700 font-medium mb-2">{cert.description}</p>
                <p className="text-sm text-gray-500">Issued by: {cert.issuer}</p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium">Verified & Active</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#2C5F6F] to-[#5FBDBE] rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Komitmen Terhadap Kualitas & Keamanan
          </h3>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-6">
            Kami terus memperbarui sertifikasi dan mengikuti standar terbaik industri untuk memberikan layanan berkualitas tinggi kepada klien kami.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-2xl font-bold">6+</p>
              <p className="text-sm">Certifications</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm">Compliance</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-2xl font-bold">4+</p>
              <p className="text-sm">Years Trusted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}