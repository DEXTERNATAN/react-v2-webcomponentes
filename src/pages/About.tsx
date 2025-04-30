import React, { useEffect } from "react";
import { BrMessage } from "@govbr-ds/webcomponents-react";
import "@govbr-ds/core/dist/core.min.css";
// import "./GovBRComponents.css";

const SobreProjeto: React.FC = () => {
  useEffect(() => {
    console.log('Página "Sobre o Projeto" carregada.');
  }, []);

  return (
    <div
      className="sobre-projeto container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"
      aria-labelledby="titulo-principal"
      style={{ paddingTop: "20px" }}
    >
      <h1 id="titulo-principal">Sobre o Projeto</h1>

      <BrMessage state="info" showIcon className="mb-4">
        <strong className="font-semibold">Nota:</strong> Veja abaixo os
        principais recursos utilizados nesta aplicação.
      </BrMessage>

      <div className="br-card bg-card-pesquisa text-gray-800 leading-relaxed mb-4 py-2 px-6">
        <p>
          Este projeto é um <strong>showcase completo</strong> desenvolvido para
          demonstrar a utilização de <em>webcomponents</em> dentro de uma
          aplicação Vue 3 com Vite, aplicando o Design System do Governo.
        </p>
      </div>

      {/* Tecnologias Utilizadas */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">Tecnologias Utilizadas</div>
        </div>
        <div className="card-content">
          {[
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
              more: "Coleção de componentes web padronizados e reutilizáveis que fazem parte do Design System (GovBR) e podem ser incorporados em qualquer aplicação web.",
              link: "https://govbr-ds.gitlab.io/bibliotecas/wbc/govbr-ds-wbc/docs/webcomponents/",
            },
          ].map(({ id, title, name, desc, more, link }) => (
            <section
              key={id}
              aria-labelledby={id}
              className="tecnologia-item mb-4"
              data-testid={id}
            >
              <h2 id={id} className="text-xl font-bold text-primary mb-2">
                {title}
              </h2>
              <p className="mb-2">
                <strong>{name}</strong> – {desc}
              </p>
              <p className="text-secondary">{more}</p>
              <div className="mt-3">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  <i
                    className="fas fa-external-link-alt mr-1"
                    aria-hidden="true"
                  />
                  Documentação {title.split(" ")[0]}
                </a>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Recursos Adicionais */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">Recursos Adicionais</div>
        </div>
        <div className="card-content">
          <section aria-labelledby="resources" className="tecnologia-item mb-4">
            <h2 id="resources" className="text-xl font-bold text-primary mb-2">
              Como Contribuir
            </h2>
            <p className="mb-2">
              Este projeto é open source e aceita contribuições da comunidade.
              Para contribuir:
            </p>
            <ol className="list-decimal pl-5 mb-4">
              <li className="mb-1">Faça um fork do repositório</li>
              <li className="mb-1">
                Crie uma branch (
                <code>git checkout -b feature/nova-feature</code>)
              </li>
              <li className="mb-1">
                Commit suas alterações (
                <code>git commit -m 'Adiciona nova feature'</code>)
              </li>
              <li className="mb-1">
                Push para a branch (
                <code>git push origin feature/nova-feature</code>)
              </li>
              <li>Abra um Pull Request</li>
            </ol>
            <h3 className="text-lg font-bold text-primary mb-2">Links Úteis</h3>
            <ul className="list-disc pl-5">
              <li className="mb-1">
                <a
                  href="https://github.com/seu-usuario/seu-repositorio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Repositório no GitHub
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://www.gov.br/ds/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Guia de Estilo GovBR
                </a>
              </li>
              <li>
                <a
                  href="https://vuejs.org/guide/introduction.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Guia Vue.js
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SobreProjeto;
