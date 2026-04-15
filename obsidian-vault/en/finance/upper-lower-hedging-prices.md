---
title: "Upper and Lower Hedging Prices"
category: "Pricing Models"
order: 125
lang: "en"
---

# Upper and Lower Hedging Prices

On an [[complete-incomplete-markets|incomplete market]] there is no ordinary "arbitrage price" of a derivative: the equivalent martingale measures form an entire convex set, and each yields a different price. So what does "fair price" even mean, and how do we compute it?

Shiryaev answers via **upper and lower hedging prices** — the two endpoints of the interval that contains every price consistent with no-arbitrage. This is a fully rigorous generalization: the price becomes not a number but an **interval**.

## Definitions

Let $H$ be a European claim paid at time $N$.

The **upper price** (super-replication price) is the smallest initial capital from which one can build a self-financing strategy that **surely** dominates the obligation:

$$\Pi^+_0(H) = \inf\!\left\{ x \geq 0 \,:\, \exists \pi \text{ self-fin.}, X^\pi_0 = x, \, X^\pi_N \geq H \text{ a.s.} \right\}.$$

The **lower price** is the maximum capital one can "extract" from the obligation without creating arbitrage:

$$\Pi^-_0(H) = \sup\!\left\{ x \geq 0 \,:\, \exists \pi \text{ self-fin.}, X^\pi_0 = -x, \, X^\pi_N + H \geq 0 \text{ a.s.} \right\}.$$

In words: $\Pi^+_0$ is the seller's price (the minimum starting capital from which the obligation can be hedged from above), $\Pi^-_0$ is the buyer's price (how much one can borrow against the obligation while remaining sure not to default).

## Dual characterization

The main result is the link between upper/lower prices and the set $\mathcal{M}^e$ of all equivalent martingale measures:

$$\Pi^+_0(H) = \sup_{\mathbb{Q} \in \mathcal{M}^e} \mathbb{E}^\mathbb{Q}[H / B_N], \qquad \Pi^-_0(H) = \inf_{\mathbb{Q} \in \mathcal{M}^e} \mathbb{E}^\mathbb{Q}[H / B_N].$$

That is:

- Upper price = **supremum** of the expectation over all risk-neutral measures.
- Lower price = **infimum** of the same expectation.

This duality (the "super-hedging duality" of El Karoui-Quenez and Kramkov) is the financial counterpart of the Hahn-Banach theorem: the primal problem (minimizing capital $x$) and the dual (maximizing the expectation) have the same value.

## Interval of consistent prices

**Theorem (price trichotomy).** In an arbitrage-free model, for every claim $H$:

$$\Pi^-_0(H) \leq \mathbb{E}^\mathbb{Q}[H / B_N] \leq \Pi^+_0(H), \quad \forall \mathbb{Q} \in \mathcal{M}^e.$$

Any price $p \in (\Pi^-_0(H), \Pi^+_0(H))$ is consistent with no-arbitrage: adding to the market an instrument trading at $p$ creates no arbitrage opportunity. Any price outside the interval **does** create arbitrage.

If the market is complete, $\mathcal{M}^e = \{\mathbb{Q}\}$ and the interval collapses to a point: $\Pi^-_0(H) = \Pi^+_0(H) = \mathbb{E}^\mathbb{Q}[H/B_N]$. This is the classical arbitrage price.

## Attainability and exact replication

On an incomplete market a claim $H$ is **attainable** if there exists a strategy with $X^\pi_N = H$ a.s. Attainability is equivalent to $\mathbb{E}^\mathbb{Q}[H/B_N]$ being **independent** of the choice of $\mathbb{Q} \in \mathcal{M}^e$. So the attainable claims are exactly those for which upper and lower prices coincide.

On a complete market all claims are attainable; on an incomplete one only a subset is. Everything else has a non-trivial price interval.

## Constructive computation

In discrete time $\Pi^+_0(H)$ can be computed by **backward induction**:

$$V^+_N = H, \qquad V^+_n = \sup_{\mathbb{Q} \in \mathcal{M}^e_n} \mathbb{E}^\mathbb{Q}\!\left[\frac{B_n}{B_{n+1}} V^+_{n+1} \,\middle|\, \mathcal{F}_n \right],$$

where $\mathcal{M}^e_n$ are the conditional martingale measures at step $n$. Then $\Pi^+_0(H) = V^+_0$. For the lower price replace $\sup$ by $\inf$.

In a trinomial "up / mid / down" model this is a linear-programming exercise at every node.

## Connection to risk aversion

Real prices typically lie **below** $\Pi^+_0$: the hedger takes some risk and accepts a smaller premium than the absolute super-hedge. This is where utility functions, minimum-entropy martingale measures, and **utility indifference pricing** enter — but they take us beyond pure arbitrage theory.

## Related Articles

- [[complete-incomplete-markets]] — where this interval is needed and where it collapses to a point.
- [[ftap-first-fundamental-theorem]] — describes the set $\mathcal{M}^e$ over which sup/inf is taken.
- [[optional-decomposition]] — the theorem ensuring existence of a super-hedging strategy.
- [[follmer-schweizer]] — alternative to super-hedging: mean-square error minimization.
- [[heston-model]] — a market where the price interval is real and non-trivial.
- [[barrier-asian-options]] — exotic options for which the interval is especially wide.
