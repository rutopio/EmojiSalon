/**
 * @fileoverview Utility functions for Emoji Salon application.
 *
 * This module provides functions for emoji manipulation, color conversion,
 * URL encoding/decoding, and data fetching for the Emoji Salon application.
 *
 * @module emoji-utils
 */

// Category data imports for complete emoji coverage
import defaultEmojisSVGData from "@/data/default-emojis-data.json";
import emojiCategories from "@/data/emoji-categories.json";
import activityData from "@/data/emoji-category/activity.json";
import flagsData from "@/data/emoji-category/flags.json";
import foodsData from "@/data/emoji-category/foods.json";
import natureData from "@/data/emoji-category/nature.json";
import objectsData from "@/data/emoji-category/objects.json";
import peopleData from "@/data/emoji-category/people.json";
import placesData from "@/data/emoji-category/places.json";
import symbolsData from "@/data/emoji-category/symbols.json";
import emojiNames from "@/data/emoji-names.json";
import emojiPaletteData from "@/data/emoji-palette-data.json";
import paletteColorDataRaw from "@/data/palette-color-data.json";
import { DEFAULT_EMOJIS } from "@/lib/constants";

// ============================================================================
// Type Definitions
// ============================================================================

/**
 * SVG data for a single emoji.
 * @typedef {Object} EmojiSVGData
 * @property {string[]} d - Array of SVG path data strings.
 * @property {(string|null)[]} f - Array of fill colors (hex strings or null).
 */
export interface EmojiSVGData {
  d: string[];
  f: (string | null)[];
}

/**
 * Mapping of category names to arrays of emoji unicode identifiers.
 * @typedef {Object.<string, string[]>} EmojiCategories
 */
export interface EmojiCategories {
  [category: string]: string[];
}

/**
 * Mapping of emoji unicode identifiers to arrays of palette color indices.
 * @typedef {Object.<string, number[]>} EmojiPaletteData
 */
export interface EmojiPaletteData {
  [unicode: string]: number[];
}

/**
 * Mapping of emoji unicode identifiers to their SVG data.
 * @typedef {Object.<string, EmojiSVGData>} EmojiPathsAndColors
 */
export interface EmojiPathsAndColors {
  [unicode: string]: EmojiSVGData;
}

// ============================================================================
// Data Initialization
// ============================================================================

/**
 * Map of category names to their emoji data.
 * Used for lazy loading emoji data by category.
 * @type {Record<string, EmojiPathsAndColors>}
 */
const categoryDataMap: Record<string, EmojiPathsAndColors> = {
  activity: activityData as unknown as EmojiPathsAndColors,
  flags: flagsData as unknown as EmojiPathsAndColors,
  foods: foodsData as unknown as EmojiPathsAndColors,
  nature: natureData as unknown as EmojiPathsAndColors,
  objects: objectsData as unknown as EmojiPathsAndColors,
  people: peopleData as unknown as EmojiPathsAndColors,
  places: placesData as unknown as EmojiPathsAndColors,
  symbols: symbolsData as unknown as EmojiPathsAndColors,
};

/**
 * Array of palette colors with '#' prefix.
 * Derived from the raw palette color data.
 * @type {string[]}
 */
export const paletteData: string[] = (paletteColorDataRaw as string[]).map(
  (c) => "#" + c
);

/**
 * Typed emoji categories data.
 * @type {EmojiCategories}
 */
export const emojiCategoriesData = emojiCategories as EmojiCategories;

/**
 * Typed emoji palette data.
 * @type {EmojiPaletteData}
 */
export const emojiPaletteDataTyped = emojiPaletteData as EmojiPaletteData;

/**
 * Mutable object containing loaded emoji path and color data.
 * Initially contains only the default emojis, but can be extended
 * with category data when needed.
 * @type {EmojiPathsAndColors}
 */
export const emojiPathsAndColors =
  defaultEmojisSVGData as unknown as EmojiPathsAndColors;

// ============================================================================
// Color Conversion Functions
// ============================================================================

/**
 * Convert an RGBA color array to a hex color string.
 *
 * @param {number[]} rgbaColorArray - Array of color components [R, G, B, A?].
 *   Values should be in the range 0-255.
 * @returns {string} Hex color string with '#' prefix (e.g., "#ff0000").
 *
 * @example
 * rgbaToHexColor([255, 0, 0, 255]); // Returns "#ff0000"
 * rgbaToHexColor([0, 128, 255]);    // Returns "#0080ff"
 */
