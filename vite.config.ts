import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// const cherryPickedKeys = [
//   "VITE_FIREBASE_API_KEY",
//   "VITE_FIREBASE_AUTH_DOMAIN",
//   "VITE_FIREBASE_PROJECT_ID",
//   "VITE_FIREBASE_STORAGE_BUCHET",
//   "VITE_FIREBASE_MESSAGING_SENDER_ID",
//   "VITE_FIREBASE_APP_ID",
// ];

export default defineConfig({
  base: "https://igasin.github.io/pixema-project/",
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
  ],
})

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");
//   const processEnv = {};
//   cherryPickedKeys.forEach((key) => (processEnv[key] = env[key]));

//   return {
//     define: {
//       "process.env": processEnv,
//     },
//     base: "https://igasin.github.io/pixema-project/",
//     plugins: [react(), svgr(), tsconfigPaths()],
//   };
// });
