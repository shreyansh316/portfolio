"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
  isVeronicaMode: boolean;
  toggleVeronicaMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isVeronicaMode, setIsVeronicaMode] = useState(false);

  useEffect(() => {
    // Modify CSS variables on the document element when Veronica mode is active
    if (isVeronicaMode) {
      document.documentElement.style.setProperty("--background", "#000000"); // Pitch black
      document.documentElement.style.setProperty("--obsidian", "#050505");
      document.documentElement.style.setProperty("--obsidian-light", "#0a0a0a");
      // Darker, longer shadows
      document.documentElement.classList.add("veronica-mode");
    } else {
      document.documentElement.style.setProperty("--background", "#09090b");
      document.documentElement.style.setProperty("--obsidian", "#18181b");
      document.documentElement.style.setProperty("--obsidian-light", "#27272a");
      document.documentElement.classList.remove("veronica-mode");
    }
  }, [isVeronicaMode]);

  const toggleVeronicaMode = () => {
    setIsVeronicaMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isVeronicaMode, toggleVeronicaMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
