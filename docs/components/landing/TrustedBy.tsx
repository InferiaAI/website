"use client";
import React from "react";
import { Shield } from "lucide-react";

const WideDashedLineV = ({ className = "" }: { className?: string }) => (
  <div
    className={`h-full w-[1px] opacity-20 pointer-events-none absolute z-0 ${className}`}
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
    className={`w-full h-[1px] opacity-20 pointer-events-none absolute z-0 ${className}`}
    style={{
      backgroundImage:
        "linear-gradient(to right, #525252 50%, transparent 50%)",
      backgroundSize: "10px 1px",
      backgroundRepeat: "repeat-x",
    }}
  />
);

const Crosshair = ({ className = "" }: { className?: string }) => (
  <div className={`absolute w-3 h-3 flex items-center justify-center z-20 opacity-60 ${className}`}>
    <div className="w-full h-[1px] bg-white" />
    <div className="h-full w-[1px] bg-white" />
  </div>
);

const COMPANIES = [
  { name: "Nosana", src: "/nosana.svg", color: "#14F195" },
  { name: "akash", src: "/akash.svg", color: "#FF414C" },
  { name: "VPC", icon: Shield, color: "#3B82F6" },
  { name: "GCP", src: "/gcp.svg", color: "#10a37f" },
  { name: "Azure", src: "/azure.svg", color: "#0078D4" },
  { name: "AWS", src: "/aws.svg", color: "#FF9900" },
  { name: "InferiaChat", src: "/inferia.svg", color: "#ffffff" },
];

export default function TrustedBySection() {
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="w-full bg-[#050505] text-white relative font-sans selection:bg-white selection:text-black pt-24 pb-24 flex flex-col items-center overflow-hidden border-white/5"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <WideDashedLineV className="left-6 md:left-12 lg:left-24" />
      <WideDashedLineV className="right-6 md:right-12 lg:right-24" />


      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-24 mb-16 text-center relative z-10">
        <span className="text-neutral-500 font-mono text-[10px] tracking-[0.3em] uppercase block mb-4 border border-neutral-800 px-3 py-1 w-fit mx-auto rounded-full bg-black/50">
          Ecosystem
        </span>
        <h3 className="text-xl md:text-4xl font-extralight tracking-tight text-white">
          Deploy on any Infrastructure
        </h3>
        <p className="mt-2 text-neutral-400 font-mono text-xs md:text-sm tracking-widest opacity-70">
          SELF-HOSTED · CLOUD-AGNOSTIC · PROVIDER-NEUTRAL
        </p>
      </div>

      <div className="w-auto mx-6 md:mx-12 lg:mx-24 relative z-10 self-stretch">

        <WideDashedLineH className="top-0 left-0" />

        <div className="flex flex-wrap justify-center w-full relative">

          {COMPANIES.map((company, i) => (
            <div
              key={i}
              // onMouseEnter={() => setHoveredIndex(i)}
              // onMouseLeave={() => setHoveredIndex(null)}
              className="relative h-32 w-1/2 md:w-1/3 lg:w-1/4 group flex items-center justify-center overflow-hidden transition-all duration-300 cursor-default"
            >
              <WideDashedLineH className="bottom-0 left-0" />
              <WideDashedLineV className="right-0 top-0" />

              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,var(--glow-color),transparent_70%)]`}
                style={{ "--glow-color": company.color } as React.CSSProperties}
              />

              <div className="relative z-10 flex items-center gap-3 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 grayscale group-hover:grayscale-0">
                {company.icon ? (
                  <company.icon className="w-6 h-6" />
                ) : (
                  <img
                    src={company.src}
                    alt={company.name}
                    className="w-6 h-6 object-contain"
                  />
                )}
                <span className="text-lg font-bold tracking-tight">
                  {company.name}
                </span>
              </div>

              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      <WideDashedLineH className="bottom-0" />

      <Crosshair className="bottom-0 left-6 md:left-12 rotate-180 lg:left-24 translate-y-1/2" />
      <Crosshair className="bottom-0 right-6 md:right-12 lg:right-24 translate-y-1/2" />

    </div>
  );
}