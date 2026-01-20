import HeroPage from "./components/HeroPage";
import TrustedBySection from "./components/TrustedBy";
// import DashboardSection from "./components/DashboardView";
// import InferiaFlowSection from "./components/InferiaFlow";
import ModelRuntimeSection from "./components/ModelRuntime";
import Section3Policy from "./components/Policy";
import UseCases from "./components/UseCases";
import Footer from "./components/Footer";
import VideoDemoSection from "./components/DemoSection";
import ProbSolution from "./components/ProbSolution";
import ContactCTA from "./components/ContactUs";

function App() {
  return (
    <>
      <HeroPage />
      <TrustedBySection />
      <div id="demo-video">
        <VideoDemoSection />
      </div>
      <ProbSolution />
      {/* <DashboardSection />
      <InferiaFlowSection /> */}
      <ModelRuntimeSection />

      <Section3Policy />

      <div id="use-cases">
        <UseCases />
      </div>

      <div id="contact-us">
        <ContactCTA />
      </div>
      <Footer />
    </>
  );
}

export default App;
