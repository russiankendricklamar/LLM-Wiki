---
title: "Optimal Stopping and American Options"
category: "Pricing Models"
order: 127
lang: "en"
---

# Optimal Stopping and American Options

An American option differs from a European one by a single feature — it can be exercised **at any time** before expiry, not just at maturity. This freedom turns the pricing problem from computing an expectation into an **optimal stopping problem**: the option holder picks a random time $\tau$ to maximize the discounted expected payoff.

Shiryaev gives an exhaustive treatment via the **supermartingale characterization** — the Snell construction. This is one of the most elegant pieces of the entire volume.

## The payoff

Let $G_n \geq 0$ be the payoff available to the holder if exercised at time $n$. For an American put with strike $K$:

$$G_n = (K - S_n)^+.$$

The holder seeks a **stopping time** $\tau \leq N$ (any random time adapted to the filtration $\mathcal{F}_n$) maximizing the discounted expected payoff:

$$\sup_{\tau} \mathbb{E}^\mathbb{Q}\!\left[ \frac{G_\tau}{B_\tau} \right],$$

where $\mathbb{Q}$ is an equivalent martingale measure. On a complete market $\mathbb{Q}$ is unique and this value is the correct American option price; on an incomplete market the [[upper-lower-hedging-prices|upper price]] is taken.

## The Snell envelope

The key object is the **Snell envelope** of the discounted payoff sequence $\widetilde{G}_n = G_n / B_n$.

**Definition.** The Snell envelope $V = (V_n)_{n=0}^N$ is defined by backward induction:

$$V_N = \widetilde{G}_N, \qquad V_n = \max\!\left(\widetilde{G}_n, \; \mathbb{E}^\mathbb{Q}[V_{n+1} \mid \mathcal{F}_n] \right), \quad n < N.$$

Interpretation: at each step the holder compares "exercise now" ($\widetilde{G}_n$) with "hold and continue" ($\mathbb{E}^\mathbb{Q}[V_{n+1} \mid \mathcal{F}_n]$) and picks the larger.

**Claim 1.** $V_n$ is the smallest $\mathbb{Q}$-supermartingale dominating $\widetilde{G}$:

$$V_n \geq \widetilde{G}_n, \qquad \mathbb{E}^\mathbb{Q}[V_{n+1} \mid \mathcal{F}_n] \leq V_n.$$

**Claim 2 (Doob-Meyer).** $V$ has a unique decomposition $V_n = M_n - A_n$, where $M$ is a $\mathbb{Q}$-martingale and $A$ is a predictable increasing process with $A_0 = 0$. The process $A$ measures how "early" the option should be exercised.

## The optimal stopping time

**Theorem.** The American option price at time 0 is $V_0$, and the optimal stopping time is

$$\tau^* = \inf\{ n \geq 0 \,:\, V_n = \widetilde{G}_n \}.$$

That is, exercise at the first time when "holding" stops beating immediate payoff.

**Proof (sketch).** Upper bound: for any $\tau$, by the supermartingale property $V_0 \geq \mathbb{E}^\mathbb{Q}[V_\tau] \geq \mathbb{E}^\mathbb{Q}[\widetilde{G}_\tau]$, so $V_0$ upper-bounds the price. Lower bound: at $\tau = \tau^*$ the stopped process $V^{\tau^*}$ becomes a martingale (since $A$ has not yet increased), and $V_0 = \mathbb{E}^\mathbb{Q}[V_{\tau^*}] = \mathbb{E}^\mathbb{Q}[\widetilde{G}_{\tau^*}]$.

## Hedging an American option

How does the seller replicate an obligation that can be exercised at any time? The seller must hold a portfolio that **at every time** dominates the current payoff $\widetilde{G}_n$, not just the terminal one.

This is the meaning of the [[optional-decomposition|optional decomposition]]: $V_n = M_n - A_n$. The martingale part $M$ is exactly the replicating portfolio (its capital equals $M$); the increasing part $A$ is the "consumption stream" that the seller is allowed to withdraw before the option is exercised. Details in a separate article.

## Connection to PDE: the Stefan problem

In **continuous** time optimal stopping becomes an obstacle problem — the **Stefan problem**: the price $V(t, S)$ satisfies the Black-Scholes PDE in the region where "holding" is optimal and equals the payoff $G(S)$ in the region where "exercising" is optimal. The boundary between these regions is a **free boundary** whose location is itself determined by the PDE.

For an American put on a non-dividend stock in the Black-Scholes model the free boundary $S^*(t)$ is a curve below which the put should be exercised immediately. No closed-form expression for $S^*$ exists (despite decades of effort); numerical methods — finite differences or binomial trees — are required.

Detailed discussion in the article [[stefan-problem-american|Stefan problem and American options]].

## Difference from European

On a non-dividend stock the American **call** has the same price as the European one (Merton's famous result: the optimal stopping time for a call is always $\tau = N$, i.e. wait until maturity). For the **put**, however, early exercise can be optimal, and the American put is **strictly more expensive** than the European one. It is for the put that the Stefan problem is non-trivial.

## Related Articles

- [[ftap-first-fundamental-theorem]] — the martingale measure under which the expectation is taken.
- [[optional-decomposition]] — Doob-Meyer for the Snell envelope as the basis of the hedge.
- [[stefan-problem-american]] — continuous-time analogue: PDE with obstacle.
- [[crr-model]] — binomial tree as the simplest American-option pricer.
- [[black-scholes]] — the European predecessor underlying the American case.
- [[upper-lower-hedging-prices]] — what "optimal stopping" means on an incomplete market.
- [[free-boundary-american]] — the free-boundary PDE formulation of the American exercise problem.
