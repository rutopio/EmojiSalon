import { useMemo } from "react";
import {
  CheckCircleIcon,
  ClipboardIcon,
  FacebookLogoIcon,
  FileSvgIcon,
  LinkIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { toast } from "sonner";

// import { GithubIcon } from "@/components/icon";
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

interface ShowcaseShareModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  emoji: string;
  palette: string;
  svgData: string;
  imageSrc: string;
  customizedPaletteColors: string[];
  originalPaletteColors: string[];
  originalPaletteIndex: number[];
}

/**
 * Share modal specifically for Showcase page sections.
 * Each section can share its own emoji variant independently.
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

  const handleShareToTwitter = () => shareToTwitter(shareURL);

  const handleShareToFacebook = () => shareToFacebook(shareURL);

  const handleCopyLink = () => copyLinkToClipboard(shareURL);

  const handleDownloadSVG = () => downloadSVG(svgData, emoji);

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

  const handleCopyHTMLCode = () => copyHTMLCode(emoji);

  const handleCopyCSSCode = () => copyCSSCode(cssCode);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Share Your Customized Emoji</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="mx-auto grid w-fit grid-cols-5 justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handleShareToTwitter}
              >
                <XLogoIcon className="size-5" />
              </Button>
              <div className="text-xs">X (Twitter)</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleShareToFacebook}
                >
                  <FacebookLogoIcon className="size-5" />
                </Button>
              </div>
              <div className="text-xs">Facebook</div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <Button variant="outline" size="icon" onClick={handleDownloadSVG}>
                <FileSvgIcon className="size-5" />
              </Button>
              <div className="text-xs">Save SVG</div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <Button variant="outline" size="icon" onClick={handleCopyImage}>
                <ClipboardIcon className="size-5" />
              </Button>
              <div className="text-xs">Copy Image</div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <Button variant="outline" size="icon" onClick={handleCopyLink}>
                <LinkIcon className="size-5" />
              </Button>
              <div className="text-xs">Copy Link</div>
            </div>

            {/* <div className="flex flex-col items-center justify-center gap-2">
              <a
                href="https://github.com/rutopio/EmojiSalon"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button variant="outline" size="icon">
                  <GithubIcon />
                </Button>
              </a>
              <div className="text-xs">Submit Showcase</div>
            </div> */}
          </div>

          <div className="mx-auto flex items-center gap-2 text-center text-sm">
            <CheckCircleIcon className="size-4" />
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
                  alt="Result"
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
                  <ClipboardIcon />
                  <div className="text-xs">Copy HTML</div>
                </Button>
              </div>
              <pre className="bg-accent overflow-x-auto rounded px-4 py-4 text-xs">
                <code>{`<span class="mod-emoji"> ${emoji} </span>`}</code>
              </pre>

              <div className="mt-4 flex items-center gap-2">
                <div className="text-sm">CSS</div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyCSSCode}
                  className="ml-auto w-32"
                >
                  <ClipboardIcon />
                  <div className="text-xs">Copy CSS</div>
                </Button>
              </div>
              <pre className="bg-accent overflow-x-auto rounded px-4 py-4 text-xs whitespace-pre-wrap">
                <code>{cssCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
