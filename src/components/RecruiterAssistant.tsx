"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, X, Bot, User, Sparkles } from "lucide-react";

export function RecruiterAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "Hello. I am the ShikshaSetu Assistant Engine. How can I help you analyze Shreyansh's profile?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const prompts = [
    { label: "Summarize Cloud Experience", response: "Shreyansh has architected highly available LAMP stacks on RHEL, configured strict IPTables, and engineered scalable AWS pipelines using EC2, S3, and secure VPCs. He possesses the IBM Linux & Private Cloud Administration certification." },
    { label: "Detail SIH Hackathon Role", response: "For the Smart India Hackathon (SIH), Shreyansh served as a core backend architect for 'ShikshaSetu'. He designed an NLP-driven platform to simplify complex government policy data using Python, Streamlit, and advanced data engineering logic." }
  ];

  const handlePromptClick = (promptLabel: string, responseText: string) => {
    if (isTyping) return;
    
    setMessages(prev => [...prev, { role: "user", content: promptLabel }]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { role: "ai", content: "" }]);
      let i = 0;
      
      const interval = setInterval(() => {
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = responseText.slice(0, i + 1);
          return newMessages;
        });
        i++;
        if (i >= responseText.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 30);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-accent hover:bg-accent-light shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center justify-center text-white transition-colors ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
      >
        <Cpu size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[100] w-80 sm:w-96 bg-obsidian border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="h-14 bg-obsidian-light border-b border-white/10 flex items-center justify-between px-4">
              <div className="flex items-center gap-2 text-white">
                <Sparkles size={18} className="text-accent" />
                <span className="font-medium tracking-wide">Recruiter Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-silver hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat History */}
            <div className="flex-1 h-80 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar bg-[#050505]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-white/10" : "bg-accent/20"}`}>
                    {msg.role === "user" ? <User size={14} className="text-white" /> : <Bot size={14} className="text-accent-light" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed max-w-[80%] ${msg.role === "user" ? "bg-white/10 text-white rounded-tr-sm" : "bg-obsidian-light border border-white/5 text-silver rounded-tl-sm"}`}>
                    {msg.content}
                    {msg.role === "ai" && isTyping && idx === messages.length - 1 && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="inline-block w-1.5 h-3 bg-accent-light ml-1 align-middle"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Prompt Buttons */}
            <div className="p-4 bg-obsidian-light border-t border-white/10 flex flex-col gap-2">
              <span className="text-xs text-silver-dim font-mono tracking-wider mb-1 uppercase">Pre-set Queries:</span>
              {prompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePromptClick(prompt.label, prompt.response)}
                  disabled={isTyping}
                  className="w-full text-left px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm text-silver hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {prompt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
