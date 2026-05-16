# Phase 1 — Project Scaffold: Validation

## Definition of done

Phase 1 is complete and the branch is ready to merge when **all** of the following
pass in a clean checkout (i.e. after `npm install`, no other setup).

---

## 1. Dev server boots

```
npm run dev
```

Expected: server starts on port 3000 with no errors in the terminal.

---

## 2. Home page check (primary validation gate)

With the dev server running:

```
curl http://localhost:3000
```

Expected: the response body contains both `AgentClinic` and `wellness platform`.

This is the human-verifiable acceptance check for this phase. A visual inspection
at `http://localhost:3000` should show a styled page — clinic name as a heading,
mission tagline, and a Button component — not unstyled HTML.

---

## 3. Prisma schema is valid

```
npx prisma validate
```

Expected: exits 0 with no errors.

---

## 4. TypeScript compiles

```
npx tsc --noEmit
```

Expected: exits 0 with no type errors.

---

## 5. Vitest passes

```
npx vitest run
```

Expected: all tests pass (at minimum the smoke test).

---

## Out of scope for this phase

- Playwright tests are written but may require the dev server running separately;
  they do not block merge if infra setup is inconvenient in CI at this stage.
- No Vercel deployment URL is required.
- No real data or database rows need to exist.
