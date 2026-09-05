"use client";

import React from "react";
import { SERVICES } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { SectionReveal } from "./SectionReveal";

export const Services = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono text-nova-cyan uppercase tracking-widest mb-3">
              // 0.02 | CAPABILITIES // 2026 // EDITION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">
              Precision Craft & Digital Engineering
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-400 max-w-md font-sans leading-relaxed">
            Dual-vector studio combining strategy, design, and software engineering to engineer market-defining digital products.
          </p>
        </SectionReveal>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <SectionReveal key={service.id} delay={index * 0.08} duration={0.45}>
              <ServiceCard service={service} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
