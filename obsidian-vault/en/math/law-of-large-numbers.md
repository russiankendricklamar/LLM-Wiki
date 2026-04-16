---
title: "Law of Large Numbers"
category: "Limit Theorems"
order: 4
lang: "en"
---

# Law of Large Numbers

The Law of Large Numbers (LLN) is the earliest and most fundamental statement in probability theory. It formalizes the intuition that **frequencies converge to probabilities**: tossing a fair coin many times, the fraction of heads approaches $1/2$. Jakob Bernoulli proved the first version in 1713 — for the binomial distribution; it is called the "Golden Theorem" of probability theory.

The LLN exists in two principal forms: **weak** (convergence in probability) and **strong** (almost-sure convergence). The strong LLN is one of the deepest theorems of elementary probability. and of Shiryaev's [[shiryaev-probability|"Probability"]] examine them in detail.

## Weak law of large numbers

**Theorem (weak LLN).** Let $X_1, X_2, \ldots$ be i.i.d. random variables with finite mean $\mu = \mathbb{E}[X]$. Then

$$\frac{S_n}{n} = \frac{X_1 + X_2 + \ldots + X_n}{n} \xrightarrow{p} \mu,$$

where $\xrightarrow{p}$ denotes convergence in probability: for every $\varepsilon > 0$,

$$\mathbb{P}\!\left(\left| \frac{S_n}{n} - \mu \right| > \varepsilon \right) \to 0 \quad \text{as } n \to \infty.$$

The arithmetic mean approaches the expectation, and the probability of any deviation larger than $\varepsilon$ tends to zero.

## Proof (Chebyshev)

Under the additional assumption $\sigma^2 = \text{Var}(X) < \infty$ the proof is one line. By Chebyshev's inequality:

$$\mathbb{P}\!\left(\left| \frac{S_n}{n} - \mu \right| > \varepsilon \right) \leq \frac{\text{Var}(S_n / n)}{\varepsilon^2} = \frac{\sigma^2 / n}{\varepsilon^2} \to 0.$$

The variance of the average decays as $1/n$ (since the summands are independent), so the probability of a large deviation tends to zero. ∎

Khintchine (1929) showed that the finite-variance assumption can be dropped — the weak LLN holds under just the existence of a finite mean.

## Strong law of large numbers

**Theorem (strong LLN, Kolmogorov 1933).** Let $X_1, X_2, \ldots$ be i.i.d. with finite mean $\mu = \mathbb{E}[X]$. Then

$$\frac{S_n}{n} \xrightarrow{\text{a.s.}} \mu,$$

i.e.

$$\mathbb{P}\!\left(\lim_{n \to \infty} \frac{S_n}{n} = \mu \right) = 1.$$

This is **substantially stronger** than the weak LLN. The weak LLN says "the probability of a large deviation is small at every fixed $n$"; the strong says **the trajectory itself** $(S_n/n)$ converges a.s. to $\mu$. Every realization (every $\omega$) gives a convergent sequence.

## Proof of the strong LLN (idea)

Kolmogorov's proof of the strong LLN is non-trivial, unlike the weak version. Standard route:

1. **Kolmogorov's inequality** — a generalization of Chebyshev to the maximum of partial sums:

$$\mathbb{P}\!\left(\max_{k \leq n} |S_k - n\mu| > t \right) \leq \frac{n \sigma^2}{t^2}.$$

2. From this, the **Hájek-Rényi inequality** for normalized partial sums.

3. Use **Kronecker's lemma**: if $\sum a_n / n$ converges, then $a_n/n \to 0$.

4. Combining with [[borel-cantelli-zero-one|Borel-Cantelli]] yields a.s. convergence.

For i.i.d. variables with finite mean there is an even more elegant proof of Etemadi (via a "decategorization" trick and the ergodic theorem).

## Empirical frequency converges to probability

