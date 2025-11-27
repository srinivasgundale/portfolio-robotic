"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { portfolioData } from "@/data/portfolio";
import RobotAnimation from "@/components/3d/RobotAnimation";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const bioRef = useRef<HTMLParagraphElement>(null);
    const [mounted, setMounted] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const [displayedBio, setDisplayedBio] = useState("");
    const fullText = portfolioData.personalInfo.role;
    const fullBio = portfolioData.personalInfo.bio;

    useEffect(() => {
        setMounted(true);

        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.3
            });

            gsap.from(subtitleRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.6
            });

            gsap.from(bioRef.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.9
            });
        }, containerRef);

        // Typing animation for role - starts after subtitle fades in
        const roleTypingTimeout = setTimeout(() => {
            let i = 0;
            const roleInterval = setInterval(() => {
                if (i < fullText.length) {
                    setDisplayedText(fullText.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(roleInterval);
                    // Start bio typing after role is complete
                    setTimeout(() => {
                        let j = 0;
                        const bioInterval = setInterval(() => {
                            if (j < fullBio.length) {
                                setDisplayedBio(fullBio.substring(0, j + 1));
                                j++;
                            } else {
                                clearInterval(bioInterval);
                            }
                        }, 30); // Faster typing for bio
                    }, 300); // Small delay before bio starts
                }
            }, 100);
        }, 1200);

        return () => {
            ctx.revert();
            clearTimeout(roleTypingTimeout);
        };
    }, [fullText, fullBio]);

    return (
        <section ref={containerRef} className="min-h-screen flex items-center justify-center px-4 relative z-10">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Robot Animation */}
                <div className="order-2 md:order-1">
                    {mounted ? (
                        <RobotAnimation />
                    ) : (
                        <div className="w-full h-[300px] flex items-center justify-center">
                            <div className="text-primary font-mono text-sm">Initializing...</div>
                        </div>
                    )}
                </div>

                {/* Right side - Text Content */}
                <div className="order-1 md:order-2 text-center md:text-left">
                    <div className="mb-4 inline-block px-4 py-2 border border-primary/50 rounded-md bg-primary/5 backdrop-blur-sm">
                        <span className="text-xs font-mono text-primary uppercase tracking-widest">● System Online</span>
                    </div>

                    <h1
                        ref={titleRef}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight neon-glow"
                        style={{
                            fontFamily: "'Courier New', monospace",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em"
                        }}
                    >
                        {portfolioData.personalInfo.name}
                    </h1>

                    <div className="h-px w-48 bg-gradient-to-r from-primary via-secondary to-transparent mb-6 mx-auto md:mx-0"></div>

                    <p
                        ref={subtitleRef}
                        className="text-lg md:text-xl text-primary max-w-xl font-light tracking-wide mb-4 min-h-[2em]"
                        style={{ fontFamily: "'Courier New', monospace" }}
                    >
                        {'>'} {displayedText}
                        {displayedText.length < fullText.length && <span className="animate-pulse">|</span>}
                    </p>

                    <p
                        ref={bioRef}
                        className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary/50 pl-4 min-h-[3em]"
                    >
                        {displayedBio}
                        {displayedBio.length > 0 && displayedBio.length < fullBio.length && <span className="animate-pulse">|</span>}
                    </p>
                </div>
            </div>

            {/* Tech corner decorations */}
            <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-primary/20 hidden lg:block"></div>
            <div className="absolute top-10 right-10 w-16 h-16 border-r-2 border-t-2 border-primary/20 hidden lg:block"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 border-l-2 border-b-2 border-primary/20 hidden lg:block"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-primary/20 hidden lg:block"></div>
        </section>
    );
}
