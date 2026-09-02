import type { SolutionsContent } from "../types/solution";

/**
 * Copy do modulo das solucoes em pt-BR, traduzida da baseline pt-PT: as seis
 * solucoes e o texto que estava escrito dentro dos componentes.
 *
 * A ordem do array manda em tudo: nos paineis, na coluna do menu, na grelha de
 * "outras solucoes" e no sitemap. Foi definida pelo utilizador a 31/08/2026,
 * nao e alfabetica nem acidental. Os `slug` identificam a solucao e nao sao
 * traduzidos: sao iguais nos cinco idiomas.
 *
 * O esqueleto de copy segue o layout do original (chapeu, nome curto, teaser,
 * pitch de uma linha, titulo de introducao, paragrafo, tres ofertas e frase de
 * fecho), mas o texto e escrito na voz estrutural da Safe: decisao, responsavel
 * e metrica a frente do servico. Sem metricas, clientes ou resultados
 * inventados.
 */
export const solutionsPtBR: SolutionsContent = {
  kicker: "// Frentes_de_execução",
  sectionLabel: "Soluções",
  cursorLabel: "abrir",
  panelAction: "Mais detalhes",

  detail: {
    diagnosticAction: "Começar diagnóstico",
    offeringsKicker: "O que entra",
    offeringsTitle: "O que fazemos em {solution}.",
    statementOverline: "em outras palavras",
    casesKicker: "Cases",
    casesTitle: "Operações que a Safe já estruturou.",
    casesAction: "Todos os cases",
    casesCarouselLabel: "cases Safe",
    othersKicker: "Soluções",
    othersTitle: "As demais frentes da Safe.",
    notFoundTitle: "Solução não encontrada",
    ogTitle: "{solution} | Safe Group",
  },

  items: [
    {
      slug: "website",
      name: "Website",
      menuLabel: "website",
      teaser:
        "Site construído para converter demanda em conversa qualificada. Velocidade, leitura clara da oferta e conexão direta com o atendimento, para o site deixar de ser cartão de visita e passar a ser a primeira etapa do funil.",
      pitch: "Um site que abre conversa qualificada, não apenas visitas",
      introHeading: "Um site que trabalha como primeira etapa do funil",
      introBody:
        "Um site bonito que não gera conversa é despesa. Construímos a partir da decisão que o visitante precisa tomar: entender o que a operação resolve, se reconhecer no problema e avançar para o contato. Cada página é medida por oportunidades geradas, e a estrutura fica pronta para se conectar ao CRM e ao atendimento desde o primeiro dia.",
      offerings: [
        {
          title: "Páginas orientadas à decisão do visitante",
          body: "Estrutura, texto e design orientados à decisão do visitante, com desempenho e leitura no celular tratados como requisito e não como ajuste final.",
        },
        {
          title: "Do formulário ao CRM",
          body: "Formulários, WhatsApp e eventos conectados ao CRM, para cada contato entrar identificado com origem e contexto.",
        },
        {
          title: "Medição e iteração",
          body: "Leitura de tráfego, conversão e origem para melhorar as páginas com dados da operação rodando.",
        },
      ],
      statement:
        "Uma página passa a valer quando é medida por conversas abertas, e não por visitas.",
      image: "/solucoes/website.webp",
      imageAlt: "Página de entrada de um site da Safe apresentada em uma tela",
      metaDescription:
        "Sites e landing pages construídos para abrir conversa qualificada, conectados ao CRM e ao atendimento desde o primeiro dia.",
    },
    {
      slug: "trafego-pago",
      name: "Tráfego Pago",
      menuLabel: "tráfego pago",
      teaser:
        "Investimento em demanda conectado ao que acontece depois do clique. A leitura começa no custo por oportunidade qualificada e na margem do negócio fechado, não no custo por clique nem no alcance da campanha.",
      pitch: "Demanda paga medida pelo negócio fechado, não pelo clique",
      introHeading: "Aquisição paga tratada como alavanca da operação",
      introBody:
        "A campanha é a ponta visível de uma cadeia que começa na oferta e termina na margem. Por isso conectamos a compra de demanda ao atendimento, ao CRM e à leitura de resultado antes de aumentar investimento. Quando o funil está convertendo, escalar é uma decisão de dados. Quando não está, aumentar o orçamento só amplia o problema mais rápido.",
      offerings: [
        {
          title: "Estrutura de campanha",
          body: "Contas, públicos, criativos e orçamentos organizados por objetivo de negócio, com um responsável e uma métrica por frente.",
        },
        {
          title: "Conexão com o funil",
          body: "Conversões, eventos e origem do contato conectados ao CRM, para saber qual campanha gerou o negócio e não apenas o formulário.",
        },
        {
          title: "Leitura e escala",
          body: "Cadência de análise sobre custo por oportunidade qualificada, taxa de fechamento e margem, para decidir onde aumentar e onde parar.",
        },
      ],
      statement:
        "Investimento que sobe quando o funil aguenta, e não porque o painel de anúncios mostrou um bom resultado isolado.",
      image: "/solucoes/trafego-pago.webp",
      imageAlt: "Painel de campanhas pagas, com leitura de custo e de conversão, em uma tela",
      metaDescription:
        "Aquisição paga conectada ao atendimento, ao CRM e à margem, medida por oportunidade qualificada e negócio fechado.",
    },
    {
      slug: "funcionarios-ia",
      name: "Funcionários IA",
      menuLabel: "funcionários ia",
      teaser:
        "Agentes que atendem, qualificam e agendam sem sair do processo que a operação já tem. Trabalham no WhatsApp e no CRM, respondem em segundos a qualquer hora e passam para o time apenas o que exige decisão humana.",
      pitch: "Capacidade de atendimento que cresce sem aumentar a folha salarial",
      introHeading: "Um time de IA que trabalha dentro da sua operação",
      introBody:
        "Um funcionário IA não é um assistente com respostas prontas. É uma função definida dentro do processo comercial, com acesso ao contexto do cliente, regras claras de passagem para o time e uma métrica que a mede. Desenhamos o papel, conectamos as ferramentas que você já usa e acompanhamos a operação rodando, para que cada conversa entre no funil em vez de morrer em uma caixa de entrada.",
      offerings: [
        {
          title: "Atendimento e qualificação",
          body: "O agente recebe o contato, entende a intenção, qualifica com os critérios da operação e entrega ao time comercial apenas o que já está pronto para conversa.",
        },
        {
          title: "Agendamento e acompanhamento",
          body: "Marcação direta na agenda, confirmação, lembrete e reativação de quem não respondeu, sem depender de alguém lembrar de fazer o acompanhamento.",
        },
        {
          title: "Integração com CRM e ferramentas",
          body: "Cada conversa fica registrada onde o time já trabalha, com histórico, origem e status atualizados sem trabalho manual.",
        },
      ],
      statement:
        "Atendimento disponível a qualquer hora, com o mesmo critério em todas as conversas e sem perder o contato que chegou fora do horário.",
      image: "/solucoes/funcionarios-ia.webp",
      imageAlt: "Painel de agentes de IA atendendo conversas de clientes em uma tela",
      metaDescription:
        "Funcionários IA que atendem, qualificam e agendam dentro do processo comercial que a operação já tem, conectados ao WhatsApp e ao CRM.",
    },
    {
      slug: "software-saas",
      name: "Software e SaaS",
      menuLabel: "software e saas",
      teaser:
        "Produto digital construído para sustentar receita. Definimos o escopo a partir da operação, entregamos em ciclos curtos e deixamos o sistema rodando com quem vai usá-lo todos os dias.",
      pitch: "Produto próprio que sustenta receita em vez de somar mais uma licença",
      introHeading: "Produto entregue em ciclos curtos, com quem usa decidindo o próximo",
      introBody:
        "Trabalhamos software como parte da operação e não como projeto paralelo. Começamos por entender que decisão o sistema precisa servir, que dados precisa ler e quem vai usá-lo. A partir daí entregamos em ciclos curtos, com o que está pronto já em uso, em vez de meses de desenvolvimento antes de alguém tocar no produto.",
      offerings: [
        {
          title: "Plataformas e portais",
          body: "Sistemas internos e portais de cliente que substituem planilhas, processos manuais e ferramentas que deixaram de servir à escala atual.",
        },
        {
          title: "Produto SaaS",
          body: "Do escopo inicial ao produto em produção, com autenticação, faturamento, painel de administração e a base preparada para crescer em número de usuários.",
        },
        {
          title: "Integrações e dados",
          body: "Conexão entre CRM, faturamento, marketing e operação, para a informação passar a existir uma vez só e em um lugar só.",
        },
      ],
      statement:
        "Software que entra na operação já funcionando, com quem usa decidindo o que vem no ciclo seguinte.",
      image: "/solucoes/software-saas.webp",
      imageAlt: "Interface de uma plataforma SaaS apresentada em uma tela",
      metaDescription:
        "Plataformas, produtos SaaS e integrações construídos a partir da operação, entregues em ciclos curtos e já em uso.",
    },
    {
      slug: "estrategia",
      name: "Estratégia",
      menuLabel: "estratégia",
      teaser:
        "A leitura que decide por onde começar. Cruzamos demanda, processo comercial, tecnologia, dados e margem para encontrar a decisão com maior impacto na operação, antes de contratar time, ferramenta ou campanha.",
      pitch: "A decisão certa antes do investimento, não depois dele",
      introHeading: "Ler o negócio inteiro antes de mexer em uma peça",
      introBody:
        "A maioria das operações não tem falta de ideias, tem falta de prioridade. O diagnóstico lê a operação como um sistema, identifica onde está o gargalo real e devolve a frente que destrava crescimento, margem ou eficiência. O que sai daqui é uma decisão com responsável, prazo e métrica, não um relatório.",
      offerings: [
        {
          title: "Diagnóstico da operação",
          body: "Demanda, atendimento, processo comercial, tecnologia, dados, produto e margem lidos como parte do mesmo sistema.",
        },
        {
          title: "Prioridade e plano",
          body: "A frente escolhida, o que muda em cada etapa, quem é responsável e como o progresso é medido.",
        },
        {
          title: "Acompanhamento",
          body: "Cadência de revisão sobre o que mudou de fato na operação, para a prioridade seguinte nascer de dados e não de suposição.",
        },
      ],
      statement:
        "Saber qual é a decisão que move a operação vale mais do que executar dez que não movem nada.",
      image: "/solucoes/estrategia.webp",
      imageAlt: "Mapa de decisão de uma operação apresentado em uma tela",
      metaDescription:
        "Diagnóstico e prioridade para a operação: a decisão com maior impacto em crescimento, margem ou eficiência.",
    },
    {
      slug: "estruturacao-empresarial",
      name: "Estruturação Empresarial",
      menuLabel: "estruturação empresarial",
      teaser:
        "Processo, responsabilidades e tecnologia organizados para a operação aguentar o próximo volume. Cada frente começa com um responsável, uma cadência e uma métrica, para o crescimento não depender de quem está de plantão naquele dia.",
      pitch: "Uma operação que aguenta o próximo volume sem depender de esforço extraordinário",
      introHeading: "Estrutura desenhada para o volume que ainda não chegou",
      introBody:
        "As operações costumam crescer mais rápido do que a estrutura que as sustenta. O resultado é conhecido: oportunidades que esfriam, informação que vive na cabeça de duas pessoas e decisões tomadas sem leitura. Organizamos processo, papéis, ferramentas e cadência para a operação escalar sem perder controle, e deixamos cada frente documentada e entregue a quem executa.",
      offerings: [
        {
          title: "Processo comercial",
          body: "Etapas, critérios de qualificação, tempos de resposta e passagem entre times definidos e visíveis no CRM.",
        },
        {
          title: "Papéis e cadência",
          body: "Quem decide, quem executa e quando se revisa, para o acompanhamento deixar de acontecer só quando alguma coisa falha.",
        },
        {
          title: "Tecnologia e dados",
          body: "As ferramentas certas para o tamanho atual da operação, conectadas entre si e com uma leitura única de resultado.",
        },
      ],
      statement:
        "Estrutura é o que permite crescer sem que cada cliente novo custe uma reunião de emergência.",
      image: "/solucoes/estruturacao-empresarial.webp",
      imageAlt: "Mapa de processos e responsabilidades de uma operação em uma tela",
      metaDescription:
        "Processo, papéis, tecnologia e cadência organizados para a operação escalar sem perder controle.",
    },
  ],
};
