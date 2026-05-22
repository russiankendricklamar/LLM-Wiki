---
title: "Discrete Random Variables"
category: "Math Foundations"
order: 22
lang: "en"
slug: "discrete-random-variables"
---

# Discrete Random Variables

A random variable is a bridge between the abstract world of probability spaces and the concrete world of numbers. A **Discrete Random Variable** is one that can take on a countable number of distinct values.

## 1. Formal Definition

A random variable $X$ is a measurable function from the sample space to the real numbers: $X: \Omega \to \mathbb{R}$.
$X$ is **discrete** if its range $S = X(\Omega)$ is finite or countably infinite (e.g., $\{0, 1, 2, \dots\}$).

## 2. Probability Mass Function (PMF)

The distribution of a discrete random variable is characterized by its **Probability Mass Function (PMF)**, denoted $p_X(x)$:
$$ p_X(x) = P(X = x) = P(\{\omega \in \Omega : X(\omega) = x\}) $$

### 2.1 Properties of the PMF
1.  $p_X(x) \geq 0$ for all $x$.
2.  $\sum_{x \in S} p_X(x) = 1$ (Normalization).
3.  For any set $B \subseteq \mathbb{R}$, $P(X \in B) = \sum_{x \in B \cap S} p_X(x)$.

## 3. Cumulative Distribution Function (CDF)

The **CDF** $F_X(x)$ is defined as the probability that $X$ is less than or equal to $x$:
$$ F_X(x) = P(X \leq x) = \sum_{k \leq x} p_X(k) $$
For discrete variables, the CDF is a **step function** with jumps at the possible values of $X$.

## 4. Expected Value (Mean)

The expected value $\mathbb{E}[X]$ is the probability-weighted average of all possible values:
$$ \mu = \mathbb{E}[X] = \sum_{x \in S} x \cdot p_X(x) $$
- **Linearity of Expectation**: $\mathbb{E}[aX + bY] = a\mathbb{E}[X] + b\mathbb{E}[Y]$. This holds even if $X$ and $Y$ are not independent.
- **Law of the Unconscious Statistician (LOTUS)**: For any function $g(X)$:
  $$ \mathbb{E}[g(X)] = \sum_{x \in S} g(x) \cdot p_X(x) $$

## 5. Variance and Standard Deviation

Variance measures the "spread" of the distribution around the mean:
$$ \sigma^2 = \text{Var}(X) = \mathbb{E}[(X - \mu)^2] = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 $$
Standard deviation is $\sigma = \sqrt{\text{Var}(X)}$.
- **Properties**: $\text{Var}(aX + b) = a^2 \text{Var}(X)$.

## 6. Common Discrete Distributions

| Distribution | PMF: $P(X=k)$ | $\mathbb{E}[X]$ | $\text{Var}(X)$ |
|---|---|---|---|
| **Bernoulli($p$)** | $p^k(1-p)^{1-k}$, $k \in \{0, 1\}$ | $p$ | $p(1-p)$ |
| **Binomial($n, p$)** | $\binom{n}{k}p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| **Poisson($\lambda$)** | $\frac{e^{-\lambda}\lambda^k}{k!}$ | $\lambda$ | $\lambda$ |
| **Geometric($p$)** | $(1-p)^{k-1}p$ | $1/p$ | $(1-p)/p^2$ |

## Related Topics

[[continuous-random-variables]] — when the range is uncountable  
[[moment-generating-functions]] — a tool to find moments  
[[lln-clt]] — behavior of sums of random variables
---
