"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { ReactNode } from "react";
import { FloatingContainer } from "./FloatingContainer";
import { cn } from "@/lib/utils";
import { ExternalLink, Code } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  delay = 0,
  className,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const mouseMaskX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), { stiffness: 200, damping: 20 });
  const mouseMaskY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), { stiffness: 200, damping: 20 });
  const glowMaskImage = useMotionTemplate`radial-gradient(circle at ${mouseMaskX}% ${mouseMaskY}%, rgba(255,255,255,0.1), transparent 50%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("w-full perspective-1000", className)}
    >
      <FloatingContainer className="h-full p-12 flex flex-col justify-between gap-6 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
          style={{ backgroundImage: glowMaskImage, opacity: isHovered ? 1 : 0 }}
        />
        
        <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
          <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">{title}</h3>
          <p className="text-silver leading-relaxed text-sm">{description}</p>
        </div>

        <div style={{ transform: "translateZ(20px)" }} className="flex flex-col gap-6 mt-auto relative z-10">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono text-accent-light bg-accent-glow rounded border border-accent/30"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 border-t border-white/5 pt-4">
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-white transition-colors flex items-center gap-2 text-sm group"
              >
                <Code size={16} className="group-hover:scale-110 transition-transform" />
                <span>Source</span>
              </Link>
            )}
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-white transition-colors flex items-center gap-2 text-sm group ml-auto"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </FloatingContainer>
    </motion.div>
  );
}
