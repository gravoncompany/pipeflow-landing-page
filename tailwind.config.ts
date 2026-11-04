import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#030817",
          900: "#060E26",
          800: "#0B1736",
          700: "#122249",
          600: "#1B3063",
        },
        brand: {
          50: "#EEF4FF",
          100: "#DCE7FF",
          300: "#8FB0FF",
          400: "#5C8BFF",
          500: "#2F6BFF",
          600: "#1F55E6",
          700: "#1842B8",
        },
        sky: { 400: "#38BDF8" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(92,139,255,.15), 0 20px 60px -20px rgba(47,107,255,.55)",
        card: "0 1px 2px rgba(6,14,38,.06), 0 12px 32px -12px rgba(6,14,38,.18)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        pulseDot: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".35" } },
        flow: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        flow: "flow 6s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
