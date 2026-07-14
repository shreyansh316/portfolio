"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LOGS = [
  "BIOS Date 10/24/25 14:32:11 Ver 09.00.04",
  "CPU: GenuineIntel(R) Core(TM) i9-13900K @ 3.00GHz",
  "Memory: 65536 MB OK",
  "Loading Linux 6.2.0-generic...",
  "Loading initial ramdisk...",
  "[    0.000000] Linux version 6.2.0-generic (buildd@lcy02-amd64-071)",
  "[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz-6.2.0 root=UUID=x-y-z ro quiet splash",
  "[    0.042311] x86/cpu: SGX disabled by BIOS.",
  "[    0.185293] ACPI: Core revision 20221020",
  "[    0.294191] PCI: Using configuration type 1 for base access",
  "[    1.034522] random: crng init done",
  "[  OK  ] Mounted /boot/efi.",
  "[  OK  ] Started Network Manager.",
  "[  OK  ] Started ShikshaSetu AI Daemon.",
  "[  OK  ] Reached target System Initialization.",
  "Mounting root filesystem...",
  "Starting system message bus...",
  "INIT: Entering runlevel 5",
  "Welcome to Shreyansh OS Enterprise Edition.",
  "Initializing GUI payload..."
];

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    // Check if we've already booted this session
    const hasBooted = sessionStorage.getItem("hasBooted");
    
    if (hasBooted) {
      setIsBooting(false);
      onComplete();
      return;
    }

    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < BOOT_LOGS.length) {
        setLogs(prev => [...prev, BOOT_LOGS[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsBooting(false);
          sessionStorage.setItem("hasBooted", "true");
          onComplete();
        }, 800);
      }
    }, 80); // Rapid printing

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isBooting) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="boot-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        className="fixed inset-0 z-[9999] bg-black flex flex-col justify-end p-6 font-mono text-xs md:text-sm text-[#a1a1aa] overflow-hidden"
      >
        <div className="flex flex-col gap-1 w-full max-w-4xl">
          {logs.map((log, i) => (
            <div key={i} className="flex gap-4">
              {log.startsWith("[") && log.includes("]") ? (
                <>
                  <span className={log.includes("OK") ? "text-green-500" : "text-[#a1a1aa]"}>
                    {log.split("]")[0] + "]"}
                  </span>
                  <span className="text-[#d4d4d8]">{log.split("]").slice(1).join("]")}</span>
                </>
              ) : (
                <span className="text-[#d4d4d8]">{log}</span>
              )}
            </div>
          ))}
          <div className="w-2 h-4 bg-white/70 animate-pulse mt-1" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
