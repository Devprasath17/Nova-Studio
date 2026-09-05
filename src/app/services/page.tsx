import React from "react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { CheckCircle2, Layout, Code, Palette, Cpu } from "lucide-react";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/SectionReveal";

const ICON_MAP = {
  Layout: Layout,
  Code: Code,
  Palette: Palette,
  Cpu: Cpu,
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        {/* Hero Header */}
        <SectionReveal className="max-w-3xl mb-16" duration={0.7} amount={0.2}>
          <div className="text-xs font-mono text-nova-cyan uppercase tracking-widest mb-3">
            // CAPABILITIES & SERVICES
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight mb-6">
            What We <span className="font-serif italic font-normal text-nova-cyan">Do</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            From first idea to final interaction, we combine strategy, design, and technology to build category-defining digital products and web platforms.
          </p>
        </SectionReveal>

        {/* Detailed Services Breakdown */}
        <div className="space-y-16">
          {SERVICES.map((service, idx) => {
            const IconComp = ICON_MAP[service.iconName] || Layout;
            return (
              <SectionReveal
                key={service.id}
                delay={idx * 0.08}
                duration={0.7}
                amount={0.2}
              >
                <div
                  id={service.id}
                  className="p-8 md:p-12 rounded-3xl bg-surface-card border border-surface-border relative overflow-hidden shadow-2xl"
                >
                  {/* Background Number */}
                  <div className="absolute top-4 right-6 text-7xl md:text-9xl font-mono font-bold text-white/[0.03] pointer-events-none select-none">
                    {service.number}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Service Header Info (5 cols) */}
                    <div className="lg:col-span-5">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-nova-cyan mb-4">
                        <IconComp className="w-4 h-4" />
                        <span>{service.categoryNumber}</span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold font-sans text-white mb-4">
                        {service.title}
                      </h2>

                      <p className="text-sm md:text-base text-zinc-300 font-sans leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <Link href="/contact">
                        <Button variant="cyan" size="sm">
                          Inquire for {service.title}
                        </Button>
                      </Link>
                    </div>

                    {/* Capabilities & Deliverables (7 cols) */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 lg:pt-0 lg:border-l lg:border-surface-border lg:pl-8">
                      {/* Capabilities Tags */}
                      <div>
                        <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
                          // CORE CAPABILITIES
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.capabilities.map((cap) => (
                            <span
                              key={cap}
                              className="px-3 py-1.5 rounded-lg bg-background border border-white/10 text-xs font-mono text-zinc-200"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* What We Deliver */}
                      <div>
                        <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
                          // WHAT WE DELIVER
                        </h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs font-sans text-zinc-300"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-nova-cyan shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>

      <CTA />
    </div>
  );
}
