"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface WindowFrameProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function WindowFrame({ title, children, className = "", id }: WindowFrameProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const isHovered = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const hoverSpring = useSpring(isHovered, { stiffness: 400, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  const scale = useTransform(hoverSpring, [0, 1], [1, 1.02]);
  const shadowOpacity = useTransform(hoverSpring, [0, 1], [0.5, 1]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
    isHovered.set(1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    isHovered.set(0);
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-7xl mx-auto"
      style={{ perspective: 1200 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX, 
          rotateY, 
          scale,
          transformStyle: "preserve-3d",
          boxShadow: useTransform(shadowOpacity, (v) => `0 40px 100px rgba(0,0,0,${v})`)
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={`relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-xl ${className}`}
      >
      {/* OS Window Header */}
      <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2 shrink-0 backdrop-blur-md relative">
        <div className="flex gap-2 z-10">
          <div className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer shadow-inner" />
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer shadow-inner" />
          <div className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer shadow-inner" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-xs font-semibold tracking-wider text-silver-dim uppercase">{title}</span>
        </div>
      </div>

      {/* Window Content */}
      <div className="relative flex-1 p-8 md:p-12">
        {children}
      </div>
      </motion.div>
    </motion.section>
  );
}
