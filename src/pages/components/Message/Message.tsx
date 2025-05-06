import { BrMessage } from "@govbr-ds/webcomponents-react";

import React from "react";

import "./Message.css";
import "@govbr-ds/core/dist/core.min.css";

const Message: React.FC = () => {
  return (
    <div className="message-container" role="main" style={{ padding: "20px" }}>
      <h1>Exemplos de Message</h1>
      <p>
        Esta página demonstra diferentes exemplos de uso do componente
        <code>&lt;BrMessage&gt;</code>, com variações de estado, feedback e
        comportamento.
      </p>

      <BrMessage
        state="success"
        message="Nenhuma inconsistência encontrada neste componente."
        show-icon
        className="mb-4"
      />

      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">1. Mensagens de Feedback</div>
        </div>
        <div className="card-content p-4">
          <div className="d-flex flex-wrap justify-content-evenly mt-5 p-4">
            <div className="mb-3">
              <BrMessage
                state="success"
                is-feedback
                message="Campo correto."
                show-icon
                aria-label="Campo correto"
              ></BrMessage>
            </div>
            <div className="mb-3">
              <BrMessage
                state="warning"
                is-feedback
                message="A tecla CAPS-LOCK está ativada."
                show-icon
                aria-label="Aviso: CAPS-LOCK ativado"
              ></BrMessage>
            </div>
            <div className="mb-3">
              <BrMessage
                state="danger"
                is-feedback
                message="O CPF deve conter apenas dígitos."
                show-icon
                aria-label="Erro: CPF inválido"
              ></BrMessage>
            </div>
            <div className="mb-3">
              <BrMessage
                state="info"
                is-feedback
                show-icon
                aria-label="Informação sobre formatos de arquivo"
              >
                <span>
                  Os arquivos devem ser no formato PNG, JPG, PDF e ter no máximo
                  1 GB.
                </span>
              </BrMessage>
            </div>
          </div>
        </div>
      </div>

      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">2. Inline &amp; Auto-Remove</div>
        </div>
        <div className="card-content p-4">
          <div className="d-flex flex-wrap justify-content-evenly mt-5 p-4">
            <div className="mb-3">
              <BrMessage
                state="success"
                message-title="Success!"
                message="Campo correto."
                is-inline
                is-closable
                auto-remove
                show-icon
                aria-label="Success: Campo correto"
              ></BrMessage>
            </div>
            <div className="mb-3">
              <BrMessage
                state="warning"
                message-title="Warning!"
                is-inline
                message="This is a warning message."
                is-closable
                auto-remove
                show-icon
                aria-label="Warning: mensagem de aviso"
              ></BrMessage>
            </div>
            <div className="mb-3">
              <BrMessage
                state="danger"
                message-title="Error!"
                is-inline
                message="Something went wrong."
                is-closable
                auto-remove
                show-icon
                aria-label="Error: algo deu errado"
              ></BrMessage>
            </div>
            <div className="mb-3">
              <BrMessage
                message-title="Informação."
                is-inline
                is-closable
                auto-remove
                show-icon
                aria-label="Informação adicional"
              >
                <span>
                  Seus dados só serão salvos após o preenchimento do primeiro
                  campo do formulário.
                </span>
              </BrMessage>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
