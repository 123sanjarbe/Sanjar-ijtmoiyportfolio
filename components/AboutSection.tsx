"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal as TerminalIcon,
  Sparkles,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Cpu,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

export default function AboutSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText("npx sanjar-bio");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative z-10 py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROFIL &amp; MISSIYA</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            13 Yoshda <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Viloyat IT Yetakchisi</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Yosh chegara emas, imkoniyatdir. Sirdaryo viloyati yoshlariga IT olamini o&apos;rgatish, innovatsion platformalar yaratish va ta&apos;lim jarayonlarini raqamlashtirish asosiy maqsadim.
          </motion.p>
        </div>

        {/* Two-column layout: Story + Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                Sanjar Qo&apos;chqorov haqida
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                Men 2013-yilda tug&apos;ilganman, hozirda 13 yoshdaman va 41-umumta&apos;lim maktabining 8-sinfida tahsil olaman. Dasturlashga bo&apos;lgan ishtiyoqim erta yoshdan boshlangan bo&apos;lib, bugungi kunda <strong className="text-cyan-300 font-semibold">Sirdaryo Viloyati IT Koordinatori</strong> sifatida faoliyat yuritmoqdaman.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Asosiy e&apos;tiborim sun&apos;iy intellekt integratsiyalari (OpenAI API), yuqori yuklamali veb-platformalar (Next.js, Vue 3) va ta&apos;lim sohasini avtomatlashtiruvchi Telegram bot tizimlarini barpo etishga qaratilgan.
              </p>

              {/* Fast Bio Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500">TUG&apos;ILGAN YILI</div>
                    <div className="text-xs font-semibold text-zinc-200">2013-yil (13 yosh)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500">HUDUD</div>
                    <div className="text-xs font-semibold text-zinc-200">Sirdaryo Viloyati, O&apos;zbekiston</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500">TA&apos;LIM</div>
                    <div className="text-xs font-semibold text-zinc-200">41-maktab, 8-sinf</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Briefcase className="w-4 h-4 text-teal-400" />
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500">LAVOZIM</div>
                    <div className="text-xs font-semibold text-zinc-200">Viloyat IT Koordinatori</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Core Values / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="glass-panel p-4 rounded-2xl border-white/5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mb-2" />
                <div className="text-xs font-bold text-white mb-1">Clean Architecture</div>
                <div className="text-[11px] text-zinc-400">Modulli va kengaytiriluvchi kod yozish.</div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border-white/5">
                <Cpu className="w-4 h-4 text-emerald-400 mb-2" />
                <div className="text-xs font-bold text-white mb-1">AI-Powered</div>
                <div className="text-[11px] text-zinc-400">Zamonaviy LLM va neyrotarmoqlar integratsiyasi.</div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border-white/5">
                <Sparkles className="w-4 h-4 text-purple-400 mb-2" />
                <div className="text-xs font-bold text-white mb-1">Ta&apos;lim &amp; Innovatsiya</div>
                <div className="text-[11px] text-zinc-400">O&apos;quvchilar va yoshlar uchun qulay texnologiyalar.</div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="glass-panel rounded-3xl border-white/10 overflow-hidden shadow-2xl bg-black/80">
              
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-950/90 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                    sanjarbek@sirdaryo-it: ~/developer-manifest
                  </span>
                </div>

                <button
                  onClick={handleCopyCommand}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Nusxalandi</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>npx sanjar-bio</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Content */}
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-300 space-y-4 select-text">
                <div>
                  <span className="text-cyan-400">sanjarbek@it-leader:~$</span>{" "}
                  <span className="text-emerald-300">cat profile.json</span>
                </div>

                <div className="pl-2 border-l border-white/10 space-y-1">
                  <div>
                    <span className="text-zinc-500">&#123;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">&quot;ism&quot;</span>:{" "}
                    <span className="text-emerald-300">&quot;Qo&apos;chqorov Sanjar (Sanjarbek)&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">&quot;yosh&quot;</span>:{" "}
                    <span className="text-purple-300">13</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">&quot;sinf&quot;</span>:{" "}
                    <span className="text-emerald-300">&quot;8-sinf (41-maktab)&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">&quot;rasmiy_maqom&quot;</span>:{" "}
                    <span className="text-emerald-300">&quot;Sirdaryo Viloyati IT Koordinatori&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">&quot;asosiy_yonalishlar&quot;</span>: [
                    <div className="pl-4 text-zinc-400">
                      &quot;Full-Stack Web (Next.js, Vue 3, TS)&quot;,<br />
                      &quot;AI Platforms &amp; Integrations&quot;,<br />
                      &quot;Telegram Bot Systems (Python, aiogram)&quot;,<br />
                      &quot;Yoshlar o&apos;rtasida IT targ&apos;iboti&quot;
                    </div>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">&quot;shior&quot;</span>:{" "}
                    <span className="text-yellow-300">&quot;Kod orqali orzularni haqiqatga aylantiramiz.&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">&quot;aloqa_telegram&quot;</span>:{" "}
                    <span className="text-cyan-400">&quot;@SanjarX_mc&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">&quot;github&quot;</span>:{" "}
                    <span className="text-emerald-400">&quot;@123sanjarbe&quot;</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">&#125;</span>
                  </div>
                </div>

                <div>
                  <span className="text-cyan-400">sanjarbek@it-leader:~$</span>{" "}
                  <span className="text-emerald-300">git status</span>
                </div>
                <div className="text-zinc-400 pl-2 border-l border-white/10 text-[11px]">
                  On branch <span className="text-cyan-400">main</span><br />
                  Your branch is up to date with &apos;origin/future&apos;.<br />
                  Nothing to commit, working tree clean. Ready to launch next-gen projects.
                </div>

                <div className="pt-2 flex items-center gap-2 text-cyan-400">
                  <span>sanjarbek@it-leader:~$</span>
                  <span className="w-2.5 h-4 bg-cyan-400 animate-pulse inline-block" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

