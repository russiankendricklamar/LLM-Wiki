---
title: "Large Deviations and Cramer's Theorem"
category: "Mathematics"
order: 17
lang: "en"
---

# Large Deviations and Cramer's Theorem

Large Deviations Theory (LDT) is the fourth and subtlest level of limit theorems for sums of independent variables, after the [[law-of-large-numbers|LLN]] (order $1$), the [[central-limit-theorem|CLT]] (order $\sqrt{n}$), and the [[law-iterated-logarithm|LIL]] (order $\sqrt{n \log\log n}$).

The LLN says $\mathbb{P}(S_n/n > x) \to 0$ for $x > \mathbb{E}[X]$; the CLT gives a typical fluctuation $\sigma/\sqrt{n}$. But **how fast** does $\mathbb{P}(S_n/n > x)$ go to zero? Large deviations theory answers: **exponentially fast**, and gives the exact exponent. of Shiryaev's [[shiryaev-probability|"Probability"]] contains the classical Cramer theorem. The same approach — exponential tail bounds — underlies **concentration of measure**, statistical mechanics (large deviations from the thermodynamic limit), information theory (Sanov's theorem), and modern machine learning (Hoeffding-Bernstein-type bounds).

## Setup

Let $X_1, X_2, \ldots$ be i.i.d. with $\mathbb{E}[X_1] = \mu$. We are interested in the probability that the mean $S_n/n$ **strongly** deviates from the expectation:

$$\mathbb{P}\!\left(\frac{S_n}{n} \geq x \right), \quad x > \mu.$$

By the LLN this probability tends to zero. By the CLT at rate $\sim \frac{1}{\sqrt{n}} e^{-n(x - \mu)^2 / (2\sigma^2)}$ for small deviations (when $x$ is close to $\mu$). But for **large** $x$ the Gaussian approximation is inaccurate — a deeper theory is needed.

## The Cramer rate function

**Definition.** The **cumulant generating function** of a random variable $X$:

$$\Lambda(\theta) = \log \mathbb{E}[e^{\theta X}], \quad \theta \in \mathbb{R}.$$

The logarithm of the moment generating function. $\Lambda$ is convex with $\Lambda(0) = 0$, $\Lambda'(0) = \mathbb{E}[X]$, $\Lambda''(0) = \text{Var}(X)$.

The **Cramer rate function** is the Legendre transform of $\Lambda$:

$$I(x) = \sup_{\theta} \big(\theta x - \Lambda(\theta) \big).$$

The function $I$ is:
- Non-negative: $I(x) \geq 0$.
- Convex.
- $I(\mu) = 0$ (the minimum) — corresponds to the "typical" mean value.
- $I(x) > 0$ for $x \neq \mu$.

Shape of $I$ near $\mu$: $I(x) \approx (x - \mu)^2 / (2\sigma^2)$ — quadratic, matching the Gaussian CLT. Far from $\mu$ — it grows faster (for light tails) or slower (for heavy tails).

## Cramer's theorem

**Theorem (Cramer, 1938).** Let $X_1, X_2, \ldots$ be i.i.d. with finite cumulant generating function in a neighbourhood of zero. Then for every $x > \mu$:

$$\lim_{n \to \infty} \frac{1}{n} \log \mathbb{P}\!\left(\frac{S_n}{n} \geq x \right) = -I(x).$$

Equivalently: $\mathbb{P}(S_n/n \geq x) \approx e^{-n I(x)}$ up to logarithmic corrections.

So the probability of a large deviation decays **exponentially**, with the **rate function** as the decay exponent. A decisive improvement over the Gaussian approximation, which becomes inaccurate for large $x$.

## Upper and lower bounds

Cramer's proof splits into two parts:

**Upper bound (Chernoff).** Markov's inequality for $e^{\theta S_n}$:

$$\mathbb{P}(S_n \geq nx) \leq e^{-n(\theta x - \Lambda(\theta))}.$$

Minimizing over $\theta$:

$$\mathbb{P}(S_n/n \geq x) \leq e^{-n I(x)}.$$

This is the **Chernoff bound** (1952), one of the most frequently used results in concentration of measure and algorithm analysis.

**Lower bound.** Via change of measure (exponential **tilt**): pass to the measure $\mathbb{Q}_\theta$ with density $e^{\theta X - \Lambda(\theta)}$ w.r.t. the original. Under $\mathbb{Q}_\theta$ the mean becomes $\Lambda'(\theta) = x$ (choose $\theta$ so), and $\{S_n/n \geq x\}$ is now a typical-size event. Returning to the original measure gives the factor $e^{-n I(x)}$.

Both bounds together give the exact asymptotics.

## Examples

**1. Binomial.** For $X \in \{0, 1\}$ with $\mathbb{P}(X = 1) = p$:

$$I(x) = x \log\frac{x}{p} + (1 - x) \log\frac{1 - x}{1 - p}, \quad x \in (0, 1).$$

