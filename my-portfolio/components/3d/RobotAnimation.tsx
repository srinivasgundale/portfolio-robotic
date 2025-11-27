"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function RobotIllustration() {
    const { theme } = useTheme();

    return (
        <div className="w-full h-[400px] flex items-center justify-center relative">
            {/* ROBOTIC THEME - Coding Robot */}
            {theme === "robotic" && (
                <div className="relative w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 500 500" className="w-full h-full max-w-lg">
                        {/* Laptop */}
                        <g className="laptop">
                            <rect x="150" y="280" width="200" height="120" fill="#1a3a4a" stroke="#00ffff" strokeWidth="3" rx="5" />
                            <rect x="160" y="290" width="180" height="90" fill="#0a1520" stroke="#00ff88" strokeWidth="2" />
                            {/* Code lines */}
                            <text x="170" y="310" fill="#00ffff" fontSize="12" fontFamily="monospace">
                                {'> const robot ='}
                                <animate attributeName="opacity" values="0;1;1;1" dur="4s" repeatCount="indefinite" />
                            </text>
                            <text x="170" y="330" fill="#00ff88" fontSize="12" fontFamily="monospace">
                                {'  { coding: true }'}
                                <animate attributeName="opacity" values="0;0;1;1" dur="4s" repeatCount="indefinite" />
                            </text>
                            <text x="170" y="350" fill="#00ffff" fontSize="12" fontFamily="monospace">
                                {'> robot.work()'}
                                <animate attributeName="opacity" values="0;0;0;1" dur="4s" repeatCount="indefinite" />
                            </text>
                            <rect x="150" y="400" width="200" height="10" fill="#2a5a7a" stroke="#00ffff" strokeWidth="2" />
                        </g>

                        {/* Robot sitting and typing */}
                        <g className="typing-robot">
                            {/* Body */}
                            <ellipse cx="250" cy="260" rx="50" ry="40" fill="#2a5a7a" stroke="#00ffff" strokeWidth="3" />

                            {/* Head */}
                            <circle cx="250" cy="200" r="35" fill="#1a3a4a" stroke="#00ffff" strokeWidth="3" />
                            <circle cx="235" cy="195" r="6" fill="#00ffff">
                                <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="265" cy="195" r="6" fill="#00ffff">
                                <animate attributeName="opacity" values="1;0.3;1" dur="3s" begin="0.5s" repeatCount="indefinite" />
                            </circle>
                            <path d="M 235 210 Q 250 220 265 210" stroke="#00ff88" strokeWidth="2" fill="none" />

                            {/* Antenna */}
                            <line x1="250" y1="165" x2="250" y2="145" stroke="#00ffff" strokeWidth="3" />
                            <circle cx="250" cy="140" r="6" fill="#00ff88">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
                            </circle>

                            {/* Arms typing */}
                            <g className="arm-left-typing">
                                <line x1="210" y1="250" x2="180" y2="290" stroke="#00ffff" strokeWidth="4" strokeLinecap="round" />
                                <circle cx="180" cy="295" r="8" fill="#00ff88" />
                            </g>
                            <g className="arm-right-typing">
                                <line x1="290" y1="250" x2="320" y2="290" stroke="#00ffff" strokeWidth="4" strokeLinecap="round" />
                                <circle cx="320" cy="295" r="8" fill="#00ff88" />
                            </g>
                        </g>

                        {/* Floating code symbols */}
                        <text x="100" y="150" fill="#00ffff" fontSize="20" opacity="0.5" className="float-symbol-1">{'{ }'}</text>
                        <text x="380" y="180" fill="#00ff88" fontSize="20" opacity="0.5" className="float-symbol-2">{'< />'}</text>
                        <text x="120" y="350" fill="#00ffff" fontSize="20" opacity="0.5" className="float-symbol-3">{'[ ]'}</text>
                    </svg>

                    <style jsx>{`
                        .typing-robot {
                            animation: bobTyping 2s ease-in-out infinite;
                        }
                        @keyframes bobTyping {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-8px); }
                        }
                        .arm-left-typing {
                            animation: typeLeft 0.6s ease-in-out infinite;
                            transform-origin: 210px 250px;
                        }
                        .arm-right-typing {
                            animation: typeRight 0.6s ease-in-out infinite 0.3s;
                            transform-origin: 290px 250px;
                        }
                        @keyframes typeLeft {
                            0%, 100% { transform: rotate(0deg); }
                            50% { transform: rotate(-10deg); }
                        }
                        @keyframes typeRight {
                            0%, 100% { transform: rotate(0deg); }
                            50% { transform: rotate(10deg); }
                        }
                        .float-symbol-1 {
                            animation: floatSymbol1 3s ease-in-out infinite;
                        }
                        .float-symbol-2 {
                            animation: floatSymbol2 4s ease-in-out infinite;
                        }
                        .float-symbol-3 {
                            animation: floatSymbol3 3.5s ease-in-out infinite;
                        }
                        @keyframes floatSymbol1 {
                            0%, 100% { transform: translate(0, 0); }
                            50% { transform: translate(10px, -15px); }
                        }
                        @keyframes floatSymbol2 {
                            0%, 100% { transform: translate(0, 0); }
                            50% { transform: translate(-10px, 15px); }
                        }
                        @keyframes floatSymbol3 {
                            0%, 100% { transform: translate(0, 0); }
                            50% { transform: translate(15px, -10px); }
                        }
                    `}</style>
                </div>
            )}

            {/* CYBERPUNK THEME - DJ Robot */}
            {theme === "cyberpunk" && (
                <div className="relative w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 500 500" className="w-full h-full max-w-lg">
                        {/* DJ Deck */}
                        <rect x="150" y="300" width="200" height="80" fill="#2a0a3a" stroke="#ff00ff" strokeWidth="3" rx="10" />
                        <circle cx="190" cy="340" r="25" fill="#1a0a2a" stroke="#ff0080" strokeWidth="3" className="turntable-left" />
                        <circle cx="310" cy="340" r="25" fill="#1a0a2a" stroke="#ff0080" strokeWidth="3" className="turntable-right" />
                        <rect x="240" y="320" width="20" height="40" fill="#ff00ff" rx="3" className="fader" />

                        {/* DJ Robot */}
                        <g className="dj-robot">
                            {/* Body */}
                            <rect x="210" y="220" width="80" height="90" fill="#2a0a3a" stroke="#ff00ff" strokeWidth="3" rx="10" />

                            {/* Head with headphones */}
                            <ellipse cx="250" cy="180" rx="40" ry="35" fill="#1a0a2a" stroke="#ff00ff" strokeWidth="3" />
                            <ellipse cx="220" cy="180" rx="15" ry="20" fill="#2a0a3a" stroke="#ff0080" strokeWidth="3" />
                            <ellipse cx="280" cy="180" rx="15" ry="20" fill="#2a0a3a" stroke="#ff0080" strokeWidth="3" />
                            <rect x="220" y="160" width="60" height="5" fill="#ff00ff" rx="2" />

                            {/* Eyes - X shape */}
                            <line x1="235" y1="175" x2="245" y2="185" stroke="#ff00ff" strokeWidth="3" />
                            <line x1="245" y1="175" x2="235" y2="185" stroke="#ff00ff" strokeWidth="3" />
                            <line x1="255" y1="175" x2="265" y2="185" stroke="#ff0080" strokeWidth="3" />
                            <line x1="265" y1="175" x2="255" y2="185" stroke="#ff0080" strokeWidth="3" />

                            {/* Arms DJing */}
                            <g className="arm-dj-left">
                                <line x1="210" y1="240" x2="190" y2="320" stroke="#ff00ff" strokeWidth="5" strokeLinecap="round" />
                            </g>
                            <g className="arm-dj-right">
                                <line x1="290" y1="240" x2="310" y2="320" stroke="#ff0080" strokeWidth="5" strokeLinecap="round" />
                            </g>
                        </g>

                        {/* Music notes */}
                        <text x="120" y="200" fill="#ff00ff" fontSize="30" className="music-note-1">♪</text>
                        <text x="360" y="180" fill="#ff0080" fontSize="35" className="music-note-2">♫</text>
                        <text x="140" y="280" fill="#ff00ff" fontSize="25" className="music-note-3">♪</text>
                        <text x="340" y="260" fill="#ff0080" fontSize="30" className="music-note-4">♫</text>

                        {/* Glitch lines */}
                        <line x1="100" y1="250" x2="400" y2="250" stroke="#ff00ff" strokeWidth="1" opacity="0.3" className="glitch-line-1" />
                        <line x1="100" y1="270" x2="400" y2="270" stroke="#ff0080" strokeWidth="1" opacity="0.3" className="glitch-line-2" />
                    </svg>

                    <style jsx>{`
                        .dj-robot {
                            animation: djBounce 0.5s ease-in-out infinite;
                        }
                        @keyframes djBounce {
                            0%, 100% { transform: translateY(0) scale(1); }
                            50% { transform: translateY(-10px) scale(1.02); }
                        }
                        .turntable-left {
                            animation: spinLeft 2s linear infinite;
                            transform-origin: 190px 340px;
                        }
                        .turntable-right {
                            animation: spinRight 1.5s linear infinite;
                            transform-origin: 310px 340px;
                        }
                        @keyframes spinLeft {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(360deg); }
                        }
                        @keyframes spinRight {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(-360deg); }
                        }
                        .fader {
                            animation: faderMove 1s ease-in-out infinite alternate;
                        }
                        @keyframes faderMove {
                            from { transform: translateY(0); }
                            to { transform: translateY(-10px); }
                        }
                        .arm-dj-left {
                            animation: scratchLeft 0.8s ease-in-out infinite;
                            transform-origin: 210px 240px;
                        }
                        .arm-dj-right {
                            animation: scratchRight 0.8s ease-in-out infinite 0.4s;
                            transform-origin: 290px 240px;
                        }
                        @keyframes scratchLeft {
                            0%, 100% { transform: rotate(0deg); }
                            50% { transform: rotate(-15deg); }
                        }
                        @keyframes scratchRight {
                            0%, 100% { transform: rotate(0deg); }
                            50% { transform: rotate(15deg); }
                        }
                        .music-note-1 {
                            animation: floatNote 2s ease-in-out infinite;
                        }
                        .music-note-2 {
                            animation: floatNote 2.5s ease-in-out infinite 0.5s;
                        }
                        .music-note-3 {
                            animation: floatNote 2.2s ease-in-out infinite 1s;
                        }
                        .music-note-4 {
                            animation: floatNote 2.8s ease-in-out infinite 1.5s;
                        }
                        @keyframes floatNote {
                            0% { transform: translateY(0); opacity: 0; }
                            50% { opacity: 1; }
                            100% { transform: translateY(-50px); opacity: 0; }
                        }
                        .glitch-line-1 {
                            animation: glitchLine 0.3s ease-in-out infinite;
                        }
                        .glitch-line-2 {
                            animation: glitchLine 0.3s ease-in-out infinite 0.15s;
                        }
                        @keyframes glitchLine {
                            0%, 100% { transform: translateX(0); }
                            25% { transform: translateX(-5px); }
                            75% { transform: translateX(5px); }
                        }
                    `}</style>
                </div>
            )}

            {/* MATRIX THEME - Hacker Robot */}
            {theme === "matrix" && (
                <div className="relative w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 500 500" className="w-full h-full max-w-lg">
                        {/* Multiple computer screens */}
                        <rect x="100" y="280" width="120" height="90" fill="#0a1a0a" stroke="#00ff00" strokeWidth="2" rx="5" />
                        <rect x="280" y="280" width="120" height="90" fill="#0a1a0a" stroke="#00ff00" strokeWidth="2" rx="5" />

                        {/* Falling code on screens */}
                        <text x="110" y="300" fill="#00ff00" fontSize="10" fontFamily="monospace" className="code-fall-1">
                            10110101
                        </text>
                        <text x="110" y="320" fill="#00cc00" fontSize="10" fontFamily="monospace" className="code-fall-2">
                            01011010
                        </text>
                        <text x="290" y="310" fill="#00ff00" fontSize="10" fontFamily="monospace" className="code-fall-3">
                            11001100
                        </text>

                        {/* Hacker Robot */}
                        <g className="hacker-robot">
                            {/* Hoodie */}
                            <path d="M 200 240 L 180 200 L 180 160 L 250 160 L 320 160 L 320 200 L 300 240 Z"
                                fill="#1a2a1a" stroke="#00ff00" strokeWidth="3" />

                            {/* Head */}
                            <rect x="220" y="180" width="60" height="60" fill="#0a1a0a" stroke="#00ff00" strokeWidth="3" rx="5" />

                            {/* Digital eyes */}
                            <rect x="230" y="200" width="15" height="10" fill="#00ff00" className="eye-scan-left" />
                            <rect x="255" y="200" width="15" height="10" fill="#00ff00" className="eye-scan-right" />

                            {/* Mouth - command line */}
                            <rect x="230" y="220" width="40" height="3" fill="#00ff00" />
                            <text x="232" y="218" fill="#00ff00" fontSize="8" fontFamily="monospace">_</text>

                            {/* Body */}
                            <rect x="210" y="240" width="80" height="80" fill="#1a2a1a" stroke="#00ff00" strokeWidth="3" rx="5" />

                            {/* Arms typing */}
                            <g className="arm-hack-left">
                                <line x1="210" y1="260" x2="150" y2="300" stroke="#00ff00" strokeWidth="4" strokeLinecap="round" />
                                <circle cx="150" cy="305" r="6" fill="#00cc00" />
                            </g>
                            <g className="arm-hack-right">
                                <line x1="290" y1="260" x2="350" y2="300" stroke="#00ff00" strokeWidth="4" strokeLinecap="round" />
                                <circle cx="350" cy="305" r="6" fill="#00cc00" />
                            </g>
                        </g>

                        {/* Matrix rain */}
                        <text x="80" y="100" fill="#00ff00" fontSize="14" fontFamily="monospace" opacity="0.6" className="matrix-rain-1">
                            1<tspan x="80" dy="15">0</tspan><tspan x="80" dy="15">1</tspan>
                        </text>
                        <text x="420" y="120" fill="#00cc00" fontSize="14" fontFamily="monospace" opacity="0.6" className="matrix-rain-2">
                            0<tspan x="420" dy="15">1</tspan><tspan x="420" dy="15">1</tspan>
                        </text>
                        <text x="150" y="80" fill="#00ff00" fontSize="14" fontFamily="monospace" opacity="0.6" className="matrix-rain-3">
                            1<tspan x="150" dy="15">1</tspan><tspan x="150" dy="15">0</tspan>
                        </text>
                    </svg>

                    <style jsx>{`
                        .hacker-robot {
                            animation: hackBob 1.5s ease-in-out infinite;
                        }
                        @keyframes hackBob {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-5px); }
                        }
                        .eye-scan-left, .eye-scan-right {
                            animation: eyeScan 2s ease-in-out infinite;
                        }
                        @keyframes eyeScan {
                            0%, 100% { opacity: 1; width: 15px; }
                            50% { opacity: 0.3; width: 5px; }
                        }
                        .arm-hack-left {
                            animation: hackTypeLeft 0.4s ease-in-out infinite;
                            transform-origin: 210px 260px;
                        }
                        .arm-hack-right {
                            animation: hackTypeRight 0.4s ease-in-out infinite 0.2s;
                            transform-origin: 290px 260px;
                        }
                        @keyframes hackTypeLeft {
                            0%, 100% { transform: rotate(0deg); }
                            50% { transform: rotate(-8deg); }
                        }
                        @keyframes hackTypeRight {
                            0%, 100% { transform: rotate(0deg); }
                            50% { transform: rotate(8deg); }
                        }
                        .code-fall-1, .code-fall-2, .code-fall-3 {
                            animation: codeFall 3s linear infinite;
                        }
                        @keyframes codeFall {
                            0% { transform: translateY(-20px); opacity: 0; }
                            50% { opacity: 1; }
                            100% { transform: translateY(80px); opacity: 0; }
                        }
                        .matrix-rain-1 {
                            animation: rainFall 4s linear infinite;
                        }
                        .matrix-rain-2 {
                            animation: rainFall 5s linear infinite 1s;
                        }
                        .matrix-rain-3 {
                            animation: rainFall 4.5s linear infinite 2s;
                        }
                        @keyframes rainFall {
                            0% { transform: translateY(0); opacity: 0; }
                            10% { opacity: 1; }
                            90% { opacity: 1; }
                            100% { transform: translateY(400px); opacity: 0; }
                        }
                    `}</style>
                </div>
            )}

            {/* NEON THEME - Dancing Robot */}
            {theme === "neon" && (
                <div className="relative w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 500 500" className="w-full h-full max-w-lg">
                        {/* Disco floor */}
                        <rect x="150" y="350" width="200" height="20" fill="#3a2a1a" stroke="#ff6b35" strokeWidth="2" />
                        <rect x="150" y="350" width="50" height="20" fill="#ff6b35" opacity="0.3" className="floor-light-1" />
                        <rect x="200" y="350" width="50" height="20" fill="#f7931e" opacity="0.3" className="floor-light-2" />
                        <rect x="250" y="350" width="50" height="20" fill="#ff6b35" opacity="0.3" className="floor-light-3" />
                        <rect x="300" y="350" width="50" height="20" fill="#f7931e" opacity="0.3" className="floor-light-4" />

                        {/* Dancing Robot */}
                        <g className="dancing-robot">
                            {/* Body */}
                            <ellipse cx="250" cy="280" rx="45" ry="50" fill="#2a1a0a" stroke="#ff6b35" strokeWidth="3" />
                            <circle cx="235" cy="270" r="8" fill="#f7931e" className="body-light-1" />
                            <circle cx="265" cy="270" r="8" fill="#ff6b35" className="body-light-2" />

                            {/* Head */}
                            <circle cx="250" cy="210" r="35" fill="#2a1a0a" stroke="#ff6b35" strokeWidth="3" />
                            <circle cx="235" cy="205" r="8" fill="#ff6b35" className="eye-disco-left" />
                            <circle cx="265" cy="205" r="8" fill="#f7931e" className="eye-disco-right" />
                            <path d="M 235 220 Q 250 230 265 220" stroke="#ff6b35" strokeWidth="3" fill="none" />

                            {/* Disco antenna */}
                            <line x1="250" y1="175" x2="250" y2="155" stroke="#ff6b35" strokeWidth="3" />
                            <circle cx="250" cy="150" r="8" fill="#f7931e" className="disco-ball" />

                            {/* Arms dancing */}
                            <g className="arm-dance-left">
                                <line x1="210" y1="270" x2="180" y2="240" stroke="#ff6b35" strokeWidth="5" strokeLinecap="round" />
                                <circle cx="180" cy="235" r="10" fill="#f7931e" />
                            </g>
                            <g className="arm-dance-right">
                                <line x1="290" y1="270" x2="320" y2="240" stroke="#f7931e" strokeWidth="5" strokeLinecap="round" />
                                <circle cx="320" cy="235" r="10" fill="#ff6b35" />
                            </g>

                            {/* Legs dancing */}
                            <g className="leg-dance-left">
                                <line x1="230" y1="330" x2="220" y2="350" stroke="#ff6b35" strokeWidth="5" strokeLinecap="round" />
                            </g>
                            <g className="leg-dance-right">
                                <line x1="270" y1="330" x2="280" y2="350" stroke="#f7931e" strokeWidth="5" strokeLinecap="round" />
                            </g>
                        </g>

                        {/* Sparkles */}
                        <circle cx="150" cy="180" r="4" fill="#ff6b35" className="sparkle-1" />
                        <circle cx="350" cy="200" r="5" fill="#f7931e" className="sparkle-2" />
                        <circle cx="180" cy="150" r="3" fill="#ff6b35" className="sparkle-3" />
                        <circle cx="320" cy="170" r="4" fill="#f7931e" className="sparkle-4" />

                        {/* Retro sun */}
                        <circle cx="250" cy="100" r="40" fill="none" stroke="#ff6b35" strokeWidth="2" opacity="0.3" />
                        <circle cx="250" cy="100" r="50" fill="none" stroke="#f7931e" strokeWidth="2" opacity="0.2" />
                    </svg>

                    <style jsx>{`
                        .dancing-robot {
                            animation: danceBounce 0.6s ease-in-out infinite;
                        }
                        @keyframes danceBounce {
                            0%, 100% { transform: translateY(0) rotate(0deg); }
                            25% { transform: translateY(-15px) rotate(-3deg); }
                            75% { transform: translateY(-15px) rotate(3deg); }
                        }
                        .arm-dance-left {
                            animation: danceArmLeft 0.8s ease-in-out infinite;
                            transform-origin: 210px 270px;
                        }
                        .arm-dance-right {
                            animation: danceArmRight 0.8s ease-in-out infinite 0.4s;
                            transform-origin: 290px 270px;
                        }
                        @keyframes danceArmLeft {
                            0%, 100% { transform: rotate(0deg); }
                            50% { transform: rotate(-45deg); }
                        }
                        @keyframes danceArmRight {
                            0%, 100% { transform: rotate(0deg); }
                            50% { transform: rotate(45deg); }
                        }
                        .leg-dance-left {
                            animation: danceLegLeft 0.4s ease-in-out infinite;
                            transform-origin: 230px 330px;
                        }
                        .leg-dance-right {
                            animation: danceLegRight 0.4s ease-in-out infinite 0.2s;
                            transform-origin: 270px 330px;
                        }
                        @keyframes danceLegLeft {
                            0%, 100% { transform: rotate(0deg); }
                            50% { transform: rotate(-20deg); }
                        }
                        @keyframes danceLegRight {
                            0%, 100% { transform: rotate(0deg); }
                            50% { transform: rotate(20deg); }
                        }
                        .disco-ball {
                            animation: discoBall 1s linear infinite;
                        }
                        @keyframes discoBall {
                            0%, 100% { opacity: 1; transform: scale(1); }
                            50% { opacity: 0.5; transform: scale(1.3); }
                        }
                        .eye-disco-left, .eye-disco-right {
                            animation: discoEyes 0.5s ease-in-out infinite alternate;
                        }
                        @keyframes discoEyes {
                            from { opacity: 1; }
                            to { opacity: 0.3; }
                        }
                        .body-light-1, .body-light-2 {
                            animation: bodyLights 0.8s ease-in-out infinite alternate;
                        }
                        @keyframes bodyLights {
                            from { opacity: 0.3; }
                            to { opacity: 1; }
                        }
                        .floor-light-1 {
                            animation: floorLight 0.8s ease-in-out infinite;
                        }
                        .floor-light-2 {
                            animation: floorLight 0.8s ease-in-out infinite 0.2s;
                        }
                        .floor-light-3 {
                            animation: floorLight 0.8s ease-in-out infinite 0.4s;
                        }
                        .floor-light-4 {
                            animation: floorLight 0.8s ease-in-out infinite 0.6s;
                        }
                        @keyframes floorLight {
                            0%, 100% { opacity: 0.3; }
                            50% { opacity: 1; }
                        }
                        .sparkle-1 {
                            animation: sparkle 1.5s ease-in-out infinite;
                        }
                        .sparkle-2 {
                            animation: sparkle 1.8s ease-in-out infinite 0.3s;
                        }
                        .sparkle-3 {
                            animation: sparkle 1.6s ease-in-out infinite 0.6s;
                        }
                        .sparkle-4 {
                            animation: sparkle 2s ease-in-out infinite 0.9s;
                        }
                        @keyframes sparkle {
                            0%, 100% { opacity: 0; transform: scale(0); }
                            50% { opacity: 1; transform: scale(1.5); }
                        }
                    `}</style>
                </div>
            )}
        </div>
    );
}
