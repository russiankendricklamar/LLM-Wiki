---
title: "Slutsky's Theorem"
category: "Asymptotic Statistics"
order: 17
lang: "en"
slug: "slutsky-theorem"
---

# Slutsky's Theorem and Continuous Mapping

Slutsky's Theorem is a fundamental result in asymptotic statistics that allows us to perform "algebra" with sequences of random variables that converge in different modes. It is the tool that justifies why we can replace unknown parameters with their estimates in complex statistics.

## The Core Theorem

Let $X_n, Y_n$ be sequences of random variables. If $X_n$ converges in distribution to $X$, and $Y_n$ converges in probability to a **constant** $c$, then:

1.  **Addition**: $X_n + Y_n \xrightarrow{d} X + c$
2.  **Multiplication**: $X_n Y_n \xrightarrow{d} cX$
3.  **Division**: $X_n / Y_n \xrightarrow{d} X/c$ (provided $c \neq 0$)

### Why the Constant Matters
It is crucial that $Y_n$ converges to a **constant**. If $Y_n$ converges to a random variable, these properties generally fail unless $X_n$ and $Y_n$ are independent.

## The Continuous Mapping Theorem (CMT)

A more general result is the CMT. If $X_n \xrightarrow{d} X$ and $g$ is a **continuous function**, then:
$$g(X_n) \xrightarrow{d} g(X)$$
This also holds for convergence in probability and almost surely.

## Practical Application: The t-statistic

Slutsky's theorem explains why the t-statistic behaves like a Normal distribution for large samples.
- We know from CLT that $\sqrt{n}(\bar{X} - \mu) \xrightarrow{d} \mathcal{N}(0, \sigma^2)$.
- We know the sample variance $s_n^2$ is consistent: $s_n \xrightarrow{p} \sigma$.
- By Slutsky's (division rule):
$$\frac{\sqrt{n}(\bar{X} - \mu)}{s_n} \xrightarrow{d} \frac{\mathcal{N}(0, \sigma^2)}{\sigma} = \mathcal{N}(0, 1)$$
This justifies using Z-tables for large samples even when $\sigma$ is unknown.

## Visualization: Convergence Interaction

```chart
{
  "type": "scatter",
  "xAxis": "n",
  "data": [
    {"n": 10, "Xn": 1.5, "Yn": 0.8, "Product": 1.2},
    {"n": 50, "Xn": -0.4, "Yn": 0.95, "Product": -0.38},
    {"n": 100, "Xn": 2.1, "Yn": 0.99, "Product": 2.08},
    {"n": 500, "Xn": -1.2, "Yn": 1.0, "Product": -1.2}
  ],
  "lines": [
    {"dataKey": "Product", "stroke": "#10b981", "name": "Xn * Yn (where Yn -> 1)"}
  ]
}
```
*As $n$ grows, $Y_n$ stabilizes to its constant limit, and the behavior of the product $X_n Y_n$ becomes dominated solely by the distributional fluctuations of $X_n$.*

## Related Topics

[[convergence-types]] — the different modes used in the theorem  
[[central-limit-theorem]] — where Slutsky is most frequently applied  
[[asymptotic-stats]] — properties of estimators at the limit
---
