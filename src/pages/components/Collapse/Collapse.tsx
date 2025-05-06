import {
  BrCollapse,
  BrIcon,
  BrItem,
  BrMessage,
} from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Collapse.css";
import "@govbr-ds/core/dist/core.min.css";

const Collapse: React.FC = () => {
  return (
    <div className="collapse-container" role="main" style={{ padding: "20px" }}>
      <h1>Collapse</h1>
      <p>
        Esta página apresenta variações e usos do componente{" "}
        <code>&lt;BrCollapse&gt;</code>, que permite representar usuários por
        meio de imagem, ícone ou iniciais. Também é possível ajustar densidade,
        acessibilidade e estados visuais.
      </p>

      <BrMessage
        state="danger"
        message="O v-model não está funcionando corretamente no componente <BrCollapse>."
        show-icon
        className="mb-4"
      />

      {/* Exemplo 1: Collapse com accordion-group  */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">Exemplo com grupo de accordion</div>
        </div>
        <div className="card-content">
          <div className="d-flex flex-wrap justify-content-evenly mt-3">
            <div className="BrList">
              <BrCollapse accordion-group="group-01">
                <span slot="trigger">Rótulo 01</span>
                <BrItem>
                  <BrIcon slot="start" icon-name="fa6-solid:heart-pulse" />
                  Sub-item
                </BrItem>
                <BrItem>
                  <BrIcon slot="start" icon-name="fa6-solid:heart-pulse" />
                  Sub-item
                </BrItem>
              </BrCollapse>

              <BrCollapse accordion-group="group-01">
                <span slot="trigger">Rótulo 02</span>
                <BrItem>
                  <BrIcon slot="start" icon-name="fa6-solid:heart-pulse" />
                  Sub-item
                </BrItem>
                <BrItem>
                  <BrIcon slot="start" icon-name="fa6-solid:heart-pulse" />
                  Sub-item
                </BrItem>
              </BrCollapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
