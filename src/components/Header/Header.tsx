import React, { useState } from "react";
import "./Header.css";

import { BrButton, BrIcon } from "@govbr-ds/webcomponents-react";

interface HeaderProps {
  onToggleMenu?: () => void;
  isMenuVisible?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (onToggleMenu) {
      onToggleMenu();
    }
  };

  const image = {
    src: "https://www.serpro.gov.br/++resource++serpro.portalserprotema/img/capa/marca-serpro.png",
    alt: "logo",
  };

  const signature = "Design System do Governo - Web Components 2.0";

  return (
    <header className="br-header mb-4" id="header" data-sticky>
      <div className="container-fluid">
        <div className="header-top">
          <div className="header-logo">
            <img
              src="https://www.serpro.gov.br/++resource++serpro.portalserprotema/img/capa/marca-serpro.png"
              alt="logo"
            />
            <span className="br-divider vertical" />
            <div className="header-sign">{signature}</div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="header-menu">
            <div className="header-menu-trigger" id="header-navigation">
              <BrButton
                density="small"
                className="m-2"
                shape="circle"
                aria-label="Menu"
                onClick={toggleMenu}
                id="navigation"
              >
                <BrIcon icon-name="fa6-solid:bars" aria-hidden="true"></BrIcon>
              </BrButton>
            </div>

            <div className="header-info">
              <div className="header-title">Template básico</div>
              <div className="header-subtitle">Subtítulo do Header</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
