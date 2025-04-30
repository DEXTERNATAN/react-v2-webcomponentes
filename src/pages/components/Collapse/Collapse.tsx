import { BrCollapse, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Collapse.css";
import "@govbr-ds/core/dist/core.min.css";

const Collapse: React.FC = () => {
  return (
    <div className="collapse-container" role="main" style={{ padding: "20px" }}>
      <h1>Collapse</h1>
      <p>
        Esta página apresenta variações e usos do componente{" "}
        <code>&lt;br-collapse&gt;</code>, que permite representar usuários por
        meio de imagem, ícone ou iniciais. Também é possível ajustar densidade,
        acessibilidade e estados visuais.
      </p>

      <BrMessage
        state="danger"
        message="Erro na dimensão do ícone quando utilizado com botão do tipo circle. Com propriedades width e height."
        showIcon
        className="mb-4"
      />

      {/* 1. Tipos Principais (Densidade Média) */}
      <section
        aria-labelledby="tipo-collapse"
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
            className="collapse-group"
            role="group"
            aria-label="Collapsees principais"
          >
            <BrCollapse
              src="https://picsum.photos/id/1062/80"
              density="medium"
              alt="Foto de perfil (mulher com câmera)"
              title="Tipo: src (Imagem)"
              aria-label="Collapse tipo imagem"
            />
            <BrCollapse
              isIconic
              density="medium"
              alt="Ícone de usuário genérico"
              title="Tipo: isIconic (Ícone)"
            />
            <BrCollapse
              text="DG"
              density="medium"
              alt="Iniciais DG"
              title="Tipo: text (Letra)"
            />
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
          <div className="collapse-group">
            <BrCollapse
              src="https://picsum.photos/id/1062/80"
              density="small"
              title="Densidade: small"
              alt="Imagem pequena"
            />
            <BrCollapse
              src="https://picsum.photos/id/1062/80"
              density="medium"
              title="Densidade: medium"
              alt="Imagem média"
            />
            <BrCollapse
              src="https://picsum.photos/id/1062/80"
              density="large"
              title="Densidade: large"
              alt="Imagem grande"
            />
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
          <div className="collapse-group">
            <BrCollapse text="OK" density="medium" title="Habilitado" />
            <BrCollapse
              text="OK"
              density="medium"
              disabled
              title="Desabilitado"
            />
            <BrCollapse
              isIconic
              density="medium"
              disabled
              title="Ícone desabilitado"
            />
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
          <div className="collapse-group">
            <BrCollapse isIconic density="large" title="Padrão" />
            <BrCollapse
              isIconic
              density="large"
              iconWidth="32px"
              iconHeight="32px"
              title="32px"
            />
            <BrCollapse
              isIconic
              density="large"
              iconWidth="16px"
              iconHeight="16px"
              title="16px"
            />
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

export default Collapse;
