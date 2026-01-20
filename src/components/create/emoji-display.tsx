/**
 * @fileoverview Emoji display component for showing customized or reference emoji.
 * Renders SVG content for either the customized emoji or the original reference emoji.
 */

import { useEmoji } from "@/contexts/emoji-context";

/**
 * Props for the EmojiDisplay component.
 */
interface EmojiDisplayProps {
  /** Display variant: 'customized' shows the user's customized emoji, 'reference' shows the original. */
  variant?: "customized" | "reference";
}

/**
 * Displays the emoji SVG content based on the selected variant.
 * Shows either the customized emoji or the original reference emoji.
 *
 * @param props - Component props.
 * @returns Emoji display with appropriate SVG content.
 */
export default function EmojiDisplay({
  variant = "customized",
}: EmojiDisplayProps) {
  const { svgHTML, referenceSvgHTML } = useEmoji();

  const svgContent = variant === "reference" ? referenceSvgHTML : svgHTML;

  if (variant === "reference") {
    return (
      <div className="hidden items-center justify-center lg:flex">
        <div
          dangerouslySetInnerHTML={{ __html: svgContent }}
          className="h-64 w-64"
        />
      </div>
    );
  }

  return (
    <div className="my-8 flex items-center justify-center lg:my-0">
      <div
        dangerouslySetInnerHTML={{ __html: svgContent }}
        className="h-64 w-64"
      />
    </div>
  );
}
