"use client";

import { useEffect, useState } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

export function useKonamiCode() {
  const [success, setSuccess] = useState(false);
  const [sequence, setSequence] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setSequence((prev) => {
        const newSequence = [...prev, e.key];
        
        // Only keep the last N keys
        if (newSequence.length > KONAMI_CODE.length) {
          newSequence.shift();
        }

        // Check if matches
        if (newSequence.join(",") === KONAMI_CODE.join(",")) {
          setSuccess(true);
        }

        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return { success, setSuccess };
}
