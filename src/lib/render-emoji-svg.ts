/**
 * Pure, platform-agnostic emoji SVG builder. Resolves an emoji unicode id to
 * its original and customized (palette-overridden) SVG, without React or the
 * browser, so it can be reused by the Cloudflare Pages OG image function.
 *
 * Mirrors the on-screen logic in emoji-context / use-emoji-svg: paths come from
 * `data.d`, fills from `data.f` (normalized), and overrides are applied by
 * matching each path's original color to the customized palette.
 *
 * Self-contained on purpose (relative imports, no `@/` alias, inlined helpers)
 * so the Cloudflare Functions bundler can pull it in without app-only config.
 */

import defaultEmojisSVGData from "../data/default-emojis-data.json";
import emojiCategories from "../data/emoji-categories.json";
import activityData from "../data/emoji-category/activity.json";
import flagsData from "../data/emoji-category/flags.json";
import foodsData from "../data/emoji-category/foods.json";
import natureData from "../data/emoji-category/nature.json";
import objectsData from "../data/emoji-category/objects.json";
import peopleData from "../data/emoji-category/people.json";
import placesData from "../data/emoji-category/places.json";
import symbolsData from "../data/emoji-category/symbols.json";
import emojiPaletteData from "../data/emoji-palette-data.json";
import paletteColorDataRaw from "../data/palette-color-data.json";

/** SVG data for a single emoji: path data and matching fill colors. */
interface EmojiSVGData {
  d: string[];
  f: (string | null)[];
}
type EmojiPathsAndColors = Record<string, EmojiSVGData>;
type EmojiCategories = Record<string, string[]>;
type EmojiPaletteData = Record<string, number[]>;

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

const categories = emojiCategories as EmojiCategories;
const paletteIndexMap = emojiPaletteData as EmojiPaletteData;
const paletteData: string[] = (paletteColorDataRaw as string[]).map(
  (c) => `#${c}`
);
const defaultData = defaultEmojisSVGData as unknown as EmojiPathsAndColors;

/**
 * Normalize a color to lowercase 6-digit hex (null -> black, expand 3-digit).
 * Inlined copy of emoji-utils.normalizeColor to keep this file dependency-free.
 */
function normalizeColor(color: string | null): string {
  if (color === null) return "#000000";
  const match = color.match(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/);
  if (match) {
    return `#${match[1]}${match[1]}${match[2]}${match[2]}${match[3]}${match[3]}`.toLowerCase();
  }
  return color.toLowerCase();
}

/**
 * Apply a URL palette override string ("195_f0daa3-824_6e343f") to the original
 * palette, returning the customized colors. Inlined copy of
 * emoji-utils.parsePaletteString.
 */
function parsePaletteString(
  paletteString: string,
  originalPaletteColors: string[],
  originalPaletteIndex: number[]
): string[] {
  const modifiedColors = [...originalPaletteColors];
  for (const pair of paletteString.split("-")) {
    const match = pair.match(/^(\d+)_([A-Fa-f0-9]{6})$/);
    if (match) {
      const idx = originalPaletteIndex.indexOf(parseInt(match[1], 10));
      if (idx !== -1) modifiedColors[idx] = `#${match[2]}`;
    }
  }
  return modifiedColors;
}

/** Resolve an emoji unicode id (e.g. "u1f349") to its raw SVG data. */
function getEmojiData(unicode: string): EmojiSVGData | null {
  if (unicode in defaultData) return defaultData[unicode];
  for (const category in categories) {
    if (categories[category].includes(unicode)) {
      return categoryDataMap[category]?.[unicode] ?? null;
    }
  }
  return null;
}

/** Both SVGs for one emoji: original palette and user-customized palette. */
export interface EmojiPair {
  /** Original emoji inner SVG (just `<path>` elements, viewBox 0 0 36 36). */
  originalInner: string;
  /** Customized emoji inner SVG (just `<path>` elements, viewBox 0 0 36 36). */
  customizedInner: string;
}

/**
 * Build original + customized inner SVG (just the `<path>` elements) for an
 * emoji, or null when the emoji id is unknown.
 *
 * @param unicode - Emoji unicode id, e.g. "u1f349".
 * @param palette - Optional override string, e.g. "195_f0daa3-824_6e343f".
 */
export function buildEmojiPair(
  unicode: string,
  palette?: string
): EmojiPair | null {
  const data = getEmojiData(unicode);
  if (!data) return null;

  const normalizedPalette = data.f.map(normalizeColor);
  const originalInner = data.d
    .map((d, i) => `<path fill="${normalizedPalette[i]}" d="${d}" />`)
    .join("");

  const glyphId = unicode.toLowerCase();
  const originalPaletteIndex = [...new Set(paletteIndexMap[glyphId] ?? [])];
  const originalPaletteColors = originalPaletteIndex.map((i) => paletteData[i]);

  const customizedColors = palette
    ? parsePaletteString(palette, originalPaletteColors, originalPaletteIndex)
    : originalPaletteColors;

  const customizedInner = data.d
    .map((d, i) => {
      const colorIndex = originalPaletteColors.indexOf(normalizedPalette[i]);
      const fill =
        colorIndex !== -1
          ? customizedColors[colorIndex] || normalizedPalette[i]
          : normalizedPalette[i];
      return `<path fill="${fill}" d="${d}" />`;
    })
    .join("");

  return { originalInner, customizedInner };
}
