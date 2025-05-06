import { BrRadio, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Radio.css";
import "@govbr-ds/core/dist/core.min.css";

const Radio: React.FC = () => {
  return (
    <div className="radio-container" role="main" style={{ padding: "20px" }}>
      <h1>Radio</h1>
      <p>
        Esta página demonstra o uso do componente <code>&lt;BrRadio&gt;</code>,
        que permite a seleção única entre múltiplas opções em um formulário.
      </p>

      <BrMessage
        show-icon
        className="mb-4"
        state="danger"
        message="V-model não está funcionando corretamente"
      />

      {/* Grupo 1: Radio Verticais   */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">1. Radios Verticais</div>
        </div>
        <div className="card-content">
          <div
            className="radio-group"
            role="radiogroup"
            aria-label="Grupo vertical"
          >
            <BrRadio
              className="mb-1"
              name="vertical-group"
              value="v1"
              label="Vertical 1"
            />
            <BrRadio
              className="mb-1"
              name="vertical-group"
              value="v2"
              label="Vertical 2"
            />
            <BrRadio
              className="mb-1"
              name="vertical-group"
              value="v3"
              label="Vertical 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radio;
