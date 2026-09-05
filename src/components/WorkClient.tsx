"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { SectionReveal } from "@/components/SectionReveal";
import { cn } from "@/lib/utils";

const CATEGORIES = ["ALL", "SPATIAL", "WEB ENGINE", "BRAND", "3D COMPUTE"] as const;

export const WorkClient = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "SPATIAL") return p.category === "Spatial";
    if (activeCategory === "WEB ENGINE") return p.category === "Web Engine";
    if (activeCategory === "BRAND") return p.category === "Brand";
    if (activeCategory === "3D COMPUTE") return p.category === "3D Compute";
    return true;
  });

  return (
    <>
      {/* Category Filters */}
      <SectionReveal className="flex flex-wrap items-center gap-2 mb-12 bg-surface-card p-2 rounded-2xl border border-surface-border w-fit" duration={0.6} amount={0.2}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-xl transition-all",
              activeCategory === cat
                ? "bg-white text-black font-bold shadow-md"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            )}
          >
            {cat}
          </button>
        ))}
      </SectionReveal>

      {/* Projects Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <SectionReveal key={project.id} delay={idx * 0.08} duration={0.6} amount={0.2}>
            <ProjectCard
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          </SectionReveal>
        ))}
      </div>

      {/* Case Study Preview Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
