"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function SectionDecoration() {
    const { theme } = useTheme();

    return (
        <>
            {/* Robotic Theme - Circuit corners */}
            {theme === "robotic" && (
                <div className="section-decoration">
                    <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/30"></div>
                    <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary/30"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary/30"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/30"></div>

                    {/* Circuit dots */}
                    <div className="absolute top-5 left-5 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="absolute top-5 right-5 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-5 left-5 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-5 right-5 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
            )}

            {/* Cyberpunk Theme - Glitch bars */}
            {theme === "cyberpunk" && (
                <div className="section-decoration">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-glitch-bar"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50 animate-glitch-bar" style={{ animationDelay: '0.5s' }}></div>

                    {/* Glitch squares */}
                    <div className="absolute top-10 left-10 w-3 h-3 bg-primary animate-glitch-square"></div>
                    <div className="absolute top-10 right-10 w-3 h-3 bg-secondary animate-glitch-square" style={{ animationDelay: '0.3s' }}></div>
                    <div className="absolute bottom-10 left-10 w-3 h-3 bg-secondary animate-glitch-square" style={{ animationDelay: '0.6s' }}></div>
                    <div className="absolute bottom-10 right-10 w-3 h-3 bg-primary animate-glitch-square" style={{ animationDelay: '0.9s' }}></div>
                </div>
            )}

            {/* Matrix Theme - Code rain */}
            {theme === "matrix" && (
                <div className="section-decoration">
                    <div className="absolute top-0 left-10 text-primary font-mono text-xs opacity-30 animate-code-fall">
                        1<br />0<br />1<br />1<br />0
                    </div>
                    <div className="absolute top-0 right-10 text-primary font-mono text-xs opacity-30 animate-code-fall" style={{ animationDelay: '1s' }}>
                        0<br />1<br />0<br />1<br />1
                    </div>
                    <div className="absolute top-0 left-1/4 text-secondary font-mono text-xs opacity-20 animate-code-fall" style={{ animationDelay: '2s' }}>
                        1<br />1<br />0<br />0<br />1
                    </div>
                    <div className="absolute top-0 right-1/4 text-secondary font-mono text-xs opacity-20 animate-code-fall" style={{ animationDelay: '3s' }}>
                        0<br />0<br />1<br />1<br />0
                    </div>
                </div>
            )}

            {/* Neon Theme - Retro lines */}
            {theme === "neon" && (
                <div className="section-decoration">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-40"></div>

                    {/* Retro circles */}
                    <div className="absolute top-5 left-5 w-16 h-16 border border-primary/20 rounded-full"></div>
                    <div className="absolute top-7 left-7 w-12 h-12 border border-primary/30 rounded-full animate-pulse"></div>

                    <div className="absolute top-5 right-5 w-16 h-16 border border-secondary/20 rounded-full"></div>
                    <div className="absolute top-7 right-7 w-12 h-12 border border-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>

                    <div className="absolute bottom-5 left-5 w-16 h-16 border border-secondary/20 rounded-full"></div>
                    <div className="absolute bottom-7 left-7 w-12 h-12 border border-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

                    <div className="absolute bottom-5 right-5 w-16 h-16 border border-primary/20 rounded-full"></div>
                    <div className="absolute bottom-7 right-7 w-12 h-12 border border-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
            )}

            <style jsx>{`
                .section-decoration {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 1;
                }

                @keyframes glitchBar {
                    0%, 100% { transform: scaleX(1); opacity: 0.5; }
                    50% { transform: scaleX(0.95); opacity: 0.8; }
                }

                @keyframes glitchSquare {
                    0%, 100% { transform: translate(0, 0); opacity: 1; }
                    25% { transform: translate(-2px, 2px); opacity: 0.5; }
                    75% { transform: translate(2px, -2px); opacity: 0.5; }
                }

                @keyframes codeFall {
                    0% { transform: translateY(-100%); opacity: 0; }
                    10% { opacity: 0.3; }
                    90% { opacity: 0.3; }
                    100% { transform: translateY(500px); opacity: 0; }
                }

                .animate-glitch-bar {
                    animation: glitchBar 2s ease-in-out infinite;
                }

                .animate-glitch-square {
                    animation: glitchSquare 1s ease-in-out infinite;
                }

                .animate-code-fall {
                    animation: codeFall 8s linear infinite;
                }
            `}</style>
        </>
    );
}
