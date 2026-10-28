import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { alternatesFor, brand, isIndexable, openGraphFor, siteUrl } from "@/modules/seo";
import { SiteFooter } from "@/shared/layout/SiteFooter";
import { SiteFooterSlot } from "@/shared/layout/SiteFooterSlot";
import { getSiteChrome } from "@/shared/layout/data/chrome";
import { SiteIntro } from "@/modules/site-intro";
import { SiteNav, getSiteNavContent } from "@/modules/site-nav";
import { SmoothScroll } from "@/modules/smooth-scroll";
import { SocialDock } from "@/modules/social-dock";
import type { Locale } from "@/shared/i18n/locales";
import { variant } from "@/shared/typography/active";
import "./globals.css";

/**
 * Metadados da raiz, herdados por todas as paginas. O `canonical` e os
 * `hreflang` daqui sao os da Home; as paginas internas declaram os seus.
 * Fora da producao (preview e `next dev`) o site inteiro sai com `noindex`,
 * ver `src/modules/seo/data/site.ts`.
 */
export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const { metadata } = getSiteChrome(locale);
  const alternates = alternatesFor("/", locale);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: metadata.titleDefault, template: `%s | ${brand.name}` },
    description: metadata.description,
    authors: [{ name: brand.name }],
    creator: brand.name,
    publisher: brand.name,
    alternates,
    openGraph: openGraphFor({ locale, title: brand.name, description: metadata.ogDescription, url: alternates.canonical }),
    twitter: { card: "summary_large_image", title: brand.name, description: metadata.ogDescription, images: [brand.ogImage.url] },
    robots: isIndexable ? { index: true, follow: true } : { index: false, follow: false },
  };
}

export const viewport: Viewport = { themeColor: "#050505", colorScheme: "dark" };

/**
 * A raiz e a unica camada com `<html>` e `<body>`, por isso e aqui que o idioma
 * chega ao atributo `lang`, mesmo estando acima do segmento `[locale]`. O
 * `getLocale()` le o idioma que o middleware resolveu para o pedido, e nas duas
 * paginas internas que ficam fora do encaminhamento devolve a lingua de origem.
 */
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const chrome = getSiteChrome(locale);
  return (
    // `suppressHydrationWarning`: a cortina de entrada escreve `data-intro` no <html> antes da hidratacao.
    <html lang={locale} data-type={variant.id} className={variant.variableClass} suppressHydrationWarning>
      <body>
        {/* `messages` vazio de proposito: a copy vive nos ficheiros por idioma
            de cada modulo, nao em catalogos do next-intl, mas o provider recusa
            arrancar sem a propriedade. */}
        <NextIntlClientProvider locale={locale} messages={{}}>
          <SiteIntro />
          <SmoothScroll />
          <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-20 bg-white px-4 py-3 text-sm text-black transition-transform focus:translate-y-0">{chrome.skipToContent}</a>
          <SiteNav content={getSiteNavContent(locale)} year={new Date().getFullYear()} />
          <main id="main-content">{children}</main>
          <SiteFooterSlot>
            <SiteFooter />
          </SiteFooterSlot>
          <SocialDock />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
