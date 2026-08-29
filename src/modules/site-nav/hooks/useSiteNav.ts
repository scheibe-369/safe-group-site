import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Estado do menu e os efeitos que o acompanham, todos com um so dono, o efeito
 * de `open`: bloqueio do scroll do documento (o `scrollbar-gutter: stable` do
 * CSS do modulo evita o salto da barra de scroll), resto da pagina `inert`
 * para o teclado e o leitor de ecra nao sairem do menu, fecho com Escape, e
 * foco de volta ao alternador quando o menu fecha, porque o painel passa a
 * `inert` e o browser larga o foco no `body`.
 */
export function useSiteNav(menuId: string) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((value) => !value), []);

  useEffect(() => {
    // A barra so existe com a pagina rolada. Histerese no limiar: entra depois
    // dos 24px e so sai abaixo dos 4px, para nao piscar quando o scroll para
    // mesmo em cima da fronteira.
    const onScroll = () => setScrolled((value) => window.scrollY > (value ? 4 : 24));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const header = document.getElementById(menuId)?.closest("header");
    const outside = [...document.body.children].filter((el): el is HTMLElement => el instanceof HTMLElement && el !== header);
    root.style.overflow = "hidden";
    outside.forEach((el) => {
      el.inert = true;
    });
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      outside.forEach((el) => {
        el.inert = false;
      });
      root.style.overflow = "";
      const active = document.activeElement;
      const menu = document.getElementById(menuId);
      if (!active || active === document.body || menu?.contains(active)) toggleRef.current?.focus();
    };
  }, [open, menuId]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return { open, scrolled, toggle, close, toggleRef, pathname };
}

/**
 * Ligacao ativa num one-page: rotas comparam pelo caminho, ancoras comparam
 * pelo `hash`, que o `usePathname` nao devolve. So corre no cliente, por isso
 * o primeiro render nao marca ancora nenhuma e evita divergencia de hidratacao.
 * O Next navega para ancoras com `pushState`, que nao dispara `hashchange`,
 * por isso quem clica numa ligacao do menu anuncia o destino com `noteNavigation`.
 */
export function useActiveHref(pathname: string) {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const read = () => setHash(window.location.hash);
    read();
    window.addEventListener("hashchange", read);
    window.addEventListener("popstate", read);
    return () => {
      window.removeEventListener("hashchange", read);
      window.removeEventListener("popstate", read);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    const [path, anchor] = href.split("#");
    if (anchor) return pathname === (path || "/") && hash === `#${anchor}`;
    if (href === "/") return pathname === "/" && hash === "";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const noteNavigation = (href: string) => {
    const anchor = href.split("#")[1];
    setHash(anchor ? `#${anchor}` : "");
  };

  return { isActive, noteNavigation };
}
