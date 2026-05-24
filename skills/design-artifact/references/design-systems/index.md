# Curated DESIGN.md Systems

Read only the design system the user requested, or this index when you need to help them choose. Do **not** read every `DESIGN.md` by default.

| ID | Source folder | Best for | Visual shorthand |
| --- | --- | --- | --- |
| `airbnb` | `airbnb/DESIGN.md` | Travel, marketplace, consumer booking, local discovery | Warm coral, photography-led, rounded approachable UI |
| `apple` | `apple/DESIGN.md` | Premium consumer products, hardware, polished product launches | Cinematic white space, SF Pro feel, restrained surfaces |
| `bento` | `bento/DESIGN.md` | Feature grids, launch pages, product modules, capability overviews | Modular cards, clear blocks, structured visual rhythm |
| `brutalism` | `brutalism/DESIGN.md` | Bold campaigns, opinionated launches, expressive editorial pages | Heavy contrast, raw geometry, deliberate rough edges |
| `claude` | `claude/DESIGN.md` | AI assistant, knowledge work, editorial SaaS | Warm terracotta, calm editorial, spacious reasoning UI |
| `composio` | `composio/DESIGN.md` | Integration platforms, tool directories, automation products | Modern dark, colorful app/tool icons, connector grid energy |
| `cursor` | `cursor/DESIGN.md` | Developer tools, IDEs, AI coding products | Sleek dark shell, gradients, code-forward chrome |
| `dashboard` | `dashboard/DESIGN.md` | Admin panels, analytics, ops consoles, monitoring products | Dense information, cards/tables/charts, pragmatic hierarchy |
| `editorial` | `editorial/DESIGN.md` | Long-form pages, thought leadership, reports, magazine-like web | Strong type hierarchy, pull-quotes, reading rhythm |
| `enterprise` | `enterprise/DESIGN.md` | B2B platforms, procurement-safe SaaS, complex workflows | Conservative, trusted, structured, high-clarity UI |
| `figma` | `figma/DESIGN.md` | Collaborative design tools, creative platforms, multiplayer UI | Playful professional, multi-color accents, canvas energy |
| `glassmorphism` | `glassmorphism/DESIGN.md` | Premium SaaS, AI apps, futuristic surfaces, visual polish passes | Translucent panels, layered blur, luminous depth |
| `linear` | `linear/DESIGN.md` | B2B SaaS, issue tracking, dashboards, focused productivity | Near-black precision, lavender accent, dense product craft |
| `material` | `material/DESIGN.md` | Android-adjacent products, broad consumer apps, familiar UI | Material tokens, elevation, clear components, accessibility |
| `minimal` | `minimal/DESIGN.md` | Focused tools, portfolios, simple SaaS, low-noise UX | Lots of whitespace, quiet type, few accents |
| `modern` | `modern/DESIGN.md` | General SaaS, startups, polished web apps | Contemporary layout, balanced type, crisp product surfaces |
| `neobrutalism` | `neobrutalism/DESIGN.md` | Youthful tools, creator products, playful dashboards | Chunky borders, high-contrast color, playful rawness |
| `notion` | `notion/DESIGN.md` | Workspaces, docs, knowledge bases, creator tools | Warm minimalism, serif/editorial touches, soft surfaces |
| `openai` | `openai/DESIGN.md` | AI platforms, research labs, clean agent products | Restrained neutrals, high trust, subtle intelligence |
| `shadcn` | `shadcn/DESIGN.md` | Next.js/Tailwind apps, component libraries, internal tools | Neutral surfaces, sharp components, modern accessible defaults |
| `stripe` | `stripe/DESIGN.md` | Fintech, API products, infrastructure, pricing pages | Indigo gradients, thin display type, financial trust |
| `supabase` | `supabase/DESIGN.md` | Developer platforms, databases, infra dashboards | Dark emerald, code-first, open-source energy |
| `vercel` | `vercel/DESIGN.md` | Frontend/dev platforms, launch pages, docs | Black/white precision, Geist-like type, exact spacing |
| `voltagent` | `voltagent/DESIGN.md` | Agent frameworks, terminal-native AI products | Void black, emerald accent, terminal/agent aesthetic |

## Selection heuristics

- If the user names a system ID, read that file directly.
- If the user says "Linear-style", "Stripe-ish", "like Vercel", map that to the closest ID.
- If the brief is B2B SaaS but unspecified, prefer `linear`, `vercel`, `stripe`, `modern`, `enterprise`, or `shadcn` based on product type.
- If the brief is developer infrastructure, prefer `vercel`, `supabase`, `cursor`, `composio`, `voltagent`, or `shadcn`.
- If the brief is AI/agent-oriented, prefer `openai`, `claude`, `cursor`, `voltagent`, or `glassmorphism` depending on tone.
- If the brief is consumer/marketplace, prefer `airbnb`, `apple`, `figma`, or `notion`.
- If the brief is a data product or internal console, prefer `dashboard`, `enterprise`, `linear`, or `shadcn`.
- If the user asks for a visual style rather than a brand, use `minimal`, `modern`, `editorial`, `bento`, `brutalism`, `neobrutalism`, or `glassmorphism`.
- If none fit, ask the user to choose 2–3 options rather than reading all systems.
