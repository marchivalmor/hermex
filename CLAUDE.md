# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Hermex is a vehicle rental ("locadora de veículos") system. See `PRD.md` for the (Portuguese) product/stack spec. It is a pnpm workspace monorepo (`apps/*`) with two apps:

- `apps/api` — NestJS 12 + GraphQL (Apollo, code-first) + Prisma 7 on Postgres 16
- `apps/web` — Next.js 16 (App Router) + Tailwind 4 + next-auth v5 beta

## Commands

Run from the repo root; the root `package.json` wraps `pnpm --filter`:

- `pnpm db:up` / `pnpm db:down` — start/stop Postgres via `docker-compose.yaml` (named volume `hermex-pgdata`)
- `pnpm db:migrate` / `db:generate` / `db:studio` — Prisma migrate dev / generate client / studio
- `pnpm dev:api` (port 3001, GraphQL at `/graphql`) / `pnpm dev:web` (port 3000)
- `pnpm build:api` / `build:web`, `pnpm lint:api` (oxlint, type-aware) / `lint:web` (eslint)
- `pnpm test:api` (vitest). Single test: `pnpm --filter api vitest run src/path/to/file.spec.ts` or `-t "name"`. E2E: `pnpm --filter api test:e2e` (`test/*.e2e-spec.ts`, separate vitest config).

Env: copy `.env.example` (root, docker), `apps/api/.env.example` (`PORT`, `DATABASE_URL`), `apps/web/.env.example` (`AUTH_SECRET`, `NEXT_PUBLIC_API_URL`). API CORS origin is `WEB_ORIGIN` (default `http://localhost:3000`).

## Conventions

- **Never hand-edit `package.json` to add, remove or change dependencies.** Always go through pnpm: `pnpm --filter api add <pkg>` / `pnpm --filter web add <pkg>` (`-D` for dev deps), `pnpm --filter <app> remove <pkg>`. This keeps `pnpm-lock.yaml` in sync. Editing `package.json` scripts by hand is fine.
- **Create API modules (domains) with the Nest CLI, not by hand.** From the repo root:

  ```
  pnpm --filter api exec nest g resource <name> --type graphql-code-first --no-spec
  ```

  This scaffolds `src/<name>/` with module, resolver, service, `dto/` inputs and `entities/`, and registers the module in `app.module.ts`. Use `--dry-run` first to preview. For single pieces use the narrower schematics (`nest g module|resolver|service <name>`). The schematics emit ESM-correct `.js` import extensions.

## Architecture notes

- **API is native ESM** (`"type": "module"`): relative imports must use the `.js` extension (e.g. `import { X } from './x.js'`), even for `.ts` sources.
- **Prisma 7 with driver adapter**: `PrismaService` extends the generated `PrismaClient` and passes `PrismaPg` adapter built from `DATABASE_URL`. The client is generated into `apps/api/src/generated/prisma` (gitignored-style output; regenerate with `pnpm db:generate` after editing `prisma/schema.prisma`). Datasource URL lives in `apps/api/prisma.config.ts`, not in the schema. The schema currently has no models.
- **GraphQL is code-first**: `autoSchemaFile: true`, `sortSchema: true` in `app.module.ts`; add resolvers to module `providers`. `ConfigModule` is global.
- **Web** follows atomic design under `apps/web/src/components/{atoms,molecules,organisms,templates}`. Each level has an `index.ts` barrel; every component ships a co-located `*.stories.tsx`. Auth is wired via `src/auth.ts` and `src/app/api/auth/[...nextauth]/route.ts`.
- **Design tokens** live in the Tailwind 4 `@theme` block of `apps/web/src/app/globals.css`, mirrored from the Figma library (colors `brand-*`/`neutral-*`, `text-body-*`/`text-heading-*`, `shadow-elevation-2`). Figma's spacing scale maps onto Tailwind's defaults (4px → `1`, 8px → `2`, 12px → `3`, 16px → `4`, 32px → `8`) and `border-xs` → `rounded-sm`. Use the tokens, not raw hex/px.
- **Storybook 10** (`@storybook/nextjs-vite`): `pnpm storybook` (port 6006) / `pnpm build:storybook`. Tailwind runs through `@tailwindcss/vite` wired in `.storybook/main.ts`; `next/font` doesn't run there, so `.storybook/preview-head.html` loads Inter, Exo 2 and Material Symbols from Google Fonts.
- `apps/web/AGENTS.md`: this Next.js version has breaking changes — read the relevant guide in `apps/web/node_modules/next/dist/docs/` before writing Next code.
- `apps/api/AGENTS.md`: NestJS Observe telemetry is not yet registered in `app.module.ts`.
