/**
 * @fileoverview Frimousse-based emoji picker component for Emoji Salon.
 *
 * This component wraps the frimousse emoji picker library with custom styling
 * to match the Emoji Salon design system.
 *
 * @see https://frimousse.liveblocks.io/
 */

import { EmojiPicker } from "frimousse";

/**
 * Props for the FrimousseEmojiPicker component.
 */
interface FrimousseEmojiPickerProps {
  /**
   * Callback invoked when an emoji is selected.
   * @param emoji - The selected emoji character.
   */
  onEmojiSelect: (emoji: string) => void;
}

/**
 * A styled emoji picker component using the frimousse library.
 *
 * Features:
 * - Search functionality
 * - Category navigation
 * - Loading and empty states
 * - Responsive design
 *
 * @example
 * ```tsx
 * <FrimousseEmojiPicker onEmojiSelect={(emoji) => console.log(emoji)} />
 * ```
 */
export function FrimousseEmojiPicker({
  onEmojiSelect,
}: FrimousseEmojiPickerProps) {
  return (
    <EmojiPicker.Root
      onEmojiSelect={(emoji) => onEmojiSelect(emoji.emoji)}
      columns={8}
      className="isolate flex h-[368px] w-fit flex-col rounded-xl border border-gray-200 bg-white shadow-lg"
    >
      <EmojiPicker.Search
        placeholder="Search emoji..."
        className="mx-2 mt-2 h-9 rounded-md border border-gray-200 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <EmojiPicker.Viewport className="relative flex-1 overflow-y-auto overflow-x-hidden px-2 py-1">
        <EmojiPicker.Loading className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
          Loading...
        </EmojiPicker.Loading>
        <EmojiPicker.Empty className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
          No emoji found
        </EmojiPicker.Empty>
        <EmojiPicker.List
          components={{
            CategoryHeader: ({ category, ...props }) => (
              <div
                className="bg-white px-1 py-2 text-xs font-medium text-gray-500"
                {...props}
              >
                {category.label}
              </div>
            ),
            Row: ({ children, ...props }) => (
              <div className="flex" {...props}>
                {children}
              </div>
            ),
            Emoji: ({ emoji, ...props }) => (
              <button
                className="flex size-9 items-center justify-center rounded-md text-xl hover:bg-gray-100 data-[active]:bg-blue-100"
                {...props}
              >
                {emoji.emoji}
              </button>
            ),
          }}
        />
      </EmojiPicker.Viewport>
    </EmojiPicker.Root>
  );
}

