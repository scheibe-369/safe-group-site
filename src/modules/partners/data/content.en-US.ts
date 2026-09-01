import type { PartnersContent } from "../types/content";

/**
 * Copy en-US da seccao de parceiros.
 *
 * Os rotulos sao, na maioria, o nome oficial do programa de parceria de cada
 * marca (Meta Tech Provider, Stripe Verified Partner, ...): esses nomes sao
 * marca registada e nao se traduzem. Traduz-se apenas o que for prosa, como o
 * "Integrador Oficial WhatsApp".
 */
export const partnersContentEnUS: PartnersContent = {
  kicker: "Official partners",
  title: "Certifications and integrations that hold the operation up.",
  labels: {
    meta: "Meta Tech Provider",
    "mercado-livre": "Mercado Livre",
    olx: "OLX",
    whatsapp: "Official WhatsApp Integrator",
    instagram: "Instagram API",
    openai: "OpenAI Advanced Partner",
    stripe: "Stripe Verified Partner",
    asaas: "Asaas Integrator",
    "google-ads": "Google Ads Certified Partner",
    claude: "Claude Partner Network",
  },
};
