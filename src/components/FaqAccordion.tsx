"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is your typical project timeline?",
    answer: "Most engagements range from 4 to 12 weeks depending on scope, visual complexity, and technical integrations. We provide a detailed milestone timeline prior to kick-off.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Yes. We partner with both funded early-stage startups looking to establish market authority and enterprise companies launching category-defining digital products.",
  },
  {
    question: "What technology stack do you specialize in?",
    answer: "Our core stack is Next.js 15, TypeScript, Tailwind CSS, Framer Motion, WebGL 3D canvas, and Node/Python cloud backend integrations.",
  },
  {
    question: "How do you handle project maintenance & post-launch support?",
    answer: "Every engagement includes 30 days of complimentary post-launch support, performance monitoring, and hands-on team onboarding.",
  },
];

export const FaqAccordion = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {FAQS.map((faq, idx) => (
        <div
          key={idx}
          className="rounded-2xl bg-surface-card border border-surface-border overflow-hidden"
        >
          <button
            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            className="w-full p-6 text-left flex items-center justify-between font-sans text-base font-semibold text-white hover:text-nova-cyan transition-colors"
          >
            <span>{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-zinc-400 transition-transform duration-200 ${
                openFaq === idx ? "rotate-180 text-nova-cyan" : ""
              }`}
            />
          </button>
          {openFaq === idx && (
            <div className="px-6 pb-6 text-xs sm:text-sm font-sans text-zinc-400 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
