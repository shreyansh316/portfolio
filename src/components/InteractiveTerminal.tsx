"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function InteractiveTerminal() {
  const [history, setHistory] = useState<{ command: string; output: string }[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keep terminal scrolled to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      let output = "";
      const cmd = input.trim().toLowerCase();

      if (cmd === "whoami") {
        output = "shreyansh_choolet - sys_admin";
      } else if (cmd === "cat skills.txt") {
        output = "[AWS] [RHEL] [Python] [NLP] [PostgreSQL] [aaPanel]";
      } else if (cmd === "status") {
        output = `UPTIME: 142 days, 03:14:12\nLOAD AVERAGE: 0.14, 0.08, 0.05\nMEMORY: 16GB / 64GB\nNETWORK: All interfaces UP\nSYSTEM: RHEL 9.2 (Stable)`;
      } else if (cmd === "clear") {
        setHistory([]);
        setInput("");
        return;
      } else if (cmd === "help") {
        output = "Available commands: whoami, cat skills.txt, status, clear, help";
      } else {
        output = `bash: ${cmd}: command not found`;
      }

      setHistory(prev => [...prev, { command: input, output }]);
      setInput("");
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
      dragElastic={0.1}
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      className="absolute bottom-10 left-10 w-96 h-64 bento-card rounded-2xl flex flex-col z-[80] cursor-move hidden lg:flex shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
      style={{ touchAction: "none" }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Mac/Linux Header */}
      <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 shrink-0 backdrop-blur-md">
        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" />
        <div className="flex-1 flex justify-center text-silver-dim text-xs font-mono tracking-wider">
          <Terminal size={12} className="mr-2 inline" /> shreyansh@dev-env:~
        </div>
      </div>

      {/* Terminal Body */}
      <div ref={scrollRef} className="flex-1 bg-transparent p-4 font-mono text-sm text-silver overflow-y-auto cursor-text">
        <div className="mb-4 text-silver-dim">
          Welcome to Spatial UI Terminal environment.<br/>
          Type <span className="text-foreground">help</span> for a list of commands.
        </div>
        
        {history.map((item, i) => (
          <div key={i} className="mb-2">
            <div className="flex gap-2 text-foreground">
              <span className="text-accent-light">shreyansh@dev:~$</span>
              <span>{item.command}</span>
            </div>
            <div className="whitespace-pre-wrap text-silver mt-1 font-medium">
              {item.output}
            </div>
          </div>
        ))}
        
        <div className="flex gap-2 text-foreground mt-2">
          <span className="text-accent-light">shreyansh@dev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent outline-none border-none text-white focus:ring-0 p-0 m-0 leading-none"
            spellCheck="false"
            autoComplete="off"
            autoFocus
          />
        </div>
      </div>
    </motion.div>
  );
}
