"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

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

            gsap.from(contentRef.current?.children || [], {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <h2
                    ref={titleRef}
                    className="text-5xl md:text-6xl font-bold mb-16 tracking-tight text-primary font-mono uppercase"
                >
                    {'<'} Get In Touch {'/>'}
                </h2>
                <div ref={contentRef} className="flex flex-col items-center gap-6">
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed border-l-2 border-primary/50 pl-4">
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href={`mailto:${portfolioData.personalInfo.email}`}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90 transition-all hover:scale-105 duration-300 border-2 border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] font-mono uppercase tracking-wider"
                    >
                        <Mail size={20} />
                        {'>'} Initialize Contact
                    </a>

                    <div className="flex gap-6 mt-8">
                        <a href={portfolioData.personalInfo.social.github} className="text-primary/60 hover:text-primary transition-colors duration-300 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
                            <Github size={28} />
                        </a>
                        <a href={portfolioData.personalInfo.social.linkedin} className="text-primary/60 hover:text-primary transition-colors duration-300 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
                            <Linkedin size={28} />
                        </a>
                        <a href={portfolioData.personalInfo.social.twitter} className="text-primary/60 hover:text-primary transition-colors duration-300 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
                            <Twitter size={28} />
                        </a>
                    </div>

                    <div className="mt-12 text-sm text-muted-foreground/50 font-mono">
                        <p>© {new Date().getFullYear()} {portfolioData.personalInfo.name} // All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
