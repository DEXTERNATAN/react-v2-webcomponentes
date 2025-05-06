import { BrButton, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Button.css";
import "@govbr-ds/core/dist/core.min.css";

const Button: React.FC = () => {
  return (
    <div className="button-container" role="main" style={{ padding: "20px" }}>
      <h1>Button</h1>
      <p>
        Componente responsável por acionar ações e interações no sistema.
        Suporta diferentes variações de estilo, formato, densidade e estado.
      </p>

      {/* Mensagem de feedback */}
      <BrMessage
        state="danger"
        message="V-model não está funcionando corretamente"
        showIcon
        className="mb-4"
      />

      {/* 1. Densidade */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">
            1. Exemplos de Densidade (Ênfase Secundária)
          </div>
        </div>
        <div className="card-content">
          <p className="card-text">
            Mostra o efeito do atributo <code>density</code>.
          </p>
          <div className="button-group">
            <BrButton emphasis="secondary" density="small">
              Pequeno
            </BrButton>
            <BrButton emphasis="secondary" density="medium">
              Médio
            </BrButton>
            <BrButton emphasis="secondary" density="large">
              Grande
            </BrButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
