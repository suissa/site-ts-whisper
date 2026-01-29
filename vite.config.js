import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 7845,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: true,
    },
  },
  preview: {
    host: true,
    port: 7845,
    strictPort: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "::1",
      "ts-whisper.purecore.codes"
    ]
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
