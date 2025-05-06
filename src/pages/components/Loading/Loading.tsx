import { BrLoading, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Loading.css";
import "@govbr-ds/core/dist/core.min.css";

const Loading: React.FC = () => {
  return (
    <div className="loading-container" role="main" style={{ padding: "20px" }}>
      <h1>Demonstração do Componente &lt;br-loading&gt;</h1>
      <p>
        Esta página demonstra diferentes usos do componente{" "}
        <code>&lt;br-loading&gt;</code>, utilizado para indicar visualmente o
        carregamento de dados ou o progresso de processos no sistema.
      </p>

      <BrMessage state="danger" show-icon className="mb-4">
        <ul className="mb-0">
          <li>
            O <code>v-model</code> não está funcionando corretamente no
            componente
            <code>&lt;br-loading&gt;</code>.
          </li>
          <li>
            A barra de progresso não atualiza dinamicamente e a animação fica
            inconsistente.
          </li>
        </ul>
      </BrMessage>

      <div className="br-card screen-preview mb-5">
        <div className="screen-header">
          <div className="screen-title">Loading Padrão com Texto</div>
        </div>
        <div className="card-content">
          <BrLoading label="Carregando dados..." is-medium />
        </div>
      </div>

      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">
            Loading com Barra de Progresso (Estático)
          </div>
        </div>
        <div className="card-content">
          <BrLoading is-progress progress-percent="100" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
