import {
  BrButton,
  BrDropdown,
  BrIcon,
  BrItem,
  BrList,
  BrMessage,
} from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Dropdown.css";
import "@govbr-ds/core/dist/core.min.css";

const Dropdown: React.FC = () => {
  return (
    <div className="dropdown-container" role="main">
      <h1>Dropdown</h1>
      <p>
        Esta página demonstra o uso do componente{" "}
        <code>&lt;BrDropdown&gt;</code>, que exibe uma lista de opções acionada
        por botões ou outros elementos interativos.
      </p>
      <BrMessage state="danger" show-icon className="mb-4">
        <ul className="mb-0">
          <li>
            O <code>v-model</code> não está funcionando corretamente no
            componente
            <code>&lt;BrDropdown&gt;</code>.
          </li>
          <li>
            Erro no CSS: o estilo de <code>:hover</code> não está sendo aplicado
            quando o mouse se move sobre as opções.
          </li>
        </ul>
      </BrMessage>
      {/*Exemplo 1: Botão ícone circular com card dinâmico */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">
            Dropdown com botão circular e ícone
          </div>
        </div>
        <div className="card-content">
          <p>Clique no botão com ícone para abrir o menu.</p>
          <div>
            <BrDropdown
              style={{
                width: "100px",
              }}
            >
              <BrButton slot="trigger" shape="circle">
                <BrIcon icon-name="fa6-solid:ellipsis-vertical" />
              </BrButton>

              <BrList slot="target" list-title="Ações disponíveis">
                <BrItem is-interactive>
                  <BrIcon slot="start" icon-name="fa6-solid:heart-pulse" />
                  Ação 01
                  <span slot="end">META</span>
                </BrItem>
                <span className="br-divider"></span>
                <BrItem is-interactive>
                  <BrIcon slot="start" icon-name="fa6-solid:heart-pulse" />
                  Ação 02
                  <span slot="end">META</span>
                </BrItem>
                <span className="br-divider"></span>
                <BrItem is-interactive>
                  <BrIcon slot="start" icon-name="fa6-solid:heart-pulse" />
                  Ação 03
                  <span slot="end">META</span>
                </BrItem>
              </BrList>
            </BrDropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
