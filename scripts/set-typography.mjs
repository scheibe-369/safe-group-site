import { readFile, writeFile } from "node:fs/promises";

// Manrope e a direcao aprovada. Os restantes nomes servem os builds de comparacao.
const variants = {
  manrope: "manrope",
  c: "manrope",
  archivo: "archivo",
  a: "archivo",
  instrument: "instrument",
  b: "instrument",
  "space-grotesk": "space-grotesk",
  atual: "space-grotesk",
};

const choice = process.argv[2] ?? process.env.SAFE_TYPE ?? "manrope";
const file = variants[choice];

if (!file) {
  console.error(`Direção desconhecida: ${choice}. Use uma de: ${Object.keys(variants).join(", ")}`);
  process.exit(1);
}

const target = "src/shared/typography/active.ts";
const current = await readFile(target, "utf8");
const next = current.replace(/export \{ variant \} from "\.\/variants\/[a-z-]+";/, `export { variant } from "./variants/${file}";`);

if (next === current && !current.includes(`./variants/${file}"`)) {
  console.error("Não foi possível reescrever a direção ativa.");
  process.exit(1);
}

await writeFile(target, next);
console.log(`Direção tipográfica ativa: ${choice} (${file}).`);
