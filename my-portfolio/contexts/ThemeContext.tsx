"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "robotic" | "cyberpunk" | "matrix" | "neon";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isDark: boolean;
    toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("robotic");
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Load theme and dark mode from localStorage
        const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
        const savedDarkMode = localStorage.getItem("portfolio-dark-mode");

        if (savedTheme) {
            setTheme(savedTheme);
        }
        if (savedDarkMode !== null) {
            setIsDark(savedDarkMode === "true");
        }
    }, []);

    useEffect(() => {
        // Save theme to localStorage and apply to document
        localStorage.setItem("portfolio-theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    useEffect(() => {
        // Save dark mode and apply class
        localStorage.setItem("portfolio-dark-mode", String(isDark));
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, isDark, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
}
