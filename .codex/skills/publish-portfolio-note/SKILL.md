---
name: publish-portfolio-note
description: Publish a plain-text writing draft as a portfolio note in the venkxycodes/portfolio repository. Use when the user asks to publish, add, or push a writing draft to portfolio notes.
---

# Publish a portfolio note

Convert the user's plain-text draft into the portfolio's existing `Entry` format and push it to the repository.

## Non-negotiable content rule

Preserve the user's writing exactly. Do not rewrite, edit, correct, summarize, improve, reorder, or remove words. The only allowed transformations are:

- Extracting metadata explicitly provided by the user.
- Converting the draft into a TypeScript string array.
- Escaping characters required by TypeScript syntax.
- Adding the required `Entry` fields.

If the title, description, date, or slug is missing, ask for it. Do not invent missing metadata.

## Repository format

The notes registry is `src/data/notes.ts`. Each note has this shape:

```ts
{
  slug: string,
  title: string,
  description: string,
  date: string,
  body: string[],
}
```

The `body` array contains paragraphs or Markdown-like lines. Preserve blank lines and Markdown markers where possible. Follow the formatting style already present in `src/data/notes.ts`.

## Workflow

1. Read the draft file or draft text supplied by the user.
2. Read the current `src/data/notes.ts` before editing.
3. Confirm or obtain title, description, date, and slug if any are absent.
4. Check that the slug does not already exist.
5. Add exactly one note to the notes array. Do not modify existing notes.
6. Run the repository's existing validation/build command: `yarn build`.
7. If validation passes, commit and push to the configured default branch.
8. Report the created slug, commit, and portfolio URL if known.

Never publish if the build fails, the slug already exists, or metadata is ambiguous. Never modify the draft file unless explicitly asked.
