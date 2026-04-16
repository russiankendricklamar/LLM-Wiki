---
title: "Central Limit Theorem"
category: "Limit Theorems"
order: 3
lang: "en"
---

# Central Limit Theorem

The Central Limit Theorem (CLT) is the most important statement in all of probability theory. It explains why **the normal distribution is everywhere**: whenever an observable is the sum of a large number of small **independent** random contributions, its distribution tends to be Gaussian — regardless of how the individual contributions are distributed.

This explains why:
- Human heights are roughly normal (sum of genes and environment).
- Measurement errors are roughly normal (sum of independent noise sources).
- Asset prices over short horizons are roughly normal (sum of many small trades).
- Noise in physical detectors is roughly normal.

The CLT is the universal "complexity compactor": however different the underlying distributions, **their large sums look the same**. of Shiryaev's [[shiryaev-probability|"Probability"]] gives the rigorous statement and the classical proof via [[characteristic-functions|characteristic functions]].

## Classical statement

**Theorem (classical CLT).** Let $X_1, X_2, \ldots$ be i.i.d. random variables with finite mean $\mu = \mathbb{E}[X_1]$ and finite variance $\sigma^2 = \text{Var}(X_1) > 0$. Then

$$\frac{S_n - n\mu}{\sigma\sqrt{n}} \xrightarrow{d} \mathcal{N}(0, 1),$$

where $S_n = X_1 + X_2 + \ldots + X_n$.

The normalized sum (centred at the mean and scaled by the $\sqrt{n}$ standard deviation) converges **in distribution** (see [[weak-convergence-prokhorov]]) to the standard normal.

## Proof via characteristic functions

The standard Lindeberg-Lévy route:

1. WLOG $\mu = 0$, $\sigma^2 = 1$.
2. Characteristic function of the normalized sum:

$$\varphi_{S_n / \sqrt{n}}(t) = \mathbb{E}[e^{it S_n / \sqrt{n}}] = \prod_{k=1}^n \mathbb{E}[e^{it X_k / \sqrt{n}}] = \big(\varphi_X(t/\sqrt{n}) \big)^n.$$

3. Taylor-expand $\varphi_X$ at zero:

$$\varphi_X(t) = 1 + it \mathbb{E}[X] - \frac{t^2}{2} \mathbb{E}[X^2] + o(t^2) = 1 - \frac{t^2}{2} + o(t^2).$$

(Used $\mathbb{E}[X] = 0$, $\mathbb{E}[X^2] = 1$.)

4. Substitute $t/\sqrt{n}$:

$$\varphi_X(t/\sqrt{n}) = 1 - \frac{t^2}{2n} + o(1/n).$$

5. Take the $n$-th power:

$$\big(1 - \frac{t^2}{2n} + o(1/n) \big)^n \to e^{-t^2/2}.$$

6. This is the characteristic function of $\mathcal{N}(0, 1)$. By Lévy's continuity theorem $S_n/\sqrt{n} \xrightarrow{d} \mathcal{N}(0, 1)$. ∎

Six lines. The most elegant proof in probability theory.

## Lindeberg's condition

The classical CLT requires identically distributed variables with finite variance. Lindeberg (1922) and Feller (1935) generalized it to **independent but not necessarily identically distributed** variables.

**Lindeberg's condition.** For a sum $S_n = \sum_{k=1}^n X_{n,k}$ (triangular array):

$$\frac{1}{B_n^2} \sum_{k=1}^n \mathbb{E}\big[ X_{n,k}^2 \cdot \mathbf{1}_{|X_{n,k}| > \varepsilon B_n} \big] \to 0 \quad \text{for every } \varepsilon > 0,$$

where $B_n^2 = \sum_k \text{Var}(X_{n,k})$.

**Lindeberg-Feller theorem.** Under Lindeberg's condition and the requirement that no individual term is "infinitely large" relative to the total scale, $S_n / B_n \xrightarrow{d} \mathcal{N}(0, 1)$.

Lindeberg's condition essentially says: no single term should dominate the variance of the sum. If this fails (e.g. one term has variance of the same order as all the others combined), the CLT can fail.

