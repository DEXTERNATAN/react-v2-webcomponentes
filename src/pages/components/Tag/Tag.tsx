import { BrTag, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Tag.css";
import "@govbr-ds/core/dist/core.min.css";

const Tag: React.FC = () => {
  return (
    <div className="tag-container" role="main" style={{ padding: "20px" }}>
      <div className="tag-container" role="main">
        <h1>Tag</h1>
        <p>
          Esta página demonstra o uso do componente <code>&lt;BrTag&gt;</code>,
          que permite destacar informações de forma visual com diferentes
          estilos, interações e seleções.
        </p>

        <BrMessage
          show-icon
          className="mb-4"
          state="danger"
          message="V-model não está funcionando corretamente"
        />

        <div className="br-card screen-preview mb-4">
          <div className="screen-header">
            <div className="screen-title">1. Com texto e ícone</div>
          </div>
          <div className="card-content d-flex flex-wrap justify-content-evenly">
            <BrTag
              label="Texto e Ícone"
              color="bg-orange-vivid-50"
              icon-name="fa-solid:car"
              density="small"
            ></BrTag>
            <BrTag
              label="Texto"
              color="bg-green-warm-vivid-50"
              density="large"
            ></BrTag>
            <BrTag
              label="Jhon Doe"
              color="bg-indigo-warm-vivid-50"
              density="large"
            ></BrTag>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tag;