This is **KL divergence** $D(\text{Ber}(x) \| \text{Ber}(p))$. Deep connection: the Cramer rate function is the Kullback-Leibler divergence between two distributions, coinciding with the information-theoretic "distinguishing information."

**2. Gaussian.** For $X \sim \mathcal{N}(\mu, \sigma^2)$:

$$I(x) = \frac{(x - \mu)^2}{2\sigma^2}.$$

Exactly quadratic, no corrections. Consistent with the fact that for Gaussian variables the CLT approximation is exact at all scales.

**3. Exponential.** For $X \sim \text{Exp}(\lambda)$:

$$I(x) = \lambda x - 1 - \log(\lambda x), \quad x > 0.$$

The linear part corresponds to the "heavy" right tail.

## Large deviation principle

Cramer's theorem is a special case of a more general construction:

**Definition.** A sequence of probability measures $(\mu_n)$ on a space $\mathcal{X}$ satisfies a **Large Deviation Principle** (LDP) with rate function $I : \mathcal{X} \to [0, \infty]$ and speed $a_n \to \infty$ if for every measurable $A$:

$$-\inf_{x \in A^\circ} I(x) \leq \liminf_{n \to \infty} \frac{1}{a_n} \log \mu_n(A) \leq \limsup_{n \to \infty} \frac{1}{a_n} \log \mu_n(A) \leq -\inf_{x \in \bar{A}} I(x).$$

Cramer's theorem is the LDP for empirical averages $S_n/n$ with $a_n = n$. The general theory of large deviations (Varadhan, Dembo-Zeitouni) extends this to completely different objects: Markov processes, empirical measures, stochastic differential equations with small noise.

## Sanov's theorem

**Sanov's theorem (1957).** Let $L_n$ be the empirical measure of a sample $X_1, \ldots, X_n$ from distribution $\mu$. Then:

$$\mathbb{P}(L_n \approx \nu) \approx e^{-n D(\nu \| \mu)},$$

where $D(\nu \| \mu) = \int \log(d\nu/d\mu) \, d\nu$ is the **Kullback-Leibler divergence**.

This is a large deviation for the **empirical distribution** (not just its mean), with KL divergence as the rate function. It is the foundation of Shannon's information theory and the reason why KL appears everywhere: as the "cost" of rare events.

## Applications

**1. Statistical mechanics.** The free energy function of a thermodynamic system is the Cramer rate function of the corresponding random variable. Large deviations describe how rare "atypical" macrostates are.

**2. Information theory.** KL divergence as a rate function links Shannon's theory to large deviations. Stein's lemma on channel capacity is a direct consequence of the LDP.

**3. Machine learning.** Hoeffding, Bernstein, McDiarmid inequalities are special cases of Chernoff. They provide PAC guarantees for learning: with probability $\geq 1 - \delta$ the test error is not far from the training error, with exponential decay of exceptions.

**4. Finance and insurance.** Lundberg's theorem (see [[lundberg-cramer-ruin]]) is a large deviation for the capital process of an insurance company: **the probability of ruin** decays exponentially, with the Lundberg exponent.

**5. Financial risk management.** VaR and CVaR at high confidence (99.9%, 99.99%) require estimating probabilities of rare events — a direct application of large deviations.

**6. Algorithms.** Analysis of randomized algorithms (Monte Carlo, MCMC, stochastic gradient descent): time-to-convergence bounds are expressed through large deviations.

## Connection to other limit theorems

The hierarchy is now complete:

| Theorem | Scale | Statement |
|---|---|---|
| LLN | $1$ | $S_n/n \to \mu$ |
| CLT | $\sqrt{n}$ | $(S_n - n\mu)/\sqrt{n} \xrightarrow{d} \mathcal{N}(0, \sigma^2)$ |
| LIL | $\sqrt{n \log\log n}$ | $\limsup (S_n - n\mu) / \sqrt{2 n \sigma^2 \log\log n} = 1$ |
| **LD** | $n$ | $\mathbb{P}(S_n/n \geq x) \approx e^{-n I(x)}$ |

The LLN gives "where it goes," the CLT "typical fluctuation," the LIL "maximum fluctuation," large deviations "how rare are extreme values." Four different resolutions of the same object.

## Related Articles

- [[law-of-large-numbers]] — zeroth order.
- [[central-limit-theorem]] — first order (Cramer's theorem cannot be proved via CLT).
- [[law-iterated-logarithm]] — intermediate scale.
- [[characteristic-functions]] — alternative analytic tool linked to $\Lambda$.
- [[shannon-entropy]] — KL divergence as rate function.
- [[lundberg-cramer-ruin]] — famous financial application.
- [[kolmogorov-probability-axioms]] — foundation.
- [[cornish-fisher-cvar]] — practical VaR estimation at high levels.
