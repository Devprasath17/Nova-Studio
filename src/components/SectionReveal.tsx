"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  amount?: number;
  scale?: boolean;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  amount = 0.2,
  scale = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: 35,
        scale: scale ? 0.985 : 1,
      };

  const animate = shouldReduceMotion
    ? { opacity: 1 }
    : {
        opacity: 1,
        y: 0,
        scale: 1,
      };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
