"use client";

import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  GraduationCap,
  Star,
} from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  role: string;
  desc: string;
  issuer: string;
  highlight: string;
  icon: any;
  color: string;
}

const milestones: Milestone[] = [
  {
    year: "2024 - Hozir",
    title: "Sirdaryo Viloyati IT Koordinatori",
    role: "Hududiy IT Liderlik & Yoshlar Koordinatsiyasi",
    desc: "Sirdaryo viloyati bo'yicha yosh dasturchilar hamjamiyatini shakllantirish, maktablarda IT ta'limini kuchaytirish hamda dasturlash to'garaklarini tashkil etish.",
    issuer: "Sirdaryo Viloyati",
    highlight: "Eng yosh viloyat koordinatori (13 yosh)",
    icon: ShieldCheck,
    color: "cyan",
  },
  {
    year: "2023 - 2024",
    title: "One Million Uzbek Coders",
    role: "Frontend & Full-Stack Track Bitiruvchisi",
    desc: "Veb-dasturlash, zamonaviy JavaScript, backend integratsiyalari bo'yicha to'liq kurslarni muvaffaqiyatli yakunlab, maxsus bitiruv sertifikatiga ega bo'lgan.",
    issuer: "IT Park & Udacity",
    highlight: "Mukammal natija bilan bitiruv",
    icon: Award,
    color: "emerald",
  },
  {
    year: "2023",
    title: "Coursera Professional Certificates",
    role: "Frontend Development & Python Programming",
    desc: "Yetakchi xalqaro universitetlar va texnologiya kompaniyalarining dasturlash arxitekturasi va algoritmlar kurslari sertifikatlari.",
    issuer: "Coursera Inc.",
    highlight: "Xalqaro darajadagi bilim bazasi",
    icon: GraduationCap,
    color: "purple",
  },
  {
    year: "2023 - 2024",
    title: "Maktab & Viloyat IT Tanlovlari",
    role: "1-o'rin va Maxsus Diplomlar Sohibi",
    desc: "41-umumta'lim maktabi va viloyat miqyosidagi IT olimpiadalarida ilg'or bot va veb-platformalar loyihalari bilan g'oliblik.",
    issuer: "Xalq Ta'limi & IT Markazlar",
    highlight: "Viloyat bosqichi g'olibi",
    icon: Star,
    color: "teal",
  },
];

export default function AchievementsTimeline() {
  return (
    <section id="achievements" className="relative z-10 py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            <span>YUTUQLAR &amp; SERTIFIKATLAR</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            E&apos;tirof va <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Rasmiy Maqomlar</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Har bir yutuq va sertifikat yillar davomida orttirilgan amaliy tajriba, qat&apos;iyat va uzluksiz o&apos;rganish samarasidir.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-colors" />

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                        {m.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {m.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-400 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{m.role}</span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
                  {m.desc}
                </p>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-zinc-500">
                    Tashkilot: <span className="text-zinc-300 font-medium">{m.issuer}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    {m.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

