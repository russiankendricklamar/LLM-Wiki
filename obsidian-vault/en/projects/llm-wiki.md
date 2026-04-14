---
title: "LLM-Wiki"
category: "Projects"
order: 1
lang: "en"
slug: "/projects/llm-wiki"
type: "project"
status: "active"
year: "2026"
tech: "React 19, TypeScript, Vite, Tailwind 4, Obsidian"
github: "https://github.com/russiankendricklamar/LLM-Wiki"
demo: "https://github.com/russiankendricklamar/LLM-Wiki"
image: "/projects/llm-wiki.svg"
featured: true
description: "Bilingual wiki on quant finance, physics and LLMs. The content lives as an Obsidian vault and renders as a React + Vite SPA."
---

# LLM-Wiki

A bilingual wiki where I collect notes on quantitative finance, stochastic processes, physics, and large language models. The goal is to grow a living **Knowledge Garden** that's pleasant to wander through, where every idea is connected to a dozen others via Obsidian-style wiki links.

## Architecture

- **Content** — a plain Obsidian vault in `obsidian-vault/{ru,en}/`. No build-time pipeline: markdown is pulled into the bundle via `import.meta.glob`.
- **Rendering** — React 19 + Vite + Tailwind 4. Theming, search, 3D knowledge graph, LaTeX (KaTeX), charts (Recharts).
- **Bilingual** — `en` and `ru` versions of each article share a single `slug`; the language toggle preserves your position.
- **Knowledge graph** — `react-force-graph-3d`; nodes and edges are computed from wiki links on the fly.

## What's inside

Notes on Lévy processes, GARCH, Kalman filters, the Kelly criterion, MCMC, particle filters, market microstructure, and a lot more. The list keeps growing.

## Stack

`React 19` · `TypeScript` · `Vite` · `Tailwind CSS 4` · `react-router` · `react-markdown` · `KaTeX` · `Recharts` · `react-force-graph-3d` · `motion`
