import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const license = "Texto destinado a exibição de informações relacionadas à";

  return (
    <footer className="br-footer pt-3 pb-5" id="footer">
      <div className="container-fluid">
        <div className="info">
          <div className="text-down-01 text-medium pb-3">
            {license}&nbsp;
            <strong>
              <a href="">licença de uso</a>.
            </strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
