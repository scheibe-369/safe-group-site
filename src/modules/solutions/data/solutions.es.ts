import type { SolutionsContent } from "../types/solution";

/**
 * Copy do modulo das solucoes em es: as seis solucoes e
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
export const solutionsEs: SolutionsContent = {
  kicker: "// Frentes_de_ejecución",
  sectionLabel: "Soluciones",
  cursorLabel: "abrir",
  panelAction: "Más detalles",

  detail: {
    diagnosticAction: "Empezar diagnóstico",
    offeringsKicker: "Qué incluye",
    offeringsTitle: "Qué hacemos en {solution}.",
    statementOverline: "en otras palabras",
    casesKicker: "Cases",
    casesTitle: "Operaciones que Safe ya estructuró.",
    casesAction: "Todos los cases",
    casesCarouselLabel: "cases Safe",
    othersKicker: "Soluciones",
    othersTitle: "Los demás frentes de Safe.",
    notFoundTitle: "Solución no encontrada",
    ogTitle: "{solution} | Safe Group",
  },

  items: [
    {
      slug: "website",
      name: "Website",
      menuLabel: "website",
      teaser:
        "Sitio construido para convertir demanda en conversación cualificada. Velocidad, lectura clara de la oferta y conexión directa con la atención, para que el sitio deje de ser tarjeta de visita y pase a ser la primera etapa del embudo.",
      pitch: "Un sitio que abre conversación cualificada, no solo visitas",
      introHeading: "Un sitio que trabaja como primera etapa del embudo",
      introBody:
        "Un sitio bonito que no genera conversación es un gasto. Construimos a partir de la decisión que el visitante tiene que tomar: entender qué resuelve la operación, reconocerse en el problema y avanzar hacia el contacto. Cada página se mide por oportunidades generadas, y la estructura queda preparada para conectarse al CRM y a la atención desde el primer día.",
      offerings: [
        {
          title: "Páginas orientadas a la decisión del visitante",
          body: "Estructura, texto y diseño orientados a la decisión del visitante, con rendimiento y lectura en móvil tratados como requisito y no como ajuste final.",
        },
        {
          title: "Del formulario al CRM",
          body: "Formularios, WhatsApp y eventos conectados al CRM, para que cada contacto entre identificado con origen y contexto.",
        },
        {
          title: "Medición e iteración",
          body: "Lectura de tráfico, conversión y origen para mejorar las páginas con datos de la operación en marcha.",
        },
      ],
      statement:
        "Una página empieza a valer cuando se mide por conversaciones abiertas, y no por visitas.",
      image: "/solucoes/website.webp",
      imageAlt: "Página de entrada de un sitio de Safe presentada en una pantalla",
      metaDescription:
        "Sitios y landing pages construidos para abrir conversación cualificada, conectados al CRM y a la atención desde el primer día.",
    },
    {
      slug: "trafego-pago",
      name: "Tráfico Pago",
      menuLabel: "tráfico pago",
      teaser:
        "Inversión en demanda conectada a lo que ocurre después del clic. La lectura empieza en el costo por oportunidad cualificada y en el margen del negocio cerrado, no en el costo por clic ni en el alcance de la campaña.",
      pitch: "Demanda pagada medida por el negocio cerrado, no por el clic",
      introHeading: "Adquisición pagada tratada como palanca de la operación",
      introBody:
        "La campaña es la punta visible de una cadena que empieza en la oferta y termina en el margen. Por eso conectamos la compra de demanda con la atención, con el CRM y con la lectura de resultado antes de aumentar la inversión. Cuando el embudo está convirtiendo, escalar es una decisión de datos. Cuando no lo está, aumentar el presupuesto solo amplía el problema más rápido.",
      offerings: [
        {
          title: "Estructura de campaña",
          body: "Cuentas, públicos, creativos y presupuestos organizados por objetivo de negocio, con un responsable y una métrica por frente.",
        },
        {
          title: "Conexión con el embudo",
          body: "Conversiones, eventos y origen del contacto conectados al CRM, para saber qué campaña generó el negocio y no solo el formulario.",
        },
        {
          title: "Lectura y escala",
          body: "Cadencia de análisis sobre costo por oportunidad cualificada, tasa de cierre y margen, para decidir dónde aumentar y dónde parar.",
        },
      ],
      statement:
        "Inversión que sube cuando el embudo aguanta, y no porque el panel de anuncios mostró un buen resultado aislado.",
      image: "/solucoes/trafego-pago.webp",
      imageAlt: "Panel de campañas pagadas, con lectura de costo y de conversión, en una pantalla",
      metaDescription:
        "Adquisición pagada conectada a la atención, al CRM y al margen, medida por oportunidad cualificada y negocio cerrado.",
    },
    {
      slug: "funcionarios-ia",
      name: "Empleados IA",
      menuLabel: "empleados ia",
      teaser:
        "Agentes que atienden, cualifican y agendan sin salir del proceso que la operación ya tiene. Trabajan en WhatsApp y en el CRM, responden en segundos a cualquier hora y pasan al equipo solo lo que exige decisión humana.",
      pitch: "Capacidad de atención que crece sin crecer la masa salarial",
      introHeading: "Un equipo de IA que trabaja dentro de su operación",
      introBody:
        "Un empleado IA no es un asistente con respuestas prefabricadas. Es una función definida dentro del proceso comercial, con acceso al contexto del cliente, reglas claras de traspaso al equipo y una métrica que la mide. Diseñamos el rol, conectamos las herramientas que ya utiliza y acompañamos la operación en marcha, para que cada conversación entre en el embudo en vez de morir en una bandeja de entrada.",
      offerings: [
        {
          title: "Atención y cualificación",
          body: "El agente recibe el contacto, entiende la intención, cualifica con los criterios de la operación y entrega al equipo comercial solo lo que ya está listo para conversación.",
        },
        {
          title: "Agendamiento y seguimiento",
          body: "Reserva directa en la agenda, confirmación, recordatorio y reactivación de quien no respondió, sin depender de que alguien se acuerde de hacer el seguimiento.",
        },
        {
          title: "Integración con CRM y herramientas",
          body: "Cada conversación queda registrada donde el equipo ya trabaja, con historial, origen y estado actualizados sin trabajo manual.",
        },
      ],
      statement:
        "Atención disponible a cualquier hora, con el mismo criterio en todas las conversaciones y sin perder el contacto que llegó fuera del horario.",
      image: "/solucoes/funcionarios-ia.webp",
      imageAlt: "Panel de agentes de IA atendiendo conversaciones de clientes en una pantalla",
      metaDescription:
        "Empleados IA que atienden, cualifican y agendan dentro del proceso comercial que la operación ya tiene, conectados a WhatsApp y al CRM.",
    },
    {
      slug: "software-saas",
      name: "Software y SaaS",
      menuLabel: "software y saas",
      teaser:
        "Producto digital construido para sostener ingresos. Definimos el alcance a partir de la operación, entregamos en ciclos cortos y dejamos el sistema en marcha con quien lo va a usar todos los días.",
      pitch: "Producto propio que sostiene ingresos en vez de sumar una licencia más",
      introHeading: "Producto entregado en ciclos cortos, con quien lo usa decidiendo el siguiente",
      introBody:
        "Trabajamos el software como parte de la operación y no como proyecto paralelo. Empezamos por entender qué decisión tiene que servir el sistema, qué datos necesita leer y quién lo va a usar. A partir de ahí entregamos en ciclos cortos, con lo que está listo ya en uso, en vez de meses de desarrollo antes de que alguien toque el producto.",
      offerings: [
        {
          title: "Plataformas y portales",
          body: "Sistemas internos y portales de cliente que sustituyen hojas de cálculo, procesos manuales y herramientas que dejaron de servir a la escala actual.",
        },
        {
          title: "Producto SaaS",
          body: "Del alcance inicial al producto en producción, con autenticación, facturación, panel de administración y la base preparada para crecer en número de usuarios.",
        },
        {
          title: "Integraciones y datos",
          body: "Conexión entre CRM, facturación, marketing y operación, para que la información pase a existir una sola vez y en un solo lugar.",
        },
      ],
      statement:
        "Software que entra en la operación ya funcionando, con quien lo usa decidiendo lo que viene en el ciclo siguiente.",
      image: "/solucoes/software-saas.webp",
      imageAlt: "Interfaz de una plataforma SaaS presentada en una pantalla",
      metaDescription:
        "Plataformas, productos SaaS e integraciones construidos a partir de la operación, entregados en ciclos cortos y ya en uso.",
    },
    {
      slug: "estrategia",
      name: "Estrategia",
      menuLabel: "estrategia",
      teaser:
        "La lectura que decide por dónde empezar. Cruzamos demanda, proceso comercial, tecnología, datos y margen para encontrar la decisión con mayor impacto en la operación, antes de contratar equipo, herramienta o campaña.",
      pitch: "La decisión correcta antes de la inversión, no después de ella",
      introHeading: "Leer el negocio entero antes de tocar una pieza",
      introBody:
        "La mayoría de las operaciones high ticket no tiene falta de ideas, tiene falta de prioridad. El diagnóstico lee la operación como un sistema, identifica dónde está el bloqueo real y devuelve el frente que desbloquea crecimiento, margen o eficiencia. Lo que sale de aquí es una decisión con responsable, plazo y métrica, no un informe.",
      offerings: [
        {
          title: "Diagnóstico de la operación",
          body: "Demanda, atención, proceso comercial, tecnología, datos, producto y margen leídos como parte del mismo sistema.",
        },
        {
          title: "Prioridad y plan",
          body: "El frente elegido, qué cambia en cada etapa, quién es responsable y cómo se mide el progreso.",
        },
        {
          title: "Acompañamiento",
          body: "Cadencia de revisión sobre lo que cambió de hecho en la operación, para que la prioridad siguiente nazca de datos y no de suposición.",
        },
      ],
      statement:
        "Saber cuál es la decisión que mueve la operación vale más que ejecutar diez que no mueven nada.",
      image: "/solucoes/estrategia.webp",
      imageAlt: "Mapa de decisión de una operación presentado en una pantalla",
      metaDescription:
        "Diagnóstico y prioridad para operaciones high ticket: la decisión con mayor impacto en crecimiento, margen o eficiencia.",
    },
    {
      slug: "estruturacao-empresarial",
      name: "Estructuración Empresarial",
      menuLabel: "estructuración empresarial",
      teaser:
        "Proceso, responsabilidades y tecnología organizados para que la operación aguante el volumen siguiente. Cada frente arranca con un responsable, una cadencia y una métrica, para que el crecimiento no dependa de quién esté de turno ese día.",
      pitch: "Una operación que aguanta el volumen siguiente sin depender de esfuerzo extraordinario",
      introHeading: "Estructura diseñada para el volumen que aún no llegó",
      introBody:
        "Las operaciones high ticket suelen crecer más rápido que la estructura que las sostiene. El resultado es conocido: oportunidades que se enfrían, información que vive en la cabeza de dos personas y decisiones tomadas sin lectura. Organizamos proceso, roles, herramientas y cadencia para que la operación escale sin perder control, y dejamos cada frente documentado y entregado a quien lo ejecuta.",
      offerings: [
        {
          title: "Proceso comercial",
          body: "Etapas, criterios de cualificación, tiempos de respuesta y traspaso entre equipos definidos y visibles en el CRM.",
        },
        {
          title: "Roles y cadencia",
          body: "Quién decide, quién ejecuta y cuándo se revisa, para que el seguimiento deje de ocurrir solo cuando algo falla.",
        },
        {
          title: "Tecnología y datos",
          body: "Las herramientas adecuadas para el tamaño actual de la operación, conectadas entre sí y con una lectura única de resultado.",
        },
      ],
      statement:
        "La estructura es lo que permite crecer sin que cada cliente nuevo cueste una reunión de emergencia.",
      image: "/solucoes/estruturacao-empresarial.webp",
      imageAlt: "Mapa de procesos y responsabilidades de una operación en una pantalla",
      metaDescription:
        "Proceso, roles, tecnología y cadencia organizados para que la operación escale sin perder control.",
    },
  ],
};
