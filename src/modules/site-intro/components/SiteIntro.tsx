import { getLocale } from "next-intl/server";
import { getIntroContent } from "../data/content";
import { IntroCurtain } from "./IntroCurtain";

/**
 * Camada de servidor da cortina: le o idioma do pedido e desce a copy por prop.
 *
 * A cortina em si tem de correr no cliente (mede o instante da primeira pintura
 * e fala com o `<html>`), e importar o getter la dentro arrastava os cinco
 * idiomas para o pacote do browser. Assim, quem a monta continua a escrever
 * `<SiteIntro />` e nao precisa de saber nada disto.
 */
export async function SiteIntro() {
  return <IntroCurtain content={getIntroContent(await getLocale())} />;
}
