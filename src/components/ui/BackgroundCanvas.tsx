"use client";

import { motion } from "framer-motion";

export function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      {/* Mesh Gradient Blobs */}
      <motion.div
        animate={{
          x: ["-10%", "20%", "-10%"],
          y: ["-10%", "20%", "-10%"],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px] opacity-60"
      />
      <motion.div
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["20%", "-10%", "20%"],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[0%] w-[40vw] h-[40vw] rounded-full bg-violet-600/20 blur-[120px] opacity-60"
      />
      <motion.div
        animate={{
          x: ["0%", "30%", "0%"],
          y: ["30%", "0%", "30%"],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-600/10 blur-[120px] opacity-60"
      />
    </div>
  );
}
