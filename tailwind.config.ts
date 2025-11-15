import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "ui-sans-serif", "system-ui"],
      },
      animation: {
        gradient: "gradient 8s ease infinite",
        "ping-slow": "ping-slow 20s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [], // Hapus tailwindcss-animate – v4 built-in!
};

export default config;