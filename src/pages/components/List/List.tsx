import { BrList, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./List.css";
import "@govbr-ds/core/dist/core.min.css";

const List: React.FC = () => {
  return (
    <div className="list-container" role="main" style={{ padding: "20px" }}>
      <h1>List</h1>
      <p>
        Esta página demonstra o uso do componente <code>&lt;br-list&gt;</code>,
        utilizado para organizar visualmente agrupamentos de itens com suporte a
        densidade, layout horizontal, títulos, divisores e interações.
      </p>

      <BrMessage
        state="success"
        message="Nenhuma inconsistência encontrada neste componente."
        show-icon
        className="mb-4"
      />

      {/* 1. Tipos Principais (Densidade Média) */}
      <section
        aria-labelledby="tipo-list"
        className="br-card screen-preview mb-4"
      >
        <div className="screen-header">
          <div className="screen-title">
            1. Tipos Principais (Densidade Média)
          </div>
        </div>
        <div className="card-content">
          <p className="card-text">
            Demonstração dos tipos <code>src</code>, <code>isIconic</code> e{" "}
            <code>text</code>.
          </p>
          <div
            className="list-group"
            role="group"
            aria-label="Listes principais"
          >
            <BrList title="Tipo: src (Imagem)" aria-label="List tipo imagem" />
            <BrList title="Tipo: isIconic (Ícone)" />
            <BrList title="Tipo: text (Letra)" />
          </div>
        </div>
      </section>

      {/* 2. Variações de Densidade (Imagem) */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">2. Variações de Densidade (Imagem)</div>
        </div>
        <div className="card-content">
          <p className="card-text">
            Demonstração dos tamanhos disponíveis via propriedade{" "}
            <code>density</code>.
          </p>
          <div className="list-group">
            <BrList title="Densidade: small" />
            <BrList title="Densidade: medium" />
            <BrList title="Densidade: large" />
          </div>
        </div>
      </div>

      {/* 3. Estado Desabilitado */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">3. Estado Desabilitado</div>
        </div>
        <div className="card-content">
          <p className="card-text">
            Demonstra o uso da propriedade <code>disabled</code>.
          </p>
          <div className="list-group">
            <BrList title="Habilitado" />
            <BrList title="Desabilitado" />
            <BrList title="Ícone desabilitado" />
          </div>
        </div>
      </div>

      {/* 4. Ajustes em Ícones */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">4. Ajustes em Ícones</div>
        </div>
        <div className="card-content">
          <p className="card-text">
            Exemplo de personalização com <code>iconWidth</code> e{" "}
            <code>iconHeight</code>.
          </p>
          <div className="list-group">
            <BrList title="Padrão" />
            <BrList title="32px" />
            <BrList />
          </div>
          <p className="card-text mt-3">
            <small>
              <em>
                Dica: use <code>iconMarginTop</code> para ajustes verticais.
              </em>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default List;
