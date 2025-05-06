import { BrIcon, BrItem, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Item.css";
import "@govbr-ds/core/dist/core.min.css";

const Item: React.FC = () => {
  return (
    <div className="item-container" role="main" style={{ padding: "20px" }}>
      <h1>Item</h1>
      <p>
        Esta página demonstra o uso do componente <code>&lt;BrItem&gt;</code>,
        que permite construir elementos interativos, acessíveis e organizados
        com suporte a densidade, ícones, botões, links e agrupamentos.
      </p>

      <BrMessage
        state="success"
        message="Nenhuma inconsistência encontrada neste componente."
        show-icon
        className="mb-4"
      />

      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">Exemplo 1: Densidade</div>
        </div>
        <div className="card-content">
          <div className="d-flex flex-wrap justify-content-evenly mt-3">
            <BrItem>
              <BrIcon slot="start" icon-name="fa6-solid:heart-pulse" />
              Densidade baixa
              <span slot="end">META</span>
            </BrItem>
            <BrItem density="medium">
              <BrIcon slot="start" icon-name="fa6-solid:heart-pulse" />
              Densidade padrão
              <span slot="end">META</span>
            </BrItem>
            <BrItem density="small">
              <BrIcon slot="start" icon-name="fa6-solid:heart-pulse" />
              Densidade alta
              <span slot="end">META</span>
            </BrItem>
          </div>
        </div>
      </div>

      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">
            Conteúdo misto (imagem, texto, links, botão)
          </div>
        </div>
        <div className="card-content">
          <div className="d-flex flex-column flex-wrap justify-content-evenly mt-3 p-2">
            <BrItem>
              <img
                src="https://picsum.photos/40/40"
                alt="imagem de exemplo 1"
              />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </span>
            </BrItem>
            <span className="br-divider"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
