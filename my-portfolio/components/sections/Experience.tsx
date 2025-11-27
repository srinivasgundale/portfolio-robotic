"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            gsap.utils.toArray(".experience-item").forEach((item: any, i) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    },
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-4 relative z-10">
            <h2
                ref={titleRef}
                className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight text-primary font-mono uppercase"
            >
                {'<'} Work Experience {'/>'}
            </h2>
            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-primary/30 hidden md:block" />

                <div className="space-y-12">
                    {portfolioData.experience.map((job, index) => (
                        <div key={index} className={`experience-item flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-sm border-2 border-background hidden md:block mt-2 shadow-[0_0_10px_rgba(0,255,255,0.8)]" />

                            {/* Content */}
                            <div className="flex-1 md:w-1/2">
                                <div className={`p-8 bg-card/60 backdrop-blur-sm border-2 border-primary/30 rounded-lg hover:border-primary hover:bg-card/80 transition-all duration-500 relative overflow-hidden ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    {/* Corner accents */}
                                    <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-secondary"></div>
                                    <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-secondary"></div>
                                    <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-secondary"></div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-secondary"></div>

                                    <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                        <Briefcase size={16} className="text-primary" />
                                        <span className="text-sm text-primary font-mono">{job.period}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 font-mono">{job.role}</h3>
                                    <h4 className="text-lg text-muted-foreground mb-4 font-mono">{job.company}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {job.description}
                                    </p>
                                </div>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="hidden md:block flex-1" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
