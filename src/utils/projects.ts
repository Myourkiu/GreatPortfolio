export const projects: Project[] = [
    {
        title: "OwProduct",
        imageUrl: "/owproduct.png",
        description: "Plataforma de assinatura para gerenciamento de estoque, utilizando arquitetura hexagonal no backend. Conta com middleware para importação de arquivos XLSX e CSV, integração com Mercado Pago para pagamentos e Recharts para visualização de dados. Implementa JWT e NextAuth para autenticação, Docker para containerização, garantindo escalabilidade e segurança e Zod e React Hook Form para a validação de formulários.",
        slideDirection: "left",
    },
    {
        title: "BloxTrade",
        imageUrl: "/bloxtrade.png",
        description: "Plataforma de conversão de moedas com dois ambientes: Admin e Customer. O ambiente Admin gerencia idiomas e integrações com APIs de carteiras digitais, enquanto o Customer oferece uma interface intuitiva para conversões seguras. Utiliza JWT e NextAuth para autenticação, Docker para containerização, Azure DevOps garantindo desempenho e segurança e Zod e React Hook Form para a validação de formulários.",
        slideDirection: "right",
    },
    {
        title: "LizeLoca",
        imageUrl: "/lizeloca.png",
        description: "Plataforma de gerenciamento e assinatura de salas de aula com ambientes para Estabelecimento, Professor e Estudante. Utiliza SignalR para notificações e chats em tempo real e WebHook para integrar com a API do PagSeguro, verificando o status de pagamentos e gerando notificações. Implementa JWT e NextAuth para autenticação, Docker para containerização e Azure DevOps garantindo escalabilidade e segurança e Zod e React Hook Form para a validação de formulários.",
        slideDirection: "left",
    },
]

interface Project {
    title: string,
    imageUrl: string,
    description: string,
    slideDirection: "left" | "right"
}