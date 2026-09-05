"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, TrendingUp } from "lucide-react";
import { VisualizerCard } from "./VisualizerCard";
import { Button } from "./ui/Button";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-nova-cyan/10 via-nova-violet/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Index Pill / Sub-tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border w-fit mb-6 text-xs font-mono tracking-wider text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-nova-cyan animate-pulse" />
            <span>// 0.01 | TOP-TIER DIGITAL STUDIO</span>
            <span className="text-zinc-600">//</span>
            <span className="text-zinc-300">CHENNAI, TAMIL NADU</span>
          </div>

          {/* Editorial Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-sans font-bold text-white tracking-tight leading-[1.08] mb-6">
            We create digital experiences that{" "}
            <span className="font-serif italic font-normal text-nova-cyan underline decoration-nova-cyan/30 underline-offset-8">
              move
            </span>{" "}
            brands{" "}
            <span className="font-serif italic font-normal text-white">
              forward.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-sans font-light leading-relaxed max-w-2xl mb-8">
            Partnering with global pioneers to engineer category-defining brand identities, spatial interfaces, and interactive software that make ambitious brands impossible to ignore.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Link href="/contact">
              <Button variant="cyan" size="lg">
                Start a Project
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="secondary" size="lg">
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Social Proof / Stats Ticker */}
          <div className="pt-8 border-t border-surface-border/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-3 bg-surface-card/40 p-3 rounded-xl border border-surface-border/50">
              <div className="p-2 rounded-lg bg-nova-cyan/10 text-nova-cyan">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">// RECOGNITION</span>
                <span className="text-white font-semibold">24+ Awwwards & FWA Honors</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-surface-card/40 p-3 rounded-xl border border-surface-border/50">
              <div className="p-2 rounded-lg bg-nova-violet/10 text-nova-violet">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">// CLIENT IMPACT</span>
                <span className="text-white font-semibold">$1.2B+ In Value Created</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column High-Tech Visualizer Widget */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-5 flex justify-center"
        >
          <VisualizerCard />
        </motion.div>
      </div>
    </section>
  );
};
