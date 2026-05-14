# Roadmap

Each phase is a single, shippable slice of work. Phases build on each other.

---

## Phase 1 — Project Scaffold
- Initialise Next.js App Router project with TypeScript
- Configure Tailwind CSS and shadcn/ui
- Set up Prisma with a PostgreSQL connection
- Add Vitest and Playwright
- Deploy skeleton to Vercel

## Phase 2 — Database Schema (Core Entities)
- Define Prisma models: `Agent`, `Ailment`, `Therapy`, `Appointment`, `Staff`
- Run first migration
- Seed database with sample data for development

## Phase 3 — Agent Profiles
- Public-facing page listing registered agents
- Create / view an agent profile (name, species, primary ailment)
- Basic form validation

## Phase 4 — Ailments Catalogue
- Staff can create and manage ailments (name, description, severity)
- Ailments are associated with agents
- Ailments visible on agent profile

## Phase 5 — Therapies Catalogue
- Staff can create and manage therapies (name, description, duration)
- Therapies are linked to relevant ailments

## Phase 6 — Appointment Booking
- Agent (or staff on their behalf) books an appointment
- Select therapy, date/time, and assigned staff member
- Confirmation screen with appointment summary

## Phase 7 — Staff Dashboard
- Auth-protected area for staff (Auth.js login)
- Overview of today's appointments
- Quick actions: view agents, manage ailments/therapies

## Phase 8 — Appointment Management
- Staff can confirm, reschedule, or cancel appointments
- Agent receives status updates (on-screen; email later)

## Phase 9 — Polish & Accessibility
- Responsive layout across devices (Steve's browser requirement)
- Accessible components (keyboard nav, ARIA labels)
- Loading states, error boundaries, empty states

## Phase 10 — End-to-End Tests & Launch Prep
- Playwright tests for critical flows (booking, staff login, dashboard)
- Performance audit
- Production environment configuration and go-live
