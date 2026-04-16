---
title: "(B,S)-Market and Self-Financing Strategies"
category: "Pricing Models"
order: 120
lang: "en"
---

# (B,S)-Market and Self-Financing Strategies

The `(B,S)`-market is the canonical discrete-time financial market model in Shiryaev's textbook. It is the minimal setting in which it makes sense to talk about portfolios, profits, arbitrage, and hedging: one risk-free bank account `B` and one (or several) risky asset `S` evolving on a filtered probability space.

It is in this setting that Shiryaev introduces the notion of a **self-financing strategy** — a portfolio in which any change in capital must come from price movement, never from external cash injections. This technical requirement looks innocuous, but it is precisely what gives mathematical meaning to the fundamental theorems of arbitrage and to the hedging-price formula for European options.

## The Model

Let $(\Omega, \mathcal{F}, (\mathcal{F}_n)_{n \geq 0}, \mathbb{P})$ be a filtered probability space. $\mathcal{F}_n$ is interpreted as "all the information available to market participants by time $n$."

The market consists of $d+1$ assets:

- **Bank account** $B = (B_n)_{n \geq 0}$ — a positive process with $B_n$ being $\mathcal{F}_{n-1}$-measurable (predictable).
- **Risky assets** $S = (S^1, \ldots, S^d)$ where $S^i_n$ is $\mathcal{F}_n$-measurable (adapted).

The fundamental asymmetry: the bank account is "known tomorrow already today" (predictable), while the stock price $S_n$ is only revealed at time $n$.

Simple returns:

$$r_n = \frac{\Delta B_n}{B_{n-1}}, \qquad \rho^i_n = \frac{\Delta S^i_n}{S^i_{n-1}}.$$

So that

$$B_n = B_0 \prod_{k=1}^{n} (1 + r_k), \qquad S^i_n = S^i_0 \prod_{k=1}^{n} (1 + \rho^i_k).$$

## Strategy and Capital

A **strategy (portfolio)** is a predictable sequence $\pi = (\beta, \gamma)$, where $\beta_n$ is the number of bank-account units and $\gamma_n = (\gamma^1_n, \ldots, \gamma^d_n)$ the number of shares of each type held at time $n$. Predictability $\beta_n, \gamma_n \in \mathcal{F}_{n-1}$ encodes the natural condition: "tomorrow's portfolio is decided based on what I know today."

The **capital** of the portfolio:

$$X^\pi_n = \beta_n B_n + \gamma_n \cdot S_n.$$

Applying the discrete differentiation rule $\Delta(uv) = u_{n-1} \Delta v_n + v_n \Delta u_n$:

$$\Delta X^\pi_n = \underbrace{[\beta_n \Delta B_n + \gamma_n \Delta S_n]}_{\text{gain from price moves}} + \underbrace{[B_{n-1} \Delta \beta_n + S_{n-1} \Delta \gamma_n]}_{\text{rebalancing}}.$$

The "real" capital change should come only from the first bracket — from price moves — never from "moving money between pockets."

## Self-Financing

**Definition.** A strategy $\pi$ is self-financing if

$$X^\pi_n = X^\pi_0 + \sum_{k=1}^{n} \big(\beta_k \Delta B_k + \gamma_k \Delta S_k \big), \quad n \geq 1.$$

Equivalent form: $B_{n-1} \Delta \beta_n + S_{n-1} \Delta \gamma_n = 0$ for all $n \geq 1$. Any rebalancing must be budget-neutral.

In **discounted** prices $\widetilde{S}_n = S_n / B_n$ and discounted capital $\widetilde{X}^\pi_n = X^\pi_n / B_n$, self-financing collapses into a particularly elegant condition:

$$\widetilde{X}^\pi_n = \widetilde{X}^\pi_0 + \sum_{k=1}^{n} \gamma_k \cdot \Delta \widetilde{S}_k.$$

Discounted capital is a **discrete stochastic integral** of the strategy against the discounted price. This representation underpins all subsequent theory: if $\widetilde{S}$ is a martingale under some measure, then $\widetilde{X}^\pi$ is automatically a martingale too — which immediately gives the [[ftap-first-fundamental-theorem|first fundamental theorem]].

## Admissibility

In discrete time one normally imposes no sign restrictions on $\beta_n, \gamma_n$: $\beta_n < 0$ means borrowing from the bank, $\gamma^i_n < 0$ means short-selling. To rule out "doubling strategies" (strategies with unbounded negative wealth that generate sure profits via unlimited borrowing), one introduces the notion of an **admissible** strategy: $X^\pi_n \geq -a$ for some constant $a \geq 0$ at all times.

In continuous time admissibility becomes a much subtler notion — there it is tied to semimartingale stochastic integrals and their local-martingale properties.

## Connection to the broader theory

Self-financing strategies are the "right" object space on which [[arbitrage-definition|arbitrage]] is defined. If arbitrary cash injections were allowed, every profit would become trivial — so the self-financing condition fixes the competitive rules of the game.

The [[ftap-first-fundamental-theorem|first fundamental theorem]] states: the market is arbitrage-free if and only if the discounted price $\widetilde{S}$ is a martingale under some measure $\mathbb{Q} \sim \mathbb{P}$. The proof relies precisely on the representation of self-financing capital as a stochastic integral.

The [[complete-incomplete-markets|second fundamental theorem]] states: the market is complete if and only if such a martingale measure is unique. Completeness means that any required payoff can be replicated as $X^\pi_T$ by some self-financing strategy.

## Related Articles

- [[arbitrage-definition]] — definition of arbitrage in the (B,S) model.
- [[ftap-first-fundamental-theorem]] — martingale criterion for no-arbitrage.
- [[crr-model]] — the simplest nontrivial (B,S) model with binomial dynamics.
- [[complete-incomplete-markets]] — completeness criterion and uniqueness of the martingale measure.
- [[upper-lower-hedging-prices]] — what a "fair price" means on an incomplete market.
- [[brownian-motion]] — the continuous analogue of $S$, which we move to in [[semimartingale-models]].
