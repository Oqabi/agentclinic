# Phase 1 — Project Scaffold: Plan

## Task Group 1 — Replace stub with Next.js App Router

1. Delete `src/index.ts` and the current `tsconfig.json`
2. Run `npx create-next-app@latest . --typescript --app --no-src-dir --import-alias "@/*"` (or equivalent manual setup)
3. Confirm `next dev` boots and `app/page.tsx` exists

## Task Group 2 — Configure Tailwind CSS and shadcn/ui

1. Verify Tailwind is included (create-next-app can scaffold it; otherwise add manually)
2. Run `npx shadcn@latest init` to configure the component library
3. Add at least one shadcn component (e.g. `Button`) to confirm the setup works

## Task Group 3 — Add Prisma with SQLite

1. `npm install prisma @prisma/client`
2. `npx prisma init --datasource-provider sqlite`
3. Define a minimal placeholder model in `prisma/schema.prisma` (e.g. `Agent` with only `id`)
4. Run `npx prisma migrate dev --name init` to create the SQLite database and verify no errors

## Task Group 4 — Add Vitest

1. `npm install -D vitest @vitejs/plugin-react`
2. Add `vitest.config.ts`
3. Write one placeholder test (`src/__tests__/smoke.test.ts`) that asserts `true`
4. Confirm `npx vitest run` passes

## Task Group 5 — Add Playwright

1. `npm install -D @playwright/test`
2. Run `npx playwright install --with-deps chromium`
3. Write one smoke test (`e2e/home.spec.ts`) that visits `/` and checks for the greeting text
4. Confirm `npx playwright test` passes against the running dev server

## Task Group 6 — Root route greeting

1. Update `app/page.tsx` to return a `<main>` with the text `"Welcome to AgentClinic"`
2. Verify with `curl http://localhost:3000` that the response body contains `AgentClinic`

## Task Group 7 — Minimal home page

1. Add a site-wide `<header>` in `app/layout.tsx` showing the clinic name
2. Expand `app/page.tsx` with:
   - An `<h1>` with the clinic name
   - The mission tagline: *"the world's first dedicated wellness platform for AI agents"*
   - A shadcn `<Button>` as a placeholder CTA (e.g. "Book a session")
3. Apply Tailwind utility classes for basic spacing, typography, and centering
4. Update the Playwright smoke test (`e2e/home.spec.ts`) to assert the `<h1>` and tagline are visible
5. Do a visual check at `http://localhost:3000` — page should look coherent, not unstyled

## Task Group 8 — Cleanup and PR

1. Remove any leftover stub files (`src/`, old `tsconfig.json` if replaced, `.DS_Store`)
2. Update `README.md` with local setup instructions (`npm install`, `npm run dev`)
3. Commit all changes and open a PR against `master`
