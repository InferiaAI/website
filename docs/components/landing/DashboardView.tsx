"use client";
import { ArrowRight } from "lucide-react";

const WideDashedLineV = ({ className = "" }: { className?: string }) => (
  <div
    className={`h-full w-px opacity-20 pointer-events-none absolute z-0 ${className}`}
    style={{
      backgroundImage:
        "linear-gradient(to bottom, #525252 50%, transparent 50%)",
      backgroundSize: "1px 12px",
      backgroundRepeat: "repeat-y",
    }}
  />
);

export default function DashboardSection() {
  return (
    <section
      className="w-full min-h-[700px] bg-[#050505] text-white relative flex flex-col-reverse lg:flex-row overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <WideDashedLineV className="left-6 md:left-12 lg:left-24" />
      <WideDashedLineV className="right-6 md:right-12 lg:right-24" />
      <WideDashedLineV className="left-1/2 -translate-x-1/2 hidden lg:block" />

      {/* <WideDashedLineH className="top-24" /> */}
      {/* <WideDashedLineH className="bottom-24" /> */}

      <div className="w-full lg:w-1/2 relative flex items-center justify-center py-16 lg:py-0 pl-6 md:pl-12 lg:pl-24 pr-6 lg:pr-0 border-b lg:border-b-0 lg:border-r border-white/5">
        <div className="relative w-full aspect-video border-y border-l border-white/10 bg-[#080808] z-10 group">
          <div className="absolute -top-px left-0 w-4 h-4 border-l border-t border-white/40" />
          <div className="absolute -bottom-px left-0 w-4 h-4 border-l border-b border-white/40" />
          <div className="absolute -top-px right-0 w-4 h-4 border-t border-white/20" />
          <div className="absolute -bottom-px right-0 w-4 h-4 border-b border-white/20" />

          <div className="w-full h-full flex items-center justify-center overflow-hidden relative bg-[#0A0A0A]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff05_0%,transparent_70%)]" />
            <div className="absolute inset-0 z-0">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/BPXIf__NPWs?autoplay=1&mute=1" 
                title="YouTube video"
                allow="autoplay; encrypted-media; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

          <div className="absolute -top-8 left-0 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#00f2ff] rounded-full animate-pulse" />
            <span className="text-[10px] font-mono text-neutral-500 tracking-widest">
              LIVE_FEED
            </span>
          </div>
        </div>
      </div>
    </div>

      <div className="w-full lg:w-1/2 relative flex flex-col justify-center p-12 sm:p-20 z-10">
        <div className="relative">
          <span className="text-neutral-400 font-mono text-[10px] tracking-[0.3em] uppercase block mb-6 border border-neutral-700/50 px-3 py-1 w-fit rounded-full">
            Operations
          </span>

          <h2 className="text-5xl md:text-7xl tracking-tighter text-white mb-8 leading-[0.9]">
            Dashboard
            <br />
            <span className="text-neutral-600">View.</span>
          </h2>

          <p className="text-neutral-400 text-lg leading-relaxed max-w-md mb-12">
            Total visibility into your inference infrastructure. Monitor latency, track spend, and manage execution and routing policies from a single control plane.
          </p>

          <button className="relative inline-flex group">
            <div className="absolute transition-all duration-300 opacity-0 -inset-px bg-gradient-to-r from-[#00f2ff]/40 to-[#00f2ff]/40 group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <div className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all duration-200 bg-[#0A0A0A] border border-white/20 font-mono tracking-widest uppercase focus:outline-none group-hover:bg-black group-hover:border-white/50">
              <span className="mr-3">Launch Console</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
