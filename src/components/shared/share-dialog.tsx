/**
 * @fileoverview Shared share dialog component for sharing customized emojis.
 * Provides social sharing buttons (X, Facebook, Threads, Copy Link, Submit Showcase, CSS),
 * where the CSS button opens a secondary dialog showing HTML/CSS code snippets.
 * Used by both the Create page and Showcase page.
 */

import {
  ClipboardIcon,
  CodeIcon,
  FacebookLogoIcon,
  LinkIcon,
  ThreadsLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { GithubIcon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GITHUB_ISSUE_BASE_URL } from "@/lib/constants";
import {
  type CpalMap,
  copyCSSCode,
  copyHTMLCode,
  copyLinkToClipboard,
  fetchCpalMap,
  generateCSSCode,
  shareToFacebook,
  shareToThreads,
  shareToTwitter,
} from "@/lib/share-utils";

const BUTTON_CLASS =
  "h-auto flex-col gap-1.5 py-3 [&_svg:not([class*='size-'])]:size-6";

/**
 * Props for the ShareDialog component.
 */
interface ShareDialogProps {
  /** Whether the dialog is open. */
  open: boolean;
  /** Callback when open state changes. */
  onOpenChange: (open: boolean) => void;
  /** URL to share on social media and copy link. */
  shareUrl: string;
  /** Inline SVG HTML string used for the preview image above buttons. */
  svgHTML?: string;
  /** Accessible label for the emoji preview. */
  emojiLabel?: string;
  /** Emoji character — used for HTML/CSS code section. */
  emoji?: string;
  /** Customized palette colors — required for CSS code generation. */
  customizedPaletteColors?: string[];
  /** Original palette colors — required for CSS code generation. */
  originalPaletteColors?: string[];
  /** Whether to show the "Submit to Showcase" button. Defaults to true. */
  showSubmitShowcase?: boolean;
}

/**
 * Shared share dialog with social media buttons, copy link, submit to showcase,
 * and a CSS button that opens a secondary code dialog.
 *
 * @param props - Component props.
 * @returns Share dialog component.
 */
export default function ShareDialog({
  open,
  onOpenChange,
  shareUrl,
  svgHTML,
  emojiLabel,
  emoji,
  customizedPaletteColors,
  originalPaletteColors,
  showSubmitShowcase = true,
}: ShareDialogProps) {
  const [cssDialogOpen, setCssDialogOpen] = useState(false);
  const [cpalMap, setCpalMap] = useState<CpalMap | null>(null);

  useEffect(() => {
    fetchCpalMap().then(setCpalMap);
  }, []);

  const hasCodeData = emoji && customizedPaletteColors && originalPaletteColors;

  const cssCode = hasCodeData
    ? generateCSSCode(customizedPaletteColors, originalPaletteColors, cpalMap)
    : "";

  const handleCopyHTMLCode = () => emoji && copyHTMLCode(emoji);
  const handleCopyCSSCode = () => copyCSSCode(cssCode);

  const gridClass = hasCodeData ? "grid-cols-5" : "grid-cols-4";

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Share Your Customized Emoji</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            {svgHTML && (
              <div className="flex items-center justify-center py-2">
                <div
                  role="img"
                  aria-label={emojiLabel}
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: svgHTML is internally generated from generateSVGData(), not user input
                  dangerouslySetInnerHTML={{ __html: svgHTML }}
                  className="size-32 [&>svg]:size-full"
                />
              </div>
            )}

            <div className={`grid gap-2 ${gridClass}`}>
              <Button
                aria-label="Share to X (Twitter)"
                variant="outline"
                className={BUTTON_CLASS}
                onClick={() => shareToTwitter(shareUrl)}
              >
                <XLogoIcon aria-hidden="true" />
                <span className="text-xs">X</span>
              </Button>

              <Button
                aria-label="Share to Facebook"
                variant="outline"
                className={BUTTON_CLASS}
                onClick={() => shareToFacebook(shareUrl)}
              >
                <FacebookLogoIcon aria-hidden="true" />
                <span className="text-xs">Facebook</span>
              </Button>

              <Button
                aria-label="Share to Threads"
                variant="outline"
                className={BUTTON_CLASS}
                onClick={() => shareToThreads(shareUrl)}
              >
                <ThreadsLogoIcon aria-hidden="true" />
                <span className="text-xs">Threads</span>
              </Button>

              <Button
                aria-label="Copy link to clipboard"
                variant="outline"
                className={BUTTON_CLASS}
                onClick={() => copyLinkToClipboard(shareUrl)}
              >
                <LinkIcon aria-hidden="true" />
                <span className="text-xs">Copy Link</span>
              </Button>

              {hasCodeData && (
                <Button
                  aria-label="View HTML/CSS code"
                  variant="outline"
                  className={BUTTON_CLASS}
                  onClick={() => setCssDialogOpen(true)}
                >
                  <CodeIcon aria-hidden="true" />
                  <span className="text-xs">CSS</span>
                </Button>
              )}
            </div>

            {showSubmitShowcase && (
              <Button
                aria-label="Submit to showcase"
                variant="outline"
                className="w-full"
                asChild
              >
                <a
                  href={GITHUB_ISSUE_BASE_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GithubIcon aria-hidden="true" />
                  Submit Showcase
                </a>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {hasCodeData && (
        <Dialog open={cssDialogOpen} onOpenChange={setCssDialogOpen}>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>HTML / CSS Code</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="font-medium text-sm">HTML</div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyHTMLCode}
                  className="ml-auto"
                >
                  <ClipboardIcon aria-hidden="true" />
                  <span className="text-xs">Copy HTML</span>
                </Button>
              </div>
              <pre className="overflow-x-auto rounded bg-accent px-4 py-4 text-xs">
                <code className="font-mono">{`<span class="mod-emoji"> ${emoji} </span>`}</code>
              </pre>

              <div className="flex items-center gap-2">
                <div className="font-medium text-sm">CSS</div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyCSSCode}
                  className="ml-auto"
                >
                  <ClipboardIcon aria-hidden="true" />
                  <span className="text-xs">Copy CSS</span>
                </Button>
              </div>
              <pre className="overflow-x-auto whitespace-pre-wrap rounded bg-accent px-4 py-4 text-xs">
                <code className="font-mono">{cssCode}</code>
              </pre>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
