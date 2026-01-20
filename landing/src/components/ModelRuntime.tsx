"use client";
import { Cpu, Gpu, Group, Server, Shield, Terminal } from "lucide-react";

const WideDashedLineH = ({ className = "" }: { className?: string }) => (
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

const Crosshair = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute w-3 h-3 flex items-center justify-center z-10 opacity-40 ${className}`}
  >
    <div className="w-full h-px bg-white" />
    <div className="h-full w-px bg-white" />
  </div>
);

const MODELS = [
  {
    name: "Qwen3-Coder",
    src: "/Qwen.svg",
    provider: "AWS (us-east-1)",
    status: "Running",
    vram: "42GB",
    tps: "142 tok/s",
  },
  {
    name: "Mixtral-8x7b",
    src: "/mistral.svg",
    provider: "Nosana (DePIN)",
    status: "Scaling Up",
    vram: "24GB",
    tps: "---",
  },
  {
    name: "DeepSeek-V3",
    src: "/deepseek.svg",
    provider: "GCP (europe-west)",
    status: "Running",
    vram: "38GB",
    tps: "89 tok/s",
  },
];

export default function ModelRuntimeSection() {
  return (
    <section
      className="w-full bg-[#050505] text-white relative font-sans "
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <WideDashedLineV className="left-6 md:left-12 lg:left-24" />
      <WideDashedLineV className="right-6 md:right-12 lg:right-24" />
      <WideDashedLineV className="left-1/2 -translate-x-1/2 hidden lg:block" />

      <WideDashedLineH className="top-0" />
      <WideDashedLineH className="bottom-0" />

      <Crosshair className="top-0 left-6 md:left-12 lg:left-24 -translate-y-1/2" />
      <Crosshair className="top-0 right-6 md:right-12 lg:right-24 -translate-y-1/2" />

      <div className="flex flex-col-reverse lg:flex-row w-auto mx-6 md:mx-12 lg:mx-24 relative">
        <div className="w-full lg:w-1/2 relative flex flex-col items-center justify-center py-12 lg:py-24 pr-0 lg:pr-12 border-t lg:border-t-0 border-white/5">
          <div className="w-full max-w-md flex flex-col gap-4 relative z-10">
            <div className="flex items-center justify-between px-4 py-2 border border-white/10 bg-[#0A0A0A] mb-2">
              <div className="flex items-center gap-2">
                <Terminal className="w-3 h-3 text-neutral-500" />
                <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">
                  Compute Pools
                </span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
              </div>
            </div>

            {MODELS.map((model, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-0.5 bg-linear-to-r from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <div className="relative bg-[#080808] border border-white/10 p-5 hover:border-white/20 transition-colors duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={model.src}
                        alt={model.name}
                        className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-white tracking-tight">
                          {model.name}
                        </h4>
                        <span className="text-[10px] font-mono text-neutral-500 uppercase">
                          {model.provider}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded border border-white/5">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          model.status === "Running"
                            ? "bg-emerald-500 animate-pulse"
                            : "bg-yellow-500"
                        }`}
                      />
                      <span className="text-[9px] font-mono text-neutral-300 uppercase tracking-wider">
                        {model.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-dashed border-white/10">
                    <div>
                      <span className="text-[9px] text-neutral-600 uppercase tracking-widest block mb-1">
                        VRAM Usage
                      </span>
                      <div className="flex items-center gap-2">
                        <Cpu className="w-3 h-3 text-neutral-500" />
                        <span className="text-xs font-mono text-neutral-300">
                          {model.vram}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[9px] text-neutral-600 uppercase tracking-widest block mb-1">
                        Throughput
                      </span>
                      <span className="text-xs font-mono text-neutral-300">
                        {model.tps}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="absolute inset-0 z-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="w-full lg:w-1/2  relative flex flex-col justify-center py-12 lg:py-24 pl-6 lg:pl-20 z-10 border-l border-white/5 lg:border-none">
          <div className="relative">
            <span className="text-neutral-400 font-mono text-[10px] tracking-[0.3em] uppercase block mb-6 border border-neutral-700/50 px-3 py-1 w-fit rounded-full">
              Infrastructure
            </span>

            <h2 className="text-5xl md:text-7xl tracking-tighter text-white mb-8 leading-[0.9] mix-blend-difference">
              Execution & 
              <br />
              <span className="text-neutral-600">Compute.</span>
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
              InferiaLLM runs inference across private infrastructure. The OS schedules and routes execution so applications never manage compute directly.
            </p>

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Server className="w-4 h-4 text-neutral-600" />
                <span>Zero-config Docker containers</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Cpu className="w-4 h-4 text-neutral-600" />
                <span>Auto-scaling GPU orchestration</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Gpu className="w-4 h-4 text-neutral-600" />
                <span>On-prem GPU clusters</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Group className="w-4 h-4 text-neutral-600" />
                <span>Kubernetes-based inference</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Shield className="w-4 h-4 text-neutral-600" />
                <span>Isolated or sovereign environments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
