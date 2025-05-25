"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle(props: { size?: "default" | "icon" }) {
  const size = props.size || "default";
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={size}>
          <span className={size === "icon" ? "sr-only" : "pr-0.5"}>
            Velg fargetema
          </span>
          <Sun className="block dark:hidden" />
          <Moon className="hidden dark:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Automatisk
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Lyst
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Mørkt
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
