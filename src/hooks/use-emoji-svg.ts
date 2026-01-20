/**
 * @fileoverview Hooks for generating emoji SVG independently from EmojiContext.
 * Used in Showcase page where multiple emojis need to be rendered simultaneously.
 * These hooks allow loading and rendering emoji variants without using the global context.
 */

import { useEffect, useState } from "react";

import {
  fetchEmojiData,
  getEmojiLabel,
  getOriginalPaletteData,
  normalizeColor,
  parsePaletteString,
  unicodeToEmoji,
} from "@/lib/emoji-utils";

/**
 * Return type for useEmojiSVG hook.
 */
interface UseEmojiSVGResult {
  /** SVG HTML for the original emoji. */
  originalSvg: string;
  /** SVG HTML for the modified emoji with custom palette. */
  modifiedSvg: string;
  /** Display name/label for the emoji. */
  originalName: string;
  /** Whether the emoji data is currently loading. */
  isLoading: boolean;
  /** Array of customized palette colors. */
  customizedPaletteColors: string[];
  /** Array of original palette colors. */
  originalPaletteColors: string[];
  /** Array of indices mapping to original palette colors. */
  originalPaletteIndex: number[];
}

/**
 * Hook for generating SVG HTML for an emoji with optional palette modifications.
 * Loads emoji data and generates both original and modified SVG versions.
 *
 * @param unicode - Emoji unicode identifier (e.g., "u1f349").
 * @param palette - Optional palette override string (e.g., "674_210390-649_247792").
 * @returns Object containing original SVG, modified SVG, and loading state.
 */
export function useEmojiSVG(
  unicode: string,
  palette?: string
): UseEmojiSVGResult {
  const [originalSvg, setOriginalSvg] = useState("");
  const [modifiedSvg, setModifiedSvg] = useState("");
  const [originalName, setOriginalName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [customizedPaletteColors, setCustomizedPaletteColors] = useState<
    string[]
  >([]);
  const [originalPaletteColors, setOriginalPaletteColors] = useState<string[]>(
    []
  );
  const [originalPaletteIndex, setOriginalPaletteIndex] = useState<number[]>(
    []
  );

  useEffect(() => {
    let cancelled = false;

    async function loadEmoji() {
      setIsLoading(true);

      const emoji = unicodeToEmoji(unicode);
      if (!emoji) {
        setIsLoading(false);
        return;
      }

      const label = getEmojiLabel(emoji);
      const data = await fetchEmojiData(emoji);

      if (cancelled || !data) {
        setIsLoading(false);
        return;
      }

      const normalizedPalette = data.f.map(normalizeColor);
      const glyphId = unicode.toLowerCase();
      const { originalPaletteIndex: opIndex, originalPaletteColors: opColors } =
        getOriginalPaletteData(glyphId);

      // Generate original SVG with original palette colors
      const originalPaths = data.d.map((d, index) => {
        return `<path fill="${normalizedPalette[index]}" d="${d}" />`;
      });
      const originalSvgHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">${originalPaths.join("")}</svg>`;

      // Generate modified SVG with customized colors
      let customizedColors = [...opColors];
      if (palette) {
        customizedColors = parsePaletteString(palette, opColors, opIndex);
      }

      const modifiedPaths = data.d.map((d, index) => {
        const colorIndex = opColors.indexOf(normalizedPalette[index]);
        const fillColor =
          colorIndex !== -1
            ? customizedColors[colorIndex] || normalizedPalette[index]
            : normalizedPalette[index];
        return `<path fill="${fillColor}" d="${d}" />`;
      });
      const modifiedSvgHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">${modifiedPaths.join("")}</svg>`;

      setOriginalName(label);
      setOriginalSvg(originalSvgHtml);
      setModifiedSvg(modifiedSvgHtml);
      setCustomizedPaletteColors(customizedColors);
      setOriginalPaletteColors(opColors);
      setOriginalPaletteIndex(opIndex);
      setIsLoading(false);
    }

    loadEmoji();

    return () => {
      cancelled = true;
    };
  }, [unicode, palette]);

  return {
    originalSvg,
    modifiedSvg,
    originalName,
    isLoading,
    customizedPaletteColors,
    originalPaletteColors,
    originalPaletteIndex,
  };
}

/**
 * Return type for useVariantSVG hook.
 */
interface UseVariantSVGResult {
  /** SVG HTML for the variant emoji. */
  svg: string;
  /** Whether the emoji data is currently loading. */
  isLoading: boolean;
}

/**
 * Hook for generating only the modified SVG for a single variant.
 * Used when rendering multiple variants of the same emoji in showcase.
 * More efficient than useEmojiSVG when only the modified version is needed.
 *
 * @param unicode - Emoji unicode identifier (e.g., "u1f349").
 * @param palette - Palette override string (e.g., "674_210390-649_247792").
 * @returns Object containing variant SVG and loading state.
 */
export function useVariantSVG(
  unicode: string,
  palette: string
): UseVariantSVGResult {
  const [svg, setSvg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadVariant() {
      setIsLoading(true);

      const emoji = unicodeToEmoji(unicode);
      if (!emoji) {
        setIsLoading(false);
        return;
      }

      const data = await fetchEmojiData(emoji);
      if (cancelled || !data) {
        setIsLoading(false);
        return;
      }

      const normalizedPalette = data.f.map(normalizeColor);
      const glyphId = unicode.toLowerCase();
      const { originalPaletteIndex, originalPaletteColors } =
        getOriginalPaletteData(glyphId);

      const customizedColors = parsePaletteString(
        palette,
        originalPaletteColors,
        originalPaletteIndex
      );

      const paths = data.d.map((d, index) => {
        const colorIndex = originalPaletteColors.indexOf(
          normalizedPalette[index]
        );
        const fillColor =
          colorIndex !== -1
            ? customizedColors[colorIndex] || normalizedPalette[index]
            : normalizedPalette[index];
        return `<path fill="${fillColor}" d="${d}" />`;
      });

      setSvg(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">${paths.join("")}</svg>`
      );
      setIsLoading(false);
    }

    loadVariant();

    return () => {
      cancelled = true;
    };
  }, [unicode, palette]);

  return { svg, isLoading };
}
