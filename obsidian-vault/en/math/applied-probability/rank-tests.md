---
title: "Non-parametric Statistics: Rank Tests"
category: "Applied Probability"
order: 41
lang: "en"
slug: "rank-tests"
---

# Non-parametric Statistics: Rank Tests

Non-parametric rank tests are used to test hypotheses when the underlying population distribution is unknown or does not meet the assumptions of parametric tests (like normality). They operate on the **ranks** of the data rather than the raw values.

## 1. Wilcoxon Signed-Rank Test

Used to compare two related samples (paired data).
- **Hypothesis**: The median difference between pairs is zero.
- **Statistic**: The sum of the ranks of the positive differences.

## 2. Mann-Whitney U Test (Wilcoxon Rank-Sum)

Used to compare two independent samples.
- **Hypothesis**: The two samples come from the same distribution.
- **Procedure**: Combine samples, rank all observations, and sum the ranks for one group.
- **Asymptotic Property**: For large samples, the $U$ statistic is approximately normally distributed.

## 3. Kruskal-Wallis Test

A non-parametric alternative to one-way ANOVA. It tests whether $k$ independent samples come from the same distribution.
$$H = \frac{12}{N(N+1)} \sum_{i=1}^k \frac{R_i^2}{n_i} - 3(N+1)$$
where $R_i$ is the rank sum of the $i$-th group. Under $H_0$, $H$ follows a $\chi^2_{k-1}$ distribution.

## 4. Advantages and Limitations

- **Advantages**: Robust to outliers, no normality assumption, works with ordinal data.
- **Limitations**: Lower statistical power than parametric tests when the normality assumption holds (Efficiency is usually $\approx 0.95$ relative to the T-test).

## Related Topics
[[statistical-inference]]
[[likelihood-ratio-tests]]
[[bootstrap-jackknife]]
