import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the sageNsaim logo
        ink: {
          DEFAULT: "#1a1a18",
          soft: "#252521",
        },
        cream: {
          DEFAULT: "#f4f1ea",
          soft: "#e9e4d8",
        },
        sage: {
          DEFAULT: "#8ea884",
          light: "#a8bf9e",
          dark: "#6f8a66",
        },
        taupe: {
          DEFAULT: "#a68b63",
          light: "#c2a982",
          dark: "#836b48",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.05em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
