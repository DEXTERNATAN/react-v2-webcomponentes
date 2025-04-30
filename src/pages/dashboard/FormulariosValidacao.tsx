import React, { useState } from "react";
import type { FormEvent } from "react";
import "./index.css";
import {
  BrMessage,
  BrInput,
  BrCheckbox,
  BrSelect,
  BrButton,
} from "@govbr-ds/webcomponents-react";

interface CadastroData {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  genero: string;
  senha: string;
  confirmarSenha: string;
  termos: boolean;
}

interface ErrosCadastro {
  nome?: string;
  email?: string;
  cpf?: string;
  telefone?: string;
  genero?: string;
  senha?: string;
  confirmarSenha?: string;
  termos?: string;
}

interface PesquisaData {
  termo: string;
  categorias: string[];
  precoMin: string;
  precoMax: string;
}

interface ErrosPesquisa {
  termo?: string;
  categorias?: string;
  precoMin?: string;
  precoMax?: string;
}

const initialForm: CadastroData = {
  nome: "",
  email: "",
  cpf: "",
  telefone: "",
  genero: "",
  senha: "",
  confirmarSenha: "",
  termos: false,
};

const initialPesquisa: PesquisaData = {
  termo: "",
  categorias: [],
  precoMin: "",
  precoMax: "",
};

