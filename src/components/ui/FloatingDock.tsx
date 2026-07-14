"use client";

import { motion } from "framer-motion";
import { Home, Code, Database, Server, User, Trophy, Briefcase, GitBranch } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Code, label: "Open Source", href: "#open-source" },
  { icon: Database, label: "Infrastructure", href: "#infrastructure" },
  { icon: Server, label: "Cloud", href: "#cloud" },
];

const socialItems = [
  { icon: Briefcase, label: "LinkedIn", href: "https://www.linkedin.com/in/shreyansh-choolet-20a228372" },
  { icon: Trophy, label: "CodeChef", href: "https://www.codechef.com/users/goofy_cape_08" },
  { icon: GitBranch, label: "GitHub", href: "https://github.com/shreyansh316" },
];

export function FloatingDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
    >
      <nav className="flex items-center gap-4 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        {navItems.map((item, idx) => (
          <Link href={item.href} key={item.label}>
            <motion.div
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{
                scale: hoveredIndex === idx ? 1.2 : hoveredIndex === idx - 1 || hoveredIndex === idx + 1 ? 1.1 : 1,
                y: hoveredIndex === idx ? -8 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <item.icon size={22} className="text-silver group-hover:text-foreground transition-colors" />
              {/* Tooltip */}
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10 text-xs font-semibold text-foreground whitespace-nowrap"
                >
                  {item.label}
                </motion.div>
              )}
            </motion.div>
          </Link>
        ))}

        <div className="w-[1px] h-8 bg-white/20 mx-2" />

        {socialItems.map((item, idx) => {
          const absoluteIdx = idx + navItems.length;
          return (
            <Link href={item.href} target="_blank" key={item.label}>
              <motion.div
                onHoverStart={() => setHoveredIndex(absoluteIdx)}
                onHoverEnd={() => setHoveredIndex(null)}
                animate={{
                  scale: hoveredIndex === absoluteIdx ? 1.2 : hoveredIndex === absoluteIdx - 1 || hoveredIndex === absoluteIdx + 1 ? 1.1 : 1,
                  y: hoveredIndex === absoluteIdx ? -8 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <item.icon size={22} className="text-silver-dim group-hover:text-foreground transition-colors" />
                {/* Tooltip */}
                {hoveredIndex === absoluteIdx && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10 text-xs font-semibold text-foreground whitespace-nowrap"
                  >
                    {item.label}
                  </motion.div>
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
}
