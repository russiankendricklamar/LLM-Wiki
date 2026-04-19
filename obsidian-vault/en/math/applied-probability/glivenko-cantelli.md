---
slug: "/math/glivenko-cantelli"
title: "Glivenko-Cantelli Theorem and Empirical Processes"
category: "Measure Theory"
order: 6
lang: "en"
---

# Glivenko-Cantelli Theorem and Empirical Processes

The Glivenko-Cantelli theorem is often called the **fundamental theorem of statistics**: it guarantees that the empirical distribution function converges uniformly to the true distribution, almost surely. This is the theoretical bedrock upon which all of nonparametric statistics, goodness-of-fit testing, and the bootstrap rest. It connects probability theory ([[kolmogorov-probability-axioms]]) to statistical practice in the most direct possible way.

## The empirical CDF

Given i.i.d. random variables $X_1, \ldots, X_n$ with common CDF $F$, the **empirical cumulative distribution function** is:

$$F_n(x) = \frac{1}{n} \sum_{i=1}^{n} \mathbf{1}\{X_i \leq x\}.$$

For each fixed $x$, the indicator $\mathbf{1}\{X_i \leq x\}$ is Bernoulli with parameter $F(x)$, so by the [[law-of-large-numbers|strong law of large numbers]], $F_n(x) \to F(x)$ almost surely. The Glivenko-Cantelli theorem upgrades this pointwise convergence to **uniform** convergence.

## The theorem

**Theorem (Glivenko 1933, Cantelli 1933).** For i.i.d. $X_1, X_2, \ldots$ with CDF $F$:

$$\sup_{x \in \mathbb{R}} |F_n(x) - F(x)| \xrightarrow{a.s.} 0 \quad \text{as } n \to \infty.$$

The supremum over **all** $x$ tends to zero, not just at particular points.

## Proof sketch

The proof combines pointwise convergence with monotonicity:

1. Fix a dense countable set $\{r_k\}$ (e.g., the rationals). By the strong LLN, $F_n(r_k) \to F(r_k)$ a.s. for each $k$. By [[borel-cantelli-zero-one|Borel-Cantelli]], the convergence holds simultaneously for all rationals on a single event of probability one.
2. For arbitrary $x$, sandwich $F_n(x)$ between values at nearby rationals using monotonicity of both $F_n$ and $F$.
3. Right-continuity of $F$ and the density of the rationals close the gap: $\sup_x |F_n(x) - F(x)| \to 0$.

## The DKW inequality

The **Dvoretzky-Kiefer-Wolfowitz (1956) inequality**, sharpened by Massart (1990), gives an exponential concentration bound:

$$\mathbb{P}\!\left(\sup_{x} |F_n(x) - F(x)| > \varepsilon\right) \leq 2 e^{-2n\varepsilon^2}.$$

This is remarkable: the bound is **distribution-free** (it does not depend on $F$) and **non-asymptotic** (valid for every $n$). It implies convergence at rate $O(\sqrt{\log n / n})$ and provides exact confidence bands for $F$.

## The Kolmogorov-Smirnov test

The **Kolmogorov-Smirnov (KS) statistic** is:

$$D_n = \sup_{x} |F_n(x) - F_0(x)|,$$

where $F_0$ is a hypothesized CDF. Under $H_0: F = F_0$, Kolmogorov (1933) showed:

$$\sqrt{n}\, D_n \xrightarrow{d} \sup_{0 \leq t \leq 1} |B(t)|,$$

where $B$ is a [[brownian-motion|Brownian bridge]]. The limiting distribution is the **Kolmogorov distribution**, tabulated and used for exact p-values. The KS test is the canonical nonparametric goodness-of-fit test — it requires no binning, works for any continuous $F_0$, and inherits the Glivenko-Cantelli guarantee of consistency.

## VC dimension and uniform convergence

The Glivenko-Cantelli theorem is a statement about uniform convergence of empirical means over a **class of sets** $\mathcal{C} = \{(-\infty, x] : x \in \mathbb{R}\}$. A class $\mathcal{C}$ is called a **Glivenko-Cantelli class** if $\sup_{C \in \mathcal{C}} |P_n(C) - P(C)| \to 0$ a.s.

The **Vapnik-Chervonenkis (VC) dimension** characterizes which classes are Glivenko-Cantelli: if $\text{VC}(\mathcal{C}) < \infty$, then $\mathcal{C}$ is a Glivenko-Cantelli class for every probability measure $P$. Half-lines have $\text{VC} = 1$; half-planes have $\text{VC} = 3$. This connects classical statistics to **learning theory**: the VC dimension bounds the sample complexity of empirical risk minimization.

## Empirical processes

The **empirical process** is the rescaled fluctuation:

$$\mathbb{G}_n(x) = \sqrt{n}\,(F_n(x) - F(x)).$$

By Donsker's theorem (the functional [[central-limit-theorem|CLT]]):

$$\mathbb{G}_n \xrightarrow{d} \mathbb{G} \quad \text{in } \ell^\infty(\mathbb{R}),$$

where $\mathbb{G}$ is a $F$-Brownian bridge. Donsker's theorem is the process-level refinement of the [[central-limit-theorem]]: it gives not just the marginal Gaussian limit but the entire sample-path limit.

Classes $\mathcal{F}$ for which this functional CLT holds are called **Donsker classes**. Every VC class with integrable envelope is Donsker. This is the foundation of semiparametric efficiency theory and modern empirical process methods.

## Applications

**Nonparametric statistics.** The empirical CDF is the **nonparametric maximum likelihood estimator** of $F$. Glivenko-Cantelli guarantees its uniform consistency, making it the starting point for kernel density estimation, rank tests, and quantile estimation.

**Bootstrap validity.** Efron's bootstrap resamples from $F_n$. The Glivenko-Cantelli theorem ensures $F_n \to F$ uniformly, which is the key condition for bootstrap consistency: the resampled world approximates the true world.

**Goodness-of-fit.** Beyond Kolmogorov-Smirnov: the Anderson-Darling, Cramer-von Mises, and Lilliefors tests all use functionals of $F_n - F$. Their consistency follows from Glivenko-Cantelli.

**Machine learning.** Uniform convergence over function classes (VC theory) generalizes Glivenko-Cantelli from sets to classifiers. The fundamental theorem of statistical learning states: a class is PAC-learnable if and only if it has finite VC dimension — a direct descendant of Glivenko-Cantelli.

## Related Articles

- [[borel-cantelli-zero-one]] — used in the proof of Glivenko-Cantelli.
- [[law-of-large-numbers]] — pointwise convergence of $F_n$; Glivenko-Cantelli is the uniform upgrade.
- [[central-limit-theorem]] — Donsker's theorem as the process-level CLT.
- [[brownian-motion]] — the Brownian bridge as the limit of the empirical process.
- [[weak-convergence-prokhorov]] — the topology in which empirical process convergence is stated.
- [[characteristic-functions]] — alternative route to distributional limit theorems.
- [[kolmogorov-probability-axioms]] — measure-theoretic foundation.
