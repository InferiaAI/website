"use client";
import { useState } from "react";
import { UserPlus, Settings, Server, Users, ArrowUpRight } from "lucide-react";

// --- THEME UTILS ---
const WideDashedLineV = ({ className = "" }: { className?: string }) => (
  <div
    className={`h-full w-px opacity-30 pointer-events-none absolute z-30 ${className}`}
    style={{
      backgroundImage:
        "linear-gradient(to bottom, #525252 50%, transparent 50%)",
      backgroundSize: "1px 12px",
      backgroundRepeat: "repeat-y",
    }}
  />
);

const WideDashedLineH = ({ className = "" }: { className?: string }) => (
  <div
    className={`w-full h-px opacity-30 pointer-events-none absolute z-30 ${className}`}
    style={{
      backgroundImage:
        "linear-gradient(to right, #525252 50%, transparent 50%)",
      backgroundSize: "10px 1px",
      backgroundRepeat: "repeat-x",
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

export default function Section3Policy() {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const STEPS = [
    {
      id: "01",
      label: "Register",
      icon: UserPlus,
      desc: "Register users and applications. InferiaLLM becomes the single entry point for all inference traffic.",
    },
    {
      id: "02",
      label: "Define Rules",
      icon: Settings,
      desc: "Define execution rules: configure who can use which models, set resource limits, and enforce security policies.",
    },
    {
      id: "03",
      label: "Attach Compute",
      icon: Server,
      desc: "Attach models and compute backends (Kubernetes, On-prem, Cloud). The OS handles scheduling and routing automatically.",
    },
    {
      id: "04",
      label: "Serve Users",
      icon: Users,
      desc: "Serve real users immediately. Inference execution, resource tracking, and audit logging happen automatically.",
    },
  ];

  return (
    <div
      className="w-full bg-[#050505] text-white relative selection:bg-white selection:text-black overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <WideDashedLineV className="left-6 md:left-12 lg:left-24" />
      <WideDashedLineV className="right-6 md:right-12 lg:right-24" />
      <WideDashedLineV className="left-1/2 -translate-x-1/2 hidden md:block" />

      <WideDashedLineH className="top-0" />

      <Crosshair className="top-0 left-6 rotate-180 md:left-12 lg:left-24 -translate-y-1/2" />
      <Crosshair className="top-0 right-6 md:right-12 lg:right-24 -translate-y-1/2" />
      <Crosshair className="top-0 left-1/2 -translate-x-3 -translate-y-1/2 hidden md:flex" />

      <div className="w-full h-24 relative">
        <WideDashedLineH className="bottom-0 left-0" />
      </div>

      <div className="relative mx-6 md:mx-12 lg:mx-24 flex flex-col lg:flex-row md:flex-row bg-[#050505]">

        <div className="py-10 w-full md:w-1/2 bg-black/50 relative px-6 lg:px-20 flex flex-col justify-center z-10 border-r border-white/5 md:border-none">
          <div className="relative">
            <span className="text-neutral-400 font-mono text-[10px] tracking-[0.3em] uppercase block mb-6 border border-neutral-700/50 px-3 py-1 w-fit rounded-full">
              Developer Flow
            </span>

            <h2 className="text-5xl md:text-7xl tracking-tighter text-white mb-8 leading-[0.9] mix-blend-difference">
              How Developers
              <br />
              <span className="text-neutral-600">Use Inferia.</span>
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-sm">
              Framework-level integration with no fluff. InferiaLLM becomes the single entry point for your entire inference stack.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center relative z-10">
          {STEPS.map((item, i) => {
            const isActive = activeItem === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setActiveItem(i)}
                className="relative group cursor-pointer transition-colors duration-500"
              >
                <WideDashedLineH className="top-0 left-0" />

                <div className="px-8 md:px-12 py-10 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span
                        className={`font-mono text-xs transition-colors duration-300 ${isActive ? "text-white" : "text-neutral-600"
                          }`}
                      >
                        Step {item.id}
                      </span>
                      <h3
                        className={`text-2xl tracking-tight transition-colors duration-300 ${isActive ? "text-white" : "text-neutral-500"
                          }`}
                      >
                        {item.label}
                      </h3>
                    </div>

                    <div
                      className={`transition-all duration-500 ${isActive ? "opacity-100 rotate-0" : "opacity-20 "
                        }`}
                    >
                      {isActive ? (
                        <ArrowUpRight className="w-5 h-5 text-[#00f2ff]" />
                      ) : (
                        <item.icon className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${isActive
                        ? "max-h-32 opacity-100 mt-4"
                        : "max-h-0 opacity-0 mt-0"
                      }`}
                  >
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-md pl-[3.5rem]">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 bg-[#111] -z-10 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"
                    }`}
                />
              </div>
            );
          })}

          <div className="relative w-full h-px">
            <WideDashedLineH className="bottom-0 left-0" />
          </div>
        </div>
      </div>

      <WideDashedLineH className="bottom-0" />

      <Crosshair className="bottom-0 left-6 md:left-12 lg:left-24 rotate-180 translate-y-1/2" />
      <Crosshair className="bottom-0 right-6 md:right-12 lg:right-24 translate-y-1/2" />
      <Crosshair className="bottom-0 left-1/2 -translate-x-3 translate-y-1/2 hidden md:flex" />
    </div>
  );
}