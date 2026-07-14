"use client";

import { motion } from "framer-motion";
import { ShieldCheck, DatabaseBackup, Lock, Activity } from "lucide-react";
import { FloatingContainer } from "./ui/FloatingContainer";
import { WindowFrame } from "./ui/WindowFrame";

export function InfrastructureResilience() {
  return (
    <div className="w-full px-4 mb-32">
      <WindowFrame title="Security: Resilience" id="resilience">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Infrastructure Resilience
          </h2>
          <p className="text-lg text-silver-dim max-w-2xl">
            Disaster Recovery, System Hardening, and High Availability.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Widget 1: The 3-2-1 Rule */}
        <motion.div
          initial={{ opacity: 0, z: -100, rotateY: -10 }}
          whileInView={{ opacity: 1, z: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ perspective: 1000 }}
        >
          <FloatingContainer speed={3.5} className="h-full bento-card p-8 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-32 bg-accent-glow rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10 flex flex-col h-full gap-8">
              <div className="flex items-center gap-4">
                <DatabaseBackup className="text-accent-light" size={32} />
                <h3 className="text-2xl font-bold text-foreground">The 3-2-1 Backup Protocol</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-4 flex-1">
                <div className="bg-[#0a0a0a] rounded-xl p-4 border border-white/5 shadow-2xl hover:-translate-y-1 transition-transform flex flex-col items-center justify-center text-center gap-2">
                  <span className="text-3xl font-bold text-foreground">3</span>
                  <span className="text-xs font-bold text-silver-dim uppercase tracking-widest">Copies of Data</span>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-4 border border-white/5 shadow-2xl hover:-translate-y-1 transition-transform flex flex-col items-center justify-center text-center gap-2">
                  <span className="text-3xl font-bold text-foreground">2</span>
                  <span className="text-xs font-bold text-silver-dim uppercase tracking-widest">Storage Media</span>
                </div>
                <div className="bg-[#111111] rounded-xl p-4 border border-accent-light/20 shadow-[0_0_20px_rgba(239,68,68,0.1)] hover:-translate-y-1 transition-transform flex flex-col items-center justify-center text-center gap-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent-light/5" />
                  <span className="text-3xl font-bold text-accent-light relative z-10">1</span>
                  <span className="text-xs font-bold text-silver uppercase tracking-widest relative z-10">Offsite/Cloud</span>
                </div>
              </div>
              
              <p className="text-sm text-silver-dim">
                Architecting zero-loss disaster recovery via automated snapshot scheduling, immutable S3 buckets, and highly available redundant architectures.
              </p>
            </div>
          </FloatingContainer>
        </motion.div>

        {/* Widget 2: System Hardening */}
        <motion.div
          initial={{ opacity: 0, z: -100, rotateY: 10 }}
          whileInView={{ opacity: 1, z: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ perspective: 1000 }}
        >
          <FloatingContainer delay={0.5} speed={4} className="h-full bento-card p-8 relative overflow-hidden flex flex-col">
            <div className="absolute bottom-0 left-0 p-32 bg-green-500/20 rounded-full blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/3" />
            
            <div className="relative z-10 flex flex-col h-full gap-8">
              <div className="flex items-center gap-4">
                <ShieldCheck className="text-green-400" size={32} />
                <h3 className="text-2xl font-bold text-foreground">System Hardening</h3>
              </div>
              
              <div className="flex flex-1 items-center justify-center gap-8">
                {/* Circular Progress (Simulated) */}
                <div className="relative w-32 h-32 rounded-full border-4 border-white/5 flex items-center justify-center shadow-[0_0_30px_rgba(74,222,128,0.15)]">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle 
                      cx="64" cy="64" r="60" 
                      fill="transparent" 
                      stroke="#4ade80" 
                      strokeWidth="4" 
                      strokeDasharray="377" 
                      strokeDashoffset="0"
                      className="drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                    />
                  </svg>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-white">100%</span>
                    <span className="text-[10px] text-green-400 uppercase tracking-widest">Secured</span>
                  </div>
                </div>

                  <div className="flex flex-col gap-3 p-4 bg-[#0a0a0a] border border-white/5 rounded-xl shadow-2xl">
                    <div className="flex items-center gap-2 text-sm text-silver font-medium">
                      <Lock size={14} className="text-green-400" /> IPTables & Firewalld
                    </div>
                    <div className="flex items-center gap-2 text-sm text-silver font-medium">
                      <Activity size={14} className="text-green-400" /> Vulnerability Audits
                    </div>
                    <div className="flex items-center gap-2 text-sm text-silver font-medium">
                      <ShieldCheck size={14} className="text-green-400" /> IAM Least Privilege
                    </div>
                  </div>
              </div>
              
              <p className="text-sm text-silver-dim">
                Executing comprehensive Linux hardening protocols and perimeter defense configurations to protect enterprise infrastructure assets.
              </p>
            </div>
          </FloatingContainer>
        </motion.div>
      </div>
      </WindowFrame>
    </div>
  );
}
