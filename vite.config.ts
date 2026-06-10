import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { renderOgSvg } from "./src/lib/render-og-image";

/**
 * Dev-only: mirror the /og Pages Function so the OG image works under
 * `vite dev` too (Cloudflare Functions only run under wrangler). Serves the SVG
 * directly (prod rasterizes it to PNG via resvg-wasm), sharing the same
 * renderer so dev and prod stay in sync.
 */
function ogImagePlugin(): Plugin {
  return {
    name: "og-image-dev",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url ?? "", "http://localhost");
        if (url.pathname !== "/og") return next();

        const emoji = url.searchParams.get("emoji");
        const palette = url.searchParams.get("palette") ?? undefined;
        const svg = emoji ? renderOgSvg({ emoji, palette }) : null;
        if (!svg) {
          res.statusCode = 400;
          res.end("Unknown emoji");
          return;
        }
        res.setHeader("content-type", "image/svg+xml;charset=utf-8");
        res.end(svg);
      });
    },
  };
}

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    ogImagePlugin(),
    tanstackRouter(),
    viteReact({
      babel: {
        plugins: [
          [
            "babel-plugin-react-compiler",
            {
              target: "19",
            },
          ],
        ],
      },
    }),
    tailwindcss(),
  ],
});
