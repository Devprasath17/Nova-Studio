"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change or ESC press
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-surface-border py-3 shadow-2xl"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="NOVA Studio Homepage">
          <div className="flex items-center gap-1.5 font-mono text-xs tracking-widest text-zinc-400 group-hover:text-nova-cyan transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-nova-cyan animate-pulse" />
            <span className="font-bold text-white text-lg tracking-wider font-sans uppercase">
              NOVA<span className="text-nova-cyan">.</span>STUDIO
            </span>
          </div>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono uppercase bg-white/5 text-zinc-400 border border-white/10 rounded-full">
            EST. 2026
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-card/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-surface-border" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "px-4 py-1.5 text-xs font-mono tracking-wider uppercase rounded-full transition-all duration-200",
                  isActive
                    ? "bg-white text-black font-semibold shadow-md"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Items */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:8438849180"
            className="hidden xl:flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            aria-label="Direct Studio Phone Line"
          >
            <Phone className="w-3.5 h-3.5 text-nova-cyan" />
            <span>8438849180</span>
          </a>

          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider hover:bg-nova-cyan transition-all duration-300 shadow-lg shadow-white/5"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-zinc-300 hover:text-white bg-surface-card border border-surface-border rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-nova-cyan/50"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-background/95 backdrop-blur-2xl border-t border-surface-border z-40 p-6 flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            <span className="text-[10px] font-mono uppercase text-nova-cyan tracking-widest mb-2">
              // Navigation
            </span>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between p-3.5 rounded-xl text-sm font-mono tracking-wider uppercase transition-all",
                    isActive
                      ? "bg-white text-black font-bold"
                      : "text-zinc-300 hover:bg-surface-card hover:text-white"
                  )}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-4 pt-6 border-t border-surface-border">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Direct Studio Line:</span>
              <a href="tel:8438849180" className="text-white hover:text-nova-cyan">
                8438849180
              </a>
            </div>

            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 bg-nova-cyan text-black py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider hover:bg-cyan-300 transition-colors shadow-lg shadow-nova-cyan/20"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
