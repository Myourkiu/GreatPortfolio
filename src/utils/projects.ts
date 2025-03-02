export const projects: Project[] = [
    {
        title: "OwProduct",
        imageUrl: "/owproduct.png",
        description: "owProductDescription",
        slideDirection: "left",
        technologies: [
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Quartz.NET",
            "PostgreSQL",
            "Zod",
            "React Hook Form",
            "C#",
            ".NET",
            "Mercado Pago API",
            "JWT",
            "Next Auth",
            "Azure DevOps",
            "Docker"
        ]
    },
    {
        title: "BloxTrade",
        imageUrl: "/bloxtrade.png",
        description: "bloxTradeDescription",
        slideDirection: "right",
        technologies: [
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "PostgreSQL",
            "C#",
            ".NET",
            "JWT",
            "Zod",
            "React Hook Form",
            "SignalR",
            "Next Auth",
            "Azure DevOps",
            "Docker"
        ]
    },
    {
        title: "LizeLoca",
        imageUrl: "/lizeloca.png",
        description: "lizeLocaDescription",
        slideDirection: "left",
        technologies: [
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "PostgreSQL",
            "C#",
            ".NET",
            "JWT",
            "React Hook Form",
            "Zod",
            "PagSeguro API",
            "SignalR",
            "WebHook",
            "Next Auth",
            "Azure DevOps",
            "Docker"
        ]
    },
]

interface Project {
    title: string,
    imageUrl: string,
    description: string,
    slideDirection: "left" | "right",
    technologies: string[]
}