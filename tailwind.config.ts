import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FBF3E4",
        surface: "#F1E3C8",
        espresso: "#2B1B12",
        coffee: "#6B3A22",
        marigold: "#D9902F",
        sage: "#7C8A5A",
      },
      fontFamily: {
        serif: ["var(--font-young-serif)", "Young Serif", "serif"],
        sans: ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        hand: ["var(--font-caveat)", "Caveat", "cursive"],
      },
      borderRadius: {
        cafe: "14px",
      },
      transitionTimingFunction: {
        "spring-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      boxShadow: {
        polaroid: "0 10px 25px -5px rgba(43, 27, 18, 0.08), 0 8px 10px -6px rgba(43, 27, 18, 0.04)",
        stamp: "0 4px 12px rgba(43, 27, 18, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
