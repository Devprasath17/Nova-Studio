import React from "react";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { AboutPreview } from "@/components/AboutPreview";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <AboutPreview />
      <Process />
      <CTA />
    </div>
  );
}
