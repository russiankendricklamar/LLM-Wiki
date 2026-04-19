---
slug: "/finance/complete-incomplete-markets"
title: "Complete and Incomplete Markets. Second Fundamental Theorem"
category: "Pricing Models"
order: 124
lang: "en"
---

# Complete and Incomplete Markets. Second Fundamental Theorem

If the [[ftap-first-fundamental-theorem|first fundamental theorem]] tells us "when a market model makes sense," the **second** fundamental theorem tells us "when every claim in that model can be replicated exactly." This is a qualitative leap: on a complete market the price of a derivative is unique (and equals the cost of its replicating portfolio); on an incomplete market a unique price does not exist in principle.

Shiryaev presents both theorems in parallel, which makes it visible that **completeness** is a structural property of the pair "filtration $+$ price," not of any one measure.

## Definition

Fix a horizon $N$ on a discrete [[bs-market-self-financing|(B,S)-model]]. A claim is an $\mathcal{F}_N$-measurable random variable $H$ (paid at time $N$).

**Definition.** A claim $H$ is **attainable** (replicable) if there exists an admissible self-financing strategy $\pi$ with initial capital $X^\pi_0 = x$ such that $X^\pi_N = H$ almost surely.

**Definition.** The market is **complete** if every bounded (or $L^1$-integrable under the EMM) claim $H$ is attainable.

Sanity check: on the [[crr-model|CRR market]] every function $h(\xi_1, \ldots, \xi_N)$ of the noise history is attainable — backward induction on the tree gives an explicit replicating portfolio.

## Second Fundamental Theorem

**Theorem.** An arbitrage-free market is complete if and only if the **equivalent martingale measure is unique**.

That is: on the set of all EMMs of an arbitrage-free market there is **either a single point** (complete market) **or an entire convex set** (incomplete).

## Proof idea

**$\Rightarrow$ (completeness $\Rightarrow$ uniqueness).** Suppose two distinct EMMs $\mathbb{Q}_1 \neq \mathbb{Q}_2$ exist. Then there is some $A \in \mathcal{F}_N$ with $\mathbb{Q}_1(A) \neq \mathbb{Q}_2(A)$. The indicator $H = \mathbf{1}_A$ is a bounded claim. By completeness $H = X^\pi_N$ for some strategy. Then

$$\mathbb{Q}_1(A) = \mathbb{E}^{\mathbb{Q}_1}[X^\pi_N] / B_N = X^\pi_0 / B_N = \mathbb{E}^{\mathbb{Q}_2}[X^\pi_N] / B_N = \mathbb{Q}_2(A),$$

a contradiction.

**$\Leftarrow$ (uniqueness $\Rightarrow$ completeness).** This direction is more delicate; the key technical ingredient is a martingale representation theorem: under a unique EMM every $\mathbb{Q}$-martingale is representable as a stochastic integral against $\widetilde{S}$. In discrete time this reduces to linear algebra at each node.

## Pricing a claim

On a **complete** market every claim $H$ has a unique arbitrage price

$$\Pi_0(H) = B_0 \cdot \mathbb{E}^\mathbb{Q}\!\left[ \frac{H}{B_N} \right],$$

and this price equals the initial capital of the replicating portfolio. The price is unique because the EMM is unique.

On an **incomplete** market the martingale measures form an entire set $\mathcal{M}^e$, each yielding its own "price":

$$\Pi^\mathbb{Q}_0(H) = B_0 \cdot \mathbb{E}^\mathbb{Q}[H / B_N], \quad \mathbb{Q} \in \mathcal{M}^e.$$

All such prices lie in an interval $[\Pi^-_0(H), \Pi^+_0(H)]$ whose endpoints are the [[upper-lower-hedging-prices|lower and upper hedging prices]]. Any price inside the interval is arbitrage-consistent, but **none** is replicated exactly: there is either a "super-hedge" from above or a "sub-hedge" from below.

## Examples of complete and incomplete markets

**Complete:**
- [[crr-model|CRR binomial]] — two noise states, two price paths, one EMM.
- [[geometric-brownian-motion|GBM in Black-Scholes]] — one Brownian motion, unique EMM, every payoff replicable.
- A finite market on which the number of "independent" noise sources equals the number of traded assets.

**Incomplete:**
- Trinomial model (three states, one asset) — two equations on $q_u, q_m, q_d$, one extra direction, an entire line of EMMs.
- [[heston-model|Heston model]] — stochastic volatility as a non-traded risk factor; one stock, two noises.
- Models with jumps — one Brownian plus a Poisson piece and the market becomes incomplete.
- Every real market.

## What to do on an incomplete market

Shiryaev discusses three approaches in detail:

1. **Super-hedging** — find a strategy with the smallest initial capital that surely covers the claim under every scenario (see [[upper-lower-hedging-prices|upper price]]).
2. **Mean-square error minimization** — the Föllmer-Schweizer strategy minimizing $\mathbb{E}[(H - X^\pi_N)^2]$ under the original measure $\mathbb{P}$ (see [[follmer-schweizer]]).
3. **Minimal martingale measure** — pick one canonically distinguished EMM (e.g. minimizing relative entropy or mean-square deviation) and price under it. This is no longer an "arbitrage price" but a "price under a chosen risk model."

Each approach is an **additional choice** that the market itself does not make. Pure arbitrage theory ends here and risk management begins.

## Related Articles

- [[bs-market-self-financing]] — the model in which completeness is defined.
- [[ftap-first-fundamental-theorem]] — the first theorem, of which this is the dual.
- [[crr-model]] — the simplest complete-market example.
- [[upper-lower-hedging-prices]] — what a price means when the EMM is not unique.
- [[optional-decomposition]] — technical backbone of super-hedging on incomplete markets.
- [[heston-model]] — canonical incomplete-market example from practice.
- [[follmer-schweizer]] — the mean-square hedging strategy.
