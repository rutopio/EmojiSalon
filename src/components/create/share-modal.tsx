/**
 * @fileoverview Share modal component for sharing customized emoji.
 * Provides options to share via social media, download SVG, copy image/link,
 * and view HTML/CSS code for the customized emoji.
 */

import {
  CheckCircleIcon,
  ClipboardIcon,
  FacebookLogoIcon,
  FileSvgIcon,
  LinkIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

import { GithubIcon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useEmoji } from "@/contexts/emoji-context";
import { GITHUB_ISSUE_BASE_URL, GITHUB_REPO_URL } from "@/lib/constants";
import {
  copyCSSCode,
  copyHTMLCode,
  copyLinkToClipboard,
  downloadSVG,
  generateCSSCode,
  shareToFacebook,
  shareToTwitter,
} from "@/lib/share-utils";

/**
 * Share modal component for customized emoji.
 * Displays sharing options including social media links, download,
 * copy functionality, and code snippets.
 *
 * @returns Share modal dialog component.
 */
export default function ShareModal() {
  const {
    currentEmoji,
    shareModalOpen,
    setShareModalOpen,
    resultImageSrc,
    svgHTML,
    handleCopyImage,
    customizedPaletteColors,
    originalPaletteColors,
    originalPaletteIndex,
  } = useEmoji();

  const cssCode = generateCSSCode(
    customizedPaletteColors,
    originalPaletteColors,
    originalPaletteIndex
  );

  /**
   * Handles SVG file download.
   */
  const handleDownloadSVG = () => downloadSVG(svgHTML, currentEmoji);

  /**
   * Handles copying HTML code to clipboard.
   */
  const handleCopyHTMLCode = () => copyHTMLCode(currentEmoji);

  /**
   * Handles copying CSS code to clipboard.
   */
  const handleCopyCSSCode = () => copyCSSCode(cssCode);

  return (
    <Dialog open={shareModalOpen} onOpenChange={setShareModalOpen}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Share Your Customized Emoji</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="mx-auto grid w-fit grid-cols-6 justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <Button
                aria-label="Share to X (Twitter)"
                variant="outline"
                size="icon"
                onClick={() => shareToTwitter()}
              >
                <XLogoIcon className="size-5" aria-hidden="true" />
              </Button>
              <div className="text-xs">X (Twitter)</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center justify-center">
                <Button
                  aria-label="Share to Facebook"
                  variant="outline"
                  size="icon"
                  onClick={() => shareToFacebook()}
                >
                  <FacebookLogoIcon className="size-5" aria-hidden="true" />
                </Button>
              </div>
              <div className="text-xs"> Facebook</div>
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
              <div className="text-xs">Save SVG</div>
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
              <div className="text-xs">Copy Image</div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <Button
                aria-label="Copy link to clipboard"
                variant="outline"
                size="icon"
                onClick={() => copyLinkToClipboard()}
              >
                <LinkIcon className="size-5" aria-hidden="true" />
              </Button>
              <div className="text-xs">Copy Link</div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <Button
                aria-label="Submit to showcase"
                variant="outline"
                size="icon"
                asChild
              >
                <a
                  href={GITHUB_ISSUE_BASE_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GithubIcon aria-hidden="true" />
                </a>
              </Button>
              <div className="text-xs">Submit Showcase</div>
            </div>
          </div>

          <div className="mx-auto flex items-center gap-2 text-center text-sm">
            <CheckCircleIcon className="size-4" aria-hidden="true" />
            <p>
              <a
                href={GITHUB_REPO_URL + "#copyright"}
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
              <pre className="bg-accent overflow-x-auto rounded px-4 py-4 text-xs">
                <code className="font-mono">{`<span class="mod-emoji"> ${currentEmoji} </span>`}</code>
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
              <pre className="bg-accent overflow-x-auto rounded px-4 py-4 text-xs whitespace-pre-wrap">
                <code className="font-mono">{cssCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
