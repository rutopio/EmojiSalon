import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import type { EmojiData } from "./src/lib/render-emoji-svg";
import { renderOgSvg } from "./src/lib/render-og-image";

/**
 * Dev-only: mirror the /og Pages Function so the OG image works under
 * `vite dev` too (Cloudflare Functions only run under wrangler). Reads the
 * per-emoji data from public/data and serves the SVG directly (prod fetches the
 * same asset and rasterizes to PNG via resvg-wasm), sharing the same renderer
 * so dev and prod stay in sync.
 */
function ogImagePlugin(): Plugin {
  const emojiDir = path.resolve(__dirname, "public/data/emoji");
  return {
    name: "og-image-dev",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url ?? "", "http://localhost");
        if (url.pathname !== "/og") return next();

        const emoji = url.searchParams.get("emoji");
        const override = url.searchParams.get("palette") ?? undefined;
        const file = emoji ? path.join(emojiDir, `${emoji}.json`) : "";
        if (!emoji || !/^u[0-9a-f_]+$/.test(emoji) || !existsSync(file)) {
          res.statusCode = 400;
          res.end("Unknown emoji");
          return;
        }
        const data = JSON.parse(readFileSync(file, "utf8")) as EmojiData;
        res.setHeader("content-type", "image/svg+xml;charset=utf-8");
        res.end(renderOgSvg({ data, override }));
      });
    },
  };
}

// Injects <link rel="preload"> for the fonts that would otherwise flash on
// first paint (FOUT with font-display: swap). The body/heading fonts come from
// @fontsource and are hashed at build time, so their final paths are only known
// after bundling — this plugin reads them from the emitted assets. Paper Mono
// has a fixed public/ path. Preloading gives these top priority so they usually
// arrive before first paint, making the swap invisible while swap still
// guarantees the custom font is eventually used (unlike `optional`).
const PRELOAD_FONT_MATCHERS = [
  /albert-sans-latin-wght-normal.*\.woff2$/,
  /host-grotesk-latin-wght-normal.*\.woff2$/,
];
const PUBLIC_PRELOAD_FONTS = ["/font/PaperMono%5Bwght%5D.woff2"];

function fontPreloadPlugin(): Plugin {
  return {
    name: "font-preload",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        const hrefs: string[] = [...PUBLIC_PRELOAD_FONTS];
        // In dev there is no bundle; only the fixed public path is preloaded.
        if (ctx.bundle) {
          for (const name of Object.keys(ctx.bundle)) {
            if (
              ctx.bundle[name]?.type === "asset" &&
              PRELOAD_FONT_MATCHERS.some((re) => re.test(name))
            ) {
              hrefs.push(`/${name}`);
            }
          }
        }
        const tags = hrefs
          .map(
            (href) =>
              `    <link rel="preload" href="${href}" as="font" type="font/woff2" crossorigin>`
          )
          .join("\n");
        return html.replace("</head>", `${tags}\n  </head>`);
      },
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
    fontPreloadPlugin(),
    tanstackRouter(),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
});
