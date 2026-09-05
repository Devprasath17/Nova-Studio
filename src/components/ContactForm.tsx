"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  "UI/UX & Spatial",
  "Creative Web",
  "Brand Identity",
  "Digital Architecture & AI",
];

const BUDGET_OPTIONS = ["$25k - $50k", "$50k - $100k", "$100k+"];

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [selectedService, setSelectedService] = useState(SERVICE_OPTIONS[0]);
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_OPTIONS[1]);
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!message.trim()) {
      setError("Please include a short message describing your project.");
      return;
    }

    setLoading(true);

    // Simulate frontend submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="w-full rounded-2xl bg-surface-card border border-surface-border p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-nova-cyan/5 rounded-full blur-3xl pointer-events-none" />

      {submitted ? (
        <div className="py-12 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-nova-cyan/10 border border-nova-cyan/30 flex items-center justify-center text-nova-cyan mb-2">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-sans text-white">
            Inquiry Received
          </h3>
          <p className="text-sm font-sans text-zinc-300 max-w-md">
            Thanks! Your inquiry has been received. A partner at NOVA Studio will review your details and respond within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setName("");
              setEmail("");
              setCompany("");
              setMessage("");
            }}
            className="mt-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs font-mono text-red-400">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-mono uppercase text-zinc-400 mb-2 tracking-wider">
                YOUR NAME *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Elena Rostova"
                className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border text-sm font-sans text-white placeholder-zinc-600 focus:outline-none focus:border-nova-cyan transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-zinc-400 mb-2 tracking-wider">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="elena@company.com"
                className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border text-sm font-sans text-white placeholder-zinc-600 focus:outline-none focus:border-nova-cyan transition-colors"
                required
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="block text-[10px] font-mono uppercase text-zinc-400 mb-2 tracking-wider">
              COMPANY / ORGANISATION (OPTIONAL)
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Apex Dynamics Corp"
              className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border text-sm font-sans text-white placeholder-zinc-600 focus:outline-none focus:border-nova-cyan transition-colors"
            />
          </div>

          {/* Service Interest Selector */}
          <div>
            <label className="block text-[10px] font-mono uppercase text-zinc-400 mb-2 tracking-wider">
              SERVICE INTEREST
            </label>
            <div className="flex flex-wrap gap-2">
              {SERVICE_OPTIONS.map((srv) => (
                <button
                  type="button"
                  key={srv}
                  onClick={() => setSelectedService(srv)}
                  className={cn(
                    "px-3.5 py-2 rounded-xl text-xs font-mono transition-all border",
                    selectedService === srv
                      ? "bg-nova-cyan text-black font-bold border-nova-cyan shadow-sm"
                      : "bg-background text-zinc-400 border-surface-border hover:text-white"
                  )}
                >
                  {srv}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-[10px] font-mono uppercase text-zinc-400 mb-2 tracking-wider">
              PROJECT BUDGET ESTIMATE
            </label>
            <div className="grid grid-cols-3 gap-2">
              {BUDGET_OPTIONS.map((bg) => (
                <button
                  type="button"
                  key={bg}
                  onClick={() => setSelectedBudget(bg)}
                  className={cn(
                    "py-2.5 rounded-xl text-xs font-mono text-center transition-all border",
                    selectedBudget === bg
                      ? "bg-nova-violet text-white font-bold border-nova-violet shadow-sm"
                      : "bg-background text-zinc-400 border-surface-border hover:text-white"
                  )}
                >
                  {bg}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-[10px] font-mono uppercase text-zinc-400 mb-2 tracking-wider">
              PROJECT DETAILS & OBJECTIVES *
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Outline your timeline, goals, and technical requirements..."
              className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border text-sm font-sans text-white placeholder-zinc-600 focus:outline-none focus:border-nova-cyan transition-colors resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-white text-black hover:bg-nova-cyan transition-all duration-300 text-xs font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-white/5"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>PROCESSING INQUIRY...</span>
              </>
            ) : (
              <>
                <span>SUBMIT PROJECT INQUIRY</span>
                <ArrowUpRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
