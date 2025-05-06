import { BrAvatar, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Avatar.css";
import "@govbr-ds/core/dist/core.min.css";

const AVATAR_SRC = "https://picsum.photos/id/1062/80";

const Avatar: React.FC = () => {
  return (
    <div className="avatar-container" role="main">
      <h1>Avatar</h1>
      <p>
        Esta página apresenta variações e usos do componente{" "}
        <code>&lt;br-avatar&gt;</code>, que permite representar usuários por
        meio de imagem, ícone ou iniciais. Também é possível ajustar densidade,
        acessibilidade e estados visuais.
      </p>

      <BrMessage
        state="danger"
        message="Erro na dimensão do ícone quando utilizado com botão do tipo circle. Com propriedades width e height."
        showIcon
        className="mb-4"
      />

      {/* Tipos Principais */}
      <section
        aria-labelledby="tipo-avatar"
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
            className="avatar-group"
            role="group"
            aria-label="Avatares principais"
          >
            <BrAvatar
              src={AVATAR_SRC}
              density="medium"
              // alt="Foto de perfil (mulher com câmera)"
              aria-label="Avatar tipo imagem"
              title="Tipo: src (Imagem)"
            />
            <BrAvatar
              isIconic
              density="medium"
              // alt="Ícone de usuário genérico"
              aria-label="Avatar tipo ícone"
              title="Tipo: isIconic (Ícone)"
            />
            <BrAvatar
              text="DG"
              density="medium"
              // alt="Iniciais DG"
              aria-label="Avatar tipo texto"
              title="Tipo: text (Letra)"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Avatar;
