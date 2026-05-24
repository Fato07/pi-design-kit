---
name: ux-design
description: Design practical user experience flows, interaction states, IA, onboarding, forms, empty states, permissions, and microcopy. Use this skill whenever planning UX, improving a user journey, designing product flows, mapping states, writing UX specs, creating wireframe-level requirements, or when the user mentions UX, usability, onboarding, forms, empty states, or user flows.
license: MIT
---

# UX Design

Use this skill for product UX work before or alongside visual design. The goal is to make the flow understandable, complete, recoverable, and easy to implement.

## Reference

Read `references/ux-checklist.md` for the core checklist.

If the work needs visual direction, also use the sibling `design-artifact` skill and a selected `DESIGN.md`.

## Workflow

1. **Identify the job.** State the user, their goal, and the first successful outcome.
2. **Map the flow.** List steps from entry point to completion. Include where data comes from and which actions have side effects.
3. **Cover states.** Define empty, loading, success, error, partial, permission, disabled, and edge states.
4. **Shape the IA.** Name primary navigation, screen hierarchy, sections, and progressive disclosure rules.
5. **Write microcopy.** Draft CTA labels, helper text, errors, confirmation copy, empty-state copy, and success messages.
6. **Add guardrails.** Specify accessibility, validation, cancellation/undo, and approval requirements.
7. **Make it actionable.** Output an implementation-ready UX spec, patch plan, or component/page changes depending on the user's request.

## Output options

Use the format that matches the task:

### Flow spec

```markdown
## UX Flow: <name>

**User:** ...
**Goal:** ...
**Primary success:** ...

### Steps
1. ...

### States
- Empty: ...
- Loading: ...
- Success: ...
- Error: ...
- Permission: ...

### Copy
- Primary CTA: ...
- Empty state: ...
- Error: ...

### Implementation notes
- ...
```

### Patch plan

```markdown
## UX Patch Plan
1. ...
2. ...
3. ...
```

If asked to implement, make targeted edits and report changed files plus verification steps.
