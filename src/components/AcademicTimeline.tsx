"use client";

import { motion } from "framer-motion";
import { WindowFrame } from "./ui/WindowFrame";

const timelineData = [
  {
    title: "B.Tech in Computer Science Engineering",
    institution: "Jaypee University of Engineering and Technology (JUET), Guna",
    date: "2025–2029",
    status: "Current",
  },
  {
    title: "Higher Secondary Education",
    institution: "Maheshwari Public School, Jaipur",
    date: "Foundational",
    status: "Completed",
  },
  {
    title: "Primary Education",
    institution: "Arunodaya Shikshak Sansthan, Nawa City",
    date: "Foundational",
    status: "Completed",
  }
];

export function AcademicTimeline() {
  return (
    <div className="w-full px-4 mb-32 max-w-5xl mx-auto">
      <WindowFrame title="System: Academic Log" id="academics">
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Academic Progression
          </h2>
          <div className="w-24 h-[1px] bg-accent-light" />
        </div>

      <div className="relative">
        {/* The central line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />

        <div className="flex flex-col gap-12 md:gap-24">
          {timelineData.map((item, index) => (
            <div 
              key={item.institution} 
              className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              
              {/* Glowing Marker */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-light shadow-[0_0_20px_rgba(59,130,246,0.8)] border-2 border-black z-10"
              />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} flex flex-col ${index % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bento-card p-6 rounded-xl hover:-translate-y-1 transition-transform w-full"
                >
                  <div className="flex items-center gap-3 mb-2 justify-start md:justify-normal">
                    <span className="text-xs font-mono text-accent-light px-2 py-1 rounded bg-accent/10 border border-accent/20 uppercase tracking-widest">
                      {item.status}
                    </span>
                    <span className="text-xs text-silver-dim font-mono">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1 tracking-tight">{item.title}</h3>
                  <p className="text-silver text-sm">{item.institution}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </WindowFrame>
    </div>
  );
}
