"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, ArrowUpRight, Sparkles, Send } from "lucide-react";

const navLinks = [
  { name: "Asosiy", href: "#hero" },
  { name: "Men haqimda", href: "#about" },
  { name: "Loyihalar", href: "#projects" },
  { name: "Texnologiyalar", href: "#tech" },
  { name: "Yutuqlar", href: "#achievements" },
  { name: "Media", href: "#socials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "glass-panel shadow-2xl shadow-cyan-950/20 border-white/10"
              : "bg-obsidian/40 backdrop-blur-md border border-white/5"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-zinc-900 to-black border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
              <span className="font-mono font-bold text-lg text-cyan-400 tracking-wider">
                SQ
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                SANJARBEK
                <Sparkles className="w-3 h-3 text-cyan-400 inline" />
              </span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                IT Koordinator
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call to action & status */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Sirdaryo IT Koordinatori
            </div>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 hover:border-cyan-300 hover:bg-cyan-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.15)] group"
            >
              <span>Bog&apos;lanish</span>
              <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Menyu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="glass-panel p-5 rounded-2xl flex flex-col gap-3 shadow-2xl border-white/10">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-mono text-zinc-400">NAVIGATSIYA</span>
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                  <Terminal className="w-3 h-3" /> 13 Yoshli Dasturchi
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-medium text-zinc-300 hover:text-cyan-400 hover:bg-white/[0.04] transition-colors flex items-center justify-between"
                >
                  {link.name}
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 py-2.5 px-4 rounded-xl text-center text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
              >
                Bog&apos;lanish
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

