"use client";

import React, { useEffect } from "react";
import { X, CheckCircle } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectGraphic } from "./ProjectGraphic";
import { Button } from "./ui/Button";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
    >
      {/* Backdrop overlay listener */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-surface-card border border-surface-border rounded-2xl overflow-y-auto shadow-2xl flex flex-col justify-between z-10">
        {/* Close Button Header */}
        <div className="sticky top-0 z-20 bg-surface-card/95 backdrop-blur-md px-6 py-4 border-b border-surface-border flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-nova-cyan">
            <span className="w-2 h-2 rounded-full bg-nova-cyan animate-pulse" />
            <span>CASE STUDY // {project.id.toUpperCase()}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-nova-cyan/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Visual Canvas Banner */}
          <div className="h-64 md:h-80 w-full rounded-xl overflow-hidden border border-white/5 bg-background">
            <ProjectGraphic
              slug={project.slug}
              title={project.title}
              category={project.category}
              accentColor={project.accentColor}
            />
          </div>

          {/* Title & Metadata */}
          <div>
            <div className="text-xs font-mono text-nova-cyan/90 font-medium mb-3 tracking-wide break-words md:whitespace-nowrap">
              {project.client} • {project.year} • {project.categoryLabel}
            </div>

            <h2 id="modal-project-title" className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight mb-4">
              {project.title}
            </h2>

            <p className="text-base text-zinc-300 font-sans leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Impact Stats Grid */}
          {project.stats && (
            <div>
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
                // PROJECT METRICS & IMPACT
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.stats.map((st, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-background border border-surface-border text-center"
                  >
                    <span className="text-2xl font-bold font-mono text-nova-cyan block">
                      {st.value}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 uppercase">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack & Tags */}
          <div>
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
              // ARCHITECTURE & CAPABILITIES
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background border border-white/10 text-xs font-mono text-zinc-300"
                >
                  <CheckCircle className="w-3 h-3 text-nova-cyan" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-background/50 border-t border-surface-border flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
            NOVA STUDIO // CONFIDENTIAL CASE STUDY
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <Button variant="secondary" size="sm" onClick={onClose} icon={false}>
              Close Preview
            </Button>
            <a href="/contact">
              <Button variant="cyan" size="sm">
                Request Similar System
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
