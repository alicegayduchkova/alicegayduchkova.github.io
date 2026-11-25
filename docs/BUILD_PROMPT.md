# Build prompt: scroll-driven portfolio for Alisa Gayduchkova

Paste this into Claude Code from the repo root (or just say "follow docs/BUILD_PROMPT.md"). Read `CLAUDE.md` and `content/copy.md` first.

## Goal

Rebuild this GitHub Pages site (`alicegayduchkova.github.io`) as a scroll-driven story site. The interaction model is inspired by https://webdesign.kernjosh.com/: the landing page is a laptop surrounded by objects, and scrolling moves everything. Take the *interaction pattern* only. Do not copy his artwork, copy, layout details, or code. Everything visual must be original.

Before designing, open the reference in a real browser (Playwright, or Chrome tools if available) and scroll through it slowly. Take screenshots at several scroll positions and note what moves, when, and how fast. Do not guess from the HTML text alone.

## What Alice wants

1. **Landing page = a laptop with objects around it.** No buttons that make the visitor pick what to see. The laptop is centered, objects float around it, and scrolling is the only control.
2. **Scrolling moves the scene.** Objects drift outward at different speeds (parallax) while the laptop scales up until its screen fills the viewport. The screen becomes the site, and her story plays out as you keep scrolling.
3. **She tells a story.** First-person and conversational (see tone below). Order: who she is, the places she's lived, four jobs in four industries, certificates, projects, school, contact.
4. **Resilience is the theme** (she's a finance student). Show it through the story: new countries, then four jobs in four industries where she started knowing little, figured it out, and made it clear for the next person. Do not write the word "resilient" over and over. Show it.
5. **Certificates are featured**, not buried. They show she's curious about many topics (markets, data, quantum security).
6. **Projects are highlighted and animated.** Each one gets its own scrubbed scene that plays as you scroll into it (details below).
7. It must not look AI-generated or templated. No purple gradients, no glassmorphism cards in a grid, no stock icon rows. It should feel crafted and a little playful, but still credible to a finance recruiter.

## Stack

- Vite + React + TypeScript (static output, deploys to GitHub Pages)
- GSAP + ScrollTrigger (scrubbed timelines, pinning) and Lenis for smooth scroll. Register ScrollTrigger once and sync it with Lenis.
- Plain CSS (CSS variables, no Tailwind needed). Keep the existing palette as a starting point: dark `#0F1412`, blush `#E7B8AE`, sage `#8FBFA9`, light `#EDE7E4`; Figtree + Instrument Serif italic. You may refine it, but justify changes.
- No heavy 3D library. The laptop and objects are layered SVG or CSS, not Three.js.
- Deploy with a GitHub Actions workflow (`actions/deploy-pages`). Replace the root `index.html` with the Vite entry. Move the old site to `legacy/index.html` so nothing is lost.

## Scroll choreography

Build it as one master timeline per chapter, driven by ScrollTrigger `scrub`.

**Chapter 0, Landing (pinned, about 150vh of scroll)**
- Initial state: laptop centered, screen showing "Alisa Gayduchkova" and a one-line intro. Around it, about 10 to 14 cut-paper style objects at different depths. Idle motion is a gentle float, plus subtle mouse parallax on desktop.
- Scroll 0 to 40%: objects drift outward and off-screen at depth-based speeds, with slight rotation.
- Scroll 40 to 100%: laptop scales and moves until the screen fills the viewport, then the bezel fades and the screen content becomes the page.
- The wordmark "ag." stays in a small fixed header. Include a minimal progress indicator, not a menu of choices. A small unobtrusive nav is OK for accessibility, but the story must not depend on it.

**Objects (all original SVG, hand-drawn/paper-cut look, each tied to her life).** Examples: swim cap and goggles (Division II swimming), spool of thread and scissors (sewing), dumbbell (working out), a sticky-note ticket (Jira/Ivanti), a solar panel tile (Sunrun), a laser-beam diode (IPG Photonics), a terminal-style ticker note (Bloomberg), a calculator, a notebook, a small globe or map pin (places she's lived). Hovering an object shows a tiny caption. Do not make the objects navigation.

**Chapter 1, Places and people (about 100vh pinned)**
Headline "New countries, new jobs, new systems. I've learned to figure things out fast." Then the places she's called home appear one at a time, ending on Massachusetts. Keep the tone matter-of-fact and warm. Do not frame her as an "immigrant" and do not lead with Russia. List the places neutrally, like anywhere else she's lived.

**Chapter 2, Four jobs, four industries (horizontal or stacked pinned scene)**
Solar, then manufacturing, then marketing, then mutual funds. One card per job with the bullets from `content/copy.md`. As you scroll, each job "levels up" into the next, so the arc is visible: start knowing little, figure it out, make it clear for the next person. Show the "What I'm learning" line for the current role.

**Chapter 3, Certificates (featured)**
Four certificates pinned onto a board or desk, each landing with a small settle animation as you scroll. Each shows title, issuer, date, and the one-sentence description from the copy file. Drop real certificate images in `public/certs/` if they exist. If they don't, render clean typographic certificate cards and leave a TODO. Do not fake official-looking logos or signatures.

**Chapter 4, Projects (the showpiece)**
Each project is a pinned scene with its own animation that is scrubbed by scroll:
- *ERIE return and risk analysis.* Draw a bar chart in SVG for the six monthly returns (Mar to Aug: −7.41, −12.38, −1.56, +17.80, −4.39, +8.12). The bars grow from the zero line. A "0.03% average" line is drawn first, flat. Then the swing is highlighted from −12% to +18%, and the 11.07% standard deviation is shown as a band around the average. Numbers count up. End on her takeaway. Use exactly the figures in the copy file and cite the Yahoo Finance source line.
- *Franklin Templeton vs. JPMorgan Chase.* Two-column visual. One side is an asset manager where fees on assets under management are the main revenue source. The other is a diversified bank with lending plus wealth management. Animate the revenue sources as flows into each. Use only qualitative shapes. Do not invent revenue numbers.
- *Matching investments to time horizon.* A timeline from now to retirement. Goals are sorted into short, medium, and long term, and a risk dial moves from "stability" toward "growth" as you scroll further out in time.

**Chapter 5, School and timeline**
UMass Lowell (A.I.M. Director of Operations, with a link to aimsociety.org), Manning School of Business, and Assumption swimming. Then a two-track timeline (Life and School / Career) that draws itself, 2018 to May 2028.

**Chapter 6, Skills and contact**
Skills as three small clusters. Contact shows the email (mailto), LinkedIn, and résumé PDF. End with the disclaimer line from the copy file.

## Tone and copy

- Casual, conversational, first person. This is Alice talking, not a corporate bio. Short sentences.
- Use the text in `content/copy.md` as written. New microcopy (captions, labels) should match that voice. No hype words, no "passionate", no emoji.
- Never invent employers, numbers, dates, titles, or certificates.

## Quality bar (check all of these before calling it done)

- Works at 375px, 768px, 1440px. On mobile, simplify the hero (fewer objects, shorter pins) but keep the laptop-zoom idea. Test on a real mobile viewport size.
- `prefers-reduced-motion`: no pinned scrubbing, no parallax, sections just stack and fade in. All content stays readable.
- Content is real HTML text (not baked into images), with sensible heading order, alt text, focus states, and color contrast of at least 4.5:1.
- Lighthouse on the built site: Performance 90+ and Accessibility 95+ on mobile. Compress images, lazy-load below the fold, and keep the JS bundle lean.
- No layout shift when fonts load. No scroll jank. Test with Lenis on and off.
- SEO and sharing: title, description, Open Graph image, canonical URL, favicon (keep the "ag." favicon idea).
- `photo.png` and `resume.pdf` stay in `public/` and keep working at the same URLs.

## How to work

1. Start in plan mode. Look at the reference site, then write a short plan (file structure, chapter-by-chapter timeline notes, object list) and wait for approval before building.
2. Build in stages on a branch (`redesign`): scaffold and deploy workflow, then landing laptop zoom, then chapters 1 to 3, then projects, then the rest, then polish.
3. After each stage, run the dev server, scroll through it in a real browser, and take screenshots at several scroll positions. Fix what looks wrong before moving on. Do not report something as working without looking at it.
4. Commit per stage. Do not touch `main` and do not push to `main`. Open a PR when it's ready, and include a preview or screenshots and the Lighthouse scores.
5. At the end, list anything that needs input from Alice (certificate images, a custom domain, an OG image) instead of faking it.
