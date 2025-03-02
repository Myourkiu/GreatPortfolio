export type Language = "pt-br" | "en-us" | "es-es";

export interface Languages {
    location: Language,
    flag: string
}

export const SwitchLanguage : Languages[] = [
    {
        location: "pt-br",
        flag: "/brasil.png"
    },
    {
        location: "es-es",
        flag: "/espanha.png"
    },
    {
        location: "en-us",
        flag: "/usa.png"
    },
]