---
slug: "/math/convergence-stochastic-integrals"
title: "Convergence of Stochastic Integrals"
category: "Stochastic Calculus"
order: 5
lang: "en"
---

# Convergence of Stochastic Integrals

One of the most delicate questions in the theory of stochastic processes: if $X^n \Rightarrow X$ weakly in the [[skorokhod-topology|Skorokhod space]] $D$, does it follow that $\int H^n\, dX^n \Rightarrow \int H\, dX$? In general, the answer is **no** — weak convergence of integrators does not imply convergence of integrals. But Jacod and Shiryaev identify the precise additional condition that makes it work: the **UT (uniform tightness)** condition on the sequence $(X^n)$. Under UT, the integrators are "uniformly good" and stochastic integration is continuous as a map from (integrand, integrator) pairs to integral processes. This result is the theoretical backbone for proving that discrete approximation schemes converge to their continuous-time counterparts — a fact fundamental to mathematical finance, numerical analysis of SDEs, and high-frequency econometrics.

## The Problem

Let $X^n$ be a sequence of semimartingales and $H^n$ a sequence of predictable processes. Consider the stochastic integrals

$$Y^n_t = \int_0^t H^n_s\, dX^n_s = (H^n \cdot X^n)_t.$$

The question is: if $X^n \Rightarrow X$ and $H^n \to H$ in some sense, does $Y^n \Rightarrow Y = \int H\, dX$?

The difficulty is that the stochastic integral is defined pathwise only for special classes of integrands, and the map $(H, X) \mapsto H \cdot X$ is not continuous in the Skorokhod topology. A simple example: let $X^n_t = \sin(nt)/\sqrt{n}$, which converges uniformly to zero, and $H^n_t = \sqrt{n}\cos(nt)$, which is bounded in $L^2$ but oscillates wildly. Then $\int H^n\, dX^n$ does not converge to zero. The issue is that $X^n$ converges as a function but not as an integrator — it oscillates too fast.

## Good Sequences and the UT Condition

**Definition.** A sequence $(X^n)$ of semimartingales is a **good sequence** if for every sequence $(H^n)$ of predictable processes with $|H^n| \leq 1$, the sequence of stochastic integrals $(\int_0^T H^n\, dX^n)$ is tight in $\mathbb{R}$.

This is exactly the UT condition from the theory of [[tightness-semimartingales|tightness]]. In terms of the [[predictable-compensator|predictable triplet]] $(B^n, C^n, \nu^n)$, UT is equivalent to tightness of:

- $\text{Var}(B^n)_T$ (total variation of the drift),
- $C^n_T$ (accumulated continuous quadratic variation),
- $\int_0^T \int (|x|^2 \wedge 1)\, \nu^n(ds, dx)$ (integrated small-jump intensity).

The UT condition says: the integrators $(X^n)$ do not become "too rough" — their drift, diffusion, and jump components all remain bounded in probability.

## The Main Theorem

**Theorem (Jakubowski-Memin-Pages; Kurtz-Protter).** Let $(X^n)$ be a sequence of semimartingales satisfying UT, and let $(H^n)$ be predictable processes. Suppose:

1. $X^n \Rightarrow X$ in $D$,
2. $H^n \to H$ in an appropriate sense (for instance, $H^n \xrightarrow{P} H$ locally uniformly, or $H^n$ converges in the Skorokhod topology and $X$ is continuous).

Then $H^n \cdot X^n \Rightarrow H \cdot X$ in $D$.

**Stronger version.** If additionally $(H^n, X^n) \Rightarrow (H, X)$ jointly in $D \times D$, then $(H^n, X^n, H^n \cdot X^n) \Rightarrow (H, X, H \cdot X)$ jointly. The stochastic integral is a continuous operation on the space of (integrand, integrator) pairs equipped with an appropriate topology.

The proof proceeds by: (a) using UT to establish tightness of $(H^n \cdot X^n)$, (b) identifying every subsequential limit via the [[semimartingale-models|semimartingale characteristics]] of the integral, and (c) showing the limit must be $H \cdot X$ by uniqueness of the semimartingale problem.

## The Semimartingale Topology

Emery introduced a topology on the space of semimartingales in which convergence means exactly "stochastic integrals converge":

$$d_S(X, Y) = \sum_{n=1}^{\infty} 2^{-n}\, \mathbb{E}\left[\sup_{|H| \leq 1}\left|\int_0^n H\, d(X - Y)\right| \wedge 1\right].$$

