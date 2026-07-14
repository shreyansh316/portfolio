"use client";

import { useKonamiCode } from "@/hooks/useKonamiCode";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";

const ROOT_LOGS = [
  "[!] OVERRIDE DETECTED",
  "[!] INITIATING ROOT ACCESS PROTOCOL...",
  "Loading classified payload...",
  "Bypassing IAM constraints...",
  "Disabling perimeter firewalls... [OK]",
  "Establishing secure tunnel...",
  "Accessing deep storage sectors...",
  "Decrypted 4096-bit RSA key.",
  "ROOT SHELL ACTIVE."
];

export function RootShell() {
  const { success, setSuccess } = useKonamiCode();
  const [logs, setLogs] = useState<string[]>([]);
  const [showPrompt, setShowPrompt] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (success) {
      // Print logs rapidly
      let i = 0;
      setLogs([]);
      setShowPrompt(false);
      setOutput("");
      
      const interval = setInterval(() => {
        if (i < ROOT_LOGS.length) {
          setLogs(prev => [...prev, ROOT_LOGS[i]]);
          i++;
        } else {
          clearInterval(interval);
          setShowPrompt(true);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [success]);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      const cmd = input.trim().toLowerCase();
      if (cmd === "exit") {
        setSuccess(false);
      } else if (cmd === "sudo rm -rf /") {
        setOutput("Permission denied. Nice try.");
      } else if (cmd === "ls -la") {
        setOutput("total 42\ndrwxr-xr-x 2 root root 4096 .secret\n-rw------- 1 root root 1024 classified.pdf");
      } else {
        setOutput(`Command not recognized in root shell: ${cmd}`);
      }
      setInput("");
    }
  };

  return (
    <AnimatePresence>
      {success && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex flex-col p-8 font-mono overflow-hidden"
        >
          {/* Scanlines effect overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10" style={{ background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))", backgroundSize: "100% 2px, 3px 100%" }} />

          <div className="flex justify-between items-center mb-8 border-b border-red-500/30 pb-4 relative z-10">
            <div className="flex items-center gap-4 text-red-500">
              <ShieldAlert size={32} className="animate-pulse" />
              <h1 className="text-2xl font-bold tracking-widest uppercase">Root Access Granted</h1>
            </div>
            <button 
              onClick={() => setSuccess(false)}
              className="text-red-500/50 hover:text-red-500 transition-colors"
            >
              <X size={32} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col gap-2 text-red-500/80 text-lg relative z-10">
            {logs.map((log, idx) => (
              <div key={idx}>{log}</div>
            ))}
            
            {showPrompt && (
              <div className="mt-8 flex flex-col gap-4">
                <div className="text-white whitespace-pre-wrap">{output}</div>
                <div className="flex gap-4">
                  <span className="text-red-500 font-bold">root@shreyansh-os:~#</span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="flex-1 bg-transparent outline-none border-none text-white focus:ring-0 p-0 m-0"
                    autoFocus
                    spellCheck="false"
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
