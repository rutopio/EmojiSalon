import { Link, useLocation } from "@tanstack/react-router";
import { CaretRightIcon, ListIcon } from "@phosphor-icons/react";

import { GithubIcon } from "@/components/icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { GITHUB_REPO_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Navigation bar component with links to main pages and external GitHub.
 * Shows dropdown menu on mobile, full links on desktop.
 */
export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isShowcase = location.pathname === "/showcase";
  const isAbout = location.pathname === "/about";
  return (
    <>
      {/* Desktop Navigation */}
      <nav
        aria-label="Main navigation"
        className="bg-background font-title-sans sticky top-0 z-(--z-sticky) container hidden w-full items-center justify-between py-4 lg:flex"
      >
        <Link to="/">
          <div className="text-xl font-bold">EmojiSalon</div>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} [&.active]:font-bold [&.active]:underline [&.active]:underline-offset-4`}
              >
                <Link to="/">
                  <span>Create</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} [&.active]:font-bold [&.active]:underline [&.active]:underline-offset-4`}
              >
                <Link to="/showcase">Showcase</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} [&.active]:font-bold [&.active]:underline [&.active]:underline-offset-4`}
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
        className="bg-background sticky top-0 z-(--z-sticky) container flex w-full items-center justify-between py-4 lg:hidden"
      >
        <Link to="/">
          <div className="font-title-sans text-xl font-bold">EmojiSalon</div>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-label="Open menu" size="icon" variant="ghost">
                <ListIcon className="size-6" weight="bold" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-fit min-w-48">
              <DropdownMenuItem asChild>
                <Link to="/" className="flex items-center gap-2">
                  <CaretRightIcon
                    className={cn("size-4 opacity-0", isHome && "opacity-100")}
                    aria-hidden="true"
                  />
                  Create
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/showcase" className="flex items-center gap-2">
                  <CaretRightIcon
                    className={cn(
                      "size-4 opacity-0",
                      isShowcase && "opacity-100"
                    )}
                    aria-hidden="true"
                  />
                  Showcase
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about" className="flex items-center gap-2">
                  <CaretRightIcon
                    className={cn("size-4 opacity-0", isAbout && "opacity-100")}
                    aria-hidden="true"
                  />
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2"
                >
                  <GithubIcon aria-hidden="true" />
                  rutopio/EmojiSalon
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
}
