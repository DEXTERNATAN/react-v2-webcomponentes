import React from "react";
import { BrCheckbox, BrMessage } from "@govbr-ds/webcomponents-react";
import "./Checkbox.css";

const Checkboxes: React.FC = () => {
  return (
    <div className="checkbox-container" role="main">
      <h1>Checkbox</h1>
      <p>
        Esta página demonstra o uso do componente{" "}
        <code>&lt;br-checkbox&gt;</code>, que permite a seleção de múltiplas
        opções em um formulário.
      </p>

      <BrMessage
        state="danger"
        message="O v-model não está funcionando corretamente no componente <br-checkbox>."
        show-icon
        className="mb-4"
      />

      {/* Grupo 1: Checkboxes Verticais */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">1. Checkboxes Verticais</div>
        </div>
        <div className="card-content">
          <div className="checkbox-group">
            <BrCheckbox
              id="checkbox-v1"
              name="checkbox-v1"
              label="Vertical 1"
            />
            <BrCheckbox
              id="checkbox-v2"
              name="checkbox-v2"
              label="Vertical 2"
            />
            <BrCheckbox
              id="checkbox-v3"
              name="checkbox-v3"
              label="Vertical 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkboxes;
