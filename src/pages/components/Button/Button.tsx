import { BrButton, BrIcon, BrMessage } from "@govbr-ds/webcomponents-react";
import React, { useState } from "react";

import "./Button.css";
import "@govbr-ds/core/dist/core.min.css";

const Button: React.FC = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="button-container" role="main" style={{ padding: "20px" }}>
      <h1>Button</h1>
      <p>
        Componente responsável por acionar ações e interações no sistema.
        Suporta diferentes variações de estilo, formato, densidade e estado.
      </p>

      {/* Mensagem de feedback */}
      <BrMessage
        state="danger"
        message="V-model não está funcionando corretamente"
        showIcon
        className="mb-4"
      />

      {/* 1. Densidade */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">
            1. Exemplos de Densidade (Ênfase Secundária)
          </div>
        </div>
        <div className="card-content">
          <p className="card-text">
            Mostra o efeito do atributo <code>density</code>.
          </p>
          <div className="button-group">
            <BrButton emphasis="secondary" density="small">
              Pequeno
            </BrButton>
            <BrButton emphasis="secondary" density="medium">
              Médio
            </BrButton>
            <BrButton emphasis="secondary" density="large">
              Grande
            </BrButton>
          </div>
        </div>
      </div>

      {/* 2. Ênfase e Tipo */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">
            2. Exemplos de Ênfase e Tipo (Densidade Média)
          </div>
        </div>
        <div className="card-content">
          <p className="card-text">
            Mostra os atributos <code>emphasis</code> e <code>type</code>.
          </p>
          <div className="button-group">
            <BrButton emphasis="primary" density="medium">
              Primário (button)
            </BrButton>
            <BrButton emphasis="secondary" density="medium">
              Secundário (button)
            </BrButton>
            <BrButton emphasis="tertiary" density="medium">
              Terciário (button)
            </BrButton>
            <BrButton emphasis="primary" type="submit" density="medium">
              Enviar (submit)
            </BrButton>
            <BrButton emphasis="secondary" type="reset" density="medium">
              Limpar (reset)
            </BrButton>
          </div>
        </div>
      </div>

      {/* 3. Estados e Modo Escuro */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">
            3. Exemplos de Estados e Modo Escuro
          </div>
        </div>
        <div className="card-content">
          <p className="card-text">
            Mostra os estados <code>disabled</code>, <code>isLoading</code>,
            <code>isActive</code> e o modo <code>colorMode="dark"</code>.
          </p>
          <div className="button-group">
            <BrButton emphasis="primary" density="medium" disabled>
              Desabilitado
            </BrButton>
            <BrButton emphasis="primary" density="medium" isLoading>
              Carregando
            </BrButton>
            <BrButton emphasis="secondary" density="medium" isActive>
              Ativo
            </BrButton>
          </div>
          <div className="button-group dark-mode">
            <BrButton emphasis="primary" density="medium" colorMode="dark">
              Modo Escuro
            </BrButton>
            <BrButton emphasis="secondary" density="medium" colorMode="dark">
              Modo Escuro
            </BrButton>
          </div>
        </div>
      </div>

      {/* 4. Formatos */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">
            4. Exemplos de Formato (Densidade Média)
          </div>
        </div>
        <div className="card-content">
          <p className="card-text">
            Mostra o atributo <code>shape</code> (pill, circle, block).
          </p>
          <div className="button-group">
            <BrButton emphasis="primary" density="medium" shape="pill">
              Formato Pill
            </BrButton>

            <BrButton
              emphasis="secondary"
              density="medium"
              shape="circle"
              aria-label="Favoritar"
            >
              <BrIcon iconName="fa6-solid:heart" />
            </BrButton>

            <BrButton emphasis="secondary" density="medium">
              Formato Padrão
            </BrButton>
          </div>

          <p className="card-text mt-3">
            <small>
              O formato <code>block</code> ocupa toda a largura disponível do
              container.
            </small>
          </p>
          <div className="button-group block-example">
            <BrButton emphasis="primary" density="medium" shape="block">
              Botão Block (Ocupa Largura)
            </BrButton>
          </div>
        </div>
      </div>

      {/* 5. Combinações Avançadas */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">5. Combinações Avançadas</div>
        </div>
        <div className="card-content">
          <p className="card-text">
            Combinações de múltiplos atributos para cenários mais específicos.
          </p>
          <div className="button-group">
            <BrButton
              emphasis="primary"
              density="medium"
              shape="pill"
              isLoading
            >
              Carregando (pill)
            </BrButton>

            <BrButton
              emphasis="secondary"
              density="medium"
              shape="circle"
              isActive
              colorMode="dark"
              aria-label="Favorito ativo escuro"
            >
              <BrIcon iconName="fa6-solid:star" />
            </BrButton>

            <BrButton
              emphasis="tertiary"
              density="large"
              shape="block"
              isLoading
              colorMode="dark"
            >
              Carregando Block Dark
            </BrButton>

            <BrButton emphasis="primary" density="small" disabled shape="block">
              Desabilitado Block
            </BrButton>
          </div>
        </div>
      </div>

      {/* 6. Exemplo de v-model */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">6. Exemplo de v-model</div>
        </div>
        <div className="card-content">
          <p className="card-text">
            Vinculação bidirecional de estado com <code>v-model</code>.
          </p>
          <BrButton
            emphasis="primary"
            density="medium"
            isActive={pressed}
            onClick={() => setPressed(!pressed)}
          >
            {pressed ? "Desativar" : "Ativar"}
          </BrButton>

          <p className="mt-3">
            Estado atual: <strong>{pressed.toString()}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Button;
