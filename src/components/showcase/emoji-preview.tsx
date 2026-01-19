/**
 * EmojiPreview - Renders a single emoji SVG with optional label.
 */

import { CircleNotchIcon } from "@phosphor-icons/react";

interface EmojiPreviewProps {
  svg: string;
  label: string;
  isLoading?: boolean;
}

export default function EmojiPreview({
  svg,
  label,
  isLoading = false,
}: EmojiPreviewProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="flex size-32 items-center justify-center">
          <CircleNotchIcon
            size={24}
            className="animate-spin text-neutral-400"
          />
        </div>
        <span className="text-center text-sm text-neutral-500">{label}</span>
      </div>
    );
  }

  return (
    <div className="group flex flex-col items-center gap-8 focus:outline-none">
      <div
        dangerouslySetInnerHTML={{ __html: svg }}
        className="size-32 [&>svg]:h-full [&>svg]:w-full"
      />
      <span className="text-center text-sm text-neutral-600 group-hover:text-neutral-900">
        {label}
      </span>
    </div>
  );
}
