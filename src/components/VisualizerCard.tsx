"use client";

import React, { useState } from "react";
import { Play, Pause, Activity, Radio, Cpu, Sparkles } from "lucide-react";

const INITIAL_BARS = [40, 75, 25, 90, 60, 45, 85, 30, 95, 70, 50, 80, 35, 65, 90];

export const VisualizerCard = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [mode, setMode] = useState<"spatial" | "harmonic" | "render">("harmonic");

  return (
    <div className="relative w-full rounded-2xl bg-surface-card border border-surface-border p-5 md:p-6 shadow-2xl overflow-hidden group hover:border-nova-cyan/40 transition-all duration-300">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-nova-cyan/10 rounded-full blur-3xl pointer-events-none group-hover:bg-nova-cyan/20 transition-all duration-300" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-nova-violet/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-surface-border pb-3.5 mb-4 text-[11px] font-mono tracking-wider text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-nova-cyan animate-pulse" />
          <span className="text-white font-semibold uppercase">MODAL | CREATIVE CONTROL</span>
        </div>
        <span className="text-zinc-500">// 0.02 BRAND & DIGITAL</span>
      </div>

      {/* Display Stage */}
      <div className="relative h-48 md:h-56 rounded-xl bg-background border border-white/5 p-4 flex flex-col justify-between overflow-hidden">
        {/* Top Controls Overlay */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {(["spatial", "harmonic", "render"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-2.5 py-1 text-[10px] font-mono uppercase rounded-md transition-all ${
                  mode === m
                    ? "bg-nova-cyan text-black font-bold shadow-sm"
                    : "bg-surface-card text-zinc-400 hover:text-white"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-nova-cyan bg-nova-cyan/10 px-2 py-0.5 rounded border border-nova-cyan/20">
            <Radio className="w-3 h-3 animate-spin" />
            <span>REALTIME</span>
          </div>
        </div>

        {/* Dynamic GPU-Accelerated Waveform Bars */}
        <div className="flex items-end justify-center gap-1.5 h-24 my-2 px-2">
          {INITIAL_BARS.map((height, i) => {
            const animationDelay = `${(i * 0.12).toFixed(2)}s`;
            const duration = `${(0.8 + (i % 5) * 0.15).toFixed(2)}s`;

            return (
              <div
                key={i}
                className="w-full rounded-t-sm transition-all duration-300 relative group/bar"
                style={{
                  height: `${height}%`,
                  background: `linear-gradient(to top, rgba(0,240,255,0.2), ${
                    i % 2 === 0 ? "#00f0ff" : "#a855f7"
                  })`,
                  animation: isPlaying
                    ? `audioWave ${duration} ease-in-out infinite alternate ${animationDelay}`
                    : "none",
                }}
              >
                <div className="opacity-0 group-hover/bar:opacity-100 absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] font-mono text-zinc-300 bg-black/90 px-1 rounded pointer-events-none">
                  {height}dB
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Metrics Inside Stage */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Activity className="w-3 h-3 text-nova-cyan" /> 48.1 kHz
            </span>
            <span className="flex items-center gap-1">
              <Cpu className="w-3 h-3 text-nova-violet" /> 64-BIT DSP
            </span>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 text-white hover:text-nova-cyan transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? "PAUSE" : "RESUME"}</span>
          </button>
        </div>
      </div>

      {/* Bottom Card Descriptor */}
      <div className="mt-4 flex items-center justify-between text-xs font-mono">
        <div>
          <span className="text-zinc-500 text-[10px] block">// SPECIALIST ENGINE</span>
          <span className="text-white font-semibold tracking-wide">Cresta Bi-harmonic Audio</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-nova-cyan group-hover:text-nova-cyan transition-colors">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
