"use client";

import { Code2, TerminalSquare, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { WindowFrame } from "./ui/WindowFrame";

export function AlgorithmicIntelligence() {
  return (
    <div className="w-full px-4 mb-32">
      <WindowFrame title="Logic: Algorithmic Intelligence" id="logic">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Algorithmic Intelligence
          </h2>
          <p className="text-lg text-silver-dim max-w-2xl">
            Rigorous problem-solving metrics and competitive programming integrations.
          </p>
        </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Pulsing Telemetry Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30 hidden md:block">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="6 6">
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
            </line>
            <circle cx="50%" cy="50%" r="3" fill="#06b6d4">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* LeetCode Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, zIndex: 50, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 1)" }}
          className="relative h-full p-8 bento-card flex flex-col gap-6 z-10 bg-black/80"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFA116]/10 flex items-center justify-center border border-[#FFA116]/20">
              <Code2 className="text-[#FFA116]" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-foreground tracking-tight">LeetCode</h3>
          </div>
          
          <p className="text-silver-dim font-medium flex-grow">
              Algorithmic Efficiency & Data Structures. Deep expertise in graph theory, dynamic programming, and advanced tree structures.
            </p>
            
          <div className="mt-8 border-t border-white/10 pt-6">
            <a
              href="https://leetcode.com/u/shreyanshchoolet/"
              target="_blank"
              className="group flex w-fit items-center gap-2 text-sm font-bold text-[#FFA116] hover:text-[#FFB84D] transition-colors"
            >
              <span>View Global Ranking</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* CodeChef Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, zIndex: 50, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 1)" }}
          className="relative h-full p-8 bento-card flex flex-col gap-6 z-10 bg-black/80"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#5B4638]/40 flex items-center justify-center border border-[#5B4638]/50">
              <TerminalSquare className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-foreground tracking-tight">CodeChef</h3>
          </div>
          
          <p className="text-silver-dim font-medium flex-grow">
              Competitive Logic & C++ Architecture. Low-latency execution environments and mathematically rigorous problem solving under strict time complexities.
            </p>
            
          <div className="mt-8 border-t border-white/10 pt-6">
            <a
              href="https://www.codechef.com/users/goofy_cape_08"
              target="_blank"
              className="group flex w-fit items-center gap-2 text-sm font-bold text-silver hover:text-foreground transition-colors"
            >
              <span>View Rating Progression</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
      </WindowFrame>
    </div>
  );
}
