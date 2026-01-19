#!/usr/bin/env node
/**
 * @fileoverview Extract palette color data from Twemoji COLR font.
 *
 * This script reads the CPAL (Color Palette) table from a Twemoji COLR font
 * and extracts the color values used for emoji rendering. The palette data
 * is essential for mapping color indices to actual hex color values.
 *
 * The Twemoji COLR font uses the COLR/CPAL format for color emoji rendering,
 * where each emoji layer references a palette color by index.
 *
 * @requires fontkit - For parsing font files
 *
 * @example
 * // Run with local font file
 * node extract_palette_colors.js
 *
 * @output data/paletteColorData.json
 */

const fontkit = require("fontkit");
const fs = require("fs");

/**
 * URL to the Twemoji COLR font on CDN.
 * @type {string}
 */
const FONT_URL =
  "https://cdn.jsdelivr.net/npm/twemoji-colr-font@14.1.3/twemoji.woff2";

/**
 * Convert RGBA color components to a hex color string.
 *
 * @param {number[]} rgba - Array of [red, green, blue, alpha] values (0-255).
 * @returns {string} Hex color string without the '#' prefix (e.g., "ff0000").
 */
function rgbaToHexColor(rgba) {
  return rgba
    .slice(0, 3)
    .map((value) => {
      const hex = value.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");
}

/**
 * Fetch and parse the font file to extract palette colors.
 *
 * @param {string} fontPath - URL or path to the font file.
 * @returns {Promise<void>}
 */
async function extractPaletteColors(fontPath) {
  try {
    console.log(`Fetching font from: ${fontPath}`);

    const response = await fetch(fontPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch font: ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const font = fontkit.create(buffer);

    // Check if CPAL table exists
    if (!font.CPAL) {
      throw new Error("Font does not contain CPAL (Color Palette) table");
    }

    const { CPAL } = font;

    // Extract colors from the first palette
    const paletteStartIndex = CPAL.colorRecordIndices[0];
    const paletteEndIndex = paletteStartIndex + CPAL.numPaletteEntries;

    const paletteColors = CPAL.colorRecords
      .slice(paletteStartIndex, paletteEndIndex)
      .map((color) =>
        rgbaToHexColor([color.red, color.green, color.blue, color.alpha])
      );

    console.log(`Extracted ${paletteColors.length} colors from palette`);

    // Save as JSON array
    const output = JSON.stringify(paletteColors, null, 2);

    fs.writeFile("data/paletteColorData.json", output, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        process.exit(1);
      }
      console.log("Output: data/paletteColorData.json");
    });
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

// Run the extraction
extractPaletteColors(FONT_URL);
