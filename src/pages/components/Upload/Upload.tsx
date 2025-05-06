import { BrUpload, BrMessage } from "@govbr-ds/webcomponents-react";
import React from "react";

import "./Upload.css";
import "@govbr-ds/core/dist/core.min.css";

const Upload: React.FC = () => {
  return (
    <div className="upload-container" role="main" style={{ padding: "20px" }}>
      <h1>Upload</h1>
      <p>
        Esta página demonstra o uso do componente <code>&lt;br-upload&gt;</code>
        , com exemplos de estados, validação, preview, envio e loading.
      </p>

      <BrMessage
        show-icon
        className="mb-4"
        state="danger"
        message="V-model não está funcionando corretamente"
      />

      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">1. Upload simples</div>
        </div>
        <div className="card-content d-flex flex-column justify-content-evenly p-4">
          <BrUpload label="Envio de arquivo"></BrUpload>
        </div>
      </div>
    </div>
  );
};

export default Upload;
