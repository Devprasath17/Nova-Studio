import React from "react";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionReveal } from "@/components/SectionReveal";
import { Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page Hero */}
        <SectionReveal className="max-w-3xl mb-16" duration={0.7} amount={0.2}>
          <div className="text-xs font-mono text-nova-cyan uppercase tracking-widest mb-3">
            // START A CONVERSATION
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight mb-6">
            Let's Make Something <span className="font-serif italic font-normal text-nova-cyan">Great.</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            Tell us a little about your project, timeline, and goals. We respond to every inquiry within 24 business hours.
          </p>
        </SectionReveal>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          {/* Left Studio Locations Column */}
          <SectionReveal className="lg:col-span-5 space-y-8" duration={0.7} amount={0.2}>
            <div className="p-8 rounded-3xl bg-surface-card border border-surface-border space-y-6">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                // STUDIO HEADQUARTERS
              </div>

              {/* Chennai Headquarters */}
              <div className="space-y-1 text-xs font-mono border-b border-surface-border pb-4">
                <span className="text-nova-cyan font-bold block">// CHENNAI, TAMIL NADU</span>
                <span className="text-white block">Chennai, Tamil Nadu</span>
                <span className="text-zinc-400 block">India</span>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3 pt-2">
                <a
                  href="mailto:studio@novastudio.design"
                  className="flex items-center gap-3 text-xs font-mono text-zinc-300 hover:text-nova-cyan transition-colors"
                >
                  <Mail className="w-4 h-4 text-nova-cyan" />
                  <span>studio@novastudio.design</span>
                </a>
                <a
                  href="tel:8438849180"
                  className="flex items-center gap-3 text-xs font-mono text-zinc-300 hover:text-nova-cyan transition-colors"
                >
                  <Phone className="w-4 h-4 text-nova-violet" />
                  <span>8438849180</span>
                </a>
              </div>
            </div>

            {/* Response Time Guarantee Box */}
            <div className="p-6 rounded-2xl bg-surface-card/50 border border-surface-border flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-nova-cyan/10 text-nova-cyan shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1 font-sans">
                  Fast Partner Response
                </h4>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Inquiries are routed directly to studio partners. Expect an initial feedback response within 24 hours.
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Right Main Contact Form */}
          <SectionReveal className="lg:col-span-7" delay={0.1} duration={0.7} amount={0.2}>
            <ContactForm />
          </SectionReveal>
        </div>

        {/* Partnership FAQ Accordion */}
        <SectionReveal className="max-w-4xl mx-auto mb-16" duration={0.7} amount={0.2}>
          <div className="text-center mb-12">
            <div className="text-xs font-mono text-nova-cyan uppercase tracking-widest mb-3">
              // FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-3xl font-bold font-sans text-white">
              Partnership FAQ
            </h2>
          </div>

          <FaqAccordion />
        </SectionReveal>
      </div>
    </div>
  );
}
