import { createFileRoute } from "@tanstack/react-router";
import { CircleNotchIcon } from "@phosphor-icons/react";
import {
  ActionButtons,
  ColorPalettePicker,
  DesktopEmojiPicker,
  EmojiDisplay,
  Footer,
  ShareModal,
  useIsClient,
} from "@/components/emoji-salon";
import { Navbar } from "@/components/navbar";
import { useEmojiActions } from "@/hooks/use-emoji-actions";

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
  const { canvasRef } = useEmojiActions();
  const isClient = useIsClient();

  // Show loading state during SSR
  if (!isClient) {
    return (
      <div className="flex h-dvh items-center justify-center bg-neutral-50">
        <CircleNotchIcon size={32} className="animate-spin text-neutral-400" />
      </div>
    );
  }

  return (
    <div className="h-dvh overflow-hidden bg-neutral-50">
      <div className="flex min-h-dvh flex-col items-center justify-center">
        {/* Hidden Canvas for image export */}
        <canvas ref={canvasRef} className="hidden" width={256} height={256} />

        <Navbar />

        <div className="container flex flex-1 flex-col items-center justify-center gap-8">
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
