"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function RobotIllustration() {
    const { theme } = useTheme();

    // Theme-specific colors
    const colors = {
        robotic: { primary: "#00ffff", secondary: "#00ff88" },
        cyberpunk: { primary: "#ff00ff", secondary: "#ff0080" },
        matrix: { primary: "#00ff00", secondary: "#00cc00" },
        neon: { primary: "#ff6b35", secondary: "#f7931e" },
    };

    const themeColors = colors[theme] || colors.robotic;

    return (
        <div className="w-full h-[400px] flex items-center justify-center relative">
            {/* Robotic Theme - Original Robot */}
            {theme === "robotic" && (
                <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full max-w-md"
                    style={{ filter: `drop-shadow(0 0 20px ${themeColors.primary}50)` }}
                >
                    {/* Floating task indicators */}
                    <g className="animate-float-1">
                        <rect x="50" y="80" width="40" height="40" fill="none" stroke={themeColors.primary} strokeWidth="2" rx="4">
                            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                        </rect>
                    </g>
                    <g className="animate-float-2">
                        <rect x="310" y="100" width="35" height="35" fill="none" stroke={themeColors.secondary} strokeWidth="2" rx="4">
                            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
                        </rect>
                    </g>
                    <g className="animate-float-3">
                        <rect x="70" y="280" width="30" height="30" fill="none" stroke={themeColors.primary} strokeWidth="2" rx="4">
                            <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
                        </rect>
                    </g>

                    {/* Robot Body */}
                    <g className="robot-body">
                        <rect x="150" y="180" width="100" height="120" fill="#1a3a4a" stroke={themeColors.primary} strokeWidth="3" rx="8" />
                        <rect x="165" y="200" width="70" height="40" fill="#0a1520" stroke={themeColors.secondary} strokeWidth="2" rx="4" />
                        <circle cx="180" cy="220" r="4" fill={themeColors.primary}>
                            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="220" cy="220" r="4" fill={themeColors.primary}>
                            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
                        </circle>

                        <rect x="160" y="120" width="80" height="70" fill="#2a5a7a" stroke={themeColors.primary} strokeWidth="3" rx="8" />
                        <rect x="175" y="145" width="20" height="15" fill={themeColors.primary} rx="3">
                            <animate attributeName="opacity" values="1;0.2;1" dur="3s" repeatCount="indefinite" />
                        </rect>
                        <rect x="205" y="145" width="20" height="15" fill={themeColors.primary} rx="3">
                            <animate attributeName="opacity" values="1;0.2;1" dur="3s" repeatCount="indefinite" />
                        </rect>

                        <line x1="200" y1="120" x2="200" y2="95" stroke="#3a6a8a" strokeWidth="4" strokeLinecap="round" />
                        <circle cx="200" cy="90" r="8" fill={themeColors.secondary}>
                            <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
                        </circle>

                        <g className="animate-arm-left">
                            <rect x="120" y="200" width="25" height="60" fill="#2a5a7a" stroke={themeColors.primary} strokeWidth="2" rx="6" />
                            <rect x="115" y="265" width="30" height="20" fill="#1a3a4a" stroke={themeColors.secondary} strokeWidth="2" rx="4" />
                        </g>

                        <g className="animate-arm-right">
                            <rect x="255" y="200" width="25" height="60" fill="#2a5a7a" stroke={themeColors.primary} strokeWidth="2" rx="6" />
                            <rect x="255" y="265" width="30" height="20" fill="#1a3a4a" stroke={themeColors.secondary} strokeWidth="2" rx="4" />
                        </g>

                        <rect x="165" y="305" width="25" height="50" fill="#1a3a4a" stroke={themeColors.primary} strokeWidth="2" rx="6" />
                        <rect x="210" y="305" width="25" height="50" fill="#1a3a4a" stroke={themeColors.primary} strokeWidth="2" rx="6" />
                        <rect x="160" y="355" width="35" height="15" fill="#2a5a7a" stroke={themeColors.secondary} strokeWidth="2" rx="4" />
                        <rect x="205" y="355" width="35" height="15" fill="#2a5a7a" stroke={themeColors.secondary} strokeWidth="2" rx="4" />
                    </g>
                </svg>
            )}

            {/* Cyberpunk Theme - Edgy Cyber Robot */}
            {theme === "cyberpunk" && (
                <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full max-w-md"
                    style={{ filter: `drop-shadow(0 0 25px ${themeColors.primary}80)` }}
                >
                    {/* Glitch effects */}
                    <rect x="180" y="100" width="40" height="200" fill={themeColors.primary} opacity="0.1">
                        <animate attributeName="x" values="180;185;180;175;180" dur="0.3s" repeatCount="indefinite" />
                    </rect>

                    {/* Cyber Robot */}
                    <polygon points="200,80 220,100 220,180 180,180 180,100" fill="#1a0a2a" stroke={themeColors.primary} strokeWidth="3" />
                    <rect x="185" y="110" width="12" height="20" fill={themeColors.primary} rx="2">
                        <animate attributeName="fill" values={`${themeColors.primary};${themeColors.secondary};${themeColors.primary}`} dur="1s" repeatCount="indefinite" />
                    </rect>
                    <rect x="203" y="110" width="12" height="20" fill={themeColors.primary} rx="2">
                        <animate attributeName="fill" values={`${themeColors.primary};${themeColors.secondary};${themeColors.primary}`} dur="1s" begin="0.5s" repeatCount="indefinite" />
                    </rect>

                    <rect x="170" y="180" width="60" height="80" fill="#2a0a3a" stroke={themeColors.secondary} strokeWidth="3" rx="5" />
                    <line x1="185" y1="200" x2="215" y2="200" stroke={themeColors.primary} strokeWidth="2" />
                    <line x1="185" y1="220" x2="215" y2="220" stroke={themeColors.primary} strokeWidth="2" />
                    <line x1="185" y1="240" x2="215" y2="240" stroke={themeColors.primary} strokeWidth="2" />

                    <rect x="140" y="190" width="20" height="50" fill="#2a0a3a" stroke={themeColors.primary} strokeWidth="2" rx="3" />
                    <rect x="240" y="190" width="20" height="50" fill="#2a0a3a" stroke={themeColors.primary} strokeWidth="2" rx="3" />

                    <rect x="180" y="265" width="15" height="60" fill="#1a0a2a" stroke={themeColors.secondary} strokeWidth="2" />
                    <rect x="205" y="265" width="15" height="60" fill="#1a0a2a" stroke={themeColors.secondary} strokeWidth="2" />

                    {/* Glowing orbs */}
                    <circle cx="150" cy="120" r="8" fill={themeColors.secondary} opacity="0.8">
                        <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="250" cy="140" r="6" fill={themeColors.primary} opacity="0.8">
                        <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
                    </circle>
                </svg>
            )}

            {/* Matrix Theme - Code-style Robot */}
            {theme === "matrix" && (
                <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full max-w-md"
                    style={{ filter: `drop-shadow(0 0 20px ${themeColors.primary}60)` }}
                >
                    {/* Falling code lines */}
                    <text x="100" y="50" fill={themeColors.primary} fontSize="12" fontFamily="monospace" opacity="0.5">
                        01010101
                        <animateTransform attributeName="transform" type="translate" values="0,0; 0,350" dur="3s" repeatCount="indefinite" />
                    </text>
                    <text x="280" y="30" fill={themeColors.primary} fontSize="12" fontFamily="monospace" opacity="0.5">
                        11001100
                        <animateTransform attributeName="transform" type="translate" values="0,0; 0,350" dur="4s" repeatCount="indefinite" />
                    </text>

                    {/* Digital Robot */}
                    <rect x="160" y="100" width="80" height="80" fill="none" stroke={themeColors.primary} strokeWidth="2" rx="4" />
                    <text x="175" y="140" fill={themeColors.primary} fontSize="40" fontFamily="monospace">{'{ }'}</text>

                    <rect x="170" y="185" width="60" height="90" fill="none" stroke={themeColors.primary} strokeWidth="2" />
                    <line x1="180" y1="200" x2="220" y2="200" stroke={themeColors.primary} strokeWidth="1" />
                    <line x1="180" y1="215" x2="220" y2="215" stroke={themeColors.primary} strokeWidth="1" />
                    <line x1="180" y1="230" x2="220" y2="230" stroke={themeColors.primary} strokeWidth="1" />
                    <line x1="180" y1="245" x2="220" y2="245" stroke={themeColors.primary} strokeWidth="1" />
                    <line x1="180" y1="260" x2="220" y2="260" stroke={themeColors.primary} strokeWidth="1" />

                    <rect x="140" y="190" width="20" height="60" fill="none" stroke={themeColors.primary} strokeWidth="2" />
                    <rect x="240" y="190" width="20" height="60" fill="none" stroke={themeColors.primary} strokeWidth="2" />

                    <rect x="175" y="280" width="20" height="70" fill="none" stroke={themeColors.primary} strokeWidth="2" />
                    <rect x="205" y="280" width="20" height="70" fill="none" stroke={themeColors.primary} strokeWidth="2" />

                    <circle cx="200" cy="80" r="10" fill={themeColors.primary}>
                        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
                    </circle>
                </svg>
            )}

            {/* Neon Theme - Retro Wave Robot */}
            {theme === "neon" && (
                <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full max-w-md"
                    style={{ filter: `drop-shadow(0 0 30px ${themeColors.primary}90)` }}
                >
                    {/* Retro sun rays */}
                    <circle cx="200" cy="100" r="60" fill="none" stroke={themeColors.secondary} strokeWidth="2" opacity="0.3" />
                    <circle cx="200" cy="100" r="70" fill="none" stroke={themeColors.primary} strokeWidth="2" opacity="0.2" />
                    <circle cx="200" cy="100" r="80" fill="none" stroke={themeColors.secondary} strokeWidth="2" opacity="0.1" />

                    {/* Retro Robot */}
                    <rect x="160" y="140" width="80" height="70" fill="#2a1a0a" stroke={themeColors.primary} strokeWidth="3" rx="10" />
                    <circle cx="180" cy="165" r="8" fill={themeColors.primary}>
                        <animate attributeName="fill" values={`${themeColors.primary};${themeColors.secondary};${themeColors.primary}`} dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="220" cy="165" r="8" fill={themeColors.primary}>
                        <animate attributeName="fill" values={`${themeColors.primary};${themeColors.secondary};${themeColors.primary}`} dur="2s" begin="1s" repeatCount="indefinite" />
                    </circle>
                    <rect x="185" y="185" width="30" height="5" fill={themeColors.secondary} rx="2" />

                    <rect x="170" y="215" width="60" height="80" fill="#3a2a1a" stroke={themeColors.secondary} strokeWidth="3" rx="8" />
                    <circle cx="190" cy="240" r="6" fill={themeColors.primary} opacity="0.8">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="210" cy="240" r="6" fill={themeColors.primary} opacity="0.8">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" begin="0.75s" repeatCount="indefinite" />
                    </circle>

                    <rect x="135" y="220" width="25" height="55" fill="#2a1a0a" stroke={themeColors.primary} strokeWidth="2" rx="6" />
                    <rect x="240" y="220" width="25" height="55" fill="#2a1a0a" stroke={themeColors.primary} strokeWidth="2" rx="6" />

                    <rect x="180" y="300" width="18" height="55" fill="#2a1a0a" stroke={themeColors.secondary} strokeWidth="2" rx="4" />
                    <rect x="202" y="300" width="18" height="55" fill="#2a1a0a" stroke={themeColors.secondary} strokeWidth="2" rx="4" />

                    {/* Retro grid lines */}
                    <line x1="100" y1="350" x2="300" y2="350" stroke={themeColors.primary} strokeWidth="1" opacity="0.3" />
                    <line x1="100" y1="360" x2="300" y2="360" stroke={themeColors.primary} strokeWidth="1" opacity="0.2" />
                </svg>
            )}

            <style jsx>{`
                @keyframes float1 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(10px, -15px); }
                }
                @keyframes float2 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-15px, 10px); }
                }
                @keyframes float3 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(12px, 8px); }
                }
                @keyframes armLeft {
                    0%, 100% { transform: rotate(-5deg); transform-origin: 132px 200px; }
                    50% { transform: rotate(5deg); transform-origin: 132px 200px; }
                }
                @keyframes armRight {
                    0%, 100% { transform: rotate(5deg); transform-origin: 267px 200px; }
                    50% { transform: rotate(-5deg); transform-origin: 267px 200px; }
                }
                .animate-float-1 {
                    animation: float1 3s ease-in-out infinite;
                }
                .animate-float-2 {
                    animation: float2 4s ease-in-out infinite;
                }
                .animate-float-3 {
                    animation: float3 3.5s ease-in-out infinite;
                }
                .animate-arm-left {
                    animation: armLeft 2s ease-in-out infinite;
                }
                .animate-arm-right {
                    animation: armRight 2s ease-in-out infinite 0.5s;
                }
            `}</style>
        </div>
    );
}