Convergence in $d_S$ implies convergence in Skorokhod topology but is strictly stronger. A sequence satisfies UT if and only if it is bounded in the semimartingale topology. The main theorem then says: on UT-bounded sets, the Skorokhod topology and the semimartingale topology generate the same notion of convergence.

This is the correct topology for financial applications: convergence in the semimartingale topology means that portfolio values $\int H\, dX^n$ converge to $\int H\, dX$, which is what one actually needs when comparing trading strategies across models.

## Application: Discrete Hedging Convergence

Consider a [[geometric-brownian-motion|Black-Scholes]] market with stock price $S_t = S_0 e^{\sigma W_t + (\mu - \sigma^2/2)t}$. The continuous-time hedge of a European option requires holding $H_t = \Delta(t, S_t)$ shares at time $t$, leading to the hedging P&L $\int_0^T \Delta(t, S_t)\, dS_t$.

In practice, one rebalances at discrete times $0 = t_0 < t_1 < \cdots < t_n = T$ with $\max_i |t_{i+1} - t_i| = \delta_n \to 0$. The discrete hedge is $Y^n_T = \sum_{i=0}^{n-1} \Delta(t_i, S_{t_i})(S_{t_{i+1}} - S_{t_i}) = \int_0^T H^n_s\, dS_s$ where $H^n$ is piecewise constant.

The main theorem gives: $Y^n \Rightarrow Y = \int_0^T \Delta(t, S_t)\, dS_t$, because $S$ (viewed as a constant sequence) trivially satisfies UT, and $H^n \to H$ locally uniformly. **Discrete hedging converges to continuous hedging** — the theoretical foundation of all practical options hedging.

## Application: Euler Scheme Convergence

Consider the [[stochastic-differential-equations|SDE]] $dX_t = b(X_t)\, dt + \sigma(X_t)\, dW_t$. The Euler-Maruyama scheme on the grid $\{k\Delta_n\}$ is:

$$X^n_{(k+1)\Delta_n} = X^n_{k\Delta_n} + b(X^n_{k\Delta_n})\Delta_n + \sigma(X^n_{k\Delta_n})(W_{(k+1)\Delta_n} - W_{k\Delta_n}).$$

This defines $X^n$ as a semimartingale: $X^n_t = X_0 + \int_0^t b^n_s\, ds + \int_0^t \sigma^n_s\, dW_s$ where $b^n, \sigma^n$ are piecewise constant. Under Lipschitz conditions on $b, \sigma$, the sequence $(X^n)$ satisfies UT (because the coefficients are bounded on compacts) and $X^n \Rightarrow X$.

The convergence of stochastic integrals theorem then extends this: any functional of $X^n$ defined via stochastic integration — for instance, $\int_0^T f(X^n_s)\, dX^n_s$ — converges to its continuous counterpart. This is essential for pricing path-dependent derivatives using numerical methods.

## The Meta-Theorem: Discrete Models Approximate Continuous Models

The convergence of stochastic integrals is the rigorous content of the following informal principle: **any reasonable discrete-time financial model converges to a continuous-time model, and any trading strategy in the discrete model converges to the corresponding continuous-time strategy**.

More precisely: if $(S^n)$ is a sequence of discrete-time asset price processes (e.g., binomial trees, multinomial models, GARCH) whose interpolations satisfy UT and converge weakly to a continuous [[semimartingale-models|semimartingale]] $S$, and if $(H^n)$ are portfolio strategies converging to $H$, then the portfolio values converge: $\int H^n\, dS^n \Rightarrow \int H\, dS$.

This meta-theorem justifies the entire apparatus of continuous-time finance as a limit of discrete reality. It is the precise sense in which the Black-Scholes formula, [[girsanov-semimartingales|Girsanov's theorem]], and risk-neutral pricing are not mathematical idealizations but genuine limits of implementable strategies.

## Related Articles

- [[tightness-semimartingales]] — the UT condition and tightness criteria.
- [[convergence-semimartingales]] — the Jacod-Shiryaev convergence theorem for the integrators.
- [[semimartingale-models]] — the predictable triplet governing UT.
- [[skorokhod-topology]] — the topology in which convergence occurs.
- [[geometric-brownian-motion]] — the Black-Scholes integrator.
- [[girsanov-semimartingales]] — measure change for the limit processes.
- [[functional-limit-theorems]] — the broader framework of process-level convergence.
- [[predictable-compensator]] — the compensator characterizing the integral.
- [[doleans-dade-exponential]] — the exponential semimartingale arising in hedging.
