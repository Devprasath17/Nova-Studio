"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { SectionReveal } from "./SectionReveal";

export const CTA = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 border-t border-surface-border relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info Column */}
        <SectionReveal className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <div className="text-xs font-mono text-nova-cyan uppercase tracking-widest mb-3">
              // 0.06 // PARTNERSHIP STUDIO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight mb-6">
              Ready to build something{" "}
              <span className="font-serif italic font-normal text-nova-cyan">
                extraordinary?
              </span>
            </h2>
            <p className="text-base text-zinc-400 font-sans leading-relaxed mb-8">
              We accept only 2–3 new engagements per quarter to ensure absolute partner-level commitment, sub-millisecond execution, and exceptional results.
            </p>
          </div>

          {/* Direct Studio Contacts Box */}
          <div className="p-6 rounded-2xl bg-surface-card border border-surface-border space-y-4">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
              // DIRECT STUDIO CHANNELS
            </div>

            <a
              href="mailto:studio@novastudio.design"
              className="flex items-center gap-3 text-sm font-mono text-zinc-300 hover:text-nova-cyan transition-colors"
            >
              <div className="p-2 rounded-lg bg-white/5 text-nova-cyan">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 block">STUDIO INQUIRIES</span>
                <span>studio@novastudio.design</span>
              </div>
            </a>

            <a
              href="tel:+15550192831"
              className="flex items-center gap-3 text-sm font-mono text-zinc-300 hover:text-nova-cyan transition-colors"
            >
              <div className="p-2 rounded-lg bg-white/5 text-nova-violet">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 block">DIRECT TELEPHONE</span>
                <span>+1 (555) 019-2831</span>
              </div>
            </a>

            <div className="flex items-center gap-3 text-sm font-mono text-zinc-300">
              <div className="p-2 rounded-lg bg-white/5 text-emerald-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 block">PHYSICAL STUDIOS</span>
                <span>San Francisco // Tokyo // Online</span>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Right Interactive Form Column */}
        <SectionReveal className="lg:col-span-7" delay={0.1}>
          <ContactForm />
        </SectionReveal>
      </div>
    </section>
  );
};
