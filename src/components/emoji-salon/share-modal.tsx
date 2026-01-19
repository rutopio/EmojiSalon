import {
  ClipboardIcon,
  FacebookLogoIcon,
  FileSvgIcon,
  GithubLogoIcon,
  LinkIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useEmoji } from "@/contexts/emoji-context";
import { useEmojiActions } from "@/hooks/use-emoji-actions";
import {
  copyLinkToClipboard,
  downloadSVG,
  generateCSSCode,
  shareToFacebook,
  shareToTwitter,
} from "@/lib/share-utils";
import { CheckCircleIcon } from "lucide-react";

/**
 * Modal component for sharing customized emoji.
 * Uses useEmojiActions hook for state and handlers.
 */
export function ShareModal() {
  const { currentEmoji } = useEmoji();
  const {
    shareModalOpen,
    setShareModalOpen,
    resultImageSrc,
    svgHTML,
    handleCopyImage,
  } = useEmojiActions();

  const cssCode = generateCSSCode();

  const handleDownloadSVG = () => {
    downloadSVG(svgHTML, currentEmoji);
  };

  return (
    <Dialog open={shareModalOpen} onOpenChange={setShareModalOpen}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Share Your Customized Emoji</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="mx-auto grid w-fit grid-cols-6 justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <Button variant="outline" size="icon" onClick={shareToTwitter}>
                <XLogoIcon className="size-5" />
              </Button>
              <div className="text-xs">X (Twitter)</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center justify-center">
                <Button variant="outline" size="icon" onClick={shareToFacebook}>
                  <FacebookLogoIcon className="size-5" />
                </Button>
              </div>
              <div className="text-xs"> Facebook</div>
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
              <Button
                variant="outline"
                size="icon"
                onClick={copyLinkToClipboard}
              >
                <LinkIcon className="size-5" />
              </Button>
              <div className="text-xs">Copy Link</div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <a
                href="https://github.com/rutopio/EmojiSalon"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button variant="outline" size="icon">
                  <GithubLogoIcon className="size-5" />
                </Button>
              </a>
              <div className="text-xs">Github Repo</div>
            </div>
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
              {resultImageSrc && (
                <img
                  src={resultImageSrc}
                  alt="Result"
                  className="aspect-square w-full object-contain"
                />
              )}
            </div>

            <div className="col-span-2 hidden flex-col gap-2 lg:flex">
              <div className="text-sm">HTML</div>
              <pre className="overflow-x-auto rounded bg-gray-200 px-4 py-2 text-xs">
                <code>{`<span class="mod-emoji"> ${currentEmoji} </span>`}</code>
              </pre>

              <div className="mt-4 text-sm">CSS</div>
              <pre className="overflow-x-auto rounded bg-gray-200 px-4 py-2 text-xs whitespace-pre-wrap">
                <code>{cssCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
