import Link from "next/link";
import { SiteLogo } from "./SiteLogo";

const links = [
  ["Soluções", "/#solucoes"], ["Método", "/#metodo"], ["Cases", "/#cases"],
  ["Sobre", "/#sobre"], ["Contacto", "/#diagnostico"],
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="safe-container py-14 sm:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <SiteLogo />
            <p className="mt-5 max-w-md text-sm leading-6 text-white/55">Estratégia, inteligência comercial e tecnologia para decisões que movem operações high ticket.</p>
          </div>
          <nav aria-label="Navegação do rodapé" className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            {links.map(([label, href]) => <Link key={href} href={href} className="min-h-11 content-center text-white/60 transition-colors hover:text-white">{label}</Link>)}
          </nav>
        </div>
        <div className="pt-7 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Safe Group. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
