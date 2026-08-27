import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Estado do menu e os efeitos que o acompanham: bloqueio do scroll do documento
 * (com compensacao da barra de scroll, para a pagina nao saltar), fecho com
 * Escape e fecho ao mudar de rota. O fecho e sincrono no scroll para uma
 * ligacao de ancora dentro do menu conseguir deslocar a pagina no mesmo clique.
 * Se o foco estiver dentro do menu quando ele fecha, volta ao alternador, senao
 * o teclado perdia-se no `body` porque o painel passa a `inert`.
 */
export function useSiteNav(menuId: string) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const restoreFocus = useCallback(() => {
    const active = document.activeElement;
    const menu = document.getElementById(menuId);
    if (menu && active && menu.contains(active)) toggleRef.current?.focus();
  }, [menuId]);

  const close = useCallback(() => {
    unlockDocument();
    restoreFocus();
    setOpen(false);
  }, [restoreFocus]);

  const toggle = useCallback(() => {
    setOpen((value) => {
      if (value) unlockDocument();
      return !value;
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    lockDocument();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      unlockDocument();
    };
  }, [open, close]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return { open, scrolled, toggle, close, toggleRef };
}

function lockDocument() {
  const root = document.documentElement;
  const gutter = window.innerWidth - root.clientWidth;
  root.style.setProperty("--site-nav-gutter", `${gutter}px`);
  root.style.overflow = "hidden";
}

function unlockDocument() {
  const root = document.documentElement;
  root.style.overflow = "";
  root.style.removeProperty("--site-nav-gutter");
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
