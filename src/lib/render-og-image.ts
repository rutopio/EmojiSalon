/**
 * Builds an Open Graph image SVG (1200x630) for a shared emoji: a white canvas
 * with two emoji centered side by side, the original on the left and the
 * user-customized version on the right. Platform-agnostic and pure, so it is
 * reused by the Cloudflare Pages function that rasterizes it to PNG on demand.
 */

import { buildEmojiPair } from "./render-emoji-svg";

/** Open Graph recommended 1.91:1 canvas. */
export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

const BG_COLOR = "#ffffff";

/** Rendered size of each emoji square, in OG pixels. */
const EMOJI_SIZE = 320;
/** Horizontal gap between the two emoji squares, in OG pixels. */
const GAP = 120;

/** Emoji source viewBox is 36x36. */
const SRC = 36;

interface OgOptions {
  /** Emoji unicode id, e.g. "u1f349". */
  emoji: string;
  /** Optional palette override string, e.g. "195_f0daa3-824_6e343f". */
  palette?: string;
}

/** Place one emoji's inner content into a positioned, scaled group. */
function placeEmoji(inner: string, x: number, y: number): string {
  const scale = EMOJI_SIZE / SRC;
  return `<g transform="translate(${x} ${y}) scale(${scale})">${inner}</g>`;
}

/**
 * Returns the OG image as an SVG string, or null when the emoji id is unknown
 * (caller can fall back to a static image).
 */
export function renderOgSvg({ emoji, palette }: OgOptions): string | null {
  const pair = buildEmojiPair(emoji, palette);
  if (!pair) return null;

  // Two squares centered as a group: [original][gap][customized].
  const totalW = EMOJI_SIZE * 2 + GAP;
  const leftX = (OG_WIDTH - totalW) / 2;
  const rightX = leftX + EMOJI_SIZE + GAP;
  const y = (OG_HEIGHT - EMOJI_SIZE) / 2;

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" ` +
    `width="${OG_WIDTH}" height="${OG_HEIGHT}" ` +
    `viewBox="0 0 ${OG_WIDTH} ${OG_HEIGHT}">` +
    `<rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="${BG_COLOR}"/>` +
    placeEmoji(pair.originalInner, leftX, y) +
    placeEmoji(pair.customizedInner, rightX, y) +
    `</svg>`
  );
}
