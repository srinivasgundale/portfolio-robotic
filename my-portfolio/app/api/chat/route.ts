import { NextRequest, NextResponse } from "next/server";
import { portfolioData } from "@/data/portfolio";

// Create a comprehensive knowledge base
const kb = {
    name: portfolioData.personalInfo.name,
    role: portfolioData.personalInfo.role,
    bio: portfolioData.personalInfo.bio,
    email: portfolioData.personalInfo.email,
    location: portfolioData.personalInfo.location,

    skills: {
        languages: portfolioData.skills.languages.join(", "),
        frontend: portfolioData.skills.frontend.join(", "),
        backend: portfolioData.skills.backend.join(", "),
        database: portfolioData.skills.database.join(", "),
        cloud: portfolioData.skills.cloud.join(", "),
        tools: portfolioData.skills.tools.join(", "),
    },

    experience: portfolioData.experience,
    projects: portfolioData.projects,
    education: portfolioData.education
};

// Intelligent response generator
const getResponse = (question: string): string => {
    const q = question.toLowerCase();

    // Greetings
    if (q.match(/^(hi|hello|hey|greetings|good)/)) {
        return `Hello! 👋 I'm an AI assistant trained on ${kb.name}'s portfolio. I can answer questions about skills, experience, projects, and education. What would you like to know?`;
    }

    // Name/Identity
    if (q.includes("name") || q.includes("who are you") || q.includes("who is")) {
        return `This is ${kb.name}'s portfolio. ${kb.name} is a ${kb.role} based in ${kb.location}. ${kb.bio}`;
    }

    // Skills - Comprehensive
    if (q.includes("skill") && !q.match(/(language|frontend|backend|database|cloud)/)) {
        return `**${kb.name}'s Technical Skills:**\n\n💻 **Languages:** ${kb.skills.languages}\n\n🎨 **Frontend:** ${kb.skills.frontend}\n\n⚙️ **Backend:** ${kb.skills.backend}\n\n🗄️ **Database:** ${kb.skills.database}\n\n☁️ **Cloud & DevOps:** ${kb.skills.cloud}\n\n🛠️ **Tools:** ${kb.skills.tools}`;
    }

    // Programming Languages
    if (q.includes("language") || q.includes("programming")) {
        return `**Programming Languages:** ${kb.skills.languages}\n\nThese are the core languages ${kb.name} uses for development.`;
    }

    // Frontend
    if (q.includes("frontend") || q.includes("front-end") || q.includes("react") || q.includes("vue")) {
        return `**Frontend Technologies:** ${kb.skills.frontend}\n\n${kb.name} has extensive experience building modern, responsive web applications.`;
    }

    // Backend
    if (q.includes("backend") || q.includes("back-end") || q.includes("server") || q.includes("api")) {
        return `**Backend Technologies:** ${kb.skills.backend}\n\nExpertise in building scalable server-side applications and RESTful APIs.`;
    }

    // Database
    if (q.includes("database") || q.includes("db") || q.includes("sql")) {
        return `**Database Expertise:** ${kb.skills.database}\n\nProficient in both SQL and NoSQL databases for various use cases.`;
    }

    // Cloud
    if (q.includes("cloud") || q.includes("aws") || q.includes("azure") || q.includes("devops")) {
        return `**Cloud & DevOps:** ${kb.skills.cloud}\n\nExperience with cloud infrastructure, deployment, and CI/CD pipelines.`;
    }

    // Experience - Detailed
    if (q.includes("experience") || q.includes("work history") || q.includes("job")) {
        let response = `**Work Experience** (${kb.experience.length} positions):\n\n`;
        kb.experience.forEach((exp, i) => {
            response += `**${i + 1}. ${exp.role}**\n📍 ${exp.company}\n📅 ${exp.period}\n${exp.description}\n\n`;
        });
        return response;
    }

    // Current role
    if (q.includes("current") || q.includes("now") || q.includes("present") || q.includes("accenture")) {
        const current = kb.experience[0];
        return `**Current Position:**\n\n${kb.name} is currently working as a **${current.role}** at **${current.company}** (${current.period}).\n\n${current.description}`;
    }

    // Projects - Detailed
    if (q.includes("project") || q.includes("portfolio work") || q.includes("built")) {
        let response = `**Notable Projects** (${kb.projects.length} projects):\n\n`;
        kb.projects.forEach((proj, i) => {
            response += `**${i + 1}. ${proj.title}**\n${proj.description}\n🔧 Tech: ${proj.tech.join(", ")}\n\n`;
        });
        return response;
    }

    // Education
    if (q.includes("education") || q.includes("degree") || q.includes("university") || q.includes("college") || q.includes("study")) {
        let response = `**Education:**\n\n`;
        kb.education.forEach((edu) => {
            response += `🎓 **${edu.degree}**\n${edu.school}\n📅 ${edu.year}\n\n`;
        });
        return response;
    }

    // Contact
    if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire") || q.includes("get in touch")) {
        return `**Contact Information:**\n\n📧 **Email:** ${kb.email}\n📍 **Location:** ${kb.location}\n\nFeel free to reach out for opportunities, collaborations, or just to connect!`;
    }

    // Location
    if (q.includes("location") || q.includes("where") || q.includes("based")) {
        return `${kb.name} is based in **${kb.location}**.`;
    }

    // Years of experience
    if (q.includes("how long") || q.includes("years") || q.includes("how many")) {
        return `${kb.name} has **10+ years** of professional experience in IT, specializing in software development, product engineering, and team management.`;
    }

    // Specific companies
    if (q.includes("belmont") || q.includes("creative mantra") || q.includes("rithisha")) {
        const company = kb.experience.find(exp =>
            exp.company.toLowerCase().includes(q.match(/(belmont|creative mantra|rithisha)/)?.[0] || "")
        );
        if (company) {
            return `**${company.role}** at **${company.company}** (${company.period})\n\n${company.description}`;
        }
    }

    // Specific projects
    const projectKeywords = ["gsk", "uem", "unifi", "whizzl", "tms", "digital nasional"];
    for (const keyword of projectKeywords) {
        if (q.includes(keyword)) {
            const project = kb.projects.find(p => p.title.toLowerCase().includes(keyword));
            if (project) {
                return `**${project.title}**\n\n${project.description}\n\n🔧 **Technologies:** ${project.tech.join(", ")}`;
            }
        }
    }

    // Help/Capabilities
    if (q.includes("help") || q.includes("what can you") || q.includes("capabilities")) {
        return `I can help you learn about:\n\n💼 **Experience** - Work history and current role\n🛠️ **Skills** - Technical expertise and technologies\n📂 **Projects** - Portfolio work and achievements\n🎓 **Education** - Academic background\n📧 **Contact** - How to get in touch\n\nJust ask me anything!`;
    }

    // Default response
    return `I can help you learn about ${kb.name}'s professional background. Try asking about:\n\n• Skills and technologies\n• Work experience\n• Projects and achievements\n• Education\n• Contact information\n\nWhat would you like to know?`;
};

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();
        const lastMessage = messages[messages.length - 1];

        if (!lastMessage || lastMessage.role !== "user") {
            return NextResponse.json(
                { error: "Invalid message format" },
                { status: 400 }
            );
        }

        const response = getResponse(lastMessage.content);

        return NextResponse.json({
            role: "assistant",
            content: response
        });
    } catch (error) {
        console.error("Chat API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
