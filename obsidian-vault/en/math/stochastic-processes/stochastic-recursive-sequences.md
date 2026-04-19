---
slug: "/math/stochastic-recursive-sequences"
title: "Stochastic Recursive Sequences"
category: "Ergodic and Spectral Theory"
order: 5
lang: "en"
---

# Stochastic Recursive Sequences

A stochastic recursive sequence (SRS) is defined by

$$X_{n+1} = f(X_n, \xi_{n+1}),$$

where $(\xi_n)$ are i.i.d. random "inputs" and $f$ is a measurable function. This simple framework encompasses an enormous range of models: queueing systems, autoregressive processes, financial volatility models, and iterated function systems generating fractals. The central question is **stability**: does $X_n$ converge to a unique stationary distribution regardless of the initial condition? Borovkov's approach to this problem via coupling and renovation events provides an elegant and powerful methodology.

## The Loynes scheme

The most classical instance arises in queueing theory. The **Lindley recursion** for the waiting time in a GI/GI/1 queue is

$$W_{n+1} = (W_n + X_n)^+,$$

where $X_n = \text{service}_n - \text{interarrival}_n$ and $(x)^+ = \max(x, 0)$.

**Theorem (Loynes, 1962).** If $f$ is **monotone** (i.e., $x \leq y$ implies $f(x, \xi) \leq f(y, \xi)$) and $\mathbb{E}[X_n] < 0$ (the stability condition: service rate exceeds arrival rate), then starting from $W_0 = +\infty$ (the "maximal" initial condition), $W_n$ decreases to a limit $W_\infty$ which is the unique stationary solution.

The Loynes construction works backward in time: define $W_\infty = \sup_{n \geq 0} (X_0 + X_{-1} + \cdots + X_{-n+1})$. By the [[law-of-large-numbers|law of large numbers]] this supremum is finite a.s. when $\mathbb{E}[X] < 0$, giving a proper stationary distribution.

## Contractivity and the key condition

For general (non-monotone) recursions, the fundamental stability criterion is **contractivity in mean**.

**Definition.** The recursion $X_{n+1} = f(X_n, \xi_{n+1})$ is **contractive** if

$$\mathbb{E}\!\left[\log \operatorname{Lip}(f(\cdot, \xi))\right] < 0,$$

where $\operatorname{Lip}(f(\cdot, \xi)) = \sup_{x \neq y} |f(x, \xi) - f(y, \xi)| / |x - y|$ is the Lipschitz constant.

Intuitively, this says that on average the map $x \mapsto f(x, \xi)$ contracts distances. Even if some realizations of $\xi$ expand, the logarithmic average must be negative.

**Theorem.** Under contractivity and a mild moment condition ($\mathbb{E}[\log^+ |f(x_0, \xi)|] < \infty$ for some $x_0$), the recursion has a unique stationary distribution $\pi$, and for any initial $X_0$:

$$X_n \xrightarrow{d} \pi \quad \text{as } n \to \infty.$$

Moreover, convergence is exponentially fast in an appropriate metric.

## The linear case: products of random matrices

The linear SRS $X_{n+1} = A_n X_n + B_n$ (with i.i.d. $(A_n, B_n)$) is the most thoroughly studied case.

**Theorem (Kesten, 1973; Vervaat, 1979).** The linear recursion $X_{n+1} = A_n X_n + B_n$ has a unique stationary solution if and only if

$$\mathbb{E}[\log |A|] < 0 \quad \text{and} \quad \mathbb{E}[\log^+ |B|] < \infty.$$

The stationary solution is given by the a.s. convergent series

$$X_\infty = B_0 + A_0 B_{-1} + A_0 A_{-1} B_{-2} + A_0 A_{-1} A_{-2} B_{-3} + \cdots$$

The condition $\mathbb{E}[\log |A|] < 0$ means the **top Lyapunov exponent** is negative — a connection to the Furstenberg-Kesten multiplicative ergodic theorem for products of random matrices.

## Connection to the multiplicative ergodic theorem

