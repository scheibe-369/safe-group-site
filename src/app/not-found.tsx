import { ButtonLink } from "@/shared/ui/ButtonLink";

export default function NotFound() {
  return <section className="safe-grid flex min-h-[75vh] items-center pt-24"><div className="safe-container"><p className="safe-kicker">404</p><h1 className="mt-5 text-5xl font-semibold sm:text-7xl">Esta página não existe.</h1><p className="mt-6 text-white/55">Volte ao início para continuar a explorar a Safe.</p><ButtonLink href="/" className="mt-9">Voltar ao início</ButtonLink></div></section>;
}
