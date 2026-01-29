import HeroPage from "@/components/landing/HeroPage";
import TrustedBySection from "@/components/landing/TrustedBy";
import VideoDemoSection from "@/components/landing/DemoSection";
import ProbSolution from "@/components/landing/ProbSolution";
import ModelRuntimeSection from "@/components/landing/ModelRuntime";
import Section3Policy from "@/components/landing/Policy";
import UseCases from "@/components/landing/UseCases";
import ContactCTA from "@/components/landing/ContactUs";
import Footer from "@/components/landing/Footer";

export const metadata = {
  title: 'Inferia LLM - The Operating System for LLMs in Production',
  description: 'Bridge the gap between raw compute and applications. Unified API, built-in guardrails, and intelligent routing for distributed inference.',
};

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#050505]">
      <HeroPage />
      <ContactCTA />
      <TrustedBySection />
      <div id="demo-video">
        <VideoDemoSection />
      </div>
      <ProbSolution />
      {/* <DashboardSection /> */}
      {/* <InferiaFlowSection /> */}
      <ModelRuntimeSection />
      <Section3Policy />
      <div id="use-cases">
        <UseCases />
      </div>
      <div id="contact-us">
        <ContactCTA />
      </div>
      <Footer />
    </main>
  );
}
