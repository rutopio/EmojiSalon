/**
 * EmojiPreview - Renders a single emoji SVG with optional label.
 */

import { Skeleton } from "@/components/ui/skeleton";

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
      <div className="flex flex-col items-center gap-4 lg:gap-8">
        <div className="flex size-24 items-center justify-center lg:size-32">
          <Skeleton className="size-24 lg:size-32" />
        </div>
        <span className="text-center text-sm text-neutral-500">{label}</span>
      </div>
    );
  }

  return (
    <div className="group flex flex-col items-center gap-4 focus:outline-none lg:gap-8">
      <div
        dangerouslySetInnerHTML={{ __html: svg }}
        className="size-24 lg:size-32 [&>svg]:h-full [&>svg]:w-full"
      />
      <span className="text-center text-sm text-neutral-600 group-hover:text-neutral-900">
        {label}
      </span>
    </div>
  );
}
