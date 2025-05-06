import { BrMessage, BrTextarea } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./TextArea.css";
import "@govbr-ds/core/dist/core.min.css";

const TextArea: React.FC = () => {
  return (
    <div
      className="text-area-container"
      role="main"
      style={{ padding: "20px" }}
    >
      <h1>Textarea</h1>
      <p>
        Esta página demonstra o uso do componente{" "}
        <code>&lt;BrTextarea&gt;</code>, que permite a inserção de textos em
        múltiplas linhas com diferentes estados visuais, densidades e recursos
        adicionais.
      </p>

      <BrMessage
        state="danger"
        message="As propriedades row e col não estão podendo ser definidas."
        show-icon
        className="mb-4"
      />

      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">1. Variações de Densidade</div>
        </div>
        <div className="card-content d-flex flex-wrap justify-content-evenly p-4">
          <BrTextarea
            label="Densidade baixa"
            density="small"
            className="mr-2"
            placeholder="Digite somente números"
          ></BrTextarea>
          <BrTextarea
            label="Densidade alta"
            density="large"
            className="mr-2"
            placeholder="Digite somente números"
          ></BrTextarea>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
