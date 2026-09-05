export interface Project {
  id: string;
  title: string;
  slug: string;
  category: "Spatial" | "Web Engine" | "Brand" | "3D Compute" | "E-commerce";
  categoryLabel: string;
  year: string;
  client: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  featured?: boolean;
  accentColor?: string;
  stats?: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: "orion-spatial-os",
    title: "Orion Spatial OS",
    slug: "orion-spatial-os",
    category: "Spatial",
    categoryLabel: "Spatial Computing / Product Design",
    year: "2026",
    client: "Orion Technologies",
    description: "Spatial interface system designed for seamless interaction across wearables, full-vision headsets, and desktop pro environments.",
    fullDescription: "Orion Spatial OS redefines spatial computing interfaces by blending eye-tracking physics, gestural control, and adaptive glassmorphism layout engines. Built for enterprise pro users requiring multi-workspace rendering with microsecond response times.",
    tags: ["Spatial Design", "Product Prototyping", "WebGL 3D", "Vision OS"],
    featured: true,
    accentColor: "#00f0ff",
    stats: [
      { label: "Render Overhead", value: "< 2ms" },
      { label: "User Adoption", value: "+340%" },
      { label: "Spatial Precision", value: "99.98%" }
    ]
  },
  {
    id: "krona-protocol",
    title: "Krona Protocol",
    slug: "krona-protocol",
    category: "Web Engine",
    categoryLabel: "Action Platform / FinTech",
    year: "2025",
    client: "Mono Inc.",
    description: "Hyper-scale web platform and real-time liquidity interface built for institutional asset managers and global trading desks.",
    fullDescription: "Krona Protocol combines low-latency web sockets, high-density financial data visualizations, and custom WebGL candlestick canvas engines to process thousands of transactions per second without frame drops.",
    tags: ["Action Platform", "Design Systems", "Web Engine", "FinTech"],
    featured: false,
    accentColor: "#a855f7",
    stats: [
      { label: "Daily Volume", value: "$4.2B" },
      { label: "Latency", value: "14ms" }
    ]
  },
  {
    id: "aura-brutalist-haute",
    title: "Aura Brutalist Haute",
    slug: "aura-brutalist-haute",
    category: "Brand",
    categoryLabel: "Luxury E-Commerce / Visual Identity",
    year: "2025",
    client: "Aura Atelier Paris",
    description: "Precision-crafted digital luxury experience blending brutalist web architecture, high-resolution visual curation, and interactive spatial lookbooks.",
    fullDescription: "A fashion platform designed for high-luxury editorial drops. Features dark mode brutalism, dynamic hover video viewports, and custom web-checkout flows optimized for global high-net-worth clientele.",
    tags: ["Luxury Commerce", "Art Direction", "Brand OS", "Editorial"],
    featured: false,
    accentColor: "#ec4899",
    stats: [
      { label: "Conversion Rate", value: "4.8%" },
      { label: "Avg Session", value: "6m 40s" }
    ]
  },
  {
    id: "nexus-sound-synthesis",
    title: "Nexus Sound Synthesis",
    slug: "nexus-sound-synthesis",
    category: "3D Compute",
    categoryLabel: "Generative Audio / Web3 UI",
    year: "2025",
    client: "Audial Lab Tokyo",
    description: "Spatial audio visualizer combining generative node node graph engines with real-time audio manipulation and frequency spectrum renderers.",
    fullDescription: "Nexus operates directly in the browser using Web Audio API and WebGL shaders to visualize complex audio harmonics in interactive 3D particle fields.",
    tags: ["Generative Sound", "Audio Kit", "Web Audio API", "Shaders"],
    featured: false,
    accentColor: "#10b981",
    stats: [
      { label: "Audio Nodes", value: "10,000+" },
      { label: "FPS Stability", value: "60 FPS" }
    ]
  },
  {
    id: "hyperion-3d-compute",
    title: "Hyperion 3D Compute",
    slug: "hyperion-3d-compute",
    category: "3D Compute",
    categoryLabel: "Engine Computing / Cloud Renderer",
    year: "2026",
    client: "Hyperion Systems",
    description: "Next-generation GPU cloud ray-tracing rendering engine delivering high-fidelity interactive spatial assets with zero client overhead.",
    fullDescription: "Hyperion streams real-time ray-traced photorealistic models directly to web viewports, enabling interactive 3D product customization for enterprise clients.",
    tags: ["Engine Computing", "WebGL 3D", "Shader FX", "Cloud GPU"],
    featured: false,
    accentColor: "#f59e0b",
    stats: [
      { label: "Ray Trace Speed", value: "120 FPS" },
      { label: "Memory Savings", value: "85%" }
    ]
  },
  {
    id: "forma-studio",
    title: "Forma Spatial Architecture",
    slug: "forma-studio",
    category: "Brand",
    categoryLabel: "Architecture / Brand Experience",
    year: "2026",
    client: "Forma Global",
    description: "Architectural minimalism meets editorial digital storytelling for an international award-winning design and urban planning firm.",
    fullDescription: "An immersive digital showcase displaying large-scale architectural projects, interactive masterplan maps, and spatial case studies.",
    tags: ["Architectural Web", "Editorial Layout", "Brand Identity"],
    featured: false,
    accentColor: "#38bdf8",
    stats: [
      { label: "Design Awards", value: "7 International" },
      { label: "Global Reach", value: "45 Countries" }
    ]
  }
];
