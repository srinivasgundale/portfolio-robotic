"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "robotic" | "cyberpunk" | "matrix" | "neon";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("robotic");

    useEffect(() => {
        // Load theme from localStorage
        const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        // Save theme to localStorage and apply to document
        localStorage.setItem("portfolio-theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
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
