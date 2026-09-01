import { permanentRedirect } from "next/navigation";
import type { Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";

// Estas rotas existem so para os enderecos antigos e para links partilhados: o
// conteudo vive na Home, na seccao ancorada. O destino e calculado no idioma em
// que o visitante abriu a pagina, para o redireccionamento nao o atirar para a
// versao portuguesa.
export default async function SolutionsRedirect({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const home = getPathname({ href: "/", locale });
  permanentRedirect(`${home}#solucoes`);
}
