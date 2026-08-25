import type { CaseStudy } from "../types/case-study";

/**
 * Ligado enquanto os cases publicados forem de demonstração.
 *
 * Enquanto for `true`, a rota /cases e as páginas de case ficam fora do índice
 * dos motores de busca e fora do sitemap, e o site mostra um aviso onde os
 * cases aparecem.
 *
 * Quando entrarem cases reais com evidências aprovadas: substituir o array
 * abaixo e pôr esta constante a `false`. É o único interruptor.
 */
export const casesAreDemo = true;

/**
 * Conteúdo de demonstração. Clientes, contextos e resultados são inventados e
 * não correspondem a trabalho realizado. Não reutilizar em proposta,
 * apresentação ou qualquer material comercial.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "norte-mobilidade",
    client: "Norte Mobilidade",
    sector: "Automóvel",
    summary: "Rede de concessões com equipas dispersas e sem leitura única do funil.",
    cover: "/cases/norte-mobilidade.webp",
    area: "Estrutura comercial",
    deliverables: ["Diagnóstico comercial", "Desenho de funil", "Cadência de gestão"],
    context: "Rede com sete pontos de venda, cada um com o seu processo e o seu ficheiro próprio de acompanhamento.",
    challenge: "A direção não conseguia comparar unidades nem perceber onde o negócio se perdia entre a visita e a proposta.",
    intervention: "Unificação do funil, definição do que conta como oportunidade qualificada e uma cadência semanal de revisão por unidade.",
    structure: "Funil único, painel por unidade e um ritual de gestão que sobrevive à ausência de qualquer pessoa em particular.",
    results: [
      "Leitura comparável entre unidades pela primeira vez.",
      "Critério único de qualificação em toda a rede.",
      "Revisão semanal instalada como rotina da direção.",
    ],
    gallery: [],
  },
  {
    slug: "lavra-veiculos",
    client: "Lavra Veículos",
    sector: "Automóvel",
    summary: "Volume alto de contactos e taxa de resposta desigual entre turnos.",
    cover: "/cases/lavra-veiculos.webp",
    area: "Operação de vendas",
    deliverables: ["Mapeamento de atendimento", "Regras de distribuição", "Formação da equipa"],
    context: "Operação com forte investimento em captação e uma equipa de atendimento a trabalhar por turnos.",
    challenge: "O tempo até ao primeiro contacto variava conforme a hora do dia, e ninguém tinha essa leitura.",
    intervention: "Medição do tempo de resposta por turno, regras de distribuição por disponibilidade real e formação sobre o primeiro contacto.",
    structure: "Distribuição automática, medição contínua do tempo de resposta e um responsável por turno.",
    results: [
      "Tempo até ao primeiro contacto passou a ser medido.",
      "Distribuição deixou de depender de quem estava disponível.",
      "Diferença entre turnos ficou visível e gerível.",
    ],
    gallery: [],
  },
  {
    slug: "cardume-frotas",
    client: "Cardume Frotas",
    sector: "Automóvel",
    summary: "Decisão de renovação de frota assente em folhas de cálculo desatualizadas.",
    cover: "/cases/cardume-frotas.webp",
    area: "Inteligência de dados",
    deliverables: ["Consolidação de dados", "Painel de decisão", "Modelo de custo"],
    context: "Gestora de frotas com contratos de longo prazo e dados espalhados por vários sistemas.",
    challenge: "O custo real por veículo só era conhecido no fecho do ano, tarde demais para negociar.",
    intervention: "Consolidação das fontes num único modelo de custo e um painel que mostra o custo por veículo ao mês.",
    structure: "Modelo de custo documentado e painel atualizado sem intervenção manual.",
    results: [
      "Custo por veículo deixou de depender do fecho anual.",
      "Negociação de contratos passou a ter base própria.",
      "Fim da consolidação manual em folha de cálculo.",
    ],
    gallery: [],
  },
  {
    slug: "ribalta-credito",
    client: "Ribalta Crédito",
    sector: "Financeiro",
    summary: "Crescimento rápido sem estrutura de acompanhamento por gestor.",
    cover: "/cases/ribalta-credito.webp",
    area: "Estrutura comercial",
    deliverables: ["Desenho de território", "Metas por gestor", "Cadência de revisão"],
    context: "Intermediária de crédito em expansão, com gestores a acumular carteira sem critério definido.",
    challenge: "A carteira crescia mais depressa do que a capacidade de acompanhamento, e a perda só aparecia no fim.",
    intervention: "Desenho de territórios, metas por gestor ligadas a capacidade real e revisão quinzenal de carteira.",
    structure: "Território definido por gestor, meta ligada a capacidade e revisão quinzenal com dono claro.",
    results: [
      "Carteira por gestor passou a ter limite explícito.",
      "Perda de acompanhamento deixou de ser descoberta no fecho.",
      "Revisão quinzenal instalada.",
    ],
    gallery: [],
  },
  {
    slug: "azimute-capital",
    client: "Azimute Capital",
    sector: "Financeiro",
    summary: "Relatório de originação produzido à mão todos os meses.",
    cover: "/cases/azimute-capital.webp",
    area: "Inteligência de dados",
    deliverables: ["Automatização de relatório", "Definição de métricas", "Painel executivo"],
    context: "Casa de investimento com originação por vários canais e reporte mensal manual.",
    challenge: "Três dias de trabalho por mês a montar um relatório que chegava já desatualizado à reunião.",
    intervention: "Definição das métricas que importam, automatização da recolha e um painel executivo permanente.",
    structure: "Painel executivo com atualização automática e definição escrita de cada métrica.",
    results: [
      "Reporte mensal deixou de ser produzido à mão.",
      "Métricas passaram a ter definição escrita e partilhada.",
      "Reunião de originação passou a olhar para dados do próprio dia.",
    ],
    gallery: [],
  },
  {
    slug: "pontal-seguros",
    client: "Pontal Seguros",
    sector: "Financeiro",
    summary: "Renovações tratadas como tarefa administrativa e não como oportunidade.",
    cover: "/cases/pontal-seguros.webp",
    area: "Operação de vendas",
    deliverables: ["Fluxo de renovação", "Segmentação de carteira", "Guião de contacto"],
    context: "Corretora com carteira madura e uma janela de renovação concentrada em poucos meses.",
    challenge: "A renovação era processada sem contacto comercial, e a carteira erodia sem que ninguém visse porquê.",
    intervention: "Segmentação da carteira por risco de saída, fluxo de contacto antes da renovação e guião por segmento.",
    structure: "Fluxo de renovação com contacto antecipado e segmentação revista a cada trimestre.",
    results: [
      "Renovação passou a ter contacto comercial antes da data.",
      "Carteira segmentada por risco de saída.",
      "Motivo de saída passou a ser registado.",
    ],
    gallery: [],
  },
  {
    slug: "talha-plataforma",
    client: "Talha Plataforma",
    sector: "Software e SaaS",
    summary: "Equipa técnica a vender sem processo e sem previsão fiável.",
    cover: "/cases/talha-plataforma.webp",
    area: "Estrutura comercial",
    deliverables: ["Processo comercial", "Previsão de receita", "Formação de fundadores"],
    context: "Plataforma B2B vendida pelos fundadores, com ciclo longo e sem registo estruturado.",
    challenge: "A previsão de receita era um palpite, o que tornava impossível planear contratações.",
    intervention: "Definição de etapas do processo, critérios de passagem entre etapas e previsão assente em probabilidade por etapa.",
    structure: "Processo comercial escrito, critérios de passagem e previsão revista todas as semanas.",
    results: [
      "Previsão de receita deixou de ser um palpite.",
      "Etapas do processo passaram a ter critério de entrada.",
      "Planeamento de contratações ganhou base.",
    ],
    gallery: [],
  },
  {
    slug: "bussola-saas",
    client: "Bússola SaaS",
    sector: "Software e SaaS",
    summary: "Churn conhecido em agregado e desconhecido por segmento.",
    cover: "/cases/bussola-saas.webp",
    area: "Inteligência de dados",
    deliverables: ["Modelo de retenção", "Segmentação de clientes", "Alerta de risco"],
    context: "SaaS de subscrição mensal com base instalada diversificada.",
    challenge: "O churn agregado escondia comportamentos muito diferentes entre segmentos de cliente.",
    intervention: "Segmentação da base, cálculo de retenção por coorte e alertas de risco ligados a sinais de utilização.",
    structure: "Retenção calculada por coorte e alerta de risco a chegar à equipa antes do cancelamento.",
    results: [
      "Churn passou a ser lido por segmento e não só em agregado.",
      "Sinais de risco passaram a chegar antes do cancelamento.",
      "Retenção por coorte instalada no reporte.",
    ],
    gallery: [],
  },
];
