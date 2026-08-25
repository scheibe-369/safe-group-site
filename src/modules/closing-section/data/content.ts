import type { ClosingSectionContent } from "../types";

/**
 * Copy pt-PT da seccao de fecho. Fecha a Home com o mesmo titulo que ja fechava
 * a pagina, agora com formulario, e sem prometer prazo, custo ou resultado que
 * nao esteja confirmado.
 */
export const closingSectionContent: ClosingSectionContent = {
  kicker: "Próximo passo",
  titleLine1: "Antes de escolher a ferramenta,",
  titleAccent: "descubra",
  titleLine3: "a alavanca.",
  descA: "Partilhe o contexto da operação para identificarmos onde existe ",
  descStrong: "maior potencial de crescimento, lucro ou eficiência",
  descB: ".",
  benefits: [
    "Leitura da operação antes da ferramenta",
    "Estrutura para uma oportunidade concreta",
    "Frentes isoladas ou em conjunto",
    "Responsáveis e métricas definidos",
  ],
  contactHeader: "Contacto",
  operationHeader: "Operação",
  submitHint: "Os dados servem apenas para preparar a conversa.",

  form: {
    labels: {
      name: "Nome completo",
      email: "E-mail profissional",
      phone: "Telefone",
      company: "Empresa ou operação",
      sector: "Setor",
      operationSize: "Dimensão da operação",
      priority: "Prioridade atual",
      message: "Contexto da operação",
    },
    selectPlaceholder: "Selecione",
    submit: "Solicitar diagnóstico",
    submitting: "A enviar",
    disabled: "Envio disponível em breve",
    disabledNotice:
      "A integração do formulário está em preparação. Os dados preenchidos não serão enviados.",
    successTitle: "Diagnóstico enviado.",
    successDesc:
      "A equipa Safe entrará em contacto para marcar a primeira conversa.",
    errorMessage: "Não foi possível enviar. Reveja a ligação e tente novamente.",
    errors: {
      name: "Indique o nome completo.",
      email: "Indique um e-mail válido.",
      phone: "Indique um telefone de contacto.",
      company: "Indique a empresa ou a operação.",
      sector: "Escolha o setor.",
      operationSize: "Escolha a dimensão da operação.",
      priority: "Escolha a prioridade atual.",
      message: "O contexto excede o limite de caracteres.",
    },
  },
};
