# Safe Group project instructions

## Session start

Read `README.md`, `tasks/todo.md`, `tasks/lessons.md`, `skills/safe-brand-context/SKILL.md` and the skill files relevant to the requested task before changing the project.

## Skill routing

- Any code creation or refactor: `modular-arch`.
- New UI, page or visual direction: `frontend-design` and `ui-ux-pro-max`.
- Browser verification: `webapp-testing`.
- General code review: `code-review-base`.
- Forms, webhooks, credentials or personal data: `code-review-sensitive`.
- Flow or integration audit: `pipeline-auditor`.
- New project or credential setup: `project-init`.
- Skill creation or maintenance: `skill-creator`.
- Safe positioning, copy, brand or assets: `safe-brand-context`.

## Architecture

- Domain code belongs in `src/modules/<feature>`.
- Global UI contains only brand-agnostic primitives.
- Shared layout contains only site-wide navigation, footer and structural wrappers.
- Prefer server components. Use client components only for actual interaction.

## Copy and brand

- Site copy is pt-PT.
- Never use Unicode U+2014 or U+2013 in copy, prompts or generated interface text.
- Position Safe for high ticket operations across multiple sectors. Automóvel, financeiro e software/SaaS are established experience verticals, not a closed list.
- Do not position Safe as a generic marketing, traffic, automation, software or AI agency.
- Do not mention the Growth Hub relationship in Safe commercial copy or cases. Keep it only in internal context and in the mandatory production credit.
- Never invent clients, testimonials, metrics or results.
- Every delivered page must include the footer credit “Desenvolvido por Method Growth Hub” linked to `https://methodgrowthhub.com.br` with `target="_blank" rel="noopener"`.

## Delivery

- Update `tasks/todo.md` while working and add a review section before completion.
- Add rules to `tasks/lessons.md` after user corrections.
- Run typecheck, lint and production build before completion.
- Verify key pages at 375, 768, 1024 and 1440 pixels.
- Do not commit, push or deploy without explicit user instruction.
- Never store credentials in tracked files.
