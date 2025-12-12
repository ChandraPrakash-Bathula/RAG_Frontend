import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Optional: Proxy to your FastAPI backend
  server: {
    proxy: {
      "/ask": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