export function rgbaToHexColor(rgbaColorArray: number[]): string {
  return (
    "#" +
    rgbaColorArray
      .slice(0, 3)
      .map((ele) => ele.toString(16))
      .map((ele) => (ele.length === 1 ? "0" + ele : ele))
      .join("")
  );
}

/**
 * Normalize a color string to lowercase 6-digit hex format.
 *
 * Handles:
 * - Null values (returns "#000000")
 * - 3-digit hex colors (expands to 6-digit)
 * - Case normalization
 *
 * @param {string|null} color - The color to normalize.
 * @returns {string} Normalized hex color string.
 *
 * @example
 * normalizeColor(null);      // Returns "#000000"
 * normalizeColor("#FFF");    // Returns "#ffffff"
 * normalizeColor("#FF0000"); // Returns "#ff0000"
 */
export function normalizeColor(color: string | null): string {
  if (color === null) return "#000000";
  // Expand 3-digit hex to 6-digit
  const match = color.match(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/);
  if (match) {
    return `#${match[1]}${match[1]}${match[2]}${match[2]}${match[3]}${match[3]}`.toLowerCase();
  }
  return color.toLowerCase();
}

/**
 * Check if two color strings are equal.
 *
 * @param {string} color1 - First color to compare.
 * @param {string} color2 - Second color to compare.
 * @returns {boolean} True if the colors are identical.
 */
export function areColorsEqual(color1: string, color2: string): boolean {
  return color1 === color2;
}

/**
 * Generate a random hex color.
 *
 * @returns {string} Random hex color string with '#' prefix.
 *
 * @example
 * getRandomColor(); // Returns something like "#a3f21b"
 */
export function getRandomColor(): string {
  const minVal = 0;
  const maxVal = 255;
  const r = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
  const g = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
  const b = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
  return rgbaToHexColor([r, g, b, 255]);
}

// ============================================================================
// Emoji Conversion Functions
// ============================================================================

/**
 * Convert an emoji character to its unicode identifier.
 *
 * This function handles:
 * - Basic emojis (single code point)
 * - Compound emojis with ZWJ (Zero Width Joiner)
 * - Emojis with variation selectors (FE0F/FE0E are removed for simple emojis)
 *
 * @param {string} emoji - The emoji character(s) to convert.
 * @returns {string} Unicode identifier in the format "u{codepoint}" or "u{cp1}_{cp2}".
 *
 * @example
 * emojiToUnicode("😀");    // Returns "u1f600"
 * emojiToUnicode("👨‍👩‍👧"); // Returns "u1f468_200d_1f469_200d_1f467"
 */
export function emojiToUnicode(emoji: string): string {
  const res: string[] = [];
  const components = [...emoji];

  components.forEach((ele) => {
    if (ele.length === 1) {
      // Single byte character (ZWJ or emoji modifier)
      res.push(ele.charCodeAt(0).toString(16));
    } else if (ele.length === 2) {
      // Surrogate pair - calculate actual code point
      const comp =
        (ele.charCodeAt(0) - 0xd800) * 0x400 +
        (ele.charCodeAt(1) - 0xdc00) +
        0x10000;
      res.push(comp.toString(16));
    }
  });

  // Remove trailing variation selector (FE0F or FE0E) for simple emojis
  if (res.length === 2) {
    if (res[res.length - 1] === "fe0f" || res[res.length - 1] === "fe0e") {
      res.pop();
    }
  }

  return `u${res.join("_")}`;
}

/**
 * Convert a unicode identifier back to an emoji character.
 *
 * @param {string} urlCode - Unicode identifier (e.g., "u1f600").
 * @returns {string|null} The emoji character, or null if invalid.
 *
 * @example
 * unicodeToEmoji("u1f600"); // Returns "😀"
 * unicodeToEmoji("invalid"); // Returns null
 */
export function unicodeToEmoji(urlCode: string): string | null {
  try {
    const fin: string[] = [];
    const codes = urlCode.replace("u", "").split("_");

    codes.forEach((code) => {
      const intCodePoint = parseInt(code, 16);
      const character = String.fromCodePoint(intCodePoint);
      fin.push(character);
    });

    const character = fin.join("");
    const emojisRegex =
      /^(\p{Extended_Pictographic}|\p{Emoji_Component}|\p{Emoji})+$/u;

    if (emojisRegex.test(character)) {
      return character;
    }
    return null;
  } catch {
    return null;
  }
}

// ============================================================================
// URL Encoding/Decoding Functions
// ============================================================================

