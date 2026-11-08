# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
nvm use          # Node 22 (see .nvmrc)
npm run dev      # Start local dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint (flat config in eslint.config.mjs)
npm run format   # Format source files with Prettier
```

There are no tests in this project. Lint and build must both pass before committing.

## Environment Variables

Copy `.env.local.example` to `.env.local`. Nothing here is a secret.

| Variable | Purpose |
|---|---|
| `RESUME_DOC_ID` | Google Doc ID of the current resume. `/resume.pdf` fetches its PDF export. Unset → the committed fallback PDF is served. |
| `NEXT_PUBLIC_SITE_URL` | Public origin used for `metadataBase`, canonical URL and Open Graph tags. Defaults to the Vercel URL. |

## Architecture

Single-page Next.js 16 (App Router, React 19) portfolio for Oscar Nolen, deployed on Vercel. Tailwind 3 with a custom sky-blue `primary` scale, class-based dark mode via `next-themes`, framer-motion for scroll-in animation.

**Content layer: `src/content/`.** All copy lives in typed modules, none in components.
- `types.ts` — `Profile`, `Experience`, `Project`, `SkillGroup`, `Education`, `Research`.
- `profile.ts` — name, headline, eyebrow, contact links, About paragraphs, the facts sidebar, and per-section titles/ledes.
- `experience.ts` — roles; the Ally entry has workstream groups (`items[].heading`), one with `status: 'in-development'`.
- `projects.ts` — `featured: true` items render as case studies (Problem/Approach/Result); the rest are compact repo cards. `kind: 'work'` projects have no `repoUrl` by design.
- `skills.ts`, `education.ts` — skill groups (resume categories + Rust) and the VAE research card.

The source of truth for every claim is the resume (Google Doc "oscar-nolen-resume (2026)") or a repo README. Don't add metrics, internal system names or outcomes that aren't in those. Avoid filler words (seamless, powerful, robust, leverage, cutting-edge, passionate about).

**Page composition.** `src/app/page.tsx` is a server component that stacks `src/components/sections/{Hero,About,Experience,FeaturedWork,MoreProjects,Skills,Research,Contact}` inside `MotionRoot` (LazyMotion + `MotionConfig reducedMotion="user"`). Sections are client components because they use `whileInView`. `SectionHeading` renders the numbered mono eyebrow; section ids are `about`, `experience`, `work`, `more-work`, `skills`, `research`, `contact` and the Navbar's items must match them.

**Shared pieces.** `src/components/{Badge,StackChips,CaseStudyCard,RepoCard,ScrollChrome}.tsx`; `src/components/layout/{Navbar,Footer}.tsx` (Navbar has the mobile menu and IntersectionObserver active-section state); motion variants in `src/lib/motion.ts`; site URL in `src/lib/site.ts`.

**Resume route.** `src/app/resume.pdf/route.ts` (Node runtime) fetches `https://docs.google.com/document/d/$RESUME_DOC_ID/export?format=pdf` with a one-hour revalidate and streams it inline. Any failure, or a private Doc, redirects to `public/docs/resume-oscarnolen-<date>.pdf`. When replacing the fallback, use a new dated filename and update `FALLBACK_PATH`.

**Metadata.** `src/app/layout.tsx` sets title, description (= hero headline), canonical, Open Graph and Twitter tags from `src/content/profile.ts`; `opengraph-image.tsx` / `twitter-image.tsx` generate the share image with `next/og`. Fonts are Inter (`--font-sans`) and JetBrains Mono (`--font-mono`) via `next/font`.

**Styling conventions.** Mono font only for eyebrows, dates, chips and badges. Alternating section backgrounds are `bg-gray-50 dark:bg-slate-800/50`. Cards are `rounded-2xl border ... bg-white dark:bg-slate-900`. Global focus ring and `scroll-padding-top` live in `globals.css`.

There is no chatbot or API route anymore; the previous Lambda-backed chat was removed in 11/2026.
