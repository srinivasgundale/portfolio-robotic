"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-tag", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom-=100",
                },
                scale: 0,
                opacity: 0,
                stagger: 0.05,
                duration: 0.5,
                ease: "back.out(1.7)"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-20 px-4 relative z-10 bg-black/20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {portfolioData.skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-tag px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg font-medium hover:bg-white/10 hover:border-primary/50 transition-all cursor-default"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
