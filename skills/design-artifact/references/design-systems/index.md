# Curated DESIGN.md Systems

Read only the design system the user requested, or this index when you need to help them choose. Do **not** read every `DESIGN.md` by default.

| ID | Source folder | Best for | Visual shorthand |
| --- | --- | --- | --- |
| `airbnb` | `airbnb/DESIGN.md` | Travel, marketplace, consumer booking, local discovery | Warm coral, photography-led, rounded approachable UI |
| `apple` | `apple/DESIGN.md` | Premium consumer products, hardware, polished product launches | Cinematic white space, SF Pro feel, restrained surfaces |
| `claude` | `claude/DESIGN.md` | AI assistant, knowledge work, editorial SaaS | Warm terracotta, calm editorial, spacious reasoning UI |
| `composio` | `composio/DESIGN.md` | Integration platforms, tool directories, automation products | Modern dark, colorful app/tool icons, connector grid energy |
| `cursor` | `cursor/DESIGN.md` | Developer tools, IDEs, AI coding products | Sleek dark shell, gradients, code-forward chrome |
| `figma` | `figma/DESIGN.md` | Collaborative design tools, creative platforms, multiplayer UI | Playful professional, multi-color accents, canvas energy |
| `linear` | `linear/DESIGN.md` | B2B SaaS, issue tracking, dashboards, focused productivity | Near-black precision, lavender accent, dense product craft |
| `notion` | `notion/DESIGN.md` | Workspaces, docs, knowledge bases, creator tools | Warm minimalism, serif/editorial touches, soft surfaces |
| `stripe` | `stripe/DESIGN.md` | Fintech, API products, infrastructure, pricing pages | Indigo gradients, thin display type, financial trust |
| `supabase` | `supabase/DESIGN.md` | Developer platforms, databases, infra dashboards | Dark emerald, code-first, open-source energy |
| `vercel` | `vercel/DESIGN.md` | Frontend/dev platforms, launch pages, docs | Black/white precision, Geist-like type, exact spacing |
| `voltagent` | `voltagent/DESIGN.md` | Agent frameworks, terminal-native AI products | Void black, emerald accent, terminal/agent aesthetic |

## Selection heuristics

- If the user names a system ID, read that file directly.
- If the user says "Linear-style", "Stripe-ish", "like Vercel", map that to the closest ID.
- If the brief is B2B SaaS but unspecified, prefer `linear`, `vercel`, or `stripe` based on product type.
- If the brief is developer infrastructure, prefer `vercel`, `supabase`, `cursor`, `composio`, or `voltagent`.
- If the brief is consumer/marketplace, prefer `airbnb`, `apple`, `figma`, or `notion`.
- If none fit, ask the user to choose 2–3 options rather than reading all systems.
