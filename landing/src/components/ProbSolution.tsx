"use client";
import { ArrowRight } from "lucide-react";

const WideDashedLineV = ({ className = "" }) => (
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

const WideDashedLineH = ({ className = "" }) => (
  <div
    className={`w-full h-px opacity-20 pointer-events-none absolute z-0 ${className}`}
    style={{
      backgroundImage:
        "linear-gradient(to right, #525252 50%, transparent 50%)",
      backgroundSize: "10px 1px",
      backgroundRepeat: "repeat-x",
    }}
  />
);

const PROBLEM_LIST = [
  "Inference Proxy",
  "User Management",
  "Auth & RBAC",
  "Request Scheduling",
  "Routing Infrastructure",
  "GPU Orchestration",
  "Audit Logs",
];

const SOLUTION_LIST = [
  "User & App Access",
  "Inference Proxying",
  "Request Validation",
  "Scheduling & Routing",
  "Compute Execution",
  "Resource Tracking",
  "Audit & Observability",
];

export default function ProbSolution() {
  return (
    <section
      className="w-full bg-[#050505] text-white relative font-sans"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <WideDashedLineV className="left-6 md:left-12 lg:left-24" />
      <WideDashedLineV className="right-6 md:right-12 lg:right-24" />


      <div className="flex flex-col lg:flex-row mx-6 md:mx-12 lg:mx-24 relative z-10 transition-colors">

        <div className="group w-full lg:w-1/2 py-16 px-6 md:px-12 border-b lg:border-b-0 lg:border-r border-white/5 transition-all duration-300 hover:shadow-[inset_0_0_80px_-20px_rgba(220,38,38,0.15)] hover:bg-[#0a0505]">
          <span className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest mb-6 block group-hover:text-red-400 transition-colors">
            The Reality
          </span>

          <h2 className="text-5xl tracking-tight text-neutral-300 mb-8 group-hover:text-red-500 transition-colors">
            The Problem.
          </h2>

          <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm">
            To serve models in production, teams are forced to build a massive internal platform from scratch.
          </p>

          <div className="space-y-2">
            {PROBLEM_LIST.map((item, i) => (
              <div key={i} className="text-sm text-neutral-500 font-mono line-through decoration-neutral-600 group-hover:text-red-400/60 group-hover:decoration-red-400/50 transition-colors">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="group w-full lg:w-1/2 py-16 px-6 md:px-12 bg-[#080808] transition-all duration-300 hover:shadow-[inset_0_0_80px_-20px_rgba(16,185,129,0.15)] hover:border-l-emerald-500/10">
          <span className="text-white font-mono text-[10px] uppercase tracking-widest mb-6 block group-hover:text-emerald-400 transition-colors">
            The Solution
          </span>

          <h2 className="text-5xl tracking-tight text-white mb-8 group-hover:text-emerald-50 transition-colors">
            What InferiaLLM Is.
          </h2>

          <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm group-hover:text-emerald-100/70 transition-colors">
            The Operating System for LLM inference. It sits between users and compute, owning the lifecycle.
          </p>

          <div className="space-y-2 mb-8">
            {SOLUTION_LIST.map((item, i) => (
              <div key={i} className="text-sm text-white font-mono group-hover:text-emerald-200 transition-colors">
                {item}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-white group-hover:text-emerald-400 transition-colors">
            <ArrowRight className="w-3 h-3" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-emerald-700 transition-colors">
              Replaces the internal platform
            </span>
          </div>
        </div>

      </div>

      <WideDashedLineH className="bottom-20" />
      <div className="h-20 w-full relative z-10" />
      <WideDashedLineH className="bottom-0" />

    </section>
  );
}