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
- The Growth Hub relationship may appear as a real, evidenced case in `/cases` (approved 27/08/2026), in Safe's structural voice (context, challenge, intervention, structure, verified results), never as agency/marketing-service language. Outside that one case entry, keep the relationship out of commercial copy and rely on the mandatory production credit.
- The Home may show a partners strip naming real certifications Safe Group holds (approved 28/08/2026): Meta, Mercado Livre, OLX, WhatsApp, Instagram, OpenAI, Stripe, Asaas, Google Ads and Claude. This is a narrow exception to the "not an agency" rule for that one strip; do not extend agency/marketing-service language to the rest of the site's copy on this basis, and do not add a new badge here without the same real-credential confirmation.
- Never invent clients, testimonials, metrics or results.
- Every delivered page must include the footer credit “Desenvolvido por Method Growth Hub” linked to `https://methodgrowthhub.com.br` with `target="_blank" rel="noopener"`.

## Delivery

- Update `tasks/todo.md` while working and add a review section before completion.
- Add rules to `tasks/lessons.md` after user corrections.
- Run typecheck, lint and production build before completion.
- Verify key pages at 375, 768, 1024 and 1440 pixels.
- Do not commit, push or deploy without explicit user instruction.
- Several sessions share this working directory. Stage only the files your own session changed, by explicit path (`git add src/modules/faq/components/FaqItemBubble.tsx`). Never use `git add -A`, `git add .`, `git commit -a` or any sweep of the working tree: it ships another session's unverified work under your commit message.
- Before staging, run `git status --short` and `git diff` on each path you intend to commit, and leave everything else untouched. If a file you did not change is already staged, unstage it.
- If your change is missing after another session pushed, check `git log -- <path>` before redoing it: it may already be committed and deployed inside their commit.
- Never store credentials in tracked files.
