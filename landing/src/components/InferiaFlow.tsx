"use client";
import React, { useState, useRef, useEffect } from "react";
import { ZoomIn, Move } from "lucide-react";
import { MuxIntegrationSVG } from "./FlowSVG";

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

export default function InferiaFlowSection() {
  const [scale, setScale] = useState(() => {
    if (typeof window === "undefined") return 2.5;
    return window.innerWidth < 640 ? 1.2 : 2.5;
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const canvasRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const zoomSensitivity = 0.001;

      setScale((prevScale) => {
        const newScale = prevScale - e.deltaY * zoomSensitivity;
        return Math.min(Math.max(1, newScale), 8);
      });
    };

    canvas.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      canvas.removeEventListener("wheel", onWheel);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastPos.current.x;
    const deltaY = e.clientY - lastPos.current.y;

    setPosition((prev) => ({ x: prev.x + deltaX, y: prev.y + deltaY }));
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleDoubleClick = () => {
    setScale(window.innerWidth < 640 ? 1.2 : 2.5);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section
      className="w-full min-h-[700px] bg-[#050505] text-white relative flex flex-col lg:flex-row overflow-hidden border-t border-white/5 font-sans"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <WideDashedLineV className="left-6 md:left-12 lg:left-24" />
      <WideDashedLineV className="right-6 md:right-12 lg:right-24" />
      <WideDashedLineV className="left-1/2 -translate-x-1/2 hidden lg:block" />

      <WideDashedLineH className="top-24" />
      <WideDashedLineH className="bottom-24" />

      <div className="w-full lg:w-1/2 relative flex flex-col justify-center p-12 lg:p-44 z-10">
        <div className="relative">
          <span className="text-neutral-400 font-mono text-[10px] tracking-[0.3em] uppercase block mb-6 border border-neutral-700/50 px-3 py-1 w-fit rounded-full">
            Architecture
          </span>

          <h2 className="text-5xl md:text-7xl tracking-tighter text-white mb-8 leading-[0.9] mix-blend-difference">
            How It
            <br />
            <span className="text-neutral-600">Works.</span>
          </h2>

          <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
            InferiaLLM owns the entire path from user request to inference execution. 
            Applications never manage compute directly.
          </p>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                System Live
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative flex items-center justify-center py-24 pr-6 md:pr-12 lg:pr-24 pl-6 lg:pl-0 border-t lg:border-t-0  border-white/5">
        <div className="relative w-full aspect-square border-y border-r border-white/10 bg-[#080808] z-10 group overflow-hidden select-none">
          <div className="absolute -top-px left-0 w-4 h-4 border-t border-white/20 z-20 pointer-events-none" />
          <div className="absolute -bottom-px left-0 w-4 h-4 border-b border-white/20 z-20 pointer-events-none" />
          <div className="absolute -top-px right-0 w-4 h-4 border-r border-t border-white/40 z-20 pointer-events-none" />
          <div className="absolute -bottom-px right-0 w-4 h-4 border-r border-b border-white/40 z-20 pointer-events-none" />

          <div
            ref={canvasRef}
            className={`w-full h-full flex items-center justify-center relative cursor-grab active:cursor-grabbing`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onDoubleClick={handleDoubleClick}
          >
            <div
              className="transition-transform duration-75 ease-out will-change-transform"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              }}
            >
              <MuxIntegrationSVG />
            </div>
          </div>

          <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-30 pointer-events-none">
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-sm">
              <Move className="w-3 h-3 text-neutral-400" />
              <span className="text-[9px] font-mono text-neutral-400">PAN</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-sm">
              <ZoomIn className="w-3 h-3 text-neutral-400" />
              <span className="text-[9px] font-mono text-neutral-400">
                SCROLL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}