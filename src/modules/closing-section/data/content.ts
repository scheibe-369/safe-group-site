import type { ClosingSectionContent } from "../types";

/**
 * Copy pt-PT da seccao de fecho. Fecha a Home com o mesmo titulo que ja fechava
 * a pagina, agora com formulario, e sem prometer prazo, custo ou resultado que
 * nao esteja confirmado.
 */
export const closingSectionContent: ClosingSectionContent = {
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
  contactHeader: "Contacto",
  operationHeader: "Operação",
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
      message: "Contexto da operação",
    },
    selectPlaceholder: "Selecione",
    submit: "Começar diagnóstico",
    submitting: "A enviar",
    disabled: "Envio disponível em breve",
    disabledNotice:
      "A integração do formulário está em preparação. Os dados preenchidos não serão enviados.",
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
      message: "O contexto excede o limite de caracteres.",
    },
  },

  footer: {
    socialHeader: "Redes",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/safegroup_/" },
      { label: "LinkedIn", href: null },
    ],
    navHeader: "Navegação",
    navLinks: [
      { href: "/solucoes", label: "Soluções" },
      { href: "/metodo", label: "Método" },
      { href: "/cases", label: "Cases" },
      { href: "/sobre", label: "Sobre" },
      { href: "/contacto", label: "Contacto" },
    ],
    copyright: "Safe Group. Todos os direitos reservados.",
    producedBy: {
      label: "Desenvolvido por Method Growth Hub",
      href: "https://methodgrowthhub.com.br",
    },
    backToTop: "Voltar ao topo",
  },
};
