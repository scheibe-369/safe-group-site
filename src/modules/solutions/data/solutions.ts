import type { Solution } from "../types/solution";

/**
 * Seis solucoes, na ordem pedida pelo utilizador. O esqueleto de copy segue o
 * layout do original (chapeu, nome curto, teaser, pitch de uma linha, titulo de
 * introducao, paragrafo, tres ofertas e frase de fecho), mas o texto e escrito
 * na voz estrutural da Safe: decisao, responsavel e metrica a frente do
 * servico. Sem metricas, clientes ou resultados inventados.
 */
export const solutions: Solution[] = [
  {
    slug: "funcionarios-ia",
    name: "Funcionários IA",
    menuLabel: "funcionários ia",
    teaser:
      "Agentes que atendem, qualificam e agendam sem sair do processo que a operação já tem. Trabalham no WhatsApp e no CRM, respondem em segundos a qualquer hora e passam para a equipa apenas o que exige decisão humana.",
    pitch: "Capacidade de atendimento que cresce sem crescer a massa salarial",
    introHeading: "Uma equipa de IA que trabalha dentro da sua operação",
    introBody:
      "Um funcionário IA não é um assistente com respostas prontas. É uma função definida dentro do processo comercial, com acesso ao contexto do cliente, regras claras de passagem para a equipa e uma métrica que a mede. Desenhamos o papel, ligamos as ferramentas que já usa e acompanhamos a operação a correr, para que cada conversa entre no funil em vez de morrer numa caixa de entrada.",
    offerings: [
      {
        title: "Atendimento e qualificação",
        body: "O agente recebe o contacto, percebe a intenção, qualifica com os critérios da operação e entrega à equipa comercial apenas o que já está pronto para conversa.",
      },
      {
        title: "Agendamento e seguimento",
        body: "Marcação direta na agenda, confirmação, lembrete e reativação de quem não respondeu, sem depender de alguém se lembrar de fazer o seguimento.",
      },
      {
        title: "Integração com CRM e ferramentas",
        body: "Cada conversa fica registada onde a equipa já trabalha, com histórico, origem e estado atualizados sem trabalho manual.",
      },
    ],
    statement:
      "Atendimento disponível a qualquer hora, com o mesmo critério em todas as conversas e sem perder o contacto que chegou fora de horas.",
    image: "/solucoes/funcionarios-ia.webp",
    imageAlt: "Painel de agentes de IA a atender conversas de clientes num ecrã",
    metaDescription:
      "Funcionários IA que atendem, qualificam e agendam dentro do processo comercial que a operação já tem, ligados ao WhatsApp e ao CRM.",
  },
  {
    slug: "software-saas",
    name: "Software e SaaS",
    menuLabel: "software e saas",
    teaser:
      "Produto digital construído para sustentar receita. Definimos o âmbito a partir da operação, entregamos em ciclos curtos e deixamos o sistema a correr com quem o vai usar todos os dias.",
    pitch: "Produto próprio que sustenta receita em vez de somar mais uma licença",
    introHeading: "Produto entregue em ciclos curtos, com quem o usa a decidir o próximo",
    introBody:
      "Trabalhamos software como parte da operação e não como projeto paralelo. Começamos por perceber que decisão o sistema tem de servir, que dados precisa de ler e quem o vai usar. A partir daí entregamos em ciclos curtos, com o que está pronto já em uso, em vez de meses de desenvolvimento antes de alguém tocar no produto.",
    offerings: [
      {
        title: "Plataformas e portais",
        body: "Sistemas internos e portais de cliente que substituem folhas de cálculo, processos manuais e ferramentas que deixaram de servir a escala atual.",
      },
      {
        title: "Produto SaaS",
        body: "Do âmbito inicial ao produto em produção, com autenticação, faturação, painel de administração e a base preparada para crescer em número de utilizadores.",
      },
      {
        title: "Integrações e dados",
        body: "Ligação entre CRM, faturação, marketing e operação, para a informação passar a existir uma vez só e num sítio só.",
      },
    ],
    statement:
      "Software que entra na operação a funcionar, com quem o usa a decidir o que vem no ciclo seguinte.",
    image: "/solucoes/software-saas.webp",
    imageAlt: "Interface de uma plataforma SaaS apresentada num ecrã",
    metaDescription:
      "Plataformas, produtos SaaS e integrações construídos a partir da operação, entregues em ciclos curtos e já em uso.",
  },
  {
    slug: "trafego-pago",
    name: "Tráfego Pago",
    menuLabel: "tráfego pago",
    teaser:
      "Investimento em procura ligado ao que acontece depois do clique. A leitura começa no custo por oportunidade qualificada e na margem do negócio fechado, não no custo por clique nem no alcance da campanha.",
    pitch: "Procura paga medida pelo negócio fechado, não pelo clique",
    introHeading: "Aquisição paga tratada como alavanca da operação",
    introBody:
      "A campanha é a ponta visível de uma cadeia que começa na oferta e acaba na margem. Por isso ligamos a compra de procura ao atendimento, ao CRM e à leitura de resultado antes de aumentar investimento. Quando o funil está a converter, escalar é uma decisão de dados. Quando não está, aumentar o orçamento apenas amplia o problema mais depressa.",
    offerings: [
      {
        title: "Estrutura de campanha",
        body: "Contas, públicos, criativos e orçamentos organizados por objetivo de negócio, com um responsável e uma métrica por frente.",
      },
      {
        title: "Ligação ao funil",
        body: "Conversões, eventos e origem do contacto ligados ao CRM, para saber que campanha gerou o negócio e não apenas o formulário.",
      },
      {
        title: "Leitura e escala",
        body: "Cadência de análise sobre custo por oportunidade qualificada, taxa de fecho e margem, para decidir onde aumentar e onde parar.",
      },
    ],
    statement:
      "Investimento que sobe quando o funil aguenta, e não porque o painel de anúncios mostrou um bom resultado isolado.",
    image: "/solucoes/trafego-pago.webp",
    imageAlt: "Painel de campanhas pagas, com leitura de custo e de conversão, num ecrã",
    metaDescription:
      "Aquisição paga ligada ao atendimento, ao CRM e à margem, medida por oportunidade qualificada e negócio fechado.",
  },
  {
    slug: "estrategia",
    name: "Estratégia",
    menuLabel: "estratégia",
    teaser:
      "A leitura que decide por onde começar. Cruzamos procura, processo comercial, tecnologia, dados e margem para encontrar a decisão com maior impacto na operação, antes de contratar equipa, ferramenta ou campanha.",
    pitch: "A decisão certa antes do investimento, não depois dele",
    introHeading: "Ler o negócio inteiro antes de mexer numa peça",
    introBody:
      "A maioria das operações high ticket não tem falta de ideias, tem falta de prioridade. O diagnóstico lê a operação como um sistema, identifica onde está o bloqueio real e devolve a frente que desbloqueia crescimento, margem ou eficiência. O que sai daqui é uma decisão com responsável, prazo e métrica, não um relatório.",
    offerings: [
      {
        title: "Diagnóstico da operação",
        body: "Procura, atendimento, processo comercial, tecnologia, dados, produto e margem lidos como parte do mesmo sistema.",
      },
      {
        title: "Prioridade e plano",
        body: "A frente escolhida, o que muda em cada etapa, quem é responsável e como se mede o progresso.",
      },
      {
        title: "Acompanhamento",
        body: "Cadência de revisão sobre o que mudou de facto na operação, para a prioridade seguinte nascer de dados e não de suposição.",
      },
    ],
    statement:
      "Saber qual é a decisão que move a operação vale mais do que executar dez que não movem nada.",
    image: "/solucoes/estrategia.webp",
    imageAlt: "Mapa de decisão de uma operação apresentado num ecrã",
    metaDescription:
      "Diagnóstico e prioridade para operações high ticket: a decisão com maior impacto em crescimento, margem ou eficiência.",
  },
  {
    slug: "estruturacao-empresarial",
    name: "Estruturação Empresarial",
    menuLabel: "estruturação empresarial",
    teaser:
      "Processo, responsabilidades e tecnologia organizados para a operação aguentar o volume seguinte. Cada frente arranca com um responsável, uma cadência e uma métrica, para o crescimento não depender de quem está de serviço nesse dia.",
    pitch: "Uma operação que aguenta o volume seguinte sem depender de esforço extraordinário",
    introHeading: "Estrutura desenhada para o volume que ainda não chegou",
    introBody:
      "Operações high ticket costumam crescer mais depressa do que a estrutura que as sustenta. O resultado é conhecido: oportunidades que arrefecem, informação que vive na cabeça de duas pessoas e decisões tomadas sem leitura. Organizamos processo, papéis, ferramentas e cadência para a operação escalar sem perder controlo, e deixamos cada frente documentada e entregue a quem a executa.",
    offerings: [
      {
        title: "Processo comercial",
        body: "Etapas, critérios de qualificação, tempos de resposta e passagem entre equipas definidos e visíveis no CRM.",
      },
      {
        title: "Papéis e cadência",
        body: "Quem decide, quem executa e quando se revê, para o acompanhamento deixar de acontecer só quando alguma coisa falha.",
      },
      {
        title: "Tecnologia e dados",
        body: "As ferramentas certas para o tamanho atual da operação, ligadas entre si e com uma leitura única de resultado.",
      },
    ],
    statement:
      "Estrutura é o que permite crescer sem que cada cliente novo custe uma reunião de emergência.",
    image: "/solucoes/estruturacao-empresarial.webp",
    imageAlt: "Mapa de processos e responsabilidades de uma operação num ecrã",
    metaDescription:
      "Processo, papéis, tecnologia e cadência organizados para a operação escalar sem perder controlo.",
  },
  {
    slug: "website",
    name: "Website",
    menuLabel: "website",
    teaser:
      "Site construído para converter procura em conversa qualificada. Velocidade, leitura clara da oferta e ligação direta ao atendimento, para o site deixar de ser cartão de visita e passar a ser a primeira etapa do funil.",
    pitch: "Um site que abre conversa qualificada, não apenas visitas",
    introHeading: "Um site que trabalha como primeira etapa do funil",
    introBody:
      "Um site bonito que não gera conversa é uma despesa. Construímos a partir da decisão que o visitante tem de tomar: perceber o que a operação resolve, reconhecer-se no problema e avançar para contacto. Cada página é medida por oportunidades geradas, e a estrutura fica preparada para ligar ao CRM e ao atendimento desde o primeiro dia.",
    offerings: [
      {
        title: "Páginas orientadas à decisão do visitante",
        body: "Estrutura, texto e desenho orientados à decisão do visitante, com desempenho e leitura em telemóvel tratados como requisito e não como afinação final.",
      },
      {
        title: "Do formulário ao CRM",
        body: "Formulários, WhatsApp e eventos ligados ao CRM, para cada contacto entrar identificado com origem e contexto.",
      },
      {
        title: "Medição e iteração",
        body: "Leitura de tráfego, conversão e origem para melhorar as páginas com dados da operação a correr.",
      },
    ],
    statement:
      "Uma página passa a valer quando é medida por conversas abertas, e não por visitas.",
    image: "/solucoes/website.webp",
    imageAlt: "Página de entrada de um site da Safe apresentada num ecrã",
    metaDescription:
      "Sites e landing pages construídos para abrir conversa qualificada, ligados ao CRM e ao atendimento desde o primeiro dia.",
  },
];

export const solutionsKicker = "// Frentes_de_execução";

export function findSolution(slug: string): Solution | undefined {
  return solutions.find((item) => item.slug === slug);
}
