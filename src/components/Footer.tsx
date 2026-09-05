"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  const [sfTime, setSfTime] = useState<string>("");
  const [tokyoTime, setTokyoTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSfTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
      setTokyoTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Tokyo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-background border-t border-surface-border pt-20 pb-10 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-4">
                <span className="font-bold text-2xl tracking-wider text-white font-sans uppercase">
                  NOVA<span className="text-nova-cyan">.</span>STUDIO
                </span>
              </Link>
              <p className="text-sm font-sans text-zinc-400 max-w-sm leading-relaxed mb-6">
                Digital experiences for ambitious brands. Combining strategy, design, branding, and high-performance software engineering.
              </p>
            </div>

            {/* Live Studio Clocks */}
            <div className="flex items-center gap-6 text-xs font-mono text-zinc-400 p-3 rounded-xl bg-surface-card/60 border border-surface-border w-fit">
              <div>
                <span className="text-[10px] text-zinc-500 block">SAN FRANCISCO</span>
                <span className="text-white font-semibold">{sfTime || "09:00 AM"} PST</span>
              </div>
              <div className="h-6 w-px bg-surface-border" />
              <div>
                <span className="text-[10px] text-zinc-500 block">TOKYO</span>
                <span className="text-white font-semibold">{tokyoTime || "02:00 AM"} JST</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
              // EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-zinc-300">
              <li>
                <Link href="/" className="hover:text-nova-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-nova-cyan transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-nova-cyan transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-nova-cyan transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-nova-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Matrix */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
              // SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-zinc-300">
              <li>UI/UX & Spatial Systems</li>
              <li>Creative Web & Engineering</li>
              <li>Brand Identity & Direction</li>
              <li>Digital Architecture & AI</li>
            </ul>
          </div>

          {/* Socials & Compliance */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
              // CONNECT
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-mono text-zinc-300">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-nova-cyan transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-nova-cyan transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-nova-cyan transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
                <span>Behance</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-nova-cyan transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Large Editorial Watermark Text matching Stitch AI */}
        <div className="my-10 select-none pointer-events-none opacity-[0.04] overflow-hidden text-center">
          <span className="text-[12vw] font-serif font-extrabold tracking-widest text-white leading-none whitespace-nowrap">
            NOVA STUDIO
          </span>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-4">
          <span>© 2026 NOVA Studio. All rights reserved.</span>
          <span>CRAFTED WITH PRECISION & PASSION // NEXT.JS 15</span>
        </div>
      </div>
    </footer>
  );
};
