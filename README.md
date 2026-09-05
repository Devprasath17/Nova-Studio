# NOVA Studio — Digital Agency Website

> "Digital experiences for ambitious brands."

NOVA Studio is a premium digital design and software engineering agency website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. The visual design is derived from Stitch AI editorial reference, featuring an ultra-dark luxury aesthetic, monospaced indexing tags (`// 0.01`), serif italic typography accents, interactive spatial visualizers, category-filterable portfolio case studies, and responsive layout architecture.

---

## 🌟 Key Features

* **Multi-Page Next.js Architecture**: Clean App Router structure across 5 distinct routes (`/`, `/work`, `/services`, `/about`, `/contact`).
* **Stitch AI Visual Language**: Precise editorial typography pairing serif italics (*move*, *forward*, *extraordinary*) with technical monospaced labels (`// 0.01`) and subtle neon cyan (`#00f0ff`) / lavender (`#a855f7`) accents.
* **Interactive Visualizer Card**: Dynamic audio waveform and DSP control widget (`VisualizerCard.tsx`) matching the Stitch AI hero mockup.
* **Portfolio Showcase with Case Study Modal**: Category-filterable work grid (Spatial, Web Engine, Brand, 3D Compute) with interactive modal drawer (`ProjectModal.tsx`) for detailed metrics and architecture specs.
* **Interactive Contact Form**: Frontend inquiry form (`ContactForm.tsx`) featuring client-side validation, service interest selector pills, budget range selectors, submitting state, and success feedback banner.
* **100% Responsive Design**: Tested across mobile (320px, 375px, 390px, 414px), tablet (768px, 1024px), and desktop (1280px, 1440px) viewports with custom mobile navigation drawer.
* **Accessibility & Reduced Motion**: Full keyboard focus states, semantic HTML elements, ARIA labels, and explicit `prefers-reduced-motion` CSS overrides.
* **SEO Metadata**: Configured OpenGraph, Twitter Card, theme-color, and page titles in Next.js 15 `layout.tsx`.

---

## 🛠️ Tech Stack

* **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **UI Library**: [React 19](https://react.dev/)
* **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Typography**: `next/font/google` (`Inter`, `Instrument Serif`, `JetBrains Mono`)

---

## 🚀 Site Routes & Structure

```
src/
├── app/
│   ├── layout.tsx         # Root Layout (Fonts, SEO Metadata, Navbar, Footer)
│   ├── page.tsx           # Homepage (Hero, Services, Selected Work, Studio, Process, CTA)
│   ├── globals.css        # Global CSS, dark theme variables, reduced-motion overrides
│   ├── work/
│   │   └── page.tsx       # Portfolio Archive (/work)
│   ├── services/
│   │   └── page.tsx       # Detailed Capabilities Matrix (/services)
│   ├── about/
│   │   └── page.tsx       # Studio Manifesto & Values (/about)
│   └── contact/
│       └── page.tsx       # Interactive Inquiry & FAQ (/contact)
│
├── components/
│   ├── Navbar.tsx         # Responsive sticky header with mobile drawer
│   ├── Footer.tsx         # Reusable footer with studio clocks & watermark
│   ├── Hero.tsx           # Hero section with editorial typography
│   ├── VisualizerCard.tsx # Interactive spatial audio visualizer widget
│   ├── Services.tsx       # 4-column capabilities grid
│   ├── ServiceCard.tsx    # Reusable service card
│   ├── Portfolio.tsx      # Filterable work section
│   ├── ProjectCard.tsx    # Reusable project card with dynamic graphics
│   ├── ProjectGraphic.tsx # Procedural dark mode abstract project graphics
│   ├── ProjectModal.tsx   # Case study detail modal
│   ├── AboutPreview.tsx   # Studio values preview
│   ├── Process.tsx        # 4-stage methodology timeline
│   ├── CTA.tsx            # Partnership CTA with direct contacts
│   ├── ContactForm.tsx    # Interactive inquiry form with validation
│   └── ui/
│       └── Button.tsx     # Reusable button component
│
├── data/
│   ├── services.ts        # Services data & deliverables
│   └── projects.ts        # Case study data & metrics
│
└── lib/
    └── utils.ts           # Class merging helper (clsx + tailwind-merge)
```

---

## ⚙️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

---

## 📦 Production Build Verification

To test and build the production bundle:

```bash
npm run build
npm start
```

---

## 🎨 Design & Assumptions

* **Stitch AI Design Reference**: Implemented strictly based on the provided Stitch AI visual design, preserving color palette, typography hierarchy, card structure, and spatial control widget.
* **Frontend-Only Form Handling**: As specified in task requirements, the contact form simulates submission validation and display states on the client side without requiring an external SMTP/backend server.
* **No Unnecessary External Dependencies**: Built without heavy UI libraries or pre-made templates, ensuring clean, maintainable, production-ready code.
