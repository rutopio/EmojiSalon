/**
 * @fileoverview Sharing utility functions for Emoji Salon application.
 * Provides functions for sharing customized emojis via social media,
 * copying links to clipboard, generating CSS code, and downloading files.
 */

import { toast } from "sonner";

import {
  FACEBOOK_SHARE_BASE_URL,
  TWITTER_SHARE_BASE_URL,
} from "@/lib/constants";
import { emojiToUnicode, triggerDownload } from "@/lib/emoji-utils";

/**
 * Generates a shareable URL for a specific emoji/palette combination.
 *
 * @param emoji - The emoji character.
 * @param palette - The palette override string.
 * @returns The shareable URL with emoji and palette parameters.
 *
 * @example
 * generateShareURL("😀", "0-ff0000"); // Returns "https://example.com/?emoji=1f600&palette=0-ff0000"
 */
export function generateShareURL(emoji: string, palette: string): string {
  const baseURL = window.location.origin;
  const emojiUnicode = emojiToUnicode(emoji);
  return `${baseURL}/?emoji=${emojiUnicode}&palette=${palette}`;
}

/**
 * Shares to Twitter/X.
 * Opens a new browser tab with a pre-filled tweet containing
 * the #EmojiSalon hashtag and the specified URL.
 *
 * @param url - Optional URL to share. Defaults to current page URL.
 *
 * @example
 * shareToTwitter(); // Opens Twitter with "#EmojiSalon https://..."
 * shareToTwitter("https://example.com"); // Opens Twitter with custom URL
 */
export function shareToTwitter(url?: string): void {
  const shareUrl = url ?? window.location.href;
  const message = `#EmojiSalon ${shareUrl}`;
  const twitterShareURL = `${TWITTER_SHARE_BASE_URL}?text=${encodeURIComponent(message)}`;
  window.open(twitterShareURL, "_blank");
  toast.success("Shared to Twitter.");
}

/**
 * Shares to Facebook.
 * Opens a new browser tab with the Facebook share dialog
 * pre-filled with the specified URL.
 *
 * @param url - Optional URL to share. Defaults to current page URL.
 *
 * @example
 * shareToFacebook(); // Opens Facebook share dialog
 * shareToFacebook("https://example.com"); // Opens Facebook with custom URL
 */
export function shareToFacebook(url?: string): void {
  const shareUrl = url ?? window.location.href;
  const facebookShareURL = `${FACEBOOK_SHARE_BASE_URL}?u=${encodeURIComponent(shareUrl)}`;
  window.open(facebookShareURL, "_blank");
  toast.success("Shared to Facebook.");
}

/**
 * Copies a URL to the clipboard.
 * Uses the modern Clipboard API. Requires a secure context (HTTPS).
 *
 * @param url - Optional URL to copy. Defaults to current page URL.
 *
 * @example
 * copyLinkToClipboard(); // Copies current URL to clipboard
 * copyLinkToClipboard("https://example.com"); // Copies custom URL
 */
export function copyLinkToClipboard(url?: string): void {
  const copyUrl = url ?? window.location.href;
  navigator.clipboard.writeText(copyUrl);
  toast.success("Link copied to clipboard.", {
    description: copyUrl,
  });
}

/**
 * Copies HTML code for displaying the emoji to the clipboard.
 *
 * @param emoji - The emoji character.
 */
export function copyHTMLCode(emoji: string): void {
  const htmlCode = `<span class="mod-emoji"> ${emoji} </span>`;
  navigator.clipboard.writeText(htmlCode);
  toast.success("HTML code copied to clipboard.", {
    description: htmlCode,
  });
}

/**
 * Copies CSS code to the clipboard.
 *
 * @param cssCode - The CSS code string to copy.
 */
export function copyCSSCode(cssCode: string): void {
  navigator.clipboard.writeText(cssCode);
  toast.success("CSS code copied to clipboard.");
}

/**
 * Generates CSS code for using the customized emoji with Twemoji COLR font.
 * The generated CSS includes:
 * - @font-face declaration for the Twemoji font
 * - A .mod-emoji class that applies the font
 * - @font-palette-values with color overrides (if any)
 *
 * @param customizedColors - Current customized palette colors.
 * @param originalColors - Original palette colors.
 * @param originalIndex - Original palette indices.
 * @returns Complete CSS code for displaying the customized emoji.
 */
export function generateCSSCode(
  customizedColors: string[],
  originalColors: string[],
  originalIndex: number[]
): string {
  // Build override colors by comparing customized vs original
  const overrides: string[] = [];

  customizedColors.forEach((color, idx) => {
    const originalColor = originalColors[idx];
    if (originalColor && color.toLowerCase() !== originalColor.toLowerCase()) {
      const paletteIdx = originalIndex[idx];
      if (paletteIdx !== undefined) {
        overrides.push(`${paletteIdx} ${color}`);
      }
    }
  });

  const overrideColors = overrides.join(", ");

  return `@font-face { 
    font-family: Twemoji;
    src: url("https://cdn.jsdelivr.net/npm/twemoji-colr-font@14.1.3/twemoji.woff2") format("woff2");
}

.mod-emoji {
    font-family: Twemoji;
    font-palette: --mod-palette;
}

@font-palette-values --mod-palette {
    font-family: Twemoji;
    base-palette: 0;${overrideColors ? `\n    override-colors: ${overrideColors};` : ""}
}`;
}

/**
 * Downloads the customized emoji as an SVG file.
 * Creates a blob from the SVG data and triggers a download
 * with a filename based on the emoji's unicode identifier.
 *
 * @param svgData - The SVG content as a string.
 * @param emoji - The emoji character (used for filename).
 *
 * @example
 * const svgContent = '<svg xmlns="...">...</svg>';
 * downloadSVG(svgContent, "😀"); // Downloads as "u1f600-EmojiSalon.svg"
 */
export function downloadSVG(svgData: string, emoji: string): void {
  const svgBlob = new Blob([svgData], {
    type: "image/svg+xml;charset=utf-8",
  });
  const url = URL.createObjectURL(svgBlob);
  const filename = `${emojiToUnicode(emoji)}-EmojiSalon.svg`;
  triggerDownload(url, filename);
  toast.success("SVG downloaded.", {
    description: filename,
  });
}
