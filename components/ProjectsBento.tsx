"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ExternalLink,
  Bot,
  Brain,
  BookOpen,
  ShoppingBag,
  Sparkles,
  ArrowUpRight,
  Shield,
  Layers,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  badge: string;
  icon: any;
  tech: string[];
  gradient: string;
  borderGlow: string;
  colSpan: string;
  demoUrl?: string;
  githubUrl?: string;
  metrics: { label: string; value: string }[];
}

const projects: ProjectItem[] = [
  {
    id: "aqlvoy-ai",
    title: "Aqlvoy AI",
    category: "Ta'limiy Sun'iy Intellekt Platformasi",
    desc: "3-5 yoshli kichkintoylar uchun maxsus moslashtirilgan interaktiv ovozli va vizual ta'limiy sun'iy intellekt ekotizimi. Ertaklar, mantiqiy o'yinlar va bolalar psixologiyasiga xos xavfsiz neyrotarmoq suhbati.",
    badge: "Flagship AI Project",
    icon: Brain,
    tech: ["Next.js 15", "OpenAI API", "Tailwind CSS", "Web Speech API", "Framer Motion"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderGlow: "group-hover:border-cyan-400/60 shadow-cyan-500/10",
    colSpan: "lg:col-span-7",
    demoUrl: "https://aqlvoy.ai",
    githubUrl: "https://github.com/123sanjarbe/aqlvoy-ai",
    metrics: [
      { label: "Yosh toifasi", value: "3-5 yosh" },
      { label: "AI Modeli", value: "Fine-tuned LLM" },
      { label: "Interaktivlik", value: "Ovoz & Vizual" },
    ],
  },
  {
    id: "bookshare-plus",
    title: "BookShare+",
    category: "Kitob Almashish Ekotizimi",
    desc: "Maktab o'quvchilari o'rtasida darslik va badiiy adabiyotlarni o'zaro almashish, virtual kutubxona yaratish va o'qilgan kitoblar bo'yicha reyting tizimini taqdim etuvchi P2P platformasi.",
    badge: "Ijtimoiy Ta'lim",
    icon: BookOpen,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderGlow: "group-hover:border-emerald-400/60 shadow-emerald-500/10",
    colSpan: "lg:col-span-5",
    demoUrl: "https://bookshare-plus.uz",
    githubUrl: "https://github.com/123sanjarbe/bookshare-plus",
    metrics: [
      { label: "Foydalanuvchilar", value: "500+ O'quvchi" },
      { label: "Almashilgan kitoblar", value: "1,200+" },
    ],
  },
  {
    id: "41maktab-bot",
    title: "41maktab_bot",
    category: "Rasmiy Maktab Boshqaruv Boti",
    desc: "41-umumta'lim maktabi uchun rasmiy aloqa, dars jadvallari, kundalik xabarnomalar, o'qituvchilar kabineti va o'quvchilar monitoringini avtomatlashtirgan yuqori tezlikdagi Telegram boti.",
    badge: "Telegram Ekotizimi",
    icon: Bot,
    tech: ["Python", "aiogram 3.x", "PostgreSQL", "Asyncio", "Redis"],
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    borderGlow: "group-hover:border-purple-400/60 shadow-purple-500/10",
    colSpan: "lg:col-span-5",
    demoUrl: "https://t.me/41maktab_bot",
    githubUrl: "https://github.com/123sanjarbe/41maktab_bot",
    metrics: [
      { label: "Kanal a'zolari", value: "1,500+" },
      { label: "Reaksiya tezligi", value: "<120ms" },
    ],
  },
  {
    id: "sanjar-shop",
    title: "Sanjar Shop",
    category: "Modern E-Commerce & Admin Panel",
    desc: "Vue 3 Composition API va Pinia asosidagi kuchli savdo platformasi. Tovarlarni toifalar bo'yicha boshqarish, tezkor savat, real-time checkout va mukammal analitik admin boshqaruv paneli.",
    badge: "Vue 3 Architecture",
    icon: ShoppingBag,
    tech: ["Vue 3", "Pinia", "Tailwind CSS", "TypeScript", "Vite"],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderGlow: "group-hover:border-amber-400/60 shadow-amber-500/10",
    colSpan: "lg:col-span-7",
    demoUrl: "https://sanjar-shop.uz",
    githubUrl: "https://github.com/123sanjarbe/sanjar-shop",
    metrics: [
      { label: "Arxitektura", value: "SPA + Pinia" },
      { label: "Yuklanish tezligi", value: "99/100 Lighthouse" },
      { label: "Admin Panel", value: "Real-time" },
    ],
  },
];

function BentoCard({ project }: { project: ProjectItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = project.icon;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    damping: 20,
    stiffness: 150,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 ${project.borderGlow} transition-all duration-300 flex flex-col justify-between overflow-hidden ${project.colSpan}`}
    >
      {/* Background Gradient Mesh */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Decorative Cyber Grid on Card */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />

      {/* Top Bar: Icon + Badge + Links */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-cyan-400/50 transition-all">
            <Icon className="w-6 h-6 text-cyan-300" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2 rounded-xl bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-400/50 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Project Description */}
      <p className="relative z-10 text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
        {project.desc}
      </p>

      {/* Metrics Row */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6 pt-4 border-t border-white/5">
        {project.metrics.map((m) => (
          <div key={m.label} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-[10px] font-mono text-zinc-500 uppercase">{m.label}</div>
            <div className="text-xs sm:text-sm font-bold text-zinc-200 mt-0.5">{m.value}</div>
          </div>
        ))}
      </div>

      {/* Tech Tags */}
      <div className="relative z-10 flex flex-wrap gap-1.5 pt-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.03] border border-white/10 text-zinc-300 group-hover:border-cyan-500/30 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsBento() {
  return (
    <section id="projects" className="relative z-10 py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Saralangan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-300">IT Loyihalar</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Har bir loyiha 3D interaktivlik, toza arxitektura va real muammolarga zamonaviy yechim berish tamoyili asosida ishlab chiqilgan.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 perspective-1000">
          {projects.map((project) => (
            <BentoCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

