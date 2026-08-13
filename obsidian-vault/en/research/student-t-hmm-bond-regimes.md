---
title: "Student-t HMM for Bank Bond Portfolio Regimes"
slug: "student-t-hmm-bond-regimes"
date: 2026-07-20
status: "completed"
type: "research"
category: "research"
tags: [hidden-markov-models, value-at-risk, expected-shortfall, market-risk, quantitative-finance]
---

## Objective
To model regime-dependent risk in a bank bond portfolio using a multivariate Hidden Markov Model with Student's t-distributed emissions, aiming to provide better tail-risk calibration than a standard Gaussian approximation while retaining economically interpretable market states.

## Context
Risk management requires accurate tail-risk estimation. This connects to [[hidden-markov-models]], [[value-at-risk]] (VaR), [[expected-shortfall]] (ES), and general [[market-risk]] frameworks.

## Methodology
- **Data:** Daily MOEX bond-market data (2021-2026) for 124 liquid RUB-denominated bond issues across 7 portfolio segments.
- **Model:** Multivariate HMM with 4 latent regimes and Student's t emissions, estimated via the ECM algorithm.
- **Validation:** Rolling one-day-ahead out-of-sample forecasts (403 out-of-sample predictions). Evaluated using Kupiec, Christoffersen, and Acerbi-Szekely backtests. Euler allocation for risk decomposition.
- **Tools:** Python pipeline (`numpy`, `scipy`, `pandas`) with Conda environments.

## Current Findings
- A 4-regime model was selected via BIC, distinguishing quiet states, sell-offs, rallies, and high volatility.
- Likelihood-ratio tests overwhelmingly reject Gaussian emissions in favor of Student's t.
- The standard Gaussian VaR model fails at the 99% level (2.48% breaches, p=0.012 for Kupiec test). The Student-t HMM successfully passes with 0.50% breaches.
- Unconditional 99% VaR is highly concentrated in credit-sensitive segments (Level 3 corporates and mortgage-backed securities).
- The CBR key-rate level serves as the only statistically significant macro driver for entry into stress regimes.

## Insights for AI
For AI systems engaged in automated portfolio risk oversight: relying on unconditional or Gaussian metrics fundamentally blinds the system to discrete structural breaks. By mapping market conditions into latent regimes with distinct tail-thickness parameters, an agent can preemptively reallocate risk based on early warning transition probabilities (which in this research yielded an AUC of 0.88) before a stress regime fully manifests.

## Open Questions
- Can the transition probabilities of the HMM be modeled dynamically as a function of real-time macro indicators (non-homogeneous HMM) without losing out-of-sample stability?
- How do these regime classifications map onto unstructured text sentiment derived from central bank statements?

## References
- Repository: [russiankendricklamar/thmm](https://github.com/russiankendricklamar/thmm)
