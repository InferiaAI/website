import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Zap, Network } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col items-center justify-center space-y-8">
            <Image 
              src="https://raw.githubusercontent.com/InferiaAI/InferiaLLM/main/assets/inferia-cli.gif?token=GHSAT0AAAAAADMPEA35H4G6IG5J3HHURAGI2LQU53A" 
              alt="Inferia CLI Demo" 
              width={600} 
              height={400} 
              unoptimized
              className="rounded-lg shadow-2xl border border-border w-full max-w-2xl"
            />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            The Operating System for <br />
            <span className="text-primary">LLMs in Production</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridge the gap between raw compute and applications. Unified API, built-in guardrails, and intelligent routing for distributed inference.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/InferiaAI/InferiaLLM"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View on GitHub
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 md:px-12 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm flex flex-col items-center text-center space-y-3">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Unified Interface</h3>
            <p className="text-muted-foreground text-sm">
              OpenAI-compatible endpoints for seamless integration with your existing tools and libraries.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm flex flex-col items-center text-center space-y-3">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Security First</h3>
            <p className="text-muted-foreground text-sm">
              Built-in Filtration Gateway provides PII redaction, prompt injection protection, and content safety.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm flex flex-col items-center text-center space-y-3">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Network className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Smart Orchestration</h3>
            <p className="text-muted-foreground text-sm">
              Intelligent routing and job management across diverse compute pools like Kubernetes and SkyPilot.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
