---
title: "Asymptotic Arbitrage and Large Markets"
category: "Pricing Models"
order: 129
lang: "en"
slug: "asymptotic-arbitrage-large-markets"
---

# Asymptotic Arbitrage and Large Markets

## Overview

What happens to the notion of [[arbitrage-definition|arbitrage]] when the number of traded assets grows to infinity? This is not a scholastic question — real economies trade enormous numbers of instruments, and Ross's APT (Arbitrage Pricing Theory, 1976) is in principle formulated in the limit $N \to \infty$.

Shiryaev ([[shiryaev-stochastic-finance|Vol. 2, Ch. VI, §3]]) formalizes this limit via the notion of a **large financial market** — an infinite sequence of arbitrage-free markets $(S^k)_{k \geq 1}$ — and introduces **asymptotic arbitrage**: a strategy that on the $k$-th market is not arbitrage but in the limit $k \to \infty$ becomes "ever better."

## The large market

**Definition.** A large financial market is a sequence $(S^k, \mathcal{F}^k, \mathbb{P}^k)_{k \geq 1}$ of discrete arbitrage-free models, each on its own filtered probability space. No a priori connection between $S^k$ and $S^{k+1}$ is assumed, but typically one has nested models (new assets added to old) or a triangular array (e.g. binomial approximations to Black-Scholes with $k$ time steps).

At every fixed $k$ the model is arbitrage-free and admits an [[ftap-first-fundamental-theorem|EMM]] $\mathbb{Q}^k$. The question is what happens to the entire family $(\mathbb{Q}^k)$ in the limit.

## Asymptotic arbitrage

**Definition (AA of the first kind).** A family of strategies $(\pi^k)_{k \geq 1}$ is an **asymptotic arbitrage of the first kind** if

1. $X^{\pi^k}_0 = 0$,
2. $X^{\pi^k}_{N_k} \geq -c_k$ a.s., where $c_k \to 0$ as $k \to \infty$,
3. $\liminf_{k \to \infty} \mathbb{P}^k(X^{\pi^k}_{N_k} \geq \varepsilon) > 0$ for some $\varepsilon > 0$.

In words: on every finite market the strategy "loses less and less" while "winning more and more often." In the limit risk vanishes, profit remains.

**Definition (AA of the second kind).** A family $(\pi^k)$ is an **asymptotic arbitrage of the second kind** if it is surely profitable in the limit: $\mathbb{P}^k(X^{\pi^k}_{N_k} \geq c) \to 1$ for some $c > 0$.

AA is a natural strengthening of classical arbitrage: nothing dramatic happens "here and now" but in the asymptotic limit the model becomes pathological.

## Contiguity as a criterion

The main technical tool is **contiguity** of measure sequences, going back to Le Cam (1960).

**Definition.** A sequence $(\mathbb{Q}^k)$ is contiguous w.r.t. $(\mathbb{P}^k)$ (written $\mathbb{Q}^k \triangleleft \mathbb{P}^k$) if for every sequence of events $A_k$, $\mathbb{P}^k(A_k) \to 0$ implies $\mathbb{Q}^k(A_k) \to 0$.

Contiguity is the asymptotic analogue of absolute continuity. Unlike strict continuity, which is preserved under limits, contiguity is weaker but sufficient for many arguments.

**Theorem (Kabanov-Kramkov, 1994).** A large market is free of asymptotic arbitrage of the first kind if and only if for every $k$ an EMM $\mathbb{Q}^k$ can be chosen so that $\mathbb{Q}^k \triangleleft \mathbb{P}^k$ and $\mathbb{P}^k \triangleleft \mathbb{Q}^k$ (mutual contiguity).

That is: classical [[ftap-first-fundamental-theorem|FTAP]] requires **equivalence** $\mathbb{Q} \sim \mathbb{P}$ on every finite market, while large markets require **mutual contiguity** of the sequences. This is the right generalization of "no free lunch" to the infinite case.

## Connection to Ross's APT

The APT idea: if a market has many assets with factor returns $r_i = \alpha_i + \beta_i \cdot F + \varepsilon_i$, where $\varepsilon_i$ are independent idiosyncratic shocks, then absence of asymptotic arbitrage forces an "approximate" linear dependence $\alpha_i \approx \lambda \cdot \beta_i$ for the overwhelming majority of assets. This is the fundamental factor representation.

Formally: the discrepancy $\sum_i (\alpha_i - \lambda \beta_i)^2$ must be bounded. This is "no asymptotic free lunch."

## Model convergence and contiguity

Contiguity is also responsible for **model convergence**: when approximating the [[black-scholes|continuous Black-Scholes model]] by a sequence of [[crr-model|binomial models]] with steps $\Delta t = T/k$, contiguity of the historical and risk-neutral measure sequences ensures that binomial option prices converge to BS prices.

Without contiguity this convergence could fail (the limit measure might "forget" null sets). Shiryaev in §3c-3d uses contiguity precisely for this purpose.

## Practical significance

In practice AA appears in models that are **formally arbitrage-free** at each step but **diversify in the limit** so heavily that with infinitely many assets the risk vanishes entirely. Examples:

- Long-short portfolios of many small independent bets (typical of **statistical arbitrage**).
- Hyperactive high-frequency strategies in the infinite-trading-frequency limit.
- Cross-sectional factor strategies aggregating hundreds of signals (see [[alpha-stacking]]).

In each case AA theory says: the model is technically arbitrage-free but this is illusory — adding enough assets makes "arbitrage" possible in the limit.

## Related Topics

- [[arbitrage-definition]] — the classical definition that AA generalizes asymptotically.
- [[ftap-first-fundamental-theorem]] — finite-dimensional analogue of the Kabanov-Kramkov theorem.
- [[crr-model]] — sequence of CRR models converges to Black-Scholes via contiguity.
- [[black-scholes]] — target model of such approximations.
- [[alpha-stacking]] — practical context for "diversification in the limit."
- [[fama-macbeth-regression]] — APT-style factor models in empirical work.
