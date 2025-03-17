import type React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const ThemeToggle: React.FC = () => {
	const { isDarkMode, toggleTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Prevent hydration mismatch on first render
	useEffect(() => {
		setMounted(true);
	}, []);

	// Update <html> class dynamically and persist theme
	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDarkMode]);

	// Avoid rendering on SSR until hydration is complete
	if (!mounted) return null;

	return (
		<motion.button
			onClick={toggleTheme}
			className={`p-2 rounded-full transition-all duration-300 shadow-md 
        ${
					isDarkMode
						? "bg-[#2B579A] text-yellow-300"
						: "bg-[#1E3A6D] text-white"
				}
        hover:scale-105 active:scale-95
      `}
			aria-label="Toggle theme"
			aria-pressed={isDarkMode}
			whileTap={{ scale: 0.9 }}
		>
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={isDarkMode ? "sun" : "moon"}
					initial={{ rotate: 180, opacity: 0 }}
					animate={{ rotate: 0, opacity: 1 }}
					exit={{ rotate: -180, opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					{isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
				</motion.div>
			</AnimatePresence>
		</motion.button>
	);
};
