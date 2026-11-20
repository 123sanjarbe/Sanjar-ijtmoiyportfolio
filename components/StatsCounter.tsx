"use client";

import { motion } from "framer-motion";
import { Award, Code2, Users, Rocket } from "lucide-react";

const stats = [
  {
    label: "Yosh & Ta'lim",
    value: "13 Yosh",
    sub: "41-maktab 8-sinf o'quvchisi",
    icon: Rocket,
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
  },
  {
    label: "Mas'uliyat",
    value: "Viloyat",
    sub: "Sirdaryo IT Koordinatori",
    icon: Award,
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
  },
  {
    label: "Ishlab Chiqilgan",
    value: "10+ Loyiha",
    sub: "AI, Web, Bot & E-Commerce",
    icon: Code2,
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30",
    text: "text-purple-400",
  },
  {
    label: "Aktiv Jamiyat",
    value: "1,000+",
    sub: "Kanal va Bot auditoriyasi",
    icon: Users,
    color: "from-teal-500/20 to-teal-500/5",
    border: "border-teal-500/30",
    text: "text-teal-400",
  },
];

export default function StatsCounter() {
  return (
    <section className="relative z-10 py-10 -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`glass-panel p-5 rounded-2xl border ${stat.border} relative overflow-hidden group`}
              >
                <div
                  className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-br ${stat.color} blur-2xl group-hover:scale-150 transition-transform duration-500`}
                />
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className={`p-2 rounded-xl bg-white/[0.03] ${stat.text}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight font-mono mb-1 ${stat.text}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-400 font-light">
                  {stat.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

