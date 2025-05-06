import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu, Header } from "./components";
import Footer from "./components/Footer/Footer";

// páginas principais
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import FormulariosValidacao from "./pages/dashboard/FormulariosValidacao";
import Graficos from "./pages/dashboard/Graficos";
import Telas from "./pages/dashboard/Telas/Telas";
import Components from "./pages/Components";
import Colors from "./pages/Colors";
import About from "./pages/About";

// novas páginas de componentes
import Checkgroup from "./pages/components/Checkgroup/Checkgroup";
import Collapse from "./pages/components/Collapse/Collapse";
import Divider from "./pages/components/Divider/Divider";
import Dropdown from "./pages/components/Dropdown/Dropdown";
import Formulario from "./pages/components/Formulario/Formulario";
import Icon from "./pages/components/Icon/Icon";
import Input from "./pages/components/Input/Input";
import Item from "./pages/components/Item/Item";
import List from "./pages/components/List/List";
import Loading from "./pages/components/Loading/Loading";
import Message from "./pages/components/Message/Message";
import Radio from "./pages/components/Radio/Radio";
import Select from "./pages/components/Select/Select";
import Switch from "./pages/components/Switch/Switch";
import Tag from "./pages/components/Tag/Tag";
import TextArea from "./pages/components/TextArea/TextArea";
import Upload from "./pages/components/Upload/Upload";

import "./App.css"; // inclua aqui .list-hide / .list-show

function App() {
  const [isMenuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => setMenuVisible((v) => !v);

  return (
    <Router>
      <div className="template-base">
        {/* Skiplinks */}
        <nav className="br-skiplink" role="menubar">
          <a
            className="br-item"
            href="#main-content"
            role="menuitem"
            accessKey="1"
          >
            Ir para o conteúdo <span aria-hidden="true">(1/4)</span>
            <span aria-hidden="true" className="br-tag text ml-1">
              1
            </span>
          </a>
          <a
            className="br-item"
            href="#header-navigation"
            role="menuitem"
            accessKey="2"
          >
            Ir para o menu <span aria-hidden="true">(2/4)</span>
            <span aria-hidden="true" className="br-tag text ml-1">
              2
            </span>
          </a>
          <a
            className="br-item"
            href="#main-searchbox"
            role="menuitem"
            accessKey="3"
          >
            Ir para a busca <span aria-hidden="true">(3/4)</span>
            <span aria-hidden="true" className="br-tag text ml-1">
              3
            </span>
          </a>
          <a className="br-item" href="#footer" role="menuitem" accessKey="4">
            Ir para o rodapé <span aria-hidden="true">(4/4)</span>
            <span aria-hidden="true" className="br-tag text ml-1">
              4
            </span>
          </a>
        </nav>

        {/* Header */}
        <Header isMenuVisible={isMenuVisible} onToggleMenu={toggleMenu} />

        {/* Main + Sidebar */}
        <main className="d-flex flex-fill mb-5" id="main">
          <div className="container-fluid d-flex">
            <div className="row">
              {/* Sidebar */}
              <aside
                className="br-menu push active"
                id="main-navigation"
                style={{
                  display: isMenuVisible ? "block" : "none",
                  width: 250,
                }}
              >
                <div className="menu-container">
                  <div className="menu-panel">
                    <div className="menu-header" data-visible="false">
                      <div className="menu-title">
                        <img
                          src="https://www.serpro.gov.br/++resource++serpro.portalserprotema/img/capa/marca-serpro.png"
                          alt="Identificação do site ou Sistema"
                        />
                        <span>Identificação do site ou Sistema</span>
                      </div>
                      <div className="menu-close">
                        <button
                          className="br-button circle"
                          type="button"
                          aria-label="Fechar o menu"
                          onClick={toggleMenu}
                        >
                          <i className="fas fa-times" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    {/* Menu com submenus colapsáveis */}
                    <Menu />

                    <div className="menu-footer" data-visible="false">
                      {/* rodapé do menu, logos, etc */}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Conteúdo principal */}
              <div className="col mb-5">
                <div className="main-content pl-sm-3 mt-4" id="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/dashboard/*" element={<Dashboard />}>
                      <Route
                        path="formularios"
                        element={<FormulariosValidacao />}
                      />
                      <Route path="graficos" element={<Graficos />} />
                      <Route path="telas" element={<Telas />} />
                    </Route>

                    <Route path="/components/*" element={<Components />}>
                      <Route path="checkgroup" element={<Checkgroup />} />
                      <Route path="collapse" element={<Collapse />} />
                      <Route path="divider" element={<Divider />} />
                      <Route path="dropdown" element={<Dropdown />} />
                      <Route path="formulario" element={<Formulario />} />
                      <Route path="icon" element={<Icon />} />
                      <Route path="input" element={<Input />} />
                      <Route path="item" element={<Item />} />
                      <Route path="list" element={<List />} />
                      <Route path="loading" element={<Loading />} />
                      <Route path="message" element={<Message />} />
                      <Route path="radio" element={<Radio />} />
                      <Route path="select" element={<Select />} />
                      <Route path="switch" element={<Switch />} />
                      <Route path="tag" element={<Tag />} />
                      <Route path="textarea" element={<TextArea />} />
                      <Route path="upload" element={<Upload />} />
                    </Route>

                    <Route path="/colors" element={<Colors />} />
                    <Route path="/about" element={<About />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Cookiebar */}
        <div className="br-cookiebar default d-none" tabIndex={-1} />
      </div>
    </Router>
  );
}

export default App;
