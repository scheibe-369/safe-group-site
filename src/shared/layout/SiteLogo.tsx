import Image from "next/image";
import { getLocale } from "next-intl/server";
import { Link } from "@/shared/i18n/navigation";
import { getSiteChrome } from "./data/chrome";

/**
 * Lockup oficial da marca, recortado do banner e com o fundo preto convertido
 * em transparência. Substitui a versão anterior, que recompunha o wordmark com
 * texto em CSS e por isso nunca batia certo com o lettering real.
 */
export async function SiteLogo({ priority = false }: { priority?: boolean }) {
  const { logoAriaLabel } = getSiteChrome(await getLocale());
  return (
    <Link href="/" className="flex min-h-11 items-center" aria-label={logoAriaLabel}>
      <Image
        src="/brand/safe-lockup.webp"
        alt=""
        width={1064}
        height={314}
        priority={priority}
        className="h-11 w-auto sm:h-12 lg:h-[3.25rem]"
      />
    </Link>
  );
}
