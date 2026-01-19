import { Link } from "@tanstack/react-router";
import {
  ArrowSquareOutIcon,
  GithubLogoIcon,
  ListIcon,
  PaintBrushIcon,
  StarIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * Navigation bar component with links to main pages and external GitHub.
 * Shows dropdown menu on mobile, full links on desktop.
 */
export function Navbar() {
  return (
    <nav className="container flex w-full items-center justify-end py-4">
      {/* Desktop Navigation */}
      <div className="hidden items-center gap-16 lg:flex">
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
      </div>

      {/* Mobile Navigation */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="lg:hidden">
          <Button
            aria-label="Open menu"
            className="rounded-full shadow-none"
            size="icon"
            variant="ghost"
          >
            <ListIcon className="size-8" weight="bold" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link to="/" className="flex items-center gap-2">
              <PaintBrushIcon className="size-4" />
              Create
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/showcase" className="flex items-center gap-2">
              <StarIcon className="size-4" />
              Showcase
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href="https://github.com/rutopio/EmojiSalon"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2"
            >
              <GithubLogoIcon className="size-4" />
              Github
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
