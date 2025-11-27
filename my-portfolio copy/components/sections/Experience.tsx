"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray(".experience-item").forEach((item: any, i) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    },
                    x: i % 2 === 0 ? -50 : 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.2
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-20 px-4 relative z-10 bg-black/20">
            <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>
            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />

                <div className="space-y-12">
                    {portfolioData.experience.map((job, index) => (
                        <div key={index} className={`experience-item flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block mt-1.5" />

                            {/* Content */}
                            <div className="flex-1 md:w-1/2">
                                <div className={`p-6 bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-primary/50 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                        <Briefcase size={16} className="text-primary" />
                                        <span className="text-sm text-primary font-mono">{job.period}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                                    <h4 className="text-lg text-muted-foreground mb-4">{job.company}</h4>
                                    <p className="text-muted-foreground/80 text-sm leading-relaxed">
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
