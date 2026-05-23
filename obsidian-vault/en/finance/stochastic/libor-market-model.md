---
title: LIBOR Market Model (LMM)
category: Stochastic Calculus
order: 155
lang: en
slug: libor-market-model
---

# LIBOR Market Model (LMM)

The LIBOR Market Model (or BGM - Brace-Gatarek-Musiela model) is designed to model simply-compounded forward rates directly, matching market practices (like Black's formula for caps) overcoming the lognormal contradictions of the HJM framework for continuously compounded rates.

## Lognormal Forward Rates

Let $L_j(t) = L(t; T_j, T_{j+1})$ be the forward LIBOR rate spanning $[T_j, T_{j+1}]$. LMM assumes lognormal dynamics for each forward rate under its respective forward measure $\mathbb{Q}^{T_{j+1}}$:
$$ dL_j(t) = \sigma_j(t) L_j(t) dW_t^{j+1} $$
where $W^{j+1}$ is a Brownian motion under the $T_{j+1}$-forward measure.

## Measure Change and Drift

To simulate all rates simultaneously, one must choose a single terminal measure (e.g., $\mathbb{Q}^{T_N}$) or a spot measure. Changing measures induces a complex drift term via Girsanov's theorem. Under the spot measure $\mathbb{Q}^d$, the dynamics are:
$$ dL_j(t) = L_j(t) \sigma_j(t) \cdot \left( \sum_{k=m(t)}^j \frac{\delta_k L_k(t) \sigma_k(t)}{1 + \delta_k L_k(t)} \right) dt + L_j(t) \sigma_j(t) \cdot dW_t^d $$
where $\delta_k = T_{k+1} - T_k$ and $m(t)$ is the index of the next maturity.

## Calibration and Implementation

LMM allows exact calibration to market caps/floors and swaptions using Rebonato's approximation or Monte Carlo simulation, heavily relying on advanced [[numerical-methods]] and change-of-numeraire techniques.
