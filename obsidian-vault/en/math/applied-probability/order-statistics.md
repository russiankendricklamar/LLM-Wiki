---
title: "Order Statistics"
category: "Applied Probability"
order: 43
lang: "en"
slug: "order-statistics"
---

# Order Statistics

Order statistics are the values of a sample arranged in increasing order. They are fundamental in non-parametric statistics, reliability engineering, and extreme value theory.

## 1. Definition

Given a sample $X_1, \dots, X_n$, the order statistics are denoted as:
$$X_{(1)} \leq X_{(2)} \leq \dots \leq X_{(n)}$$
- $X_{(1)} = \min(X_1, \dots, X_n)$ is the sample minimum.
- $X_{(n)} = \max(X_1, \dots, X_n)$ is the sample maximum.
- $X_{(\lceil n/2 \rceil)}$ is the sample median.

## 2. Distribution of the $i$-th Order Statistic

If the $X_i$ are i.i.d. with PDF $f(x)$ and CDF $F(x)$, the PDF of the $i$-th order statistic $X_{(i)}$ is:
$$f_{(i)}(x) = \frac{n!}{(i-1)!(n-i)!} [F(x)]^{i-1} [1-F(x)]^{n-i} f(x)$$

### Distribution of Min and Max
- **Minimum $X_{(1)}$**: $f_{(1)}(x) = n [1-F(x)]^{n-1} f(x)$
- **Maximum $X_{(n)}$**: $f_{(n)}(x) = n [F(x)]^{n-1} f(x)$

## 3. Joint Distribution

The joint PDF of all $n$ order statistics is:
$$f_{(1), \dots, (n)}(x_1, \dots, x_n) = n! \prod_{i=1}^n f(x_i)$$
for $x_1 < x_2 < \dots < x_n$, and zero otherwise.

## 4. Applications

- **Reliability**: Modeling the time to failure of a "k-out-of-n" system.
- **Extreme Value Theory**: Studying the asymptotic behavior of $X_{(n)}$ (e.g., Gumbel, Weibull distributions).
- **Non-parametric Inference**: Constructing confidence intervals for quantiles.

## Related Topics
[[probability-distributions]]
[[extreme-value-theory]]
[[rank-tests]]
