import React from "react";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div>
      {/* Área onde os conteúdos das rotas aninhadas serão renderizados */}
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
