import { Award, Shield, Users, TrendingUp, CheckCircle, Star, FileCheck } from "lucide-react";

export function TrustBadges() {
  const badges = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "ISO 9001:2015",
      subtitle: "Certified",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "PSE Kominfo",
      subtitle: "Registered",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Privacy",
      subtitle: "Protected",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "500+ Klien",
      subtitle: "Terpercaya",
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "98% Sukses",
      subtitle: "Proyek Selesai",
      color: "from-teal-500/20 to-teal-600/20"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "4+ Tahun",
      subtitle: "Pengalaman",
      color: "from-indigo-500/20 to-indigo-600/20"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "4.9/5 Rating",
      subtitle: "Ulasan Klien",
      color: "from-yellow-500/20 to-yellow-600/20"
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center p-4 bg-gradient-to-br ${badge.color} backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-105`}
        >
          <div className="text-white mb-2">{badge.icon}</div>
          <div className="text-center">
            <p className="text-white font-bold text-xs leading-tight">{badge.title}</p>
            <p className="text-white/90 text-xs">{badge.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}