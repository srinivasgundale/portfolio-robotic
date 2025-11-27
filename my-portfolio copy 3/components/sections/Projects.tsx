"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight, Code } from "lucide-react";

export default function Projects() {
    return (
        <section className="py-32 px-4 relative z-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="max-w-7xl mx-auto">
                <h2
                    className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight text-primary font-mono uppercase"
                >
                    {'<'} Selected Work {'/>'}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.projects.map((project, index) => (
                        <div
                            key={index}
                            className="p-8 bg-card/60 backdrop-blur-sm border-2 border-primary/30 rounded-lg hover:border-primary hover:bg-card/80 transition-all duration-500 relative overflow-hidden group"
                        >
                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-secondary"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-secondary"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-secondary"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-secondary"></div>

                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-primary/10 rounded border border-primary/30">
                                    <Code className="text-primary" size={24} />
                                </div>
                                <a
                                    href={project.link}
                                    className="text-primary/60 hover:text-primary transition-colors hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ArrowUpRight size={24} />
                                </a>
                            </div>

                            <h3 className="text-xl font-bold mb-3 font-mono text-primary">
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-1 bg-primary/10 border border-primary/40 rounded text-xs text-foreground/90 font-mono"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
