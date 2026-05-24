# UX Checklist

Use this checklist before designing or changing a flow.

## User and job

- Who is the primary user?
- What job are they trying to finish?
- What is the first successful outcome?
- What information do they already have?
- What information must the product ask for?

## Flow clarity

- One primary action per screen or state.
- CTAs use verb-first labels: `Create report`, `Connect Slack`, `Review changes`.
- The next step is obvious without reading everything.
- Destructive or irreversible actions require confirmation and clear consequences.
- Optional steps look optional; required steps look required.

## State coverage

Every meaningful screen/flow should cover:

- Empty state: no data yet, with a useful first action.
- Loading state: specific copy, not generic spinners forever.
- Success state: confirms what happened and what to do next.
- Error state: explains the issue, preserves user input, offers recovery.
- Partial state: some data is present but incomplete or stale.
- Permission state: missing auth/access/connectors, with a safe next action.
- Disabled state: explains why the action is unavailable.

## Feedback and control

- User actions produce immediate feedback.
- Long tasks show progress, queued/running/done/failed state, and cancellation if safe.
- Users can review before committing consequential actions.
- Undo is preferred over confirmation for reversible actions.
- The UI never hides critical side effects.

## Forms

- Ask only for fields needed now.
- Put validation next to the field and after blur/submit, not as a surprise later.
- Preserve typed input on errors.
- Use examples/placeholders to clarify format, not as labels.
- Group fields by user mental model, not backend schema.

## Accessibility basics

- Keyboard path exists for every interactive action.
- Focus state is visible.
- Error messages are programmatically associated with fields.
- Touch targets are at least 44×44px when possible.
- Contrast is sufficient for body text and controls.
- Motion is nonessential and respects reduced-motion preferences.
