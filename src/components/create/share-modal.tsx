/**
 * @fileoverview Share modal component for sharing customized emoji on the Create page.
 * Wraps the shared ShareDialog with data sourced from EmojiContext.
 */

import ShareDialog from "@/components/shared/share-dialog";
import { useEmoji } from "@/contexts/emoji-context";

/**
 * Share modal for the Create page. Reads state from EmojiContext and delegates
 * rendering to the shared ShareDialog component.
 *
 * @returns Share modal dialog component.
 */
export default function ShareModal() {
  const {
    currentEmoji,
    currentEmojiLabel,
    svgHTML,
    shareModalOpen,
    setShareModalOpen,
    customizedPaletteColors,
    originalPaletteColors,
    originalPaletteIndex,
  } = useEmoji();

  return (
    <ShareDialog
      open={shareModalOpen}
      onOpenChange={setShareModalOpen}
      shareUrl={window.location.href}
      svgHTML={svgHTML}
      emojiLabel={`Customized ${currentEmojiLabel || currentEmoji} emoji`}
      emoji={currentEmoji}
      customizedPaletteColors={customizedPaletteColors}
      originalPaletteColors={originalPaletteColors}
      originalPaletteIndex={originalPaletteIndex}
      showSubmitShowcase
    />
  );
}
