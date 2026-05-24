---
description: Generate a UI/design artifact with a curated DESIGN.md system
argument-hint: "[system] <brief>"
---
Use the `design-artifact` skill from `pi-design-kit`.

User args: `$ARGUMENTS`

Interpret the first argument as a design-system id if it matches one of: `airbnb`, `apple`, `claude`, `composio`, `cursor`, `figma`, `linear`, `notion`, `stripe`, `supabase`, `vercel`, `voltagent`. Otherwise infer the best system from the brief or ask the user to choose.

Create or edit a concrete artifact. Read only the selected `DESIGN.md`, inspect relevant project files, and finish with changed paths plus preview steps.
