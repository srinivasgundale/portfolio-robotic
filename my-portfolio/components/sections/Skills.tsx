"use client";

import { portfolioData } from "@/data/portfolio";

export default function Skills() {
    const categories = [
        { title: "Languages", skills: portfolioData.skills.languages },
        { title: "Frontend", skills: portfolioData.skills.frontend },
        { title: "Backend", skills: portfolioData.skills.backend },
        { title: "Database", skills: portfolioData.skills.database },
        { title: "Cloud & DevOps", skills: portfolioData.skills.cloud },
        { title: "Tools", skills: portfolioData.skills.tools },
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
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 bg-primary/10 border border-primary/40 rounded text-sm text-foreground/90 hover:bg-primary/20 hover:text-primary hover:border-primary transition-all duration-300 cursor-default font-mono"
                                    >
                                        {skill}
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
