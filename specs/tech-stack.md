# Tech Stack

## Language

**TypeScript** throughout — frontend, backend, and scripts.

## Framework: Next.js (App Router)

**Next.js** is the recommended framework. It delivers:

- Server-side rendering and static generation out of the box (Steve's modern browser requirement)
- Full-stack TypeScript in a single project — API routes and UI co-located
- A strong ecosystem matching Mary's "popular stack" requirement
- A natural structure for a dashboard with auth, data fetching, and layouts

## UI

- **Tailwind CSS** — utility-first styling, fast to iterate, pairs well with component libraries
- **shadcn/ui** — accessible, composable components built on Radix UI; ideal for the staff dashboard

## Database

- **SQLite** — lightweight, file-based database; zero infrastructure required, ideal for local development and demos
- **PostgreSQL** — reliable relational store for production deployments
- **Prisma** — type-safe ORM that integrates cleanly with TypeScript and Next.js; supports both SQLite and PostgreSQL

## Auth

- **NextAuth.js (Auth.js)** — handles staff login; supports multiple providers with minimal setup

## Testing

- **Vitest** — fast unit and integration testing aligned with the TypeScript/ESM setup
- **Playwright** — end-to-end browser testing for critical user flows

## Deployment target

- **Vercel** (primary) — zero-config deployment for Next.js, preview environments per PR
- PostgreSQL hosted on **Supabase** or **Railway**

## Summary

| Layer | Choice |
|---|---|
| Language | TypeScript |
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS + shadcn/ui |
| ORM | Prisma |
| Database (local) | SQLite |
| Database (prod) | PostgreSQL |
| Auth | Auth.js (NextAuth) |
| Testing | Vitest + Playwright |
| Hosting | Vercel + Supabase/Railway |