const FormulariosValidacao: React.FC = () => {
  // Estados de cadastro e erros
  const [form, setForm] = useState<CadastroData>({ ...initialForm });
  const [errosCad, setErrosCad] = useState<ErrosCadastro>({});

  // Estados de pesquisa e erros
  const [pesquisa, setPesquisa] = useState<PesquisaData>({
    ...initialPesquisa,
  });
  const [errosPesq, setErrosPesq] = useState<ErrosPesquisa>({});

  // Mostrar/ocultar senha
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmSenha, setMostrarConfirmSenha] = useState(false);

  // Handlers genéricos
  const handleChangeCad = (
    field: keyof CadastroData,
    value: string | boolean
  ) => {
    setForm((f) => ({ ...f, [field]: value }));
  };
  const handleChangePesq = (
    field: keyof PesquisaData,
    value: string | string[]
  ) => {
    setPesquisa((p) => ({ ...p, [field]: value }));
  };

  // Validações de cadastro
  const validaCampoCad = (field: keyof CadastroData) => {
    const e = { ...errosCad };
    const v = form[field];
    switch (field) {
      case "nome":
        e.nome =
          !v || (v as string).trim().length < 3
            ? "Nome deve ter ao menos 3 caracteres"
            : undefined;
        break;
      case "email":
        e.email = !v
          ? "E-mail obrigatório"
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v as string)
          ? "Digite um e-mail válido"
          : undefined;
        break;
      case "cpf":
        e.cpf = !v
          ? "CPF obrigatório"
          : !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v as string)
          ? "Formato: 000.000.000-00"
          : undefined;
        break;
      case "telefone":
        e.telefone = !v
          ? "Telefone obrigatório"
          : !/^\(\d{2}\) \d{5}-\d{4}$/.test(v as string)
          ? "Formato: (00) 00000-0000"
          : undefined;
        break;
      case "genero":
        e.genero = !v ? "Selecione um gênero" : undefined;
        break;
      case "senha":
        e.senha = !v
          ? "Senha obrigatória"
          : (v as string).length < 8
          ? "Ao menos 8 caracteres"
          : undefined;
        break;
      case "confirmarSenha":
        e.confirmarSenha =
          (v as string) !== form.senha ? "As senhas não coincidem" : undefined;
        break;
      case "termos":
        e.termos = form.termos ? undefined : "Você precisa aceitar os termos";
        break;
    }
    setErrosCad(e);
  };

  // Validações de pesquisa
  const validaCampoPesq = (field: keyof PesquisaData) => {
    const e = { ...errosPesq };
    const v = pesquisa[field];
    switch (field) {
      case "termo":
        e.termo =
          !v || (v as string).trim().length < 3
            ? "Ao menos 3 caracteres"
            : undefined;
        break;
      case "categorias":
        e.categorias = !(pesquisa.categorias.length > 0)
          ? "Selecione ao menos uma categoria"
          : undefined;
        break;
      case "precoMin":
        e.precoMin =
          v && isNaN(Number(v as string)) ? "Número inválido" : undefined;
        break;
      case "precoMax":
        e.precoMax =
          v && isNaN(Number(v as string))
            ? "Número inválido"
            : pesquisa.precoMin && Number(v) < Number(pesquisa.precoMin)
            ? "Deve ser ≥ preço mínimo"
            : undefined;
        break;
    }
    setErrosPesq(e);
  };

  // Submit cadastro
  const handleSubmitCad = (e: FormEvent) => {
    e.preventDefault();
    (Object.keys(form) as (keyof CadastroData)[]).forEach(validaCampoCad);
    if (!Object.values(errosCad).some((x) => x)) {
      alert("Formulário de cadastro enviado com sucesso!");
      setForm({ ...initialForm });
      setErrosCad({});
    }
  };

  // Submit pesquisa
  const handleSubmitPesq = (e: FormEvent) => {
    e.preventDefault();
    (Object.keys(pesquisa) as (keyof PesquisaData)[]).forEach(validaCampoPesq);
    if (!Object.values(errosPesq).some((x) => x)) {
      alert("Formulário de pesquisa enviado com sucesso!");
      setPesquisa({ ...initialPesquisa });
      setErrosPesq({});
    }
  };

  return (
    <div className="formularios-validacao-container">
      <h1 className="mb-4">Formulários com Validação</h1>
      <p className="mb-4">
        Esta página demonstra diferentes técnicas de validação de formulários
        utilizando o Design System BR. Os exemplos abaixo mostram como
        implementar validações em tempo real, feedback visual e mensagens de
        erro.
      </p>

      {/* Cadastro de Usuário */}
      <section className="form-section mb-5">
        <h4 className="mb-3">Cadastro de Usuário</h4>
        <form className="form-validacao" onSubmit={handleSubmitCad} noValidate>
          <div className="row">
            <div className="col-md-6 mb-3">
              <BrInput
                label="Nome Completo *"
                id="nome"
                density="medium"
                custom-id="input-nome"
                color-mode="light"
                disabled={false}
                is-active={false}
                shape="pill"
                type="text"
                value={form.nome}
                state={errosCad.nome ? "danger" : undefined}
                placeholder="Digite seu nome"
                onInput={(e) =>
                  handleChangeCad("nome", (e.target as HTMLInputElement).value)
                }
                onBlur={() => validaCampoCad("nome")}
              >
                {errosCad.nome && (
                  <BrMessage
                    slot="feedback"
                    state="danger"
                    is-feedback
                    message={errosCad.nome}
                    show-icon
                    aria-label={errosCad.nome}
                  />
                )}
              </BrInput>
            </div>
            <div className="col-md-6 mb-3">
              <BrInput
                label="E-mail *"
                id="email"
                value={form.email}
                state={errosCad.email ? "danger" : undefined}
                placeholder="seu.email@exemplo.com"
                type="email"
                onInput={(e) =>
                  handleChangeCad("email", (e.target as HTMLInputElement).value)
                }
                onBlur={() => validaCampoCad("email")}
              />
              {errosCad.email && (
                <BrMessage
                  state="danger"
                  is-feedback
                  message={errosCad.email}
                  show-icon
                  aria-label={errosCad.email}
                />
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <BrInput
                label="CPF *"
                id="cpf"
                value={form.cpf}
                state={errosCad.cpf ? "danger" : undefined}
                placeholder="000.000.000-00"
                type="text"
                onInput={(e) =>
                  handleChangeCad("cpf", (e.target as HTMLInputElement).value)
                }
                onBlur={() => validaCampoCad("cpf")}
              />
              {errosCad.cpf && (
                <BrMessage
                  state="danger"
                  is-feedback
                  message={errosCad.cpf}
                  show-icon
                  aria-label={errosCad.cpf}
                />
              )}
            </div>
            <div className="col-md-6 mb-3">
              <BrInput
                label="Telefone *"
                id="telefone"
                value={form.telefone}
                state={errosCad.telefone ? "danger" : undefined}
                placeholder="(00) 00000-0000"
                type="text"
                onInput={(e) =>
                  handleChangeCad(
                    "telefone",
                    (e.target as HTMLInputElement).value
                  )
                }
                onBlur={() => validaCampoCad("telefone")}
              />
              {errosCad.telefone && (
                <BrMessage
                  state="danger"
                  is-feedback
                  message={errosCad.telefone}
                  show-icon
                  aria-label={errosCad.telefone}
                />
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <BrSelect
                id="genero"
                label="Gênero *"
                placeholder="Selecione uma opção"
                value={form.genero}
                state={errosCad.genero ? "danger" : undefined}
                options={[
                  { label: "Masculino", value: "masculino" },
                  { label: "Feminino", value: "feminino" },
                  { label: "Outro", value: "outro" },
                ]}
                onBlur={() => validaCampoCad("genero")}
                onValueChange={(value: string) =>
                  handleChangeCad("genero", value)
                }
              />
              {errosCad.genero && (
                <BrMessage
                  state="danger"
                  is-feedback
                  message={errosCad.genero}
                  show-icon
                  aria-label={errosCad.genero}
                />
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <BrInput
                label="Senha *"
                id="senha"
                value={form.senha}
                state={errosCad.senha ? "danger" : undefined}
                placeholder="Digite sua senha"
                type={mostrarSenha ? "text" : "password"}
                onInput={(e) =>
                  handleChangeCad("senha", (e.target as HTMLInputElement).value)
                }
                onBlur={() => validaCampoCad("senha")}
              >
                <BrButton
                  className="br-button"
                  type="button"
                  onClick={() => setMostrarSenha((s) => !s)}
                  aria-label="Exibir senha"
                >
                  {mostrarSenha ? "Ocultar" : "Exibir"}
                </BrButton>
              </BrInput>
              {errosCad.senha && (
                <BrMessage
                  state="danger"
                  is-feedback
                  message={errosCad.senha}
                  show-icon
                  aria-label={errosCad.senha}
                />
              )}
              {!errosCad.senha && form.senha && (
                <div className="form-text">
                  A senha deve ter pelo menos 8 caracteres.
                </div>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <BrInput
                label="Confirmar Senha *"
                id="confirmarSenha"
                value={form.confirmarSenha}
                state={errosCad.confirmarSenha ? "danger" : undefined}
                placeholder="Confirme sua senha"
                type={mostrarConfirmSenha ? "text" : "password"}
                onInput={(e) =>
                  handleChangeCad(
                    "confirmarSenha",
                    (e.target as HTMLInputElement).value
                  )
                }
                onBlur={() => validaCampoCad("confirmarSenha")}
              >
                <BrButton
                  className="br-button"
                  type="button"
                  onClick={() => setMostrarConfirmSenha((s) => !s)}
                  aria-label="Exibir senha"
                >
                  {mostrarConfirmSenha ? "Ocultar" : "Exibir"}
                </BrButton>
              </BrInput>
              {errosCad.confirmarSenha && (
                <BrMessage
                  state="danger"
                  is-feedback
                  message={errosCad.confirmarSenha}
                  show-icon
                  aria-label={errosCad.confirmarSenha}
                />
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mb-3">
              <BrCheckbox
                id="termos"
                name="termos"
                checked={form.termos}
                state={errosCad.termos ? "danger" : undefined}
                onChange={(e) =>
                  handleChangeCad(
                    "termos",
                    (e.target as HTMLInputElement).checked
                  )
                }
                label="Li e concordo com os termos de uso e política de privacidade *"
              />
              {errosCad.termos && (
                <BrMessage
                  state="danger"
                  is-feedback
                  message={errosCad.termos}
                  show-icon
                  aria-label={errosCad.termos}
                />
              )}
            </div>
          </div>

          <div className="form-actions">
            <BrButton
              type="button"
              emphasis="secondary"
              onClick={() => {
                setForm({ ...initialForm });
                setErrosCad({});
              }}
            >
              Limpar
            </BrButton>
            <BrButton type="submit" emphasis="primary">
              Cadastrar
            </BrButton>
          </div>
        </form>
      </section>

      {/* Pesquisa Avançada */}
      <section className="form-section mb-5">
        <h4 className="mb-3">Pesquisa Avançada</h4>
        <form className="form-validacao" onSubmit={handleSubmitPesq} noValidate>
          <div className="row">
            <div className="col-md-12 mb-3">
              <BrInput
                label="Termo de Pesquisa *"
                id="termoPesquisa"
                value={pesquisa.termo}
                state={errosPesq.termo ? "danger" : undefined}
                placeholder="Digite o que você procura"
                type="text"
                onInput={(e) =>
                  handleChangePesq(
                    "termo",
                    (e.target as HTMLInputElement).value
                  )
                }
                onBlur={() => validaCampoPesq("termo")}
              />
              {errosPesq.termo && (
                <BrMessage
                  state="danger"
                  is-feedback
                  message={errosPesq.termo}
                  show-icon
                  aria-label={errosPesq.termo}
                />
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Categorias *</label>
              {["eletronicos", "roupas", "livros", "esportes"].map((cat) => (
                <BrCheckbox
                  className="mt-2"
                  custom-id={`cat-${cat}`}
                  value={cat}
                  checked={pesquisa.categorias.includes(cat)}
                  state={errosPesq.categorias ? "invalid" : undefined}
                  label={cat.charAt(0).toUpperCase() + cat.slice(1)}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const checked = (e.target as HTMLInputElement).checked;
                    handleChangePesq(
                      "categorias",
                      checked
                        ? [...pesquisa.categorias, cat]
                        : pesquisa.categorias.filter((c) => c !== cat)
                    );
                  }}
                  key={cat}
                />
              ))}
              {errosPesq.categorias && (
                <div className="invalid-feedback">{errosPesq.categorias}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label>Faixa de Preço *</label>
              <div className="row">
                <div className="col-6">
                  <div
                    className={`BrInput ${
                      errosPesq.precoMin ? "is-invalid" : ""
                    }`}
                  >
                    <BrInput
                      label="Mínimo"
                      id="precoMin"
                      type="number"
                      placeholder="Mín"
                      value={pesquisa.precoMin}
                      onInput={(e) =>
                        handleChangePesq(
                          "precoMin",
                          (e.target as HTMLInputElement).value
                        )
                      }
                      onBlur={() => validaCampoPesq("precoMin")}
                    />
                    {errosPesq.precoMin && (
                      <BrMessage
                        state="danger"
                        is-feedback
                        message={errosPesq.precoMin}
                        show-icon
                        aria-label={errosPesq.precoMin}
                      />
                    )}
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className={`BrInput ${
                      errosPesq.precoMax ? "is-invalid" : ""
                    }`}
                  >
                    <BrInput
                      label="Máximo"
                      id="precoMax"
                      type="number"
                      placeholder="Máx"
                      value={pesquisa.precoMax}
                      onInput={(e) =>
                        handleChangePesq(
                          "precoMax",
                          (e.target as HTMLInputElement).value
                        )
                      }
                      onBlur={() => validaCampoPesq("precoMax")}
                    />
                    {errosPesq.precoMax && (
                      <BrMessage
                        state="danger"
                        is-feedback
                        message={errosPesq.precoMax}
                        show-icon
                        aria-label={errosPesq.precoMax}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <BrButton
              type="button"
              className="br-button secondary"
              onClick={() => {
                setPesquisa({ ...initialPesquisa });
                setErrosPesq({});
              }}
            >
              Limpar
            </BrButton>
            <BrButton type="submit" className="br-button primary">
              Pesquisar
            </BrButton>
          </div>
        </form>
      </section>

      {/* Feedback e Estados de Validação */}
      <section className="form-section">
        <h4 className="mb-3">Feedback de Validação</h4>
        <div className="row">
          <div className="col-md-6">
            <h4 className="mb-3">Mensagens de Erro</h4>
            <BrMessage
              state="danger"
              message-title="Erro de Validação"
              message="Este é um exemplo de mensagem de erro para campos inválidos."
              show-icon
              aria-label="Erro de validação para campos inválidos"
            />
            <BrMessage
              state="warning"
              message-title="Aviso"
              message="Este é um exemplo de mensagem de aviso para campos que precisam de atenção."
              show-icon
              aria-label="Mensagem de aviso para campos que precisam de atenção"
            />
            <BrMessage
              state="info"
              message-title="Informação"
              message="Este é um exemplo de mensagem informativa para orientar o usuário."
              show-icon
              aria-label="Mensagem informativa para orientar o usuário"
            />
          </div>
          <div className="col-md-6">
            <h4 className="mb-3">Estados de Validação</h4>
            <div className="validation-states d-flex flex-column gap-4">
              <BrInput
                id="input-normal"
                label="Campo Normal"
                placeholder="Campo sem validação"
              />
              <BrInput
                id="input-success"
                label="Campo Sucesso"
                state="success"
                aria-describedby="feedback-success"
              >
                <BrMessage
                  id="feedback-success"
                  slot="feedback"
                  state="success"
                  is-feedback
                  message="Este campo está correto."
                  show-icon
                  aria-label="Campo com sucesso"
                />
              </BrInput>
              <BrInput
                id="input-info"
                label="Campo Informação"
                placeholder="Campo com dica"
                state="info"
                aria-describedby="feedback-info"
              >
                <BrMessage
                  id="feedback-info"
                  slot="feedback"
                  state="info"
                  is-feedback
                  message="Este campo fornece uma dica informativa."
                  show-icon
                  aria-label="Campo com informação"
                />
              </BrInput>
              <BrInput
                id="input-warning"
                label="Campo Alerta"
                placeholder="Campo com alerta"
                state="warning"
                aria-describedby="feedback-warning"
              >
                <BrMessage
                  id="feedback-warning"
                  slot="feedback"
                  state="warning"
                  is-feedback
                  message="Atenção! Verifique este campo."
                  show-icon
                  aria-label="Campo com alerta"
                />
              </BrInput>
              <BrInput
                id="input-error"
                label="Campo com Erro"
                placeholder="Campo com erro"
                state="danger"
                aria-invalid="true"
                aria-describedby="feedback-error"
              >
                <BrMessage
                  id="feedback-error"
                  slot="feedback"
                  state="danger"
                  is-feedback
                  message="Este campo contém um erro de validação."
                  show-icon
                  aria-label="Campo com erro"
                />
              </BrInput>
              <BrInput
                id="input-disabled"
                label="Campo Desabilitado"
                placeholder="Campo desabilitado"
                disabled
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormulariosValidacao;
