import {
  BrButton,
  BrInput,
  BrMessage,
  BrTextarea,
} from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Formulario.css";
import "@govbr-ds/core/dist/core.min.css";

const Formulario: React.FC = () => {
  return (
    <div className="formulario-container" role="main">
      <h1>Exemplos de Formulários</h1>
      <p>
        Esta página apresenta diferentes exemplos de uso de formulários
        utilizando os componentes da biblioteca.
      </p>

      <BrMessage state="danger" show-icon className="mb-4">
        <ul className="mb-0">
          <li>Verificar erros</li>
        </ul>
      </BrMessage>

      {/* 1. Formulário de Contato   */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">1. Formulário de Contato</div>
        </div>
        <div className="  p-4">
          <BrInput
            className="col-md-12"
            label="Nome"
            placeholder="Digite seu nome completo"
            density="medium"
          ></BrInput>
          <BrInput
            className="col-md-12"
            label="Email"
            type="email"
            placeholder="Digite seu email"
            density="medium"
          ></BrInput>
          <BrTextarea
            className="col-md-12"
            label="Mensagem"
            placeholder="Digite sua mensagem"
            density="medium"
          ></BrTextarea>
          <div className="d-flex mt-3">
            <BrButton emphasis="secondary" type="reset" className="mr-2">
              Limpar
            </BrButton>
            <BrButton emphasis="primary" type="submit" className="mr-2">
              Enviar
            </BrButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
