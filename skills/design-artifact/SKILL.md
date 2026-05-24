---
name: design-artifact
description: Generate high-quality UI/design artifacts using curated DESIGN.md systems and project conventions. Use this skill whenever creating landing pages, dashboards, mobile screens, decks, HTML/CSS prototypes, React/Next.js components, Tailwind UI, or when the user asks for Linear-style, Stripe-ish, Vercel-like, Claude Design, Open Design, or DESIGN.md-guided visual work.
license: MIT
---

# Design Artifact

Use this skill to produce artifact-first UI/design work: a concrete file, component, page, or prototype grounded in a selected `DESIGN.md` rather than generic AI styling.

## Available design systems

Start with `references/design-systems/index.md` when you need to choose a system. If the user named a system, read only that file:

- `references/design-systems/airbnb/DESIGN.md`
- `references/design-systems/apple/DESIGN.md`
- `references/design-systems/claude/DESIGN.md`
- `references/design-systems/composio/DESIGN.md`
- `references/design-systems/cursor/DESIGN.md`
- `references/design-systems/figma/DESIGN.md`
- `references/design-systems/linear/DESIGN.md`
- `references/design-systems/notion/DESIGN.md`
- `references/design-systems/stripe/DESIGN.md`
- `references/design-systems/supabase/DESIGN.md`
- `references/design-systems/vercel/DESIGN.md`
- `references/design-systems/voltagent/DESIGN.md`

Do not load every design system. One named system plus the index is usually enough.

## Workflow

1. **Lock the brief.** Identify artifact type, audience, content, target framework, and constraints. Ask at most 5 concise questions only when missing information would materially change the design.
2. **Select one system.** Use the named system, infer from brand language, or offer 2–3 choices from the index. Read the chosen `DESIGN.md` before designing.
3. **Inspect the project.** Before editing app code, read the relevant files: `package.json`, framework config, route/component files, Tailwind/global CSS, and existing UI primitives. Match local conventions.
4. **Make a real artifact.** Prefer a concrete deliverable: an edited component/page in the app, or a standalone `design-artifacts/<slug>/index.html` if no target file exists.
5. **Preserve product truth.** Use placeholders only when facts are missing; label them honestly. Never invent metrics, customer logos, testimonials, pricing, compliance claims, or screenshots.
6. **Self-review before final.** Check hierarchy, spacing, typography, color roles, responsive behavior, accessibility, and whether the result obviously reflects the selected `DESIGN.md`.

## Quality bar

- Strong hierarchy: one primary focal point per viewport/section.
- Token discipline: use colors/type/spacing from the chosen system, not random gradients.
- Responsive by default: desktop and mobile states are considered.
- Accessible basics: semantic structure, contrast, labels, focus states where relevant.
- No AI slop: avoid generic purple-blue blobs, fake logos, meaningless glassmorphism, noisy emoji, and overused "10x" claims.

## Output expectations

In the final response, include:

- The selected design system.
- Files created or changed.
- How to preview the result.
- Any assumptions or placeholders that remain.
