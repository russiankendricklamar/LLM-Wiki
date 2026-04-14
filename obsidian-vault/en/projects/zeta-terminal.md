---
title: "Zeta Terminal"
category: "Projects"
order: 2
lang: "en"
type: "project"
status: "wip"
year: "2025"
tech: "Vue 3, FastAPI, Python, C++, PostgreSQL, Railway"
image: "/projects/zeta-terminal.png"
demo: "https://zetaterminal.dev"
featured: true
description: "BlackRock Aladdin-class analytics platform covering Russian and international markets — from systemic risk to individual ticks. 42 modules, C++ core, brutalist design."
---

# Zeta Terminal

**Zeta Terminal** is a financial analytics platform with the ambition to be a Russian-built equivalent of BlackRock Aladdin. It covers the full spectrum of financial analysis — from macro level (systemic risk, contagion) down to micro level (individual trades, ticks, orders).

## Motivation

A quant's workflow is fragmented across Bloomberg terminals, Python notebooks, risk systems, and spreadsheets. Zeta Terminal collapses that stack: data, models, visualisation, and LLM assistance in a single window, with no context switching.

Core principle: every module is a layer of the same telescope at a different zoom level:
- **Macro** → systemic risks, contagion, market-wide stress
- **Meso** → sectors, participants, exposure networks
- **Micro** → portfolios, instruments, ticks, orders

## Modules (42 routes)

**Portfolio & Risk:** Portfolio, Greeks, Stress Testing, Backtest, Portfolio Optimisation, Reports

**Fixed Income:** Bonds (vanilla, floaters), ZCYC Viewer, Bond Valuation, REPO

**Derivatives:** Options (Heston, SABR, jump-diffusion), Swaps + Swap Greeks, Forwards + Forward Greeks, Basis, Hedging

**Analytics:** Volatility Surface, P&L Attribution, Realized Kernels, HAR Model, Factor Analysis, Eigenportfolio, Probability of Backtest Overfitting, Meta-Labeling, Adversarial Stress

**Regimes:** Regime Detection, Spectral Regimes — automatic market state identification via HMM and spectral analysis

## Architecture

- **Frontend**: Vue 3.4 + TypeScript + Vite + Tailwind + Pinia; Composition API, lazy-loaded routes, Command Palette (`Cmd+K`)
- **Backend**: FastAPI + Python 3.14 + asyncpg + Railway PostgreSQL; strict Router → Service → Repository layering, 40 services
- **Compute core**: C++ modules (`algopack_native` for ALGOPACK data ingestion, `quant_native` for financial math); called from Python via ctypes
- **Desktop**: Tauri 2.0 — native macOS/Windows app built on top of the web stack
- **Visualisation**: Three.js (3D graphs), ECharts + Chart.js (2D charts), KaTeX (math rendering)

## Design System — Brutalism

A unified system of 2,300+ lines of CSS. Rules are non-negotiable:
- Background `#050505`, accent `#DC2626` (red for losses)
- Typography: Anton (hero headings ALL CAPS), Oswald (UI labels), Mono (numbers and data)
- Border radius: 3–6px max — never `rounded-full`
- No shadows, gradients, glassmorphism, or emoji in UI
- Arrows: `→`, not icon libraries

## Infrastructure

- **Frontend**: Railway → `zetaterminal.dev` (SPA with Cloudflare DNS)
- **Backend**: Railway → `api.zetaterminal.dev` (always-on, Nixpacks build)
- **Database**: Railway PostgreSQL (internal networking)

## Status

Active development. Completed: design system unification (8 phases, single `:where()` normaliser), C++ acceleration layer, ALGOPACK Unified Worker (replaced 5 sequential workers with one async worker + adaptive rate limiter).

