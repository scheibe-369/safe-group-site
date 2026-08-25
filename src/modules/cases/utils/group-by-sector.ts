import type { CaseStudy } from "../types/case-study";

export type CaseSector = {
  /** Nome do setor, tal como vem dos dados. */
  name: string;
  /** Identificador estavel, usado na ancora da rota /cases. */
  id: string;
  items: CaseStudy[];
};

/** Normaliza o nome do setor para servir de ancora de URL. */
function toAnchorId(sector: string) {
  const slug = sector
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `setor-${slug}`;
}

/**
 * Agrupa os cases por setor preservando a ordem de aparicao em data/cases.ts.
 * A ordem dos blocos na rota /cases e portanto editorial: controla-se
 * reordenando o array de dados, sem tocar em componente nenhum.
 */
export function groupBySector(items: CaseStudy[]): CaseSector[] {
  const order: string[] = [];
  const buckets = new Map<string, CaseStudy[]>();

  for (const item of items) {
    const bucket = buckets.get(item.sector);

    if (bucket) {
      bucket.push(item);
      continue;
    }

    order.push(item.sector);
    buckets.set(item.sector, [item]);
  }

  return order.map((name) => ({ name, id: toAnchorId(name), items: buckets.get(name) ?? [] }));
}
