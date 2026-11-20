"use client";

import { motion } from "framer-motion";
import {
  Send,
  ArrowUpRight,
  Sparkles,
  Radio,
} from "lucide-react";
import { GithubIcon, InstagramIcon } from "./Icons";

const channels = [
  {
    name: "Telegram Jamiyati",
    handle: "@SanjarX_mc",
    url: "https://t.me/SanjarX_mc",
    icon: Send,
    tag: "Aktiv Aloqa & Yangiliklar",
    desc: "IT yangiliklari, dasturlash maslahatlari, shaxsiy botlar yangilanishi va bevosita tezkor savol-javoblar.",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "hover:border-cyan-400/60",
    textColor: "text-cyan-400",
  },
  {
    name: "Instagram • 41-Maktab Live",
    handle: "@41-school_live",
    url: "https://instagram.com/41-school_live",
    icon: InstagramIcon,
    tag: "Maktab Hayoti & Tadbirlar",
    desc: "41-umumta'lim maktabi IT hayoti, o'quvchilar yutuqlari, olimpiadalar va ochiq darslar translyatsiyasi.",
    color: "from-pink-500/20 to-amber-500/10",
    border: "hover:border-pink-400/60",
    textColor: "text-pink-400",
  },
  {
    name: "GitHub Repository",
    handle: "@123sanjarbe",
    url: "https://github.com/123sanjarbe",
    icon: GithubIcon,
    tag: "Ochiq Kod & Loyihalar",
    desc: "Next.js, Vue 3, Python botlar va o'quv platformalarining barcha ochiq manbali kodlari jamlangan rasmiy profiling.",
    color: "from-zinc-500/20 to-zinc-700/10",
    border: "hover:border-zinc-300/60",
    textColor: "text-zinc-200",
  },
];

export default function SocialChannels() {
  return (
    <section id="socials" className="relative z-10 py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4"
          >
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>MEDIA &amp; HAMJAMIYAT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Ijtimoiy Tarmoqlar va <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-300">Rasmiy Sahifalar</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Telegram, Instagram va GitHub orqali o&apos;z bilimlarim, yangi loyihalarim va kodlarimni ochiq ulashib boraman.
          </motion.p>
        </div>

        {/* Channels Grid: 3 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <motion.a
                key={ch.name}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group glass-panel p-6 rounded-3xl border border-white/10 ${ch.border} transition-all duration-300 relative overflow-hidden flex flex-col justify-between`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${ch.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${ch.textColor}`} />
                    </div>
                    <span className="p-2 rounded-xl bg-white/[0.03] text-zinc-400 group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                    {ch.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {ch.name}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light mb-4">
                    {ch.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className={`text-xs font-mono font-semibold ${ch.textColor}`}>
                    {ch.handle}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    O&apos;tish &rarr;
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
