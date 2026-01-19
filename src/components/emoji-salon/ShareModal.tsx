import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
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

import {
  ClipboardIcon,
  FacebookIcon,
  GitHubIcon,
  LinkIcon,
  SvgFileIcon,
  TwitterIcon,
} from "./icons";

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
          <DialogTitle>Share Your Emoji</DialogTitle>
        </DialogHeader>

        <div className="flex flex-wrap justify-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="bg-[#444] text-white hover:text-[#3b5998]"
                onClick={shareToTwitter}
              >
                <TwitterIcon className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Tweet</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="bg-[#444] text-white hover:text-[#55acee]"
                onClick={shareToFacebook}
              >
                <FacebookIcon className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Share on Facebook</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="bg-[#444] text-white hover:text-[#dd4b39]"
                onClick={handleDownloadSVG}
              >
                <SvgFileIcon className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Download SVG</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="bg-[#444] text-white hover:text-[#bd081c]"
                onClick={onCopyImage}
              >
                <ClipboardIcon className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy Image</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="bg-[#444] text-white hover:text-[#833ab4]"
                onClick={copyLinkToClipboard}
              >
                <LinkIcon className="h-5 w-5" />
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
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-[#444] text-white hover:text-[#ffb11b]"
                >
                  <GitHubIcon className="h-5 w-5" />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>Star or Fork Repo</TooltipContent>
          </Tooltip>
        </div>

        <div className="mt-2 text-center text-xs">
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

        <hr className="my-4" />

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
