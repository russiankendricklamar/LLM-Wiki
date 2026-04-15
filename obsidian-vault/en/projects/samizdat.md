---
title: "Кто живёт в панельке Хаски?"
category: "Projects"
order: 2
lang: "en"
type: "project"
status: "wip"
image: "/projects/samizdat.png"
year: "2026"
tech: "React 19, TypeScript, Vite, Tailwind 4, Motion"
github: "https://github.com/russiankendricklamar/samizdat"
url: "https://russiankendricklamar.github.io/samizdat/"
description: "A brutalist samizdat zine about Russian rap: 'Who lives in Husky's panelka?' — staged 1970s print, concrete, red and black, LUBOK borders, and an 'APPROVED' stamp."
---

# Кто живёт в панельке Хаски?

**A brutalist samizdat zine about Russian rap.** A single-page site built as a staged print publication — 1970s typography, pasted text blocks, LUBOK borders, a red "APPROVED" stamp, and the headline: *"Who lives in Husky's panelka?"*.

## The Idea

Most writing about Russian rap lives in Telegram channels, media articles, and YouTube essays — neutral interfaces where the form carries no meaning. I wanted the opposite: the form as co-author. The site should feel like an illegal pamphlet passed around a factory floor — paper that got confiscated, then returned with a stamp.

Hence the visual language: faded beige "paper," typewriter-set text, headlines glued on at random angles, concrete panel blocks in the background, the silhouette of a church behind the main block, and the blurred floating words "СПАСИ / ОХРАНИ" (save / protect) around the edges.

## Structure

- **Hero** — a three-block manifesto: "Who lives" / "in the panelka" / "HUSKY". Background: church silhouette, red "APPROVED" stamp in the corner.
- **Materials** — essays on "concrete poetry," panel housing estates as the main character of Russian rap, the architecture of despair. Each article is its own pasted block with a tilted image and a "Read ✕" button.
- **Quotes** — lyric cut-outs typeset as hand-adjusted newspaper clippings.
- **Imprint** — samizdat-style colophon: edition, city, year.

## Stack

- **React 19 + TypeScript** — strict-mode typed components
- **Vite** — build and HMR
- **Tailwind 4** — utility classes `brutal-border`, `brutal-shadow`, `rotate-rand-*`, custom tokens `ink`, `paper`, `blood`
- **Motion** — scroll-triggered reveals
- **GitHub Pages** — auto-deploy via `deploy.yml`

The template was scaffolded from Google AI Studio, but the entire visual language and content was hand-assembled on top — the Gemini API is wired up in `.env` but not used in the shipped build.

## Design Language

- **Palette:** paper `#f5f2e8`, ink `#0a0a0a`, blood `#bb0017`. No gradients, no half-tones.
- **Typography:** Soviet poster-style grotesk (`font-heading`), serif body copy (`font-body`).
- **Random rotations:** every tile is rotated via `rotate-rand-1..4` — the chaos is controlled through Tailwind classes, not inline styles.
- **Brutal shadows:** `shadow-[8px_8px_0_#BB0017]` instead of soft blurs. Everything sits where it sits and throws a hard-edge shadow, like a cardboard cut-out.

## Status

Shipped and deployed. Private content, public design artefact.
