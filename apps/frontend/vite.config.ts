import { defineConfig } from "vite";

// Renaming all imported plugins to follow our naming convention
import { TanStackRouterVite as tanStackRouter } from "@tanstack/router-plugin/vite";
import { vanillaExtractPlugin as vanillaExtract } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    tanStackRouter({
      quoteStyle: "double",
      semicolons: true,
    }),
    vanillaExtract(),
    react(),
  ],
})
