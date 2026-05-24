import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";

// Standard Vite config replacing @lovable.dev/vite-tanstack-config
export default defineConfig({
  plugins: [
    cloudflare({
      viteEnvironment: { name: "ssr" }
    }),
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      server: { entry: "src/server.ts" },
      prerender: {
        routes: ["/"]
      }
    }),
    react()
  ]
});
