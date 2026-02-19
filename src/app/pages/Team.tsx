import { Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Team() {
  const leadership = [
    {
      name: "Dr. Sarah Wijaya",
      position: "CEO & Managing Partner",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTEwNzcxOXww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "20+ tahun pengalaman dalam konsultasi strategi bisnis dengan track record membantu 200+ perusahaan",
      expertise: ["Strategy", "Leadership", "M&A"],
    },
    {
      name: "Rudi Hartono, M.B.A.",
      position: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1621388840627-a6909154b1f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYnVzaW5lc3MlMjBjb25zdWx0YW50JTIwYXNpYW58ZW58MXx8fHwxNzcxMTA3NzE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Expert dalam operational excellence dan business transformation dengan sertifikasi Six Sigma Black Belt",
      expertise: ["Operations", "Process Improvement", "Change Management"],
    },
    {
      name: "Linda Kusuma, S.H., M.H.",
      position: "Head of Legal Services",
      image: "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGJ1c2luZXNzJTIwY29uc3VsdGFudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzExMDc3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Spesialis hukum korporasi dengan pengalaman menangani berbagai kasus kompleks di perusahaan multinasional",
      expertise: ["Corporate Law", "Compliance", "Contract Management"],
    },
  ];

  const teamMembers = [
    {
      name: "Ahmad Fauzi",
      position: "Senior Consultant - Finance",
      image: "https://images.unsplash.com/photo-1770058428104-9dab343b7ccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0YW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxMTA3NjAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Diana Pratiwi",
      position: "Senior Consultant - HR",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTEwNzcxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Bambang Sutrisno",
      position: "Consultant - Digital Marketing",
      image: "https://images.unsplash.com/photo-1621388840627-a6909154b1f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYnVzaW5lc3MlMjBjb25zdWx0YW50JTIwYXNpYW58ZW58MXx8fHwxNzcxMTA3NzE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Rina Sari",
      position: "Consultant - Business Development",
      image: "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGJ1c2luZXNzJTIwY29uc3VsdGFudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzExMDc3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Hendra Gunawan",
      position: "Consultant - IT & Digital",
      image: "https://images.unsplash.com/photo-1770058428104-9dab343b7ccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0YW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxMTA3NjAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Siti Nurhaliza",
      position: "Consultant - Risk Management",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTEwNzcxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C5F6F] to-[#5FBDBE] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tim Ahli Kami</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Bertemu dengan para profesional berpengalaman yang siap membantu
              transformasi bisnis Anda
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Tim Kepemimpinan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dipimpin oleh para ahli dengan pengalaman puluhan tahun di industri konsultasi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F6F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2C5F6F] hover:bg-[#5FBDBE] hover:text-white transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2C5F6F] hover:bg-[#5FBDBE] hover:text-white transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2C5F6F] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#5FBDBE] font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Konsultan Profesional
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tim konsultan bersertifikat yang ahli di berbagai bidang
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-semibold text-[#2C5F6F] mb-1 text-sm">
                  {member.name}
                </h4>
                <p className="text-gray-600 text-xs">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-4">
              Bergabunglah dengan Tim Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami selalu mencari talenta terbaik untuk bergabung dengan tim profesional kami
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBkaXZlcnNlfGVufDF8fHx8MTc3MTEwNzcxOHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Grotivy Team"
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="text-center">
            <a
              href="mailto:career@grotivy.com"
              className="inline-block bg-gradient-to-r from-[#5FBDBE] to-[#2C5F6F] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Kirim CV Anda
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-[#2C5F6F] to-[#5FBDBE] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-200">Konsultan Ahli</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4+</div>
              <div className="text-gray-200">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-200">Sertifikasi</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Proyek Selesai</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}