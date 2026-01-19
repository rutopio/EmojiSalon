import { useCallback, useEffect, useRef, useState } from "react";
import {
  createFileRoute,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";

import {
  ActionButtons,
  ColorPickerPopover,
  EmojiDisplay,
  Footer,
  ShareModal,
} from "~/components/emoji-salon";
import { EmojiPicker } from "~/components/emoji-salon/emoji-picker";
import { Navbar } from "~/components/navbar";
import {
  emojiToUnicode,
  fetchEmojiData,
  getEmojiLabel,
  getOriginalPaletteData,
  getOverrideStyleString,
  getRandomColor,
  getRandomEmojiWithLabel,
  normalizeColor,
  parsePaletteString,
  triggerDownload,
  unicodeToEmoji,
} from "~/lib/emoji-utils";

// Define search params type
interface EmojiSearchParams {
  emoji?: string;
  palette?: string;
}

export const Route = createFileRoute("/")({
  component: EmojiSalonPage,
  validateSearch: (search: Record<string, unknown>): EmojiSearchParams => {
    return {
      emoji: typeof search.emoji === "string" ? search.emoji : undefined,
      palette: typeof search.palette === "string" ? search.palette : undefined,
    };
  },
});

function EmojiSalonPage() {
  // TanStack Router hooks
  const navigate = useNavigate({ from: "/" });
  const search = useSearch({ from: "/" });

  // State
  const [currentEmoji, setCurrentEmoji] = useState<string>("");
  const [currentEmojiLabel, setCurrentEmojiLabel] = useState<string>("");
  const [pathArray, setPathArray] = useState<string[]>([]);
  const [paletteArray, setPaletteArray] = useState<string[]>([]);
  const [originalPaletteColors, setOriginalPaletteColors] = useState<string[]>(
    []
  );
  const [originalPaletteIndex, setOriginalPaletteIndex] = useState<number[]>(
    []
  );
  const [customizedPaletteColors, setCustomizedPaletteColors] = useState<
    string[]
  >([]);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [emojiPickerModalOpen, setEmojiPickerModalOpen] = useState(false);
  const [resultImageSrc, setResultImageSrc] = useState<string>("");
  const [isInitialized, setIsInitialized] = useState(false);

  // Refs
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Update URL using TanStack Router
  const updateURL = useCallback(
    (emojiUnicode: string, paletteCode?: string) => {
      navigate({
        search: (prev: EmojiSearchParams) => ({
          ...prev,
          emoji: emojiUnicode,
          palette: paletteCode || undefined,
        }),
        replace: true,
      });
    },
    [navigate]
  );

  // Update Emoji - defined first for use by other functions
  const updateEmoji = useCallback(
    async (emoji: string, keepPalette: boolean, paletteFromURL?: string) => {
      setCurrentEmoji(emoji);
      const glyphId = emojiToUnicode(emoji).toLowerCase();

      const data = await fetchEmojiData(emoji);
      if (data) {
        const normalizedPalette = data.f.map(normalizeColor);
        setPathArray(data.d);
        setPaletteArray(normalizedPalette);

        const {
          originalPaletteIndex: opIndex,
          originalPaletteColors: opColors,
        } = getOriginalPaletteData(glyphId);
        setOriginalPaletteIndex(opIndex);
        setOriginalPaletteColors(opColors);

        if (!keepPalette) {
          setCustomizedPaletteColors([...opColors]);
          updateURL(emojiToUnicode(emoji));
        } else if (paletteFromURL) {
          // Parse palette info from URL using new format: "195(F0DAA3)-824(6E343F)"
          const modifiedColors = parsePaletteString(
            paletteFromURL,
            opColors,
            opIndex
          );
          setCustomizedPaletteColors(modifiedColors);
        } else {
          setCustomizedPaletteColors([...opColors]);
        }
      }
    },
    [updateURL]
  );

  // Handle emoji selection from picker
  const handleEmojiSelect = useCallback(
    (emoji: string, label: string) => {
      setEmojiPickerModalOpen(false);
      setCurrentEmojiLabel(label);
      updateEmoji(emoji, false);
    },
    [updateEmoji]
  );

  // Initialize: load emoji from URL or random
  useEffect(() => {
    if (isInitialized) return;

    const timer = setTimeout(() => {
      if (search.emoji) {
        try {
          const emoji = unicodeToEmoji(search.emoji);
          if (emoji) {
            setCurrentEmojiLabel(getEmojiLabel(emoji));
            updateEmoji(emoji, !!search.palette, search.palette);
          } else {
            const { emoji: randomEmoji, label } = getRandomEmojiWithLabel();
            setCurrentEmojiLabel(label);
            updateEmoji(randomEmoji, false);
          }
        } catch {
          const { emoji: randomEmoji, label } = getRandomEmojiWithLabel();
          setCurrentEmojiLabel(label);
          updateEmoji(randomEmoji, false);
        }
      } else {
        const { emoji: randomEmoji, label } = getRandomEmojiWithLabel();
        setCurrentEmojiLabel(label);
        updateEmoji(randomEmoji, false);
      }
      setIsInitialized(true);
    }, 0);

    return () => clearTimeout(timer);
  }, [search.emoji, search.palette, updateEmoji, isInitialized]);

  // Handle color change from color picker
  const handleColorChange = useCallback(
    (idx: number, color: string) => {
      setCustomizedPaletteColors((prev) => {
        const newColors = [...prev];
        newColors[idx] = color;

        // Update URL with new format: "195(F0DAA3)-824(6E343F)"
        const overrideColors = getOverrideStyleString(
          newColors,
          originalPaletteColors,
          originalPaletteIndex
        );
        if (overrideColors) {
          updateURL(emojiToUnicode(currentEmoji), overrideColors);
        } else {
          updateURL(emojiToUnicode(currentEmoji));
        }

        return newColors;
      });
    },
    [currentEmoji, originalPaletteColors, originalPaletteIndex, updateURL]
  );

  // Random emoji
  const handleRandomEmoji = useCallback(() => {
    const { emoji, label } = getRandomEmojiWithLabel();
    setCurrentEmojiLabel(label);
    updateEmoji(emoji, false);
  }, [updateEmoji]);

  // Random colors
  const handleRandomColors = useCallback(() => {
    const newColors = customizedPaletteColors.map(() => getRandomColor());
    setCustomizedPaletteColors(newColors);

    // Update URL with new format: "195(F0DAA3)-824(6E343F)"
    const overrideColors = getOverrideStyleString(
      newColors,
      originalPaletteColors,
      originalPaletteIndex
    );
    if (overrideColors) {
      updateURL(emojiToUnicode(currentEmoji), overrideColors);
    }
  }, [
    customizedPaletteColors,
    currentEmoji,
    originalPaletteColors,
    originalPaletteIndex,
    updateURL,
  ]);

  // Reset colors
  const handleReset = useCallback(() => {
    updateEmoji(currentEmoji, false);
  }, [currentEmoji, updateEmoji]);

  // Generate SVG data
  const generateSVGData = useCallback(() => {
    if (pathArray.length === 0 || paletteArray.length === 0) return "";

    const svgPaths = pathArray.map((d, index) => {
      const colorIndex = originalPaletteColors.indexOf(paletteArray[index]);
      const fillColor =
        colorIndex !== -1
          ? customizedPaletteColors[colorIndex] || paletteArray[index]
          : paletteArray[index];
      return `<path fill="${fillColor}" d="${d}" />`;
    });

    return `<svg id="customized-emoji-svg-data" xmlns="http://www.w3.org/2000/svg" width="16em" height="16em" viewBox="0 0 36 36"><g transform="translate(0,0) scale(1,1)">${svgPaths.join("\n")}</g></svg>`;
  }, [pathArray, paletteArray, customizedPaletteColors, originalPaletteColors]);

  // Generate reference SVG
  const generateReferenceSVG = useCallback(() => {
    if (pathArray.length === 0 || paletteArray.length === 0) return "";

    const svgPaths = pathArray.map((d, index) => {
      return `<path fill="${paletteArray[index]}" d="${d}" />`;
    });

    return `<svg xmlns="http://www.w3.org/2000/svg" width="16em" height="16em" viewBox="0 0 36 36"><g transform="translate(0,0) scale(1,1)">${svgPaths.join("\n")}</g></svg>`;
  }, [pathArray, paletteArray]);

  // Canvas update
  const updateCanvas = useCallback(
    async (mission: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const svgData = generateSVGData();
      if (!svgData) return;

      const imagePadding = 50;
      const scaleProp = 10;
      const baseSize = 256; // 16em at default font size

      canvas.width = baseSize * scaleProp + imagePadding;
      canvas.height = baseSize * scaleProp + imagePadding;
      ctx.scale(scaleProp, scaleProp);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const img = new Image();
      img.onload = async () => {
        ctx.drawImage(
          img,
          imagePadding / scaleProp / 2,
          imagePadding / scaleProp / 2,
          baseSize,
          baseSize
        );

        if (mission === 1) {
          // Download PNG
          triggerDownload(
            canvas.toDataURL("image/png"),
            `${emojiToUnicode(currentEmoji)}-EmojiSalon.png`
          );
        } else if (mission === 2) {
          // Copy Image
          canvas.toBlob((blob) => {
            if (blob) {
              navigator.clipboard.write([
                new ClipboardItem({ "image/png": blob }),
              ]);
            }
          });
        } else if (mission === 3) {
          // Share Image
          const dataUrl = canvas.toDataURL();
          const blob = await (await fetch(dataUrl)).blob();
          const filesArray = [
            new File([blob], `${currentEmoji}.png`, {
              type: "image/png",
              lastModified: new Date().getTime(),
            }),
          ];
          const shareData = { files: filesArray };
          navigator.share(shareData);
        } else if (mission === 4) {
          // Set result image
          setResultImageSrc(canvas.toDataURL("image/png"));
        }
      };
      img.src = "data:image/svg+xml," + encodeURIComponent(svgData);
    },
    [generateSVGData, currentEmoji]
  );

  // Download image
  const handleDownloadImage = useCallback(() => {
    updateCanvas(1);
  }, [updateCanvas]);

  // Copy image
  const handleCopyImage = useCallback(() => {
    if (typeof navigator.canShare === "function") {
      updateCanvas(3);
    } else {
      updateCanvas(2);
    }
  }, [updateCanvas]);

  // Share
  const handleShare = useCallback(async () => {
    await updateCanvas(4);
    if (navigator.share && window.innerWidth < 768) {
      const shareData = {
        title: "Collaborate & Share With Friends!",
        text: "#EmojiSalon",
        url: window.location.href,
      };
      await navigator.share(shareData);
    } else {
      setShareModalOpen(true);
    }
  }, [updateCanvas]);

  // SVG HTML content
  const svgHTML = generateSVGData();
  const referenceSvgHTML = generateReferenceSVG();

  return (
    <div className="h-dvh overflow-hidden bg-neutral-50">
      <div className="flex min-h-dvh flex-col items-center justify-center">
        {/* Hidden Canvas */}
        <canvas ref={canvasRef} className="hidden" width={256} height={256} />

        {/* Navigation Bar */}
        <Navbar />
        <div className="container flex flex-1 flex-col items-center justify-center gap-8">
          <div className="grid grid-cols-1 items-center lg:grid-cols-3 lg:gap-16">
            {/* Emoji Picker - Desktop */}
            <EmojiPicker
              onEmojiSelect={handleEmojiSelect}
              selectedEmoji={currentEmoji}
              selectedEmojiLabel={currentEmojiLabel}
            />

            {/* Mobile Buttons */}
            {/* <ActionButtons
              variant="mobile"
              onRandomEmoji={handleRandomEmoji}
              onRandomColors={handleRandomColors}
              onReset={handleReset}
              onDownloadImage={handleDownloadImage}
              onCopyImage={handleCopyImage}
              onShare={handleShare}
              onEmojiSelect={handleEmojiSelect}
              emojiPickerOpen={emojiPickerModalOpen}
              onEmojiPickerOpenChange={setEmojiPickerModalOpen}
            /> */}

            {/* Customized Emoji Display */}
            <EmojiDisplay svgHTML={svgHTML} variant="customized" />

            {/* Reference Emoji Display - Desktop */}
            <EmojiDisplay svgHTML={referenceSvgHTML} variant="reference" />
          </div>

          {/* Desktop Buttons */}
          <ActionButtons
            variant="desktop"
            onRandomEmoji={handleRandomEmoji}
            onRandomColors={handleRandomColors}
            onReset={handleReset}
            onDownloadImage={handleDownloadImage}
            onCopyImage={handleCopyImage}
            onShare={handleShare}
          />

          {/* Color Pickers - React Component based */}
          <div className="flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {customizedPaletteColors.map((color, idx) => (
                <ColorPickerPopover
                  key={`color-picker-${idx}`}
                  color={color}
                  onColorChange={(newColor) => handleColorChange(idx, newColor)}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />

        {/* Share Modal */}
        <ShareModal
          open={shareModalOpen}
          onOpenChange={setShareModalOpen}
          currentEmoji={currentEmoji}
          resultImageSrc={resultImageSrc}
          svgData={svgHTML}
          onCopyImage={handleCopyImage}
        />
      </div>
    </div>
  );
}
