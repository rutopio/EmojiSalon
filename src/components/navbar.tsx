import { Link } from "@tanstack/react-router";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";

/**
 * Navigation bar component with links to main pages and external GitHub.
 */
export function Navbar() {
  return (
    <nav className="container flex w-full items-center justify-end gap-16 py-4">
      <Link
        to="/"
        className="font-base text-xl tracking-wider transition-colors hover:underline [&.active]:font-bold [&.active]:underline"
      >
        Create
      </Link>
      <Link
        to="/showcase"
        className="font-base text-xl tracking-wider transition-colors hover:underline [&.active]:font-bold [&.active]:underline"
      >
        Showcase
      </Link>
      <a
        href="https://github.com/rutopio/EmojiSalon"
        target="_blank"
        rel="noreferrer noopener"
        className="font-base flex items-center gap-2 text-xl tracking-wider transition-colors hover:underline"
      >
        <ArrowSquareOutIcon className="size-5" />
        Github
      </a>
    </nav>
  );
}
