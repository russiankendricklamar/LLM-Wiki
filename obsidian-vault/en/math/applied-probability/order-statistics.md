---
title: "Order Statistics"
category: "Applied Probability"
order: 40
lang: "en"
slug: "order-statistics"
---

# Order Statistics

In statistics, the $k$-th order statistic of a statistical sample is equal to its $k$-th smallest value. Together with rank statistics, order statistics are among the most fundamental tools in non-parametric statistics and reliability theory.

## Definition

Let $X_1, X_2, \dots, X_n$ be independent and identically distributed (i.i.d.) random variables. If we sort them in increasing order:
$$X_{(1)} \leq X_{(2)} \leq \dots \leq X_{(n)}$$
The variable $X_{(k)}$ is the **$k$-th order statistic**.

- **$X_{(1)} = \min(X_1, \dots, X_n)$**: The minimum.
- **$X_{(n)} = \max(X_1, \dots, X_n)$**: The maximum.
- **Sample Median**: The middle order statistic.

## Probability Density of $X_{(k)}$

If the $X_i$ are continuous with PDF $f(x)$ and CDF $F(x)$, the PDF of the $k$-th order statistic is:

$$f_{X_{(k)}}(x) = \frac{n!}{(k-1)!(n-k)!} [F(x)]^{k-1} [1-F(x)]^{n-k} f(x)$$

*Intuition*: To have $X_{(k)} = x$, exactly $k-1$ samples must be smaller than $x$, one sample must be exactly $x$, and $n-k$ samples must be larger than $x$.

## Joint Distribution and Range

The joint distribution of the minimum and maximum is used to calculate the **Sample Range** $R = X_{(n)} - X_{(1)}$. This is a measure of dispersion used in quality control.

## Asymptotic Behavior

As $n \to \infty$, the distributions of extreme order statistics ($X_{(1)}$ and $X_{(n)}$) converge to one of the three types described in [[extreme-value-theory|Extreme Value Theory]] (Gumbel, Fréchet, or Weibull). 

## Visualization: Sample Maximum Growth

```chart
{
  "type": "line",
  "xAxis": "n",
  "data": [
    {"n": 1, "max_val": 0.50},
    {"n": 5, "max_val": 0.83},
    {"n": 10, "max_val": 0.91},
    {"n": 50, "max_val": 0.98},
    {"n": 100, "max_val": 0.99}
  ],
  "lines": [
    {"dataKey": "max_val", "stroke": "#10b981", "name": "Expected Max of Uniform(0,1)"}
  ]
}
```
*For a Uniform(0,1) distribution, the expected value of the maximum is $n/(n+1)$. As the sample size grows, the maximum gets closer and closer to the upper bound of the distribution.*

## Related Topics

[[extreme-value-theory]] — the limit laws for order statistics  
[[survival-analysis]] — using minimums to model "time to failure"  
[[nonparametric-regression]] — rank-based methods
---
