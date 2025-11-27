"use client";

import { useTheme } from "@/contexts/ThemeContext";

interface SectionIconProps {
    type: "skills" | "projects" | "experience" | "education";
}

export default function SectionIcon({ type }: SectionIconProps) {
    const { theme } = useTheme();

    // Skills Icons
    if (type === "skills") {
        return (
            <div className="w-32 h-32 mx-auto mb-8">
                {theme === "robotic" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#00ffff" strokeWidth="2" className="animate-spin-slow" />
                        <circle cx="50" cy="50" r="30" fill="none" stroke="#00ff88" strokeWidth="2" className="animate-spin-reverse" />
                        <circle cx="50" cy="50" r="20" fill="none" stroke="#00ffff" strokeWidth="2" className="animate-spin-slow" />
                        <circle cx="50" cy="50" r="5" fill="#00ff88" className="animate-pulse" />
                        <line x1="50" y1="10" x2="50" y2="25" stroke="#00ffff" strokeWidth="2" />
                        <line x1="50" y1="75" x2="50" y2="90" stroke="#00ffff" strokeWidth="2" />
                        <line x1="10" y1="50" x2="25" y2="50" stroke="#00ff88" strokeWidth="2" />
                        <line x1="75" y1="50" x2="90" y2="50" stroke="#00ff88" strokeWidth="2" />
                    </svg>
                )}
                {theme === "cyberpunk" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <polygon points="50,10 90,35 90,65 50,90 10,65 10,35" fill="none" stroke="#ff00ff" strokeWidth="3" className="animate-pulse-glow" />
                        <polygon points="50,25 75,40 75,60 50,75 25,60 25,40" fill="none" stroke="#ff0080" strokeWidth="2" className="animate-spin-slow" />
                        <circle cx="50" cy="50" r="8" fill="#ff00ff" className="animate-ping" />
                        <text x="50" y="55" textAnchor="middle" fill="#ff0080" fontSize="12" fontFamily="monospace">⚡</text>
                    </svg>
                )}
                {theme === "matrix" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <rect x="20" y="20" width="60" height="60" fill="none" stroke="#00ff00" strokeWidth="2" />
                        <rect x="30" y="30" width="40" height="40" fill="none" stroke="#00cc00" strokeWidth="2" className="animate-pulse" />
                        <text x="50" y="55" textAnchor="middle" fill="#00ff00" fontSize="20" fontFamily="monospace" className="animate-pulse">{'{ }'}</text>
                        <line x1="15" y1="15" x2="25" y2="25" stroke="#00ff00" strokeWidth="1" opacity="0.5" />
                        <line x1="85" y1="15" x2="75" y2="25" stroke="#00ff00" strokeWidth="1" opacity="0.5" />
                        <line x1="15" y1="85" x2="25" y2="75" stroke="#00ff00" strokeWidth="1" opacity="0.5" />
                        <line x1="85" y1="85" x2="75" y2="75" stroke="#00ff00" strokeWidth="1" opacity="0.5" />
                    </svg>
                )}
                {theme === "neon" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#ff6b35" strokeWidth="3" className="animate-pulse" />
                        <circle cx="50" cy="50" r="25" fill="none" stroke="#f7931e" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <circle cx="50" cy="50" r="15" fill="none" stroke="#ff6b35" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
                        <circle cx="50" cy="50" r="5" fill="#f7931e" className="animate-ping" />
                        <text x="50" y="55" textAnchor="middle" fill="#ff6b35" fontSize="16">★</text>
                    </svg>
                )}
            </div>
        );
    }

    // Projects Icons
    if (type === "projects") {
        return (
            <div className="w-32 h-32 mx-auto mb-8">
                {theme === "robotic" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <rect x="20" y="30" width="60" height="40" fill="none" stroke="#00ffff" strokeWidth="2" rx="5" />
                        <rect x="25" y="35" width="50" height="25" fill="#00ffff" fillOpacity="0.1" />
                        <line x1="30" y1="42" x2="65" y2="42" stroke="#00ff88" strokeWidth="1" className="animate-pulse" />
                        <line x1="30" y1="48" x2="60" y2="48" stroke="#00ff88" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                        <line x1="30" y1="54" x2="55" y2="54" stroke="#00ff88" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                        <rect x="40" y="70" width="20" height="5" fill="#00ffff" rx="2" />
                        <line x1="50" y1="75" x2="50" y2="85" stroke="#00ffff" strokeWidth="2" />
                        <rect x="35" y="85" width="30" height="3" fill="#00ff88" />
                    </svg>
                )}
                {theme === "cyberpunk" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <rect x="25" y="25" width="50" height="50" fill="none" stroke="#ff00ff" strokeWidth="3" className="glitch-rect" />
                        <rect x="30" y="30" width="40" height="40" fill="#ff00ff" fillOpacity="0.1" />
                        <path d="M 35 40 L 45 50 L 35 60" stroke="#ff0080" strokeWidth="2" fill="none" className="animate-pulse" />
                        <circle cx="60" cy="50" r="8" fill="none" stroke="#ff0080" strokeWidth="2" className="animate-ping" />
                        <line x1="20" y1="50" x2="80" y2="50" stroke="#ff00ff" strokeWidth="1" opacity="0.3" className="glitch-line" />
                    </svg>
                )}
                {theme === "matrix" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <rect x="30" y="25" width="40" height="50" fill="none" stroke="#00ff00" strokeWidth="2" />
                        <line x1="35" y1="35" x2="65" y2="35" stroke="#00ff00" strokeWidth="1" />
                        <line x1="35" y1="45" x2="65" y2="45" stroke="#00cc00" strokeWidth="1" />
                        <line x1="35" y1="55" x2="65" y2="55" stroke="#00ff00" strokeWidth="1" />
                        <line x1="35" y1="65" x2="65" y2="65" stroke="#00cc00" strokeWidth="1" />
                        <text x="50" y="50" textAnchor="middle" fill="#00ff00" fontSize="10" fontFamily="monospace" className="animate-pulse">010</text>
                    </svg>
                )}
                {theme === "neon" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <rect x="25" y="30" width="50" height="40" fill="none" stroke="#ff6b35" strokeWidth="3" rx="8" className="animate-pulse" />
                        <circle cx="40" cy="45" r="6" fill="#f7931e" className="animate-pulse" />
                        <circle cx="60" cy="45" r="6" fill="#ff6b35" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <path d="M 40 58 Q 50 65 60 58" stroke="#f7931e" strokeWidth="2" fill="none" />
                    </svg>
                )}
            </div>
        );
    }

    // Experience Icons
    if (type === "experience") {
        return (
            <div className="w-32 h-32 mx-auto mb-8">
                {theme === "robotic" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#00ffff" strokeWidth="2" />
                        <circle cx="50" cy="50" r="3" fill="#00ffff" />
                        <line x1="50" y1="50" x2="50" y2="25" stroke="#00ff88" strokeWidth="2" className="clock-hand" />
                        <line x1="50" y1="50" x2="65" y2="50" stroke="#00ffff" strokeWidth="2" className="clock-hand-2" />
                        <circle cx="50" cy="20" r="2" fill="#00ffff" />
                        <circle cx="80" cy="50" r="2" fill="#00ffff" />
                        <circle cx="50" cy="80" r="2" fill="#00ffff" />
                        <circle cx="20" cy="50" r="2" fill="#00ffff" />
                    </svg>
                )}
                {theme === "cyberpunk" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M 30 70 L 30 40 L 50 25 L 70 40 L 70 70 Z" fill="none" stroke="#ff00ff" strokeWidth="3" className="animate-pulse-glow" />
                        <rect x="40" y="45" width="20" height="15" fill="#ff0080" fillOpacity="0.3" />
                        <line x1="35" y1="55" x2="45" y2="55" stroke="#ff00ff" strokeWidth="2" />
                        <line x1="55" y1="55" x2="65" y2="55" stroke="#ff00ff" strokeWidth="2" />
                        <circle cx="50" cy="35" r="4" fill="#ff0080" className="animate-ping" />
                    </svg>
                )}
                {theme === "matrix" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <rect x="35" y="25" width="30" height="50" fill="none" stroke="#00ff00" strokeWidth="2" />
                        <rect x="40" y="30" width="20" height="15" fill="#00ff00" fillOpacity="0.2" />
                        <rect x="40" y="50" width="20" height="15" fill="#00cc00" fillOpacity="0.2" />
                        <line x1="25" y1="40" x2="35" y2="40" stroke="#00ff00" strokeWidth="2" />
                        <line x1="65" y1="40" x2="75" y2="40" stroke="#00ff00" strokeWidth="2" />
                        <line x1="25" y1="60" x2="35" y2="60" stroke="#00cc00" strokeWidth="2" />
                        <line x1="65" y1="60" x2="75" y2="60" stroke="#00cc00" strokeWidth="2" />
                    </svg>
                )}
                {theme === "neon" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M 50 20 L 70 40 L 70 70 L 50 85 L 30 70 L 30 40 Z" fill="none" stroke="#ff6b35" strokeWidth="3" className="animate-pulse" />
                        <circle cx="50" cy="45" r="8" fill="#f7931e" className="animate-pulse" />
                        <path d="M 45 60 L 50 70 L 55 60" stroke="#ff6b35" strokeWidth="2" fill="none" />
                    </svg>
                )}
            </div>
        );
    }

    // Education Icons
    if (type === "education") {
        return (
            <div className="w-32 h-32 mx-auto mb-8">
                {theme === "robotic" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M 50 20 L 80 35 L 80 65 L 50 80 L 20 65 L 20 35 Z" fill="none" stroke="#00ffff" strokeWidth="2" />
                        <path d="M 50 35 L 65 43 L 65 57 L 50 65 L 35 57 L 35 43 Z" fill="#00ffff" fillOpacity="0.1" stroke="#00ff88" strokeWidth="2" className="animate-pulse" />
                        <line x1="50" y1="20" x2="50" y2="35" stroke="#00ffff" strokeWidth="2" />
                        <circle cx="50" cy="15" r="3" fill="#00ff88" className="animate-pulse" />
                    </svg>
                )}
                {theme === "cyberpunk" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <polygon points="50,25 75,40 75,60 50,75 25,60 25,40" fill="none" stroke="#ff00ff" strokeWidth="3" className="glitch-poly" />
                        <polygon points="50,35 65,43 65,57 50,65 35,57 35,43" fill="#ff0080" fillOpacity="0.2" />
                        <text x="50" y="55" textAnchor="middle" fill="#ff00ff" fontSize="20" fontFamily="monospace">📚</text>
                    </svg>
                )}
                {theme === "matrix" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <rect x="30" y="30" width="40" height="40" fill="none" stroke="#00ff00" strokeWidth="2" />
                        <rect x="35" y="35" width="30" height="30" fill="none" stroke="#00cc00" strokeWidth="1" className="animate-pulse" />
                        <text x="50" y="55" textAnchor="middle" fill="#00ff00" fontSize="16" fontFamily="monospace">∞</text>
                        <line x1="25" y1="25" x2="35" y2="35" stroke="#00ff00" strokeWidth="1" />
                        <line x1="75" y1="25" x2="65" y2="35" stroke="#00ff00" strokeWidth="1" />
                        <line x1="25" y1="75" x2="35" y2="65" stroke="#00ff00" strokeWidth="1" />
                        <line x1="75" y1="75" x2="65" y2="65" stroke="#00ff00" strokeWidth="1" />
                    </svg>
                )}
                {theme === "neon" && (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="30" fill="none" stroke="#ff6b35" strokeWidth="3" className="animate-pulse" />
                        <circle cx="50" cy="50" r="20" fill="none" stroke="#f7931e" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <text x="50" y="58" textAnchor="middle" fill="#ff6b35" fontSize="24">🎓</text>
                    </svg>
                )}
            </div>
        );
    }

    return null;
}
