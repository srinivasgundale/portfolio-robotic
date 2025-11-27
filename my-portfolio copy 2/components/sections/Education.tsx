"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".education-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom-=100",
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-20 px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                {portfolioData.education.map((edu, index) => (
                    <div key={index} className="education-card p-6 bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-primary/50 transition-colors">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <GraduationCap className="text-primary" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">{edu.school}</h3>
                                <p className="text-muted-foreground mb-2">{edu.degree}</p>
                                <span className="text-sm text-primary font-mono">{edu.year}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
