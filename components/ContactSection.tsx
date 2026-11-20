"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  User,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.message) return;

    setIsSubmitting(true);

    // Simulate dispatch to Telegram bot
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory cyber confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00f0ff", "#10b981", "#8b5cf6", "#ffffff"],
      });

      // Clear form
      setFormData({ name: "", contact: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="relative z-10 py-24 bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

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
            <span>INTERAKTIV ALOQA</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Birgalikda <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Yangi Loyiha</span> Boshlaymiz
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Sirdaryo viloyati bo&apos;yicha IT loyihalar, veb-platformalar yaratish yoki Telegram bot buyurtmalari bo&apos;yicha to&apos;g&apos;ridan-to&apos;g&apos;ri bog&apos;laning.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                To&apos;g&apos;ridan-to&apos;g&apos;ri Aloqa
              </h3>

              <div className="space-y-4">
                <a
                  href="https://t.me/SanjarX_mc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500">TELEGRAM KANAL &amp; PROFIL</div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      @SanjarX_mc
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:contact@sanjarbek.uz"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500">ELEKTRON POCHTA</div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      contact@sanjarbek.uz
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500">MANZIL &amp; BOSH OFIS</div>
                    <div className="text-sm font-bold text-white">
                      Sirdaryo Viloyati, O&apos;zbekiston
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Alert Box */}
              <div className="mt-8 p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Har bir murojaatga 24 soat ichida javob qaytariladi. Viloyat yoshlarining IT g&apos;oyalarini qo&apos;llab-quvvatlashga doim tayyorman.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border-white/10 relative overflow-hidden shadow-2xl">
              
              {isSuccess ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Xabaringiz Qabul Qilindi!
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md mb-6 leading-relaxed">
                    Rahmat! Sanjar tez orada siz bilan Telegram yoki pochtangiz orqali bog&apos;lanadi.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-mono font-semibold bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.1] transition-colors"
                  >
                    Yana xabar yuborish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <span className="text-xs font-mono text-zinc-400">XABAR YUBORISH</span>
                    <span className="text-xs font-mono text-cyan-400">24/7 ONLINE</span>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2">
                      SIZNING ISMINGIZ
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Sardor Rustamov"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 pl-11 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-sm placeholder:text-zinc-600 outline-none transition-all"
                      />
                      <User className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2">
                      TELEGRAM USERNAME YOKI EMAIL
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="@username yoki email@domain.uz"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="w-full px-4 py-3.5 pl-11 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-sm placeholder:text-zinc-600 outline-none transition-all"
                      />
                      <Send className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2">
                      LOYIHA YOKI TAKLIF TAVSIFI
                    </label>
                    <div className="relative">
                      <textarea
                        required
                        rows={4}
                        placeholder="Loyiha g'oyasi, talablari yoki hamkorlik taklifingizni yozing..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 pl-11 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-sm placeholder:text-zinc-600 outline-none transition-all resize-none"
                      />
                      <MessageSquare className="w-4 h-4 text-zinc-500 absolute left-4 top-4" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-sm text-black bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="font-mono text-xs flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Yuborilmoqda...
                      </span>
                    ) : (
                      <>
                        <span>Xabarni Yuborish</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

