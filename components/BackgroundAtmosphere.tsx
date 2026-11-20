"use client";

import { motion } from "framer-motion";

export default function BackgroundAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Obsidian Base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Subtle Cyber Grid */}
      <div className="absolute inset-0 cyber-dots opacity-40" />

      {/* Ambient Cyber Aura Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] left-[10%] w-[650px] h-[650px] rounded-full bg-cyan-500/15 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[35%] -right-[10%] w-[600px] h-[600px] rounded-full bg-emerald-500/15 blur-[160px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-[10%] left-[25%] w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[180px]"
      />

      {/* Fine Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-soft-light" />
    </div>
  );
}

