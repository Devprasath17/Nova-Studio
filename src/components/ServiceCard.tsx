"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Layout, Code, Palette, Cpu } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

const ICON_MAP = {
  Layout: Layout,
  Code: Code,
  Palette: Palette,
  Cpu: Cpu,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = ICON_MAP[service.iconName] || Layout;

  return (
    <div className="group relative rounded-2xl bg-surface-card border border-surface-border p-6 md:p-8 hover:border-nova-cyan/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-nova-cyan/5">
      {/* Background Accent Hover Light */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-nova-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Top Header Bar */}
        <div className="flex items-center justify-between mb-6 text-xs font-mono">
          <span className="text-zinc-500 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
            {service.categoryNumber}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-nova-cyan group-hover:text-nova-cyan transition-colors">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Service Title */}
        <div className="flex items-center gap-3 mb-3">
          <IconComponent className="w-5 h-5 text-nova-cyan" />
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-nova-cyan transition-colors">
            {service.title}
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-sm text-zinc-400 font-sans leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      {/* Tech Tags */}
      <div>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-400">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-background border border-white/5 group-hover:border-white/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-nova-cyan mt-6 pt-2 transition-colors uppercase tracking-wider"
        >
          <span>Explore Capabilities</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
