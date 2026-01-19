/**
 * @fileoverview Sharing utility functions for Emoji Salon application.
 *
 * This module provides functions for sharing customized emojis via social media,
 * copying links to clipboard, generating CSS code, and downloading files.
 *
 * @module share-utils
 */

import { emojiToUnicode, triggerDownload } from "./emoji-utils";

// ============================================================================
// Social Sharing Functions
// ============================================================================

/**
 * Share the current page to Twitter/X.
 *
 * Opens a new browser tab with a pre-filled tweet containing
 * the #EmojiSalon hashtag and the current page URL.
 *
 * @returns {void}
 *
 * @example
 * shareToTwitter(); // Opens Twitter with "#EmojiSalon https://..."
 */
export function shareToTwitter(): void {
  const message = `#EmojiSalon ${window.location.href}`;
  const twitterShareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
  window.open(twitterShareURL, "_blank");
}

/**
 * Share the current page to Facebook.
 *
 * Opens a new browser tab with the Facebook share dialog
 * pre-filled with the current page URL.
 *
 * @returns {void}
 *
 * @example
 * shareToFacebook(); // Opens Facebook share dialog
 */
export function shareToFacebook(): void {
  const facebookShareURL = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(window.location.href)}`;
  window.open(facebookShareURL, "_blank");
}

// ============================================================================
// Clipboard Functions
// ============================================================================

/**
 * Copy the current page URL to the clipboard.
 *
 * Uses the modern Clipboard API. Note that this may require
 * user permission or a secure context (HTTPS).
 *
 * @returns {void}
 *
 * @example
 * copyLinkToClipboard(); // Copies current URL to clipboard
 */
export function copyLinkToClipboard(): void {
  navigator.clipboard.writeText(window.location.href);
}

// ============================================================================
// Code Generation Functions
// ============================================================================

/**
 * Generate CSS code for using the customized emoji with Twemoji COLR font.
 *
 * The generated CSS includes:
 * - @font-face declaration for the Twemoji font
 * - A .mod-emoji class that applies the font
 * - @font-palette-values with color overrides (if any)
 *
 * @param {string[]} customizedColors - Current customized palette colors
 * @param {string[]} originalColors - Original palette colors
 * @param {number[]} originalIndex - Original palette indices
 * @returns {string} Complete CSS code for displaying the customized emoji.
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

// ============================================================================
// Download Functions
// ============================================================================

/**
 * Download the customized emoji as an SVG file.
 *
 * Creates a blob from the SVG data and triggers a download
 * with a filename based on the emoji's unicode identifier.
 *
 * @param {string} svgData - The SVG content as a string.
 * @param {string} emoji - The emoji character (used for filename).
 * @returns {void}
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
  triggerDownload(url, `${emojiToUnicode(emoji)}-EmojiSalon.svg`);
}
