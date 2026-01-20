"use client";
import { Github, Play } from "lucide-react";
import { MuxIntegrationSVG } from "./FlowSVG";

const WideDashedLineH = ({ className = "" }: { className?: string }) => (
  <div
    className={`w-full h-px opacity-30 pointer-events-none absolute z-30 ${className}`}
    style={{
      backgroundImage:
        "linear-gradient(to right, #404040 50%, transparent 50%)",
      backgroundSize: "10px 1px",
      backgroundRepeat: "repeat-x",
    }}
  />
);

const WideDashedLineV = ({ className = "" }: { className?: string }) => (
  <div
    className={`h-full w-px opacity-30 pointer-events-none absolute z-30 ${className}`}
    style={{
      backgroundImage:
        "linear-gradient(to bottom, #404040 50%, transparent 50%)",
      backgroundSize: "1px 12px",
      backgroundRepeat: "repeat-y",
    }}
  />
);

const Crosshair = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute w-3 h-3 flex items-center justify-center z-40 opacity-80 ${className}`}
  >
    <div className="w-full h-px bg-white shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
    <div className="h-full w-px bg-white shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
  </div>
);

export default function HeroPage() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');`}</style>

      <div
        className="h-screen w-full bg-[#030303] text-white flex flex-col font-sans selection:bg-[#00f2ff] selection:text-black relative overflow-hidden"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <WideDashedLineV className="left-6 md:left-12 lg:left-24" />
        <WideDashedLineV className="right-6 md:right-12 lg:right-24" />

        <WideDashedLineH className="top-0" />
        <WideDashedLineH className="bottom-0" />

        <Crosshair className="bottom-0 left-6 md:left-12 lg:left-24 translate-y-1/2 rotate-180" />
        <Crosshair className="bottom-0 right-6 md:right-12 lg:right-24 translate-y-1/2" />

        <div className="flex flex-col h-full w-full px-6 md:px-12 lg:px-24">
          <nav className="h-20 fixed top-0 left-0 w-full z-50 bg-[#030303]/80 backdrop-blur-xl flex items-center justify-between px-6 md:px-12 lg:px-24 shadow-2xl">
            <WideDashedLineH className="bottom-0 left-0" />

            <div className="flex items-center group cursor-pointer">
              <img
                src="/inferia.svg"
                alt="InferiaLLM Logo"
                className="w-full h-full object-contain p-2 opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-xl tracking-tighter text-white hidden md:block group-hover:text-[#00f2ff] transition-colors duration-300">
                InferiaLLM
              </span>
            </div>

            <div className="flex items-center h-full">
              <div className="hidden md:flex items-center h-full text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400">
                <a
                  href="https://github.com/InferiaAI/InferiaLLM"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center h-full px-6 hover:text-white transition-colors hover:bg-white/5 border-l border-white/5"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <button
                  onClick={() =>
                    document
                      .getElementById("use-cases")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center h-full px-6 hover:text-white transition-colors hover:bg-white/5 border-l border-white/5"
                >
                  Use Cases
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById("contact-us")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center h-full px-6 hover:text-white transition-colors hover:bg-white/5 border-l border-white/5"
                >
                  Contact
                </button>
              </div>

              <a
                href="#"
                className="flex items-center justify-center h-full px-8 text-black bg-white hover:bg-[#00f2ff] transition-colors duration-300 text-[10px] uppercase tracking-[0.2em] font-bold border-l border-white/10"
              >
                Get Started
              </a>
            </div>
          </nav>

          <main className="flex-1 flex flex-col xl:flex-row relative overflow-hidden pt-20">
            <div className="hidden xl:flex w-1/2 relative items-center justify-center  bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#0a0a0a] to-[#030303]">
              <WideDashedLineV className="right-0 top-0" />

              <div className="w-full h-full p-12 flex items-center justify-center scale-125 opacity-90 hover:opacity-100 transition-opacity duration-700">
                <MuxIntegrationSVG />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col relative bg-[#030303] min-h-150 md:min-h-0">
              <div className="flex-1 relative flex flex-col justify-center px-4 bg-linear-to-b from-[#030303] to-[#050505]">
                <WideDashedLineH className="top-0 left-0" />

                <div className="relative z-10">
                  <div
                    className="flex items-center gap-2 mb-6 opacity-0 animate-fade-in-up"
                    style={{
                      animationDelay: "0.1s",
                      animationFillMode: "forwards",
                    }}
                  >
                    <div className="px-2 py-1 rounded border border-[#00f2ff]/30 bg-[#00f2ff]/10 text-[#00f2ff] text-[9px] font-mono tracking-widest uppercase flex items-center gap-2">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2ff] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00f2ff]"></span>
                      </span>
                      v2.0 Protocol Live
                    </div>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/50 mix-blend-screen drop-shadow-2xl">
                    InferiaLLM
                  </h1>

                  <h2 className="text-xl md:text-2xl text-neutral-400 mt-4 tracking-tight font-medium">
                    The Operating System for LLMs in Production.
                  </h2>
                </div>

                <WideDashedLineH className="bottom-0 left-0" />
              </div>

              <div className="relative py-12 bg-[#050505]">
                <p className="text-neutral-400 text-sm md:text-lg leading-relaxed pl-6">
                  InferiaLLM is an operating system for running LLM inference
                  in-house at scale. It provides everything required to take a
                  raw LLM and serve it to real users: user management, inference
                  proxying, scheduling, policy enforcement, routing, and compute
                  orchestration - as one system.
                </p>

                <WideDashedLineH className="bottom-0 left-0" />
              </div>

              <div className="h-24 lg:h-28 flex shrink-0 relative bg-black">
                <a
                  href="https://github.com/InferiaAI/InferiaLLM"
                  target="_blank"
                  className="group relative w-1/2 h-full flex items-center justify-center focus:outline-none overflow-hidden border-r border-white/10"
                >
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>

                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-xs md:text-sm lg:text-lg tracking-tight text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">
                        VIEW ON GITHUB
                      </span>
                      <Github className="w-4 h-4 group-hover:text-black transition-colors duration-300" />
                    </div>
                  </div>
                </a>

                <button
                  onClick={() =>
                    document
                      .getElementById("demo-video")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group relative w-1/2 h-full flex items-center justify-center focus:outline-none overflow-hidden bg-[#030303] hover:bg-[#080808] transition-colors"
                >
                  <div className="absolute inset-0 bg-[#0a0a0a] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>

                  <div className="relative z-10 flex items-center gap-3">
                    <div className="p-1 rounded bg-white/5 border border-white/10 group-hover:bg-red-500 group-hover:border-white/30 transition-colors">
                      <Play className="w-3 h-3 text-neutral-400  group-hover:fill-white group-hover:text-white" />
                    </div>
                    <span className="font-medium text-xs md:text-sm lg:text-lg tracking-tight text-neutral-400 group-hover:text-white transition-colors whitespace-nowrap">
                      WATCH PRODUCT VIDEO
                    </span>
                  </div>
                </button>

                <WideDashedLineH className="bottom-0 left-0" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
