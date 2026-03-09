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
        background: "#02120a",
        foreground: "#ffffff",
        hack: {
          neonCyan: "#4ade80",
          neonPurple: "#22c55e",
          neonBlue: "#16a34a",
          darkBg: "#02120a",
          cardBg: "rgba(2, 18, 10, 0.7)",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tech-grid': 'linear-gradient(rgba(74, 222, 128, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 222, 128, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'tech-grid': '30px 30px',
      },
      boxShadow: {
        neonCyan: "0 0 10px rgba(74, 222, 128, 0.5), 0 0 20px rgba(74, 222, 128, 0.3)",
        neonPurple: "0 0 10px rgba(34, 197, 94, 0.5), 0 0 20px rgba(34, 197, 94, 0.3)",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        }
      },
      animation: {
        "gradient-x": "gradient-x 6s ease-in-out infinite"
      }
    },
  },
  plugins: [],
};
export default config;
