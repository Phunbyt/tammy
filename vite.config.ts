import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
// import path from 'path';
// import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.glb"],
  // resolve: {
  //   alias: {
  //     react: path.resolve("./node_modules/react"),
  //     "react-dom": path.resolve("./node_modules/react-dom"),
  //   },
  // },
});
