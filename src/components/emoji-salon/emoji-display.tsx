interface EmojiDisplayProps {
  svgHTML: string;
  variant?: "customized" | "reference";
}

export function EmojiDisplay({
  svgHTML,
  variant = "customized",
}: EmojiDisplayProps) {
  if (variant === "reference") {
    return (
      <div className="hidden items-center justify-center lg:flex">
        <div
          dangerouslySetInnerHTML={{ __html: svgHTML }}
          className="h-64 w-64"
        />
      </div>
    );
  }

  return (
    <div className="my-8 flex items-center justify-center lg:my-0">
      <div
        dangerouslySetInnerHTML={{ __html: svgHTML }}
        className="h-64 w-64"
      />
    </div>
  );
}
