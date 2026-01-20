import { createFileRoute } from "@tanstack/react-router";
import ActionButtons from "@/components/create/action-buttons";
import ColorPalettePickers from "@/components/create/color-palette-pickers";
import EmojiDisplay from "@/components/create/emoji-display";
import DesktopEmojiPicker from "@/components/create/emoji-picker";
import ShareModal from "@/components/create/share-modal";
import { Spinner } from "@/components/ui/spinner";
import { useEmoji } from "@/contexts/emoji-context";
import useIsClient from "@/hooks/use-is-client";
import PageLayout from "@/layout";

// Define search params type
interface EmojiSearchParams {
  emoji?: string;
  palette?: string;
}

export const Route = createFileRoute("/(index)/")({
  component: EmojiSalonPage,
  validateSearch: (search: Record<string, unknown>): EmojiSearchParams => {
    return {
      emoji: typeof search.emoji === "string" ? search.emoji : undefined,
      palette: typeof search.palette === "string" ? search.palette : undefined,
    };
  },
  head: () => ({
    meta: [
      {
        title: "Create | Emoji Salon - Coloring Your Emoji",
        description: "Customize your emoji colors with Emoji Salon!",
      },
    ],
  }),
});

function EmojiSalonPage() {
  const { canvasRef } = useEmoji();
  const isClient = useIsClient();

  // Show loading state during SSR
  if (!isClient) {
    return (
      <div className="flex h-dvh items-center justify-center">
        <Spinner className="size-8" />
      </div>
    );
  }

  return (
    <PageLayout>
      {/* Hidden Canvas for image export */}
      <canvas ref={canvasRef} className="hidden" width={256} height={256} />

      <div className="container flex flex-1 flex-col items-center justify-between gap-16 lg:justify-center">
        <div className="grid grid-cols-1 items-center lg:grid-cols-3 lg:gap-16">
          <DesktopEmojiPicker />
          <ActionButtons variant="mobile" />
          <EmojiDisplay variant="customized" />
          <EmojiDisplay variant="reference" />
        </div>

        <ActionButtons variant="desktop" />
        <ColorPalettePickers />
      </div>

      <ShareModal />
    </PageLayout>
  );
}
