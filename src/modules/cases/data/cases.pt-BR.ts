import type { CaseStudy } from "../types/case-study";

/**
 * Cases em pt-BR, traduzidos da baseline pt-PT. Nem tudo neste ficheiro e
 * traduzivel: `slug`, `cover` e `isDemo` identificam o case e tem de ficar
 * iguais nos cinco idiomas, tal como o `href` do credito. Os nomes de cliente
 * sao marcas e normalmente tambem nao se traduzem. Ficam no mesmo objeto na
 * mesma, para o case continuar a ler-se como uma peca so.
 */

/**
 * Todos os cases são reais, com evidência aprovada pelo utilizador em
 * 27/08/2026. Os cases fictícios de demonstração foram removidos em
 * 28/08/2026; para voltar a publicar um case sem evidência ainda aprovada,
 * adicioná-lo com `isDemo: true`.
 */
export const caseStudiesPtBR: CaseStudy[] = [
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
    challenge: "Cada frente (site, aquisição, conteúdo, operação) avançava de forma avulsa, sem uma infraestrutura comum nem sistemas que acompanhassem o crescimento do time.",
    intervention: "Construção do site institucional, do processo operacional e da estratégia de tráfego pago e conteúdo, incluindo os primeiros formatos para os experts do time. Em paralelo, desenho e implementação de dois sistemas internos: um hub de agentes de IA e um sistema de contabilidade de tokens.",
    structure: "Site, processo operacional, estratégia de aquisição e sistemas internos de IA funcionando como uma base única, sem depender de conhecimento disperso pelo time.",
    results: [
      "Infraestrutura digital completa em operação, do site aos sistemas internos.",
      "Processo comercial e de conteúdo documentado e replicável.",
      "Sistemas internos de IA sustentando a operação diária do time.",
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
    context: "A Previa é uma fomentadora que compra recebíveis de cedentes e cobra dos sacados responsáveis pelo pagamento. O acompanhamento de vencimentos e a cobrança dependiam do trabalho manual do time, e a base de operações entre cedentes e sacados não era usada além da cobrança.",
    challenge: "A cobrança perdia tempo e consistência por depender de pessoas, e a mesma base que sustentava a cobrança escondia sacados com potencial para se tornarem clientes diretos, sem que ninguém os identificasse.",
    intervention: "Duas frentes estruturadas em paralelo. Na cobrança, um sistema passou a ler a base de clientes da Previa, identificar vencimentos com dois dias de antecedência e acionar a cobrança automática por e-mail e pelo WhatsApp oficial. Na inteligência comercial, a base de operações entre cedentes e sacados foi analisada com um filtro definido pela Previa, para identificar sacados com potencial para se tornarem cedentes, ou seja, clientes diretos.",
    structure: "Motor de cobrança automatizada conectado à base de clientes e aos canais oficiais de e-mail e WhatsApp, com aviso dois dias antes do vencimento. Processo de leitura de dados que entrega ao comercial uma lista qualificada de oportunidades geradas pela própria operação, sem depender de análise manual.",
    results: [
      "Cobrança deixou de depender de acompanhamento manual do time.",
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
    summary: "Rede de três motéis com atendimento disperso entre WhatsApp e Instagram, sem um sistema único para gerenciar tudo.",
    cover: "/cases/rede-de-moteis.webp",
    area: "Sistema de atendimento",
    deliverables: [
      "CRM de atendimento",
      "Integração WhatsApp oficial e não oficial",
      "Integração com Instagram",
      "Multi-login por função",
      "Controle financeiro e de campanhas",
    ],
    context: "Rede com três motéis, o Cozumel, o Manhattan e o Atenas, com atendimento disperso entre WhatsApp e Instagram, sem um sistema único que ligasse conversas, campanhas e financeiro.",
    challenge: "Cada motel gerenciava o atendimento à sua maneira, com mais de cinco números de WhatsApp ativos ao mesmo tempo e sem controle central sobre quem via o quê, do atendente ao gerente.",
    intervention: "Construção de um CRM de atendimento próprio, com WhatsApp API oficial e não oficial, Instagram integrado no mesmo painel, controle de campanhas e módulo financeiro. Multi-login separa o acesso por função: administrador, gerente de loja e atendentes.",
    structure: "Sistema único suportando atendimento simultâneo em mais de cinco números de WhatsApp e Instagram, com acesso segmentado por função e pronto para receber novos motéis da rede.",
    results: [
      "Atendimento dos três motéis passou a operar dentro do mesmo sistema.",
      "Mais de cinco números de WhatsApp gerenciados ao mesmo tempo sem perder controle.",
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
  {
    slug: "sac-automoveis",
    client: "SAC Automóveis",
    sector: "Varejo Automotivo",
    summary: "Instagram sem força comercial e nenhuma frente para comprar veículos em condições competitivas, quando a rentabilidade do varejo automotivo começa antes da venda.",
    cover: "/cases/sac-automoveis.webp",
    area: "Estratégia comercial, marketing e rentabilidade",
    deliverables: [
      "Autoridade no Instagram",
      "Crescimento de audiência",
      "Funis de vendas",
      "Campanhas para feirões e eventos internos",
      "Campanhas de aquisição de veículos com melhor margem",
    ],
    context: "A SAC Automóveis precisava reforçar a presença digital e transformar o Instagram em uma frente comercial ativa. Mas o desafio não terminava na venda: no varejo automotivo, a rentabilidade também começa na compra do veículo e na qualidade do estoque que entra na operação.",
    challenge: "Era preciso atuar nas duas pontas do negócio: gerar mais oportunidades de venda e criar campanhas capazes de atrair veículos para compra em condições mais competitivas. A estratégia precisava aumentar audiência e autoridade, apoiar os feirões internos e melhorar a capacidade da loja de comprar, definir preços e vender com mais margem.",
    intervention: "A Safe estruturou uma estratégia de marketing e vendas para ampliar a presença da SAC no Instagram, aumentar a base de seguidores e consolidar a autoridade da marca no mercado automotivo. Em paralelo, desenvolveu funis e campanhas para eventos internos, feirões e aquisição de veículos. A comunicação passou a trabalhar tanto a demanda de quem quer comprar como a atração de oportunidades de estoque com maior potencial de rentabilidade.",
    structure: "Uma operação de marketing ligada ao ciclo completo do negócio: autoridade → audiência → campanhas de compra → estoque → campanhas de venda → feirões → margem. O Instagram deixou de ser apenas uma vitrine: passou a apoiar a entrada de veículos, a geração de demanda e a rentabilidade por venda.",
    results: [
      "Crescimento da base de seguidores e reforço da autoridade da SAC Automóveis no Instagram.",
      "Campanhas estruturadas para gerar oportunidades de compra e venda de veículos, incluindo feirões e eventos internos.",
      "Marketing ligado à margem da operação: mais capacidade para comprar melhor, formar estoque com mais potencial e vender com mais rentabilidade.",
    ],
    gallery: [],
  },
  {
    slug: "new-car-automoveis",
    client: "New Car Automóveis",
    sector: "Varejo Automotivo",
    summary: "Loja de automóveis do interior apostando em feirões periódicos, sem forma de qualificar o volume de leads do tráfego pago nem de reativar a base de contatos antigos.",
    cover: "/cases/new-car-automoveis.webp",
    area: "Tráfego pago, automação de atendimento e gestão de feirões",
    deliverables: [
      "Gestão de campanhas de tráfego pago para feirões",
      "Produção de criativos",
      "Disparo de mensagens para a base de leads antigos",
      "Agente de IA de pré-qualificação de leads",
      "Agente de IA de conversão para vendas",
    ],
    context: "A New Car Automóveis é uma loja de automóveis do interior que apostava em feirões periódicos para vender, mas gerava tráfego pago sem conseguir filtrar quais leads valiam o tempo dos vendedores nem reativar a base de leads antigos parada no CRM.",
    challenge: "O volume de leads gerado pelas campanhas e pelos disparos para a base antiga era grande demais para um atendimento manual. Sem pré-qualificação, os vendedores perdiam tempo com leads sem intenção real de compra, e a base antiga de contatos ficava esquecida entre um feirão e outro.",
    intervention: "A Safe assumiu a gestão de campanhas de tráfego pago focadas nos feirões, com produção própria de criativos, e estruturou uma estratégia de disparo de mensagens para reativar a base de leads antigos da loja. Para dar conta do volume, desenvolveu dois agentes de IA: um de pré-atendimento, que qualificava todos os leads de tráfego pago antes de repassá-los aos vendedores, descartando os sem qualificação, e outro dedicado a abordar os leads dos disparos e conduzi-los até a venda.",
    structure: "Duas frentes ligadas ao mesmo objetivo: tráfego pago e criativos alimentando os feirões, com um agente de IA filtrando o que chegava aos vendedores, e disparos para a base antiga trabalhados por um segundo agente de IA até a conversão. Os vendedores só recebiam leads já qualificados.",
    results: [
      "Mais de 50 carros vendidos em um único feirão.",
      "Todos os leads de tráfego pago pré-qualificados por IA antes de chegarem aos vendedores, com os sem qualificação descartados.",
      "Reativação da base de leads antigos com um agente de IA dedicado a converter os disparos em vendas.",
    ],
    gallery: [],
  },
];
