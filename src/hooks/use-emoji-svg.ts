/**
 * Hook for generating emoji SVG independently from EmojiContext.
 * Used in Showcase page where multiple emojis need to be rendered simultaneously.
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

interface UseEmojiSVGResult {
  originalSvg: string;
  modifiedSvg: string;
  originalName: string;
  isLoading: boolean;
  customizedPaletteColors: string[];
  originalPaletteColors: string[];
  originalPaletteIndex: number[];
}

/**
 * Generate SVG HTML for an emoji with optional palette modifications.
 *
 * @param unicode - Emoji unicode identifier (e.g., "u1f349")
 * @param palette - Optional palette override string (e.g., "674_210390-649_247792")
 * @returns Object containing original SVG, modified SVG, and loading state
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

      // Generate original SVG
      const originalPaths = data.d.map((d, index) => {
        return `<path fill="${normalizedPalette[index]}" d="${d}" />`;
      });
      const originalSvgHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">${originalPaths.join("")}</svg>`;

      // Generate modified SVG
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
 * Generate only the modified SVG for a single variant.
 * Used when rendering multiple variants of the same emoji.
 */
export function useVariantSVG(
  unicode: string,
  palette: string
): { svg: string; isLoading: boolean } {
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
