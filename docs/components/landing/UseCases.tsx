"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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

const USE_CASES = [
  {
    industry: "Law Firms",
    desc: "Running confidential AI workflows. Legal data never leaves the firm's private VPC, ensuring client privilege is maintained while leveraging LLM capabilities for contract review.",
  },
  {
    industry: "Healthcare & Medical",
    desc: "Processing sensitive patient data (HIPAA). InferiaLLM allows hospitals to run diagnostic and summary models on-premise without sending PII to public API providers.",
  },
  {
    industry: "Financial Institutions",
    desc: "Deploying regulated AI systems. Banks use InferiaLLM to govern trading bots and customer analysis tools with strict audit logs and guaranteed data sovereignty.",
  },
  {
    industry: "Enterprises",
    desc: "Replacing internal LLM platforms. Instead of building a custom API gateway, teams deploy InferiaLLM as a ready-made OS to manage thousands of internal users and apps.",
  },
  {
    industry: "Sovereign Entities",
    desc: "Organizations that cannot send data to public AI services due to national security or strict compliance requirements.",
  },
];

export default function UseCases() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="w-full bg-[#050505] text-white relative font-sans "
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <WideDashedLineV className="left-6 md:left-12 lg:left-24" />
      <WideDashedLineV className="right-6 md:right-12 lg:right-24" />

      <WideDashedLineH className="bottom-0" />

      <div className="flex flex-col mx-6 md:mx-12 lg:mx-24 relative">
        <div className="w-full h-24 relative">
          <WideDashedLineH className="bottom-0 left-0" />

          <Crosshair className="bottom-0 left-0 rotate-180 translate-y-1/2" />
          <Crosshair className="bottom-0 right-0 translate-y-1/2" />
        </div>

        <div className="flex flex-col lg:flex-row min-h-150 relative">
          <WideDashedLineV className="left-[35%] hidden lg:block" />

          <div className="w-full lg:w-[35%] py-16 lg:py-24 pr-12 px-6 lg:px-20 relative border-b lg:border-b-0 border-white/5 lg:border-none">
            <div className="lg:sticky lg:top-32">
              <span className="text-neutral-400 font-mono text-[10px] tracking-[0.3em] uppercase block mb-6 border border-neutral-700/50 px-3 py-1 w-fit rounded-full">
                Use Cases
              </span>

              <h2 className="text-4xl md:text-6xl tracking-tighter text-white mb-6">
                Who is this
                <br />
                <span className="text-neutral-600">For?</span>
              </h2>

              <p className="text-neutral-500 text-md leading-relaxed max-w-xs mb-8">
                InferiaLLM is used to run secure, private LLM inference in-house at scale.
              </p>
              
              {/* <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <Briefcase className="w-4 h-4" />
                <span>CASE_STUDIES</span>
              </div> */}
            </div>
          </div>

          <div className="w-full lg:w-[65%] flex flex-col relative">
            {USE_CASES.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="group relative cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <WideDashedLineH className="top-0 left-0" />

                  <div
                    className={`p-8 md:p-12 transition-colors duration-500 ${
                      isOpen ? "bg-[#0A0A0A]" : "hover:bg-[#080808]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`font-mono text-xs mt-1 transition-colors ${
                          isOpen ? "text-emerald-500" : "text-neutral-600"
                        }`}
                      >
                        0{i + 1}
                      </span>

                      <div className="flex-1">
                        <h3
                          className={`text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300 ${
                            isOpen
                              ? "text-white"
                              : "text-neutral-400 group-hover:text-neutral-200"
                          }`}
                        >
                          {item.industry}
                        </h3>

                        <div
                          className={`grid transition-all duration-500 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100 mt-4"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-lg">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative w-6 h-6 flex items-center justify-center">
                        <div
                          className={`absolute transition-all duration-500 ${
                            isOpen
                              ? "rotate-90 opacity-0"
                              : "rotate-0 opacity-100"
                          }`}
                        >
                          <Plus className="w-5 h-5 text-neutral-600" />
                        </div>
                        <div
                          className={`absolute transition-all duration-500 ${
                            isOpen
                              ? "rotate-0 opacity-100"
                              : "-rotate-90 opacity-0"
                          }`}
                        >
                          <Minus className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute left-0 top-0 bottom-0 w-px bg-emerald-500 transition-all duration-500 ${
                      isOpen ? "h-full opacity-100" : "h-0 opacity-0"
                    }`}
                  />
                </div>
              );
            })}

            <WideDashedLineH className="bottom-0 left-0" />
          </div>

          <WideDashedLineH className="bottom-0" />
        </div>
        
        <div className="w-full h-24 relative">
          <Crosshair className="bottom-0 left-0 rotate-180 translate-y-1/2" />
          <Crosshair className="bottom-0 right-0 translate-y-1/2" />
        </div>
      </div>
    </section>
  );
}