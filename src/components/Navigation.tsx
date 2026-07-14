"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Architecture", href: "#architecture" },
  { name: "Logic", href: "#logic" },
  { name: "Systems", href: "#systems" },
];

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[50] flex justify-center mt-6 px-4"
    >
      <nav className="glass rounded-full px-8 py-4 flex items-center gap-8 shadow-2xl shadow-black/50 border border-white/10">
        <Link
          href="/"
          className="text-white font-mono text-sm tracking-widest uppercase hover:text-accent-light transition-colors"
        >
          [Portfolio]
        </Link>
        <div className="w-[1px] h-4 bg-white/20" />
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "text-silver hover:text-white transition-colors text-sm font-medium",
                  "relative group"
                )}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-accent-light scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
