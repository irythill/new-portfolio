# dxt.tsx — Y2K Portfolio 2026

A Next.js portfolio with a Y2K aesthetic, inspired by late-90s and early-2000s digital design (PlayStation One ads, wireframe 3D, candy colors). Built for job hunting with a memorable, distinctive look.

## What is this?

- **Brand**: `dxt.tsx` — Henrique Souza
- **Purpose**: Portfolio website showcasing projects, tech stack, and contact
- **Aesthetic**: Y2K (Year 2000) — purple-centric, wireframe graphics, Orbitron typography, gradients, starbursts
- **Reference**: [D E A T H K O](https://deathko-bmipfriae-dxthko.vercel.app/) for structure inspiration

## Stack

| Tool | Purpose |
|------|---------|
| Next.js 16 | React framework, App Router |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling, Y2K color tokens |
| Framer Motion | Animations (scroll reveal, hovers) |
| Biome | Linter & formatter |
| bun | Package manager |

## Project structure

```
portfolio-2026/
├── app/
│   ├── layout.tsx      # Root layout, fonts, metadata
│   ├── page.tsx        # Single-page sections
│   └── globals.css     # Tailwind + Y2K color variables
├── components/         # Nav, Hero, Bio, TechStack, Projects, Contact, Footer
├── public/svg/         # Y2K graphics (torus, starbursts, etc.)
├── PHASES.md           # Implementation roadmap (Phases 2–5)
└── README.md
```

## Design tokens

**Colors** (purple-centric Y2K palette):
- `#0D0A1A` — background
- `#9E7AFF` — accent
- `#8A2CE2` — electric purple
- `#D2A8FF` — lavender
- `#E06B88` — cyber pink
- `#E8E6F0` — text

**Typography**:
- **Orbitron** — headlines, brand
- **Share Tech Mono** — tech stack, code vibes
- **Exo 2** — body text

## Getting started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Phases

Implementation is organized in phases. See [PHASES.md](./PHASES.md) for the full roadmap.

- **Phase 1**: Foundation ✓
- **Phase 2**: Structure & Content
- **Phase 3**: Y2K Aesthetics & SVGs
- **Phase 4**: Animations
- **Phase 5**: Polish

## Links

- [Original portfolio](../portfolio/) — 2022 HTML/CSS/JS version
- [Tailwind + Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Bits](https://reactbits.dev/) — animation inspiration
