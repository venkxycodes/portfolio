# Portfolio-

Venkat's personal website: notes, projects, and small observations.

## Run locally

```bash
yarn
yarn dev
```

Build for production with `yarn build`.

Editable content is separated by page in `src/data/`: update `site.ts`, `experiences.ts`, `notes.ts`, `misc.ts`, or `projects.ts` without editing the UI components.

## Portfolio UI

Copy `.env.example` to `.env.local` and select the interface:

```env
VITE_PORTFOLIO_UI=terminal
```

Use `classic` for the original UI. An unset variable defaults to classic.
Both interfaces use the same content and routes (`/`, `/work`, `/projects`, `/notes`, `/misc`, and article/experience details). There is no `/v2` route or in-page UI switch.

Restart the dev server after changing the variable. For deployment, set `VITE_PORTFOLIO_UI` in the build environment and rebuild: Vite embeds the selection at build time.

## Codex skills

Repository-local skills live under `.codex/skills/`.

- `write-like-venkat` — writes and rewrites prose in Venkat's natural first-principles, conversational voice.
- `publish-portfolio-note` — publishes an existing draft to portfolio notes without changing its words.
