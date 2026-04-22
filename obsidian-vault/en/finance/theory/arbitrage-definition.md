---
slug: "/finance/arbitrage-definition"
title: "Arbitrage and Its Absence"
category: "Pricing"
order: 121
lang: "en"
---

# Arbitrage and Its Absence

"Arbitrage" is the technical heart of all modern financial mathematics. In Shiryaev the notion is introduced rigorously and then exploited again and again as the **main filter**: market models that admit arbitrage are deemed unrealistic and unfit as foundations for pricing theory. Every pricing formula — Black-Scholes, Bachelier, binomial — is a consequence of the requirement "the model must be arbitrage-free."

## Intuition

A "free lunch" is a strategy that:

1. costs nothing to set up,
2. never produces a loss,
3. produces a profit with positive probability.

If such a strategy exists the market is "irrational," and any pricing theory collapses: arbitrarily large profits can be made without risk.

## Formal Definition

In the discrete [[bs-market-self-financing|(B,S)-model]] with horizon $N$:

**Definition 1.** A self-financing strategy $\pi$ is an **arbitrage opportunity** if

$$X^\pi_0 = 0, \qquad \mathbb{P}(X^\pi_N \geq 0) = 1, \qquad \mathbb{P}(X^\pi_N > 0) > 0.$$

**Definition 2.** The market is **arbitrage-free** (NA, no-arbitrage) if no arbitrage opportunities exist — that is, for every admissible self-financing $\pi$ with $X^\pi_0 = 0$, $\mathbb{P}(X^\pi_N \geq 0) = 1$ implies $\mathbb{P}(X^\pi_N = 0) = 1$.

In **discounted** prices: zero at the start, non-negative at the end, positive with positive probability — everything is formulated identically because discounting is monotone.

## Equivalent Formulations

Shiryaev gives several technical equivalents of NA, each useful in a different context:

1. **Via the set of attainable claims.** Let $\mathcal{A}_0 = \{X^\pi_N : \pi \text{ self-fin.}, X^\pi_0 = 0\}$ be the set of terminal capitals reachable from zero. Then NA $\iff \mathcal{A}_0 \cap L^0_+ = \{0\}$, where $L^0_+$ denotes the non-negative random variables.

2. **Via discounted increments.** NA means there is no predictable $(\gamma_n)$ with $\sum_n \gamma_n \Delta \widetilde{S}_n \geq 0$ a.s. and $> 0$ with positive probability.

3. **Geometrically.** The set $\mathcal{A}_0$ is a convex cone, and NA says that this cone meets the positive orthant only at the origin. This is exactly what unlocks the separation theorem and produces the martingale measure.

## Strengthenings and Generalizations

In discrete time NA suffices for the entire theory. In **continuous** time subtleties appear and stronger versions are used:

- **NFLVR (No Free Lunch with Vanishing Risk)** — Delbaen and Schachermayer, 1994. Forbids not only arbitrage but also sequences of "almost-arbitrages" whose risk vanishes in the limit. This is the right condition for semimartingale models.
- **NA1 / NUPBR (No Unbounded Profit with Bounded Risk)** — weaker than NFLVR, but sufficient for the existence of a numéraire and for pricing.

In discrete time all these conditions reduce to classical NA — and Shiryaev confines himself to NA in.

## Why bother: the first fundamental theorem

The key result that justifies the whole formalism is the **first fundamental theorem of financial mathematics (FTAP)**: the market is arbitrage-free if and only if there exists an equivalent martingale measure $\mathbb{Q} \sim \mathbb{P}$ under which the discounted price $\widetilde{S}$ is a martingale.

The "$\Rightarrow$" direction is proved by separation (the convex cone of attainable $L^0$-claims does not meet the positive orthant, so there exists a separating hyperplane that, after normalization, becomes a martingale measure). A detailed proof lives in [[ftap-first-fundamental-theorem|its own article]].

## A note on realism

In real markets arbitrage opportunities appear and disappear instantly — algorithmic trading on millisecond scales is largely about exploiting them. So "no arbitrage" is not a description of fact but a **modelling axiom**: we build models so that they admit no free lunches, even though real markets transiently do. The same logic applies in physics where perpetual-motion machines are axiomatically forbidden.

Conversely, many observed "anomalies" (statistical arbitrage, mean-reversion strategies) are not arbitrage in the strict sense — they carry risk and can lose money. These strategies live outside the FTAP picture and require their own risk models.

## Related Articles

- [[bs-market-self-financing]] — the model in which arbitrage is defined.
- [[ftap-first-fundamental-theorem]] — martingale characterization of NA.
- [[complete-incomplete-markets]] — completeness and uniqueness of the martingale measure.
- [[crr-model]] — the simplest example of an arbitrage-free market.
- [[asymptotic-arbitrage-large-markets]] — what happens to NA in the infinite-asset limit.
- [[semimartingale-models]] — the move to continuous time and NFLVR.
