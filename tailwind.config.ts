import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070709",
        surface: {
          DEFAULT: "#0d0d12",
          card: "#121219",
          hover: "#1a1a24",
          border: "#232330",
        },
        nova: {
          cyan: "#00f0ff",
          violet: "#a855f7",
          pink: "#ec4899",
          emerald: "#10b981",
          gold: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "brightness(1)" },
          "100%": { opacity: "0.8", filter: "brightness(1.3)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
