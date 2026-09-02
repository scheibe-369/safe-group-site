import type { CaseStudy } from "../types/case-study";

/**
 * Cases em es. Nem tudo neste ficheiro e traduzivel:
 * `slug`, `cover` e `isDemo` identificam o case e tem de ficar iguais nos cinco
 * idiomas, tal como o `href` do credito. Os nomes de cliente sao marcas e
 * normalmente tambem nao se traduzem. Ficam no mesmo objeto na mesma, para o
 * case continuar a ler-se como uma peca so.
 */

/**
 * Todos os cases são reais, com evidência aprovada pelo utilizador em
 * 27/08/2026. Os cases fictícios de demonstração foram removidos em
 * 28/08/2026; para voltar a publicar um case sem evidência ainda aprovada,
 * adicioná-lo com `isDemo: true`.
 */
export const caseStudiesEs: CaseStudy[] = [
  {
    slug: "growth-hub",
    client: "Growth Hub",
    sector: "Servicios y Tecnología",
    summary: "Operación entera sin base digital propia: sitio, adquisición, contenido y sistemas internos dependían de esfuerzo disperso.",
    cover: "/cases/growth-hub.webp",
    area: "Infraestructura digital",
    deliverables: [
      "Sitio institucional",
      "Proceso operativo",
      "Estrategia de tráfico pago y contenido",
      "Sistema de hub de agentes de IA",
      "Sistema de contabilidad de tokens de IA",
    ],
    context: "Empresa en crecimiento sin sitio institucional, sin proceso comercial documentado y sin sistemas internos que sostuvieran la operación de agentes de IA.",
    challenge: "Cada frente (sitio, adquisición, contenido, operación) avanzaba de forma suelta, sin una infraestructura común ni sistemas que acompañaran el crecimiento del equipo.",
    intervention: "Construcción del sitio institucional, del proceso operativo y de la estrategia de tráfico pago y contenido, incluidos los primeros formatos para los expertos del equipo. En paralelo, diseño e implementación de dos sistemas internos: un hub de agentes de IA y un sistema de contabilidad de tokens.",
    structure: "Sitio, proceso operativo, estrategia de adquisición y sistemas internos de IA funcionando como una base única, sin depender de conocimiento disperso por el equipo.",
    results: [
      "Infraestructura digital completa en operación, del sitio a los sistemas internos.",
      "Proceso comercial y de contenido documentado y replicable.",
      "Sistemas internos de IA sosteniendo la operación diaria del equipo.",
    ],
    gallery: [],
  },
  {
    slug: "previa",
    client: "Previa",
    sector: "Financiero",
    summary: "Empresa de factoring con cobranza dependiente de personas y una base de operaciones sin lectura comercial.",
    cover: "/cases/previa.webp",
    area: "Automatización e inteligencia de datos",
    deliverables: ["Automatización de cobranza", "Modelo de cualificación comercial", "Integración de canales oficiales"],
    context: "Previa es una empresa de factoring que compra cuentas por cobrar a cedentes y cobra a los deudores responsables del pago. El seguimiento de vencimientos y la cobranza dependían del trabajo manual del equipo, y la base de operaciones entre cedentes y deudores no se usaba más allá de la cobranza.",
    challenge: "La cobranza perdía tiempo y consistencia por depender de personas, y la misma base que sostenía la cobranza escondía deudores con potencial para convertirse en clientes directos, sin que nadie los identificara.",
    intervention: "Dos frentes estructurados en paralelo. En la cobranza, un sistema pasó a leer la base de clientes de Previa, identificar vencimientos con dos días de antelación y activar la cobranza automática por email y por el WhatsApp oficial. En la inteligencia comercial, la base de operaciones entre cedentes y deudores se analizó con un filtro definido por Previa, para identificar deudores con potencial para convertirse en cedentes, es decir, clientes directos.",
    structure: "Motor de cobranza automatizada conectado a la base de clientes y a los canales oficiales de email y WhatsApp, con aviso dos días antes del vencimiento. Proceso de lectura de datos que entrega al equipo comercial una lista cualificada de oportunidades generadas por la propia operación, sin depender de análisis manual.",
    results: [
      "La cobranza dejó de depender del seguimiento manual del equipo.",
      "El equipo comercial pasó a recibir oportunidades cualificadas generadas por la propia base de operaciones.",
      "Aumento de facturación y ganancia con dos frentes complementarios.",
    ],
    gallery: [],
  },
  {
    slug: "falow",
    client: "Falow",
    sector: "Software y SaaS",
    summary: "Automatización de Instagram atada al costo y a los límites de ManyChat, sin espacio para convertirse en producto propio.",
    cover: "/cases/falow.webp",
    area: "Automatización y producto SaaS",
    deliverables: ["Landing page", "Automatización de DM y comentario", "Producto SaaS multicliente"],
    context: "Matheus Fonseca automatizaba DM y comentario de Instagram con ManyChat, con costo mensual recurrente y automatizaciones limitadas a lo que la herramienta genérica permitía.",
    challenge: "ManyChat generaba costo fijo y frenaba automatizaciones más rápidas y específicas para la operación, sin abrir camino para convertir esa capacidad en producto propio.",
    intervention: "Construcción de Falow, un SaaS propio de automatización de DM y comentario en Instagram por reglas de palabra clave y secuencias, más rápido de operar que ManyChat. La landing page y el sistema se diseñaron para vender también fuera de la base de origen, como producto independiente.",
    structure: "Motor de automatización por reglas de palabra clave y secuencias, landing page propia y sistema listo para atender clientes fuera de la base original.",
    results: [
      "La sustitución de ManyChat redujo costo y aceleró la operación de automatización.",
      "Falow pasó a existir como producto propio, vendible fuera de la base de origen.",
      "Nuevo frente de facturación, con rentabilidad distinta de la operación original.",
    ],
    gallery: [],
    credit: { label: "@matheusfonseca.ia", href: "https://www.instagram.com/matheusfonseca.ia/" },
  },
  {
    slug: "rede-de-moteis",
    client: "Cozumel, Manhattan y Atenas",
    sector: "Software y SaaS",
    summary: "Red de tres moteles con atención dispersa entre WhatsApp e Instagram, sin un sistema único para gestionarlo todo.",
    cover: "/cases/rede-de-moteis.webp",
    area: "Sistema de atención",
    deliverables: [
      "CRM de atención",
      "Integración WhatsApp oficial y no oficial",
      "Integración con Instagram",
      "Multilogin por rol",
      "Control financiero y de campañas",
    ],
    context: "Red con tres moteles, el Cozumel, el Manhattan y el Atenas, con atención dispersa entre WhatsApp e Instagram, sin un sistema único que conectara conversaciones, campañas y finanzas.",
    challenge: "Cada motel gestionaba la atención a su manera, con más de cinco números de WhatsApp activos al mismo tiempo y sin control central sobre quién veía qué, del agente al gerente.",
    intervention: "Construcción de un CRM de atención propio, con WhatsApp API oficial y no oficial, Instagram integrado en el mismo panel, control de campañas y módulo financiero. El multilogin separa el acceso por rol: administrador, gerente de tienda y agentes.",
    structure: "Sistema único que soporta atención simultánea en más de cinco números de WhatsApp e Instagram, con acceso segmentado por rol y listo para recibir nuevos moteles de la red.",
    results: [
      "La atención de los tres moteles pasó a operar dentro del mismo sistema.",
      "Más de cinco números de WhatsApp gestionados al mismo tiempo sin perder control.",
      "Estructura lista para expansión a nuevos moteles de la red.",
    ],
    gallery: [],
  },
  {
    slug: "brasil-dtf",
    client: "Brasil DTF",
    sector: "Industria Gráfica",
    summary: "Empresa de impresoras DTF sin sitio para sostener campañas en Google y sin ninguna herramienta digital para el mercado de estampados que ya atendía.",
    cover: "/cases/brasil-dtf.webp",
    area: "Sitio institucional y producto SaaS",
    deliverables: [
      "Landing page institucional optimizada para Google Ads",
      "SEO técnico y performance mobile",
      "Stamp AI (Halftone Studio), SaaS de posproducción de estampados",
      "Sistema multiempresa con login y plan de suscripción",
    ],
    context: "Brasil DTF vende impresoras DTF y UV DTF a comerciantes y fabricantes de estampados, pero no tenía sitio para sostener campañas en Google ni ninguna herramienta digital más allá de la venta de las propias máquinas.",
    challenge: "Sin un sitio rápido y bien estructurado, la inversión en Google Ads perdía eficiencia, y el mercado de estampados que Brasil DTF ya atendía (comerciantes que necesitan quitar el fondo y aplicar semitono a los diseños antes de imprimir) no tenía ninguna herramienta accesible para eso.",
    intervention: "Construcción de un sitio institucional con estándar profesional de landing page, optimizado para SEO y para campañas en Google, validado en velocidad y performance mobile. En paralelo, desarrollo de Stamp AI (Halftone Studio), un SaaS propio para el mercado de estampados, con eliminación de fondo, generación y upscale de imagen y diferentes técnicas de semitono, listo para el flujo de quien imprime estampados.",
    structure: "Sitio institucional rápido y optimizado para tráfico pago y búsqueda orgánica, y una plataforma SaaS separada con sistema multiempresa, login propio por tienda, sistema de tokens y las herramientas de posproducción de imagen que el mercado de estampados necesita.",
    results: [
      "Sitio validado en velocidad y performance mobile, listo para sostener campañas en Google.",
      "Stamp AI (Halftone Studio) lanzado como SaaS propio, hoy con más de 20 comerciantes activos.",
      "Nuevo frente de facturación para Brasil DTF, fuera de la venta de impresoras.",
    ],
    gallery: [],
  },
  {
    slug: "sac-automoveis",
    client: "SAC Automóveis",
    sector: "Comercio Automotor",
    summary: "Instagram sin fuerza comercial y ningún frente para comprar vehículos en condiciones competitivas, cuando la rentabilidad del comercio automotor comienza antes de la venta.",
    cover: "/cases/sac-automoveis.webp",
    area: "Estrategia comercial, marketing y rentabilidad",
    deliverables: [
      "Autoridad en Instagram",
      "Crecimiento de audiencia",
      "Embudos de venta",
      "Campañas para ferias y eventos internos",
      "Campañas de adquisición de vehículos con mejor margen",
    ],
    context: "SAC Automóveis necesitaba reforzar la presencia digital y transformar Instagram en un frente comercial activo. Pero el desafío no terminaba en la venta: en el comercio automotor, la rentabilidad también comienza en la compra del vehículo y en la calidad del stock que entra en la operación.",
    challenge: "Era necesario actuar en los dos extremos del negocio: generar más oportunidades de venta y crear campañas capaces de atraer vehículos para compra en condiciones más competitivas. La estrategia necesitaba aumentar audiencia y autoridad, apoyar las ferias internas y mejorar la capacidad de la tienda para comprar, fijar precios y vender con más margen.",
    intervention: "Safe estructuró una estrategia de marketing y ventas para ampliar la presencia de SAC en Instagram, aumentar la base de seguidores y consolidar la autoridad de la marca en el mercado automotor. En paralelo, desarrolló embudos y campañas para eventos internos, ferias y adquisición de vehículos. La comunicación pasó a trabajar tanto la demanda de quien quiere comprar como la atracción de oportunidades de stock con mayor potencial de rentabilidad.",
    structure: "Una operación de marketing conectada al ciclo completo del negocio: autoridad → audiencia → campañas de compra → stock → campañas de venta → ferias → margen. Instagram dejó de ser solo un escaparate: pasó a apoyar la entrada de vehículos, la generación de demanda y la rentabilidad por venta.",
    results: [
      "Crecimiento de la base de seguidores y refuerzo de la autoridad de SAC Automóveis en Instagram.",
      "Campañas estructuradas para generar oportunidades de compra y venta de vehículos, incluidas ferias y eventos internos.",
      "Marketing conectado al margen de la operación: más capacidad para comprar mejor, formar stock con más potencial y vender con más rentabilidad.",
    ],
    gallery: [],
  },
];
