import type { SocialNetwork } from "../types/social-network";

/**
 * Ordem visual de cima para baixo. O WhatsApp fica em ultimo porque e o que
 * encosta ao selo, a posicao mais perto do polegar e a primeira a abrir.
 *
 * Os tres destinos estao por confirmar, por indicacao do cliente. Assim que
 * houver perfil, basta preencher o `href` aqui: nenhum componente muda.
 *
 * Nomes e enderecos nao entram na traducao: sao marcas e destinos. A copy do
 * atalho vive em `dock-copy.<idioma>.ts`.
 */
export const socialNetworks: SocialNetwork[] = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/safegroup_/", accent: "#e1306c" },
  { id: "linkedin", label: "LinkedIn", href: null, accent: "#0a66c2" },
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/5527999584889", accent: "#25d366" },
];
