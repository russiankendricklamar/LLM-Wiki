---
title: "Nyquist"
category: "Projects"
order: 3
lang: "en"
type: "project"
status: "wip"
year: "2025"
tech: "Vue 3, FastAPI, Python, C++, PostgreSQL, Railway"
image: "/projects/nyquist.jpg"
demo: "https://nyquist.pro"
featured: true
description: "BlackRock Aladdin-class institutional analytics platform. Covers Russian and international markets end-to-end — systemic risk, derivatives pricing, fixed income, regime detection, compliance, and execution — in a single web terminal."
---

# Nyquist

**Nyquist** is an institutional-grade financial analytics platform built to cover the entire financial market — from macro-level systemic risk down to individual ticks and orders — in a single interface.

The ambition: a Russian-built equivalent of BlackRock Aladdin, the system that runs risk for \$21 trillion in assets under management worldwide.

## The Name

The platform is named after **Harry Nyquist** — the engineer behind the sampling theorem that defines the resolution at which a continuous signal can be reconstructed from discrete observations. That's exactly the daily problem of a quantitative analyst: a market is a continuous process, but you only see it through ticks, candles, and end-of-day snapshots. Build the wrong sampler and the price you reconstruct is an alias of something else entirely.

## The Problem

A quant's or risk manager's workflow is fragmented. Bloomberg for prices. Python notebooks for custom models. A separate risk system. Excel for reports. Regulatory dashboards somewhere else. Every context switch costs time and introduces errors.

Nyquist collapses that stack. Data ingestion, quantitative models, visualisation, scenario analysis, compliance monitoring — all in one window, accessible without switching tools or environments.

## The Telescope Principle

Every module in Nyquist is a layer of the same telescope, just at a different zoom level:

- **Macro** → systemic risk, network contagion, market-wide stress, Basel-compliant liquidity ratios
- **Meso** → sector exposure, participant networks, interbank dependencies
- **Micro** → individual portfolios, instrument pricing, tick data, order execution

You can move between levels without leaving the platform.

## What It Can Do

### Derivatives Pricing
Full options analytics: Heston, SABR, Bergomi, Bachelier, jump-diffusion models. Greeks across the full surface. Implied volatility surface construction. Swap pricing and Greeks. Forward curves and basis. Hedging strategies with quadratic minimisation.

### Fixed Income
Vanilla bond and floater pricing. ZCYC (zero-coupon yield curve) viewer for Russian market curves. Duration, convexity, DV01. REPO analytics. Full cash flow modelling.

### Systemic Risk
DebtRank contagion graph. Fire-sale feedback loops. Reverse stress testing — what portfolio of losses would break a specific institution? LCR/NSFR monitoring (Basel III liquidity ratios). Concentration limit tracking.

### Portfolio & Risk
Factor analysis and eigenportfolio decomposition. P&L attribution. Probability of Backtest Overfitting (PBO). Meta-labeling (López de Prado). Adversarial stress testing. Black-Litterman portfolio construction. Backtesting engine.

### Market Regimes
Hidden Markov Models for automatic regime detection. Spectral regime analysis. HAR (Heterogeneous Autoregressive) volatility model. Realised kernels.

### Execution & Trading
Hawkes process for order flow modelling. Optimal execution (Hamilton-Jacobi-Bellman). Market making analytics. Real-time order book monitoring.

### Market Data
Real-time data from MOEX via ALGOPACK (equities, fixed income, futures, FX). Historical data with a C++-accelerated ingestion pipeline. 13 external data sources integrated (Finnhub, Alpaca, CBonds, FRED, ECB, and others).

## Why It's Hard to Build

Aladdin took 30 years and 1,000 engineers. Nyquist is a solo project. That forces ruthless decisions about what to implement natively vs. what to skip.

What makes the engineering non-trivial:

**Scale of models.** Options alone require implementing and validating Heston, SABR, Bergomi, Bachelier, and Merton jump-diffusion — each with closed-form calibration, Monte Carlo fallback, and reference tests against market data.

