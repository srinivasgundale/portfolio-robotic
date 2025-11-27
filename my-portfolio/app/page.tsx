import Background from "@/components/3d/Background";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Chatbot from "@/components/Chatbot";
import ScrollReveal from "@/components/ScrollReveal";

import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden">
      <Background />
      <Hero />
      <ScrollReveal delay={100}>
        <Skills />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <Experience />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <Projects />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <Education />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Contact />
      </ScrollReveal>
      <Chatbot />
    </main>
  );
}
