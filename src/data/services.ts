export interface Service {
  id: string;
  number: string;
  categoryNumber: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  deliverables: string[];
  capabilities: string[];
  iconName: "Layout" | "Code" | "Palette" | "Cpu";
}

export const SERVICES: Service[] = [
  {
    id: "ui-ux-spatial",
    number: "01",
    categoryNumber: "CATEGORY 01",
    title: "UI/UX & Spatial Systems",
    shortDescription: "Thoughtful interfaces and digital experiences designed around real people and real goals.",
    description: "Interactive design, spatial vision systems, micro-interactions, and human-centered design frameworks engineered for intuitive digital engagement.",
    tags: ["Spatial Design", "Product Prototyping", "Design Systems"],
    deliverables: [
      "User Experience & Journey Mapping",
      "High-Fidelity Interactive Prototypes",
      "Design Systems & Token Architecture",
      "Spatial Interface (AR/VR/VisionOS) Design",
      "Accessibility & WCAG AAA Audits"
    ],
    capabilities: ["Research", "Wireframing", "Prototyping", "Design Systems", "Interaction Design"],
    iconName: "Layout"
  },
  {
    id: "creative-web-engineering",
    number: "02",
    categoryNumber: "CATEGORY 02",
    title: "Creative Web & Engineering",
    shortDescription: "Fast, scalable and responsive websites built with modern technologies.",
    description: "Ultra-fast Next.js architecture, WebGL 3D graphics, seamless micro-animations, and full-stack web platforms built for long-term scalability.",
    tags: ["WebGL / 3D", "Full-Stack Architecture", "React / Next.js Stack"],
    deliverables: [
      "Next.js 15 App Router Frontend",
      "Custom WebGL & Shader Canvas FX",
      "Headless CMS & API Integration",
      "Sub-second Load Performance (99+ Lighthouse)",
      "SEO & OpenGraph Architecture"
    ],
    capabilities: ["Next.js", "React", "Performance", "Responsive Development", "CMS Integration"],
    iconName: "Code"
  },
  {
    id: "brand-identity-direction",
    number: "03",
    categoryNumber: "CATEGORY 03",
    title: "Brand Identity & Direction",
    shortDescription: "Distinctive visual systems that give ambitious brands a recognizable voice.",
    description: "Iconic brand positioning, custom typography, generative design systems, and motion guidelines that elevate visionary companies.",
    tags: ["Visual Identity", "Brand Strategy & Naming", "Motion Graphics"],
    deliverables: [
      "Complete Brand Strategy & Naming",
      "Visual Identity & Tokenized Assets",
      "Custom Typography & Iconography",
      "Motion Design & UI Motion Guidelines",
      "Brand OS & Interactive Guidelines"
    ],
    capabilities: ["Visual Identity", "Typography", "Color Systems", "Art Direction", "Brand Guidelines"],
    iconName: "Palette"
  },
  {
    id: "digital-architecture-ai",
    number: "04",
    categoryNumber: "CATEGORY 04",
    title: "Digital Architecture & AI",
    shortDescription: "Clear digital direction that connects business objectives with meaningful experiences.",
    description: "Forward-thinking AI product strategy, scalable cloud architecture, e-commerce transformation, and data-driven product growth models.",
    tags: ["AI Product Design", "E-commerce Platforms", "Scale Infrastructure"],
    deliverables: [
      "Product Strategy & Technical Blueprints",
      "AI Agent & LLM Interface Integration",
      "Enterprise E-Commerce Engine Setup",
      "Conversion Rate Optimization (CRO)",
      "Full Stack Security & Analytics"
    ],
    capabilities: ["Digital Audits", "Product Strategy", "Content Strategy", "Conversion Optimization", "Technical Planning"],
    iconName: "Cpu"
  }
];
