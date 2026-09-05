"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, Eye, ShieldCheck, Users } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const VALUES = [
  {
    title: "Curious",
    number: "01",
    icon: Compass,
    description: "Constantly questioning assumptions, testing new technical frontiers, and refusing standard boilerplate templates.",
  },
  {
    title: "Clear",
    number: "02",
    icon: Eye,
    description: "Eliminating fluff; direct, transparent communication and purpose-driven architectural clarity.",
  },
  {
    title: "Crafted",
    number: "03",
    icon: ShieldCheck,
    description: "Meticulous attention to typography, micro-interactions, accessibility, and sub-millisecond execution.",
  },
  {
    title: "Collaborative",
    number: "04",
    icon: Users,
    description: "Deeply integrated partnerships with founders, engineering teams, and ambitious brand stewards.",
  },
];

export const AboutPreview = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 border-t border-surface-border relative bg-surface-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <SectionReveal className="lg:col-span-6">
            <div className="text-xs font-mono text-nova-cyan uppercase tracking-widest mb-3">
              // 0.04 // ABOUT NOVA STUDIO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight mb-6">
              Small Studio. <br />
              <span className="font-serif italic font-normal text-nova-cyan">Big Ambition.</span>
            </h2>
            <p className="text-base md:text-lg text-zinc-300 font-sans leading-relaxed mb-6">
              NOVA Studio is an independent digital design studio working at the intersection of strategy, creativity, and technology.
            </p>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed mb-8">
              We operate with zero agency bloat—pairing elite designers and engineers directly with category-defining founders to build digital products, websites, brand identities, and spatial experiences.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider hover:bg-nova-cyan transition-colors shadow-lg"
            >
              <span>Our Philosophy</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </SectionReveal>

          {/* Right Cards Showcase */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <SectionReveal key={val.title} delay={idx * 0.08} duration={0.45}>
                  <div className="p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-white/20 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-white/5 text-nova-cyan group-hover:bg-nova-cyan/10 transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-zinc-500">{val.number}</span>
                    </div>
                    <h3 className="text-lg font-bold font-sans text-white mb-2 group-hover:text-nova-cyan transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
