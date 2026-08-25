import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const skillsRoot = path.resolve("skills");
const directories = (await readdir(skillsRoot)).sort();
const errors = [];

for (const directory of directories) {
  const skillDirectory = path.join(skillsRoot, directory);
  if (!(await stat(skillDirectory)).isDirectory()) continue;

  const skillPath = path.join(skillDirectory, "SKILL.md");
  let content = "";
  try {
    content = await readFile(skillPath, "utf8");
  } catch {
    errors.push(`${directory}: SKILL.md em falta`);
    continue;
  }

  const frontmatter = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontmatter) {
    errors.push(`${directory}: frontmatter YAML em falta`);
    continue;
  }

  const name = frontmatter[1].match(/^name:\s*(.+)$/m)?.[1]?.trim().replace(/^['"]|['"]$/g, "");
  const description = frontmatter[1].match(/^description:\s*(.+)$/m)?.[1]?.trim();
  if (!name) errors.push(`${directory}: campo name em falta`);
  if (!description) errors.push(`${directory}: campo description em falta`);
  if (name && name !== directory) errors.push(`${directory}: name deve coincidir com o diretório, recebeu ${name}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`${directories.length} skills locais validadas.`);
