# RateMyANU

A full-stack web app for discovering and rating ANU courses.

## Tech Stack
- Frontend: Next.js + TailwindCSS + shadcn
- API: tRPC
- Auth + hosted DB: Supabase
- Database: PostgreSQL + Prisma ORM
- Search: Typesense

## Getting Started (Local Development)

### Prerequisites
- Node.js + npm
- Docker or Podman (for local Postgres via `start-database.sh`)

### Install
```bash
npm install
```

### Environment variables
This repo expects a `.env` file (not currently committed as an example file). At minimum you will need a `DATABASE_URL` so `start-database.sh` can parse the password/port/db name.

### Start the database (optional)
```bash
./start-database.sh
```

### Run migrations / generate Prisma client
```bash
npm run db:generate
```

### Start the dev server
```bash
npm run dev
```

## Useful Scripts
- `npm run dev` — start Next.js dev server
- `npm run build` / `npm start` — production build + start
- `npm run check` — lint + TypeScript check
- `npm run format:write` — format with Prettier
- `npm run db:push` — push Prisma schema to DB
- `npm run db:migrate` — deploy migrations
- `npm run db:studio` — open Prisma Studio

## Features
- Course browsing and ratings
- Full-text search powered by Typesense
- Authentication via Supabase

## Contributing
PRs welcome. Please run `npm run check` before opening a PR.
