"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight, Code } from "lucide-react";
import SectionDecoration from "@/components/SectionDecoration";
import SectionIcon from "@/components/SectionIcon";

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    return (
        <section className="py-32 px-4 relative z-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <SectionDecoration />
            <div className="max-w-7xl mx-auto relative z-10">
                <SectionIcon type="projects" />
                <h2
                    className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight text-primary font-mono uppercase"
                >
                    {'<'} Selected Work {'/>'}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card p-8 bg-card/60 backdrop-blur-sm border-2 border-primary/30 rounded-lg hover:border-primary transition-all duration-300 relative overflow-hidden group cursor-pointer"
                            style={{
                                transition: 'transform 0.3s ease-out, border-color 0.3s',
                                transformStyle: 'preserve-3d'
                            }}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={(e) => {
                                handleMouseLeave(e);
                                setHoveredProject(null);
                            }}
                        >
                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-secondary"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-secondary"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-secondary"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-secondary"></div>

                            {/* Glow effect on hover */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                                style={{ transform: 'translateZ(-1px)' }}
                            />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-primary/10 rounded border border-primary/30">
                                        <Code className="text-primary" size={24} />
                                    </div>
                                    <a
                                        href={project.link}
                                        className="text-primary/60 hover:text-primary transition-colors duration-300 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
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

                                {/* Hover indicator */}
                                {hoveredProject === index && (
                                    <div className="absolute bottom-4 right-4 text-xs font-mono text-primary/60 animate-pulse">
                                        {'>'} EXPLORE
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
