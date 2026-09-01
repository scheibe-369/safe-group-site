import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/shared/i18n/routing";

/**
 * Camada so de encaminhamento: nao desenha marcacao nenhuma, porque `<html>`,
 * `<body>` e a moldura do site vivem na raiz, que tambem cobre as paginas
 * internas fora do `[locale]`.
 *
 * O que faz e declarar os cinco idiomas ao Next para as paginas continuarem a
 * ser geradas estaticamente, e fixar o idioma do pedido antes de qualquer
 * `getLocale()` correr numa pagina.
 */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  return children;
}
