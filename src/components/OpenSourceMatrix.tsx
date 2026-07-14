"use client";

import { motion } from "framer-motion";
import { GitBranch, Sparkles } from "lucide-react";
import { DataGlobe } from "./ui/DataGlobe";
import { WindowFrame } from "./ui/WindowFrame";

const repos = [
  {
    name: "bharatsetu-empower-connect-unite",
    desc: "Interconnected public platform infrastructure engineered for scale.",
    tags: ["TypeScript", "Next.js"],
  },
  {
    name: "Bharat-setu",
    desc: "Core backend architecture supporting the Bharat Setu ecosystem.",
    tags: ["TypeScript", "Node.js"],
  },
  {
    name: "arcade-echo-60",
    desc: "Real-time echo architecture for synchronized state management.",
    tags: ["TypeScript", "WebSockets"],
  },
  {
    name: "Code_Crux",
    desc: "Core algorithmic repository containing advanced data structures.",
    tags: ["C++", "Algorithms"],
  },
  {
    name: "game_dev",
    desc: "Foundational logic repository exploring rendering and physics.",
    tags: ["C#", "Unity", "Logic"],
  },
  {
    name: "portfolio",
    desc: "The recursive repository housing this exact UI codebase.",
    tags: ["TypeScript", "Next.js", "Framer"],
  },
];

export function OpenSourceMatrix() {
  return (
    <div className="w-full px-4 mb-32">
      <WindowFrame title="Matrix: Open Source" id="open-source">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Open Source
          </h2>
          <p className="text-lg text-silver-dim max-w-2xl">
            Architectural repositories and public infrastructure.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-8">
        {/* Flagship Repository */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2 md:row-span-2 group relative p-12 bento-card flex flex-col justify-between"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 p-32 bg-accent-glow rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* 3D Data Globe Background */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] h-[120%] opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-auto z-0">
            <DataGlobe />
          </div>
          
          <div className="relative z-10 pointer-events-none">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight flex flex-col gap-3">
                breathe-future-vision
                <span className="w-fit flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold bg-green-500/20 text-green-400 uppercase tracking-widest">
                  <Sparkles size={12} /> Public Template
                </span>
              </h3>
            </div>
            <p className="text-silver-dim max-w-sm leading-relaxed mb-8 font-medium">
              Next-generation, real-time satellite intelligence and AI-powered platform for air pollution monitoring, predictive forecasting, and stubble fire tracking across India.
            </p>
          </div>

          <div className="relative z-10 flex flex-col justify-end gap-6 mt-auto">
            <div className="flex flex-wrap gap-2">
              {["React", "Python", "TypeScript", "Next.js", "Geospatial"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-silver tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <GitBranch className="absolute top-8 right-8 text-white/20 group-hover:text-accent-light transition-colors" size={28} />
        </motion.div>

        {/* Standard Repositories */}
        {repos.map((repo, i) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: (i % 4) * 0.1 }}
            className={`group relative p-10 bento-card flex flex-col ${
              i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <GitBranch className="absolute top-6 right-6 text-white/10 group-hover:text-accent-light transition-colors" size={20} />
            
            <h3 className="text-xl font-bold text-foreground tracking-tight mb-2 pr-8">
              {repo.name}
            </h3>
            <p className="text-sm font-medium text-silver-dim leading-relaxed mb-6 flex-1">
              {repo.desc}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {repo.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-silver tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      </WindowFrame>
    </div>
  );
}
