"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "!<>-_\\\\/[]{}—=+*^?#________";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextScramble({ text, className, delay = 0 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(true);

  useEffect(() => {
    let frame = 0;
    const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
    
    for (let i = 0; i < text.length; i++) {
      const from = text[i] || "";
      const to = text[i] || "";
      const start = Math.floor(Math.random() * 40) + delay * 60; // Frame to start
      const end = start + Math.floor(Math.random() * 40); // Frame to end
      queue.push({ from, to, start, end });
    }

    let animationFrameId: number;

    const update = () => {
      let output = "";
      let complete = 0;
      
      for (let i = 0; i < queue.length; i++) {
        const { from, to, start, end, char } = queue[i];
        
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            queue[i].char = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          output += `<span class="text-accent opacity-70">${queue[i].char}</span>`;
        } else {
          output += from;
        }
      }
      
      setDisplayText(output);
      
      if (complete === queue.length) {
        setIsScrambling(false);
      } else {
        animationFrameId = requestAnimationFrame(update);
        frame++;
      }
    };

    animationFrameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrameId);
  }, [text, delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
}
