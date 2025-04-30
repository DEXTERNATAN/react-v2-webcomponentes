import React, { useState } from "react";
import { BrCheckbox, BrMessage } from "@govbr-ds/webcomponents-react";
import "./Checkbox.css";

const Checkboxes: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="checkbox-container" role="main">
      <h1>Checkbox</h1>
      <p>
        Esta página demonstra o uso do componente{" "}
        <code>&lt;br-checkbox&gt;</code>, que permite a seleção de múltiplas
        opções em um formulário.
      </p>

      <BrMessage
        state="danger"
        message="O v-model não está funcionando corretamente no componente <br-checkbox>."
        show-icon
        className="mb-4"
      />

      {/* Grupo 1: Checkboxes Verticais */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">1. Checkboxes Verticais</div>
        </div>
        <div className="card-content">
          <div className="checkbox-group">
            <BrCheckbox
              id="checkbox-v1"
              name="checkbox-v1"
              label="Vertical 1"
            />
            <BrCheckbox
              id="checkbox-v2"
              name="checkbox-v2"
              label="Vertical 2"
            />
            <BrCheckbox
              id="checkbox-v3"
              name="checkbox-v3"
              label="Vertical 3"
            />
          </div>
        </div>
      </div>

      {/* Grupo 2: Checkboxes Horizontais */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">2. Checkboxes Horizontais</div>
        </div>
        <div className="card-content">
          <div className="checkbox-group horizontal">
            <BrCheckbox
              id="checkbox-h1"
              name="checkbox-h1"
              label="Horizontal 1"
            />
            <BrCheckbox
              id="checkbox-h2"
              name="checkbox-h2"
              label="Horizontal 2"
            />
            <BrCheckbox
              id="checkbox-h3"
              name="checkbox-h3"
              label="Horizontal 3"
            />
          </div>
        </div>
      </div>

      {/* Grupo 3: Estado Indeterminado */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">3. Estado Indeterminado</div>
        </div>
        <div className="card-content">
          <div className="checkbox-group">
            <BrCheckbox
              id="checkbox-ind"
              name="checkbox-ind"
              indeterminate
              label="Indeterminate"
            />
          </div>
        </div>
      </div>

      {/* Grupo 4: Checkbox com Slot */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">4. Checkbox com Slot</div>
        </div>
        <div className="card-content">
          <div className="checkbox-group">
            <BrCheckbox id="checkbox-slot" name="checkbox-slot">
              <span>
                Clique para aceitar os <a href="#">Termos de Aceite</a>
              </span>
            </BrCheckbox>
          </div>
        </div>
      </div>

      {/* Grupo 5: Estados Visuais */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">5. Variações de Estado</div>
        </div>
        <div className="card-content">
          <div className="checkbox-group horizontal">
            <BrCheckbox
              id="checkbox-checked"
              name="checkbox-checked"
              checked
              label="Marcado"
            />
            <BrCheckbox
              id="checkbox-unchecked"
              name="checkbox-unchecked"
              label="Não marcado"
            />
            <BrCheckbox
              id="checkbox-disabled"
              name="checkbox-disabled"
              disabled
              label="Desativado"
            />
            <BrCheckbox
              id="checkbox-invalid"
              name="checkbox-invalid"
              state="invalid"
              label="Inválido"
            />
            <BrCheckbox
              id="checkbox-valid"
              name="checkbox-valid"
              state="valid"
              label="Válido"
            />
          </div>
        </div>
      </div>

      {/* Grupo 6: Label Oculta */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">6. Label Oculta</div>
        </div>
        <div className="card-content">
          <div className="checkbox-group">
            <BrCheckbox
              id="checkbox-hidden"
              name="checkbox-hidden"
              hasHiddenLabel
              label="Hidden Label"
            />
          </div>
        </div>
      </div>

      {/* Grupo 7: Exemplo de v-model */}
      <div className="br-card screen-preview mb-4">
        <div className="screen-header">
          <div className="screen-title">7. Exemplo de v-model</div>
        </div>
        <div className="card-content">
          <p className="card-text">
            Vinculação bidirecional de estado com <code>v-model</code>.
          </p>
          <BrCheckbox
            id="checkbox-vmodel"
            name="checkbox-vmodel"
            checked={checked}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setChecked(e.currentTarget.checked)
            }
            label="Ativar opção"
          />
          <p className="mt-3">
            Valor atual: <strong>{String(checked)}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkboxes;
