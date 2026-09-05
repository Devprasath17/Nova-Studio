"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectGraphic } from "./ProjectGraphic";

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  if (project.featured) {
    return (
      <div
        onClick={() => onSelect?.(project)}
        className="group relative rounded-2xl bg-surface-card border border-surface-border overflow-hidden hover:border-nova-cyan/50 transition-all duration-500 cursor-pointer grid grid-cols-1 lg:grid-cols-12 mb-8 shadow-2xl"
      >
        {/* Visual Showcase (7 Columns) */}
        <div className="lg:col-span-7 min-h-[300px] md:min-h-[380px] relative overflow-hidden bg-background">
          <ProjectGraphic
            slug={project.slug}
            title={project.title}
            category={project.category}
            accentColor={project.accentColor}
          />
        </div>

        {/* Info Column (5 Columns) */}
        <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-surface-card">
          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-4 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-nova-cyan/10 text-nova-cyan border border-nova-cyan/20 font-semibold uppercase">
                FEATURED / {project.year}
              </span>
              <span className="text-zinc-500">{project.client}</span>
            </div>

            {/* Category Tag */}
            <span className="text-xs font-mono text-zinc-400 block mb-2">
              // {project.categoryLabel}
            </span>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight mb-4 group-hover:text-nova-cyan transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-zinc-400 font-sans leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          <div>
            {/* Stats Pills */}
            {project.stats && (
              <div className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-xl bg-background border border-white/5 text-[10px] font-mono">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <span className="text-zinc-500 block uppercase">{stat.label}</span>
                    <span className="text-white font-bold text-xs">{stat.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tags & Action Link */}
            <div className="flex items-center justify-between pt-4 border-t border-surface-border">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="inline-flex items-center gap-1 text-xs font-mono text-white group-hover:text-nova-cyan transition-colors uppercase">
                <span>Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Grid Card
  return (
    <div
      onClick={() => onSelect?.(project)}
      className="group relative rounded-2xl bg-surface-card border border-surface-border overflow-hidden hover:border-nova-cyan/40 transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-xl"
    >
      {/* Visual Thumbnail */}
      <div className="h-48 md:h-56 w-full relative overflow-hidden bg-background">
        <ProjectGraphic
          slug={project.slug}
          title={project.title}
          category={project.category}
          accentColor={project.accentColor}
        />
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
            <span>// {project.categoryLabel}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-xl font-bold font-sans text-white tracking-tight mb-2 group-hover:text-nova-cyan transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-zinc-400 font-sans line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Footer Link & Tags */}
        <div className="pt-4 border-t border-surface-border flex items-center justify-between text-[10px] font-mono text-zinc-400">
          <div className="flex items-center gap-1">
            {project.tags.slice(0, 2).map((t) => (
              <span key={t} className="bg-white/5 px-2 py-0.5 rounded">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1 text-white group-hover:text-nova-cyan transition-colors uppercase">
            <span>Explore</span>
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
