/**
 * @fileoverview Showcase section component for displaying emoji variants.
 * Displays an emoji card with original and customized variants, supporting
 * both single and multiple variant displays.
 */

import { useCallback, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  DownloadSimpleIcon,
  PencilSimpleIcon,
  ShareNetworkIcon,
} from "@phosphor-icons/react";
import { toast } from "sonner";

import EmojiPreview from "@/components/showcase/emoji-preview";
import ShowcaseShareModal from "@/components/showcase/showcase-share-modal";
import { Button } from "@/components/ui/button";
import { useEmojiSVG, useVariantSVG } from "@/hooks/use-emoji-svg";
import { triggerDownload, unicodeToEmoji } from "@/lib/emoji-utils";

/**
 * Variant data structure for emoji customization.
 */
interface Variant {
  /** Color palette string identifier. */
  palette: string;
  /** Display name for the variant. */
  name: string;
}

/**
 * Props for the ShowcaseSection component.
 */
interface ShowcaseSectionProps {
  /** Unicode emoji identifier. */
  emoji: string;
  /** Array of variant configurations. */
  variants: Variant[];
  /** Optional CSS class name. */
  className?: string;
}

/**
 * Props for the VariantPreview component.
 */
interface VariantPreviewProps {
  /** Unicode emoji identifier. */
  emoji: string;
  /** Variant configuration. */
  variant: Variant;
}

/**
 * Preview component for a single emoji variant.
 * Loads and displays the SVG for a specific emoji variant.
 *
 * @param props - Component props.
 * @returns Emoji preview component for the variant.
 */
function VariantPreview({ emoji, variant }: VariantPreviewProps) {
  const { svg, isLoading } = useVariantSVG(emoji, variant.palette);

  return <EmojiPreview svg={svg} label={variant.name} isLoading={isLoading} />;
}

/**
 * Showcase section component for displaying emoji with variants.
 * Shows original emoji alongside customized variants with download and share options.
 *
 * @param props - Component props.
 * @returns Showcase section card component.
 */
export default function ShowcaseSection({
  emoji,
  variants,
  className = "",
}: ShowcaseSectionProps) {
  const navigate = useNavigate();
  const firstVariant = variants[0];
  const {
    originalSvg,
    modifiedSvg,
    originalName,
    isLoading,
    customizedPaletteColors,
    originalPaletteColors,
    originalPaletteIndex,
  } = useEmojiSVG(emoji, firstVariant.palette);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  /**
   * Navigates to the main page with the specified emoji and palette.
   *
   * @param palette - Optional palette identifier to pre-select.
   */
  const handleNavigate = (palette?: string) => {
    navigate({
      to: "/",
      search: {
        emoji: emoji,
        palette: palette || undefined,
      },
    });
  };

  /**
   * Generates a PNG image from the modified SVG.
   * Uses a hidden canvas to render the SVG and convert it to a data URL.
   *
   * @param callback - Function called with the generated image data URL.
   */
  const generateImage = useCallback(
    (callback: (dataUrl: string) => void) => {
      const canvas = canvasRef.current;
      if (!canvas || !modifiedSvg) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const imagePadding = 50;
      const scaleFactor = 10;
      const baseSize = 256;

      canvas.width = baseSize * scaleFactor + imagePadding;
      canvas.height = baseSize * scaleFactor + imagePadding;
      ctx.scale(scaleFactor, scaleFactor);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const img = new Image();
      img.onload = () => {
        ctx.drawImage(
          img,
          imagePadding / scaleFactor / 2,
          imagePadding / scaleFactor / 2,
          baseSize,
          baseSize
        );
        callback(canvas.toDataURL("image/png"));
      };

      const svgBlob = new Blob([modifiedSvg], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);
      img.src = url;
    },
    [modifiedSvg]
  );

  /**
   * Handles saving the emoji image.
   * On devices that support the Web Share API (mobile), opens the native share
   * sheet so the user can pick "Save Image", Files, etc. Otherwise falls back
   * to a direct PNG download.
   */
  const handleDownload = useCallback(() => {
    generateImage(async (dataUrl) => {
      const filename = `${emoji}-EmojiSalon.png`;

      if (typeof navigator.canShare === "function") {
        const blob = await (await fetch(dataUrl)).blob();
        const files = [
          new File([blob], filename, {
            type: "image/png",
            lastModified: Date.now(),
          }),
        ];
        if (navigator.canShare({ files })) {
          try {
            await navigator.share({ files });
          } catch {
            // User cancelled or share failed; do nothing.
          }
          return;
        }
      }

      triggerDownload(dataUrl, filename);
      toast.success("Image downloading...", {
        description: filename,
      });
    });
  }, [emoji, generateImage]);

  /**
   * Handles sharing the emoji by opening the share modal.
   */
  const handleShare = useCallback(() => {
    generateImage((dataUrl) => {
      setImageSrc(dataUrl);
      setShareModalOpen(true);
    });
  }, [generateImage]);

  const unicodeDisplay = `U+${emoji.replace("u", "").toUpperCase()}`;
  const hasMultipleVariants = variants.length > 1;

  return (
    <div className={`bg-card rounded-lg border p-4 lg:p-6 ${className}`}>
      {/* Hidden canvas for image generation */}
      <canvas ref={canvasRef} className="hidden" />

      <div className="flex flex-col gap-4 lg:gap-8">
        {/* Unicode label and action buttons */}
        <div className="relative flex w-full items-center justify-start lg:justify-center">
          <span className="font-mono text-base tabular-nums">
            {unicodeDisplay}
          </span>
          <div className="absolute -top-1 right-0 flex items-center gap-2">
            <Button
              aria-label="Edit emoji"
              variant="outline"
              size="xs"
              onClick={() => handleNavigate(firstVariant.palette)}
              className="size-8"
            >
              <PencilSimpleIcon aria-hidden="true" />
            </Button>
            <Button
              aria-label="Download image"
              variant="outline"
              size="xs"
              onClick={handleDownload}
              className="size-8"
            >
              <DownloadSimpleIcon aria-hidden="true" />
            </Button>
            <Button
              aria-label="Share emoji"
              variant="outline"
              size="xs"
              onClick={handleShare}
              className="size-8"
            >
              <ShareNetworkIcon aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Emoji previews */}
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-12">
          {/* Original emoji */}
          <EmojiPreview
            svg={originalSvg}
            label={originalName}
            isLoading={isLoading}
          />

          {/* Arrow indicator */}
          <ArrowRightIcon
            size={20}
            weight="bold"
            aria-hidden="true"
            className="text-muted-foreground hidden text-sm lg:block"
          />
          <ArrowDownIcon
            size={20}
            weight="bold"
            aria-hidden="true"
            className="text-muted-foreground block text-sm lg:hidden"
          />

          {/* Variant previews */}
          {hasMultipleVariants ? (
            variants.map((variant) => (
              <VariantPreview
                key={variant.palette}
                emoji={emoji}
                variant={variant}
              />
            ))
          ) : (
            <EmojiPreview
              svg={modifiedSvg}
              label={firstVariant.name}
              isLoading={isLoading}
            />
          )}
        </div>

        {/* Share modal */}
        <ShowcaseShareModal
          open={shareModalOpen}
          onOpenChange={setShareModalOpen}
          emoji={unicodeToEmoji(emoji) || ""}
          palette={firstVariant.palette}
          svgData={modifiedSvg}
          imageSrc={imageSrc}
          customizedPaletteColors={customizedPaletteColors}
          originalPaletteColors={originalPaletteColors}
          originalPaletteIndex={originalPaletteIndex}
        />
      </div>
    </div>
  );
}
