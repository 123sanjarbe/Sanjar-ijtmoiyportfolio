"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Code2,
  Sparkles,
  ArrowRight,
  Bot,
  Send,
  Layers,
  Terminal,
  ShieldCheck,
  Cpu,
} from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 60fps GPU parallax
  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D rotations for the portrait card
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);

  // Floating parallax offsets for orbiting badges
  const badge1X = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const badge1Y = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]);

  const badge2X = useTransform(smoothMouseX, [-0.5, 0.5], [25, -25]);
  const badge2Y = useTransform(smoothMouseY, [-0.5, 0.5], [18, -18]);

  const badge3X = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);
  const badge3Y = useTransform(smoothMouseY, [-0.5, 0.5], [25, -25]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden bg-[#050505]"
    >
      {/* Background Kinetic Watermark (Deep layer) */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden opacity-5 z-0">
        <span className="font-mono text-[14vw] font-black tracking-tighter text-white whitespace-nowrap">
          DEVELOPER • KOORDINATOR • ARCHITECT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[750px]">
          
          {/* ========================================================================= */}
          {/* LEFT / CENTER FOCAL POINT: 3D MAGNETIC PORTRAIT & ORBITING TECH BADGES    */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative perspective-1000">
            
            {/* Cyber Aura Glow behind the portrait */}
            <div className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full bg-gradient-to-tr from-cyan-500/30 via-emerald-500/20 to-transparent blur-[80px] pointer-events-none animate-glow-pulse" />
            
            {/* Secondary Cyan Rim Light */}
            <div className="absolute w-[280px] sm:w-[350px] h-[380px] sm:h-[480px] rounded-full bg-cyan-400/20 blur-[60px] pointer-events-none" />

            {/* 3D Tilted Card Container */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-[300px] sm:w-[380px] md:w-[420px] h-[430px] sm:h-[530px] md:h-[580px] flex items-center justify-center"
            >
              {/* Subtle Holographic Grid Plate behind portrait */}
              <div
                style={{ transform: "translateZ(-30px)" }}
                className="absolute inset-4 rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-950/20 via-black/40 to-transparent backdrop-blur-sm pointer-events-none"
              />

              {/* Seamless Obsidian Portrait Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transform: "translateZ(20px)" }}
                className="relative w-full h-full flex items-end justify-center"
              >
                {/* Portrait Image with CSS Obsidian Integration */}
                <div 
                  className="relative w-full h-full select-none"
                  style={{
                    // Mask the bottom so suit merges completely seamlessly into obsidian canvas
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 99%)",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 99%)",
                  }}
                >
                  <Image
                    src="/sanjar.png"
                    alt="Sanjar Qo'chqorov - Sirdaryo Viloyati IT Koordinatori"
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, 420px"
                    className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,240,255,0.25)] filter contrast-[1.03] brightness-[1.01]"
                  />
                </div>
              </motion.div>

              {/* ========================================================================= */}
              {/* ORBITING 3D FLOATING TECH BADGES (Parallax Physics)                       */}
              {/* ========================================================================= */}

              {/* Badge 1: Next.js & Full-Stack (Top-Right) */}
              <motion.div
                style={{
                  x: badge1X,
                  y: badge1Y,
                  transform: "translateZ(60px)",
                }}
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -top-3 -right-4 sm:-right-8 z-30 pointer-events-auto"
              >
                <div className="glass-panel px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-xl border-cyan-500/30 hover:border-cyan-400 transition-colors group">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-bold text-white tracking-wide">Next.js & Vue 3</div>
                    <div className="text-[9px] font-mono text-cyan-400">Full-Stack Architecture</div>
                  </div>
                </div>
              </motion.div>

              {/* Badge 2: Telegram Bot & Python (Left-Center) */}
              <motion.div
                style={{
                  x: badge2X,
                  y: badge2Y,
                  transform: "translateZ(80px)",
                }}
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute top-1/3 -left-4 sm:-left-12 z-30 pointer-events-auto"
              >
                <div className="glass-panel px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-xl border-emerald-500/30 hover:border-emerald-400 transition-colors group">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-bold text-white tracking-wide">Telegram Bot</div>
                    <div className="text-[9px] font-mono text-emerald-400">Python • Aiogram</div>
                  </div>
                </div>
              </motion.div>

              {/* Badge 3: 13 Yoshli Wunderkind (Bottom-Right) */}
              <motion.div
                style={{
                  x: badge3X,
                  y: badge3Y,
                  transform: "translateZ(70px)",
                }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="absolute bottom-16 -right-2 sm:-right-10 z-30 pointer-events-auto"
              >
                <div className="glass-panel px-3 py-1.5 rounded-2xl flex items-center gap-2 shadow-xl border-purple-500/30 hover:border-purple-400 transition-colors">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-purple-300">
                    2013 • 13 Yoshda
                  </span>
                </div>
              </motion.div>

              {/* ========================================================================= */}
              {/* REQUIREMENT #2: GLASSMORPHIC BADGE EMERGING UNDERNEATH LOWER SUIT EDGE   */}
              {/* ========================================================================= */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ transform: "translateZ(100px)" }}
                className="absolute -bottom-6 left-0 right-0 z-40 px-2"
              >
                <div className="glass-panel-glow py-3 px-4 sm:px-5 rounded-2xl flex items-center justify-between gap-3 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 text-cyan-400">
                      <ShieldCheck className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                        Sirdaryo Viloyati IT Koordinatori
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400">
                        13 Yoshli Full-Stack &amp; Bot Dasturchi
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      8-sinf o&apos;quvchisi
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: KINETIC TYPOGRAPHY SLIDING OUT FROM BEHIND THE PORTRAIT       */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left lg:pl-6 xl:pl-10 z-20">
            
            {/* Top Subtitle Pill */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono mb-4 w-fit"
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>CREATIVE DEVELOPER &amp; IT COORDINATOR</span>
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              <span className="text-cyan-400">2026 EDITION</span>
            </motion.div>

            {/* Kinetic Typography emerging from behind portrait right side */}
            <div className="relative overflow-hidden mb-4">
              <motion.div
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-1"
              >
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight uppercase leading-[0.95]">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400 drop-shadow-sm">
                    SANJAR
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 text-glow-cyan">
                    QO&apos;CHQOROV
                  </span>
                </h1>
              </motion.div>
            </div>

            {/* Role & Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl mb-8"
            >
              13 yoshli 8-sinf o&apos;quvchisi va <span className="text-white font-medium underline decoration-cyan-500/50 underline-offset-4">Sirdaryo Viloyati IT Koordinatori</span>. 
              Zamonaviy veb-platformalar, sun&apos;iy intellekt tizimlari hamda minglab foydalanuvchilarga xizmat ko&apos;rsatuvchi avtomatlashtirilgan Telegram botlar arxitektori.
            </motion.p>

            {/* Key Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.35)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] cursor-pointer"
              >
                <span>Loyihalarni ko&apos;rish</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://t.me/SanjarX_mc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-zinc-200 glass-panel hover:border-cyan-500/40 hover:text-white transition-all duration-300 group"
              >
                <Send className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Telegram orqali yozish</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Bio &amp; Tajriba</span>
              </a>
            </motion.div>

            {/* Mini Quick Stats Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/5 max-w-lg"
            >
              <div className="flex flex-col">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white">
                  13<span className="text-cyan-400 text-lg">yosh</span>
                </span>
                <span className="text-xs text-zinc-400">8-sinf o&apos;quvchisi</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white">
                  10<span className="text-emerald-400 text-lg">+</span>
                </span>
                <span className="text-xs text-zinc-400">Yirik IT Loyiha</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-cyan-400">
                  Viloyat
                </span>
                <span className="text-xs text-zinc-400">IT Koordinatori</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Subtle Bottom Fade Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}

