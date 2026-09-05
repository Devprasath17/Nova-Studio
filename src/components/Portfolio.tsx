"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { SectionReveal } from "./SectionReveal";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["ALL", "SPATIAL", "WEB ENGINE", "BRAND", "3D COMPUTE"] as const;

export const Portfolio = () => {
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

  const featuredProject = filteredProjects.find((p) => p.featured) || filteredProjects[0];
  const gridProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header Bar */}
        <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono text-nova-cyan uppercase tracking-widest mb-3">
              // 0.03 // SELECTED WORKS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">
              Selected Work
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-surface-card/80 p-1.5 rounded-full border border-surface-border">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 text-[11px] font-mono tracking-wider uppercase rounded-full transition-all duration-200",
                  activeCategory === cat
                    ? "bg-white text-black font-bold shadow-md"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Featured Top Card */}
        {featuredProject && (
          <SectionReveal duration={0.5}>
            <ProjectCard
              project={featuredProject}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          </SectionReveal>
        )}

        {/* Sub-Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridProjects.map((project, idx) => (
            <SectionReveal key={project.id} delay={idx * 0.08} duration={0.45}>
              <ProjectCard
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            </SectionReveal>
          ))}
        </div>

        {/* Bottom CTA to Full Portfolio */}
        <SectionReveal className="mt-16 text-center" delay={0.1}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-surface-card border border-surface-border hover:border-nova-cyan text-white hover:text-nova-cyan px-8 py-4 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 shadow-xl"
          >
            <span>Explore All 6 Case Studies</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </SectionReveal>
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
