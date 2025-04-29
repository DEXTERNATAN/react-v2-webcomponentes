import React from 'react';
import { BrMessage } from '@govbr-ds/webcomponents-react';

import '@govbr-ds/core/dist/core.min.css';

const Avatar: React.FC = () => {
  return (
    <div className="avatar-container" role="main">
      <h1>Avatar</h1>
      <p>
        Esta página apresenta variações e usos do componente{' '}
        <code>&lt;br-avatar&gt;</code>, que permite representar usuários por
        meio de imagem, ícone ou iniciais. Também é possível ajustar densidade,
        acessibilidade e estados visuais.
      </p>

      <BrMessage
        state="danger"
        message="Erro na dimensão do ícone quando utilizado com botão do tipo circle. Com propriedades width e height."
        show-icon
        className="mb-4"
      />
    </div>
  );
};

export default Avatar;
