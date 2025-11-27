"use client";

import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
    {
        id: "robotic" as const,
        name: "Robotic",
        colors: ["#00ffff", "#00ff88"],
        description: "Cyan & Green Tech"
    },
    {
        id: "cyberpunk" as const,
        name: "Cyberpunk",
        colors: ["#ff00ff", "#ff0080"],
        description: "Magenta & Pink Neon"
    },
    {
        id: "matrix" as const,
        name: "Matrix",
        colors: ["#00ff00", "#00cc00"],
        description: "Classic Green Code"
    },
    {
        id: "neon" as const,
        name: "Neon",
        colors: ["#ff6b35", "#f7931e"],
        description: "Orange & Yellow Glow"
    },
];

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-24 right-6 z-50">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 bg-card border-2 border-primary rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                style={{
                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
                }}
            >
                <Palette size={24} className="text-primary" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-20 right-0 w-64 bg-card border-2 border-primary/30 rounded-lg shadow-2xl p-4 backdrop-blur-md"
                    >
                        <h3 className="text-sm font-mono text-primary mb-3 uppercase tracking-wider">
                            {'<'} Select Theme {'/>'}
                        </h3>
                        <div className="space-y-2">
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => {
                                        setTheme(t.id);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full p-3 rounded-lg border-2 transition-all duration-300 text-left ${theme === t.id
                                            ? "border-primary bg-primary/10 scale-105"
                                            : "border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1">
                                            {t.colors.map((color, i) => (
                                                <div
                                                    key={i}
                                                    className="w-4 h-4 rounded-full"
                                                    style={{
                                                        backgroundColor: color,
                                                        boxShadow: `0 0 10px ${color}`
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <div>
                                            <div className="text-sm font-mono font-bold text-foreground">
                                                {t.name}
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                {t.description}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
