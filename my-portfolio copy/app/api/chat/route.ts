import { portfolioData } from "@/data/portfolio";

export async function POST(req: Request) {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content.toLowerCase();

    let responseText = "I'm not sure about that. You can check the portfolio sections for more info.";

    // Simple keyword matching for the "mock" AI
    if (lastMessage.includes("who") || lastMessage.includes("name")) {
        responseText = `I am ${portfolioData.personalInfo.name}, a ${portfolioData.personalInfo.role}.`;
    } else if (lastMessage.includes("skill") || lastMessage.includes("stack")) {
        responseText = `My skills include: ${portfolioData.skills.join(", ")}.`;
    } else if (lastMessage.includes("project") || lastMessage.includes("work")) {
        responseText = `I have worked on several projects like: ${portfolioData.projects.map(p => p.title).join(", ")}.`;
    } else if (lastMessage.includes("contact") || lastMessage.includes("email")) {
        responseText = `You can reach me at ${portfolioData.personalInfo.email}.`;
    } else if (lastMessage.includes("experience")) {
        responseText = `I have experience at ${portfolioData.experience.map(e => e.company).join(" and ")}.`;
    }

    return new Response(JSON.stringify({ role: 'assistant', content: responseText }));
}
