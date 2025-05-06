import { BrSelect, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Select.css";
import "@govbr-ds/core/dist/core.min.css";

const Select: React.FC = () => {
  return (
    <div className="select-container" role="main" style={{ padding: "20px" }}>
      <h1>Select</h1>
      <p>
        Esta página demonstra o uso do componente <code>&lt;br-select&gt;</code>
        , que permite a seleção de opções em um menu suspenso.
      </p>

      <BrMessage
        show-icon
        className="mb-4"
        state="danger"
        message="V-model não está funcionando corretamente"
      />

      <div className="br-card screen-preview">
        <div className="screen-header">
          <div className="screen-title">1. Select Simples</div>
        </div>
        <div className="card-content">
          <div className="d-flex justify-content-evenly mt-5 p-4">
            <BrSelect
              label="Label"
              placeholder="Selecione uma opção"
              options={[
                { label: "Masculino", value: "masculino" },
                { label: "Feminino", value: "feminino" },
                { label: "Outro", value: "outro" },
              ]}
            ></BrSelect>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
