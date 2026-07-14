"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { TextScramble } from "./ui/TextScramble";
import { Briefcase, GitBranch } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { FloatingParticles } from "./ui/FloatingParticles";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 overflow-hidden">
      
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/induction.mp4" type="video/mp4" />
      </video>

      {/* Dark Glass Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 backdrop-blur-md z-0" />

      <div className="relative z-0 w-full h-full absolute inset-0">
        <FloatingParticles />
      </div>
      
      {/* Subtle Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none opacity-50 mix-blend-screen" />

      <motion.div style={{ y, opacity }} className="max-w-5xl w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          <span className="text-xs font-bold text-foreground tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
            [ ENV: VERONICA ]
          </span>
        </motion.div>

        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-foreground mb-4 leading-[1.1]">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-foreground to-silver-dim pb-2">
            Systems Infrastructure Engineer
          </span>
          <span className="block text-accent-light text-2xl md:text-4xl lg:text-5xl mt-2 font-medium tracking-tight">
            <TextScramble text="& AI/NLP Developer" delay={0.4} />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-silver-dim font-mono text-sm md:text-base tracking-widest uppercase mb-8 border-y border-white/10 py-3 w-full max-w-2xl"
        >
          Shreyansh Choolet | Competitive Programmer
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-xl text-silver max-w-2xl font-light leading-relaxed mb-12"
        >
          Linux Infrastructure & Cloud Specialist | Innovator of AI-Driven Security Solutions | On a Journey to B.Tech in Computer Science.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex gap-6 items-center"
        >
          <Link
            href="https://www.linkedin.com/in/shreyansh-choolet-20a228372"
            target="_blank"
            className="group flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <Briefcase className="text-silver group-hover:text-white transition-colors" size={24} />
          </Link>
          <Link
            href="https://github.com/shreyansh316"
            target="_blank"
            className="group flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
          >
            <GitBranch className="text-silver-dim group-hover:text-foreground transition-colors" size={24} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-silver font-mono uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-silver-dim to-transparent" />
      </motion.div>
    </section>
  );
}
