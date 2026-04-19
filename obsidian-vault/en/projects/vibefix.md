---
title: "VibeFix"
category: "Projects"
order: 1.5
lang: "en"
slug: "/projects/vibefix"
type: "project"
status: "wip"
year: "2026"
tech: "Next.js 16, React 19, FastAPI, Supabase, TypeScript, Tailwind"
github: "https://github.com/russiankendricklamar/vibefix"
demo: "https://frontend-seven-pied-38.vercel.app/"
image: "/projects/vibefix.png"
featured: true
description: "A broker between vibe-coders and professional developers. Secure escrow deals, fixed prices, guaranteed delivery."
---

# VibeFix

VibeFix is a micro-task marketplace for repairing broken AI-generated code. The "vibe coding" era let millions of people assemble products from a prompt — and quietly produced an industry of half-finished repositories that almost work. VibeFix closes the gap between "an AI scaffolded it" and "it actually runs in production."

## Problem

Three repeating pains for AI-coding users:

- **The code doesn't work.** The LLM emitted a dense block of logic that compiles but breaks on the first real request. Debugging eats days.
- **Freelancers can't be vetted.** Classic freelance marketplaces are flooded with inflated reputations; finding a developer who can fix someone else's AI code in an hour is a lottery.
- **No deal protection.** Without escrow one side always carries risk: pay and get nothing, or fix and get nothing.

## Task lifecycle

1. **Describe the problem.** The owner files a ticket: repository, symptom, expected behavior, budget.
2. **A coder picks it up.** A developer with the right reputation and stack is assigned, funds move into escrow.
3. **Get the result.** A pull request, a short video walkthrough of the fix, a test run — the owner approves and escrow releases.

Dispute? Arbitration kicks in: a third party reviews the diff, the tests, and the chat, then redistributes funds.

## What's inside

- **Escrow payments** — funds lock when work starts and release on acceptance.
- **Built-in chat** — no jumping to Telegram; the conversation stays next to the diff and the dispute thread.
- **Ratings & reviews** — reputation accrues for both developers and owners; harder to game than classic platforms.
- **Categories & tags** — filter by stack (Next.js, FastAPI, Supabase, mobile, ML, etc.).
- **Dispute arbitration** — formal process with time windows and a clear outcome.
- **Notifications & email** — critical events are delivered both in-product and by mail.

## Target audience

People shipping products with AI copilots — Cursor, Claude Code, Copilot, Replit Agent, ChatGPT. This pool is growing: AI-generated commits to public repositories are climbing double-digits a year, and every wave drags a tail of "almost works, but..." tickets behind it.

## Architecture

- **Frontend** — Next.js 16 (App Router), React 19, Tailwind, shadcn stack, framer-motion. Auth via Supabase SSR; email via Resend and React Email.
- **Backend** — FastAPI on Python 3.12, split by domain routers: `auth`, `tasks`, `payments`, `messages`, `disputes`, `reviews`, `notifications`, `categories`. Rate-limit middleware at the edge.
- **Storage & sessions** — Supabase (Postgres + Auth + Storage). RLS policies make sure an owner only sees their tickets and a developer only sees the ones they're assigned to.
- **Infrastructure** — Docker Compose for local dev, a dedicated nginx front for production, migrations and edge functions live under `supabase/`.

## Stack

`Next.js 16` · `React 19` · `TypeScript` · `Tailwind CSS` · `shadcn` · `framer-motion` · `Supabase` · `FastAPI` · `Python 3.12` · `Resend` · `React Email` · `Docker`
