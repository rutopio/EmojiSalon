/**
 * ShowcaseSection - A card displaying one emoji with its variant(s).
 * Supports single variant (1 original -> 1 modified) or multiple variants.
 */

import { useCallback, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRightIcon,
  DownloadSimpleIcon,
  PencilSimpleIcon,
  ShareNetworkIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { useEmojiSVG, useVariantSVG } from "@/hooks/use-emoji-svg";
import { triggerDownload, unicodeToEmoji } from "@/lib/emoji-utils";
import { toast } from "sonner";

import EmojiPreview from "./emoji-preview";
import ShowcaseShareModal from "./showcase-share-modal";

interface Variant {
  palette: string;
  name: string;
}

interface ShowcaseSectionProps {
  emoji: string;
  variants: Variant[];
  className?: string;
}

function VariantPreview({
  emoji,
  variant,
}: {
  emoji: string;
  variant: Variant;
}) {
  const { svg, isLoading } = useVariantSVG(emoji, variant.palette);

  return <EmojiPreview svg={svg} label={variant.name} isLoading={isLoading} />;
}

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

  const handleNavigate = (palette?: string) => {
    navigate({
      to: "/",
      search: {
        emoji: emoji,
        palette: palette || undefined,
      },
    });
  };

  const generateImage = useCallback(
    (callback: (dataUrl: string) => void) => {
      const canvas = canvasRef.current;
      if (!canvas || !modifiedSvg) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const imagePadding = 50;
      const scaleProp = 10;
      const baseSize = 256;

      canvas.width = baseSize * scaleProp + imagePadding;
      canvas.height = baseSize * scaleProp + imagePadding;
      ctx.scale(scaleProp, scaleProp);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const img = new Image();
      img.onload = () => {
        ctx.drawImage(
          img,
          imagePadding / scaleProp / 2,
          imagePadding / scaleProp / 2,
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

  const handleDownload = useCallback(() => {
    generateImage((dataUrl) => {
      triggerDownload(dataUrl, `${emoji}-EmojiSalon.png`);
      toast.success("Image downloaded", {
        description: `${emoji}-EmojiSalon.png`,
      });
    });
  }, [emoji, generateImage]);

  const handleShare = useCallback(() => {
    generateImage((dataUrl) => {
      setImageSrc(dataUrl);
      setShareModalOpen(true);
    });
  }, [generateImage]);

  const unicodeDisplay = `U+${emoji.replace("u", "").toUpperCase()}`;
  const hasMultipleVariants = variants.length > 1;

  return (
    <div className={`bg-card rounded-lg border p-6 ${className}`}>
      {/* Hidden canvas for image generation */}
      <canvas ref={canvasRef} className="hidden" />

      <div className="flex flex-col gap-8">
        {/* Unicode label */}
        <div className="relative flex w-full items-center justify-center">
          <span className="text-primary font-mono text-base">
            {unicodeDisplay}
          </span>
          <div className="absolute -top-1 right-0 flex items-center gap-2">
            <Button
              variant="outline"
              size="xs"
              onClick={() => handleNavigate(firstVariant.palette)}
              className="size-8"
            >
              <PencilSimpleIcon />
            </Button>
            <Button
              variant="outline"
              size="xs"
              onClick={handleDownload}
              className="size-8"
            >
              <DownloadSimpleIcon />
            </Button>
            <Button
              variant="outline"
              size="xs"
              onClick={handleShare}
              className="size-8"
            >
              <ShareNetworkIcon />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          {/* Original emoji */}
          <EmojiPreview
            svg={originalSvg}
            label={originalName}
            isLoading={isLoading}
          />

          {/* Arrow */}
          <ArrowRightIcon size={20} weight="bold" className="text-primary" />

          {/* Variants */}
          {hasMultipleVariants ? (
            // Multiple variants: render each separately
            variants.map((variant, index) => (
              <VariantPreview key={index} emoji={emoji} variant={variant} />
            ))
          ) : (
            // Single variant: use the already loaded modifiedSvg
            <EmojiPreview
              svg={modifiedSvg}
              label={firstVariant.name}
              isLoading={isLoading}
            />
          )}
        </div>

        {/* Share Modal */}
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
