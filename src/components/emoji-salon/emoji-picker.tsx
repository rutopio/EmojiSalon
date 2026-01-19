/**
 * @fileoverview Emoji-mart based emoji picker component for Emoji Salon.
 *
 * This component wraps the emoji-mart library with custom styling
 * to match the Emoji Salon design system.
 *
 * @see https://github.com/missive/emoji-mart
 */

import { useSyncExternalStore } from "react";
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
  /**
   * The currently selected emoji to highlight.
   */
  selectedEmoji?: string;
  /**
   * The label of the currently selected emoji.
   */
  selectedEmojiLabel?: string;
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

// Hook to check if we're on the client
function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function EmojiPicker({ onEmojiSelect }: EmojiPickerProps) {
  const isClient = useIsClient();

  const handleEmojiSelect = (emoji: EmojiMartEmoji) => {
    onEmojiSelect(emoji.native, emoji.name);
  };

  // Avoid SSR issues - only render on client
  if (!isClient) {
    return (
      <div className="emoji-mart-container">
        <div className="h-[435px] w-[352px] animate-pulse rounded-lg bg-neutral-100" />
      </div>
    );
  }

  return (
    <div className="emoji-mart-container w-full">
      <EmojiMartPicker
        data={data}
        onEmojiSelect={handleEmojiSelect}
        set="twitter"
        emojiSize={32}
        perLine={8}
        theme="light"
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
