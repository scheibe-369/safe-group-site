/**
 * Gera os quatro ficheiros de idioma irmaos a partir de um `*.pt-PT.ts`.
 *
 * Cada copia mantem a forma exacta do original, troca o sufixo do nome
 * exportado e leva um marcador `TODO(i18n)` no topo. Os agentes tradutores
 * substituem o conteudo; o marcador so desaparece quando a traducao entra, e e
 * isso que a verificacao final procura.
 *
 * Uso: node i18n-scaffold.mjs <ficheiro.pt-PT.ts> [mais ficheiros...]
 */
import { readFile, writeFile } from "node:fs/promises";

const TARGETS = [
  { locale: "pt-BR", suffix: "PtBR", label: "português do Brasil" },
  { locale: "en-GB", suffix: "EnGB", label: "inglês britânico" },
  { locale: "en-US", suffix: "EnUS", label: "inglês americano" },
  { locale: "es", suffix: "Es", label: "espanhol" },
];

const files = process.argv.slice(2);
if (!files.length) {
  console.error("Indique pelo menos um ficheiro *.pt-PT.ts");
  process.exit(1);
}

for (const source of files) {
  if (!source.endsWith(".pt-PT.ts")) {
    console.error(`Ignorado, nao e uma baseline pt-PT: ${source}`);
    continue;
  }
  const original = await readFile(source, "utf8");
  const exportNames = [...original.matchAll(/export const (\w+PtPT)\b/g)].map((m) => m[1]);
  if (!exportNames.length) {
    console.error(`Sem export terminado em PtPT: ${source}`);
    continue;
  }

  for (const target of TARGETS) {
    let content = original;
    for (const name of exportNames) {
      const renamed = name.replace(/PtPT$/, target.suffix);
      content = content.replaceAll(name, renamed);
    }
    const header = `// TODO(i18n): copia por traduzir da baseline pt-PT. Acionar o agente translator-${target.locale.toLowerCase()}.\n`;
    const destination = source.replace(/\.pt-PT\.ts$/, `.${target.locale}.ts`);
    await writeFile(destination, header + content, "utf8");
    console.log(`${destination}  (${target.label})`);
  }
}
