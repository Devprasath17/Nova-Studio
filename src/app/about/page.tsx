import React from "react";
import { Compass, Eye, ShieldCheck, Users, Target, Zap, Layers } from "lucide-react";
import { CTA } from "@/components/CTA";
import { SectionReveal } from "@/components/SectionReveal";

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

const PHILOSOPHY_PILLARS = [
  {
    icon: Target,
    title: "Partner-Level Execution",
    description: "You work directly with senior designers and lead software architects. No account managers or junior delegation layers.",
  },
  {
    icon: Zap,
    title: "Sub-Millisecond Obsession",
    description: "Every web page is performance-tuned with clean Next.js architecture, optimized assets, and responsive layout integrity.",
  },
  {
    icon: Layers,
    title: "Category Definition",
    description: "We don't follow generic web design trends. We build custom visual systems and software interfaces designed to make brands unforgettable.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        {/* Page Hero */}
        <SectionReveal className="max-w-3xl mb-16" duration={0.7} amount={0.2}>
          <div className="text-xs font-mono text-nova-cyan uppercase tracking-widest mb-3">
            // MANIFESTO & STUDIO CULTURE
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight mb-6">
            We Design With <span className="font-serif italic font-normal text-nova-cyan">Purpose.</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            NOVA Studio is an independent digital design and software studio working at the intersection of strategy, creativity, and technology.
          </p>
        </SectionReveal>

        {/* Manifesto Content Grid */}
        <SectionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center" duration={0.7} amount={0.2}>
          <div className="lg:col-span-6 space-y-6 text-zinc-300 font-sans leading-relaxed text-sm md:text-base">
            <p className="text-xl text-white font-medium">
              We believe the modern web has become cluttered with generic AI templates, heavy slow frame-rates, and uninspired interfaces.
            </p>
            <p>
              NOVA Studio was founded on a simple principle: combine editorial design discipline with cutting-edge front-end engineering to build web software that moves people.
            </p>
            <p>
              We deliberately restrict our capacity to only 2–3 major brand client engagements per quarter. This ensures every project receives dedicated senior engineering bandwidth, custom visual assets, and uncompromised code quality.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-surface-card border border-surface-border">
            <div className="p-4 text-center border-b sm:border-b-0 sm:border-r border-surface-border">
              <span className="text-3xl md:text-4xl font-bold font-mono text-nova-cyan block">2–3</span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase">Engagements / Quarter</span>
            </div>
            <div className="p-4 text-center border-b sm:border-b-0 sm:border-r border-surface-border">
              <span className="text-3xl md:text-4xl font-bold font-mono text-nova-violet block">100%</span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase">Senior Staffed</span>
            </div>
            <div className="p-4 text-center">
              <span className="text-3xl md:text-4xl font-bold font-mono text-emerald-400 block">SF + TYO</span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase">Global Studios</span>
            </div>
          </div>
        </SectionReveal>

        {/* Core Values Section */}
        <div className="mb-24">
          <SectionReveal className="mb-10" duration={0.6} amount={0.2}>
            <div className="text-xs font-mono text-nova-cyan uppercase tracking-widest mb-3">
              // OUR GUIDING PRINCIPLES
            </div>
            <h2 className="text-3xl font-bold font-sans text-white">
              Four Core Values
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <SectionReveal key={val.title} delay={idx * 0.08} duration={0.6} amount={0.2}>
                  <div className="p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-nova-cyan/50 transition-all duration-300 group flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-2.5 rounded-xl bg-white/5 text-nova-cyan group-hover:bg-nova-cyan/10 transition-colors">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono text-zinc-500">{val.number}</span>
                      </div>

                      <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-nova-cyan transition-colors">
                        {val.title}
                      </h3>

                      <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>

        {/* Philosophy Pillars */}
        <div className="mb-20">
          <SectionReveal className="mb-10" duration={0.6} amount={0.2}>
            <div className="text-xs font-mono text-nova-cyan uppercase tracking-widest mb-3">
              // STUDIO APPROACH
            </div>
            <h2 className="text-3xl font-bold font-sans text-white">
              How We Differ
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PHILOSOPHY_PILLARS.map((pil, idx) => {
              const IconComp = pil.icon;
              return (
                <SectionReveal key={pil.title} delay={idx * 0.1} duration={0.6} amount={0.2}>
                  <div className="p-8 rounded-2xl bg-surface-card/60 border border-surface-border h-full">
                    <div className="p-3 rounded-xl bg-white/5 text-nova-cyan w-fit mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-sans text-white mb-3">
                      {pil.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                      {pil.description}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
}
