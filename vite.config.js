import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/transnextgen": {
        target: "https://transstage1.iwayex.com/transnextgen",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/transnextgen/, ""),
      },
    },
  },
});
