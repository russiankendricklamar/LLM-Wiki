---
title: "Kramkov Optional Decomposition"
category: "Pricing Models"
order: 128
lang: "en"
slug: "optional-decomposition"
---

# Kramkov Optional Decomposition

## Overview

The optional decomposition is the technical heart of super-hedging on [[complete-incomplete-markets|incomplete markets]]. It generalises the classical Doob-Meyer decomposition (which works under one measure) to the case where the candidate measure is an entire family $\mathcal{M}^e$ of equivalent martingale measures.

The result was proved by Kramkov in 1996 and presented in Shiryaev — it became the key to the dual formula for the [[upper-lower-hedging-prices|upper hedging price]]: $\Pi^+_0(H) = \sup_{\mathbb{Q} \in \mathcal{M}^e} \mathbb{E}^\mathbb{Q}[H/B_N]$.

## Doob-Meyer recap

In the classical case a supermartingale $V$ under a single measure $\mathbb{Q}$ has a unique decomposition

$$V_n = M_n - A_n,$$

where $M$ is a $\mathbb{Q}$-martingale and $A$ is a **predictable** increasing process with $A_0 = 0$. This decomposition was used in pricing [[optimal-stopping-american|American options]] on complete markets.

The problem: when $\mathbb{Q}$ is not unique the Doob-Meyer decomposition depends on the choice of $\mathbb{Q}$, so the predictable part $A$ is "measure-dependent." Useless for a universal hedging strategy.

## Optional decomposition

**Theorem (Kramkov, Föllmer-Kabanov).** Let $V = (V_n)_{n=0}^N$ be a process that is a $\mathbb{Q}$-supermartingale for **every** $\mathbb{Q} \in \mathcal{M}^e$. Then a decomposition exists of the form

$$V_n = V_0 + \sum_{k=1}^{n} \gamma_k \cdot \Delta \widetilde{S}_k - C_n,$$

where:

- $\gamma = (\gamma_k)$ is a predictable strategy (number of shares),
- $C = (C_n)$ is an **adapted** (optional, hence the name) increasing process with $C_0 = 0$.

In words: $V$ can be represented as **self-financing capital** $\widetilde{X}^\pi$ minus a non-decreasing consumption process $C$.

**Difference from Doob-Meyer.** The classical $A$ is predictable but measure-dependent. The optional $C$ is only adapted (optional), but **universal** — the same strategy $\gamma$ works simultaneously under every martingale measure. This trades "predictability" for "universality."

## Application to super-hedging

Let $H$ be a European claim and $V_n = \mathrm{esssup}_{\mathbb{Q} \in \mathcal{M}^e} \mathbb{E}^\mathbb{Q}[H/B_N \mid \mathcal{F}_n]$ be the **upper price** at time $n$. This is a $\mathbb{Q}$-supermartingale for every $\mathbb{Q}$ (essential-supremum property), so the optional decomposition applies.

We get

$$V_N = V_0 + \sum_{k=1}^{N} \gamma_k \cdot \Delta \widetilde{S}_k - C_N.$$

Since $V_N \geq H$ a.s. (by definition of the upper price), the strategy with initial capital $V_0$ and shares $\gamma_k$:

- yields capital $V_0 + \sum_k \gamma_k \cdot \Delta\widetilde{S}_k = V_N + C_N \geq V_N \geq H$,
- i.e. **surely covers** the obligation $H$ at time $N$.

This is the **super-hedging strategy** whose existence is postulated in the definition of $\Pi^+_0(H)$. Kramkov proves that the initial capital $V_0$ equals the dual quantity $\sup_\mathbb{Q} \mathbb{E}^\mathbb{Q}[H/B_N]$. This is **super-hedging duality**.

## Optional decomposition and American options

For an [[optimal-stopping-american|American option]] the price $V_n$ is a Snell envelope, automatically a supermartingale under every martingale measure. The optional decomposition gives the seller a hedging strategy that works **simultaneously under every EMM**: in an incomplete market the seller does not know the "true" risk-neutral measure but can build a universal hedge.

The increasing process $C$ is interpreted as "excess margin" that the seller is allowed to withdraw between exercise opportunities. If the option is held until maturity, $C_N$ is the surplus left on the seller's account.

## Proof (sketch)

Construct $\gamma_n$ and $C_n$ by backward induction. At each step the problem is: given $V_{n-1}$ (known) and $V_n$ ($\mathcal{F}_n$-measurable random), find $\gamma_n \in \mathcal{F}_{n-1}$ and $\Delta C_n \geq 0$ such that

$$V_n = V_{n-1} + \gamma_n \cdot \Delta \widetilde{S}_n - \Delta C_n.$$

Existence of $\gamma_n$ follows from $V$ being a supermartingale under every $\mathbb{Q} \in \mathcal{M}^e$: the set of admissible "moves into the cone of attainable claims" contains the vector $V_{n-1} - V_n$, proven via the bipolar theorem for cones. Once $\gamma_n$ is fixed, the residual $\Delta C_n \geq 0$ is uniquely determined.

In discrete time this is a convex-optimization exercise. In continuous time it is much more delicate, but the idea is the same.

## Connection to duality theory

The optional decomposition is the financial language for **Lagrangian duality** in the super-hedging problem:

- **Primal**: minimize $x$ such that there exists $\pi$ with $X^\pi_0 = x$ and $X^\pi_N \geq H$.
- **Dual**: maximize $\mathbb{E}^\mathbb{Q}[H/B_N]$ over $\mathbb{Q} \in \mathcal{M}^e$.

Kramkov's theorem says **the values of these two problems are equal** and both are attained. This is the financial counterpart of strong duality in linear programming.

## Related Topics

- [[upper-lower-hedging-prices]] — the definition for which optional decomposition is the main tool.
- [[complete-incomplete-markets]] — the setting where a universal hedging strategy is needed.
- [[optimal-stopping-american]] — where optional decomposition extends Doob-Meyer.
- [[ftap-first-fundamental-theorem]] — basis for the existence of $\mathcal{M}^e$ on which duality runs.
- [[follmer-schweizer]] — alternative hedging via $L^2$-error minimization.
- [[semimartingale-models]] — continuous analogue, where optional decomposition becomes a representation theorem for $\sigma$-martingales.
