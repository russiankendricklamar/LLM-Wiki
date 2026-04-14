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
featured: false
description: "A bilingual Knowledge Garden on quant finance, physics and LLMs. The vault lives in Obsidian, the render is React + Vite, and the methodology is adapted from Karpathy's LLM Wiki essay."
---

# LLM-Wiki

This is not just a notes site — it is a **Knowledge Garden** that I grow together with an LLM. The core idea is adapted from Andrej Karpathy's essay on the [LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f): instead of pulling knowledge from raw sources through RAG every single time, I maintain a persistent, compounding, interlinked corpus of markdown notes — the very vault you are reading right now.

## Why not RAG

Classical RAG is a form of amnesia. Every query to the model starts from zero: the agent walks into the documents, pulls out fragments, answers something, and on the next query does it all over again. Knowledge never compounds — it is synthesised on the fly and thrown away immediately after.

A Knowledge Garden works differently. When I read a paper on optimal execution or stochastic processes, the LLM not only answers my question but also **updates 10–15 notes in the vault**: adds a summary, extends related pages, wires up bidirectional wiki links, refreshes the index. The next time I need that topic, I don't go back to the original source — I go to the already-filtered, already-stitched version inside the garden.

The duplicated work disappears: the same reasoning is not re-executed a thousand times. That frees up time to think about new things.

## Role separation

Humans and the LLM do different things in this process:

- **The human** picks sources, asks the non-trivial questions, shapes the schema, and makes the meaningful judgement calls.
- **The LLM** runs the card catalogue: summarising, cross-referencing, filing into folders, hunting for contradictions, updating related pages. All the bookkeeping I hate doing by hand.

A typical workflow has Obsidian open on the left, an agent on the right. The vault becomes a codebase, and Obsidian becomes the IDE for it.

## Three layers

The architecture mirrors Karpathy's three-layer model, with project-specific details:

1. **Sources** — the immutable layer: arXiv preprints, paper books, lecture recordings, market data, strategy code. The agent only reads from this layer, never writes.
2. **The vault** — what you see right now: `obsidian-vault/{ru,en}/` with hundreds of notes organised into categories — stochastic processes, physics, AI theory, scientific ML, pricing models, language models. Every note is cross-linked with a dozen others via `[[wikilinks]]`. This is the **compounding artifact** — it grows with every session.
3. **The schema** — the conventions by which the agent writes into the vault: category rules, frontmatter, note style, bilingual rules (`en` and `ru` versions of a single article share one `slug`). Most of the schema is codified in the `CLAUDE.md` file at the repo root — literally the instructions for how an LLM should behave inside this garden.

## Three operations

Three repeating operations run on top of these layers:

### Ingest

A new source lands in the vault — a paper, a chapter, a talk transcript. The agent:

- extracts key formulas, definitions, dates, names;
- creates or updates 5–15 pages in the categories the material touches;
- wires up wiki links in both directions so that new edges appear in the [[knowledge-graph|knowledge graph]];
- refreshes the category index.

One source turns into a spreading set of edits rather than a single detached note.

### Query

When I need an answer about a topic I've already studied, the agent first searches relevant pages in the vault (through sidebar categories or the 3D knowledge graph), synthesises an answer with citations to specific notes, and — if there's anything new — **files the finding back into the vault**. Otherwise, that knowledge would be lost in chat history and impossible to return to.

### Lint

Every so often the agent walks through the vault with one goal: hunt for junk — contradictions between pages, stale phrasing, orphan notes with no inbound links, categories with a single article. Literally this week I redistributed such orphan categories: four 1–2-article buckets were merged into `Physics`, and avellaneda-stoikov moved into `Pricing Models`. It is the equivalent of type-check and refactor-clean for a codebase, just applied to knowledge.

## Why this works

Karpathy makes a simple point in his essay: personal wiki systems don't fail because of technology, they fail because of boredom. Humans can't stand manually updating 15 interlinked pages after reading one paper. LLMs don't get bored, don't forget to update a cross-reference, and can touch the entire network in a single pass. All the heavy bookkeeping of knowledge is handed off to the machine — and what's left for the human is the interesting questions and the meaningful decisions.

This project is my experiment with that idea in a specific domain: at the intersection of quantitative finance, stochastic physics, and modern AI.

## Implementation architecture

- **Content** — a plain Obsidian vault in `obsidian-vault/{ru,en}/`. No build-time pipeline: markdown is pulled into the bundle via `import.meta.glob`, so a new note in Obsidian automatically appears on the site.
- **Rendering** — React 19 + Vite + Tailwind 4. Dark/light theming, search, 3D knowledge graph, LaTeX via KaTeX, charts via Recharts.
- **Bilingual** — `en` and `ru` versions of every article share a single `slug`; the language toggle preserves your position.
- **Knowledge graph** — `react-force-graph-3d`; nodes and edges are computed from wiki links on the fly, with no sidecar files.

## Stack

`React 19` · `TypeScript` · `Vite` · `Tailwind CSS 4` · `react-router` · `react-markdown` · `KaTeX` · `Recharts` · `react-force-graph-3d` · `motion`
