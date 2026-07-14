"use client";

import { motion } from "framer-motion";
import { Terminal, Server, Shield, Network } from "lucide-react";
import { WindowFrame } from "./ui/WindowFrame";

export function InfrastructureMatrix() {
  return (
    <div className="w-full px-4 mb-32">
      <WindowFrame title="Terminal: Infrastructure" id="systems">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Infrastructure & Cloud Matrix
          </h2>
          <div className="w-24 h-[1px] bg-accent-light" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bento-card rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >


        {/* Terminal Body */}
        <div className="p-8 font-mono text-sm leading-relaxed flex flex-col gap-8 relative overflow-hidden">
          {/* Subtle grid background for the terminal */}
          <div className="absolute inset-0 pointer-events-none opacity-5"
               style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          <div className="relative z-10 flex flex-col gap-8">
            <div className="group bg-[#0a0a0a] p-6 rounded-xl border border-white/5 hover:border-white/20 hover:shadow-2xl hover:bg-[#111111] transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-3 text-white mb-4">
                <Server size={20} className="text-accent-light" />
                <span className="text-lg font-bold tracking-widest uppercase text-white">Linux System Administration</span>
              </div>
              <p className="text-silver-dim pl-8 max-w-3xl leading-relaxed font-medium">
                <span className="text-accent-light/50 font-bold mr-2">ROOT_ACCESS &gt;</span> Configured and maintained highly available enterprise environments utilizing <span className="text-white">Red Hat Enterprise Linux (RHEL)</span> and <span className="text-white">Ubuntu Server</span>. Implemented strict firewall rules (firewalld, iptables) and automated load balancing for 99.9% uptime.
              </p>
            </div>

            <div className="group bg-[#0a0a0a] p-6 rounded-xl border border-white/5 hover:border-white/20 hover:shadow-2xl hover:bg-[#111111] transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-3 text-white mb-4">
                <Network size={20} className="text-accent-light" />
                <span className="text-lg font-bold tracking-widest uppercase text-white">AWS Cloud Management</span>
              </div>
              <p className="text-silver-dim pl-8 max-w-3xl leading-relaxed font-medium">
                <span className="text-accent-light/50 font-bold mr-2">CLOUD_SYNC &gt;</span> Architected scalable cloud pipelines using <span className="text-white">AWS EC2</span> and <span className="text-white">S3</span>. Configured Virtual Private Clouds (VPC), managed IAM policies for least-privilege access, and deployed auto-scaling groups for dynamic traffic handling.
              </p>
            </div>

            <div className="group bg-[#0a0a0a] p-6 rounded-xl border border-white/5 hover:border-white/20 hover:shadow-2xl hover:bg-[#111111] transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-3 text-white mb-4">
                <Shield size={20} className="text-accent-light" />
                <span className="text-lg font-bold tracking-widest uppercase text-white">Enterprise Networking & Security</span>
              </div>
              <p className="text-silver-dim pl-8 max-w-3xl leading-relaxed font-medium">
                <span className="text-accent-light/50 font-bold mr-2">SECURE_NET &gt;</span> Executed comprehensive vulnerability assessments and established automated, encrypted backup configurations (cron jobs + secure offsite storage) to ensure critical data integrity and zero-loss disaster recovery.
              </p>
            </div>
          </div>
          
          {/* Blinking cursor */}
          <div className="relative z-10 flex items-center gap-2 mt-4 text-foreground/50">
            <span className="text-accent-light">shreyansh@sys:~#</span>
            <motion.div 
              animate={{ opacity: [1, 0] }} 
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="w-2 h-4 bg-foreground/70"
            />
          </div>
        </div>
      </motion.div>
      </WindowFrame>
    </div>
  );
}
