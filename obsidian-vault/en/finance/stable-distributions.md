---
title: "Stable Distributions and α-Stable Processes"
category: "Stochastic Processes"
order: 141
lang: "en"
---

# Stable Distributions and α-Stable Processes

Stable distributions are a natural generalization of the normal distribution that preserves the key "stability under summation" property while allowing **heavy tails** and **asymmetry**. They were introduced by Paul Lévy in 1925 and gained financial currency thanks to Benoît Mandelbrot, who showed in 1963 that cotton-futures returns are far better described by a stable distribution with $\alpha \approx 1.7$ than by a normal one.

[[shiryaev-stochastic-finance|Shiryaev]] (Vol. 1, Ch. III, §1a-1c) devotes a substantial section to them — because stable distributions provide the **first mathematically rigorous way** to describe heavy tails of financial returns, and because they generate an entire class of [[levy-esscher-continuous|Lévy processes]] more general than Brownian motion.

## The stability property

**Definition.** A random variable $X$ has a **stable distribution** if for every independent $X_1, X_2$ with the same distribution and any $a, b > 0$ there exist $c > 0, d \in \mathbb{R}$ such that

$$a X_1 + b X_2 \stackrel{d}{=} c X + d.$$

In words: the sum of independent, identically distributed random variables (after a linear renormalization) has the **same** distribution as a single one.

The normal distribution is the simplest example: a sum of two normals is again normal. Stable distributions are **all** distributions with this property. They form a four-parameter family parametrized by:

- $\alpha \in (0, 2]$ — stability exponent (controls the tails),
- $\beta \in [-1, 1]$ — asymmetry parameter,
- $\sigma > 0$ — scale,
- $\mu \in \mathbb{R}$ — shift.

## The parameter $\alpha$ and tails

**Key property.** For $\alpha < 2$ the distribution has **heavy tails**:

$$\mathbb{P}(|X| > x) \sim \frac{C}{x^\alpha} \quad \text{as } x \to \infty.$$

This is power-law (Pareto-like) decay, dramatically slower than the exponential decay of the normal tail. As a result:

- For $\alpha < 2$ the variance $\mathbb{E}[X^2] = \infty$.
- For $\alpha < 1$ even the mean $\mathbb{E}[X] = \infty$.
- Only for $\alpha = 2$ does the distribution become normal (with finite variance).

Empirical $\alpha$ for financial returns: equities — $\alpha \approx 1.5{-}1.8$, FX — $\alpha \approx 1.7{-}1.9$, bitcoin — $\alpha \approx 1.3{-}1.5$ depending on the period. All are strictly below 2 — so the variance is formally infinite and any mean-variance optimization ([[markowitz-mean-variance|Markowitz]]) is theoretically inapplicable.

## Characteristic function

The closed form of the density of a stable distribution is known only in three cases ($\alpha = 2$ — normal, $\alpha = 1$ — Cauchy, $\alpha = 1/2$ — Lévy). But the **characteristic function** has a general form:

$$\log \phi(t) = i\mu t - \sigma^\alpha |t|^\alpha \!\left( 1 - i\beta \cdot \text{sign}(t) \cdot \tan(\pi\alpha/2) \right), \quad \alpha \neq 1.$$

(For $\alpha = 1$ a logarithmic correction modifies the formula.)

This is the Lévy-Khintchine formula for stable distributions — a special case of the general infinitely divisible formula.

## Generalized Central Limit Theorem

The **classical CLT** says: a sum of $n$ independent identically distributed random variables with **finite variance** converges, after normalization, to the normal distribution. This explains the "universality" of the normal model in physics and "classical" finance theory.

**Generalized CLT (Lévy-Khintchine).** For random variables with **infinite variance** whose tails behave as $\mathbb{P}(|X| > x) \sim C/x^\alpha$ with $\alpha < 2$, the sum (with normalization $n^{-1/\alpha}$) converges to a **stable distribution with the same $\alpha$**. Stable distributions are the **only** possible limits of sums of independent heavy-tailed variables.

This explains why stable distributions arise "naturally" wherever many small independent contributions with heavy tails accumulate: financial returns (aggregation of many small trades), seismic activity, sizes of turbulent eddies, wealth distribution.

## α-Stable Lévy processes

Stable distributions generate **α-stable Lévy processes** $L^\alpha = (L^\alpha_t)$ — independent-increment processes such that $L^\alpha_t$ is stably distributed with parameter $\alpha$. These are heavy-tailed [[levy-esscher-continuous|Lévy processes]].

Properties:

- $L^\alpha$ has infinitely many small jumps (if $\alpha < 2$).
- For $\alpha < 2$ the trajectories are fractal curves with locally unbounded variation.
- Self-similarity: $L^\alpha_{ct} \stackrel{d}{=} c^{1/\alpha} L^\alpha_t$. See [[self-similarity-fractality]].
- For $\alpha = 2$ we recover [[brownian-motion|Brownian motion]].

## Financial application

**Mandelbrot's price model.** Asset price as $S_t = S_0 e^{L^\alpha_t}$, where $L^\alpha$ is α-stable. This gives **heavy tails** in log-return distributions consistent with observation.

Practical drawbacks:

1. **Infinite variance.** Most financial formulas (Sharpe ratio, VaR, Markowitz) require a finite second moment. "Truncated" or "smoothed" versions must be used.
2. **Calibration complexity.** Without analytic densities, fitting requires Monte Carlo or numerics.
3. **No unique EMM.** The model is incomplete — adding jumps makes the market incomplete.

Alternative models that preserve heavy tails but have finite moments: [[hyperbolic-distributions|generalized hyperbolic distributions]], variance gamma, NIG.

## Connection to risk management practice

In real practice, instead of stable distributions one usually uses:

- **Truncated stable** — stable distributions with artificially bounded tails to ensure finite moments.
- **Parametric heavy tails** — Student $t$-distribution with $\nu \approx 5{-}7$ degrees of freedom as a practical substitute.
- **EVT** — extreme value theory for VaR estimation in the tail without assuming the shape of the entire distribution. See [[extreme-value-theory]].

Stable distributions remain the **conceptual starting point**: they show that the normal model is not merely empirically inadequate but theoretically incomplete — it misses an entire family of possible limit distributions.

## Related Articles

- [[brownian-motion]] — special case $\alpha = 2$.
- [[levy-esscher-continuous]] — α-stable processes as a class of Lévy processes.
- [[hyperbolic-distributions]] — alternative heavy-tailed family with finite moments.
- [[stylized-facts-returns]] — empirical data motivating heavy tails.
- [[self-similarity-fractality]] — scale invariance of α-stable processes.
- [[extreme-value-theory]] — practical tool for extreme-risk estimation.
- [[hurst-exponent]] — related measure of long memory and fractality.
- [[cornish-fisher-cvar]] — VaR and CVaR in heavy-tailed models.
