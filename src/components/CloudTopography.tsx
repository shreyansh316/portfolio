"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Database, Cloud, Settings, Network } from "lucide-react";
import { SideDrawer } from "./ui/SideDrawer";
import { WindowFrame } from "./ui/WindowFrame";

const nodes = [
  { id: "ec2", label: "AWS EC2 Instances", icon: Server, color: "text-orange-400", bg: "bg-orange-400/20", border: "border-orange-400/30", description: "Configured scalable virtual servers for high-availability web hosting deployments.", x: "10%", y: "20%" },
  { id: "s3", label: "Amazon S3", icon: Cloud, color: "text-blue-400", bg: "bg-blue-400/20", border: "border-blue-400/30", description: "Implemented secure object storage for backups and static assets.", x: "70%", y: "15%" },
  { id: "rds", label: "RDS (MySQL)", icon: Database, color: "text-purple-400", bg: "bg-purple-400/20", border: "border-purple-400/30", description: "Managed relational databases with automated snapshots and failover.", x: "80%", y: "70%" },
  { id: "panels", label: "Control Panels", icon: Settings, color: "text-green-400", bg: "bg-green-400/20", border: "border-green-400/30", description: "Administrated via aaPanel, cPanel, and Cockpit for streamlined ops.", x: "20%", y: "80%" },
  { id: "vpc", label: "VPC Network", icon: Network, color: "text-accent-light", bg: "bg-accent/20", border: "border-accent/30", description: "Architected secure Virtual Private Clouds with strict firewall rules.", x: "45%", y: "45%" },
];

const TITLES = [
  "Orbital Infrastructure",
  "Spatial DevOps Matrix",
  "Neural Cloud Topography",
  "Quantum DevOps Layer",
  "cloud.OS",
  "system_float: [cloud, devops]"
];

export function CloudTopography() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 mb-32">
      <WindowFrame title="Infrastructure: Cloud & DevOps" id="cloud">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="h-[80px] md:h-[60px] flex items-center justify-center overflow-hidden mb-4">
            <AnimatePresence mode="wait">
              <motion.h2
                key={titleIndex}
                className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-center flex flex-wrap justify-center"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } },
                  exit: { opacity: 0, y: -20, filter: "blur(10px)", transition: { duration: 0.3 } }
                }}
              >
                {TITLES[titleIndex].split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: "blur(10px)", color: "#3b82f6" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)", color: "inherit", transition: { type: "spring", stiffness: 200, damping: 10 } }
                    }}
                    className="inline-block drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h2>
            </AnimatePresence>
          </div>
          <div className="w-24 h-[1px] bg-accent-light mb-8" />
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-foreground hover:text-white transition-colors text-sm font-semibold tracking-wide backdrop-blur-md"
          >
            View Architecture Report
          </button>
        </div>

        <div className="relative w-full aspect-square md:aspect-[21/9] bento-card rounded-2xl flex flex-col justify-center overflow-hidden">
          {/* Abstract Data Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <line x1="15%" y1="25%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="75%" y1="20%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="85%" y1="75%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="25%" y1="85%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Animated data packets */}
          <circle r="2" fill="#3b82f6">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 15 25 L 50 50" />
          </circle>
        </svg>

        {/* Nodes */}
        {nodes.map((node) => {
          const Icon = node.icon;
          const isDimmed = hoveredNode !== null && hoveredNode !== node.id;
          
          return (
            <motion.div
              key={node.id}
              className="absolute"
              style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              animate={{ opacity: isDimmed ? 0.3 : 1, scale: hoveredNode === node.id ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative group cursor-pointer flex flex-col items-center gap-3">
                {/* Glowing Node */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center border backdrop-blur-md ${node.bg} ${node.border} shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all`}>
                  <Icon className={`${node.color}`} size={24} />
                </div>
                <span className="text-xs font-mono text-silver tracking-wider whitespace-nowrap bg-black/50 px-2 py-1 rounded">
                  {node.label}
                </span>

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredNode === node.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-2 w-64 p-4 bento-card rounded-xl z-20 pointer-events-none"
                    >
                      <p className="text-sm font-medium text-silver-dim leading-relaxed">{node.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="R-CAT System Administration Report"
      >
        <div className="space-y-6">
          <p>
            During my internship at R-CAT, I was responsible for architecting and administrating enterprise-level server environments.
          </p>
          <h3>Active Directory Domain Services (AD DS)</h3>
          <p>
            Deployed and managed centralized authentication protocols. Structured Organizational Units (OUs) to apply strict Group Policy Objects (GPOs) for role-based access control.
          </p>
          <h3>DNS & DHCP Architecture</h3>
          <p>
            Configured highly available DNS zones for internal name resolution and implemented redundant DHCP scopes to ensure seamless client connectivity across multiple subnets.
          </p>
          <h3>Linux Hardening</h3>
          <p>
            Enforced strict firewall configurations utilizing <code>firewalld</code> and <code>iptables</code>. Audited system logs and executed vulnerability remediation across CentOS and Ubuntu server nodes.
          </p>
        </div>
      </SideDrawer>
      </WindowFrame>
    </div>
  );
}
