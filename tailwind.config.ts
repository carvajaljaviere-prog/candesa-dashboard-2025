import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        candesaRed: "#D32F2F",
        candesaGreen: "#4CAF50",
      },
    },
  },
  plugins: [],
};
export default config;
