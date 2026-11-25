# CLAUDE.md

Personal portfolio for Alisa (Alice) Gayduchkova, served at alicegayduchkova.github.io via GitHub Pages.

## Read first
- `docs/BUILD_PROMPT.md` is the brief for the scroll-driven redesign.
- `content/copy.md` is the source of truth for all text. Don't invent facts, numbers, or dates.

## Rules
- Never push to or merge into `main` without Alice's approval. Work on a branch and open a PR.
- Don't break the live site: until the redesign is approved, root `index.html` is the current live page.
- Keep `resume.pdf` and `photo.png` reachable at their current URLs.
- Voice: casual, first person, conversational. No hype words.
- Don't frame Alice as an "immigrant" or lead with Russia. List places she has lived neutrally.
- Project figures are coursework, not investment advice. Keep the disclaimer in the footer.
- Verify visual work in a real browser (screenshots at several scroll positions, desktop and mobile) before saying it works.
- Respect `prefers-reduced-motion`.

## Commands
- `npm run dev` serves the site at http://localhost:5173/ (add `?lenis=off` to test without smooth scroll).
- `npm run build` type-checks and builds to `dist/`; `npm run preview` serves the build at http://localhost:4173/.
- Text lives in `src/content/copy.ts` (mirrors `content/copy.md`). Chapters are in `src/chapters/`, the landing scene in `src/scenes/`.
- `legacy/index.html` is the previous site, kept in the repo only (not deployed).
- Open TODOs for Alice: certificate images in `public/certs/`, real goal names in the time-horizon scene, a Bloomberg certificate date, and a replacement `public/og.png` if wanted.
