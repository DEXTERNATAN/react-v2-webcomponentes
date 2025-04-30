import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { BrButton } from "@govbr-ds/webcomponents-react";

// Gera array de números aleatórios
const generateRandomData = (min: number, max: number, count: number) =>
  Array.from(
    { length: count },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

// Configurações comuns de opções
const commonOptions = {
  responsive: true,
  maintainAspectRatio: false as const,
  plugins: {
    legend: { position: "top" as const, labels: { font: { size: 12 } } },
    tooltip: {
      mode: "index" as const,
      intersect: false,
    },
  },
  interaction: {
    mode: "nearest" as const,
    axis: "x" as const,
    intersect: false as const,
  },
};

const Graficos: React.FC = () => {
  // refs para os canvases
  const barRef = useRef<HTMLCanvasElement>(null);
  const lineRef = useRef<HTMLCanvasElement>(null);
  const pieRef = useRef<HTMLCanvasElement>(null);
  const areaRef = useRef<HTMLCanvasElement>(null);
  const radarRef = useRef<HTMLCanvasElement>(null);

  // Instâncias de gráfico
  const charts = useRef<{
    bar: Chart | null;
    line: Chart | null;
    pie: Chart | null;
    area: Chart | null;
    radar: Chart | null;
  }>({ bar: null, line: null, pie: null, area: null, radar: null });

  useEffect(() => {
    // Dados iniciais
    const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];

    // Bar
    if (barRef.current) {
      charts.current.bar = new Chart(barRef.current, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Vendas 2023",
              data: generateRandomData(5, 30, 6),
              backgroundColor: Array(6).fill("rgba(75,192,192,0.2)"),
              borderColor: Array(6).fill("rgba(75,192,192,1)"),
              borderWidth: 1,
            },
          ],
        },
        options: {
          ...commonOptions,
          scales: {
            y: { beginAtZero: true },
          },
        },
      });
    }

    // Line
    if (lineRef.current) {
      charts.current.line = new Chart(lineRef.current, {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: "Receita 2023",
              data: generateRandomData(40, 90, 6),
              fill: false,
              tension: 0.1,
            },
            {
              label: "Despesas 2023",
              data: generateRandomData(20, 80, 6),
              fill: false,
              tension: 0.1,
            },
          ],
        },
        options: { ...commonOptions, scales: { y: { beginAtZero: true } } },
      });
    }

    // Pie
    if (pieRef.current) {
      charts.current.pie = new Chart(pieRef.current, {
        type: "pie",
        data: {
          labels,
          datasets: [
            {
              label: "Distribuição",
              data: generateRandomData(2, 20, 6),
              backgroundColor: Array(6).fill("rgba(153,102,255,0.2)"),
              borderColor: Array(6).fill("rgba(153,102,255,1)"),
            },
          ],
        },
        options: commonOptions,
      });
    }

    // Area (line preenchida)
    if (areaRef.current) {
      charts.current.area = new Chart(areaRef.current, {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: "Crescimento 2023",
              data: generateRandomData(40, 90, 6),
              fill: true,
              tension: 0.1,
            },
          ],
        },
        options: { ...commonOptions, scales: { y: { beginAtZero: true } } },
      });
    }

    // Radar
    if (radarRef.current) {
      charts.current.radar = new Chart(radarRef.current, {
        type: "radar",
        data: {
          labels: ["Vendas", "Mktg", "Dev", "Suporte", "Financeiro", "RH"],
          datasets: [
            {
              label: "Dept A",
              data: generateRandomData(40, 100, 6),
              fill: true,
            },
            {
              label: "Dept B",
              data: generateRandomData(20, 90, 6),
              fill: true,
            },
          ],
        },
        options: { ...commonOptions, scales: { r: { beginAtZero: true } } },
      });
    }

    // Cleanup
    return () => {
      Object.values(charts.current).forEach((chart) => chart?.destroy());
    };
  }, []);

  // Funções de atualização
  const updateChart = (key: keyof typeof charts.current) => {
    const chart = charts.current[key];
    if (chart) {
      chart.data.datasets.forEach((ds) => {
        ds.data = generateRandomData(5, 30, ds.data.length);
      });
      chart.update();
    }
  };

  return (
    <div className="row mb-4">
      <div className="col-md-12">
        <div className="graficos-container">
          <h1>Gráficos</h1>
          <p>
            Nesta página você encontra uma coleção de gráficos interativos,
            desenvolvidos com Chart.js e integrados ao Design System BR. Os
            exemplos a seguir demonstram como exibir e analisar dados de forma
            dinâmica e intuitiva, permitindo a visualização de informações em
            diferentes formatos, desde análises comparativas até distribuição e
            tendências.
          </p>

          <div className="section-title">
            <h2>Análise de Dados</h2>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="br-card screen-preview">
                <div className="screen-header">
                  <div className="screen-title">Gráfico de Barras</div>
                  <div className="card-actions">
                    <BrButton
                      shape="circle"
                      size="small"
                      aria-label="Atualizar dados"
                      onClick={() => updateChart("bar")}
                    >
                      🔄
                    </BrButton>
                  </div>
                </div>
                <div className="card-content chart-container">
                  <canvas ref={barRef} />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="br-card screen-preview">
                <div className="screen-header">
                  <div className="screen-title">Gráfico de Linha</div>
                  <div className="card-actions">
                    <BrButton
                      shape="circle"
                      size="small"
                      aria-label="Atualizar dados"
                      onClick={() => updateChart("line")}
                    >
                      🔄
                    </BrButton>
                  </div>
                </div>
                <div className="card-content chart-container">
                  <canvas ref={lineRef} />
                </div>
              </div>
            </div>
          </div>

          <div className="section-title">
            <h2>Distribuição</h2>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="br-card screen-preview">
                <div className="screen-header">
                  <div className="screen-title">Gráfico de Pizza</div>
                  <div className="card-actions">
                    <BrButton
                      shape="circle"
                      size="small"
                      aria-label="Atualizar dados"
                      onClick={() => updateChart("pie")}
                    >
                      🔄
                    </BrButton>
                  </div>
                </div>
                <div className="card-content chart-container">
                  <canvas ref={pieRef} />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="br-card screen-preview">
                <div className="screen-header">
                  <div className="screen-title">Gráfico de Área</div>
                  <div className="card-actions">
                    <BrButton
                      shape="circle"
                      size="small"
                      aria-label="Atualizar dados"
                      onClick={() => updateChart("area")}
                    >
                      🔄
                    </BrButton>
                  </div>
                </div>
                <div className="card-content chart-container">
                  <canvas ref={areaRef} />
                </div>
              </div>
            </div>
          </div>

          <div className="section-title">
            <h2>Comparação</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="br-card screen-preview">
                <div className="screen-header">
                  <div className="screen-title">Gráfico de Radar</div>
                  <div className="card-actions">
                    <BrButton
                      shape="circle"
                      size="small"
                      aria-label="Atualizar dados"
                      onClick={() => updateChart("radar")}
                    >
                      🔄
                    </BrButton>
                  </div>
                </div>
                <div className="card-content chart-container">
                  <canvas ref={radarRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graficos;