**Theorem (Furstenberg-Kesten, 1960).** For i.i.d. random $d \times d$ matrices $A_1, A_2, \ldots$ with $\mathbb{E}[\log^+ \|A_1\|] < \infty$:

$$\frac{1}{n} \log \|A_n A_{n-1} \cdots A_1\| \to \gamma \quad \text{a.s.},$$

where $\gamma$ is the **top Lyapunov exponent**. When $\gamma < 0$, the product $A_n \cdots A_1 \to 0$ exponentially fast, which is precisely the stability condition for the linear SRS in $\mathbb{R}^d$.

This is the multiplicative analogue of the [[law-of-large-numbers|law of large numbers]]: instead of sums converging to a mean, products of matrices have a well-defined exponential growth rate.

## Borovkov's renovation approach

Borovkov introduces **renovation events** (also called **coupling events**): random times $T$ at which the recursion "forgets" its initial condition. Formally, a renovation event occurs at time $n$ if $f(x, \xi_n) = f(y, \xi_n)$ for all $x, y$ — the map becomes constant regardless of input.

If renovation events occur with positive probability and have a finite expected gap, then:

1. The recursion is ergodic (unique stationary distribution exists).
2. Convergence to stationarity is geometric.
3. The [[ergodic-theorems-birkhoff|ergodic theorem]] applies to time averages along trajectories.

This approach is more flexible than contractivity — it handles recursions where $f$ is not Lipschitz or where contractivity fails globally but coupling occurs through rare "resetting" events.

## The GARCH connection

The GARCH(1,1) model for financial volatility (see [[garch-models]]) defines

$$\sigma_{n+1}^2 = \omega + \alpha \varepsilon_n^2 + \beta \sigma_n^2 = \omega + (\alpha Z_n^2 + \beta) \sigma_n^2,$$

where $Z_n = \varepsilon_n / \sigma_n$ are i.i.d. This is a linear SRS $X_{n+1} = A_n X_n + B_n$ with $A_n = \alpha Z_n^2 + \beta$ and $B_n = \omega$.

The stationarity condition is

$$\mathbb{E}[\log(\alpha Z^2 + \beta)] < 0,$$

which is precisely the Lyapunov exponent condition. When this holds, GARCH volatility converges to a unique stationary distribution with **heavy (Pareto) tails** — a phenomenon discovered by Kesten (1973) and rediscovered in the GARCH context by Nelson (1990). The tail index satisfies the implicit equation $\mathbb{E}[(\alpha Z^2 + \beta)^\kappa] = 1$.

## Applications

**Queueing theory.** The Lindley recursion $W_{n+1} = (W_n + X_n)^+$ and its multidimensional generalizations govern waiting times in virtually all single-server and network queueing models.

**Autoregressive processes.** The AR(1) model $X_{n+1} = \phi X_n + \varepsilon_{n+1}$ is a linear SRS; stationarity requires $|\phi| < 1$, i.e., $\log|\phi| < 0$. Higher-order AR models reduce to vector SRS.

**Iterated function systems.** Choose a contraction $f_i$ with probability $p_i$ and iterate: $X_{n+1} = f_{I_{n+1}}(X_n)$. The attractor is a fractal (e.g., the Sierpinski triangle, the Barnsley fern). Contractivity guarantees convergence to the unique invariant measure on the fractal.

**Finance beyond GARCH.** Stochastic volatility models, regime-switching models ([[hidden-markov-models]]), and many risk models in insurance are stochastic recursions. Their ergodicity determines whether long-run statistical estimation is meaningful.

## Related Articles

- [[ergodic-theorems-birkhoff]] — the ergodic theorem that applies once stationarity is established
- [[discrete-markov-chains]] — SRS are a generalization of Markov chains on general state spaces
- [[garch-models]] — GARCH volatility is a stochastic recursion
- [[arch-models]] — the simpler ARCH model as a special case
- [[law-of-large-numbers]] — the additive analogue of the multiplicative ergodic theorem
- [[brownian-motion]] — continuous-time limit of random recursions
- [[levy-processes]] — heavy-tailed limits arising from SRS with infinite variance
