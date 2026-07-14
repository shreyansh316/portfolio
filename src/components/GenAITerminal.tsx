"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, Bot, Sparkles } from "lucide-react";
import { FloatingContainer } from "./ui/FloatingContainer";
import { WindowFrame } from "./ui/WindowFrame";

export function GenAITerminal() {
  const [isTyping, setIsTyping] = useState(false);
  const [output, setOutput] = useState("");
  const [hasRun, setHasRun] = useState(false);

  const fullResponse = `> CREDENTIAL VERIFICATION INITIALIZED...
> [1/2] Validating: Oracle Cloud Infrastructure 2025 Certified Generative AI Professional... VERIFIED.
> [2/2] Validating: Google Prompting Essentials... VERIFIED.

SYSTEM ARCHITECTURE OUTPUT:
"My approach to Generative AI focuses on enterprise-grade orchestration. By combining Oracle's robust Gen-AI infrastructure with advanced prompting methodologies, I architect systems that deliver deterministic, scalable, and secure AI outputs. This includes RAG pipeline optimization and strict guardrails for LLM hallucinations."`;

  const handleGenerate = () => {
    if (isTyping || hasRun) return;
    setIsTyping(true);
    setHasRun(true);
    setOutput("");

    let i = 0;
    const intervalId = setInterval(() => {
      setOutput(fullResponse.slice(0, i + 1));
      i++;
      if (i >= fullResponse.length) {
        clearInterval(intervalId);
        setIsTyping(false);
      }
    }, 20); // Typing speed
  };

  return (
    <div className="w-full px-4 mb-32 max-w-5xl mx-auto">
      <WindowFrame title="Terminal: AI Architect" id="ai">
        <div className="mb-12 flex flex-col items-center text-center">
          <Sparkles className="text-accent-light mb-6" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            LLM & Gen-AI Orchestration
          </h2>
          <div className="w-24 h-[1px] bg-accent-light" />
        </div>

        <FloatingContainer speed={3} className="w-full bento-card rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/10">

        {/* Output Area */}
        <div className="h-[300px] p-6 font-mono text-sm overflow-y-auto flex flex-col gap-4">
          <div className="flex gap-4">
            <Bot className="text-accent shrink-0 mt-1" size={18} />
            <div className="text-silver-dim">
              System standing by. Waiting for prompt execution to verify generative capabilities.
            </div>
          </div>
          
          {output && (
            <div className="flex gap-4">
              <Terminal className="text-purple-400 shrink-0 mt-1" size={18} />
              <div className="text-white whitespace-pre-wrap leading-relaxed">
                {output}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-2 h-4 bg-white/70 ml-1 translate-y-1"
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-black/40 border-t border-white/10">
          <div className="relative flex items-center bg-obsidian border border-white/10 rounded overflow-hidden">
            <div className="pl-4 pr-2 text-silver font-mono text-sm opacity-50">
              Query credentials & approach...
            </div>
            <div className="flex-1" />
            <button
              onClick={handleGenerate}
              disabled={isTyping || hasRun}
              className="p-3 bg-accent/20 hover:bg-accent/40 disabled:opacity-50 disabled:hover:bg-accent/20 text-accent-light transition-colors border-l border-white/10 flex items-center gap-2 font-mono text-xs tracking-wider"
            >
              <Send size={14} />
              EXECUTE PROMPT
            </button>
          </div>
        </div>
        </FloatingContainer>
      </WindowFrame>
    </div>
  );
}
