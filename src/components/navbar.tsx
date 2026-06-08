import { Link } from "@tanstack/react-router";

import { GithubIcon } from "@/components/icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { GITHUB_REPO_URL } from "@/lib/constants";

/**
 * Navigation bar component with links to main pages and external GitHub.
 * Mobile shows logo plus inline page links; desktop shows the full menu.
 */
export default function Navbar() {
  return (
    <>
      {/* Desktop Navigation */}
      <nav
        aria-label="Main navigation"
        className="container sticky top-0 z-(--z-sticky) hidden w-full items-center justify-between bg-background py-4 font-title-sans lg:flex"
      >
        <Link to="/">
          <div className="font-bold text-xl">EmojiSalon</div>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} [&.active]:bg-accent`}
              >
                <Link to="/">
                  <span>Create</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} [&.active]:bg-accent`}
              >
                <Link to="/showcase">Showcase</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} [&.active]:bg-accent`}
              >
                <Link to="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GithubIcon aria-hidden="true" />
                  rutopio/EmojiSalon
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ThemeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Mobile Navigation */}
      <nav
        aria-label="Main navigation"
        className="container sticky top-0 z-(--z-sticky) flex w-full items-center justify-between bg-background py-4 lg:hidden"
      >
        <Link to="/">
          <div className="font-bold font-title-sans text-xl">EmojiSalon</div>
        </Link>
        <div className="flex items-center">
          <Link
            to="/showcase"
            className="rounded-md px-3 py-2 font-medium text-sm [&.active]:bg-accent"
          >
            Showcase
          </Link>
          <Link
            to="/about"
            className="rounded-md px-3 py-2 font-medium text-sm [&.active]:bg-accent"
          >
            About
          </Link>
          <Button
            aria-label="rutopio/EmojiSalon"
            size="icon"
            variant="ghost"
            asChild
          >
            <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer noopener">
              <GithubIcon aria-hidden="true" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
