---
title: "Law of the Iterated Logarithm"
category: "Limit Theorems"
order: 5
lang: "en"
---

# Law of the Iterated Logarithm

The Law of the Iterated Logarithm (LIL) is the most precise of the classical limit theorems of probability theory. It sits between the [[law-of-large-numbers|strong law of large numbers]] (saying $S_n/n \to 0$) and the [[central-limit-theorem|central limit theorem]] (describing the typical fluctuation of $S_n$ as $\sigma\sqrt{n}$). The LIL precisely describes the **oracle maximum** of the fluctuations of $S_n$ as $n \to \infty$.

Khintchine in 1924 proved the LIL for binomial sums; Kolmogorov in 1929 extended it to a wide class of independent variables. of Shiryaev's [[shiryaev-probability|"Probability"]] gives the classical proof.

The LIL is the "third resolution level" in the study of sums of random variables: the LLN gives the zeroth order ($S_n \approx 0$), the CLT the typical order ($\sqrt{n}$), the LIL the precise maximum of fluctuations.

## Statement

**Theorem (Law of the Iterated Logarithm, Kolmogorov).** Let $X_1, X_2, \ldots$ be i.i.d. random variables with $\mathbb{E}[X] = 0$ and $\mathbb{E}[X^2] = \sigma^2 < \infty$. Then

$$\limsup_{n \to \infty} \frac{S_n}{\sqrt{2 n \sigma^2 \log\log n}} = 1 \quad \text{a.s.},$$

$$\liminf_{n \to \infty} \frac{S_n}{\sqrt{2 n \sigma^2 \log\log n}} = -1 \quad \text{a.s.}$$

So **with probability 1** the random walk $S_n$ infinitely often **exactly touches** the curves $\pm \sqrt{2 n \sigma^2 \log\log n}$ (and does not exceed them in the limit).

## Intuition

The CLT says the **typical** value of $S_n$ is of order $\sigma\sqrt{n}$. But this "typical" is for one fixed $n$. Looking at the entire trajectory $(S_1, S_2, \ldots)$, $S_n$ sometimes becomes **substantially larger** than this typical value — fluctuations.

The LIL says these anomalously large deviations **happen all the time** (infinitely often) but cannot exceed $\sqrt{2 n \sigma^2 \log\log n}$ — and they **exactly touch** this boundary infinitely often.

The appearance of the double logarithm $\log\log n$ is the most non-obvious part. Roughly: for "burst events of large amplitude" to occur infinitely often, a **very rare** sequence of such events is needed — but not so rare as to be a measure-zero set. $\log\log n$ is exactly the balance point between these requirements.

## Proof (structure)

The proof is technical but the idea is clear. It uses both [[borel-cantelli-zero-one|Borel-Cantelli lemmas]]:

**Upper bound** (show that $S_n \leq (1+\varepsilon)\sqrt{2 n \sigma^2 \log\log n}$ for only finitely many $n$):

1. Take a geometric subsequence $n_k = q^k$ for suitable $q > 1$.
2. By Kolmogorov's inequality bound the maximum of $S_n$ on the interval $[n_k, n_{k+1}]$.
3. This maximum exceeds the threshold with probability bounded by a Gaussian tail.
4. The sum of these probabilities converges, and Lemma 1 of Borel-Cantelli gives probability zero.

**Lower bound** (show $S_n \geq (1-\varepsilon)\sqrt{2 n \sigma^2 \log\log n}$ infinitely often):

1. Use independence of increments on a geometric grid.
2. Each increment $S_{n_{k+1}} - S_{n_k}$ is independent and must be large.
3. By the reverse Borel-Cantelli lemma (independent $A_k$ with divergent sum) such an event occurs infinitely often.

**Main technical tools:** Kolmogorov's inequality, both Borel-Cantelli lemmas, and **Kolmogorov's 0-1 law** to turn "positive probability" into "probability 1."

