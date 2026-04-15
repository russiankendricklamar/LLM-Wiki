---
title: "Characteristic Functions"
category: "Mathematics"
order: 8
lang: "en"
---

# Characteristic Functions

A characteristic function is the **Fourier transform of a probability measure**. For a random variable $X$ with distribution $\mu_X$:

$$\varphi_X(t) = \mathbb{E}[e^{itX}] = \int_{-\infty}^{\infty} e^{itx} \, d\mu_X(x).$$

It is one of the most powerful tools in probability theory: a characteristic function **fully determines the distribution** (uniqueness theorem), simplifies proofs of limit theorems (via Lévy's continuity theorem), and gives a direct route to moments and cumulants.

§12 of Chapter II of Shiryaev's [[shiryaev-probability|"Probability"]] studies it in detail. Applications: classical proof of the [[central-limit-theorem|CLT]], Lévy-Khintchine formula for infinitely divisible distributions, stable distributions, [[levy-esscher-continuous|Lévy processes]], the characteristic function of [[brownian-motion|Brownian motion]].

## Basic properties

1. **$\varphi_X(0) = 1$**. Obvious.
2. **$|\varphi_X(t)| \leq 1$** for all $t$. Since $|e^{itx}| = 1$.
3. **Uniform continuity** on $\mathbb{R}$. Not just continuity, but **uniform** — by dominated convergence.
4. **$\varphi_X(-t) = \overline{\varphi_X(t)}$** — complex conjugate.
5. **For symmetric distributions** $\varphi_X$ is real.

## Connection to moments

If $X$ has finite moments up to order $n$, then $\varphi_X$ is differentiable up to order $n$ at zero, and

$$\varphi_X^{(k)}(0) = i^k \mathbb{E}[X^k], \quad k = 0, 1, \ldots, n.$$

So the **Taylor expansion** of the characteristic function gives the moments:

$$\varphi_X(t) = 1 + it\mathbb{E}[X] - \frac{t^2}{2}\mathbb{E}[X^2] - \frac{it^3}{6}\mathbb{E}[X^3] + \ldots$$

This is a convenient route to computing moments, especially for distributions with known characteristic functions (normal, Poisson, beta).

## Sums of independents

**Key property.** If $X$ and $Y$ are independent, then

$$\varphi_{X+Y}(t) = \varphi_X(t) \cdot \varphi_Y(t).$$

The distribution of a sum corresponds to the **product** of characteristic functions. Vastly easier than convolving densities. For this reason characteristic functions are the principal tool for studying sums of independent variables and limit theorems.

In particular, for $S_n = X_1 + \ldots + X_n$ from i.i.d. variables:

$$\varphi_{S_n}(t) = (\varphi_X(t))^n.$$

This is the starting point for classical proofs of the [[law-of-large-numbers|LLN]] and [[central-limit-theorem|CLT]].

## Examples

| Distribution | Characteristic function |
|---|---|
| Bernoulli $\text{Ber}(p)$ | $1 - p + p e^{it}$ |
| Binomial $B(n, p)$ | $(1 - p + p e^{it})^n$ |
| Poisson $\text{Pois}(\lambda)$ | $\exp(\lambda(e^{it} - 1))$ |
| Standard normal | $e^{-t^2/2}$ |
| Normal $\mathcal{N}(\mu, \sigma^2)$ | $e^{i\mu t - \sigma^2 t^2 / 2}$ |
| Exponential $\text{Exp}(\lambda)$ | $\lambda / (\lambda - it)$ |
| Cauchy | $e^{-|t|}$ |
| Uniform $U(-a, a)$ | $\sin(at) / (at)$ |

Note that the characteristic function of the normal distribution is again Gaussian (after a change of variable); this unique property makes the normal distribution a "fixed point" of the Fourier transform.

## Lévy's uniqueness theorem

**Theorem.** If $\varphi_X = \varphi_Y$, then $X$ and $Y$ have the same distribution.

So a characteristic function **uniquely determines** the distribution. To check the claim "$X$ has such-and-such distribution," it suffices to compute $\varphi_X$ and compare with the known characteristic function.

Proof — via the Fourier inversion formula: under integrability of $\varphi$ the density is recovered as

$$f_X(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-itx} \varphi_X(t) \, dt.$$

In the discrete or non-density case — Lévy's formula for $\mathbb{P}(a < X < b)$.

## Lévy's continuity theorem

**Theorem.** Let $(X_n)$ be a sequence of random variables with characteristic functions $(\varphi_n)$. Then:

$$X_n \xrightarrow{d} X \iff \varphi_n(t) \to \varphi_X(t) \text{ for every } t,$$

provided the limit function $\varphi_X$ is continuous at zero (equivalent to the limit being a true probability measure rather than mass escaping to infinity).

This is **Lévy's continuity theorem** — the bridge between pointwise convergence of characteristic functions and convergence in distribution. **Every** classical proof of the limit theorems of probability is built on it, starting with the CLT.

## Proof of the CLT via characteristic functions

Standard route:

1. Take i.i.d. $X_1, X_2, \ldots$ with $\mathbb{E}[X] = 0$, $\text{Var}(X) = 1$, and form $S_n / \sqrt{n}$.
2. Characteristic function: $\varphi_{S_n/\sqrt{n}}(t) = (\varphi_X(t/\sqrt{n}))^n$.
3. Taylor-expand $\varphi_X(t/\sqrt{n})$ at zero: $\varphi_X(t/\sqrt{n}) = 1 - t^2/(2n) + o(1/n)$.
4. Take the $n$-th power: $(1 - t^2/(2n) + o(1/n))^n \to e^{-t^2/2}$.
5. This is the characteristic function of $\mathcal{N}(0, 1)$. By Lévy's continuity, $S_n/\sqrt{n} \xrightarrow{d} \mathcal{N}(0, 1)$.

The whole proof of the CLT — half a page. Compare to a direct convolution computation of $n$ copies — that is hellish.

## Infinitely divisible and Lévy-Khintchine

A distribution is **infinitely divisible** if for every $n$ it can be written as the distribution of a sum of $n$ i.i.d. variables. All such distributions are candidates as limits of normalized sums.

**Lévy-Khintchine formula.** Infinitely divisible distributions have characteristic functions of the form

$$\log \varphi(t) = i\beta t - \frac{1}{2}\sigma^2 t^2 + \int_{\mathbb{R}}\!\big( e^{itx} - 1 - itx \mathbf{1}_{|x|\leq 1} \big) \, \pi(dx),$$

where $(\beta, \sigma^2, \pi)$ is the **Lévy-Khintchine triplet**: drift, diffusion component, and Lévy jump measure.

This formula is the **classification theorem** for infinitely divisible distributions and at the same time the bridge to [[levy-esscher-continuous|Lévy processes]] (which are stochastic-time analogues of infinitely divisible distributions) and to [[stable-distributions|stable distributions]] (a special case).

## Multivariate characteristic functions

For a random vector $X = (X_1, \ldots, X_d)$:

$$\varphi_X(t) = \mathbb{E}[e^{i \langle t, X \rangle}] = \mathbb{E}[\exp(i (t_1 X_1 + \ldots + t_d X_d))], \quad t \in \mathbb{R}^d.$$

All basic properties carry over: uniqueness, continuity theorem, moment expansion. In particular, a **Gaussian vector** $X \sim \mathcal{N}(\mu, \Sigma)$ has characteristic function

$$\varphi_X(t) = \exp\!\big( i\langle\mu, t\rangle - \tfrac{1}{2}\langle t, \Sigma t\rangle \big).$$

Multivariate characteristic functions are the standard tool for verifying **joint normality**.

## Connection to generating functions

For non-negative integer-valued variables one also uses the **probability generating function** $G_X(z) = \mathbb{E}[z^X]$. For general variables — the **moment generating function** $M_X(t) = \mathbb{E}[e^{tX}]$. All are variants of the Fourier/Laplace transform of a measure.

Advantage of $\varphi_X = \mathbb{E}[e^{itX}]$ over $M_X$: the characteristic function is **always defined** (since $|e^{itX}| = 1$), while $M_X$ may diverge at infinity.

## Related Articles

- [[kolmogorov-probability-axioms]] — framework in which $\varphi_X$ is defined.
- [[central-limit-theorem]] — main application.
- [[law-of-large-numbers]] — also proved via characteristic functions.
- [[weak-convergence-prokhorov]] — Lévy's continuity theorem as a tool for weak convergence.
- [[stable-distributions]] — stable distributions are characterized via $\varphi$.
- [[levy-esscher-continuous]] — Lévy processes described by Lévy-Khintchine.
- [[brownian-motion]] — $W_t$ has characteristic function $e^{-t \xi^2 / 2}$.
- [[fft]] — numerical Fourier transform used in Carr-Madan option pricing.
