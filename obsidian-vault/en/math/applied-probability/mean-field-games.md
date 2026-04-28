---
title: "Mean Field Games"
category: "Applied Probability"
order: 30
lang: "en"
slug: "mean-field-games"
---

# Mean Field Games (MFG)

Mean Field Games (MFG) study strategic decision-making in very large populations of small, interacting agents. The framework combines **Game Theory** with **Statistical Physics** (mean-field models).

## Core Concept

Instead of tracking every individual agent, we analyze a "typical" agent interacting with the **mass** (distribution) of all other participants.
- An individual's behavior has an infinitesimal impact on the aggregate distribution.
- The aggregate distribution (the mean field) dictates the environment in which the agent makes decisions.

## Mathematical Framework

MFG systems are typically described by two coupled equations:
1. **Hamilton-Jacobi-Bellman (HJB) Equation:** Describes the optimal control of an individual agent looking forward (backward in time).
2. **Fokker-Planck Equation:** Describes the evolution of the aggregate distribution of the agents (forward in time).

An equilibrium is reached when the optimal strategies of the agents reproduce the very distribution they were based on.

## Applications in Finance

1. **Liquidity and Order Execution:** Modeling thousands of traders trying to execute large orders simultaneously, impacting the market price.
2. **Systemic Risk:** Analyzing how the distress of a single small bank in a massive network can trigger a cascade through the aggregate market state.
3. **DeFi Dynamics:** Modeling the behavior of liquidity providers in automated market makers.

## Related Topics
[[stochastic-calculus|Stochastic Calculus]] | [[game-theory|Game Theory]] | [[market-microstructure|Market Microstructure]]
