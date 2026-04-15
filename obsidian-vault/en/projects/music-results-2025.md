---
title: "Music Results 2025"
category: "Projects"
order: 6
lang: "en"
type: "project"
status: "shipped"
image: "/projects/music-results-2025.png"
year: "2025"
tech: "HTML, CSS, JavaScript"
github: "https://github.com/russiankendricklamar/music-results-2025"
url: "https://russiankendricklamar.github.io/music-results-2025/"
description: "A personal year-in-music archive: top artists, albums, discoveries, foreign releases, videos, and stats. Multi-page editorial site in plain HTML/CSS."
---

# Music Results 2025

**A personal year-in-music archive** — a static multi-page site where I wrap up the year in listening: top artists, best albums, discoveries, foreign releases, videos, and stats. The design is a minimalist editorial in the spirit of print music magazines: heavy display type, generous whitespace, almost no ornament.

## The Idea

Every December, streaming services send their year-in-review as formulaic stories — and then they're forgotten. I wanted the opposite: one place to come back to in five years, scroll through, and remember what was actually in my head this year. Not a playlist but an archive — with commentary, context, reasons.

## Structure

The site splits into themed pages, each a standalone HTML file:

- **Albums** — best releases of the year with short reviews
- **Artists** — top performers and what hooked me about them
- **Discoveries** — new-to-me names that stayed in rotation
- **Foreign** — international releases on a separate track
- **Videos** — a visual block with music videos
- **Statistics** — listen counts, genre distribution

## Stack

- **Plain HTML** — no frameworks, no bundlers
- **Inline CSS + styles.css** — editorial typography, light/dark themes
- **GitHub Pages** — one commit, one deploy
- **`.nojekyll`** — Jekyll disabled so Pages serves files as-is

Deliberate refusal of JS frameworks: the archive should survive stack churn and open in any browser five years from now.

## Design

**Editorial brutalism**: an oversized "Год в музыке" (Year in Music) title in heavy sans-serif, a stingy palette (near-black text on near-white background), pill buttons, dark sections for contrast. No illustrations — only typography and weight do the work.

Dark mode is wired up with a navbar button without any JS framework, toggled via a `data-theme` attribute on `<body>` and CSS custom properties.

## Status

Shipped on GitHub Pages. Every year gets a fresh set of pages and an updated `index.html`.
