"use client";

import { createContext, use } from "react";
import { CircleNotchIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { EmojiPicker as EmojiPickerPrimitive } from "frimousse";

import { cn } from "~/lib/utils";

import type {
  EmojiPickerListCategoryHeaderProps,
  EmojiPickerListEmojiProps,
  EmojiPickerListRowProps,
} from "frimousse";
import type * as React from "react";

// Context for selected emoji
interface SelectedEmojiData {
  emoji: string;
  label?: string;
}
const SelectedEmojiContext = createContext<SelectedEmojiData | undefined>(
  undefined
);

interface EmojiPickerProps extends React.ComponentProps<
  typeof EmojiPickerPrimitive.Root
> {
  /**
   * The currently selected emoji to highlight
   */
  selectedEmoji?: string;
  /**
   * The label of the currently selected emoji
   */
  selectedEmojiLabel?: string;
}

function EmojiPicker({
  className,
  selectedEmoji,
  selectedEmojiLabel,
  ...props
}: EmojiPickerProps) {
  const selectedData = selectedEmoji
    ? { emoji: selectedEmoji, label: selectedEmojiLabel }
    : undefined;

  return (
    <SelectedEmojiContext value={selectedData}>
      <EmojiPickerPrimitive.Root
        className={cn(
          "bg-popover text-popover-foreground isolate flex h-full w-fit flex-col overflow-hidden rounded-md",
          className
        )}
        data-slot="emoji-picker"
        {...props}
      />
    </SelectedEmojiContext>
  );
}

function EmojiPickerSearch({
  className,
  ...props
}: React.ComponentProps<typeof EmojiPickerPrimitive.Search>) {
  return (
    <div
      className={cn("flex h-9 items-center gap-2 border-b px-3", className)}
      data-slot="emoji-picker-search-wrapper"
    >
      <MagnifyingGlassIcon className="size-4 shrink-0 opacity-50" />
      <EmojiPickerPrimitive.Search
        className="placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
        data-slot="emoji-picker-search"
        {...props}
      />
    </div>
  );
}

function EmojiPickerRow({ children, ...props }: EmojiPickerListRowProps) {
  return (
    <div {...props} className="scroll-my-1 px-1" data-slot="emoji-picker-row">
      {children}
    </div>
  );
}

function EmojiPickerEmoji({
  emoji,
  className,
  ...props
}: EmojiPickerListEmojiProps) {
  const selectedData = use(SelectedEmojiContext);
  const isSelected = selectedData?.emoji === emoji.emoji;

  return (
    <button
      {...props}
      className={cn(
        "hover:bg-accent/50 data-active:bg-accent flex size-7 items-center justify-center rounded-sm text-base",
        isSelected && "bg-accent ring-primary ring-2 ring-offset-1",
        className
      )}
      style={{ fontFamily: '"Twemoji Mozilla"' }}
      data-slot="emoji-picker-emoji"
      data-selected={isSelected || undefined}
    >
      {emoji.emoji}
    </button>
  );
}

function EmojiPickerCategoryHeader({
  category,
  ...props
}: EmojiPickerListCategoryHeaderProps) {
  return (
    <div
      {...props}
      className="bg-popover text-muted-foreground px-3 pt-3.5 pb-2 text-xs leading-none"
      data-slot="emoji-picker-category-header"
    >
      {category.label}
    </div>
  );
}

function EmojiPickerContent({
  className,
  ...props
}: React.ComponentProps<typeof EmojiPickerPrimitive.Viewport>) {
  return (
    <EmojiPickerPrimitive.Viewport
      className={cn("relative flex-1 outline-hidden", className)}
      data-slot="emoji-picker-viewport"
      {...props}
    >
      <EmojiPickerPrimitive.Loading
        className="text-muted-foreground absolute inset-0 flex items-center justify-center"
        data-slot="emoji-picker-loading"
      >
        <CircleNotchIcon className="size-4 animate-spin" />
      </EmojiPickerPrimitive.Loading>
      <EmojiPickerPrimitive.Empty
        className="text-muted-foreground absolute inset-0 flex items-center justify-center text-sm"
        data-slot="emoji-picker-empty"
      >
        No emoji found.
      </EmojiPickerPrimitive.Empty>
      <EmojiPickerPrimitive.List
        className="pb-1 select-none"
        components={{
          Row: EmojiPickerRow,
          Emoji: EmojiPickerEmoji,
          CategoryHeader: EmojiPickerCategoryHeader,
        }}
        data-slot="emoji-picker-list"
      />
    </EmojiPickerPrimitive.Viewport>
  );
}

function EmojiPickerFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const selectedData = use(SelectedEmojiContext);

  return (
    <div
      className={cn(
        "flex w-full max-w-(--frimousse-viewport-width) min-w-0 items-center gap-1 border-t p-2",
        className
      )}
      data-slot="emoji-picker-footer"
      {...props}
    >
      <EmojiPickerPrimitive.ActiveEmoji>
        {({ emoji }) =>
          emoji ? (
            <>
              <div
                className="flex size-7 flex-none items-center justify-center text-lg"
                style={{ fontFamily: '"Twemoji Mozilla"' }}
              >
                {emoji.emoji}
              </div>
              <span className="text-secondary-foreground truncate text-xs">
                {emoji.label}
              </span>
            </>
          ) : selectedData ? (
            <>
              <div
                className="flex size-7 flex-none items-center justify-center text-lg"
                style={{ fontFamily: '"Twemoji Mozilla"' }}
              >
                {selectedData.emoji}
              </div>
              {selectedData.label && (
                <span className="text-secondary-foreground truncate text-xs">
                  {selectedData.label}
                </span>
              )}
            </>
          ) : (
            <span className="text-muted-foreground ml-1.5 flex h-7 items-center truncate text-xs">
              Select an emoji…
            </span>
          )
        }
      </EmojiPickerPrimitive.ActiveEmoji>
    </div>
  );
}

export {
  EmojiPicker,
  EmojiPickerSearch,
  EmojiPickerContent,
  EmojiPickerFooter,
};
