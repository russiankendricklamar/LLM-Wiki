---
slug: "/math/martingale-clt"
title: "Central Limit Theorem for Martingales"
category: "Martingale Theory"
order: 2
lang: "en"
---

# Central Limit Theorem for Martingales

The classical [[central-limit-theorem|CLT]] requires **independence** of the summands. But in many applications — statistics of dependent data, stochastic approximation, parameter estimation for time series, finance — the natural sequences are not independent but form **martingale differences**. They have their own central limit theorem, and it is this theorem that powers the asymptotic theory of modern econometrics. Shiryaev's "Probability" gives a detailed treatment of the martingale CLT and its technical variants. It is one of the principal tools of modern mathematical statistics and stochastic processes.

## Setup

Let $(M_n)_{n \geq 0}$ be a [[discrete-martingales|martingale]] with respect to a filtration $(\mathcal{F}_n)$, and let $\xi_n = M_n - M_{n-1}$ be its **martingale differences**. By definition:

$$\mathbb{E}[\xi_n \mid \mathcal{F}_{n-1}] = 0.$$

This is the martingale analogue of "independent with zero mean": the $\xi_n$ are not independent, but on average (conditional on the past) they vanish.

**Conditional variance:**
$$\sigma_n^2 = \mathbb{E}[\xi_n^2 \mid \mathcal{F}_{n-1}].$$

Unlike the usual variance, this quantity is **random** (it depends on the past).

**Quadratic variation (Doob):**
$$\langle M \rangle_n = \sum_{k=1}^n \sigma_k^2.$$

It plays the role of the "sum of variances" from the classical CLT for independent sums.

## Theorem (Lévy-Doob-Lindeberg for martingales)

**Theorem (martingale CLT).** Let $(\xi_{n,k})_{1 \leq k \leq n}$ be a triangular array of martingale differences with conditional variances $\sigma_{n,k}^2$. Assume:

1. **Normalization condition** (convergence of the quadratic variation):
$$\sum_{k=1}^n \sigma_{n,k}^2 \xrightarrow{P} \sigma^2 > 0.$$

2. **Lindeberg condition** (the differences are individually small):
$$\sum_{k=1}^n \mathbb{E}[\xi_{n,k}^2 \mathbb{1}_{|\xi_{n,k}| > \varepsilon} \mid \mathcal{F}_{n,k-1}] \xrightarrow{P} 0$$
for every $\varepsilon > 0$.

Then
$$S_n = \sum_{k=1}^n \xi_{n,k} \xrightarrow{d} \mathcal{N}(0, \sigma^2).$$

This is a direct generalization of the Lindeberg-Lévy CLT, but without the independence assumption, only with martingale structure. The proof is substantially deeper: it relies on complex analysis (characteristic functions with conditional moments) or martingale-representation techniques.

## Link to the classical CLT

If $\xi_n$ are i.i.d. with $\mathbb{E}[\xi_n] = 0$ and $\text{Var}(\xi_n) = \sigma^2$, they automatically form martingale differences (with respect to their own filtration), and the conditional variance coincides with the usual one. The Lindeberg condition reduces to its classical form.

The martingale CLT is a **strict generalization**: it contains the classical CLT as a special case but applies far more widely.

## Examples of martingale differences

**1. Independent zero-mean variables** — classical case.

**2. Squares minus conditional variances.** If $\xi_n$ are square-integrable with $\mathbb{E}[\xi_n^2 \mid \mathcal{F}_{n-1}] = v_n$, then $\xi_n^2 - v_n$ is a martingale difference. Used in GARCH estimation.

**3. Maximum-likelihood score.** The gradient of the log-likelihood evaluated at the true parameter forms a martingale with respect to the sample filtration. Its differences are martingale differences.

**4. Prediction errors.** If $\hat{X}_{n+1}$ is the optimal ($L^2$) predictor of $X_{n+1}$ given $\mathcal{F}_n$, then $X_{n+1} - \hat{X}_{n+1}$ is a martingale difference by construction.

**5. Martingale transforms.** For a predictable sequence $H_n$ and a martingale $M_n$, the process $\sum H_k \Delta M_k$ is again a martingale, and its differences are martingale differences.

## Important variants

**Brown's theorem (1971).** Martingale CLT with the Lindeberg condition for arbitrary (not necessarily square-integrable) differences, via truncation.

**Hall-Heyde theorem (1980).** Detailed treatment of martingale limit theorems under various formulations of the conditions — the standard reference in statistics.

**Functional martingale CLT (invariance principle).** Not only does $S_n$ converge to a Gaussian, but the whole process $t \mapsto S_{\lfloor nt \rfloor}/\sqrt{n}$ converges (in distribution on the Skorokhod space) to [[brownian-motion|Brownian motion]]. A generalization of Donsker's theorem to martingales.

## Applications in econometrics and statistics

**1. Asymptotic normality of maximum-likelihood estimators.** Standard argument: the log-likelihood gradient is a martingale, apply the martingale CLT, conclude that the estimator is asymptotically normal. Without it, proving the classical Cramer-Rao result for dependent data would be impossible.

**2. GMM estimators.** The generalized method of moments yields estimators whose asymptotic normality rests on the martingale CLT under the assumption that the moment conditions are martingale differences.

**3. GARCH and ARCH models.** Parameter estimation for stochastic-volatility models is a classical application of the martingale CLT: the model residuals are naturally martingale differences.

**4. Stochastic approximation (SGD).** Convergence analysis of stochastic gradient descent: the gradient noise is a martingale difference, and asymptotic normalization of the error $\theta_n - \theta^*$ is proved by the martingale CLT. This is the foundation of LAN theory in modern optimization.

**5. Bayesian algorithms.** MCMC estimators converge thanks to the martingale CLT: the noise between visits to the stationary distribution forms martingale differences under a suitable filtration.

## Comparison with CLT for stationary processes

An alternative to the martingale CLT is the CLT for stationary ergodic sequences (Gordin, Ibragimov, Billingsley). These require mixing conditions (α-, β-, φ-mixing) instead of the martingale structure.

Advantage of the martingale CLT: **clean assumptions** — no need to prove mixing, only that the differences are martingale differences and that Lindeberg's condition holds. Disadvantage: not every interesting sequence is a martingale.

For ergodic stationary processes one often uses **martingale approximation** (Gordin's method): approximate the process by a martingale with a small remainder, and apply the martingale CLT to the approximation.

## Limitations and subtleties

- The Lindeberg condition can be hard to check in practice. It is often replaced by a stronger but simpler condition such as $\mathbb{E}[|\xi_n|^{2+\delta}] < \infty$ for some $\delta > 0$.
- The normalization $\sum \sigma_k^2 \to \sigma^2$ requires control over the conditional variances. In stochastic-volatility models this can be non-trivial.
- The limit need not be Gaussian: when the conditions fail, one can obtain "mixed normal" distributions (with random variance).

## Related Articles

- [[central-limit-theorem]] — classical CLT for independent sums.
- [[discrete-martingales]] — general martingale theory.
- [[law-of-large-numbers]] — martingale law of large numbers.
- [[ergodic-theorems-birkhoff]] — alternative approach for stationary processes.
- [[brownian-motion]] — limit process in the functional CLT.
- stochastic gradient descent — application in optimization and ML.
- maximum likelihood — standard application in statistics.
- [[arch-models]], [[garch-models]] — parameter estimation for volatility models.
