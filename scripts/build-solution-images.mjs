// Converte os mockups das solucoes para WebP em tres larguras.
//
// Os originais chegam como PNG de 1774x887 e ~1,3 MB cada. Servidos crus seriam
// oito megabytes de painel de fundo.
//
// Porque tres larguras e nao uma: nesta stack o `/_next/image` NAO redimensiona
// nada. O `wrangler.toml` nao declara binding `[images]`, e o template do
// OpenNext devolve o ficheiro original em qualquer `w`. Verificado em producao,
// `w=256`, `w=640` e `w=1920` devolvem exactamente os mesmos bytes. Por isso o
// `srcset` e escrito a mao nos componentes a partir destes ficheiros, e o
// `sizes` volta a significar alguma coisa.
//
// Correr manualmente depois de trocar qualquer foto:
//   node scripts/build-solution-images.mjs

import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE_DIR = path.join(process.cwd(), "serviços-fotos");
const OUTPUT_DIR = path.join(process.cwd(), "public", "solucoes");

// O nome do ficheiro de origem vem do utilizador e traz acentos, espacos e um
// "&". Mapear a mao evita depender de normalizacao de Unicode do sistema de
// ficheiros, que difere entre Windows e o runner do Linux.
const MAP = [
  { slug: "funcionarios-ia", source: "agentes ia.png" },
  { slug: "software-saas", source: "software & saas.png" },
  { slug: "trafego-pago", source: "tráfego pago.png" },
  { slug: "estrategia", source: "Estratégia.png" },
  { slug: "estruturacao-empresarial", source: "estrutura empresarial.png" },
  { slug: "website", source: "website1.png" },
];

const WIDTHS = [
  { width: 1774, suffix: "" },
  { width: 1280, suffix: "-1280" },
  { width: 900, suffix: "-900" },
];

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  // O nome no disco pode estar em NFD (macOS) ou NFC (Windows). Comparar pela
  // forma normalizada em vez de exigir igualdade byte a byte.
  const files = await readdir(SOURCE_DIR);
  const byName = new Map(files.map((name) => [name.normalize("NFC"), name]));

  for (const { slug, source } of MAP) {
    const actual = byName.get(source.normalize("NFC"));
    if (!actual) {
      throw new Error(`Falta a foto "${source}" em ${SOURCE_DIR}`);
    }

    const input = path.join(SOURCE_DIR, actual);
    for (const { width, suffix } of WIDTHS) {
      const output = path.join(OUTPUT_DIR, `${slug}${suffix}.webp`);
      const info = await sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(output);
      const kb = Math.round(info.size / 1024);
      console.log(`${slug}${suffix}.webp  ${info.width}x${info.height}  ${kb} KB`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
