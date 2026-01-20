"use client";
import {
  ArrowRight,
  Github,
  Twitter,
  Disc,
  Linkedin,
  FileText,
  Terminal,
  Contact2Icon,
} from "lucide-react";

const WideDashedLineH = ({ className = "" }: { className?: string }) => (
  <div
    className={`w-full h-px opacity-20 pointer-events-none absolute z-30 ${className}`}
    style={{
      backgroundImage:
        "linear-gradient(to right, #525252 50%, transparent 50%)",
      backgroundSize: "10px 1px",
      backgroundRepeat: "repeat-x",
    }}
  />
);

const WideDashedLineV = ({ className = "" }: { className?: string }) => (
  <div
    className={`h-full w-px opacity-20 pointer-events-none absolute z-30 ${className}`}
    style={{
      backgroundImage:
        "linear-gradient(to bottom, #525252 50%, transparent 50%)",
      backgroundSize: "1px 12px",
      backgroundRepeat: "repeat-y",
    }}
  />
);

const Crosshair = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute w-3 h-3 flex items-center justify-center z-40 opacity-60 ${className}`}
  >
    <div className="w-full h-px bg-white" />
    <div className="h-full w-px bg-white" />
  </div>
);

export default function Footer() {
  return (
    <footer
      className="w-full bg-black text-white relative overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <WideDashedLineV className="left-6 md:left-12 lg:left-24" />
      <WideDashedLineV className="right-6 md:right-12 lg:right-24" />

      <Crosshair className="rotate-180 top-0 left-6 md:left-12 lg:left-24 -translate-y-1/2" />
      <Crosshair className="top-0 right-6 md:right-12 lg:right-24 -translate-y-1/2" />

      <div className="px-6 md:px-12 lg:px-24 w-full relative z-10">
        <div className="border-x border-t border-white/5 bg-neutral-900/10 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between p-6 md:p-8 gap-6 md:gap-10">
            <div className="flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-start">
              <img
                src="/inferia.svg"
                alt="Logo"
                className="w-10 h-10 opacity-90"
              />
              <div className="flex flex-col">
                <span className="text-lg font-medium tracking-tight leading-none">
                  InferiaLLM
                </span>
                <span className="text-[10px] text-neutral-500 font-mono tracking-wide mt-1">
                  UNIFIED EXECUTION LAYER
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 md:gap-8 text-xs font-mono text-neutral-400 font-medium tracking-wider uppercase">
              <a
                href="#"
                className="hover:text-white transition-colors flex items-center gap-2 group"
              >
                <FileText className="w-3 h-3 opacity-50 group-hover:opacity-100" />{" "}
                Docs
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Terminal className="w-3 h-3 opacity-50 group-hover:opacity-100" />{" "}
                API
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Contact2Icon className="w-3 h-3 opacity-50 group-hover:opacity-100" />{" "}
                Contact
              </a>
            </div>

            <div className="w-full lg:w-64 relative group">
              <input
                type="email"
                placeholder="SUBSCRIBE_UPDATES"
                className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-3 text-[10px] text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors font-mono uppercase tracking-wider"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 opacity-40 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative border border-white/5 bg-[#050505] flex flex-col md:flex-row items-center justify-between px-6 py-3 md:py-4 gap-4">
          <WideDashedLineH className="top-0 left-0" />

          <div className="flex items-center gap-3 px-3 py-1 bg-white/5 border border-white/5 rounded-full">
            <div className="relative flex items-center justify-center w-1.5 h-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-500"></span>
            </div>
            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">
              Op. Normal
            </span>
          </div>

          <span className="text-neutral-600 text-[10px] font-mono uppercase hidden md:block">
            © 2025 Inferia
          </span>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/InferiaAI/InferiaLLM"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/inferiaAI"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Disc className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <WideDashedLineH className="bottom-0" />
    </footer>
  );
}
