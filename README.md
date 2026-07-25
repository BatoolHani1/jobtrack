# JobTrack

JobTrack is a job application tracker — a place to keep track of the jobs I've applied to, what stage each one is at (Applied, Interview, Offer, Rejected), and notes for each one.

This is my field training project, built with Next.js.

## Week 1 — App Shell & Static Pages

For week 1 the goal was just to get the basic app structure working: a navbar, a sidebar, and a few pages I can click between. There's no database or real data yet, everything is static/placeholder for now.

I also added a simple landing page at `/` on top of the plan, just to make the project feel a bit more structured — it links into the dashboard.

What I built:

- Set up the Next.js project (App Router) with Tailwind CSS
- A landing page at `/` with a hero section and a couple of features
- The navbar + sidebar only show up on the dashboard pages, not on the landing page
- Sidebar highlights whichever page you're currently on
- Sidebar collapses into a hamburger menu on mobile
- A purple color theme across the app
- 4 pages, no data yet:
  - `/` — landing page
  - `/dashboard` — placeholder stat cards
  - `/applications` — empty state, will list applications later
  - `/applications/new` — a form (not connected to anything yet)

### Pages

| Route               | What's there                          |
| ------------------- | ------------------------------------- |
| `/`                 | landing page, links to `/dashboard`   |
| `/dashboard`        | placeholder stats, nothing real yet   |
| `/applications`     | empty list + "Add Application" button |
| `/applications/new` | form UI only, doesn't save anything   |

"Log in" and "Get Started" both just link to `/dashboard` for now since there's no auth yet.

## Stack

- Next.js (App Router)
- React
- JavaScript (no TypeScript)
- Tailwind CSS

## Running it

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Folder structure

```
app/
  layout.js              # root layout, fonts + metadata
  page.js                # landing page
  (app)/
    layout.js             # navbar + sidebar shell for the dashboard pages
    dashboard/page.jsx
    applications/page.jsx
    applications/new/page.jsx
components/
  LayoutShell.jsx         # navbar + sidebar + page content
  Navbar.jsx
  Sidebar.jsx
  SidebarNav.jsx           # handles the active-link highlighting
  StatCard.jsx
```
