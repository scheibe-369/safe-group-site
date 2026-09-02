import type { ClosingSectionCopy } from "../types";

/**
 * Copy pt-PT da seccao de fecho, a lingua de origem. Fecha a Home com o mesmo
 * titulo que ja fechava a pagina, agora com formulario, e sem prometer prazo,
 * custo ou resultado que nao esteja confirmado. Este ficheiro e a fonte de onde
 * os outros quatro idiomas sao traduzidos.
 */
export const closingSectionCopyPtPT: ClosingSectionCopy = {
  kicker: "Próximo passo",
  titleLine1: "Antes de investir mais,",
  titleAccent: "encontre",
  titleLine3: "o ponto que muda a operação.",
  descA: "Partilhe o contexto da operação para avaliarmos onde existe ",
  descStrong: "maior potencial de impacto",
  descB: ".",
  benefits: [
    "Leitura da operação antes da solução",
    "Uma prioridade concreta para tratar",
    "Frentes ligadas ao mesmo objectivo",
    "Responsáveis e métricas claros",
  ],
  contactHeader: "Informações de contacto",
  operationHeader: "Informações sobre a empresa",
  submitHint: "Os dados servem apenas para preparar a primeira conversa.",

  form: {
    labels: {
      name: "Nome completo",
      email: "E-mail profissional",
      phone: "Telefone",
      company: "Empresa ou operação",
      sector: "Setor",
      operationSize: "Dimensão da operação",
      priority: "Prioridade atual",
    },
    selectPlaceholder: "Selecione",
    submit: "Começar diagnóstico",
    submitting: "A enviar",
    disabled: "Envio disponível em breve",
    successTitle: "Pedido recebido.",
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
      { path: "/contacto", label: "Contacto" },
    ],
    copyright: "Safe Group. Todos os direitos reservados.",
    backToTop: "Voltar ao topo",
  },
};
