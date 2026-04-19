---
title: "Subordinators"
category: "Stochastic Processes"
order: 26
lang: "en"
slug: "/math/subordinators"
growth: "seedling"
---

# Subordinators

A **subordinator** is an increasing, right-continuous [[levy-processes|Lévy process]] $(S_t)_{t \geq 0}$ starting at zero: $S_0 = 0$ and $S_t \leq S_{t'}$ almost surely whenever $t \leq t'$. Subordinators are the natural time-change devices in probability: they appear wherever a classical process must be rescaled in time, whether to model stochastic volatility, jump clustering, or anomalous diffusion. Unlike general Lévy processes, subordinators have no Brownian component and no negative jumps—only drift and positive jumps. This simplification makes their structure remarkably transparent: they are determined entirely by a **Laplace exponent**.

## The Laplace Exponent

For a subordinator $S_t$, define the **Laplace exponent** as
$$\Phi(\lambda) = -\log \mathbb{E}[e^{-\lambda S_1}], \quad \lambda \geq 0$$

By the Lévy-Khintchine formula adapted to subordinators, $\Phi$ has the form
$$\Phi(\lambda) = b\lambda + \int_0^\infty (1 - e^{-\lambda x})\, \nu(dx)$$

where:
- $b \geq 0$ is the **drift coefficient** (deterministic linear growth);
- $\nu$ is the **Lévy measure** on $(0, \infty)$, a measure of the jump intensities, satisfying $\int_0^\infty (1 \wedge x)\, \nu(dx) < \infty$ (finite mean of truncated jumps);
- The integral $\int_0^\infty (1 - e^{-\lambda x})\, \nu(dx)$ is well-defined for all $\lambda > 0$.

The pair $(b, \nu)$ uniquely determines the subordinator. Conversely, any pair $(b, \nu)$ with $b \geq 0$ and $\nu$ a measure on $(0, \infty)$ satisfying $\int_0^\infty (1 \wedge x)\, \nu(dx) < \infty$ gives rise to a subordinator with that $(b, \nu)$.

## Key Examples

**Compound Poisson process.** Let $N_t$ be a rate-$c$ Poisson process and $\xi_1, \xi_2, \ldots$ i.i.d. non-negative random variables with law $F$. Define $S_t = \sum_{i=1}^{N_t} \xi_i$. Then $S_t$ is a subordinator with $b = 0$ and $\nu = cF$. Its Laplace exponent is $\Phi(\lambda) = c \int_0^\infty (1 - e^{-\lambda x})\, F(dx) = c(1 - \hat{F}(\lambda))$. This is the simplest subordinator: finitely many jumps in any bounded interval.

**Poisson process.** When $\xi_i = 1$ almost surely (jump size always 1), the compound Poisson reduces to the rate-$c$ Poisson process: $S_t = N_t$. Here $\Phi(\lambda) = c(1 - e^{-\lambda})$. The Poisson process is both a subordinator and a [[branching-processes|branching process]].

**Stable subordinator.** For $\alpha \in (0, 1)$, the **$\alpha$-stable subordinator** has Laplace exponent $\Phi(\lambda) = \lambda^\alpha$. Its Lévy measure is $\nu(dx) = \frac{1}{\Gamma(1-\alpha)} x^{-1-\alpha}\, dx$. The $\alpha$-stable subordinator has no drift ($b = 0$) and infinitely many jumps in every time interval; it is continuous in probability but has paths that are nowhere locally monotone (before being post-filtered through subordination). Its increments are self-similar with exponent $\alpha$: $S_{ct} \stackrel{d}{=} c^\alpha S_t$.

**Gamma process.** The Gamma$(t; a, b)$ process has Laplace exponent $\Phi(\lambda) = \log(1 + \lambda/b)$ per unit time, so overall $\Phi_t(\lambda) = a t \log(1 + \lambda/b)$. Equivalently, $S_t$ has distribution Gamma$(at, b)$. This is a compound Poisson subordinator with infinitely many jumps; it is differentiable in an $L^2$ sense. The Gamma process is ubiquitous in Bayesian nonparametrics.

## Bochner Subordination

The fundamental application of subordinators is **time-change**: if $X_t$ is any Lévy process independent of subordinator $S_t$, the time-changed process $Y_t := X_{S_t}$ is also a Lévy process. This is **Bochner subordination**. Its characteristic function is
$$\mathbb{E}[e^{i\xi Y_t}] = \mathbb{E}[e^{-t\Phi(\psi(\xi))}]$$
where $\psi(\xi) = -\log \mathbb{E}[e^{i\xi X_1}]$ is the characteristic exponent of $X_t$.

In particular:
- If $X_t$ is a [[fractional-brownian-motion|Brownian motion]] with Laplace transform $\mathbb{E}[e^{-\lambda X_1^2}] = e^{-\lambda}$ (matching $\psi(\xi) = |\xi|$), then subordinating by the Poisson process gives a compound Poisson process.
- Subordinating Brownian motion by an $\alpha$-stable subordinator produces an $\alpha$-stable Lévy process—the simplest way to construct stable processes from Gaussian primitives.
- Subordinating Brownian motion by a Gamma process yields the **variance-gamma process**, a fundamental model in mathematical finance.

## Inverse Subordinators and Mittag-Leffler Processes

The **inverse** (or **hitting time process**) of a subordinator $S_t$ is defined as
$$E_t := \inf\{s \geq 0 : S_s > t\}$$

When $S_t$ is an $\alpha$-stable subordinator, $E_t$ is **not** a Lévy process, but it has many nice properties. Its marginal distribution is related to the **Mittag-Leffler function**. Specifically, $\mathbb{P}(E_t \leq x) = \mathbb{P}(S_x > t)$, and for stable $S$, this involves $E_\alpha$, which appears in the solution to the **fractional Riemann-Liouville differential equation**:
$$\frac{d^\alpha}{dt^\alpha} u(t) = -u(t) \quad \Rightarrow \quad u(t) = E_\alpha(-t^\alpha)$$

The inverse subordinator connects subordination to [[kolmogorov-equations-ctmc|fractional Kolmogorov equations]] and fractional-in-time partial differential equations. The subordinated process $X_{E_t}$ has law satisfying a time-fractional PDE; this is the foundation for modeling anomalous (slow) diffusion.

## Fractional Calculus and Time-Changed Processes

Subordinators naturally embed into the theory of [[fractional-brownian-motion|fractional calculus]]. The Riemann-Liouville fractional integral of order $\alpha \in (0, 1)$ is
$$I^\alpha f(t) = \frac{1}{\Gamma(\alpha)} \int_0^t (t-s)^{\alpha-1} f(s)\, ds$$

This integral arises in the subordinated process: the density of the $\alpha$-stable subordinator $S_t$ satisfies
$$p_S(t, x) = \frac{1}{\pi} \text{Im}\left[ \frac{e^{-s x^\alpha}}{s} \right]$$

and governs the transition density of the time-changed process $X_{S_t}$ via the Smoluchowski equation. Time-fractional diffusion equations
$$\frac{\partial u}{\partial t} = -(-\Delta)^{\beta/2} u, \quad u(0, x) = \delta(x)$$
are solved via subordination: $u(t, x) = \int_0^\infty p_S(t, s) p_\beta(s, x)\, ds$, where $p_\beta$ is the transition density of the $\beta/2$-stable process.

## Applications: Finance and Stochastic Volatility

In mathematical finance, subordinators model **stochastic time clocks** and volatility clustering:

- **Variance-Gamma model** (subordination of Brownian motion by Gamma process): removes the smile/skew problem of the Black-Scholes model and fits option prices better.
- **CGMY model** (subordination of Brownian motion by a more general Lévy subordinator): generalizes VG to allow independent control of tail behavior in both tails and fine-structure of small jumps.
- **Time-deformed models**: stock price $\dlog S_t = \mu \, dt + \sigma \, dW_{S_t}$ where $S_t$ is a stochastic volatility subordinator, matching observed clustering of trading volume and returns.

## Connection to Renewal Theory

A subordinator $S_t$ defines a **renewal process** if we think of its jumps as arrival times. The number of jumps up to time $t$, $N_t = \#\{s : S_s \leq t\}$, is the inverse subordinator. The theory of renewal equations (resolvents, Wiener-Hopf factorization) applies directly: the renewal function $U(t) = \mathbb{E}[N_t]$ satisfies
$$U(t) = \int_0^t \, ds + \int_0^t U(t-s)\, d\mathbb{E}[S_s]$$

This connects [[renewal-theory|renewal theory]] and subordination: time-changed processes inherit renewal properties from the subordinating clock.

## Related Articles

- [[levy-processes]] — general theory of Lévy processes; subordinators are the increasing special case.
- [[levy-ito-decomposition]] — every Lévy process is a drift plus Brownian plus independent jump part; subordinators drop the Brownian component.
- [[infinitely-divisible-distributions]] — the marginal distribution of a subordinator at time 1 is infinitely divisible.
- [[fractional-brownian-motion]] — time-changed Brownian motion by subordinators produces fractional processes.
- [[kolmogorov-equations-ctmc]] — time-fractional PDEs and their solutions via subordinated diffusions.
- [[renewal-theory]] — renewal processes and Wiener-Hopf factorization via subordinator jump structure.
- [[wiener-hopf-factorization]] — factorization of Lévy processes and first-passage times for subordinators.
