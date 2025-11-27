"use client";

export default function RobotIllustration() {
    return (
        <div className="w-full h-[400px] flex items-center justify-center relative">
            {/* Robot SVG Illustration */}
            <svg
                viewBox="0 0 400 400"
                className="w-full h-full max-w-md"
                style={{ filter: "drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))" }}
            >
                {/* Floating task indicators */}
                <g className="animate-float-1">
                    <rect x="50" y="80" width="40" height="40" fill="none" stroke="#00ffff" strokeWidth="2" rx="4">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                    </rect>
                </g>
                <g className="animate-float-2">
                    <rect x="310" y="100" width="35" height="35" fill="none" stroke="#00ff88" strokeWidth="2" rx="4">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
                    </rect>
                </g>
                <g className="animate-float-3">
                    <rect x="70" y="280" width="30" height="30" fill="none" stroke="#00ffff" strokeWidth="2" rx="4">
                        <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
                    </rect>
                </g>

                {/* Robot Body */}
                <g className="robot-body">
                    {/* Main Body */}
                    <rect x="150" y="180" width="100" height="120" fill="#1a3a4a" stroke="#00ffff" strokeWidth="3" rx="8" />

                    {/* Body Details */}
                    <rect x="165" y="200" width="70" height="40" fill="#0a1520" stroke="#00ff88" strokeWidth="2" rx="4" />
                    <circle cx="180" cy="220" r="4" fill="#00ffff">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="220" cy="220" r="4" fill="#00ffff">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Head */}
                    <rect x="160" y="120" width="80" height="70" fill="#2a5a7a" stroke="#00ffff" strokeWidth="3" rx="8" />

                    {/* Eyes */}
                    <rect x="175" y="145" width="20" height="15" fill="#00ffff" rx="3">
                        <animate attributeName="opacity" values="1;0.2;1" dur="3s" repeatCount="indefinite" />
                    </rect>
                    <rect x="205" y="145" width="20" height="15" fill="#00ffff" rx="3">
                        <animate attributeName="opacity" values="1;0.2;1" dur="3s" repeatCount="indefinite" />
                    </rect>

                    {/* Antenna */}
                    <line x1="200" y1="120" x2="200" y2="95" stroke="#3a6a8a" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="200" cy="90" r="8" fill="#00ff88">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
                    </circle>

                    {/* Left Arm */}
                    <g className="animate-arm-left">
                        <rect x="120" y="200" width="25" height="60" fill="#2a5a7a" stroke="#00ffff" strokeWidth="2" rx="6" />
                        <rect x="115" y="265" width="30" height="20" fill="#1a3a4a" stroke="#00ff88" strokeWidth="2" rx="4" />
                    </g>

                    {/* Right Arm */}
                    <g className="animate-arm-right">
                        <rect x="255" y="200" width="25" height="60" fill="#2a5a7a" stroke="#00ffff" strokeWidth="2" rx="6" />
                        <rect x="255" y="265" width="30" height="20" fill="#1a3a4a" stroke="#00ff88" strokeWidth="2" rx="4" />
                    </g>

                    {/* Legs */}
                    <rect x="165" y="305" width="25" height="50" fill="#1a3a4a" stroke="#00ffff" strokeWidth="2" rx="6" />
                    <rect x="210" y="305" width="25" height="50" fill="#1a3a4a" stroke="#00ffff" strokeWidth="2" rx="6" />

                    {/* Feet */}
                    <rect x="160" y="355" width="35" height="15" fill="#2a5a7a" stroke="#00ff88" strokeWidth="2" rx="4" />
                    <rect x="205" y="355" width="35" height="15" fill="#2a5a7a" stroke="#00ff88" strokeWidth="2" rx="4" />
                </g>
            </svg>

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