/**
 * Encode a palette override string for URL storage.
 *
 * This function compresses the palette information by:
 * - Removing spaces
 * - Replacing '#' with '('
 * - Replacing ',' with ')'
 *
 * @param {string} str - The palette override string to encode.
 * @returns {string} URL-safe encoded string.
 *
 * @example
 * encodeURL("3 #ff0000, 5 #00ff00"); // Returns "3(ff0000)5(00ff00)"
 */
export function encodeURL(str: string): string {
  return (
    str.replaceAll(" ", "").replaceAll("#", "(").replaceAll(",", ")") + ")"
  );
}

/**
 * Decode a URL-encoded palette override string.
 *
 * Reverses the encoding performed by encodeURL().
 *
 * @param {string} str - The encoded string to decode.
 * @returns {string} Decoded palette override string.
 *
 * @example
 * decodeURL("3(ff0000)5(00ff00)"); // Returns "3 #ff0000, 5 #00ff00"
 */
export function decodeURL(str: string): string {
  return str
    .substring(0, str.length - 1)
    .replaceAll(")", ", ")
    .replaceAll("(", " #");
}

// ============================================================================
// Emoji Data Functions
// ============================================================================

/**
 * Find the category that contains a given emoji.
 *
 * @param {string} unicode - The emoji unicode identifier.
 * @returns {string|null} Category name if found, null otherwise.
 *
 * @example
 * findEmojiCategory("u1f600"); // Returns "people"
 * findEmojiCategory("u1f355"); // Returns "foods"
 */
export function findEmojiCategory(unicode: string): string | null {
  for (const category in emojiCategoriesData) {
    if (emojiCategoriesData[category].includes(unicode)) {
      return category;
    }
  }
  return null;
}

/**
 * Fetch SVG data for an emoji.
 *
 * This function first checks the default emojis cache, then looks up
 * the emoji's category and loads the category data if needed.
 * All data is loaded from local files bundled with the application.
 *
 * @param {string} emoji - The emoji character to fetch data for.
 * @returns {Promise<EmojiSVGData|null>} The emoji's SVG data, or null if not found.
 *
 * @example
 * const data = await fetchEmojiData("😀");
 * // data.d contains path data array
 * // data.f contains fill colors array
 */
export async function fetchEmojiData(
  emoji: string
): Promise<EmojiSVGData | null> {
  const unicode = emojiToUnicode(emoji);

  // Check if already in the loaded data
  if (unicode in emojiPathsAndColors) {
    return emojiPathsAndColors[unicode];
  }

  // Find the category and load its data
  const category = findEmojiCategory(unicode);
  if (category === null) {
    console.warn(`No category found for emoji: ${emoji} (${unicode})`);
    return null;
  }

  // Load category data into the cache
  const categoryData = categoryDataMap[category];
  if (categoryData) {
    Object.assign(emojiPathsAndColors, categoryData);
    return emojiPathsAndColors[unicode] || null;
  }

  return null;
}

/**
 * Get the original palette indices and colors for an emoji.
 *
 * @param {string} glyphId - The emoji unicode identifier.
 * @returns {{originalPaletteIndex: number[], originalPaletteColors: string[]}}
 *   Object containing unique palette indices and their corresponding colors.
 *
 * @example
 * const { originalPaletteIndex, originalPaletteColors } = getOriginalPaletteData("u1f600");
 * // originalPaletteIndex: [3, 5, 12, ...]
 * // originalPaletteColors: ["#ffcc4d", "#664500", ...]
 */
export function getOriginalPaletteData(glyphId: string): {
  originalPaletteIndex: number[];
  originalPaletteColors: string[];
} {
  const paletteIndices = emojiPaletteDataTyped[glyphId] || [];
  const originalPaletteIndex = [...new Set(paletteIndices)];
  const originalPaletteColors = originalPaletteIndex.map(
    (index) => paletteData[index]
  );
  return { originalPaletteIndex, originalPaletteColors };
}

/**
 * Generate a string representing color overrides for URL encoding.
 *
 * Only includes colors that differ from the original palette.
 * Format: "195_f0daa3-824_6e343f" where each pair is "index_hexcolor".
 * Uses underscore instead of parentheses to avoid URL encoding.
 * All hex values are lowercase for URL consistency.
 *
 * @param {string[]} customizedPaletteColors - Array of customized colors.
 * @param {string[]} originalPaletteColors - Array of original colors.
 * @param {number[]} originalPaletteIndex - Array of palette indices.
 * @returns {string} Override string in format "index_hexcolor-index_hexcolor".
 *
 * @example
 * getOverrideStyleString(
 *   ["#ff0000", "#00ff00"],
 *   ["#ffcc4d", "#00ff00"],
 *   [3, 5]
 * ); // Returns "3_ff0000" (only includes changed colors)
 */
