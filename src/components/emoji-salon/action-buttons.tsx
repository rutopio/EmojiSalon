import {
  ArrowCounterClockwiseIcon,
  DiceFiveIcon,
  DownloadSimpleIcon,
  ImageIcon,
  PaletteIcon,
  ShareNetworkIcon,
  SmileyWinkIcon,
} from "@phosphor-icons/react";

import { Button } from "~/components/ui/button";
import {
  EmojiPicker,
  EmojiPickerContent,
  EmojiPickerSearch,
} from "~/components/ui/emoji-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";

interface ActionButtonsProps {
  onRandomEmoji: () => void;
  onRandomColors: () => void;
  onReset: () => void;
  onDownloadImage: () => void;
  onCopyImage: () => void;
  onShare: () => void;
  onEmojiSelect?: (emoji: string) => void;
  emojiPickerOpen?: boolean;
  onEmojiPickerOpenChange?: (open: boolean) => void;
  variant?: "desktop" | "mobile";
}

export function ActionButtons({
  onRandomEmoji,
  onRandomColors,
  onReset,
  onDownloadImage,
  onCopyImage,
  onShare,
  onEmojiSelect,
  emojiPickerOpen,
  onEmojiPickerOpenChange,
  variant = "desktop",
}: ActionButtonsProps) {
  const handleEmojiSelect = (emoji: string) => {
    onEmojiSelect?.(emoji);
    onEmojiPickerOpenChange?.(false);
  };

  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-4 lg:hidden">
        <div className="flex justify-center gap-2">
          {onEmojiSelect && (
            <Popover
              open={emojiPickerOpen}
              onOpenChange={onEmojiPickerOpenChange}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="bg-white shadow-md">
                      <SmileyWinkIcon className="size-5" />
                      <span className="ml-2">Select an Emoji</span>
                    </Button>
                  </PopoverTrigger>
                </TooltipTrigger>
                <TooltipContent>Select an Emoji</TooltipContent>
              </Tooltip>
              <PopoverContent
                className="w-auto border-none bg-transparent p-0 shadow-none"
                align="center"
                side="bottom"
                sideOffset={8}
              >
                <EmojiPicker
                  className="h-[326px] rounded-lg border shadow-md"
                  onEmojiSelect={({ emoji }) => {
                    handleEmojiSelect(emoji);
                  }}
                >
                  <EmojiPickerSearch />
                  <EmojiPickerContent />
                </EmojiPicker>
              </PopoverContent>
            </Popover>
          )}

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white shadow-md"
                onClick={onRandomEmoji}
              >
                <DiceFiveIcon className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Random Emoji</TooltipContent>
          </Tooltip>
        </div>

        <div className="flex justify-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white shadow-md"
                onClick={onRandomColors}
              >
                <PaletteIcon className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Random Colors</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white shadow-md"
                onClick={onReset}
              >
                <ArrowCounterClockwiseIcon className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reset Colors</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white shadow-md"
                onClick={onDownloadImage}
              >
                <DownloadSimpleIcon className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Download Image</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white shadow-md"
                onClick={onCopyImage}
              >
                <ImageIcon className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy/Share Image</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white shadow-md"
                onClick={onShare}
              >
                <ShareNetworkIcon className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Share</TooltipContent>
          </Tooltip>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden gap-2 lg:grid lg:grid-cols-5">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" onClick={onRandomEmoji}>
            <DiceFiveIcon className="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Random Emoji</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" onClick={onRandomColors}>
            <PaletteIcon className="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Random Colors</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" onClick={onReset}>
            <ArrowCounterClockwiseIcon className="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Reset Colors</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" onClick={onDownloadImage}>
            <DownloadSimpleIcon className="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Download Image</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" onClick={onShare}>
            <ShareNetworkIcon className="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Share</TooltipContent>
      </Tooltip>
    </div>
  );
}
