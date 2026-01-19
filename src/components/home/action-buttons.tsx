import { useState } from "react";
import {
  ArrowCounterClockwiseIcon,
  DiceFiveIcon,
  DownloadSimpleIcon,
  ImageIcon,
  PaletteIcon,
  ShareNetworkIcon,
  SmileyWinkIcon,
} from "@phosphor-icons/react";
import { EmojiPicker } from "@/components/home/emoji-picker";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEmoji } from "@/contexts/emoji-context";

interface ActionButtonsProps {
  variant?: "desktop" | "mobile";
}

export default function ActionButtons({
  variant = "desktop",
}: ActionButtonsProps) {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const {
    handleEmojiSelect,
    handleRandomEmoji,
    handleRandomColors,
    handleReset,
    handleDownloadImage,
    handleCopyImage,
    handleShare,
  } = useEmoji();

  // Wrap emoji select to close popover
  const onEmojiSelect = (emoji: string, label: string) => {
    setEmojiPickerOpen(false);
    handleEmojiSelect(emoji, label);
  };

  if (variant === "mobile") {
    return (
      <div className="flex w-full flex-col gap-4 lg:hidden">
        <Popover open={emojiPickerOpen} onOpenChange={setEmojiPickerOpen}>
          <PopoverAnchor asChild>
            <div className="grid w-full grid-cols-5 gap-2">
              <PopoverTrigger asChild>
                <Button variant="outline" className="col-span-4">
                  <SmileyWinkIcon className="size-5" />
                  <span className="ml-1">Select Emoji</span>
                </Button>
              </PopoverTrigger>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="col-span-1"
                    onClick={handleRandomEmoji}
                  >
                    <DiceFiveIcon className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Random Emoji</TooltipContent>
              </Tooltip>
            </div>
          </PopoverAnchor>
          <PopoverContent
            className="w-auto border-none bg-transparent p-0 shadow-none"
            align="center"
            side="bottom"
            sideOffset={8}
          >
            <EmojiPicker onEmojiSelect={onEmojiSelect} />
          </PopoverContent>
        </Popover>

        <div className="grid w-full grid-cols-5 gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleRandomColors}
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
                className="w-full"
                onClick={handleReset}
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
                className="w-full"
                onClick={handleDownloadImage}
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
                className="w-full"
                onClick={handleCopyImage}
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
                className="w-full"
                onClick={handleShare}
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
    <div className="hidden gap-4 lg:grid lg:grid-cols-5">
      <Button variant="outline" onClick={handleRandomEmoji}>
        <DiceFiveIcon className="size-5" />
        Random Emoji
      </Button>
      <Button variant="outline" onClick={handleRandomColors}>
        <PaletteIcon className="size-5" />
        Random Colors
      </Button>
      <Button variant="outline" onClick={handleReset}>
        <ArrowCounterClockwiseIcon className="size-5" />
        Reset Palette
      </Button>
      <Button variant="outline" onClick={handleDownloadImage}>
        <DownloadSimpleIcon className="size-5" />
        Save Image
      </Button>
      <Button variant="outline" onClick={handleShare}>
        <ShareNetworkIcon className="size-5" />
        Share Link
      </Button>
    </div>
  );
}
