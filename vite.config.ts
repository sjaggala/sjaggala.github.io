import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

// Pin the project root to THIS file's folder so the dev server serves the
// Portfolio app no matter what cwd the launcher uses.
const projectRoot = dirname(fileURLToPath(import.meta.url));

// User site (sjaggala.github.io) is served from the domain root, so base = "/".
export default defineConfig({
  root: projectRoot,
  plugins: [react()],
  base: "/",
  server: {
    port: 5173,
    strictPort: true,
    host: true,
  },
});
