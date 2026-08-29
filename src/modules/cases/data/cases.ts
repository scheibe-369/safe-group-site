import type { CaseStudy } from "../types/case-study";

/**
 * Cada case marca `isDemo: true` se for fictício. Um case sem essa marca é
 * real, com evidência aprovada, e entra no sitemap e no índice dos motores de
 * busca individualmente.
 *
 * `hasDemoCases` alimenta o aviso mostrado enquanto existir pelo menos um case
 * fictício no array. Some os `isDemo` de um case específico para o publicar
 * como real, sem afetar os restantes.
 */
export const hasDemoCases = (items: CaseStudy[]) => items.some((item) => item.isDemo);

/**
 * Todos os cases são reais, com evidência aprovada pelo utilizador em
 * 27/08/2026. Os cases fictícios de demonstração foram removidos em
 * 28/08/2026; para voltar a publicar um case sem evidência ainda aprovada,
 * adicioná-lo com `isDemo: true`.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "growth-hub",
    client: "Growth Hub",
    sector: "Serviços e Tecnologia",
    summary: "Operação inteira sem base digital própria: site, aquisição, conteúdo e sistemas internos dependiam de esforço disperso.",
    cover: "/cases/growth-hub.webp",
    area: "Infraestrutura digital",
    deliverables: [
      "Site institucional",
      "Processo operacional",
      "Estratégia de tráfego pago e conteúdo",
      "Sistema de hub de agentes de IA",
      "Sistema de contabilidade de tokens de IA",
    ],
    context: "Empresa em crescimento sem site institucional, sem processo comercial documentado e sem sistemas internos que sustentassem a operação de agentes de IA.",
    challenge: "Cada frente (site, aquisição, conteúdo, operação) avançava de forma avulsa, sem uma infraestrutura comum nem sistemas que acompanhassem o crescimento da equipa.",
    intervention: "Construção do site institucional, do processo operacional e da estratégia de tráfego pago e conteúdo, incluindo os primeiros formatos para os experts da equipa. Em paralelo, desenho e implementação de dois sistemas internos: um hub de agentes de IA e um sistema de contabilidade de tokens.",
    structure: "Site, processo operacional, estratégia de aquisição e sistemas internos de IA a funcionar como uma base única, sem depender de conhecimento disperso pela equipa.",
    results: [
      "Infraestrutura digital completa em operação, do site aos sistemas internos.",
      "Processo comercial e de conteúdo documentado e replicável.",
      "Sistemas internos de IA a sustentar a operação diária da equipa.",
    ],
    gallery: [],
  },
  {
    slug: "previa",
    client: "Previa",
    sector: "Financeiro",
    summary: "Fomentadora com cobrança dependente de pessoas e uma base de operações sem leitura comercial.",
    cover: "/cases/previa.webp",
    area: "Automação e inteligência de dados",
    deliverables: ["Automação de cobrança", "Modelo de qualificação comercial", "Integração de canais oficiais"],
    context: "A Previa é uma fomentadora que compra recebíveis de cedentes e cobra dos sacados responsáveis pelo pagamento. O acompanhamento de vencimentos e a cobrança dependiam do trabalho manual da equipa, e a base de operações entre cedentes e sacados não era usada além da cobrança.",
    challenge: "A cobrança perdia tempo e consistência por depender de pessoas, e a mesma base que sustentava a cobrança escondia sacados com potencial para se tornarem clientes diretos, sem que ninguém os identificasse.",
    intervention: "Duas frentes estruturadas em paralelo. Na cobrança, um sistema passou a ler a base de clientes da Previa, identificar vencimentos com dois dias de antecedência e acionar a cobrança automática por email e pelo WhatsApp oficial. Na inteligência comercial, a base de operações entre cedentes e sacados foi analisada com um filtro definido pela Previa, para identificar sacados com potencial para se tornarem cedentes, ou seja, clientes diretos.",
    structure: "Motor de cobrança automatizada ligado à base de clientes e aos canais oficiais de email e WhatsApp, com aviso dois dias antes do vencimento. Processo de leitura de dados que entrega ao comercial uma lista qualificada de oportunidades geradas pela própria operação, sem depender de análise manual.",
    results: [
      "Cobrança deixou de depender de acompanhamento manual da equipa.",
      "Comercial passou a receber oportunidades qualificadas geradas pela própria base de operações.",
      "Aumento de faturamento e lucro com duas frentes complementares.",
    ],
    gallery: [],
  },
  {
    slug: "falow",
    client: "Falow",
    sector: "Software e SaaS",
    summary: "Automação de Instagram presa ao custo e aos limites do ManyChat, sem espaço para virar produto próprio.",
    cover: "/cases/falow.webp",
    area: "Automação e produto SaaS",
    deliverables: ["Landing page", "Automação de DM e comentário", "Produto SaaS multi-cliente"],
    context: "Matheus Fonseca automatizava DM e comentário do Instagram pelo ManyChat, com custo mensal recorrente e automações limitadas ao que a ferramenta genérica permitia.",
    challenge: "O ManyChat gerava custo fixo e travava automações mais rápidas e específicas para a operação, sem abrir caminho para transformar essa capacidade em produto próprio.",
    intervention: "Construção do Falow, um SaaS próprio de automação de DM e comentário no Instagram por regras de palavra-chave e sequências, mais rápido de operar do que o ManyChat. A landing page e o sistema foram desenhados para vender também fora da base de origem, como produto independente.",
    structure: "Motor de automação por regras de palavra-chave e sequências, landing page própria e sistema pronto para atender clientes fora da base original.",
    results: [
      "Substituição do ManyChat reduziu custo e acelerou a operação de automação.",
      "Falow passou a existir como produto próprio, vendável fora da base de origem.",
      "Nova frente de faturamento, com lucratividade distinta da operação original.",
    ],
    gallery: [],
    credit: { label: "@matheusfonseca.ia", href: "https://www.instagram.com/matheusfonseca.ia/" },
  },
  {
    slug: "rede-de-moteis",
    client: "Cozumel, Manhattan e Atenas",
    sector: "Software e SaaS",
    summary: "Rede de três motéis com atendimento disperso entre WhatsApp e Instagram, sem um sistema único para gerir tudo.",
    cover: "/cases/rede-de-moteis.webp",
    area: "Sistema de atendimento",
    deliverables: [
      "CRM de atendimento",
      "Integração WhatsApp oficial e não oficial",
      "Integração com Instagram",
      "Multi-login por função",
      "Controlo financeiro e de campanhas",
    ],
    context: "Rede com três motéis, o Cozumel, o Manhattan e o Atenas, com atendimento disperso entre WhatsApp e Instagram, sem um sistema único que ligasse conversas, campanhas e financeiro.",
    challenge: "Cada motel geria o atendimento à sua maneira, com mais de cinco números de WhatsApp ativos ao mesmo tempo e sem controlo central sobre quem via o quê, do atendente ao gerente.",
    intervention: "Construção de um CRM de atendimento próprio, com WhatsApp API oficial e não oficial, Instagram integrado no mesmo painel, controlo de campanhas e módulo financeiro. Multi-login separa o acesso por função: administrador, gerente de loja e atendentes.",
    structure: "Sistema único a suportar atendimento simultâneo em mais de cinco números de WhatsApp e Instagram, com acesso segmentado por função e pronto para receber novos motéis da rede.",
    results: [
      "Atendimento dos três motéis passou a operar dentro do mesmo sistema.",
      "Mais de cinco números de WhatsApp geridos ao mesmo tempo sem perder controlo.",
      "Estrutura pronta para expansão a novos motéis da rede.",
    ],
    gallery: [],
  },
  {
    slug: "brasil-dtf",
    client: "Brasil DTF",
    sector: "Indústria Gráfica",
    summary: "Empresa de impressoras DTF sem site para sustentar campanhas no Google e sem nenhuma ferramenta digital para o mercado de estampas que já atendia.",
    cover: "/cases/brasil-dtf.webp",
    area: "Site institucional e produto SaaS",
    deliverables: [
      "Landing page institucional otimizada para Google Ads",
      "SEO técnico e performance mobile",
      "Stamp AI (Halftone Studio), SaaS de pós-produção de estampas",
      "Sistema multiempresa com login e plano de assinatura",
    ],
    context: "A Brasil DTF vende impressoras DTF e UV DTF para lojistas e fabricantes de estampas, mas não tinha site para sustentar campanhas no Google nem nenhuma ferramenta digital além da venda das próprias máquinas.",
    challenge: "Sem um site rápido e bem estruturado, o investimento em Google Ads perdia eficiência, e o mercado de estampas que a Brasil DTF já atendia (lojistas que precisam remover fundo e aplicar meio-tom nas artes antes de imprimir) não tinha nenhuma ferramenta acessível para isso.",
    intervention: "Construção de um site institucional com padrão profissional de landing page, otimizado para SEO e para campanhas no Google, validado em velocidade e performance mobile. Em paralelo, desenvolvimento do Stamp AI (Halftone Studio), um SaaS próprio para o mercado de estampas, com remoção de fundo, geração e upscale de imagem e diferentes técnicas de meio-tom, pronto para o fluxo de quem imprime estampas.",
    structure: "Site institucional rápido e otimizado para tráfego pago e busca orgânica, e uma plataforma SaaS separada com sistema multiempresa, login próprio por loja, sistema de tokens e as ferramentas de pós-produção de imagem que o mercado de estampas precisa.",
    results: [
      "Site validado em velocidade e performance mobile, pronto para sustentar campanhas no Google.",
      "Stamp AI (Halftone Studio) lançado como SaaS próprio, hoje com mais de 20 lojistas ativos.",
      "Nova frente de faturamento para a Brasil DTF, fora da venda de impressoras.",
    ],
    gallery: [],
  },
];
