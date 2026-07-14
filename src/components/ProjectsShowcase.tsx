"use client";

import { ProjectCard } from "./ui/ProjectCard";
import { WindowFrame } from "./ui/WindowFrame";

const projects = [
  {
    title: "ShikshaSetu AI System",
    description: "SIH National Level Participant. An NLP platform simplifying complex government policy data into actionable dashboards. Deployed scalable architectures using Python and Streamlit to democratize access to critical documentation.",
    techStack: ["Python", "Streamlit", "NLP", "Data Engineering"],
    githubUrl: "#",
  },
  {
    title: "Satellite Pollution Engine",
    description: "2nd Place Vibe Coding Event. Real-time environmental tracker parsing geo-located AQI and climate vectors via satellite APIs. Engineered robust data pipelines to visualize multi-dimensional environmental threats instantly.",
    techStack: ["Python", "Satellite APIs", "Data Viz", "Geospatial Data"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "AlumNET Ecosystem",
    description: "Architected a secure, decentralized network tailored for educational institutions. Engineered complex multi-role authentication flowcharts and managed state across a high-availability PostgreSQL backend.",
    techStack: ["PostgreSQL", "Next.js", "Authentication", "System Design"],
    liveUrl: "#",
  }
];

export function ProjectsShowcase() {
  return (
    <div className="w-full px-4 mb-32">
      <WindowFrame title="Systems: Projects" id="architecture">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Intelligent Systems
          </h2>
          <p className="text-lg text-silver-dim max-w-2xl">
            Advanced AI/NLP applications and high-availability enterprise ecosystems.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            delay={index * 0.2}
            className={index % 2 === 1 ? "md:mt-24" : ""}
          />
        ))}
      </div>
      </WindowFrame>
    </div>
  );
}
