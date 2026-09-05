import React from "react";
import { WorkClient } from "@/components/WorkClient";
import { CTA } from "@/components/CTA";
import { SectionReveal } from "@/components/SectionReveal";

export default function WorkPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        {/* Page Header */}
        <SectionReveal className="max-w-3xl mb-12" duration={0.7} amount={0.2}>
          <div className="text-xs font-mono text-nova-cyan uppercase tracking-widest mb-3">
            // ARCHIVE // 2025 - 2026
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight mb-4">
            Our <span className="font-serif italic font-normal text-nova-cyan">Work</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            Selected projects across digital products, brands, spatial interfaces, and high-performance web platforms engineered for visionary clients.
          </p>
        </SectionReveal>

        <WorkClient />
      </div>

      <CTA />
    </div>
  );
}
