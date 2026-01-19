import {
  ClipboardIcon,
  FacebookLogoIcon,
  FileSvgIcon,
  GithubLogoIcon,
  LinkIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Separator } from "~/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import {
  copyLinkToClipboard,
  downloadSVG,
  generateCSSCode,
  shareToFacebook,
  shareToTwitter,
} from "~/lib/share-utils";

interface ShareModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentEmoji: string;
  resultImageSrc: string;
  svgData: string;
  onCopyImage: () => void;
}

export function ShareModal({
  open,
  onOpenChange,
  currentEmoji,
  resultImageSrc,
  svgData,
  onCopyImage,
}: ShareModalProps) {
  const cssCode = generateCSSCode();

  const handleDownloadSVG = () => {
    downloadSVG(svgData, currentEmoji);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Share Your Customized Emoji</DialogTitle>
        </DialogHeader>

        <div className="flex flex-wrap justify-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={shareToTwitter}>
                <XLogoIcon className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Tweet</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={shareToFacebook}>
                <FacebookLogoIcon className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Share on Facebook</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={handleDownloadSVG}>
                <FileSvgIcon className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Download SVG</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={onCopyImage}>
                <ClipboardIcon className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy Image</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={copyLinkToClipboard}
              >
                <LinkIcon className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy Link</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/rutopio/EmojiSalon"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button variant="outline" size="icon">
                  <GithubLogoIcon className="size-5" />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>Star or Fork Repo</TooltipContent>
          </Tooltip>
        </div>

        <div className="text-center text-xs">
          <p>
            ✓{" "}
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

        <Separator className="my-4" />

        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex justify-center lg:w-1/3">
            {resultImageSrc && (
              <img
                src={resultImageSrc}
                alt="Result"
                className="max-w-[200px]"
              />
            )}
          </div>

          <div className="hidden lg:block lg:w-2/3">
            <div className="mb-1 font-sans text-sm">HTML</div>
            <pre className="overflow-x-auto rounded bg-gray-200 p-2 text-xs">
              <code>{`<span class="mod-emoji"> ${currentEmoji} </span>`}</code>
            </pre>

            <div className="mt-4 mb-1 font-sans text-sm">CSS</div>
            <pre className="overflow-x-auto rounded bg-gray-200 p-2 text-xs whitespace-pre-wrap">
              <code>{cssCode}</code>
            </pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
