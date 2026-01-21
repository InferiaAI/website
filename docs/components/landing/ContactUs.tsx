import React from 'react';
import { ArrowRight } from 'lucide-react';

const WideDashedLineV = ({ className = "" }) => (
  <div
    className={`h-full w-px opacity-20 pointer-events-none absolute z-0 ${className}`}
    style={{
      backgroundImage: "linear-gradient(to bottom, #525252 50%, transparent 50%)",
      backgroundSize: "1px 12px",
      backgroundRepeat: "repeat-y",
    }}
  />
);

const WideDashedLineH = ({ className = "" }) => (
  <div
    className={`w-full h-px opacity-20 pointer-events-none absolute z-0 ${className}`}
    style={{
      backgroundImage: "linear-gradient(to right, #525252 50%, transparent 50%)",
      backgroundSize: "10px 1px",
      backgroundRepeat: "repeat-x",
    }}
  />
);


const ContactCTA = () => {
  return (
    <section
      className="relative w-full bg-[#050505] overflow-hidden flex flex-col items-center"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >

      <WideDashedLineH className="top-0 left-0" />
      <WideDashedLineV className="left-6 md:left-12 lg:left-24" />
      <WideDashedLineV className="right-6 md:right-12 lg:right-24" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-white/2 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative my-20 z-10 max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-white mb-8">
          Need Private, In-House <br className="hidden md:block" />
          LLM Infrastructure?
        </h2>

        <p className="text-lg text-neutral-400 mb-12 leading-relaxed max-w-xl mx-auto font-light">
          We work directly with teams deploying InferiaLLM
          for regulated and sensitive environments.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="https://cal.com/inferiaai/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2  bg-white text-black px-8 py-4 rounded-full font-semibold text-sm transition-all hover:bg-[#00f2ff] hover:scale-[1.02]"
          >
            <span>Schedule a Technical Call</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <span className="text-xs font-mono text-neutral-500 uppercase tracking-[0.2em] mt-3">
            Architecture discussion only
          </span>
        </div>

      </div>

      <WideDashedLineH className="bottom-0 left-0" />
    </section>
  );
};

export default ContactCTA;