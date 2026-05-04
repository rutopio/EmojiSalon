import { MoonIcon, SunIcon } from "@phosphor-icons/react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="Toggle theme" variant="ghost" size="icon">
          <SunIcon
            weight="bold"
            aria-hidden="true"
            className="size-[1.2rem] scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90"
          />
          <MoonIcon
            weight="bold"
            aria-hidden="true"
            className="absolute size-[1.2rem] scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuCheckboxItem
          checked={theme === "light"}
          onCheckedChange={(v) => v && setTheme("light")}
        >
          Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "dark"}
          onCheckedChange={(v) => v && setTheme("dark")}
        >
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "system"}
          onCheckedChange={(v) => v && setTheme("system")}
        >
          System
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
