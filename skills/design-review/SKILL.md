---
name: design-review
description: Review UI/design artifacts for visual hierarchy, brand fidelity, accessibility, responsiveness, and implementation quality. Use this skill whenever critiquing landing pages, dashboards, app screens, screenshots, HTML/CSS, React/Next.js UI, Tailwind components, DESIGN.md adherence, or when the user asks for design QA, polish, or a Claude Design/Open Design-style critique.
license: MIT
---

# Design Review

Use this skill to critique and improve UI artifacts with clear, prioritized design feedback.

## Reference systems

If the review should compare against a curated system, read the relevant file from:

- `../design-artifact/references/design-systems/index.md`
- `../design-artifact/references/design-systems/<id>/DESIGN.md`

If the project has its own `DESIGN.md`, prefer the project file over bundled references.

## Review workflow

1. **Find the artifact.** Determine whether you are reviewing a file, route, screenshot, generated HTML, or existing app UI. Read the relevant code and style files.
2. **Find the intended design language.** Use the user's named system, project `DESIGN.md`, existing UI conventions, or ask which system to use.
3. **Assess five dimensions:**
   - Hierarchy: focal point, section rhythm, scan path, density.
   - Fidelity: use of design-system colors, typography, spacing, component states.
   - Interaction/accessibility: semantics, focus, contrast, labels, touch targets.
   - Responsiveness: mobile/desktop layout, overflow, content wrapping.
   - Implementation: maintainability, framework conventions, duplicated styles, dead code.
4. **Prioritize fixes.** Separate must-fix issues from polish. Avoid broad rewrites unless asked.
5. **Patch if requested.** When the user asks to fix, make the smallest targeted edits that address the review.

## Output format

Use this structure unless the user asks otherwise:

```markdown
## Design Review

**System/standard:** <DESIGN.md or project conventions>
**Overall:** <1–2 sentence summary>

### Must fix
1. ...

### Polish
1. ...

### Suggested patch plan
1. ...
```

If you changed files, end with paths and verification steps.
