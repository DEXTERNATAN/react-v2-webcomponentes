export type Tecnologia = {
  id: string;
  title: string;
  name: string;
  desc: string;
  more: string;
  link: string;
};

export const tecnologias: Tecnologia[] = [
  {
    id: "tech-vue",
    title: "Framework Principal",
    name: "Vue.js 3",
    desc: "Framework progressivo para construção de interfaces de usuário.",
    more: "Framework JavaScript que permite a construção de interfaces de usuário complexas com uma arquitetura baseada em componentes reativos.",
    link: "https://vuejs.org/",
  },
  {
    id: "tech-vite",
    title: "Build Tool",
    name: "Vite",
    desc: "Ferramenta de build moderna e rápida para desenvolvimento frontend.",
    more: "Ferramenta de compilação que oferece um ambiente de desenvolvimento extremamente rápido graças ao seu servidor de desenvolvimento com Hot Module Replacement.",
    link: "https://vitejs.dev/",
  },
  {
    id: "tech-ds",
    title: "Design System",
    name: "Design System (v3.6.1)",
    desc: "Sistema de design para manter consistência visual.",
    more: "Sistema completo de design do governo, o GovBR, que define padrões, componentes e estilos para garantir uma experiência de usuário consistente.",
    link: "https://www.gov.br/ds/",
  },
  {
    id: "tech-wc",
    title: "Web Components",
    name: "Web Components (v2.0.0-next.35)",
    desc: "Biblioteca de componentes reutilizáveis.",
    more: "Coleção de componentes web padronizados e reutilizáveis que fazem parte do Design System (GovBR) e podem ser incorporados em qualquer aplicação web independente do framework.",
    link: "https://govbr-ds.gitlab.io/bibliotecas/wbc/govbr-ds-wbc/docs/webcomponents/",
  },
];
