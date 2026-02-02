"use client";

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
  <div className={`absolute w-3 h-3 flex items-center justify-center z-10 opacity-40 ${className}`}>
    <div className="w-full h-px bg-white" />
    <div className="h-full w-px bg-white" />
  </div>
);

export default function VideoDemoSection() {
  return (
    <section
      className="w-full bg-[#050505] text-white relative font-sans "
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <WideDashedLineV className="left-6 md:left-12 lg:left-24" />
      <WideDashedLineV className="right-6 md:right-12 lg:right-24" />
      
      <WideDashedLineH className="top-0" />
      <WideDashedLineH className="bottom-0" />

      <Crosshair className="top-0 rotate-180 left-6 md:left-12 lg:left-24 -translate-y-1/2" />
      <Crosshair className="top-0 right-6 md:right-12 lg:right-24 -translate-y-1/2" />
      <Crosshair className="bottom-0 left-6 md:left-12 lg:left-24 translate-y-1/2 rotate-180" />
      <Crosshair className="bottom-0 right-6 md:right-12 lg:right-24 translate-y-1/2 rotate-180" />



      <div className="flex flex-col items-center py-24 mx-6 md:mx-12 lg:mx-24 relative">
         <span className="text-neutral-400 font-mono text-[10px] tracking-[0.3em] uppercase block mb-6 border border-neutral-700/50 px-3 py-1 w-fit mx-auto rounded-full">
                System Demo
            </span>
            
        
        <div className="w-full max-w-6xl relative z-10 mb-16">
            
            <div className="relative w-full aspect-video bg-[#080808] border border-white/10 group p-1">
                <div className="absolute -top-px left-0 w-4 h-4 border-t border-l border-white/30 z-20" />
                <div className="absolute -top-px right-0 w-4 h-4 border-t border-r border-white/30 z-20" />
                <div className="absolute -bottom-px left-0 w-4 h-4 border-b border-l border-white/30 z-20" />
                <div className="absolute -bottom-px right-0 w-4 h-4 border-b border-r border-white/30 z-20" />

                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_50%,rgba(255,255,255,0.02)_100%)] bg-size-[100%_4px] z-20" />

                <iframe
                    className="w-full h-full grayscale-50 group-hover:grayscale-0 transition-all duration-700 relative z-10"
                    src="https://www.youtube.com/embed/BPXIf__NPWs?autoplay=1&mute=1"
                    title="InferiaLLM Product Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>


        <div className="text-center max-w-2xl sm:max-w-3xl relative z-10 px-4">
           
            <h2 className="text-3xl md:text-6xl tracking-tighter text-white mb-6 leading-[0.9] mix-blend-difference">
                InferiaLLM In
                <br />
                <span className="text-neutral-600">Action.</span>
            </h2>

            <div className="text-neutral-400 text-sm md:text-lg leading-relaxed">
                <p>See how InferiaLLM consolidates deployment, security, routing, and governance into a single authoritative control plane-going from raw model to production API in minutes.</p>
                <div className="ml-4 mt-4 inline-flex flex-wrap items-center justify-center gap-3 md:gap-4 px-6 py-3 border border-white/5 bg-white/5 rounded-full text-[10px] md:text-xs font-mono tracking-wider text-neutral-400">
                <span className="text-white">USER_REQUEST</span>
                <span className="text-neutral-600">→</span>
                <span className="text-white">SCHEDULING</span>
                <span className="text-neutral-600">→</span>
                <span className="text-white">INFERENCE</span>
                <span className="text-neutral-600">→</span>
                <span className="text-emerald-500">Audit</span>
            </div>
            </div>
        </div>

      </div>
      
    </section>
  );
}
