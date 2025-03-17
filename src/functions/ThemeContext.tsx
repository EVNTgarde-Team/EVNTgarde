import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
	isDarkMode: boolean;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
		return localStorage.getItem("theme") === "dark";
	});

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode]);

	const toggleTheme = () => {
		setIsDarkMode((prev) => {
			const newTheme = !prev;

			// Update localStorage for persistence
			localStorage.setItem("theme", newTheme ? "dark" : "light");

			// Apply the class immediately to reflect changes
			if (newTheme) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}

			return newTheme;
		});
	};

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme === "dark") {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		} else {
			setIsDarkMode(false);
			document.documentElement.classList.remove("dark");
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};
