# Agent notes — Aramway frontend

This is the public marketing site (Next.js App Router). It talks to `AramwayBackend`
for all dynamic data (blogs, careers, contact, consultations, newsletter) and to
`AramwayDashboard` only indirectly (the dashboard is the admin UI for the same backend).

## Commands

- `npm run dev` — start the dev server (port 3000; falls back to 3001+ if taken)
- `npm run build` — production build
- `npm run start` — run a production build
- `npm run lint` — ESLint

## Environment

- `BACKEND_URL` — base URL of `AramwayBackend`'s API (see `.env.example`). Defaults to
  `http://localhost:4000` locally; production points at the deployed backend.
- `FRONTEND_URL` in **AramwayBackend's** `.env` points back at this site's deployed URL
  (`https://aramway.com`) — outbound emails load the logo and build links from it, so
  this site's `public/images/logo-footer.png` is effectively also the backend's email
  logo. Changing/moving that file affects emails too.

## Conventions

- Brand name renders as `ARAMWAY GROUP` (or `ARAMWAY` where only the short form fits)
  in all user-facing copy — page titles, meta descriptions, alt text, section headings.
  Not applied to comments, URLs, emails, package/service identifiers, or User-Agent
  strings.
- The consultation booking form (`components/ConsultationBooking.tsx`) collects
  **Company**, not Country — there is no country field in `Consultation` anywhere
  (frontend, `AramwayBackend`, or `AramwayDashboard`). Don't reintroduce one without
  being asked; don't remove Company either.

## Newsletter popup — do not disable

`components/NewsletterPopup.tsx` is mounted globally in `app/layout.tsx`. It opens once,
10 seconds after a visitor without the `aramway_newsletter_subscribed` localStorage key
loads the page.

**The key is only ever written on a successful subscribe (in `handleSubmit`'s `finally`
block).** Opening the popup or dismissing it (X button, outside click, Escape) must
*never* write that key. This is intentional and was fixed once already after the
opposite behavior (setting it on open) silently disabled the popup forever for anyone
who saw it once without converting.

When touching this file, keep all of the following true:
- The popup keeps re-appearing, once per fresh visit, for anyone who hasn't
  subscribed — indefinitely, not just once.
- It stops appearing only after a real successful subscribe.
- It stays mounted in `app/layout.tsx` on every page.
- No env var, feature flag, comment-out, or early `return null` disables it.

If asked to change the popup's *behavior* (timing, copy, design), that's fine — just
don't remove or weaken the "keeps showing until subscribed" guarantee above.
