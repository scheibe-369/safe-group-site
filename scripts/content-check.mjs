import { readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const roots = ["src", "README.md", "AGENTS.md"];
const textExtensions = new Set([".ts", ".tsx", ".css", ".md"]);
const violations = [];

async function inspect(path) {
  const entries = await readdir(path, { withFileTypes: true }).catch(() => null);
  if (entries) {
    await Promise.all(entries.map((entry) => inspect(join(path, entry.name))));
    return;
  }
  if (!textExtensions.has(extname(path))) return;
  const content = await readFile(path, "utf8");
  if (/[\u2014\u2013]/u.test(content)) violations.push(`${path}: contém travessão`);
}

await Promise.all(roots.map(inspect));
if (violations.length) {
  console.error(violations.join("\n"));
  process.exit(1);
}
console.log("Copy validada.");
