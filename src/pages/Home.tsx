import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <section className="container mx-auto px-4 max-w-4xl">
      {/* Logo do Framework */}
      <div className="framework-logo">
        <img
          src="https://legacy.reactjs.org/favicon.ico"
          alt="React.js Logo"
          className="react-logo"
        />
      </div>

      {/* Mensagem de atenção */}
      <div className="br-message info mb-4" role="alert">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="info-icon"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        </div>
        <div className="content">
          <span>
            <strong className="font-semibold">Atenção:</strong> confira as
            informações abaixo!
          </span>
        </div>
      </div>

      {/* Card de apresentação */}
      <div className="br-card rounder-md shadow-md py-2 px-6 bg-card-pesquisa text-gray-800 leading-relaxed">
        <p>
          Este projeto é um <strong>showcase completo</strong> desenvolvido para
          demonstrar e testar os <em>webcomponents</em> criados com{" "}
          <strong>StencilJS</strong>.
        </p>
        <p className="mt-3">
          Inspirado em modelos modernos como o{" "}
          <strong>template AdminLTE</strong>, nossa intenção é fornecer uma{" "}
          <em>referência prática e elegante</em> para desenvolvedores.
        </p>
        <p className="mt-3">
          Com foco em <strong>integração, customização e reutilização</strong>,
          este projeto visa acelerar a adoção dos componentes em diferentes
          aplicações.
        </p>
      </div>
    </section>
  );
};

export default Home;
