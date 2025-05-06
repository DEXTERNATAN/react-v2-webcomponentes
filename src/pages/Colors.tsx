import React, { useState, useMemo } from "react";
import { BrInput, BrIcon, BrMessage } from "@govbr-ds/webcomponents-react";
import "@govbr-ds/core/dist/core.min.css";
import "./../App.css";

import { colors } from "../data/cores";

const Colors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [clickedCard, setClickedCard] = useState<string | null>(null);
  const [mensagemVisivel, setMensagemVisivel] = useState(false);
  const [mensagemTexto, setMensagemTexto] = useState("");

  const filteredColors = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return colors.filter(
      (color) =>
        !term ||
        color.nome.toLowerCase().includes(term) ||
        color.hex.toLowerCase().includes(term) ||
        (color.token?.toLowerCase().includes(term) ?? false)
    );
  }, [searchTerm]);

  function handleCardClick(color: {
    nome: string;
    hex: string;
    token?: string;
  }) {
    setClickedCard(color.nome);
    const texto = `Nome: ${color.nome}\nHexadecimal: ${color.hex}\nToken: ${
      color.token ?? "N/A"
    }`;
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        setMensagemTexto(`Cor copiada com sucesso!\n${texto}`);
        setMensagemVisivel(true);
      })
      .catch(() => {
        setMensagemTexto("Erro ao copiar a cor. Por favor, tente novamente.");
        setMensagemVisivel(true);
      });
    setTimeout(() => setClickedCard(null), 500);
  }

  return (
    <div className="cores-container" role="main">
      <header className="page-header">
        <div className="framework-logo">
          <img
            src="https://vuejs.org/images/logo.png"
            alt="Vue.js Logo"
            className="vue-logo"
          />
        </div>
        <h1>Cores do Design System</h1>
        <p className="subtitle">
          Explore nossa paleta de cores e copie os valores facilmente
        </p>
      </header>

      <div className="controls-container">
        <div className="search-wrapper">
          <div className="search-input-container">
            <BrInput
              type="text"
              value={searchTerm}
              id="inputButtonRight"
              placeholder="Buscar por nome, hex ou token..."
              onValueChange={(e: CustomEvent<string>) =>
                setSearchTerm(e.detail)
              }
            >
              <BrIcon slot="action" iconName="fa-solid:search" height="16" />
            </BrInput>

            {!searchTerm && (
              <p>Total de cores na paleta: {filteredColors.length}</p>
            )}
            {searchTerm && filteredColors.length > 0 && (
              <p>
                Total de cores encontradas na busca: {filteredColors.length}
              </p>
            )}
          </div>
        </div>
      </div>

      {mensagemVisivel && (
        <BrMessage
          state="info"
          message={mensagemTexto}
          isInline
          isClosable
          showIcon
          // ariaLabel="info: Cor copiada com sucesso"
          onClick={() => setMensagemVisivel(false)}
        />
      )}
      {searchTerm && filteredColors.length === 0 && (
        <BrMessage
          state="warning"
          message={`Nenhuma cor encontrada para a busca: "${searchTerm}"`}
          isInline
          showIcon
          // ariaLabel={`aviso: sem resultados`}
        />
      )}

      <div className="colors-grid" role="grid">
        {filteredColors.map((color) => (
          <div
            key={color.nome}
            className={`color-card ${
              clickedCard === color.nome ? "card-clicked" : ""
            }`}
            style={{ backgroundColor: color.hex }}
            role="gridcell"
            tabIndex={0}
            onClick={() => handleCardClick(color)}
            onKeyPress={(e) => e.key === "Enter" && handleCardClick(color)}
            aria-label={`Cor ${color.nome}. Pressione Enter para copiar`}
          >
            <div
              className="color-preview"
              style={{ backgroundColor: color.hex }}
            />
            <div className="color-info">
              <h3>{color.nome}</h3>
              <p className="hex-value">{color.hex}</p>
              <p className="token-value">{color.token}</p>
              <span className="copy-hint">Clique para copiar</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
