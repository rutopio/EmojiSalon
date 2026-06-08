/**
 * @fileoverview Action buttons component for emoji customization interface.
 * Provides buttons for emoji selection, color randomization, reset, download,
 * copy, and share functionality. Supports both desktop and mobile layouts.
 */

import {
  ArrowCounterClockwiseIcon,
  ClipboardIcon,
  DiceFiveIcon,
  DownloadSimpleIcon,
  FileSvgIcon,
  PaletteIcon,
  ShareNetworkIcon,
  SmileyWinkIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

import { EmojiPicker } from "@/components/create/emoji-picker";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

/**
 * Props for the ActionButtons component.
 */
interface ActionButtonsProps {
  /** Display variant: desktop shows all buttons with labels, mobile shows compact grid layout. */
  variant?: "desktop" | "mobile";
}

/**
 * Action buttons component for emoji customization.
 * Displays buttons for emoji selection, color operations, and sharing.
 *
 * @param props - Component props.
 * @returns Action buttons UI for desktop or mobile layout.
 */
export default function ActionButtons({
  variant = "desktop",
}: ActionButtonsProps) {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  const {
    svgHTML,
    currentEmoji,
    handleEmojiSelect,
    handleRandomEmoji,
    handleRandomColors,
    handleReset,
    handleDownloadImage,
    handleCopyImage,
    handleShare,
  } = useEmoji();

  /**
   * Downloads the emoji in the given format, then closes the dialog.
   *
   * @param format - Output format: "svg", "png", or "jpg".
   */
  const handleDownloadAndClose = (format: "svg" | "png" | "jpg") => {
    handleDownloadImage(format);
    setDownloadOpen(false);
  };

  /**
   * Handles emoji selection and closes the picker popover.
   *
   * @param emoji - The selected emoji character.
   * @param label - The emoji label/name.
   */
  const handleEmojiSelectAndClose = (emoji: string, label: string) => {
    setEmojiPickerOpen(false);
    handleEmojiSelect(emoji, label);
  };

  if (variant === "mobile") {
    return (
      <div className="flex w-full flex-col gap-4 lg:hidden">
        <Popover open={emojiPickerOpen} onOpenChange={setEmojiPickerOpen}>
          <PopoverAnchor asChild>
            <div className="grid w-full grid-cols-4 gap-2">
              <PopoverTrigger asChild>
                <Button variant="outline" className="col-span-3">
                  <SmileyWinkIcon className="size-5" aria-hidden="true" />
                  <span className="ml-1">Select Emoji</span>
                </Button>
              </PopoverTrigger>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    aria-label="Random Emoji"
                    variant="outline"
                    className="col-span-1"
                    onClick={handleRandomEmoji}
                  >
                    <DiceFiveIcon className="size-5" aria-hidden="true" />
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
            <EmojiPicker onEmojiSelect={handleEmojiSelectAndClose} />
          </PopoverContent>
        </Popover>

        <div className="grid w-full grid-cols-4 gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                aria-label="Random Colors"
                variant="outline"
                className="w-full"
                onClick={handleRandomColors}
              >
                <PaletteIcon className="size-5" aria-hidden="true" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Random Colors</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                aria-label="Reset Colors"
                variant="outline"
                className="w-full"
                onClick={handleReset}
              >
                <ArrowCounterClockwiseIcon
                  className="size-5"
                  aria-hidden="true"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reset Colors</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                aria-label="Save Image"
                variant="outline"
                className="w-full"
                onClick={handleCopyImage}
              >
                <DownloadSimpleIcon className="size-5" aria-hidden="true" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Save Image</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                aria-label="Share"
                variant="outline"
                className="w-full"
                onClick={handleShare}
              >
                <ShareNetworkIcon className="size-5" aria-hidden="true" />
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
        <DiceFiveIcon className="size-5" aria-hidden="true" />
        Random Emoji
      </Button>
      <Button variant="outline" onClick={handleRandomColors}>
        <PaletteIcon className="size-5" aria-hidden="true" />
        Random Colors
      </Button>
      <Button variant="outline" onClick={handleReset}>
        <ArrowCounterClockwiseIcon className="size-5" aria-hidden="true" />
        Reset Palette
      </Button>
      <Button variant="outline" onClick={() => setDownloadOpen(true)}>
        <DownloadSimpleIcon className="size-5" aria-hidden="true" />
        Save Image
      </Button>
      <Button variant="outline" onClick={handleShare}>
        <ShareNetworkIcon className="size-5" aria-hidden="true" />
        Share Link
      </Button>

      <Dialog open={downloadOpen} onOpenChange={setDownloadOpen}>
        <DialogContent className="lg:max-w-md">
          <DialogHeader>
            <DialogTitle>Save Image</DialogTitle>
          </DialogHeader>

          <div className="flex items-center justify-center py-2">
            <div
              role="img"
              aria-label={`Customized ${currentEmoji} emoji`}
              dangerouslySetInnerHTML={{ __html: svgHTML }}
              className="size-32 [&>svg]:size-full"
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            <Button
              variant="outline"
              className="h-auto flex-col gap-1.5 py-3"
              onClick={() => handleDownloadAndClose("svg")}
            >
              <FileSvgIcon className="size-5" aria-hidden="true" />
              <span className="text-xs">SVG</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto flex-col gap-1.5 py-3"
              onClick={() => handleDownloadAndClose("png")}
            >
              <DownloadSimpleIcon className="size-5" aria-hidden="true" />
              <span className="text-xs">PNG</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto flex-col gap-1.5 py-3"
              onClick={() => handleDownloadAndClose("jpg")}
            >
              <DownloadSimpleIcon className="size-5" aria-hidden="true" />
              <span className="text-xs">JPG</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto flex-col gap-1.5 py-3"
              onClick={() => {
                handleCopyImage();
                setDownloadOpen(false);
              }}
            >
              <ClipboardIcon className="size-5" aria-hidden="true" />
              <span className="text-xs">Copy</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
