"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const categories = [
        {
            title: "Languages",
            skills: portfolioData.skills.languages.map(skill => ({ name: skill, level: 90 }))
        },
        {
            title: "Frontend",
            skills: portfolioData.skills.frontend.map(skill => ({ name: skill, level: 85 }))
        },
        {
            title: "Backend",
            skills: portfolioData.skills.backend.map(skill => ({ name: skill, level: 88 }))
        },
        {
            title: "Database",
            skills: portfolioData.skills.database.map(skill => ({ name: skill, level: 82 }))
        },
        {
            title: "Cloud & DevOps",
            skills: portfolioData.skills.cloud.map(skill => ({ name: skill, level: 80 }))
        },
        {
            title: "Tools",
            skills: portfolioData.skills.tools.map(skill => ({ name: skill, level: 85 }))
        },
    ];

    return (
        <section className="py-32 px-4 relative z-10 animate-fade-in">
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight text-primary font-mono uppercase"
                >
                    {'<'} Technical Expertise {'/>'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="p-8 bg-card/60 backdrop-blur-sm border-2 border-primary/30 rounded-lg hover:border-primary hover:bg-card/80 transition-all duration-500 relative overflow-hidden group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-secondary"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-secondary"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-secondary"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-secondary"></div>

                            <h3
                                className="text-xl font-semibold mb-6 text-primary font-mono uppercase tracking-wider"
                                style={{ textShadow: "0 0 10px rgba(0, 255, 255, 0.5)" }}
                            >
                                {'//'} {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="group/skill"
                                        onMouseEnter={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-foreground/90 font-mono">
                                                {skill.name}
                                            </span>
                                            <span className="text-xs text-primary font-mono opacity-0 group-hover/skill:opacity-100 transition-opacity">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-primary/10 rounded-full overflow-hidden border border-primary/20">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                                                style={{
                                                    width: hoveredSkill === `${category.title}-${skill.name}` ? `${skill.level}%` : '0%',
                                                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
