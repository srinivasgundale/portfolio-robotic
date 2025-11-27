"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                delay: 0.5
            });
            gsap.from(subtitleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                delay: 0.8
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
            <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-6">
                {portfolioData.personalInfo.name}
            </h1>
            <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                {portfolioData.personalInfo.role}
            </p>
            <p className="mt-4 text-muted-foreground/80 max-w-xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
                {portfolioData.personalInfo.bio}
            </p>
        </section>
    );
}
