/**
 * @fileoverview Main emoji customization page route.
 * Provides the interface for selecting emojis, customizing colors,
 * and downloading or sharing customized emojis.
 */

import { createFileRoute } from "@tanstack/react-router";
import { useEmoji } from "@/contexts/emoji-context";
import PageLayout from "@/layout";

import ActionButtons from "@/components/create/action-buttons";
import ColorPalettePickers from "@/components/create/color-palette-pickers";
import EmojiDisplay from "@/components/create/emoji-display";
import DesktopEmojiPicker from "@/components/create/emoji-picker";
import ShareModal from "@/components/create/share-modal";
import { Spinner } from "@/components/ui/spinner";
import useIsClient from "@/hooks/use-is-client";

/**
 * Search parameters for the emoji customization page.
 */
interface EmojiSearchParams {
  /** Unicode emoji identifier from URL. */
  emoji?: string;
  /** Palette override string from URL. */
  palette?: string;
}

/**
 * Main emoji customization page route configuration.
 * Validates search parameters and provides page metadata.
 */
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
        title: "Create | EmojiSalon - Coloring Your Emoji",
        description: "Customize your emoji colors with EmojiSalon!",
      },
    ],
  }),
});

/**
 * Main emoji customization page component.
 * Displays emoji picker, color customization controls, and emoji previews.
 * Shows loading spinner during SSR to prevent hydration mismatches.
 *
 * @returns Emoji customization page component.
 */
function EmojiSalonPage() {
  const { canvasRef } = useEmoji();
  const isClient = useIsClient();

  // Show loading state during SSR to prevent hydration mismatches
  if (!isClient) {
    return (
      <div className="flex h-dvh items-center justify-center">
        <Spinner className="size-8" />
      </div>
    );
  }

  return (
    <PageLayout>
      {/* Hidden canvas for image export */}
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
