# AGENTS

## Overview

This repository is `@ehubbell/html`, an open-source React package that wraps HTML primitives with a small Tailwind rollup API.

The main public surface is a set of explicit HTML component exports from `src/index.tsx`. Each primitive accepts the normal `react-html-props` attributes for that element plus:

- `name`, which is rendered as `data-name`
- `tailwind`, an object of Tailwind class groups
- `className`, which is included in the final class string

The library rolls `className` and allowed `tailwind` entries into one `className` string. Tailwind keys are filtered against the key list in `src/utils/keys.tsx`.

## Core Files

- `src/index.tsx` exports the HTML primitives.
- `src/utils/functions.tsx` contains `filterProps`, `formatProps`, and `formatClassNames`.
- `src/utils/keys.tsx` defines the allowed Tailwind prop keys used for filtering and class rollup.
- `types/tailwind.d.ts` defines the public Tailwind prop type surface.
- `types/library.d.ts` defines the shared `LibProps` contract.
- `README.md` documents the user-facing usage contract and should stay aligned with API changes.

## Development Guidance

- Preserve the simple, explicit primitive pattern unless the task specifically asks for generation or a broader refactor.
- Keep `types/tailwind.d.ts` and `src/utils/keys.tsx` aligned when adding, removing, or renaming Tailwind keys.
- Use the configured `src` and `types` path aliases instead of long relative imports when matching existing code.
- Treat existing uncommitted changes as user work. Do not revert or overwrite unrelated local changes.
- Keep public API changes intentional. New helpers exported from `src/utils/functions.tsx` are re-exported through `src/index.tsx`.
- Prefer focused tests around prop filtering, class rollup, and primitive rendering behavior when changing runtime logic.
- Keep `filterProps`, `formatProps`, and `formatClassNames` dependency-free and hot-path friendly.
- Prefer module-scope lookup structures and single-pass loops for prop filtering and class rollup code.
- Preserve the clean helper names. Do not add legacy helper aliases unless explicitly requested.
- When searching, use `rg` with excludes such as `-g '!dist' -g '!.yalc' -g '!node_modules'`.

## Off Limits

- Do not edit this `AGENTS.md` file unless the user explicitly instructs you to do so or confirms the edit in the current conversation.
- Do not read, search through, or edit `dist/`; it is ignored build output.
- Do not read, search through, or edit `.yalc/` or yalc-managed archive/cache content.
- Do not inspect yalc internals unless the user explicitly asks to debug yalc itself.
- Do not touch `yalc.lock` unless the task is specifically about package or link metadata.

## Commands

- `npm run lint` runs ESLint over `src`.
- `npm test -- --runInBand` runs the focused Jest suite.
- `npm run build` builds the library with Vite and runs declaration bundling through the Vite plugin setup.
- `npm run dev` runs a development watch build intended for yalc-linked consumer projects.

## Known Notes

- The README is the best quick reference for intended consumer usage.
- The package peers `react` and `react-dom`, and depends on `react-html-props` for element prop types.
