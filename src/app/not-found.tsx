import { getLocale } from "next-intl/server";
import type { Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";
import { getSiteChrome } from "@/shared/layout/data/chrome";
import { ButtonLink } from "@/shared/ui/ButtonLink";

export default async function NotFound() {
  const locale = await getLocale();
  const { notFound } = getSiteChrome(locale);
  const home = getPathname({ href: "/", locale: locale as Locale });
  return <section className="safe-grid flex min-h-[75vh] items-center pt-24"><div className="safe-container"><p className="safe-kicker">{notFound.kicker}</p><h1 className="mt-5 text-5xl font-semibold sm:text-7xl">{notFound.title}</h1><p className="mt-6 text-white/55">{notFound.description}</p><ButtonLink href={home} className="mt-9">{notFound.action}</ButtonLink></div></section>;
}
