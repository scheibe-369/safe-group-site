import type { SolutionsContent } from "../types/solution";

/**
 * Copy do modulo das solucoes em en-GB: as seis solucoes e
 * o texto que estava escrito dentro dos componentes. Este ficheiro e a fonte de
 * onde os outros quatro idiomas sao traduzidos.
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
export const solutionsEnGB: SolutionsContent = {
  kicker: "// Execution_workstreams",
  sectionLabel: "Solutions",
  cursorLabel: "open",
  panelAction: "More details",

  detail: {
    diagnosticAction: "Start diagnostic",
    offeringsKicker: "What is included",
    offeringsTitle: "What we do in {solution}.",
    statementOverline: "in other words",
    casesKicker: "Cases",
    casesTitle: "Businesses Safe has already structured.",
    casesAction: "All cases",
    casesCarouselLabel: "Safe cases",
    othersKicker: "Solutions",
    othersTitle: "The other Safe workstreams.",
    notFoundTitle: "Solution not found",
    ogTitle: "{solution} | Safe Group",
  },

  items: [
    {
      slug: "website",
      name: "Website",
      menuLabel: "website",
      teaser:
        "A site built to turn demand into qualified conversation. Speed, a clear reading of the offer and a direct link to the sales team, so the site stops being a business card and becomes the first stage of the funnel.",
      pitch: "A site that opens qualified conversation, not just visits",
      introHeading: "A site that works as the first stage of the funnel",
      introBody:
        "A handsome site that generates no conversation is an expense. We build from the decision the visitor has to make: understand what the business solves, recognise themselves in the problem and move on to contact. Every page is measured by the opportunities it generates, and the structure is ready to connect to the CRM and to the sales team from day one.",
      offerings: [
        {
          title: "Pages built around the visitor's decision",
          body: "Structure, copy and design driven by the visitor's decision, with performance and mobile legibility treated as a requirement and not as a final tweak.",
        },
        {
          title: "From the form to the CRM",
          body: "Forms, WhatsApp and events connected to the CRM, so every enquiry arrives identified with its source and context.",
        },
        {
          title: "Measurement and iteration",
          body: "A reading of traffic, conversion and source to improve the pages with data from the business as it runs.",
        },
      ],
      statement:
        "A page starts to be worth something when it is measured by conversations opened, and not by visits.",
      image: "/solucoes/website.webp",
      imageAlt: "Landing page of a Safe site shown on a screen",
      metaDescription:
        "Sites and landing pages built to open qualified conversation, connected to the CRM and to the sales team from day one.",
    },
    {
      slug: "trafego-pago",
      name: "Paid Traffic",
      menuLabel: "paid traffic",
      teaser:
        "Investment in demand tied to what happens after the click. The reading starts at the cost per qualified opportunity and at the margin on the deal closed, not at cost per click or campaign reach.",
      pitch: "Paid demand measured by the deal closed, not by the click",
      introHeading: "Paid acquisition treated as a lever of the business",
      introBody:
        "The campaign is the visible tip of a chain that starts at the offer and ends at the margin. That is why we connect the buying of demand to the sales team, to the CRM and to the reading of results before increasing investment. When the funnel is converting, scaling is a decision made on data. When it is not, raising the budget only magnifies the problem faster.",
      offerings: [
        {
          title: "Campaign structure",
          body: "Accounts, audiences, creative and budgets organised by business objective, with one owner and one metric per workstream.",
        },
        {
          title: "Connection to the funnel",
          body: "Conversions, events and enquiry source connected to the CRM, so you know which campaign generated the deal and not just the form.",
        },
        {
          title: "Reading and scale",
          body: "A cadence of analysis on cost per qualified opportunity, close rate and margin, to decide where to increase and where to stop.",
        },
      ],
      statement:
        "Investment that rises when the funnel can take it, and not because the ads dashboard showed one good isolated result.",
      image: "/solucoes/trafego-pago.webp",
      imageAlt: "Paid campaign dashboard, with a reading of cost and conversion, on a screen",
      metaDescription:
        "Paid acquisition connected to the sales team, the CRM and the margin, measured by qualified opportunity and deal closed.",
    },
    {
      slug: "funcionarios-ia",
      name: "AI Employees",
      menuLabel: "ai employees",
      teaser:
        "Agents that answer, qualify and book meetings without leaving the process the business already has. They work in WhatsApp and in the CRM, reply in seconds at any hour and pass to the team only what needs a human decision.",
      pitch: "Service capacity that grows without growing the payroll",
      introHeading: "An AI team that works inside your business",
      introBody:
        "An AI employee is not an assistant with canned answers. It is a role defined inside the sales process, with access to the customer context, clear rules for handing over to the team and a metric that measures it. We design the role, connect the tools you already use and follow the business as it runs, so that every conversation enters the funnel instead of dying in an inbox.",
      offerings: [
        {
          title: "Answering and qualification",
          body: "The agent receives the enquiry, reads the intent, qualifies against the criteria of the business and hands the sales team only what is ready for a conversation.",
        },
        {
          title: "Booking and follow-up",
          body: "Booking straight into the diary, confirmation, reminder and reactivation of anyone who did not reply, without depending on someone remembering to follow up.",
        },
        {
          title: "Integration with CRM and tools",
          body: "Every conversation is recorded where the team already works, with history, source and status kept up to date without manual work.",
        },
      ],
      statement:
        "Cover available at any hour, with the same criteria in every conversation and without losing the enquiry that arrived out of hours.",
      image: "/solucoes/funcionarios-ia.webp",
      imageAlt: "Dashboard of AI agents answering customer conversations on a screen",
      metaDescription:
        "AI employees that answer, qualify and book inside the sales process the business already has, connected to WhatsApp and to the CRM.",
    },
    {
      slug: "software-saas",
      name: "Software and SaaS",
      menuLabel: "software and saas",
      teaser:
        "A digital product built to sustain revenue. We define the scope from the business, deliver in short cycles and leave the system running with the people who will use it every day.",
      pitch: "Your own product that sustains revenue instead of adding one more licence",
      introHeading: "Product delivered in short cycles, with the people who use it deciding the next one",
      introBody:
        "We treat software as part of the business and not as a side project. We start by understanding which decision the system has to serve, which data it needs to read and who will use it. From there we deliver in short cycles, with whatever is ready already in use, instead of months of development before anyone touches the product.",
      offerings: [
        {
          title: "Platforms and portals",
          body: "Internal systems and client portals that replace spreadsheets, manual processes and tools that no longer serve the current scale.",
        },
        {
          title: "SaaS product",
          body: "From the initial scope to the product in production, with authentication, billing, an admin panel and a foundation ready to grow in number of users.",
        },
        {
          title: "Integrations and data",
          body: "A link between CRM, billing, marketing and the business, so that information exists only once and in only one place.",
        },
      ],
      statement:
        "Software that enters the business already working, with the people who use it deciding what comes in the next cycle.",
      image: "/solucoes/software-saas.webp",
      imageAlt: "Interface of a SaaS platform shown on a screen",
      metaDescription:
        "Platforms, SaaS products and integrations built from the business, delivered in short cycles and already in use.",
    },
    {
      slug: "estrategia",
      name: "Strategy",
      menuLabel: "strategy",
      teaser:
        "The reading that decides where to start. We cross demand, sales process, technology, data and margin to find the decision with the greatest impact on the business, before hiring a team, buying a tool or running a campaign.",
      pitch: "The right decision before the investment, not after it",
      introHeading: "Read the whole business before moving a single piece",
      introBody:
        "Most high ticket businesses are not short of ideas, they are short of priority. The diagnostic reads the business as a system, identifies where the real bottleneck sits and returns the workstream that unlocks growth, margin or efficiency. What comes out of it is a decision with an owner, a deadline and a metric, not a report.",
      offerings: [
        {
          title: "Diagnostic of the business",
          body: "Demand, customer handling, sales process, technology, data, product and margin read as part of the same system.",
        },
        {
          title: "Priority and plan",
          body: "The chosen workstream, what changes at each stage, who owns it and how progress is measured.",
        },
        {
          title: "Follow-through",
          body: "A review cadence on what actually changed in the business, so the next priority comes from data and not from assumption.",
        },
      ],
      statement:
        "Knowing which decision moves the business is worth more than executing ten that move nothing.",
      image: "/solucoes/estrategia.webp",
      imageAlt: "Decision map of a business shown on a screen",
      metaDescription:
        "Diagnostic and priority for high ticket operations: the decision with the greatest impact on growth, margin or efficiency.",
    },
    {
      slug: "estruturacao-empresarial",
      name: "Business Structuring",
      menuLabel: "business structuring",
      teaser:
        "Process, responsibilities and technology organised so the business can take the next volume. Every workstream starts with an owner, a cadence and a metric, so growth does not depend on who happens to be on duty that day.",
      pitch: "A business that takes the next volume without relying on extraordinary effort",
      introHeading: "Structure designed for the volume that has not arrived yet",
      introBody:
        "High ticket operations tend to grow faster than the structure that holds them up. The result is familiar: opportunities that go cold, information that lives in the heads of two people and decisions taken without a reading. We organise process, roles, tools and cadence so the business can scale without losing control, and we leave every workstream documented and handed to whoever runs it.",
      offerings: [
        {
          title: "Sales process",
          body: "Stages, qualification criteria, response times and handovers between teams defined and visible in the CRM.",
        },
        {
          title: "Roles and cadence",
          body: "Who decides, who executes and when things are reviewed, so follow-up stops happening only when something goes wrong.",
        },
        {
          title: "Technology and data",
          body: "The right tools for the current size of the business, connected to each other and with a single reading of results.",
        },
      ],
      statement:
        "Structure is what lets you grow without every new client costing an emergency meeting.",
      image: "/solucoes/estruturacao-empresarial.webp",
      imageAlt: "Map of the processes and responsibilities of a business on a screen",
      metaDescription:
        "Process, roles, technology and cadence organised so the business can scale without losing control.",
    },
  ],
};
