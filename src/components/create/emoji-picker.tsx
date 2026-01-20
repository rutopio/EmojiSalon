/**
 * @fileoverview Emoji picker component using emoji-mart library.
 * Provides an emoji selection interface with custom styling to match
 * the EmojiSalon design system.
 *
 * @see https://github.com/missive/emoji-mart
 */

import { useEmoji } from "@/contexts/emoji-context";
import data from "@emoji-mart/data/sets/15/twitter.json";
import EmojiMartPicker from "@emoji-mart/react";

import { useTheme } from "@/components/theme-provider";

/**
 * Props for the EmojiPicker component.
 */
interface EmojiPickerProps {
  /**
   * Callback invoked when an emoji is selected.
   *
   * @param emoji - The selected emoji character.
   * @param label - The label/name of the emoji.
   */
  onEmojiSelect: (emoji: string, label: string) => void;
}

/**
 * Emoji data structure from emoji-mart library.
 */
interface EmojiMartEmoji {
  id: string;
  name: string;
  native: string;
  unified: string;
  keywords: string[];
  shortcodes: string;
  emoticons?: string[];
}

/**
 * Emoji picker component that wraps emoji-mart library.
 * Displays an emoji selection interface with categories and search.
 *
 * @param props - Component props.
 * @returns Emoji picker UI component.
 */
export function EmojiPicker({ onEmojiSelect }: EmojiPickerProps) {
  const { theme } = useTheme();

  /**
   * Handles emoji selection from emoji-mart picker.
   *
   * @param emoji - The selected emoji data from emoji-mart.
   */
  const handleEmojiSelect = (emoji: EmojiMartEmoji) => {
    onEmojiSelect(emoji.native, emoji.name);
  };

  return (
    <div className="emoji-mart-container w-full">
      <EmojiMartPicker
        data={data}
        onEmojiSelect={handleEmojiSelect}
        set="twitter"
        emojiSize={28}
        perLine={8}
        theme={theme === "dark" ? "dark" : "light"}
        maxFrequentRows={1}
        skinTonePosition="none"
        exceptEmojis={[
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "zero",
          "keycap_star",
          "hash",
          "copyright",
          "registered",
        ]}
      />
    </div>
  );
}

/**
 * Desktop emoji picker component.
 * Wraps the EmojiPicker component and is only visible on large screens.
 * Uses the emoji context for handling emoji selection.
 *
 * @returns Desktop emoji picker component (hidden on mobile).
 */
export default function DesktopEmojiPicker() {
  const { handleEmojiSelect } = useEmoji();

  return (
    <div className="hidden lg:block">
      <EmojiPicker onEmojiSelect={handleEmojiSelect} />
    </div>
  );
}
