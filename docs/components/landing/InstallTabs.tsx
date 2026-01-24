"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const TABS = [
    { id: "python", label: "Python", command: "pip install inferiallm" },
    { id: "docker", label: "Docker", command: "docker pull inferiaai/inferiallm" },
    { id: "source", label: "Source", command: "git clone https://github.com/InferiaAI/InferiaLLM.git" },
];

export default function InstallTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(TABS[activeTab].command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-xl">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
                <div className="flex items-center px-2 pt-2 border-b border-white/5 bg-white/[0.02]">
                    {TABS.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(index)}
                            className={`relative px-4 py-2.5 text-xs md:text-sm font-medium transition-all duration-300 rounded-t-lg ${activeTab === index
                                    ? "text-white bg-white/5"
                                    : "text-neutral-500 hover:text-neutral-300 hover:bg-white/[0.02]"
                                }`}
                        >
                            {tab.label}
                            {activeTab === index && (
                                <div
                                    className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00f2ff] shadow-[0_0_10px_rgba(0,242,255,0.5)]"
                                />
                            )}
                        </button>
                    ))}
                </div>

                <div className="p-4 md:p-5 relative group bg-[#050505]">
                    <div className="relative font-mono text-xs md:text-sm text-neutral-300 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide py-1">
                            <span className="text-[#00f2ff] select-none shrink-0">$</span>
                            <span className="whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-200" key={activeTab}>
                                {TABS[activeTab].command}
                            </span>
                        </div>

                        <button
                            onClick={handleCopy}
                            className="shrink-0 p-2 rounded-lg hover:bg-white/10 text-neutral-500 hover:text-white transition-all duration-300 border border-transparent hover:border-white/10"
                            aria-label="Copy command"
                        >
                            {copied ? (
                                <Check className="w-4 h-4 text-[#00f2ff]" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
