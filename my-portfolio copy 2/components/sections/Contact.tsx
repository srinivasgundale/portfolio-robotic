"use client";

import { portfolioData } from "@/data/portfolio";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-20 px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
                <div className="flex flex-col items-center gap-6">
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href={`mailto:${portfolioData.personalInfo.email}`}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-transform hover:scale-105"
                    >
                        <Mail size={20} />
                        Say Hello
                    </a>

                    <div className="flex gap-6 mt-8">
                        <a href={portfolioData.personalInfo.social.github} className="text-muted-foreground hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href={portfolioData.personalInfo.social.linkedin} className="text-muted-foreground hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href={portfolioData.personalInfo.social.twitter} className="text-muted-foreground hover:text-white transition-colors">
                            <Twitter size={24} />
                        </a>
                    </div>

                    <div className="mt-12 text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
