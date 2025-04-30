import { BrBreadcrumb, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "@govbr-ds/core/dist/core.min.css";

const links = [
  { label: "Página Ancestral 01", url: "/pagina-01", target: "_self" },
  { label: "Página Ancestral 02", url: "/pagina-02", target: "_self" },
  { label: "Página Ancestral 03", url: "/pagina-03", target: "_self" },
  { label: "Página Ancestral 04", url: "/pagina-04", target: "_self" },
  { label: "Página Atual", active: true },
];

const Breadcrumb: React.FC = () => {
  return (
    <div
      className="breadcrumb-container"
      role="main"
      style={{ padding: "20px" }}
    >
      <h1>Breadcrumb</h1>
      <p>
        Esta página demonstra o uso do componente{" "}
        <code>&lt;br-breadcrumb&gt;</code>, que permite a navegação hierárquica
        entre as páginas do sistema.
      </p>

      <BrMessage
        state="success"
        message="Nenhuma inconsistência encontrada neste componente."
        showIcon
        className="mb-4"
      />

      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">Exemplo de Breadcrumb</div>
        </div>
        <div className="card-content">
          <BrBreadcrumb crumbs={links} homeUrl="/dashboard" />
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
