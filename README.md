# JobTrack

JobTrack is a job application tracker. It's a place to keep track of the jobs I've applied to, what stage each one is at (Applied, Interview, Offer, Rejected), and notes for each one.

This is my field training project at FiberTech Jo, built with Next.js over 6 weeks.

## Stack

- Next.js 16 (App Router)
- React 19
- JavaScript, no TypeScript
- Tailwind CSS 4
- Prisma ORM with SQLite

## Running it

```bash
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

The database is a single SQLite file at `prisma/dev.db`. It isn't committed to the repo, since the migration files in `prisma/migrations/` recreate it from scratch and the seed script fills it with sample data.

To browse the data in a GUI:

```bash
npx prisma studio
```

## Progress

### Week 1: foundations and project setup

The goal for week 1 was getting the app structure working: a navbar, a sidebar, and a few pages I can click between. No database or real data yet, everything is static or placeholder.

I also added a landing page at `/` on top of the plan, just to make the project feel a bit more finished. It links into the dashboard.

What I built:

- Set up the Next.js project (App Router) with Tailwind CSS
- A landing page at `/` with a hero section and a couple of features
- The navbar and sidebar only show up on the dashboard pages, not on the landing page
- Sidebar highlights whichever page you're currently on
- Sidebar collapses into a hamburger menu on mobile
- A purple color theme across the app

Pages so far:

| Route               | What's there                          |
| ------------------- | ------------------------------------- |
| `/`                 | landing page, links to `/dashboard`   |
| `/dashboard`        | placeholder stats, nothing real yet   |
| `/applications`     | empty list + "Add Application" button |
| `/applications/new` | form UI only, doesn't save anything   |

"Log in" and "Get Started" both just link to `/dashboard` for now since there's no auth yet.

Tagged as `v1-week1`.

### Week 2: database and data modeling

Week 2 was about designing the schema and getting a real database connected. The pages aren't wired up to it yet, that comes in week 3, so everything this week was done through scripts.

What I built:

- Set up Prisma with SQLite as the local database
- Designed the schema: User, Application and Interview
- Ran the first migration, which created `prisma/dev.db` and the three tables
- Wrote a seed script with 7 sample applications and 7 interviews across all four statuses
- Wrote a scratch script with a few queries to confirm reads and writes actually work

One thing I ran into: I pinned Prisma to version 6 on purpose. Version 7's client generator only outputs TypeScript files, and this project is JavaScript only. `prisma init` also downloads its template at runtime, so even with version 6 installed it scaffolded a version 7 style config. I fixed the generator provider and deleted the config file it created.

Tagged as `v1-week2`.

## Data model

JobTrack stores job applications for a user, and each application can have interviews attached to it.

```mermaid
erDiagram
    User ||--o{ Application : "has many"
    Application ||--o{ Interview : "has many"

    User {
        string id PK
        string email UK
        string name "optional"
    }
    Application {
        string id PK
        string title
        string company
        string status
        datetime appliedDate
        string notes "optional"
        string link "optional"
        datetime createdAt
        datetime updatedAt
        string userId FK
    }
    Interview {
        string id PK
        datetime date
        string type
        string applicationId FK
    }
```

There are two one to many relationships here. One user has many applications, and one application has many interviews. In both cases the relationship is stored as a foreign key on the child table, so `Application.userId` points back to a user and `Interview.applicationId` points back to an application. Both use `onDelete: Cascade`, which means deleting an application also deletes the interviews that belong to it.

A few decisions worth writing down:

- IDs are cuid strings rather than auto incrementing numbers, so they don't leak how many records exist and don't need converting from the URL
- `appliedDate` is the date I actually applied, which is different from `createdAt`, the date the row was saved
- `status` is a plain string instead of an enum because SQLite doesn't support enums. The values used in the app are Applied, Interview, Offer and Rejected
- There are indexes on both foreign keys, since looking up children by their parent is the query that runs most often

## Folder structure

```
app/
  layout.js               root layout, fonts + metadata
  page.js                 landing page
  globals.css
  (app)/
    layout.js             navbar + sidebar shell for the dashboard pages
    dashboard/page.jsx
    applications/page.jsx
    applications/new/page.jsx
components/
  LayoutShell.jsx         navbar + sidebar + page content
  Navbar.jsx
  Sidebar.jsx
  SidebarNav.jsx          handles the active link highlighting
  StatCard.jsx
lib/
  prisma.js               single Prisma client instance, reused across hot reloads
prisma/
  schema.prisma           the data model
  seed.js                 sample data
  test-queries.js         scratch script to check the queries work
  migrations/             generated SQL, committed so the database can be rebuilt
```
