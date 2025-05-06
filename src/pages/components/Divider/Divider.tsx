import { BrDivider, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Divider.css";
import "@govbr-ds/core/dist/core.min.css";

const Divider: React.FC = () => {
  return (
    <div className="divider-container" role="main">
      <h1>Divider</h1>
      <p>
        Esta página demonstra o uso do componente <code>&lt;BrDivider&gt;</code>
        , utilizado para criar separações visuais entre conteúdos.
      </p>

      <BrMessage
        state="success"
        message="Nenhuma inconsistência encontrada neste componente."
        show-icon
        className="mb-4"
      />

      {/* Exemplo 1: Divider padrão e modo escuro*/}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">Exemplo básico e modo escuro</div>
        </div>
        <div className="card-content">
          <div className="d-flex flex-wrap justify-content-evenly">
            <div className="row p-3">
              <div className="col">
                <p>
                  O componente divider é uma linha neutra que separa conteúdos,
                  sessões ou temas afins.
                </p>
                <BrDivider className="my-3" />
                <p>
                  Este é um exemplo do divider padrão com estilo solid e
                  espessura small.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="bg-secondary-07 text-secondary-01 p-3">
                  <p>
                    Em fundos escuros, o divider mantém sua funcionalidade de
                    separação visual e seu contraste garante boa visibilidade.
                  </p>
                  <BrDivider className="my-3" is-dark-mode />
                  <p>
                    Este divider utiliza o modo escuro para adaptar-se ao fundo
                    escuro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divider;
