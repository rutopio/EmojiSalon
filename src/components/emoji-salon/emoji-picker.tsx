/**
 * @fileoverview Frimousse-based emoji picker component for Emoji Salon.
 *
 * This component wraps the frimousse emoji picker library with custom styling
 * to match the Emoji Salon design system.
 *
 * @see https://frimousse.liveblocks.io/
 */

import {
  EmojiPicker as FrimousseEmojiPicker,
  EmojiPickerContent as FrimousseEmojiPickerContent,
  EmojiPickerFooter as FrimousseEmojiPickerFooter,
  EmojiPickerSearch as FrimousseEmojiPickerSearch,
} from "~/components/ui/emoji-picker";

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

export function EmojiPicker({
  onEmojiSelect,
  selectedEmoji,
  selectedEmojiLabel,
}: EmojiPickerProps) {
  return (
    <FrimousseEmojiPicker
      className="h-[326px] rounded-lg border shadow-md"
      selectedEmoji={selectedEmoji}
      selectedEmojiLabel={selectedEmojiLabel}
      onEmojiSelect={({ emoji, label }) => {
        onEmojiSelect(emoji, label);
      }}
    >
      <FrimousseEmojiPickerSearch />
      <FrimousseEmojiPickerContent />
      <FrimousseEmojiPickerFooter />
    </FrimousseEmojiPicker>
  );
}
