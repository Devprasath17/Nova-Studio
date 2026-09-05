"use client";

import React from "react";

interface ProjectGraphicProps {
  slug: string;
  title: string;
  category: string;
  accentColor?: string;
}

export const ProjectGraphic: React.FC<ProjectGraphicProps> = ({
  slug,
  title,
  category,
  accentColor = "#00f0ff",
}) => {
  switch (slug) {
    case "orion-spatial-os":
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-6 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent blur-xl" />
          <div className="flex justify-between items-center z-10 text-[10px] font-mono text-cyan-400">
            <span>[ FEATURED / 2026 ]</span>
            <span>// SPATIAL COMPUTING</span>
          </div>

          {/* Interactive AR Eye & Hand Gesture Visual */}
          <div className="relative z-10 flex items-center justify-center my-6">
            <div className="w-44 h-44 rounded-full border border-cyan-500/30 flex items-center justify-center relative animate-pulse-slow">
              <div className="w-32 h-32 rounded-full border border-cyan-400/50 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-cyan-400/10 border border-cyan-300 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                </div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-[9px] font-mono text-cyan-300 bg-black/80 px-2 py-0.5 rounded border border-cyan-500/30">
                EYE TRACKING: ACTIVE
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 text-[9px] font-mono text-purple-400 bg-black/80 px-2 py-0.5 rounded border border-purple-500/30">
                GESTURE MESH: 99.8%
              </div>
            </div>
          </div>

          <div className="z-10 flex justify-between items-end">
            <div>
              <span className="text-[10px] font-mono text-zinc-400 block">// VISION OS ARCHITECTURE</span>
              <span className="text-sm font-bold text-white uppercase font-sans">Orion Spatial OS</span>
            </div>
            <span className="text-xs font-mono text-cyan-400">FPS: 120.0</span>
          </div>
        </div>
      );

    case "krona-protocol":
      return (
        <div className="relative w-full h-full bg-gradient-to-tr from-purple-950/80 via-zinc-950 to-black p-5 flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between items-center text-[9px] font-mono text-purple-400">
            <span>// 01 ACTION PLATFORM</span>
            <span>2025 // MONO INC.</span>
          </div>

          {/* High-density grid chart representation */}
          <div className="my-4 space-y-2 relative z-10">
            <div className="h-10 w-full bg-purple-900/20 border border-purple-500/20 rounded-lg p-2 flex items-center justify-between text-xs font-mono">
              <span className="text-purple-300">KRONA/USD</span>
              <span className="text-emerald-400">+24.8%</span>
            </div>
            <div className="flex items-end gap-1 h-16 pt-2">
              {[40, 65, 30, 80, 55, 90, 70, 85, 40, 95, 60].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="text-[10px] font-mono text-zinc-400">
            LIQUIDITY ENGINE v4.2
          </div>
        </div>
      );

    case "aura-brutalist-haute":
      return (
        <div className="relative w-full h-full bg-zinc-950 p-5 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-pink-900/30 via-transparent to-transparent" />
          <div className="flex justify-between items-center text-[9px] font-mono text-pink-400">
            <span>// 02 LUXURY COMMERCE</span>
            <span>FW26 EDITORIAL</span>
          </div>

          <div className="my-auto text-center z-10">
            <span className="text-3xl font-serif italic text-white tracking-widest block">
              A U R A
            </span>
            <span className="text-[10px] font-mono text-pink-300/80 uppercase tracking-widest mt-1 block">
              HAUTE COUTURE DIGITAL SHOWROOM
            </span>
          </div>

          <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500 border-t border-zinc-800 pt-2">
            <span>PARIS // TOKYO</span>
            <span>CATALOGUE 01</span>
          </div>
        </div>
      );

    case "nexus-sound-synthesis":
      return (
        <div className="relative w-full h-full bg-black p-5 flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between items-center text-[9px] font-mono text-emerald-400">
            <span>// 03 AUDIO SYNTHESIS</span>
            <span>AUDIAL LAB</span>
          </div>

          {/* Audio Node Graph Graphic */}
          <div className="relative h-20 my-auto flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 200 60">
              <path
                d="M 10 30 Q 50 5, 100 30 T 190 30"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
              />
              <path
                d="M 10 30 Q 50 55, 100 30 T 190 30"
                fill="none"
                stroke="#059669"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
            </svg>
          </div>

          <div className="flex justify-between items-center text-[9px] font-mono text-zinc-400">
            <span>HARMONIC SPECTRUM</span>
            <span>60 FPS</span>
          </div>
        </div>
      );

    case "hyperion-3d-compute":
      return (
        <div className="relative w-full h-full bg-gradient-to-b from-amber-950/40 via-zinc-950 to-black p-5 flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between items-center text-[9px] font-mono text-amber-400">
            <span>// 04 ENGINE COMPUTING</span>
            <span>HYPERION GPU</span>
          </div>

          {/* 3D Orb ring geometry */}
          <div className="my-auto flex items-center justify-center relative">
            <div className="w-24 h-24 rounded-full border-2 border-amber-500/40 flex items-center justify-center animate-spin-slow">
              <div className="w-16 h-16 rounded-full border border-amber-400/80 flex items-center justify-center transform rotate-45">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-300" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[9px] font-mono text-zinc-400">
            <span>RAY TRACE ENGINE</span>
            <span>4K RENDER</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative w-full h-full bg-zinc-900 p-5 flex flex-col justify-between">
          <div className="text-[9px] font-mono text-sky-400">// BRAND EXPERIENCE</div>
          <div className="my-auto font-serif italic text-2xl text-white text-center">FORMA</div>
          <div className="text-[9px] font-mono text-zinc-500">ARCHITECTURAL WEB</div>
        </div>
      );
  }
};
