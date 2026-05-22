---
title: "Large Deviations: Hoeffding & Bernstein Inequalities"
category: "Math Foundations"
order: 70
lang: "en"
slug: "large-deviations"
---

# Large Deviations: Hoeffding & Bernstein

Concentration inequalities bound the probability that a random variable deviates significantly from its expected value. They are essential in Statistical Learning Theory for deriving generalization bounds (e.g., bounding empirical risk vs. true risk).

## Markov's and Chebyshev's Inequalities
The foundational inequalities:
- **Markov's:** For a non-negative random variable $X$, $P(X \ge a) \le \frac{\mathbb{E}[X]}{a}$.
- **Chebyshev's:** $P(|X - \mu| \ge a) \le \frac{\text{Var}(X)}{a^2}$. 
While universally applicable (requiring only bounded variance), Chebyshev's bound decreases only polynomially ($1/a^2$).

## Hoeffding's Inequality
Hoeffding's inequality relies on the Moment Generating Function (MGF) and applies to bounded independent random variables.
Let $X_1, \dots, X_n$ be independent random variables strictly bounded by intervals: $X_i \in [a_i, b_i]$. Let $S_n = \sum X_i$.
$$ P(|S_n - \mathbb{E}[S_n]| \ge t) \le 2 \exp\left( - \frac{2t^2}{\sum_{i=1}^n (b_i - a_i)^2} \right) $$
For the empirical mean $\bar{X} = \frac{1}{n} S_n$ with all $X_i \in [0, 1]$:
$$ P(|\bar{X} - \mathbb{E}[\bar{X}]| \ge \epsilon) \le 2 \exp(-2n\epsilon^2) $$
**Key takeaway:** The probability of a large deviation decays **exponentially** with the sample size $n$. However, Hoeffding's bound depends only on the range $[a,b]$, entirely ignoring the variance.

## Bernstein's Inequality
Bernstein's inequality incorporates the variance, providing much tighter bounds when the variance is small compared to the range.
Let $X_1, \dots, X_n$ be independent zero-mean variables bounded by $M$ ($|X_i| \le M$ a.s.). Let $\sigma^2 = \frac{1}{n} \sum \text{Var}(X_i)$.
For $\bar{X} = \frac{1}{n} \sum X_i$:
$$ P(\bar{X} \ge \epsilon) \le \exp\left( - \frac{n \epsilon^2}{2\sigma^2 + \frac{2}{3} M \epsilon} \right) $$
If $\sigma^2 \to 0$, Bernstein gives a much faster convergence rate $O(1/n)$ compared to Hoeffding's $O(1/\sqrt{n})$, making it a central tool in fast-rate learning bounds.
