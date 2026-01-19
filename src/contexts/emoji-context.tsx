/**
 * @fileoverview Emoji Context Provider for sharing emoji state across components.
 *
 * This context provides all the shared state for the emoji salon application.
 */

import {
  createContext,
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";
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
} from "@/lib/emoji-utils";
import { toast } from "sonner";

interface EmojiSearchParams {
  emoji?: string;
  palette?: string;
}

interface EmojiContextValue {
  // Basic emoji state
  currentEmoji: string;
  setCurrentEmoji: (emoji: string) => void;
  currentEmojiLabel: string;
  setCurrentEmojiLabel: (label: string) => void;
  customizedPaletteColors: string[];
  setCustomizedPaletteColors: React.Dispatch<React.SetStateAction<string[]>>;

  // SVG data state
  pathArray: string[];
  paletteArray: string[];
  originalPaletteColors: string[];
  originalPaletteIndex: number[];

  // Modal state
  shareModalOpen: boolean;
  setShareModalOpen: (open: boolean) => void;
  resultImageSrc: string;

  // Refs
  canvasRef: React.RefObject<HTMLCanvasElement | null>;

  // Computed SVG
  svgHTML: string;
  referenceSvgHTML: string;

  // Actions
  handleEmojiSelect: (emoji: string, label: string) => void;
  handleColorChange: (idx: number, color: string) => void;
  handleRandomEmoji: () => void;
  handleRandomColors: () => void;
  handleReset: () => void;
  handleDownloadImage: () => void;
  handleCopyImage: () => void;
  handleShare: () => Promise<void>;
}

const EmojiContext = createContext<EmojiContextValue | null>(null);

interface EmojiProviderProps {
  children: React.ReactNode;
}

/**
 * Provider component for all emoji-related state and actions.
 */
export function EmojiProvider({ children }: EmojiProviderProps) {
  // TanStack Router hooks
  const navigate = useNavigate();
  const location = useLocation();

  // Parse search params from current location
  const search: EmojiSearchParams = {
    emoji:
      typeof location.search.emoji === "string"
        ? location.search.emoji
        : undefined,
    palette:
      typeof location.search.palette === "string"
        ? location.search.palette
        : undefined,
  };

  // Basic state
  const [currentEmoji, setCurrentEmoji] = useState<string>("");
  const [currentEmojiLabel, setCurrentEmojiLabel] = useState<string>("");
  const [customizedPaletteColors, setCustomizedPaletteColors] = useState<
    string[]
  >([]);

  // SVG data state
  const [pathArray, setPathArray] = useState<string[]>([]);
  const [paletteArray, setPaletteArray] = useState<string[]>([]);
  const [originalPaletteColors, setOriginalPaletteColors] = useState<string[]>(
    []
  );
  const [originalPaletteIndex, setOriginalPaletteIndex] = useState<number[]>(
    []
  );

  // Modal state
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [resultImageSrc, setResultImageSrc] = useState<string>("");
  const [isInitialized, setIsInitialized] = useState(false);

  // Refs
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Update URL using TanStack Router (only on "/" route)
  const updateURL = useCallback(
    (emojiUnicode: string, paletteCode?: string) => {
      // Only update URL if we're on the home page
      if (location.pathname === "/") {
        navigate({
          to: "/",
          search: {
            emoji: emojiUnicode,
            palette: paletteCode || undefined,
          },
          replace: true,
        });
      }
    },
    [navigate, location.pathname]
  );

  // Update Emoji
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
      setCurrentEmojiLabel(label);
      updateEmoji(emoji, false);
    },
    [updateEmoji]
  );

  // Initialize: load emoji from URL or random (only on home page)
  useEffect(() => {
    if (isInitialized) return;
    // Skip initialization if not on home page
    if (location.pathname !== "/") return;

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
  }, [
    search.emoji,
    search.palette,
    updateEmoji,
    isInitialized,
    location.pathname,
  ]);

  // Handle color change from color picker
  const handleColorChange = useCallback(
    (idx: number, color: string) => {
      setCustomizedPaletteColors((prev) => {
        const newColors = [...prev];
        newColors[idx] = color;

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
      const baseSize = 256;

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
          triggerDownload(
            canvas.toDataURL("image/png"),
            `${emojiToUnicode(currentEmoji)}-EmojiSalon.png`
          );
        } else if (mission === 2) {
          canvas.toBlob((blob) => {
            if (blob) {
              navigator.clipboard.write([
                new ClipboardItem({ "image/png": blob }),
              ]);
            }
          });
        } else if (mission === 3) {
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
    toast.success("Image downloaded", {
      description: `${emojiToUnicode(currentEmoji)}-EmojiSalon.png`,
    });
  }, [updateCanvas, currentEmoji]);

  // Copy image
  const handleCopyImage = useCallback(() => {
    if (typeof navigator.canShare === "function") {
      updateCanvas(3);
    } else {
      updateCanvas(2);
    }
    toast.success("Image copied to clipboard");
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

  // Computed SVG HTML
  const svgHTML = generateSVGData();
  const referenceSvgHTML = generateReferenceSVG();

  const value: EmojiContextValue = {
    // Basic state
    currentEmoji,
    setCurrentEmoji,
    currentEmojiLabel,
    setCurrentEmojiLabel,
    customizedPaletteColors,
    setCustomizedPaletteColors,

    // SVG data state
    pathArray,
    paletteArray,
    originalPaletteColors,
    originalPaletteIndex,

    // Modal state
    shareModalOpen,
    setShareModalOpen,
    resultImageSrc,

    // Refs
    canvasRef,

    // Computed SVG
    svgHTML,
    referenceSvgHTML,

    // Actions
    handleEmojiSelect,
    handleColorChange,
    handleRandomEmoji,
    handleRandomColors,
    handleReset,
    handleDownloadImage,
    handleCopyImage,
    handleShare,
  };

  return <EmojiContext value={value}>{children}</EmojiContext>;
}

/**
 * Hook to access the emoji context.
 * @throws Error if used outside of EmojiProvider.
 */
export function useEmoji(): EmojiContextValue {
  const context = use(EmojiContext);
  if (!context) {
    throw new Error("useEmoji must be used within an EmojiProvider");
  }
  return context;
}
