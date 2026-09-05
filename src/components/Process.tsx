"use client";

import React from "react";
import { Search, Compass, PenTool, Rocket } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    description: "We understand the challenge, target audience, technical constraints, and strategic market opportunity.",
    deliverable: "Strategic Brief & Audit",
  },
  {
    number: "02",
    title: "Define",
    icon: Compass,
    description: "We turn insights into a clear creative concept, information architecture, and technical blueprint.",
    deliverable: "Tech Spec & Wireframes",
  },
  {
    number: "03",
    title: "Design",
    icon: PenTool,
    description: "We create thoughtful visual systems, high-fidelity UI/UX layouts, motion prototypes, and spatial assets.",
    deliverable: "Interactive Prototypes",
  },
  {
    number: "04",
    title: "Deliver",
    icon: Rocket,
    description: "We build, test, optimize, and launch production-grade digital experiences designed to outperform competition.",
    deliverable: "Next.js Build & Launch",
  },
];

export const Process = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto">
        <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono text-nova-cyan uppercase tracking-widest mb-3">
              // 0.05 // METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">
              How We Work
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-400 max-w-md font-sans leading-relaxed">
            A disciplined 4-stage process refined across enterprise products and boutique brand launches.
          </p>
        </SectionReveal>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <SectionReveal key={step.number} delay={idx * 0.08} duration={0.45}>
                <div className="group relative rounded-2xl bg-surface-card border border-surface-border p-6 flex flex-col justify-between hover:border-nova-cyan/50 transition-all duration-300 shadow-xl h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6 text-xs font-mono">
                      <span className="text-2xl font-bold font-mono text-nova-cyan">
                        {step.number}
                      </span>
                      <div className="p-2 rounded-lg bg-white/5 text-zinc-400 group-hover:text-white group-hover:bg-nova-cyan/10 transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-nova-cyan transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-surface-border flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>OUTCOME:</span>
                    <span className="text-white font-semibold">{step.deliverable}</span>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
