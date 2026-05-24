---
name: ux-review
description: Review product UX for usability, user-flow completeness, state coverage, forms, onboarding, microcopy, accessibility, and friction. Use this skill whenever auditing UI/UX, reviewing a page or feature, finding UX bugs, improving conversion, checking empty/loading/error states, or critiquing a flow before implementation.
license: MIT
---

# UX Review

Use this skill to evaluate whether a product experience is understandable, complete, accessible, and safe for users.

## Reference

Read `../ux-design/references/ux-checklist.md` before reviewing.

If the review also needs visual/brand critique, combine this with the `design-review` skill.

## Review workflow

1. **Locate the flow.** Identify the route, file, screenshot, or written spec being reviewed.
2. **State the user job.** If the job is unclear, infer it and label the inference.
3. **Trace the happy path.** Can the user understand where they are, what to do next, and whether they succeeded?
4. **Trace unhappy paths.** Check empty, loading, partial, permission, validation, error, disabled, and destructive states.
5. **Check copy.** CTAs, labels, helper text, errors, confirmations, and empty states should be specific and action-oriented.
6. **Check accessibility basics.** Keyboard/focus, semantics, contrast, form labels, target sizes, reduced motion.
7. **Prioritize fixes.** Separate blockers from improvements. Prefer small targeted changes.

## Output format

```markdown
## UX Review

**Flow/user job:** ...
**Overall:** ...

### Blockers
1. ...

### Friction / confusion
1. ...

### Missing states
1. ...

### Copy fixes
1. ...

### Patch plan
1. ...
```

If the user asks you to implement the fixes, make the smallest safe edits and include verification steps.
