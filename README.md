# Devesh Maurya — Portfolio

Personal portfolio for recruiters, founders, and collaborators. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

Live site: [devesh-maurya-portfolio.vercel.app](https://devesh-maurya-portfolio.vercel.app/)

## Highlights

- Outcome-driven hero with recruiter CTAs
- Filterable Selected Work + deep case studies (`/work/[slug]`)
- Recruiter mode panel (availability, stack, top projects, resume links)
- **Ask my portfolio** chat (NVIDIA NIM) with a live knowledge base from site data
- Open source spotlight (AI Assistant, create-fullstack-app, Media Bunch, Dartix)
- Blog / writing section
- Skills by usage frequency (Iconify / Simple Icons brand marks)
- Command palette (`Ctrl` / `Cmd` + `K`)
- Testimonials, dark mode, SEO (JSON-LD, sitemap, robots, manifest)

## Tech stack

| Area | Stack |
| --- | --- |
| App | Next.js 15 (App Router), React 19, TypeScript |
| UI | Tailwind CSS, Framer Motion, Radix UI, Lucide, [Iconify](https://iconify.design) + [Simple Icons](https://simpleicons.org) (same pattern as AI Assistant) |
| Themes | `next-themes` |
| AI chat | NVIDIA NIM (`/api/ask`) |

## Getting started

```bash
npm install
cp .env.example .env.local   # if present; or create .env.local manually
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

### Environment

```bash
NVIDIA_API_KEY=nvapi-...
NVIDIA_MODEL=meta/llama-3.1-8b-instruct
```

Get a key at [build.nvidia.com](https://build.nvidia.com). Without `NVIDIA_API_KEY`, the rest of the site works; Ask my portfolio shows a configure message.

## Project structure

```text
src/
  app/                  # Routes: home, blog, work/[slug], api/ask, SEO files
  components/
    sections/           # Hero, work, skills, open-source, writing, …
    general/            # Ask FAB, recruiter mode, theme, command palette
    data-display/       # Cards, tags, tech/project details
    layout/             # Header, footer, container
  lib/
    data.tsx            # Projects, experience, skills, open source
    portfolio-knowledge.ts  # System prompt facts for Ask my portfolio
    recruiter.ts        # Recruiter panel profile
    skill-icons.ts      # Iconify simple-icons skill mappings
    seo.tsx             # Metadata helpers + JSON-LD
public/                 # Images, logos, covers
```

## Case studies & content

Featured work is defined in `src/lib/data.tsx` (role, overview, FE/BE layers, modules, APIs). Notable projects include Lands Authority, ThriveOn (Azure OpenAI), Aicade, Lamima, and YoChatGPT.

Skills UI uses `@iconify/react` with `simple-icons:…` IDs and brand colors — the same Iconify approach as the AI Assistant `@ai-assistant/icons` package. Only local fallbacks that Simple Icons lacks are kept under `public/images/logos/` (e.g. Zustand).

Ask my portfolio answers from `buildPortfolioKnowledge()` — keep `data.tsx` / blog data accurate so the chat stays truthful.

## Professional snapshot

Full Stack Engineer (Mumbai) — web, mobile, and AI product work.

- **Frontend:** React, Next.js, TypeScript, Tailwind CSS, Zustand, TanStack Query
- **Backend:** Node.js, Express, FastAPI, NestJS, GraphQL, Prisma
- **Data:** PostgreSQL, MongoDB, Redis
- **Mobile:** React Native, Expo
- **AI:** Azure OpenAI, LLM / API integrations in product flows

## Contact

- Email: [deveshmaurya1996@gmail.com](mailto:deveshmaurya1996@gmail.com)
- LinkedIn: [linkedin.com/in/deveshmaurya1996](https://www.linkedin.com/in/deveshmaurya1996)
- GitHub: [github.com/deveshmaurya1996](https://github.com/deveshmaurya1996)
- Studio: [dartix.live](https://www.dartix.live/)
- Phone / WhatsApp: +91-9670551347

## License

Personal portfolio use. Contact me before reusing substantial parts of this project.
