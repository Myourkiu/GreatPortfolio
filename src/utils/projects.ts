export const projects: Project[] = [
    {
        title: "OwProduct",
        imageUrl: "/owproduct.png",
        description: "owProductDescription",
        slideDirection: "left",
    },
    {
        title: "BloxTrade",
        imageUrl: "/bloxtrade.png",
        description: "bloxTradeDescription",
        slideDirection: "right",
    },
    {
        title: "LizeLoca",
        imageUrl: "/lizeloca.png",
        description: "lizeLocaDescription",
        slideDirection: "left",
    },
]

interface Project {
    title: string,
    imageUrl: string,
    description: string,
    slideDirection: "left" | "right"
}