import type React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeContext"

export const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800 text-yellow-300" : "bg-gray-200 text-gray-800"}`}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

