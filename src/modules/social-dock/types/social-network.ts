export type SocialNetworkId = "instagram" | "linkedin" | "whatsapp";

export type SocialNetwork = {
  id: SocialNetworkId;
  label: string;
  /**
   * Destino do atalho. Fica `null` enquanto o perfil nao estiver confirmado,
   * pelo mesmo criterio das redes do rodape: um `href` inventado promete um
   * destino que nao e da Safe. Com `null` o icone aparece e nao navega.
   */
  href: string | null;
  /** Cor da marca. Entra apenas no hover e no foco, nunca no estado de repouso. */
  accent: string;
};

/**
 * Rotulos de apoio do atalho. Nao aparecem em texto corrido: sao `aria-label`
 * do botao e da lista, mais a etiqueta que surge ao passar o cursor.
 */
export type SocialDockCopy = {
  open: string;
  close: string;
  listLabel: string;
};
