/**
 * Cloudflare Pages middleware: rewrite the static OG/Twitter image meta tags to
 * point at the on-demand /og image for the current share URL. Crawlers don't
 * run JS, so the per-share preview must be injected into the served HTML here.
 *
 * Only HTML document responses for the app shell are rewritten; the /og
 * function and static assets pass through untouched.
 */

import { OG_HEIGHT, OG_WIDTH } from "../src/lib/render-og-image";

class MetaContentRewriter {
  constructor(private readonly content: string) {}
  element(el: Element) {
    el.setAttribute("content", this.content);
  }
}

export const onRequest: PagesFunction = async ({ request, next }) => {
  const url = new URL(request.url);

  // Canonical-host redirect. Any *.pages.dev host (<project>.pages.dev and every
  // <hash>.<project>.pages.dev preview URL) is 301'd to the custom domain, path +
  // query preserved, so the pages.dev origin never gets indexed or linked.
  if (url.hostname.endsWith(".pages.dev")) {
    const target = new URL(
      url.pathname + url.search,
      "https://emojisalon.chingru.com"
    );
    return Response.redirect(target.toString(), 301);
  }

  // Don't touch the image function or anything that isn't the HTML shell.
  if (url.pathname.startsWith("/og")) return next();

  const response = await next();
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) return response;

  // The share state lives in the page query (?emoji=...&palette=...). A bare URL
  // has no emoji and keeps the static default image from index.html.
  const emoji = url.searchParams.get("emoji");
  if (!emoji) return response;

  const palette = url.searchParams.get("palette");
  const ogQuery = new URLSearchParams({ emoji });
  if (palette) ogQuery.set("palette", palette);
  const imageUrl = `${url.origin}/og?${ogQuery.toString()}`;

  const pageQuery = new URLSearchParams({ emoji });
  if (palette) pageQuery.set("palette", palette);
  const pageUrl = `${url.origin}/?${pageQuery.toString()}`;

  return new HTMLRewriter()
    .on('meta[property="og:image"]', new MetaContentRewriter(imageUrl))
    .on('meta[name="twitter:image"]', new MetaContentRewriter(imageUrl))
    .on(
      'meta[property="og:image:width"]',
      new MetaContentRewriter(String(OG_WIDTH))
    )
    .on(
      'meta[property="og:image:height"]',
      new MetaContentRewriter(String(OG_HEIGHT))
    )
    .on('meta[property="og:url"]', new MetaContentRewriter(pageUrl))
    .transform(response);
};
