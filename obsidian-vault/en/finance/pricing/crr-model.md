---
slug: "/finance/crr-model"
title: "Cox-Ross-Rubinstein Binomial Model (CRR)"
category: "Pricing Models"
order: 123
lang: "en"
---

# Cox-Ross-Rubinstein Binomial Model (CRR)

The Cox-Ross-Rubinstein model (1979) is the simplest non-trivial arbitrage-free and **complete** [[bs-market-self-financing|(B,S)-model]]. In Shiryaev it plays the role of a worked example: the unique martingale measure is computed explicitly, the replicating portfolio is built explicitly, and the binomial option-pricing formula falls out directly — and in the limit converges to the [[black-scholes|Black-Scholes formula]].

CRR is the "arithmetic" of arbitrage theory: everything that requires functional analysis and separation theorems in the general case here reduces to a single linear equation.

## Model

Time is discrete, $n = 0, 1, \ldots, N$. One risk-free asset with deterministic rate $r > -1$:

$$B_n = (1 + r)^n.$$

One risky asset multiplied at each step by one of two constants:

$$S_n = S_{n-1} \cdot \xi_n, \quad \xi_n \in \{u, d\},$$

where $u > d > 0$. The random variables $\xi_1, \ldots, \xi_N$ are i.i.d. under $\mathbb{P}$:

$$\mathbb{P}(\xi_n = u) = p, \quad \mathbb{P}(\xi_n = d) = 1 - p.$$

Filtration $\mathcal{F}_n = \sigma(\xi_1, \ldots, \xi_n)$.

## No-arbitrage condition

**Claim.** The market is arbitrage-free if and only if

$$d < 1 + r < u.$$

Proof: if $1 + r \leq d$, buying the stock on credit yields a sure profit ($S$ grows at least as $d$, debt grows only as $1+r$). If $1 + r \geq u$, short-selling and parking the cash gives a sure profit. So both weak inequalities are forbidden.

When $d < 1 + r < u$ the model is arbitrage-free, and [[ftap-first-fundamental-theorem|FTAP]] guarantees the existence of a martingale measure. In CRR it can be found in closed form.

## Martingale measure

We seek a measure $\mathbb{Q}$ under which $\widetilde{S}_n = S_n / B_n$ is a martingale. The condition $\mathbb{E}^\mathbb{Q}[\widetilde{S}_{n+1} \mid \mathcal{F}_n] = \widetilde{S}_n$ collapses to a single equation in $\mathbb{Q}(\xi_{n+1} = u) = q$:

$$q \cdot u + (1-q) \cdot d = 1 + r.$$

Solution:

$$q = \frac{(1+r) - d}{u - d}.$$

The condition $d < 1 + r < u$ ensures $q \in (0, 1)$, i.e. $\mathbb{Q} \sim \mathbb{P}$. Note that the **true** probability $p$ has dropped out: $\mathbb{Q}$ depends only on the market structure, not on the investor's subjective expectations. This is precisely the meaning of "risk-neutral measure."

Since the solution is unique, by the [[complete-incomplete-markets|second fundamental theorem]] the CRR market is **complete**: any $\mathcal{F}_N$-measurable claim can be replicated by a self-financing strategy.

## European option price

For a claim $H = h(S_N)$ (e.g. a call $h(S) = (S - K)^+$) the arbitrage price is

$$\Pi_0(H) = (1+r)^{-N} \cdot \mathbb{E}^\mathbb{Q}[h(S_N)] = (1+r)^{-N} \sum_{k=0}^{N} \binom{N}{k} q^k (1-q)^{N-k} \cdot h\!\left(S_0 u^k d^{N-k} \right).$$

This is the **binomial formula** for the option price. For a call it takes the form

$$C_0 = S_0 \cdot \Phi(N, k^*; q') - K(1+r)^{-N} \cdot \Phi(N, k^*; q),$$

where $q' = qu/(1+r)$, $k^* = \lceil \log(K/(S_0 d^N)) / \log(u/d) \rceil$, and $\Phi$ is a binomial tail. This is the discrete analogue of the [[black-scholes|Black-Scholes formula]] $S_0 N(d_1) - K e^{-rT} N(d_2)$.

## Replicating portfolio (hedging)

Working backwards from the terminal nodes, at each node we compute the delta:

$$\gamma_n = \frac{V_{n+1}^u - V_{n+1}^d}{S_{n-1}(u - d)},$$

where $V_{n+1}^{u/d}$ is the option value at the up/down successor node. This is **discrete delta hedging**: the share count equals the finite difference of the option price w.r.t. the stock price.

In the limit $N \to \infty$ with the right choice of $u, d$ (e.g. $u = e^{\sigma\sqrt{\Delta t}}$, $d = e^{-\sigma\sqrt{\Delta t}}$, $r = e^{\rho \Delta t} - 1$), discrete delta converges to the classical Black-Scholes delta $\partial C / \partial S = N(d_1)$.

## Convergence to Black-Scholes

Fix a horizon $T$, partition into $N$ steps of length $\Delta t = T/N$, and parametrize

$$u = e^{\sigma\sqrt{\Delta t}}, \quad d = e^{-\sigma\sqrt{\Delta t}}, \quad 1 + r = e^{\rho \Delta t}.$$

Then $\log S_N$ as $N \to \infty$ converges in distribution to $\log S_0 + (\rho - \sigma^2/2) T + \sigma W_T$, where $W$ is Brownian motion under $\mathbb{Q}$. The European call price from the binomial formula converges to the classical [[black-scholes|Black-Scholes formula]]:

$$C_0 \to S_0 N(d_1) - K e^{-\rho T} N(d_2).$$

This is the most transparent existing derivation of BS.

## Why this matters in practice

CRR is surprisingly often used in industry not as a "toy" but as a **working tool** for stock options with discrete dividends and for American options: the tree recursion extends easily to checking the early-exercise condition, which PDE methods do not handle as visually.

## Related Articles

- [[bs-market-self-financing]] — the general model CRR is a special case of.
- [[arbitrage-definition]] — in CRR no-arbitrage reduces to $d < 1+r < u$.
- [[ftap-first-fundamental-theorem]] — the martingale measure in CRR is found explicitly.
- [[complete-incomplete-markets]] — CRR is complete because the martingale measure is unique.
- [[black-scholes]] — the limit of CRR as $N \to \infty$.
- [[geometric-brownian-motion]] — continuous analogue of binomial dynamics.
- [[optimal-stopping-american]] — the CRR tree extends naturally to American options.
