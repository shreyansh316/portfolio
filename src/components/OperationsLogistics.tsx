"use client";

import { FloatingContainer } from "./ui/FloatingContainer";
import { Truck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { WindowFrame } from "./ui/WindowFrame";

export function OperationsLogistics() {
  return (
    <div className="w-full px-4 mb-32">
      <WindowFrame title="Management: Operations" id="operations">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Operations & Logistics
          </h2>
          <p className="text-lg text-silver-dim max-w-2xl">
            Leadership, Business Acumen, and Logistical Execution.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bento-card p-8 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded bg-accent/20 flex items-center justify-center border border-accent/30">
                <Truck className="text-accent-light" size={24} />
              </div>
            <h3 className="text-2xl font-bold text-foreground tracking-tight">Business Management & Logistics</h3>
          </div>
          
          <p className="text-silver-dim font-medium leading-relaxed flex-grow">
            Orchestrated the ongoing management of a commercial decorative lighting business. Handled end-to-end supply chain logistics, navigated complex tax rate calculations for brass light shipments, and fostered robust B2B client relations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bento-card p-8 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                <Users className="text-purple-400" size={24} />
              </div>
            <h3 className="text-2xl font-bold text-foreground tracking-tight">Athletic League Coordination</h3>
          </div>
          
          <p className="text-silver-dim font-medium leading-relaxed flex-grow">
            Directed the logistical execution of a campus-based Volleyball Bidding League. Managed complex team rosters, oversaw event branding, and coordinated high-stakes tournament events, demonstrating high-level organizational leadership.
          </p>
        </motion.div>
      </div>
      </WindowFrame>
    </div>
  );
}
