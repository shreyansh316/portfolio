"use client";

import { motion } from "framer-motion";

export function DirectionalSpotlight() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Top Left White Spotlight */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] mix-blend-screen"
      />
      
      {/* Bottom Right Sharp Red Spotlight */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] bg-red-600/10 rounded-full blur-[200px] mix-blend-screen"
      />
      
      {/* Center Depth Shadow (Vignette) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000000_100%)] opacity-80" />
    </div>
  );
}
