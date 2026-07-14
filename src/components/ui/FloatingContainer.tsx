"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  speed?: number;
}

export function FloatingContainer({
  children,
  className,
  delay = 0,
  speed = 4,
}: FloatingContainerProps) {
  return (
    <motion.div
      className={cn("floating-container relative overflow-hidden", className)}
      initial={{ y: 0 }}
      animate={{
        y: ["-2%", "2%", "-2%"],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {/* Subtle interior glow */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]" />
      {children}
    </motion.div>
  );
}
