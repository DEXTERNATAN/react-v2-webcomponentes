import { BrInput, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Input.css";
import "@govbr-ds/core/dist/core.min.css";

const Input: React.FC = () => {
  return (
    <div className="button-container" role="main" style={{ padding: "20px" }}>
      <h1>Input</h1>
      <p>
        Esta página apresenta variações e usos do componente{" "}
        <code>&lt;BrInput&gt;</code>, que permite representar usuários por meio
        de imagem, ícone ou iniciais. Também é possível ajustar densidade,
        acessibilidade e estados visuais.
      </p>

      <BrMessage
        state="success"
        message="Nenhuma inconsistência encontrada neste componente."
        show-icon
        className="mb-4"
      />
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">1. Variações de Densidade</div>
        </div>
        <div className="card-content">
          <div className="d-flex flex-wrap justify-content-evenly mt-5 mb-4 p-4">
            <BrInput
              id="inputDensitySmall"
              label="Densidade alta"
              placeholder="Densidade alta"
              density="small"
              className="col-md-12 mr-2 mb-5"
            />
            <BrInput
              id="inputDensityMedium"
              label="Densidade padrão"
              placeholder="Densidade padrão"
              density="medium"
              className="col-md-12 mr-2 mb-5"
            />
            <BrInput
              id="inputDensityLarge"
              label="Densidade baixa"
              placeholder="Densidade baixa"
              density="large"
              className="col-md-12 mr-2 mb-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
