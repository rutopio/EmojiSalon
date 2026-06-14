import { GithubLogoIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

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
                className={`${navigationMenuTriggerStyle()} [&.active]:bg-accent`}
                render={
                  <Link to="/">
                    <span>Create</span>
                  </Link>
                }
              />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} [&.active]:bg-accent`}
                render={<Link to="/showcase">Showcase</Link>}
              />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} [&.active]:bg-accent`}
                render={<Link to="/about">About</Link>}
              />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={
                  <a
                    href={GITHUB_REPO_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <GithubLogoIcon aria-hidden="true" />
                    rutopio/emoji-salon
                  </a>
                }
              />
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
            aria-label="rutopio/emoji-salon"
            size="icon"
            variant="ghost"
            nativeButton={false}
            render={
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer noopener"
              >
                <GithubLogoIcon aria-hidden="true" />
              </a>
            }
          />
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