**C++ core.** Performance-critical paths — ALGOPACK data ingestion and financial math primitives — are compiled C++ modules (`algopack_native`, `quant_native`) called from Python via pybind11. The Python layer does orchestration; C++ does the heavy lifting.

**89 API routers, 437 HTTP endpoints, 118+ services.** Strict Router → Service → Repository layering. No DB calls in routers. Every financial model has its own service with `FinancialBaseModel` that auto-rejects NaN/Inf values and enforces field bounds.

**Async data architecture.** A unified async worker replaced 5 sequential ALGOPACK workers. Adaptive rate limiter prevents API bans. asyncpg COPY for bulk inserts.

**Compliance-grade outputs.** LCR/NSFR, Basel concentration limits, regulatory stress scenarios — these require exact formula implementations, not approximations. The CB mega-regulator use case demands reproducible outputs.

## Who It's For

Nyquist is B2B and B2G institutional software. Target users:

- **Asset managers**: portfolio risk, factor analysis, regulatory reporting
- **Banks**: LCR/NSFR monitoring, systemic risk assessment, derivatives desk
- **Central banks and regulators**: macro-level contagion modelling, market-wide stress testing, supervision of participants
- **Quant traders**: model calibration, strategy backtesting, execution analytics

It is explicitly not a retail product.

## Technology

- **Frontend**: Vue 3 + TypeScript + Vite + Pinia — 10 domain modules, 303 components, Hub-based navigation
- **Backend**: FastAPI + Python 3.11 + asyncpg + PostgreSQL on Railway
- **Compute**: C++ native modules via pybind11 for hot paths
- **Deployment**: `nyquist.pro` (frontend) + `api.nyquist.pro` (backend), both on Railway with Cloudflare DNS

## Development

The project progresses in focused sprints ("batches") — each batch closes a specific cluster of gaps vs Bloomberg/Aladdin. Early development was broad (building core modules); from April 2026 the methodology shifted to depth: 5 tightly scoped analytical pages per batch, each shipping with reference math, full UI, and TypeScript-clean code.

```chart
{
  "chartType": "bar",
  "xAxis": "milestone",
  "data": [
    {"milestone": "v1.0", "pages": 10},
    {"milestone": "v2.0 Feb'26", "pages": 8},
    {"milestone": "v3.0 Mar'26", "pages": 5},
    {"milestone": "Marathon B1", "pages": 15},
    {"milestone": "Marathon B2-3", "pages": 10},
    {"milestone": "Batch 4-5", "pages": 10}
  ],
  "lines": [
    {"dataKey": "pages", "name": "Pages shipped", "stroke": "#3b82f6"}
  ]
}
```

Current coverage against Bloomberg Terminal / BlackRock Aladdin as the benchmark (100%):

```chart
{
  "chartType": "bar",
  "xAxis": "domain",
  "data": [
    {"domain": "Options", "coverage": 85},
    {"domain": "Fixed Income", "coverage": 80},
    {"domain": "Credit Risk", "coverage": 75},
    {"domain": "Structured", "coverage": 70},
    {"domain": "Systemic", "coverage": 70},
    {"domain": "Portfolio", "coverage": 65},
    {"domain": "Attribution", "coverage": 50},
    {"domain": "Execution", "coverage": 30}
  ],
  "lines": [
    {"dataKey": "coverage", "name": "% vs Bloomberg/Aladdin", "stroke": "#10b981"}
  ]
}
```

## Status

Active development. The platform is live at [nyquist.pro](https://nyquist.pro). Major milestones completed:

- Full derivatives suite (options, swaps, forwards) with Hub-based layout consolidating all analytics
- Systemic risk module (DebtRank, fire-sale, reverse stress, LCR/NSFR)
- C++ acceleration layer (algopack_native + quant_native)
- ALGOPACK Unified Worker — real-time Russian market data pipeline
- Design system unification (single `:where()` normaliser, 2,330-line CSS system)
- Hub-based navigation refactor — 10 domain modules replacing 42 flat routes
