"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/Major Pages/Dashboards/Registered/Elements/theme-provider";
import { Button } from "./ui/combined-ui";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-white hover:bg-blue-600 dark:hover:bg-blue-800"
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-5 w-5 rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
