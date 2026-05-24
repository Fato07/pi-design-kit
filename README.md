# pi-design-kit

A lightweight Pi package for Open Design-style artifact work without running a separate web app or daemon.

It includes:

- Pi skills for generating UI artifacts, reviewing UI/design work, creating `DESIGN.md` files, and planning/reviewing UX flows.
- Prompt-template slash commands: `/design`, `/design-review`, `/design-md`, `/design-systems`, plus `/ux*` commands.
- Utility extension command: `/design-kit` for listing systems, copying a `DESIGN.md`, or starting a design prompt.
- Curated `DESIGN.md` references from [`VoltAgent/awesome-design-md`](https://github.com/VoltAgent/awesome-design-md) and [`nexu-io/open-design`](https://github.com/nexu-io/open-design).

## Install

Global install from GitHub:

```bash
pi install git:github.com/Fato07/pi-design-kit
```

Project-local install:

```bash
pi install -l git:github.com/Fato07/pi-design-kit
```

From a local checkout:

```bash
pi install /Users/fathindosunmu/DEV/MyProjects/pi-design-kit
```

## Usage

Prompt-template commands from the package show up as primitive slash commands:

```text
/design linear make a responsive analytics dashboard for a B2B SaaS
/design stripe create a pricing page for an API product
/design-review review app/page.tsx against the Vercel design system
/design-md create a DESIGN.md for our brand from the current app styles
/design-systems
```

UX prompt-template commands:

```text
/ux design onboarding for connecting Gmail
/ux-review app/dashboard/page.tsx
/ux-flow approval workflow for executing AI actions
/ux-copy rewrite empty states for no integrations connected
/ux-states ingestion pipeline dashboard
/ux-a11y review this settings page
```

The utility extension command is:

```text
/design-kit list
/design-kit copy linear
/design-kit copy stripe docs/STRIPE-DESIGN.md
/design-kit path vercel
/design-kit use linear make a dashboard for our revenue ops team
```

Skills are available with Pi's standard skill command prefix:

```text
/skill:design-artifact make a Linear-style dashboard
/skill:design-review review this landing page for hierarchy and accessibility
/skill:design-md draft a DESIGN.md for this product
/skill:ux-design map onboarding states for connecting Gmail
/skill:ux-review audit this flow for missing states
```

## Included design systems

- `airbnb`
- `apple`
- `bento`
- `brutalism`
- `claude`
- `composio`
- `cursor`
- `dashboard`
- `editorial`
- `enterprise`
- `figma`
- `glassmorphism`
- `linear`
- `material`
- `minimal`
- `modern`
- `neobrutalism`
- `notion`
- `openai`
- `shadcn`
- `stripe`
- `supabase`
- `vercel`
- `voltagent`

## Verify

```bash
node scripts/verify.mjs
```

A stronger integration smoke test is to run Pi RPC `get_commands` after installing and confirm `/design*`, `/ux*`, `/design-kit`, and the skill commands are present.

## License and attribution

Package scaffolding and original skills are MIT licensed.

Bundled third-party `DESIGN.md` files retain their upstream licenses. See `THIRD_PARTY.md`, `third_party/awesome-design-md/LICENSE`, and `third_party/open-design/LICENSE`.
