# Phase 1 — Project Scaffold: Requirements

## Scope

Bootstrap the AgentClinic repository from its current bare TypeScript stub into a
fully wired Next.js App Router project that every subsequent phase can build on.

## What is in scope

- Replace the stub with a Next.js 14+ App Router project in TypeScript
- Configure Tailwind CSS and shadcn/ui (component library baseline)
- Add Prisma wired to **SQLite** for local development
- Add Vitest (unit testing) and Playwright (end-to-end testing) with placeholder tests
- A minimal styled home page at `/` with the clinic name, mission tagline, and a shadcn/ui Button component

## What is out of scope

- Vercel deployment (deferred — local dev is the acceptance environment for this phase)
- PostgreSQL / production database configuration (SQLite only for now)
- Any real feature pages, models, or business logic (that starts in Phase 2+)
- Auth setup (Phase 7)

## Key decisions

| Decision | Choice | Reason |
|---|---|---|
| Deployment target | Local only | No infrastructure dependency; Vercel wiring deferred |
| Database | Prisma + SQLite | Zero setup, works anywhere; PostgreSQL config added later |
| Validation method | `curl localhost:3000` returns greeting | Fast, simple, human-verifiable without a browser |

## Context

AgentClinic is a wellness platform for AI agents (see `specs/mission.md`). The tech
stack is Next.js App Router + TypeScript + Tailwind + shadcn/ui + Prisma (see
`specs/tech-stack.md`). This scaffold phase establishes the skeleton every future
phase adds to — getting it right means zero churn when Phase 2 introduces real models.
