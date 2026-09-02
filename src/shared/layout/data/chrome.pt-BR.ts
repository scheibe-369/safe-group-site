import type { SiteChromeContent } from "../types";

/**
 * Copy da moldura do site (salto para o conteudo, rodape global, pagina 404 e
 * metadados da raiz) em pt-BR, traduzida da baseline pt-PT.
 */
export const siteChromePtBR: SiteChromeContent = {
  skipToContent: "Pular para o conteúdo",
  logoAriaLabel: "Safe Group, página inicial",

  footer: {
    navAriaLabel: "Navegação do rodapé",
    tagline:
      "Estratégia, inteligência comercial e tecnologia para decisões que movem a operação.",
    // Este rodape aparece em todas as rotas menos a Home. E o unico caminho de
    // volta a lista de solucoes para quem aterra em `/solucoes/<slug>`, por
    // isso a entrada "Solucoes" tem de estar aqui.
    links: [
      { hash: "metodo", label: "Método" },
      { hash: "solucoes", label: "Soluções" },
      { hash: "cases", label: "Cases" },
      { hash: "diagnostico", label: "Contato" },
    ],
    rights: "Safe Group. Todos os direitos reservados.",
  },

  notFound: {
    kicker: "404",
    title: "Esta página não existe.",
    description: "Volte ao início para continuar explorando a Safe.",
    action: "Voltar ao início",
  },

  metadata: {
    titleDefault: "Safe Group | Decisões que movem a operação",
    description:
      "A Safe encontra a decisão que pode destravar crescimento, margem ou eficiência na operação e estrutura a execução em torno dela.",
    keywords: [
      "diagnóstico de operação",
      "inteligência comercial",
      "desenvolvimento SaaS",
      "tecnologia para vendas",
      "Safe Group",
    ],
    ogDescription: "Decisões que movem a operação.",
  },
};