The most famous example of the LLN is the binomial. Toss a coin with heads probability $p$. Let $\nu_n$ be the number of heads in $n$ tosses. Then:

$$\frac{\nu_n}{n} \xrightarrow{\text{a.s.}} p.$$

This is the **rigorous proof** that "empirical frequencies converge to theoretical probabilities." In this sense the LLN is the theoretical justification of the frequentist interpretation of probability: "probability is the number that the frequency tends to under infinite repetition."

## Monte Carlo

The strong LLN is the theoretical foundation of **Monte Carlo** numerical integration. For an integral

$$I = \int_a^b f(x) \, dx$$

generate $X_1, \ldots, X_n$ — i.i.d. uniform on $[a, b]$ — and estimate

$$I \approx (b - a) \cdot \frac{1}{n} \sum_{k=1}^n f(X_k).$$

By the strong LLN this estimate converges to $I$ a.s. as $n \to \infty$. The rate is $O(1/\sqrt{n})$ by [[central-limit-theorem|CLT]] (Berry-Esseen), which is **independent of the dimension** $d$. This is the fundamental advantage of Monte Carlo over quadrature methods in high dimensions, where quadrature gives $O(1/n^{1/d})$.

## Strengthenings and generalizations

**Hoeffding's law of large numbers** (for bounded $|X_i| \leq C$): gives an explicit **exponential** deviation bound

$$\mathbb{P}\!\left(\left| \frac{S_n}{n} - \mu \right| > \varepsilon \right) \leq 2 e^{-2 n \varepsilon^2 / C^2}.$$

Far stronger than the polynomial Chebyshev bound, and the foundation of **concentration of measure** in modern probability and machine learning.

**Birkhoff-Khintchine ergodic theorem** — generalization of the strong LLN to stationary ergodic sequences (see [[ergodic-theorems-birkhoff]]). Requires no independence, only ergodicity.

**Law of the iterated logarithm** sharpens the LLN: it tells you the **exact rate** at which $S_n/n$ approaches $\mu$. See [[law-iterated-logarithm]].

## Connection to finance

In finance the LLN is the expected statement that "the average return of a strategy converges to its expectation." But there is a problem: for many strategies the **mean is infinite** (heavy tails), and the LLN fails. This is one reason why short-period backtests are unreliable.

In actuarial science the LLN justifies why insurance works: **the average loss across a portfolio of policies** converges to the expected loss per policy, allowing fair premiums to be computed. Without the LLN, insurance would be gambling.

In Markowitz portfolio theory the LLN justifies the "law of large numbers in portfolio diversification": **the average return of a diversified portfolio** converges to its expectation, which reduces risk. This is the mathematical basis of diversification.

## What the LLN does not say

The LLN is about **convergence**, not **rates**. From "$S_n/n \to \mu$" one cannot extract how far $S_n/n$ is from $\mu$ at any fixed $n$. That is the question answered by the CLT (typical deviation $\sigma/\sqrt{n}$) and the law of the iterated logarithm (the precise oracle bound $\sigma\sqrt{2 \log\log n / n}$).

The LLN also **does not say** that the observed frequency "must" approach the probability — it is a statement about a **set of trajectories of probability 1**, not about every individual trajectory. There exist (a measure-zero set) trajectories on which $S_n/n$ does not converge to $\mu$.

## Related Articles

- [[kolmogorov-probability-axioms]] — foundation on which the LLN is stated and proved.
- [[central-limit-theorem]] — exact rate of convergence in the LLN.
- [[characteristic-functions]] — alternative proof of the weak LLN.
- [[borel-cantelli-zero-one]] — technique used in proving the strong LLN.
- [[law-iterated-logarithm]] — the sharpest refinement of the LLN.
- [[ergodic-theorems-birkhoff]] — generalization to stationary processes.
- [[markowitz-mean-variance]] — financial application via diversification.
- [[brownian-motion]] — related through the functional CLT.