## LIL for Brownian motion

For [[brownian-motion|Brownian motion]] $W_t$ there is a **continuous analogue** of the LIL:

$$\limsup_{t \to \infty} \frac{W_t}{\sqrt{2 t \log\log t}} = 1 \quad \text{a.s.}$$

And the **local** version (as $t \to 0^+$):

$$\limsup_{t \to 0^+} \frac{W_t}{\sqrt{2 t \log\log(1/t)}} = 1 \quad \text{a.s.}$$

The local version describes the "local roughness" of Brownian trajectories near zero. They are nowhere-differentiable, and the LIL gives a precise measure of their "wiggliness" at small scales.

## Hierarchy of limit theorems

The LIL is the apex of the "resolution hierarchy" of limit theorems for sums of i.i.d. variables:

| Theorem | Statement | Precision |
|---|---|---|
| **Strong LLN** | $S_n / n \to 0$ a.s. | Zeroth order: average behaviour |
| **CLT** | $S_n / \sqrt{n} \xrightarrow{d} \mathcal{N}(0, \sigma^2)$ | First order: typical fluctuation |
| **LIL** | $\limsup S_n / \sqrt{2n\sigma^2 \log\log n} = 1$ a.s. | Exact oracle maximum |
| **Large deviations** | $\mathbb{P}(S_n/n > x) \sim e^{-n I(x)}$ | Decay rate of "rare" events |

Each successive theorem refines the description. CLT for typical, LIL for extreme, large deviations for super-extreme.

## Applications

**1. Modelling extreme risk.** In finance the LIL gives the **exact asymptotic** maximum of a random walk. This is used in long-horizon VaR models: for sufficiently large $T$ the typical maximum loss is of order $\sqrt{2 T \sigma^2 \log\log T}$.

**2. Theory of betting efficiency.** In martingale models of exchanges (where "fair game" means $\mathbb{E}[X] = 0$) the LIL bounds how much "luck" a single player can accumulate over a long period. This is the mathematical reason why no one can outperform a fair market for long.

**3. Algorithm analysis.** In theoretical computer science the LIL gives precise asymptotics of random walks in randomized algorithm analysis: convergence times of MCMC methods are often described by LIL-like bounds.

**4. Ergodic theory.** The LIL has analogues for a wide class of stationary processes via the ergodic theorem — see [[ergodic-theorems-birkhoff]].

## Connection to the arcsine law

Another fine statement of the same class is the **arcsine law** for random walk: the time the walk spends in the positive region has an arcsine distribution. Non-trivial — intuition would expect something near uniform.

The arcsine law and the LIL are two examples that simple random walk has **non-trivial internal structure** beyond the "average" behaviour given by the CLT. Both reflect the fact that maxima and time spent on one side are not "smooth" functions of $n$ but exhibit sharp jumps.

## Historical significance

Khintchine (1924) and Kolmogorov (1929) are the principal authors. The LIL is one of the **hardest** classical theorems of elementary probability theory; understanding its proof requires the entire Kolmogorov apparatus, Kolmogorov's inequality, Borel-Cantelli, and the 0-1 laws.

The LIL marked the "maturity" of probability theory as a branch of mathematics: questions stopped being "what happens on average" and became "what is the precise maximum of fluctuations" — and the answer turned out to involve the strange combination $\sqrt{n \log\log n}$.

## Related Articles

- [[law-of-large-numbers]] — zeroth order: $S_n/n \to 0$.
- [[central-limit-theorem]] — first order: typical fluctuation $\sqrt{n}$.
- [[borel-cantelli-zero-one]] — main technical tool of the proof.
- [[brownian-motion]] — continuous analogue of the LIL for $W_t$.
- [[kolmogorov-probability-axioms]] — foundation of all the Kolmogorov machinery.
- [[ergodic-theorems-birkhoff]] — extension to stationary processes.
- [[characteristic-functions]] — parallel route to the limit theorems.
