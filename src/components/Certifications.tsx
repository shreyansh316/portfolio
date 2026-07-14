"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { WindowFrame } from "./ui/WindowFrame";

const certs = [
  "Google AI Essentials",
  "IBM Linux & Private Cloud Administration",
  "Red Hat Fundamentals",
  "OPSWAT Critical Infrastructure Protection",
];

export function Certifications() {
  return (
    <div className="w-full px-4 mb-32 max-w-5xl mx-auto">
      <WindowFrame title="Security: Endorsements" id="certifications">
        <div className="mb-16 flex flex-col items-center">
          <ShieldCheck className="text-accent-light mb-6" size={48} />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Security & Systems Endorsements
          </h2>
          <div className="w-24 h-[1px] bg-accent-light" />
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-16">
        {certs.map((cert, index) => (
          <motion.div
            key={cert}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bento-card rounded-xl flex items-center justify-center gap-4 group cursor-default"
          >
            <CheckCircle2 className="text-accent-light group-hover:scale-110 transition-transform" size={20} />
            <span className="text-silver-dim group-hover:text-foreground font-bold transition-colors tracking-wide">
              {cert}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="https://www.skills.google/public_profiles/7a9e1f71-88c3-452c-a360-b2f1f0ef55e8"
            target="_blank"
            className="relative group inline-flex px-8 py-4 bg-obsidian-light text-white font-medium rounded-full overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-light/20 group-hover:opacity-100 opacity-50 transition-opacity" />
            <div className="absolute -inset-2 bg-accent-glow blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2 tracking-wider text-sm uppercase">
              View Verified Google Credentials
            </span>
          </a>
        </motion.div>
      </div>
      </WindowFrame>
    </div>
  );
}
