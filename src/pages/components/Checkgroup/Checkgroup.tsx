import React, { useState } from "react";
import {
  BrCheckgroup,
  BrCheckbox,
  BrMessage,
} from "@govbr-ds/webcomponents-react";

import "@govbr-ds/core/dist/core.min.css";
import "./Checkgroup.css";

const Checkgroup: React.FC = () => {
  const [selectedSimple, setSelectedSimple] = useState<string[]>([]);
  const [selectedNested, setSelectedNested] = useState<string[]>([]);

  // Manipuladores genéricos
  const handleSimpleChange = (value: string) => {
    setSelectedSimple((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleNestedChange = (value: string) => {
    setSelectedNested((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="checkgroup-container" role="main">
      <h1>Checkgroup</h1>
      <p>
        Esta página demonstra o uso do componente{" "}
        <code>&lt;br-checkgroup&gt;</code>, que permite agrupar checkboxes com
        controle de seleção e desmarcação em lote.
      </p>

      <BrMessage
        state="danger"
        message="O v-model não está funcionando corretamente no componente <br-checkgroup>."
        showIcon
        className="mb-4"
      />

      {/* Exemplo 1: seleção simples */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">Exemplo de Checkgroup simples</div>
        </div>
        <div className="card-content">
          <BrCheckgroup
            label="Lista de opções"
            labelSelecionado="Selecionar tudo"
            labelDesselecionado="Desselecionar tudo"
          >
            <BrCheckbox
              id="ckb-1"
              name="h-checkbox-1"
              value="1"
              label="Opção 1"
              className="mb-1"
              checked={selectedSimple.includes("1")}
              onClick={() => handleSimpleChange("1")}
            />
            <BrCheckbox
              id="ckb-2"
              name="h-checkbox-2"
              value="2"
              label="Opção 2"
              checked={selectedSimple.includes("2")}
              onClick={() => handleSimpleChange("2")}
            />
          </BrCheckgroup>

          <p className="mt-3">
            Itens selecionados:{" "}
            <strong>{selectedSimple.join(", ") || "nenhum"}</strong>
          </p>
        </div>
      </div>

      {/* Exemplo 2: aninhado */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">Exemplo de Checkgroup aninhado</div>
        </div>
        <div className="card-content">
          <BrCheckgroup
            label="Grupo Principal"
            labelSelecionado="Selecionar tudo"
            labelDesselecionado="Desselecionar tudo"
          >
            <BrCheckbox
              id="p2-f1"
              name="p2-f1"
              value="1"
              label="Opção 1"
              className="mb-1"
              checked={selectedNested.includes("1")}
              onClick={() => handleNestedChange("1")}
            />
            <BrCheckbox
              id="p2-f2"
              name="p2-f2"
              value="2"
              label="Opção 2"
              className="mb-1"
              checked={selectedNested.includes("2")}
              onClick={() => handleNestedChange("2")}
            />

            <BrCheckgroup
              label="Selecionar grupo"
              labelSelecionado="Selecionar grupo"
              labelDesselecionado="Desselecionar grupo"
            >
              <BrCheckbox
                id="p2-f3-1"
                name="p2-f3-1"
                value="3"
                label="Opção 3"
                className="mb-1"
                checked={selectedNested.includes("3")}
                onClick={() => handleNestedChange("3")}
              />
              <BrCheckbox
                id="p2-f3-2"
                name="p2-f3-2"
                value="4"
                label="Opção 4"
                className="mb-1"
                checked={selectedNested.includes("4")}
                onClick={() => handleNestedChange("4")}
              />
            </BrCheckgroup>
          </BrCheckgroup>

          <p className="mt-3">
            Itens selecionados:{" "}
            <strong>{selectedNested.join(", ") || "nenhum"}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkgroup;
