import type { PartnersContent } from "../types/content";

/**
 * Copy es da seccao de parceiros.
 *
 * Os rotulos sao, na maioria, o nome oficial do programa de parceria de cada
 * marca (Meta Tech Provider, Stripe Verified Partner, ...): esses nomes sao
 * marca registada e nao se traduzem. Traduz-se apenas o que for prosa, como o
 * "Integrador Oficial WhatsApp".
 */
export const partnersContentEs: PartnersContent = {
  kicker: "Socios oficiales",
  title: "Certificaciones e integraciones que sostienen la operación.",
  labels: {
    meta: "Meta Tech Provider",
    "mercado-livre": "Mercado Livre",
    olx: "OLX",
    whatsapp: "Integrador Oficial de WhatsApp",
    instagram: "Instagram API",
    openai: "OpenAI Advanced Partner",
    stripe: "Stripe Verified Partner",
    asaas: "Asaas Integrator",
    "google-ads": "Google Ads Certified Partner",
    claude: "Claude Partner Network",
  },
};