export function getOverrideStyleString(
  customizedPaletteColors: string[],
  originalPaletteColors: string[],
  originalPaletteIndex: number[]
): string {
  return customizedPaletteColors
    .map((color, idx) => {
      // Remove # prefix and convert to lowercase
      const hexColor = color.replace("#", "").toLowerCase();
      return `${originalPaletteIndex[idx]}_${hexColor}`;
    })
    .filter(
      (_, idx) =>
        !areColorsEqual(
          customizedPaletteColors[idx],
          originalPaletteColors[idx]
        )
    )
    .join("-");
}

/**
 * Parse a palette string from URL format back into color modifications.
 *
 * Expected format: "195_f0daa3-824_6e343f" (case-insensitive).
 *
 * @param {string} paletteString - The palette string from URL.
 * @param {string[]} originalPaletteColors - Array of original hex color values.
 * @param {number[]} originalPaletteIndex - Array of palette indices.
 * @returns {string[]} Array of colors with modifications applied.
 *
 * @example
 * parsePaletteString(
 *   "195_f0daa3-824_6e343f",
 *   ["#ffcc4d", "#f4900c"],
 *   [195, 824]
 * ); // Returns ["#f0daa3", "#6e343f"]
 */
export function parsePaletteString(
  paletteString: string,
  originalPaletteColors: string[],
  originalPaletteIndex: number[]
): string[] {
  const modifiedColors = [...originalPaletteColors];

  // Parse format: "195_F0DAA3-824_6E343F"
  const pairs = paletteString.split("-");
  pairs.forEach((pair) => {
    const match = pair.match(/^(\d+)_([A-Fa-f0-9]{6})$/);
    if (match) {
      const colorIdx = parseInt(match[1]);
      const hexColor = "#" + match[2];
      const idx = originalPaletteIndex.indexOf(colorIdx);
      if (idx !== -1) {
        modifiedColors[idx] = hexColor;
      }
    }
  });

  return modifiedColors;
}

// ============================================================================
// Random Selection Functions
// ============================================================================

// Re-export from constants for backward compatibility
export { DEFAULT_EMOJIS as defaultEmojis } from "@/lib/constants";

/**
 * Get the label/name for an emoji character.
 *
 * @param {string} emoji - The emoji character.
 * @returns {string} The emoji label/name, or empty string if not found.
 *
 * @example
 * getEmojiLabel("😀"); // Returns "Grinning Face"
 * getEmojiLabel("🦄"); // Returns "Unicorn"
 */
export function getEmojiLabel(emoji: string): string {
  return (emojiNames as Record<string, string>)[emoji] || "";
}

/**
 * Get a random emoji from the default emoji list.
 *
 * @returns {string} A random emoji character.
 *
 * @example
 * getRandomEmoji(); // Returns a random emoji like "😀" or "🦄"
 */
export function getRandomEmoji(): string {
  const randomIndex = Math.floor(Math.random() * DEFAULT_EMOJIS.length);
  return DEFAULT_EMOJIS[randomIndex];
}

/**
 * Get a random emoji with its label from the default emoji list.
 *
 * @returns {{ emoji: string, label: string }} A random emoji with its label.
 *
 * @example
 * getRandomEmojiWithLabel(); // Returns { emoji: "😀", label: "Grinning Face" }
 */
export function getRandomEmojiWithLabel(): { emoji: string; label: string } {
  const emoji = getRandomEmoji();
  const label = getEmojiLabel(emoji);
  return { emoji, label };
}

// ============================================================================
// Download Functions
// ============================================================================

/**
 * Trigger a file download in the browser.
 *
 * Creates a temporary anchor element to initiate the download.
 *
 * @param {string} uri - The data URI or blob URL of the file.
 * @param {string} fileName - The name for the downloaded file.
 *
 * @example
 * triggerDownload("data:image/png;base64,...", "emoji.png");
 * triggerDownload(blobUrl, "emoji-salon.svg");
 */
export function triggerDownload(uri: string, fileName: string): void {
  const a = document.createElement("a");
  a.setAttribute("download", fileName);
  a.setAttribute("href", uri);
  a.setAttribute("target", "_blank");
  a.click();
}
