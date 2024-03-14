import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/pixema-project/",
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
  ],
})
