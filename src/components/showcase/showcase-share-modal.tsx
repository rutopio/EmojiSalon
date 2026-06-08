/**
 * @fileoverview Share modal component for showcase page emoji variants.
 * Provides sharing options for individual emoji variants displayed in the showcase.
 * Each showcase section can share its own emoji variant independently.
 */

import {
  CheckCircleIcon,
  ClipboardIcon,
  FacebookLogoIcon,
  FileSvgIcon,
  LinkIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { useMemo } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  copyCSSCode,
  copyHTMLCode,
  copyLinkToClipboard,
  downloadSVG,
  generateCSSCode,
  generateShareURL,
  shareToFacebook,
  shareToTwitter,
} from "@/lib/share-utils";

/**
 * Props for the ShowcaseShareModal component.
 */
interface ShowcaseShareModalProps {
  /** Whether the modal is open. */
  open: boolean;
  /** Callback to handle modal open state changes. */
  onOpenChange: (open: boolean) => void;
  /** The emoji character. */
  emoji: string;
  /** Color palette identifier. */
  palette: string;
  /** SVG data string for the customized emoji. */
  svgData: string;
  /** Data URL of the generated image. */
  imageSrc: string;
  /** Array of customized palette colors. */
  customizedPaletteColors: string[];
  /** Array of original palette colors. */
  originalPaletteColors: string[];
  /** Array of original palette color indices. */
  originalPaletteIndex: number[];
}

/**
 * Share modal component for showcase emoji variants.
 * Displays sharing options including social media links, download,
 * copy functionality, and code snippets for a specific emoji variant.
 *
 * @param props - Component props.
 * @returns Share modal dialog component.
 */
export default function ShowcaseShareModal({
  open,
  onOpenChange,
  emoji,
  palette,
  svgData,
  imageSrc,
  customizedPaletteColors,
  originalPaletteColors,
  originalPaletteIndex,
}: ShowcaseShareModalProps) {
  // Generate the share URL for this specific emoji/palette combination
  const shareURL = useMemo(
    () => generateShareURL(emoji, palette),
    [emoji, palette]
  );

  const cssCode = generateCSSCode(
    customizedPaletteColors,
    originalPaletteColors,
    originalPaletteIndex
  );

  /**
   * Handles sharing to Twitter/X.
   */
  const handleShareToTwitter = () => shareToTwitter(shareURL);

  /**
   * Handles sharing to Facebook.
   */
  const handleShareToFacebook = () => shareToFacebook(shareURL);

  /**
   * Handles copying the share link to clipboard.
   */
  const handleCopyLink = () => copyLinkToClipboard(shareURL);

  /**
   * Handles downloading the SVG file.
   */
  const handleDownloadSVG = () => downloadSVG(svgData, emoji);

  /**
   * Handles copying the image to clipboard.
   */
  const handleCopyImage = async () => {
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
      toast.success("Image copied to clipboard.");
    } catch (error) {
      toast.error("Failed to copy image.");
      console.error("Copy image error:", error);
    }
  };

  /**
   * Handles copying HTML code to clipboard.
   */
  const handleCopyHTMLCode = () => copyHTMLCode(emoji);

  /**
   * Handles copying CSS code to clipboard.
   */
  const handleCopyCSSCode = () => copyCSSCode(cssCode);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="lg:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Share Your Customized Emoji</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="mx-auto grid w-fit grid-cols-5 items-start justify-start gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <Button
                aria-label="Share to X (Twitter)"
                variant="outline"
                size="icon"
                onClick={handleShareToTwitter}
              >
                <XLogoIcon className="size-5" aria-hidden="true" />
              </Button>
              <div className="text-center text-xs">X (Twitter)</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center justify-center">
                <Button
                  aria-label="Share to Facebook"
                  variant="outline"
                  size="icon"
                  onClick={handleShareToFacebook}
                >
                  <FacebookLogoIcon className="size-5" aria-hidden="true" />
                </Button>
              </div>
              <div className="text-center text-xs">Facebook</div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <Button
                aria-label="Save SVG"
                variant="outline"
                size="icon"
                onClick={handleDownloadSVG}
              >
                <FileSvgIcon className="size-5" aria-hidden="true" />
              </Button>
              <div className="text-center text-xs">Save SVG</div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <Button
                aria-label="Copy image to clipboard"
                variant="outline"
                size="icon"
                onClick={handleCopyImage}
              >
                <ClipboardIcon className="size-5" aria-hidden="true" />
              </Button>
              <div className="text-center text-xs">Copy Image</div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <Button
                aria-label="Copy link to clipboard"
                variant="outline"
                size="icon"
                onClick={handleCopyLink}
              >
                <LinkIcon className="size-5" aria-hidden="true" />
              </Button>
              <div className="text-center text-xs">Copy Link</div>
            </div>
          </div>

          <div className="mx-auto flex items-center gap-2 text-center text-sm">
            <CheckCircleIcon className="size-4" aria-hidden="true" />
            <p>
              <a
                href="https://github.com/rutopio/EmojiSalon#copyright"
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                Free for Personal & Commercial Use
              </a>
            </p>
          </div>

          <Separator className="my-2" />

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="col-span-1 flex justify-center p-4">
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt="Customized emoji preview"
                  className="aspect-square w-full object-contain"
                />
              )}
            </div>

            <div className="col-span-2 hidden flex-col gap-2 lg:flex">
              <div className="flex items-center gap-2">
                <div className="text-sm">HTML</div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyHTMLCode}
                  className="ml-auto w-32"
                >
                  <ClipboardIcon aria-hidden="true" />
                  <div className="text-xs">Copy HTML</div>
                </Button>
              </div>
              <pre className="overflow-x-auto rounded bg-accent px-4 py-4 text-xs">
                <code className="font-mono">{`<span class="mod-emoji"> ${emoji} </span>`}</code>
              </pre>

              <div className="mt-4 flex items-center gap-2">
                <div className="text-sm">CSS</div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyCSSCode}
                  className="ml-auto w-32"
                >
                  <ClipboardIcon aria-hidden="true" />
                  <div className="text-xs">Copy CSS</div>
                </Button>
              </div>
              <pre className="overflow-x-auto whitespace-pre-wrap rounded bg-accent px-4 py-4 text-xs">
                <code className="font-mono">{cssCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
