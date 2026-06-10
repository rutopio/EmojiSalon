/**
 * Cloudflare Pages Function: on-demand Open Graph image.
 *
 *   GET /og?emoji=u1f349&palette=195_f0daa3-824_6e343f
 *
 * Reuses the app's pure emoji renderer to build a 1200x630 SVG (original emoji
 * on the left, customized on the right), then rasterizes it to PNG with
 * resvg-wasm. Cached at the edge so repeated shares are cheap.
 */

import { initWasm, Resvg } from "@resvg/resvg-wasm";
// The .wasm is imported as a module so Wrangler bundles it with the function.
import resvgWasm from "@resvg/resvg-wasm/index_bg.wasm";

import { OG_WIDTH, renderOgSvg } from "../src/lib/render-og-image";

// initWasm must run once per isolate; guard with a shared promise.
let wasmReady: Promise<void> | null = null;
function ensureWasm(): Promise<void> {
  if (!wasmReady) {
    wasmReady = initWasm(resvgWasm as WebAssembly.Module);
  }
  return wasmReady;
}

export const onRequestGet: PagesFunction = async ({ request }) => {
  const url = new URL(request.url);
  const emoji = url.searchParams.get("emoji");
  const palette = url.searchParams.get("palette") ?? undefined;

  if (!emoji) {
    return new Response("Missing emoji", { status: 400 });
  }

  const svg = renderOgSvg({ emoji, palette });
  if (!svg) {
    return new Response("Unknown emoji", { status: 400 });
  }

  await ensureWasm();
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: OG_WIDTH },
  });
  const png = resvg.render().asPng();

  return new Response(png.buffer as ArrayBuffer, {
    headers: {
      "content-type": "image/png",
      // Cache aggressively at the edge; the image is a pure function of the query.
      "cache-control": "public, max-age=86400, s-maxage=2592000, immutable",
    },
  });
};

export const config = { runtime: "edge" };
