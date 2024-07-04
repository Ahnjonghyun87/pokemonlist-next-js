import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-25%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        bounce: "bounce 1s infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  safelist: [
    "bg-sky-500",
    "bg-red-700",
    "bg-green-500",
    "bg-yellow-500",
    "bg-cyan-300",
    "bg-violet-500",
    "bg-amber-900",
    "bg-blue-300",
    "bg-red-400",
    "bg-lime-700",
    "bg-amber-400",
    "bg-violet-950",
    "bg-blue-900",
    "bg-zinc-700",
    "bg-cyan-700",
    "bg-fuchsia-500",
    "bg-gray-300",
    "text-white",
    "text-black",
  ],
  plugins: [],
};

export default config;
