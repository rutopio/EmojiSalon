import { useEmojiActions } from "@/hooks/use-emoji-actions";

interface EmojiDisplayProps {
  variant?: "customized" | "reference";
}

export function EmojiDisplay({ variant = "customized" }: EmojiDisplayProps) {
  const { svgHTML, referenceSvgHTML } = useEmojiActions();

  const html = variant === "reference" ? referenceSvgHTML : svgHTML;

  if (variant === "reference") {
    return (
      <div className="hidden items-center justify-center lg:flex">
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="h-64 w-64"
        />
      </div>
    );
  }

  return (
    <div className="my-8 flex items-center justify-center lg:my-0">
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="h-64 w-64"
      />
    </div>
  );
}
