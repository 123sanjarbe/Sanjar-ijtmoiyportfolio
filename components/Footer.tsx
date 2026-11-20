"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Heart, Terminal, Sparkles } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("uz-UZ", {
          timeZone: "Asia/Tashkent",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-[#020202] border-t border-white/5 py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-400">
              SQ
            </div>
            <div>
              <div className="text-white font-bold text-sm tracking-tight flex items-center gap-1.5">
                SANJAR QO&apos;CHQOROV
                <Sparkles className="w-3 h-3 text-cyan-400" />
              </div>
              <div className="text-[11px] font-mono text-zinc-500">
                Sirdaryo Viloyati IT Koordinatori • 13 Yosh
              </div>
            </div>
          </div>

          {/* Center: Live Time in Sirdaryo / Uzbekistan */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-400">Sirdaryo / Tashkent:</span>
            <span className="text-cyan-300 font-bold">{time || "14:15:00"} UTC+5</span>
          </div>

          {/* Right: Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-white glass-panel border-white/5 hover:border-cyan-500/40 transition-all group"
          >
            <span>Yuqoriga qaytish</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Sanjarbek Qo&apos;chqorov. Barcha huquqlar himoyalangan.
          </div>
          <div className="flex items-center gap-2">
            <span>Designed &amp; Engineered with</span>
            <span className="text-cyan-400">Next.js 15 &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

