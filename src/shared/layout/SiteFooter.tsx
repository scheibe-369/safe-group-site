import Link from "next/link";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";
import { getSiteChrome } from "./data/chrome";
import { SiteLogo } from "./SiteLogo";

// Este rodape aparece em todas as rotas menos a Home. E o unico caminho de
// volta a lista de solucoes para quem aterra em `/solucoes/<slug>`, por isso a
// entrada "Solucoes" tem de estar la, e a lista vive no conteudo por idioma.
export async function SiteFooter() {
  const locale = await getLocale();
  const { footer } = getSiteChrome(locale);
  const home = getPathname({ href: "/", locale: locale as Locale });
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="safe-container py-14 sm:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <SiteLogo />
            <p className="mt-5 max-w-md text-sm leading-6 text-white/55">{footer.tagline}</p>
          </div>
          <nav aria-label={footer.navAriaLabel} className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            {footer.links.map(({ hash, label }) => <Link key={hash} href={`${home}#${hash}`} className="min-h-11 content-center text-white/60 transition-colors hover:text-white">{label}</Link>)}
          </nav>
        </div>
        <div className="pt-7 text-xs text-white/55">
          <p>© {new Date().getFullYear()} {footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
