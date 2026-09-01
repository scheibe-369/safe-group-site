import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { SiteFooter } from "@/shared/layout/SiteFooter";
import { SiteFooterSlot } from "@/shared/layout/SiteFooterSlot";
import { getSiteChrome } from "@/shared/layout/data/chrome";
import { SiteIntro } from "@/modules/site-intro";
import { SiteNav, getSiteNavContent } from "@/modules/site-nav";
import { SmoothScroll } from "@/modules/smooth-scroll";
import { SocialDock } from "@/modules/social-dock";
import { locales } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";
import { variant } from "@/shared/typography/active";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://safegroup.pt";

/**
 * `hreflang` da raiz. Cada idioma aponta para a sua Home e o `x-default` fica
 * na de origem, que e a que serve o endereco sem prefixo.
 */
const homeLanguages = Object.fromEntries(
  locales.map((locale) => [locale, getPathname({ href: "/", locale })]),
);

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { metadata } = getSiteChrome(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: metadata.titleDefault, template: "%s | Safe Group" },
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: "Safe Group" }],
    creator: "Safe Group",
    publisher: "Safe Group",
    alternates: { canonical: getPathname({ href: "/", locale }), languages: { ...homeLanguages, "x-default": "/" } },
    openGraph: { title: "Safe Group", description: metadata.ogDescription, url: siteUrl, siteName: "Safe Group", locale: locale.replace("-", "_"), type: "website", images: [{ url: "/brand/safe-banner.png", width: 1672, height: 941, alt: "Safe Group" }] },
    twitter: { card: "summary_large_image", title: "Safe Group", description: metadata.ogDescription, images: ["/brand/safe-banner.png"] },
    robots: { index: true, follow: true },
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
