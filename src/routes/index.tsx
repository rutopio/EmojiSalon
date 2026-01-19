import { createFileRoute } from "@tanstack/react-router";
import { CircleNotchIcon } from "@phosphor-icons/react";
import ActionButtons from "@/components/emoji-salon/action-buttons";
import ColorPalettePicker from "@/components/emoji-salon/color-pickers";
import EmojiDisplay from "@/components/emoji-salon/emoji-display";
import DesktopEmojiPicker from "@/components/emoji-salon/emoji-picker";
import ShareModal from "@/components/emoji-salon/share-modal";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEmoji } from "@/contexts/emoji-context";
import useIsClient from "@/hooks/use-is-client";

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
  const { canvasRef } = useEmoji();
  const isClient = useIsClient();

  // Show loading state during SSR
  if (!isClient) {
    return (
      <div className="flex h-dvh items-center justify-center">
        <CircleNotchIcon size={32} className="animate-spin text-neutral-400" />
      </div>
    );
  }

  return (
    <div className="h-dvh overflow-hidden">
      <div className="flex min-h-dvh flex-col items-center justify-between lg:justify-center">
        {/* Hidden Canvas for image export */}
        <canvas ref={canvasRef} className="hidden" width={256} height={256} />

        <Navbar />

        <div className="container flex flex-1 flex-col items-center justify-between gap-16 lg:justify-center">
          <div className="grid grid-cols-1 items-center lg:grid-cols-3 lg:gap-16">
            <DesktopEmojiPicker />
            <ActionButtons variant="mobile" />
            <EmojiDisplay variant="customized" />
            <EmojiDisplay variant="reference" />
          </div>

          <ActionButtons variant="desktop" />
          <ColorPalettePicker />
        </div>

        <Footer />
        <ShareModal />
      </div>
    </div>
  );
}
