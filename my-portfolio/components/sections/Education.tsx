"use client";

import { portfolioData } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";
import SectionDecoration from "@/components/SectionDecoration";
import SectionIcon from "@/components/SectionIcon";

export default function Education() {
    return (
        <section className="py-32 px-4 relative z-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <SectionDecoration />
            <SectionIcon type="education" />
            <h2
                className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight text-primary font-mono uppercase"
            >
                {'<'} Education {'/>'}
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                {portfolioData.education.map((edu, index) => (
                    <div key={index} className="p-8 bg-card/60 backdrop-blur-sm border-2 border-primary/30 rounded-lg hover:border-primary hover:bg-card/80 transition-all duration-500 relative overflow-hidden">
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-secondary"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-secondary"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-secondary"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-secondary"></div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded border border-primary/30">
                                <GraduationCap className="text-primary" size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2 font-mono">{edu.school}</h3>
                                <p className="text-muted-foreground mb-3">{edu.degree}</p>
                                <span className="text-sm text-primary font-mono">{edu.year}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
