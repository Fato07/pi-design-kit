---
name: design-md
description: Create, refine, or audit project DESIGN.md files for AI-generated UI consistency. Use this skill whenever the user wants a DESIGN.md, design tokens, brand rules, visual guidelines, Stitch-style design docs, or wants to extract a design system from existing CSS, screenshots, brand notes, or a live product.
license: MIT
---

# DESIGN.md Authoring

Use this skill to create or improve a project-owned `DESIGN.md` that coding/design agents can read before making UI.

## Template

Read `references/design-md-template.md` before writing a new `DESIGN.md`.

You can also use curated examples from the sibling skill when helpful:

- `../design-artifact/references/design-systems/index.md`
- `../design-artifact/references/design-systems/<id>/DESIGN.md`

## Workflow

1. **Collect evidence.** Read existing UI code, CSS/Tailwind config, component primitives, brand notes, screenshots, or user-provided references. Do not invent a brand if evidence exists.
2. **Choose the output path.** Default to `DESIGN.md` at the project root unless the user requests another path.
3. **Write actionable rules.** Favor precise tokens, component rules, layout constraints, and anti-patterns over vague adjectives.
4. **Keep it agent-readable.** Use the 9-section structure from the template. Put quick prompt guidance at the end.
5. **Preserve truth.** If a token or rule is inferred, label it as inferred. If a decision is unknown, include a short TODO rather than hallucinating.
6. **Audit if updating.** When editing an existing `DESIGN.md`, preserve useful project-specific language and only replace weak or stale sections.

## Quality bar

A good `DESIGN.md` lets another agent build a page that feels on-brand without asking follow-up questions. It should answer:

- What should the UI feel like?
- Which colors/fonts/spacing should be used?
- How should common components look and behave?
- What should the agent avoid?
- How does the system adapt on mobile?

## Final response

Report the file path, evidence used, inferred assumptions, and suggested next validation step.
