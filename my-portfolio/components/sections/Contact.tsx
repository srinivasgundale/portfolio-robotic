"use client";

import { portfolioData } from "@/data/portfolio";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import SectionDecoration from "@/components/SectionDecoration";
import SectionIcon from "@/components/SectionIcon";

export default function Contact() {
    return (
        <section className="py-32 px-4 relative z-10">
            <SectionDecoration />
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <SectionIcon type="skills" />
                <h2
                    className="text-5xl md:text-6xl font-bold mb-16 tracking-tight text-primary font-mono uppercase"
                >
                    {'<'} Get In Touch {'/>'}
                </h2>
                <div className="flex flex-col items-center gap-6">
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

                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded font-semibold hover:bg-secondary/90 transition-all hover:scale-105 duration-300 border-2 border-secondary hover:shadow-[0_0_20px_rgba(0,255,136,0.8)] font-mono uppercase tracking-wider mb-8 opacity-100"
                        style={{ backgroundColor: 'hsl(140 100% 50% / 0.15)' }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        {'>'} Download Resume
                    </a>

                    <div className="flex gap-6">
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
                </div>

                <div className="mt-20 pt-8 border-t border-primary/20">
                    <p className="text-sm text-muted-foreground font-mono">
                        {'// '} © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}
