import { getLocale } from "next-intl/server";
import { getSocialDockCopy } from "../data/dock-copy";
import { SocialDockPanel } from "./SocialDockPanel";

/**
 * Camada de servidor do atalho: le o idioma do pedido e desce os rotulos por
 * prop. Quem o monta continua a escrever `<SocialDock />`.
 */
export async function SocialDock() {
  return <SocialDockPanel copy={getSocialDockCopy(await getLocale())} />;
}
