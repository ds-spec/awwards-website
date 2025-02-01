import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  theme: {
    fontFamily: {
      zentry: ["zentry", "sans-serif"],
      general: ["general", "serif"],
      "circular-web": ["circular-web", "sans-serif"],
      "robert-medium": ["robert-medium", "sans-serif"],
      "robert-regular": ["robert-regular", "sans-serif"],
    },
  },
});
