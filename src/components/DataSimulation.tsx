"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Database, FileJson, CheckCircle2 } from "lucide-react";
import { FloatingContainer } from "./ui/FloatingContainer";
import { WindowFrame } from "./ui/WindowFrame";

const SIMULATION_LOGS = [
  { text: "Initializing NLP Expense Classifier Engine...", delay: 500, icon: Database, color: "text-cyan-400" },
  { text: "Loading transformer model weights (PyTorch)...", delay: 1200, icon: Database, color: "text-cyan-400" },
  { text: "Streamlit interface connected. Listening for input...", delay: 1800, icon: Database, color: "text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" },
  { text: "RECEIVED SMS: 'Debited Rs. 450.00 from a/c **345 at STARBUCKS NEW DELHI on 12-05-2023'", delay: 2800, icon: FileJson, color: "text-yellow-400" },
  { text: "Parsing unstructured string...", delay: 3500, icon: FileJson, color: "text-yellow-400" },
  { text: "Extracting entities: [Amount: 450.00], [Merchant: STARBUCKS], [Location: NEW DELHI]", delay: 4500, icon: FileJson, color: "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" },
  { text: "Applying classification heuristics...", delay: 5200, icon: FileJson, color: "text-cyan-400" },
  { text: "CLASSIFIED AS: Food & Beverage", delay: 6000, icon: CheckCircle2, color: "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" },
  { text: "Data successfully written to persistent storage.", delay: 6800, icon: CheckCircle2, color: "text-white" }
];

export function DataSimulation() {
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<typeof SIMULATION_LOGS>([]);
  const [isComplete, setIsComplete] = useState(false);

  const runSimulation = () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setLogs([]);
    setIsComplete(false);

    SIMULATION_LOGS.forEach((log, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
        if (index === SIMULATION_LOGS.length - 1) {
          setIsComplete(true);
          setIsRunning(false);
        }
      }, log.delay);
    });
  };

  return (
    <div className="w-full px-4 mb-32">
      <WindowFrame title="Terminal: Data Simulation" id="simulation">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Interactive Data Node
          </h2>
          <p className="text-lg text-silver-dim max-w-2xl">
            Live simulation: NLP Expense Classifier.
          </p>
        </div>

      <FloatingContainer speed={5} className="w-full bento-card rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
        {/* Terminal Header */}
        <div className="h-12 bg-black/40 border-b border-white/10 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-silver">nlp_classifier_simulation.py</span>
          </div>
          
          <button 
            onClick={runSimulation}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/30 disabled:opacity-50 disabled:hover:bg-cyan-500/10 text-cyan-400 text-xs font-mono rounded transition-colors border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            <Play size={12} fill="currentColor" />
            {isRunning ? "PROCESSING..." : isComplete ? "RE-RUN" : "RUN CLASSIFICATION"}
          </button>
        </div>

        {/* Terminal Body */}
        <div className="h-[400px] bg-[#0a0a0a] p-6 font-mono text-sm overflow-y-auto flex flex-col gap-3 relative">
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
               style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
               
          {!isRunning && logs.length === 0 && (
            <div className="h-full flex items-center justify-center text-silver-dim flex-col gap-4">
              <Database size={32} className="opacity-50" />
              <p>System idle. Awaiting execution command.</p>
            </div>
          )}

          <AnimatePresence>
            {logs.map((log, index) => {
              const Icon = log.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-4 items-start"
                >
                  <span className="text-silver-dim mt-0.5">[{String(index + 1).padStart(2, '0')}]</span>
                  <Icon size={16} className={`mt-0.5 shrink-0 ${log.color}`} />
                  <span className="text-silver tracking-wide">{log.text}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {isRunning && (
            <motion.div 
              animate={{ opacity: [1, 0] }} 
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="w-2 h-4 bg-white/70 ml-12 mt-2"
            />
          )}
        </div>
      </FloatingContainer>
      </WindowFrame>
    </div>
  );
}
