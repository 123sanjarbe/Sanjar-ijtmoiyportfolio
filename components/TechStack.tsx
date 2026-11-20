"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Terminal,
  Cpu,
  Layers,
  GitBranch,
  Boxes,
  Database,
  Globe,
  Sparkles,
} from "lucide-react";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "tools";
  level: string;
  percent: number;
  desc: string;
  iconName: string;
}

const techItems: TechItem[] = [
  {
    name: "Next.js 14/15",
    category: "frontend",
    level: "Ilg'or (Advanced)",
    percent: 92,
    desc: "App Router, SSR, Server Actions, Dynamic Routing va SEO optimizatsiyasi.",
    iconName: "▲",
  },
  {
    name: "Vue.js 3",
    category: "frontend",
    level: "Ilg'or (Advanced)",
    percent: 90,
    desc: "Composition API, Pinia holat boshqaruvi va Vite ekotizimi.",
    iconName: "V",
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: "Tajribali (Proficient)",
    percent: 88,
    desc: "Strict type-safety, modulli interfeyslar va xatosiz kodlash madaniyati.",
    iconName: "TS",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Ekspert (Expert)",
    percent: 96,
    desc: "Utility-first uslub, custom theme konfiguratsiyasi, responsive va glassmorphism.",
    iconName: "TW",
  },
  {
    name: "Python",
    category: "backend",
    level: "Ilg'or (Advanced)",
    percent: 91,
    desc: "Telegram botlar (aiogram 3.x), avtomatlashtirish skriptlari va ma'lumotlar tahlili.",
    iconName: "Py",
  },
  {
    name: "Node.js & Express",
    category: "backend",
    level: "Tajribali (Proficient)",
    percent: 85,
    desc: "RESTful API arxitekturasi, serverless functions va webhook integratsiyasi.",
    iconName: "Node",
  },
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Ekspert (Expert)",
    percent: 94,
    desc: "Versiyalar nazorati, branch boshqaruvi, PR-lar va open-source loyihalar.",
    iconName: "Git",
  },
  {
    name: "PostgreSQL & SQLite",
    category: "backend",
    level: "O'rta-Yuqori",
    percent: 82,
    desc: "Jadvallar relyatsiyasi, tezkor so'rovlar va ma'lumotlar bazasi optimizatsiyasi.",
    iconName: "DB",
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "backend" | "tools">("all");

  const filteredItems = activeCategory === "all"
    ? techItems
    : techItems.filter((item) => item.category === activeCategory);

  return (
    <section id="tech" className="relative z-10 py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>ARSENAL &amp; KO&apos;NIKMALAR</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Zamonaviy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Texnologiyalar Steki</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed mb-8"
          >
            Har bir vosita tezlik, masshtablilik va foydalanuvchiga yuqori qulaylik taqdim etish maqsadida tanlangan.
          </motion.p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "Barchasi" },
              { id: "frontend", label: "Frontend & UI" },
              { id: "backend", label: "Backend & Bot" },
              { id: "tools", label: "Workflow & Git" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                  activeCategory === tab.id
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/60 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                    : "glass-panel text-zinc-400 hover:text-white border-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-panel p-5 rounded-2xl border-white/10 hover:border-cyan-500/40 transition-colors flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all">
                      {tech.iconName}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.03] text-zinc-400 border border-white/5">
                      {tech.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {tech.desc}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span>O&apos;zlashtirish</span>
                    <span className="text-cyan-400 font-bold">{tech.percent}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-zinc-900 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

