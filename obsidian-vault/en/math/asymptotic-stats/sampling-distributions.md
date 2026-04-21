---
title: "Sampling Distributions"
category: "Asymptotic Statistics"
order: 16
lang: "en"
slug: "sampling-distributions"
---

# Sampling Distributions: t, χ², and F

A **Sampling Distribution** is the probability distribution of a statistic (like the mean or variance) calculated from a random sample. Understanding these distributions is critical because nearly all classical hypothesis tests rely on them to calculate p-values.

## 1. The Chi-Square Distribution ($\chi^2$)

The $\chi^2$ distribution with $k$ degrees of freedom is the distribution of the **sum of squares** of $k$ independent standard normal variables:
$$Q = \sum_{i=1}^k Z_i^2 \sim \chi^2(k)$$

- **Use case**: Estimating population variance and performing goodness-of-fit tests.
- **Property**: It is always non-negative and skewed to the right.

## 2. Student's t-Distribution

The t-distribution arises when estimating the mean of a normally distributed population in situations where the **sample size is small** and the population standard deviation is **unknown**.
$$t = \frac{Z}{\sqrt{V/k}} \sim t(k)$$
where $Z \sim \mathcal{N}(0, 1)$ and $V \sim \chi^2(k)$.

- **Comparison to Normal**: It looks like a Gaussian but with **fatter tails**. As $k \to \infty$, the t-distribution converges exactly to the Normal distribution.
- **Use case**: Confidence intervals for the mean when $n < 30$.

## 3. The F-Distribution

The F-distribution is the distribution of the **ratio of two independent chi-square variables**, each divided by its degrees of freedom:
$$F = \frac{V_1 / d_1}{V_2 / d_2} \sim F(d_1, d_2)$$

- **Use case**: The primary distribution for [[anova|ANOVA]] and for comparing variances between two groups.
- **Intuition**: It measures if the variance of one group is significantly larger than another.

## Summary Table

| Distribution | Source | Key Parameters | Main Test |
|---|---|---|---|
| **Normal (Z)** | Sums of variables | $\mu, \sigma$ | Large sample mean |
| **Chi-Square ($\chi^2$)** | Sum of squares | $df$ | Variance, Goodness-of-fit |
| **Student's t** | Mean / $\sqrt{\text{Var}}$ | $df$ | Small sample mean |
| **Fisher's F** | Ratio of variances | $df_1, df_2$ | ANOVA, Variance comparison |

## Visualization: t vs Normal

```chart
{
  "type": "line",
  "xAxis": "x",
  "data": [
    {"x": -3, "normal": 0.004, "t_dist": 0.02},
    {"x": -2, "normal": 0.054, "t_dist": 0.10},
    {"x": -1, "normal": 0.242, "t_dist": 0.28},
    {"x": 0,  "normal": 0.399, "t_dist": 0.38},
    {"x": 1,  "normal": 0.242, "t_dist": 0.28},
    {"x": 2,  "normal": 0.054, "t_dist": 0.10},
    {"x": 3,  "normal": 0.004, "t_dist": 0.02}
  ],
  "lines": [
    {"dataKey": "normal", "stroke": "#3b82f6", "name": "Normal (Z)"},
    {"dataKey": "t_dist", "stroke": "#ef4444", "name": "t-distribution (df=2)"}
  ]
}
```
*The t-distribution (red) has heavier tails than the Normal distribution (blue). This "fatness" accounts for the extra uncertainty introduced when we don't know the true standard deviation.*

## Related Topics

[[hypothesis-testing]] — where these distributions are used  
[[central-limit-theorem]] — the reason why Z is the limit for all of them  
[[anova]] — testing group differences using the F-distribution
---
