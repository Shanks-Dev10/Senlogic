import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    transformer: "postcss",
  },
  build: {
    cssMinify: 'esbuild', // ✅ ADD THIS LINE
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})