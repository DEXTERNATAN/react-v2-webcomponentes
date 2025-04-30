// export default Telas;

import React, { useEffect, useRef } from "react";
import {
  BrInput,
  BrCheckbox,
  BrButton,
  BrSelect,
} from "@govbr-ds/webcomponents-react";
import Chart from "chart.js/auto";
import "./Telas.css";

const Telas: React.FC = () => {
  // Guarda instâncias de gráficos para destruir antes de recriar
  const chartsRef = useRef<{ sales?: Chart; perf?: Chart; analysis?: Chart }>(
    {}
  );
  useEffect(() => {
    // Gráfico de Vendas (Barra)
    const salesCanvas = document.getElementById(
      "salesChart"
    ) as HTMLCanvasElement;
    if (salesCanvas) {
      // Destrói instância anterior
      chartsRef.current.sales?.destroy();
      chartsRef.current.sales = new Chart(salesCanvas, {
        type: "bar",
        data: {
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
          datasets: [
            {
              label: "Vendas",
              data: [500, 800, 650, 900, 1200, 1000],
              backgroundColor: "#1351b4",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } },
        },
      });
    }

    // Gráfico de Desempenho (Linha)
    const perfCanvas = document.getElementById(
      "performanceChart"
    ) as HTMLCanvasElement;
    if (perfCanvas) {
      chartsRef.current.perf?.destroy();
      chartsRef.current.perf = new Chart(perfCanvas, {
        type: "line",
        data: {
          labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
          datasets: [
            {
              label: "Desempenho",
              data: [70, 75, 80, 78, 85, 88, 90],
              borderColor: "#1351b4",
              backgroundColor: "rgba(19,81,180,0.1)",
              fill: true,
              tension: 0.3,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { position: "top" } },
          scales: { y: { beginAtZero: true } },
        },
      });
    }

    // Gráfico de Análise (Linha)
    const analysisCanvas = document.getElementById(
      "analysisChart"
    ) as HTMLCanvasElement;
    if (analysisCanvas) {
      chartsRef.current.analysis?.destroy();
      chartsRef.current.analysis = new Chart(analysisCanvas, {
        type: "line",
        data: {
          labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
          datasets: [
            {
              label: "Acessos",
              data: [120, 150, 180, 170, 200, 220, 240],
              borderColor: "#1351b4",
              backgroundColor: "rgba(19,81,180,0.1)",
              fill: true,
              tension: 0.4,
              pointBackgroundColor: "#1351b4",
              pointRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "bottom" },
            tooltip: { mode: "index", intersect: false },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: { display: true, text: "Quantidade" },
            },
            x: { title: { display: true, text: "Dias da Semana" } },
          },
        },
      });
    }

    // Cleanup: destrói todos ao desmontar
    return () => {
      chartsRef.current.sales?.destroy();
      chartsRef.current.perf?.destroy();
      chartsRef.current.analysis?.destroy();
    };
  }, []);

  return (
    <div className="telas-container" role="main">
      <h1>Telas de Exemplo</h1>

      {/* Telas de Login */}
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="br-card">
            <div className="card-header">
              <h2>Telas de Login</h2>
            </div>
            <div className="card-content">
              <div className="row">
                {/* Login Padrão */}
                <div className="col-md-6">
                  <div className="screen-preview">
                    <div className="screen-header">
                      <div className="screen-title">Login Padrão</div>
                    </div>
                    <div className="screen-body">
                      <div className="login-form">
                        <div className="br-input mb-3">
                          <BrInput
                            id="login-email"
                            type="email"
                            label="E-mail"
                            placeholder="seu.email@exemplo.com"
                          />
                        </div>
                        <div className="br-input input-button mb-3">
                          <BrInput
                            id="login-password"
                            type="password"
                            label="Senha"
                            placeholder="Digite sua senha"
                          />
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <div className="br-checkbox">
                            <BrCheckbox id="remember-me" label="Lembrar-me" />
                          </div>
                          <a href="#" className="text-primary">
                            Esqueceu a senha?
                          </a>
                        </div>
                        <BrButton emphasis="primary" shape="block">
                          Entrar
                        </BrButton>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Login Redes Sociais */}
                <div className="col-md-6">
                  <div className="screen-preview">
                    <div className="screen-header">
                      <div className="screen-title">
                        Login com Redes Sociais
                      </div>
                    </div>
                    <div className="screen-body">
                      <div className="login-form">
                        <div className="br-input mb-3">
                          <BrInput
                            id="login-email-2"
                            type="email"
                            label="E-mail"
                            placeholder="seu.email@exemplo.com"
                          />
                        </div>
                        <div className="br-input input-button mb-3">
                          <BrInput
                            id="login-password-2"
                            type="password"
                            label="Senha"
                            placeholder="Digite sua senha"
                          />
                        </div>
                        <button className="br-button primary block mb-3">
                          Entrar
                        </button>
                        <div className="divider">
                          <span>ou entre com</span>
                        </div>
                        <div className="social-login">
                          <BrButton shape="circle" aria-label="Google">
                            <i className="fab fa-google" />
                          </BrButton>
                          <BrButton shape="circle" aria-label="Facebook">
                            <i className="fab fa-facebook-f" />
                          </BrButton>
                          <BrButton shape="circle" aria-label="Twitter">
                            <i className="fab fa-twitter" />
                          </BrButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Telas de Dashboard */}
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="br-card">
            <div className="card-header">
              <h3>Telas de Dashboard</h3>
            </div>
            <div className="card-content">
              <div className="row">
                {/* Dashboard Principal */}
                <div className="col-md-6">
                  <div className="screen-preview">
                    <div className="screen-header">
                      <div className="screen-title">Dashboard Principal</div>
                    </div>
                    <div className="screen-body">
                      <div className="dashboard-layout">
                        <div className="dashboard-header">
                          <div className="dashboard-title">
                            Bem-vindo, Usuário
                          </div>
                          <div className="dashboard-actions">
                            <BrButton shape="circle" aria-label="Notificações">
                              <i className="fas fa-bell" />
                            </BrButton>
                            <BrButton shape="circle" aria-label="Configurações">
                              <i className="fas fa-cog" />
                            </BrButton>
                          </div>
                        </div>
                        <div className="dashboard-stats">
                          <div className="stat-card">
                            <div className="stat-icon">
                              <i className="fas fa-users" />
                            </div>
                            <div className="stat-info">
                              <div className="stat-value">1,234</div>
                              <div className="stat-label">Usuários</div>
                            </div>
                          </div>
                          <div className="stat-card">
                            <div className="stat-icon">
                              <i className="fas fa-shopping-cart" />
                            </div>
                            <div className="stat-info">
                              <div className="stat-value">567</div>
                              <div className="stat-label">Pedidos</div>
                            </div>
                          </div>
                          <div className="stat-card">
                            <div className="stat-icon">
                              <i className="fas fa-chart-line" />
                            </div>
                            <div className="stat-info">
                              <div className="stat-value">R$ 12.345</div>
                              <div className="stat-label">Receita</div>
                            </div>
                          </div>
                        </div>
                        <div className="dashboard-chart">
                          <canvas id="salesChart" />
                        </div>
                        <div className="dashboard-table">
                          <canvas id="performanceChart" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Dashboard Análise */}
                <div className="col-md-6">
                  <div className="screen-preview">
                    <div className="screen-header">
                      <div className="screen-title">Dashboard de Análise</div>
                    </div>
                    <div className="screen-body">
                      <div className="dashboard-layout">
                        <div className="dashboard-header">
                          <div className="dashboard-title">
                            Análise de Desempenho
                          </div>
                          <div className="dashboard-filter">
                            <BrSelect
                              density="small"
                              showSearchIcon
                              label="Período"
                              placeholder="Selecione"
                              options={[
                                { label: "Últimos 7 dias", value: "7" },
                                { label: "Últimos 30 dias", value: "30" },
                                { label: "Últimos 90 dias", value: "90" },
                              ]}
                            />
                          </div>
                        </div>
                        <div className="dashboard-chart-large">
                          <canvas id="analysisChart" />
                        </div>
                        <div className="dashboard-metrics">
                          <div className="metric-card">
                            <div className="metric-title">
                              Taxa de Conversão
                            </div>
                            <div className="metric-value">3.2%</div>
                            <div className="metric-change positive">+0.5%</div>
                          </div>
                          <div className="metric-card">
                            <div className="metric-title">Tempo Médio</div>
                            <div className="metric-value">2m 45s</div>
                            <div className="metric-change negative">-15s</div>
                          </div>
                          <div className="metric-card">
                            <div className="metric-title">Taxa de Rejeição</div>
                            <div className="metric-value">42%</div>
                            <div className="metric-change negative">+2%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Telas de Formulários */}
      <div className="row">
        <div className="col-md-12">
          <div className="br-card">
            <div className="card-header">
              <h3>Telas de Formulários</h3>
            </div>
            <div className="card-content">
              <div className="row">
                {/* Formulário de Cadastro */}
                <div className="col-md-6">
                  <div className="screen-preview">
                    <div className="screen-header">
                      <div className="screen-title">Formulário de Cadastro</div>
                    </div>
                    <div className="screen-body">
                      <div className="form-layout">
                        <div className="form-group">
                          <BrInput
                            id="form-name"
                            type="text"
                            label="Nome Completo"
                            placeholder="Digite seu nome completo"
                          />
                        </div>
                        <div className="form-group">
                          <BrInput
                            id="form-email"
                            type="email"
                            label="E-mail"
                            placeholder="seu.email@exemplo.com"
                          />
                        </div>
                        <div className="form-group">
                          <BrInput
                            id="form-cpf"
                            type="text"
                            label="CPF"
                            placeholder="000.000.000-00"
                          />
                        </div>
                        <div className="form-group">
                          <BrInput
                            id="form-phone"
                            type="text"
                            label="Telefone"
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                        <div className="form-group">
                          <BrInput
                            id="form-address"
                            type="text"
                            label="Endereço"
                            placeholder="Rua, número, complemento"
                          />
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <BrInput
                              id="form-city"
                              type="text"
                              label="Cidade"
                              placeholder="Sua cidade"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <BrSelect
                              id="form-state"
                              density="small"
                              showSearchIcon
                              label="Estado"
                              placeholder="Selecione uma opção"
                              options={[
                                { label: "Selecione", value: "" },
                                { label: "São Paulo", value: "SP" },
                                { label: "Rio de Janeiro", value: "RJ" },
                                { label: "Minas Gerais", value: "MG" },
                              ]}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <BrInput
                            id="form-zip"
                            type="text"
                            label="CEP"
                            placeholder="00000-000"
                          />
                        </div>
                        <div className="form-actions">
                          <BrButton emphasis="secondary">Cancelar</BrButton>
                          <BrButton emphasis="primary">Cadastrar</BrButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Formulário de Pesquisa */}
                <div className="col-md-6">
                  <div className="screen-preview">
                    <div className="screen-header">
                      <div className="screen-title">Formulário de Pesquisa</div>
                    </div>
                    <div className="screen-body">
                      <div className="form-layout">
                        <div className="form-group">
                          <BrInput
                            id="search-query"
                            type="text"
                            label="Termo de Pesquisa"
                            placeholder="Digite o que você procura"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label d-block mb-2">
                            Categorias
                          </label>
                          <div className="d-flex flex-column gap-2">
                            <BrCheckbox
                              id="cat-1"
                              name="categorias"
                              label="Eletrônicos"
                            />
                            <BrCheckbox
                              id="cat-2"
                              name="categorias"
                              label="Roupas"
                            />
                            <BrCheckbox
                              id="cat-3"
                              name="categorias"
                              label="Livros"
                            />
                            <BrCheckbox
                              id="cat-4"
                              name="categorias"
                              label="Esportes"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Faixa de Preço</label>
                          <div className="price-range">
                            <BrInput
                              id="price-min"
                              type="number"
                              label="Mín"
                              placeholder="Mín"
                            />
                            <span>até</span>
                            <BrInput
                              id="price-max"
                              type="number"
                              label="Máx"
                              placeholder="Máx"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="form-label d-block mb-2">
                            Ordenar por
                          </label>
                          <div className="d-flex flex-column gap-2">
                            <BrCheckbox
                              id="sort-1"
                              name="sort"
                              value="relevancia"
                              label="Relevância"
                            />
                            <BrCheckbox
                              id="sort-2"
                              name="sort"
                              value="menor-maior"
                              label="Preço: Menor para Maior"
                            />
                            <BrCheckbox
                              id="sort-3"
                              name="sort"
                              value="maior-menor"
                              label="Preço: Maior para Menor"
                            />
                            <BrCheckbox
                              id="sort-4"
                              name="sort"
                              value="avaliacoes"
                              label="Avaliações"
                            />
                          </div>
                        </div>
                        <div className="form-actions">
                          <BrButton emphasis="secondary">Limpar</BrButton>
                          <BrButton emphasis="primary">Pesquisar</BrButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telas;
