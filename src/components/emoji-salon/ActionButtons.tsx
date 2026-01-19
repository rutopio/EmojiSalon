import { Button } from "~/components/ui/button";
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

import { FrimousseEmojiPicker } from "./FrimousseEmojiPicker";
import {
  DiceIcon,
  DownloadIcon,
  EmojiIcon,
  ImageIcon,
  PaletteIcon,
  ResetIcon,
  ShareIcon,
} from "./icons";

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
                      <EmojiIcon className="h-5 w-5" />
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
                <FrimousseEmojiPicker onEmojiSelect={handleEmojiSelect} />
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
                <DiceIcon className="h-5 w-5" />
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
                <PaletteIcon className="h-5 w-5" />
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
                <ResetIcon className="h-5 w-5" />
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
                <DownloadIcon className="h-5 w-5" />
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
                <ImageIcon className="h-5 w-5" />
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
                <ShareIcon className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Share</TooltipContent>
          </Tooltip>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 hidden justify-center gap-2 lg:flex">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="bg-white shadow-md hover:text-[#3b5998]"
            onClick={onRandomEmoji}
          >
            <DiceIcon className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Random Emoji</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="bg-white shadow-md hover:text-[#55acee]"
            onClick={onRandomColors}
          >
            <PaletteIcon className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Random Colors</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="bg-white shadow-md hover:text-[#dd4b39]"
            onClick={onReset}
          >
            <ResetIcon className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Reset Colors</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="bg-white shadow-md hover:text-[#bd081c]"
            onClick={onDownloadImage}
          >
            <DownloadIcon className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Download Image</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="bg-white shadow-md hover:text-[#833ab4]"
            onClick={onShare}
          >
            <ShareIcon className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Share</TooltipContent>
      </Tooltip>
    </div>
  );
}
