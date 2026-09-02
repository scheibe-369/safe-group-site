import type { ClosingSectionCopy } from "../types";

/**
 * Copy pt-BR da seccao de fecho, traduzida da baseline pt-PT. Fecha a Home com
 * o mesmo titulo que ja fechava a pagina, agora com formulario, e sem prometer
 * prazo, custo ou resultado que nao esteja confirmado.
 */
export const closingSectionCopyPtBR: ClosingSectionCopy = {
  kicker: "Próximo passo",
  titleLine1: "Antes de investir mais,",
  titleAccent: "encontre",
  titleLine3: "o ponto que muda a operação.",
  descA: "Compartilhe o contexto da operação para avaliarmos onde existe ",
  descStrong: "maior potencial de impacto",
  descB: ".",
  benefits: [
    "Leitura da operação antes da solução",
    "Uma prioridade concreta para tratar",
    "Frentes conectadas ao mesmo objetivo",
    "Responsáveis e métricas claros",
  ],
  contactHeader: "Informações de contato",
  operationHeader: "Informações sobre a empresa",
  submitHint: "Os dados servem apenas para preparar a primeira conversa.",

  form: {
    labels: {
      name: "Nome completo",
      email: "E-mail profissional",
      phone: "Telefone",
      company: "Empresa ou operação",
      sector: "Setor",
      operationSize: "Porte da operação",
      priority: "Prioridade atual",
    },
    selectPlaceholder: "Selecione",
    submit: "Começar diagnóstico",
    submitting: "Enviando",
    disabled: "Envio disponível em breve",
    successTitle: "Solicitação recebida.",
    successDesc:
      "O time Safe entrará em contato para marcar a primeira conversa.",
    errorMessage: "Não foi possível enviar. Verifique a conexão e tente novamente.",
    errors: {
      name: "Informe o nome completo.",
      email: "Informe um e-mail válido.",
      phone: "Informe um telefone de contato.",
      company: "Informe a empresa ou a operação.",
      sector: "Escolha o setor.",
      operationSize: "Escolha o porte da operação.",
      priority: "Escolha a prioridade atual.",
    },
  },

  footer: {
    socialHeader: "Redes",
    // Nomes de rede social sao marcas registadas: ficam iguais nos cinco
    // idiomas, tal como o endereco do perfil.
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/safegroup_/" },
      { label: "LinkedIn", href: null },
    ],
    navHeader: "Navegação",
    navLinks: [
      { path: "/solucoes", label: "Soluções" },
      { path: "/metodo", label: "Método" },
      { path: "/cases", label: "Cases" },
      { path: "/sobre", label: "Sobre" },
      { path: "/contacto", label: "Contato" },
    ],
    copyright: "Safe Group. Todos os direitos reservados.",
    backToTop: "Voltar ao topo",
  },
};
