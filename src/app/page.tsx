"use client";

import { FloatingDock } from "@/components/ui/FloatingDock";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { AlgorithmicIntelligence } from "@/components/AlgorithmicIntelligence";
import { InfrastructureMatrix } from "@/components/InfrastructureMatrix";
import { InteractiveSandbox } from "@/components/InteractiveSandbox";
import { OperationsLogistics } from "@/components/OperationsLogistics";
import { DataSimulation } from "@/components/DataSimulation";
import { AcademicTimeline } from "@/components/AcademicTimeline";
import { Certifications } from "@/components/Certifications";
import { CloudTopography } from "@/components/CloudTopography";
import { GenAITerminal } from "@/components/GenAITerminal";
import { InfrastructureResilience } from "@/components/InfrastructureResilience";
import { OpenSourceMatrix } from "@/components/OpenSourceMatrix";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { RecruiterAssistant } from "@/components/RecruiterAssistant";
import { BootSequence } from "@/components/BootSequence";
import { RootShell } from "@/components/RootShell";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ParallaxWrapper } from "@/components/ui/ParallaxWrapper";
import { useState } from "react";

import { Briefcase, GitBranch, Code2, Trophy, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { isVeronicaMode, toggleVeronicaMode } = useTheme();
  const [hasBooted, setHasBooted] = useState(false);

  return (
    <>
      <BootSequence onComplete={() => setHasBooted(true)} />
      <RootShell />
      <ScrollProgress />
      <main className={`relative w-full flex flex-col items-center overflow-hidden transition-opacity duration-1000 ${hasBooted ? 'opacity-100' : 'opacity-0 h-screen'}`}>
      
      <div className="w-full flex flex-col gap-32 pb-48 relative z-10">
        <HeroSection />
        <ParallaxWrapper offset={-30}><OpenSourceMatrix /></ParallaxWrapper>
        <ParallaxWrapper offset={40}><AlgorithmicIntelligence /></ParallaxWrapper>
        <ParallaxWrapper offset={-40}><CloudTopography /></ParallaxWrapper>
        <ParallaxWrapper offset={30}><InfrastructureMatrix /></ParallaxWrapper>
        <ParallaxWrapper offset={-20}><InfrastructureResilience /></ParallaxWrapper>
        <ParallaxWrapper offset={50}><InteractiveSandbox /></ParallaxWrapper>
        <ParallaxWrapper offset={-30}><GenAITerminal /></ParallaxWrapper>
        <ParallaxWrapper offset={40}><ProjectsShowcase /></ParallaxWrapper>
        <ParallaxWrapper offset={-40}><OperationsLogistics /></ParallaxWrapper>
        <ParallaxWrapper offset={30}><DataSimulation /></ParallaxWrapper>
        <ParallaxWrapper offset={-30}><AcademicTimeline /></ParallaxWrapper>
        <ParallaxWrapper offset={50}><Certifications /></ParallaxWrapper>
      </div>

      <InteractiveTerminal />
      <RecruiterAssistant />
      <FloatingDock />

      {/* Midnight Void Easter Egg Toggle */}
      <button
        onClick={toggleVeronicaMode}
        className={`fixed bottom-4 right-6 z-[60] text-[10px] font-mono tracking-widest uppercase transition-colors ${
          isVeronicaMode ? "text-accent-light drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]" : "text-white/20 hover:text-white/40"
        }`}
      >
        [ ENV: VERONICA ]
      </button>
    </main>
    </>
  );
}
