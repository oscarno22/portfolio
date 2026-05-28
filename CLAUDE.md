# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm run format   # Format source files with Prettier
```

There are no tests in this project.

## Environment Variables

The following env vars are required at runtime (`.env.local` for local dev):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_CHAT_API_URL` | AWS API Gateway URL for the chat endpoint (used client-side) |
| `AWS_REGION` | Region for Lambda invocation fallback path |
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` | Credentials for the Next.js API route fallback |
| `CHAT_LAMBDA_NAME` | Lambda function name for the fallback Next.js route |

## Architecture

This is a single-page Next.js 15 (App Router) portfolio site with a dark-mode toggle and an AI chatbot.

**Single page layout** — all sections (Hero, About, Experience, Skills, Projects, Contact) live in `src/app/page.tsx` as a vertically scrolled SPA. The page is a `'use client'` component using Framer Motion for scroll-triggered animations and a spring-based scroll progress bar.

**Routing & layout** — `src/app/layout.tsx` wraps everything in `ThemeProvider` (next-themes, class-based dark mode) and the `Navbar`. The Navbar is desktop-only nav links plus a light/dark toggle; it has no mobile hamburger menu.

**Chatbot — two-tier architecture**:
1. `src/components/ChatBot.tsx` calls the AWS API Gateway URL (`NEXT_PUBLIC_CHAT_API_URL`) directly from the browser. This is the live production path.
2. `src/app/api/chat/route.ts` is a Next.js API route that proxies to the same Lambda via the AWS SDK. This is a fallback/alternative path, not used by the current client code.
3. `src/app/api/chat/lambda/lambda_function.py` — the deployed Lambda handler. Uses the OpenAI Agents SDK (`agents` package) with a `Runner` to run an `Agent` configured with a detailed system prompt about Oscar's background.
4. `src/app/api/chat/lambda/index.ts` — an older TypeScript Lambda handler (direct OpenAI SDK, `gpt-3.5-turbo`). Superseded by the Python handler.

**Styling** — Tailwind CSS with a custom `primary` color scale (sky blue, `primary-600 = #0284c7`). Dark mode is `darkMode: 'class'`. No CSS Modules or styled-components.

**Static content** — all experience, project, and skill data is hardcoded as arrays directly in `src/app/page.tsx`. There is no CMS or data layer.

**Node version** — pinned in `.nvmrc`.
