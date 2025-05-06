import { BrSwitch, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Switch.css";
import "@govbr-ds/core/dist/core.min.css";

const Switch: React.FC = () => {
  return (
    <div className="switch-container" role="main" style={{ padding: "20px" }}>
      <h1>Switch</h1>
      <p>
        Esta página demonstra o uso do componente <code>&lt;BrSwitch&gt;</code>,
        que permite alternar estados binários (ativado/desativado).
      </p>

      <BrMessage
        show-icon
        className="mb-4"
        state="danger"
        message="V-model não está funcionando corretamente"
      />

      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">1. Variação de Densidade</div>
        </div>
        <div className="card-content d-flex flex-wrap justify-content-evenly">
          <BrSwitch id="switch-small" density="small" checked>
            Densidade Alta
          </BrSwitch>
          <BrSwitch id="switch-medium" checked>
            Densidade Média (Padrão)
          </BrSwitch>
          <BrSwitch id="switch-large" checked density="large">
            Densidade Baixa
          </BrSwitch>
        </div>
      </div>
    </div>
  );
};

export default Switch;
