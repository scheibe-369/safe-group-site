import type { PartnersContent } from "../types/content";

/**
 * Copy pt-BR da seccao de parceiros, traduzida da baseline pt-PT.
 *
 * Os rotulos sao, na maioria, o nome oficial do programa de parceria de cada
 * marca (Meta Tech Provider, Stripe Verified Partner, ...): esses nomes sao
 * marca registada e nao se traduzem. Traduz-se apenas o que for prosa, como o
 * "Integrador Oficial WhatsApp".
 */
export const partnersContentPtBR: PartnersContent = {
  kicker: "Parceiros oficiais",
  title: "Certificações e integrações que sustentam a operação.",
  labels: {
    meta: "Meta Tech Provider",
    "mercado-livre": "Mercado Livre",
    olx: "OLX",
    whatsapp: "Integrador Oficial WhatsApp",
    instagram: "Instagram API",
    openai: "OpenAI Advanced Partner",
    stripe: "Stripe Verified Partner",
    asaas: "Asaas Integrator",
    "google-ads": "Google Ads Certified Partner",
    claude: "Claude Partner Network",
  },
};
