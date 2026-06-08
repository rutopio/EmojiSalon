import { useCallback, useRef } from "react";
import { flushSync } from "react-dom";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function getClipPaths(
  cx: number,
  cy: number,
  maxRadius: number
): [string, string] {
  return [
    `circle(0px at ${cx}px ${cy}px)`,
    `circle(${maxRadius}px at ${cx}px ${cy}px)`,
  ];
}

interface ThemeToggleProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export function ThemeToggle({
  className,
  duration = 300,
  ...props
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isDark = resolvedTheme === "dark";

  const toggle = useCallback(() => {
    const button = buttonRef.current;
    if (!button) return;

    const applyTheme = () => setTheme(isDark ? "light" : "dark");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      typeof document.startViewTransition !== "function" ||
      prefersReducedMotion
    ) {
      applyTheme();
      return;
    }

    const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const { top, left, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(x, viewportWidth - x),
      Math.max(y, viewportHeight - y)
    );

    const clipPath = getClipPaths(x, y, maxRadius);
    const root = document.documentElement;
    root.style.setProperty("--theme-vt-clip-from", clipPath[0]);

    const cleanup = () => {
      root.style.removeProperty("--theme-vt-clip-from");
    };

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme);
    });

    if (typeof transition?.finished?.finally === "function") {
      transition.finished.finally(cleanup);
    } else {
      cleanup();
    }

    transition?.ready?.then(() => {
      document.documentElement.animate(
        { clipPath },
        {
          duration,
          easing: "ease-in-out",
          fill: "forwards",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }, [isDark, duration, setTheme]);

  return (
    <Button
      ref={buttonRef}
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggle}
      className={cn(className)}
      {...props}
    >
      <div className="relative size-4 transition-transform duration-150 ease-in-out group-hover/button:scale-110">
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.25,
            filter: isDark ? "blur(0px)" : "blur(4px)",
          }}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
        >
          <SunIcon size={16} aria-hidden="true" />
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.25 : 1,
            filter: isDark ? "blur(4px)" : "blur(0px)",
          }}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
        >
          <MoonIcon weight="bold" size={16} aria-hidden="true" />
        </motion.span>
      </div>
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </Button>
  );
}
