---
title: "Lévy Processes and Stochastic-Volatility Models for Structured-Product Pricing"
slug: "levy-structured-products"
date: 2026-07-22
status: "completed"
type: "research"
category: "research"
tags: [structured-products, levy-processes, stochastic-volatility, quantitative-finance, monte-carlo]
---

## Objective
To investigate and compare the effectiveness of various Lévy processes (Merton, Variance Gamma, NIG, CGMY) and Stochastic-Volatility models (Heston, Bates) against the Black-Scholes baseline in pricing structured products, modeling the implied-volatility smile, and assessing delta-hedging error distributions.

## Context
This research applies advanced derivative pricing models to complex instruments. Relevant wiki concepts include [[structured-products]], [[levy-processes]], [[stochastic-volatility]], [[monte-carlo-simulation]], and the [[carr-madan-fft]] method for European options.

## Methodology
- **Calibration:** Parameters calibrated to July 2026 market option chains (SPX, AAPL, SPY).
- **Pricing:** European products (Capital-protected note, ATM digital call) priced via the Carr–Madan damped Fourier transform. Path-dependent products (Barrier reverse convertible, Phoenix autocall) priced via Monte Carlo simulations.
- **Simulation:** Heston and Bates paths generated using Andersen's Quadratic-Exponential (QE) scheme.
- **Tools:** Python (`numpy`, `scipy`, `pandas`, `pyarrow`).

## Current Findings
- Calibration (IV-RMSE) is strongest for the Bates model across all three assets, followed by Heston, then pure Lévy models. Black-Scholes is the weakest.
- Model choice significantly shifts the fair terms of structured products (e.g., BRC fair coupon on SPX changes from 4.279% under BS to 7.635% under Bates).
- Hedging-error distributions exhibit strongly negative skew and heavy kurtosis across all models, confirming that unhedgeable gap/jump risk dominates the left tail of P&L rather than the hedging model choice itself.

## Insights for AI
When designing automated pricing engines or analyzing risk for exotic options, agents must recognize that continuous-path diffusion models (BS) severely misprice path-dependent barrier events. Incorporating jump components (like in the Bates model or VG) is structurally essential to capture the heavy-tailed gap risks that actually trigger barrier events in real-world trading.

## Open Questions
- How does the inclusion of fractional/rough volatility affect the calibration and pricing of autocallables compared to classical Lévy jump models?
- Can the CGMY model be efficiently simulated for path-dependent products without relying on computationally expensive infinite-activity jump approximations?

## References
- Repository: [russiankendricklamar/levy-sp](https://github.com/russiankendricklamar/levy-sp)
