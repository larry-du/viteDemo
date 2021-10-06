import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "unplugin-vue-components/dist/resolvers.js";
import eslintPlugin from "vite-plugin-eslint";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    checker({
      eslint: {
        files: ["./src"],
      },
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: {
    target: "modules",
    outDir: "./test/dist",
    assetsDir: "assets",
    minify: "terser",
  },
});
