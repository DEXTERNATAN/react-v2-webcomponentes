import { BrIcon, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Icon.css";
import "@govbr-ds/core/dist/core.min.css";

const Icon: React.FC = () => {
  return (
    <div className="icon-container" role="main" style={{ padding: "20px" }}>
      <h1>Icon</h1>
      <p>
        Esta página apresenta variações e usos do componente{" "}
        <code>&lt;br-icon&gt;</code>, que permite representar usuários por meio
        de imagem, ícone ou iniciais. Também é possível ajustar densidade,
        acessibilidade e estados visuais.
      </p>

      <BrMessage state="danger" show-icon className="mb-4">
        <ul className="mb-0">
          <li>
            O ícone nao permite trocar a cor quando usa-se a propriedade
            <code>css-classes</code>
          </li>
          <li>
            O <code>v-model</code> não está funcionando corretamente no
            componente
            <code>&lt;br-icon&gt;</code>.
          </li>
        </ul>
      </BrMessage>

      {/* 1. Tipos Principais (Densidade Média) */}

      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">Icones</div>
        </div>
        <div className="card-content">
          <div className="d-flex flex-wrap justify-content-evenly mt-3 p-2">
            <BrIcon
              width="30"
              height="20"
              className="mr-2"
              icon-name="fa-brands:chromecast"
            />
            <BrIcon
              width="30"
              height="20"
              className="mr-2"
              icon-name="fa-regular:envelope"
            />
            <BrIcon
              width="30"
              height="20"
              className="mr-2"
              icon-name="fa-solid:camera"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icon;
