---
title: "Zeta Terminal"
category: "Projects"
order: 2
lang: "en"
type: "project"
status: "wip"
year: "2025"
tech: "Python, TypeScript, QuantLib, Claude, FastAPI"
image: "/projects/zeta-terminal.png"
demo: "https://go.zetaterminal.dev"
featured: true
description: "AI-native workspace for financial analysis and quantitative research — real-time data, LLM assistance, and high-performance computing in one terminal."
---

# Zeta Terminal

**Zeta Terminal** is an AI-native workspace designed for quantitative finance practitioners and AI researchers. It unifies real-time market data, high-performance numerical computing, and LLM-powered assistance into a single terminal environment.

## Motivation

Modern quant workflows are fragmented across Bloomberg terminals, Python notebooks, risk systems, and chat interfaces. Zeta Terminal aims to collapse this stack — letting you run a stochastic volatility calibration, query market data, and ask an LLM to interpret the results, all without switching context.

## Architecture

- **Core runtime**: Python + FastAPI backend with WebSocket streaming
- **Numerical engine**: QuantLib for derivatives pricing, scipy for optimization
- **LLM layer**: Claude API for code generation, model interpretation, and natural language queries over financial data
- **Frontend**: TypeScript + React terminal UI with real-time chart updates

## Key Features

- Conversational interface for quantitative analysis ("What's the implied vol surface for SPX?")
- Live calibration of Heston, SABR, and jump-diffusion models
- Integrated backtesting with portfolio analytics
- LLM-assisted report generation from raw model outputs

## Status

Currently in active development. Core data ingestion and LLM routing are functional; derivatives pricing engine is under integration.

## Related Topics
- [[heston-model]]
- [[mcmc]]
- [[monte-carlo-method]]
