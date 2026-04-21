---
slug: "/finance/discrete-girsanov-esscher"
title: "Discrete Girsanov and the Esscher Transform"
category: "Pricing Models"
order: 126
lang: "en"
---

# Discrete Girsanov and the Esscher Transform

The [[ftap-first-fundamental-theorem|first fundamental theorem]] asserts the existence of an equivalent martingale measure but does not say **how** to build it. In discrete time Shiryaev gives two explicit recipes: a discrete **Girsanov** theorem for the conditionally Gaussian case and an **Esscher transform** for the general one.

Both methods are essentially the same idea: "shift" the conditional distribution of the price increment so that the new distribution becomes a martingale. They differ only in how the shift is parametrized.

## Discrete Girsanov: the conditionally Gaussian case

Suppose at each step the log-return is conditionally Gaussian:

$$\log(S_n / S_{n-1}) \mid \mathcal{F}_{n-1} \sim \mathcal{N}(\mu_n, \sigma_n^2),$$

with $\mu_n, \sigma_n^2$ being $\mathcal{F}_{n-1}$-measurable. The risk-free rate $r$ is constant.

For the discounted price $\widetilde{S}_n = S_n e^{-rn}$ to become a martingale under a new measure, the conditional mean of the log-return must be shifted from $\mu_n$ to $r - \sigma_n^2/2$ (the Itô correction comes from $\mathbb{E}[e^X] = e^{\mu + \sigma^2/2}$ for Gaussian $X$).

**Discrete Girsanov theorem.** The change-of-measure density on $\mathcal{F}_N$:

$$\frac{d\mathbb{Q}}{d\mathbb{P}}\bigg|_{\mathcal{F}_N} = \prod_{n=1}^{N} \exp\!\left(\theta_n \cdot Z_n - \tfrac{1}{2} \theta_n^2 \right),$$

where $Z_n = (\log(S_n/S_{n-1}) - \mu_n) / \sigma_n$ are standardized increments, and

$$\theta_n = \frac{(r - \sigma_n^2/2) - \mu_n}{\sigma_n}$$

is the market price of risk (a Sharpe-ratio-like quantity) at step $n$. Under $\mathbb{Q}$ the variables $Z_n + \theta_n$ become standard normal and the discounted price $\widetilde{S}$ is a martingale.

In the limit $\Delta t \to 0$ this is exactly the discretization of the classical [[girsanov-semimartingales|continuous Girsanov theorem]] for Brownian motion.

## The Esscher transform: general case

The conditionally Gaussian assumption is too restrictive — it works only for discretizations of Black-Scholes. For arbitrary increment distributions Shiryaev proposes the **Esscher transform** (introduced by Esscher in actuarial science in 1932 and brought into finance by Gerber and Shiu in 1994).

**Idea.** If $X$ is a random variable with moment generating function $M_X(\theta) = \mathbb{E}[e^{\theta X}] < \infty$, then the exponentially-tilted measure

$$\frac{d\mathbb{P}^{(\theta)}}{d\mathbb{P}} = \frac{e^{\theta X}}{M_X(\theta)}$$

is a new probability measure under which $X$ has a different distribution (with larger mean for $\theta > 0$).

**Conditional Esscher.** Apply this construction to the conditional distribution of $\Delta \log S_n$ given $\mathcal{F}_{n-1}$:

$$\frac{d\mathbb{Q}}{d\mathbb{P}}\bigg|_{\mathcal{F}_n} = \prod_{k=1}^{n} \frac{e^{\theta_k \cdot \Delta \log S_k}}{M_k(\theta_k)},$$

where $\theta_k$ is an $\mathcal{F}_{k-1}$-measurable parameter chosen so that $\widetilde{S}$ is a martingale:

$$\mathbb{E}^\mathbb{Q}[\widetilde{S}_n \mid \mathcal{F}_{n-1}] = \widetilde{S}_{n-1}.$$

This reduces to a single scalar equation for $\theta_k$ at each time step:

$$\frac{M_k(\theta_k + 1)}{M_k(\theta_k)} = e^r.$$

Under standard conditions (mgf finite in a neighbourhood of zero) this equation has a unique solution, which defines the Esscher transform.

## Why have both

- **Girsanov** is convenient when the model is explicitly Gaussian (binomial, Black-Scholes, Vasicek). It immediately yields a **mean shift** as the answer.
- **Esscher** works for **arbitrary** discrete cases: discrete distributions, jumps, heavy tails. It becomes especially valuable in models with [[levy-esscher-continuous|Lévy processes]], where Gaussianity is replaced by a wider class of infinitely divisible distributions.

In Shiryaev shows that for the conditionally Gaussian case the two methods give the same EMM — Esscher reduces to Girsanov.

## Connection to [[ftap-first-fundamental-theorem|FTAP]]

Shiryaev's constructive route to proving FTAP runs through conditional Esscher. Instead of an abstract separation theorem (Hahn-Banach) he solves a scalar equation at each step and glues the local solutions into a global EMM. It is longer but produces an **explicit** density formula — useful in practical calculations.

## A note on incomplete markets

In an [[complete-incomplete-markets|incomplete model]] the equation $M_k(\theta_k + 1)/M_k(\theta_k) = e^r$ may have many solutions (or a parameter family), and each one defines its own EMM. This is the multiple choice that produces the interval of [[upper-lower-hedging-prices|upper and lower prices]].

In models with jumps the **minimum Esscher measure** (with the smallest $\theta$) is often singled out as canonical — it minimizes the relative [[shannon-entropy|entropy]] of $\mathbb{Q}$ with respect to $\mathbb{P}$ and in a sense changes the historical model the least.

## Related Articles

- [[ftap-first-fundamental-theorem]] — the theorem for which Esscher provides a constructive proof.
- [[crr-model]] — simplest example where conditional Esscher reduces to a single parameter $q$.
- [[girsanov-semimartingales]] — continuous-time generalization of discrete Girsanov.
- [[levy-esscher-continuous]] — Esscher transform for Lévy processes.
- [[complete-incomplete-markets]] — where the Esscher parameter is non-uniquely defined.
- [[geometric-brownian-motion]] — the model where discrete Girsanov immediately gives the BS measure.
