"use client";

import { motion } from "framer-motion";
import { Monitor, Search, LayoutGrid, Terminal, Cpu } from "lucide-react";
import { WindowFrame } from "./ui/WindowFrame";

export function InteractiveSandbox() {
  return (
    <div className="w-full px-4 mb-32">
      <WindowFrame title="Prototyping: Sandbox" id="sandbox">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            High-Fidelity Prototyping
          </h2>
          <p className="text-lg text-silver-dim max-w-2xl">
            Frontend Architecture & Interactive Sandboxes.
          </p>
        </div>

      <motion.div
        initial={{ opacity: 0, rotateX: 10, y: 50 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 1000 }}
      >
        <div className="w-full aspect-[16/10] sm:aspect-video bento-card border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_-10px_rgba(59,130,246,0.2)] relative flex flex-col justify-between">
          
          {/* OS Desktop Background (Neural Aesthetic) */}
          <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian-light to-accent/10 opacity-50 pointer-events-none" />
          
          {/* Mock floating window */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-white/5 backdrop-blur-3xl border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden">
            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs font-bold text-silver tracking-wider">Windows 12 Pro Clone - Neural UI</span>
            </div>
            <div className="flex-1 p-6 flex flex-col gap-6">
              <div className="flex items-center gap-4 text-foreground">
                <Cpu className="text-accent-light" />
                <h3 className="text-lg font-bold">Integrated AI Copilot</h3>
              </div>
              <div className="flex-1 bg-black/40 rounded border border-white/5 p-4 font-mono text-xs text-silver-dim flex flex-col gap-2">
                <p>&gt; Initializing neural components...</p>
                <p>&gt; Loading UI physics engine...</p>
                <p className="text-accent-light">&gt; Ready.</p>
              </div>
            </div>
          </div>

          <div className="flex-1" />

          {/* Centered Taskbar */}
          <div className="relative z-10 w-full p-4 flex justify-center">
            <div className="bento-card px-6 py-3 rounded-2xl flex items-center gap-4 border border-white/10 shadow-2xl">
              <div className="w-10 h-10 rounded hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer">
                <LayoutGrid className="text-foreground" size={20} />
              </div>
              <div className="w-10 h-10 rounded hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer">
                <Search className="text-silver hover:text-white" size={20} />
              </div>
              <div className="w-10 h-10 rounded hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer">
                <Monitor className="text-silver hover:text-white" size={20} />
              </div>
              <div className="w-10 h-10 rounded hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer">
                <Terminal className="text-silver hover:text-white" size={20} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      </WindowFrame>
    </div>
  );
}
