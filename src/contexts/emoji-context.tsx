/**
 * @fileoverview Emoji Context Provider for sharing emoji state across components.
 *
 * This context provides the current emoji and customized palette colors
 * that are used throughout the application.
 */

import { createContext, use, useState, useCallback } from "react";

interface EmojiContextValue {
  /** The currently selected emoji character. */
  currentEmoji: string;
  /** Set the current emoji. */
  setCurrentEmoji: (emoji: string) => void;
  /** The label/name of the current emoji. */
  currentEmojiLabel: string;
  /** Set the current emoji label. */
  setCurrentEmojiLabel: (label: string) => void;
  /** Array of customized palette colors (hex strings). */
  customizedPaletteColors: string[];
  /** Set the customized palette colors. */
  setCustomizedPaletteColors: React.Dispatch<React.SetStateAction<string[]>>;
  /** Update a single color in the palette by index. */
  updatePaletteColor: (index: number, color: string) => void;
}

const EmojiContext = createContext<EmojiContextValue | null>(null);

interface EmojiProviderProps {
  children: React.ReactNode;
}

/**
 * Provider component for emoji-related state.
 */
export function EmojiProvider({ children }: EmojiProviderProps) {
  const [currentEmoji, setCurrentEmoji] = useState<string>("");
  const [currentEmojiLabel, setCurrentEmojiLabel] = useState<string>("");
  const [customizedPaletteColors, setCustomizedPaletteColors] = useState<
    string[]
  >([]);

  const updatePaletteColor = useCallback((index: number, color: string) => {
    setCustomizedPaletteColors((prev) => {
      const newColors = [...prev];
      newColors[index] = color;
      return newColors;
    });
  }, []);

  const value: EmojiContextValue = {
    currentEmoji,
    setCurrentEmoji,
    currentEmojiLabel,
    setCurrentEmojiLabel,
    customizedPaletteColors,
    setCustomizedPaletteColors,
    updatePaletteColor,
  };

  return <EmojiContext value={value}>{children}</EmojiContext>;
}

/**
 * Hook to access the emoji context.
 * @throws Error if used outside of EmojiProvider.
 */
export function useEmoji(): EmojiContextValue {
  const context = use(EmojiContext);
  if (!context) {
    throw new Error("useEmoji must be used within an EmojiProvider");
  }
  return context;
}