## Berry-Esseen: a quantitative CLT

The CLT in its classical form says "in the limit," with no statement about the **rate**. This gap is filled by:

**Berry-Esseen theorem (1941).** When $\mathbb{E}[|X|^3] < \infty$:

$$\sup_{x} \left| \mathbb{P}\!\left(\frac{S_n}{\sigma\sqrt{n}} \leq x \right) - \Phi(x) \right| \leq \frac{C \cdot \mathbb{E}[|X - \mu|^3]}{\sigma^3 \sqrt{n}}.$$

So convergence to the normal goes at rate $1/\sqrt{n}$, with a constant depending on the third absolute moment (a measure of the "asymmetry" of the underlying distribution). The closer to normal $X$ is, the smaller the constant.

This gives a **practically useful** estimate: for $n = 100$ the normal approximation is accurate to roughly $10\%$ for typical distributions; for $n = 10000$ — to $1\%$.

## What CLT does not cover

The CLT requires:

1. **Independence** (though martingale extensions exist).
2. **Finite variance**.

Both conditions often **fail** in finance. Asset returns frequently have heavy tails with $\mathbb{E}[X^2] = \infty$, leading to a **generalized Lévy CLT**: the limit distribution is not normal but [[stable-distributions|stable]]. See the dedicated article.

In such cases the normalization is not $\sqrt{n}$ but $n^{1/\alpha}$ with $\alpha \in (0, 2)$ — the stability parameter. And the limit is a stable distribution that is not normal for $\alpha < 2$.

## Multivariate and functional CLT

**Multivariate CLT.** For random vectors with finite covariance matrix $\Sigma$:

$$\frac{S_n - n\mu}{\sqrt{n}} \xrightarrow{d} \mathcal{N}(0, \Sigma).$$

Proved through multivariate [[characteristic-functions|characteristic functions]] in exactly the same way.

**Functional CLT (Donsker, 1951).** The random walk $S_{[nt]}/\sqrt{n}$, viewed as a **function of time** $t \in [0, 1]$, converges in distribution to [[brownian-motion|Brownian motion]] $W_t$ — but in the space of continuous functions $C[0, 1]$ rather than $\mathbb{R}$.

This is the **"functional" version of the CLT**: instead of one random variable, an entire random trajectory. Donsker's invariance principle is the theoretical basis for "discrete random walk is an approximation to Brownian motion."

## Generalizations for dependent variables

For **weakly dependent** sequences (mixing, m-dependent, martingale differences) the CLT also holds, but requires additional technical conditions. This is an active area of time-series econometrics:

- **Ergodic CLT** for stationary processes.
- **CLT for martingale differences** (Hall-Heyde).
- **CLT for geometrically α-mixing processes**.

In finance these generalizations are needed for statistical analysis of returns (which are not time-independent), parameter estimation in [[arch-models|GARCH]] models, and so on.

## Historical significance

Laplace stated a CLT in the mid-19th century for the binomial distribution (de Moivre-Laplace theorem). Chebyshev and Markov in Russia strengthened and generalized it. Kolmogorov in the 1920s introduced modern proof methods. Lindeberg and Feller gave the final form.

From the **history of mathematics** viewpoint the CLT is the prime example of how an "empirical observation" (the normal distribution is everywhere) becomes a rigorous mathematical theorem. It is a model case of what Kolmogorov called "the correspondence between statistical and axiomatic approaches."

## Related Articles

- [[characteristic-functions]] — main technical tool of the proof.
- [[weak-convergence-prokhorov]] — convergence in which the CLT is stated.
- [[law-of-large-numbers]] — kindred theorem about convergence of averages to constants.
- [[kolmogorov-probability-axioms]] — framework in which everything is stated.
- [[brownian-motion]] — limit through the functional CLT.
- [[stable-distributions]] — generalized CLT for heavy tails.
- [[stylized-facts-returns]] — where the classical CLT fails on financial data.
- [[crr-model]] — limit transition CRR → BS as an example of the CLT in finance.
