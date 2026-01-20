/**
 * @fileoverview Emoji-mart based emoji picker component for Emoji Salon.
 *
 * This component wraps the emoji-mart library with custom styling
 * to match the Emoji Salon design system.
 *
 * @see https://github.com/missive/emoji-mart
 */

import { useTheme } from "@/components/theme-provider";
import { useEmoji } from "@/contexts/emoji-context";
import data from "@emoji-mart/data/sets/15/twitter.json";
import EmojiMartPicker from "@emoji-mart/react";

/**
 * Props for the EmojiPicker component.
 */
interface EmojiPickerProps {
  /**
   * Callback invoked when an emoji is selected.
   * @param emoji - The selected emoji character.
   * @param label - The label/name of the emoji.
   */
  onEmojiSelect: (emoji: string, label: string) => void;
}

interface EmojiMartEmoji {
  id: string;
  name: string;
  native: string;
  unified: string;
  keywords: string[];
  shortcodes: string;
  emoticons?: string[];
}

export function EmojiPicker({ onEmojiSelect }: EmojiPickerProps) {
  const handleEmojiSelect = (emoji: EmojiMartEmoji) => {
    onEmojiSelect(emoji.native, emoji.name);
  };
  const { theme } = useTheme();

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
 * Desktop emoji picker that uses useEmojiActions hook internally.
 * Shown only on large screens.
 */
export default function DesktopEmojiPicker() {
  const { handleEmojiSelect } = useEmoji();

  return (
    <div className="hidden lg:block">
      <EmojiPicker onEmojiSelect={handleEmojiSelect} />
    </div>
  );
}
