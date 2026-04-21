---
title: "Non-parametric Rank Tests"
category: "Asymptotic Statistics"
order: 19
lang: "en"
slug: "rank-tests"
---

# Non-parametric Rank Tests

Non-parametric tests are statistical methods that do not assume the data follows a specific probability distribution (like the Normal distribution). Instead of using the raw values, these tests often use the **ranks** of the data, making them robust to outliers and applicable to ordinal data.

## 1. Mann-Whitney U Test

The Mann-Whitney U test (also known as the Wilcoxon rank-sum test) is the non-parametric alternative to the **independent samples t-test**. It compares the distributions of two independent groups.

### The Procedure
1. Combine all observations from both groups and rank them from smallest to largest.
2. Sum the ranks for each group.
3. Calculate the $U$ statistic based on the rank sums.

**Null Hypothesis ($H_0$)**: There is a 50% probability that a randomly drawn member from the first population will exceed a member from the second population. 

## 2. Wilcoxon Signed-Rank Test

The non-parametric alternative to the **paired samples t-test**. It is used to compare two related samples (e.g., measurements before and after treatment on the same patient).

### The Procedure
1. Calculate the difference $d_i$ for each pair.
2. Rank the absolute differences $|d_i|$.
3. Sum the ranks of the positive and negative differences.

## 3. Kruskal-Wallis Test

The non-parametric alternative to **one-way ANOVA**. It tests whether three or more independent groups come from the same distribution.

## When to Use Ranks?

| Feature | Parametric (t-test) | Non-parametric (U-test) |
|---|---|---|
| **Assumption** | Normal distribution | None |
| **Outliers** | Very sensitive | **Robust** |
| **Data Type** | Continuous | **Ordinal or Continuous** |
| **Power** | High (if Normal) | Slightly lower (if Normal) |

## Visualization: The Power of Ranks

```chart
{
  "type": "scatter",
  "xAxis": "index",
  "data": [
    {"index": 1, "raw": 10, "rank": 1},
    {"index": 2, "raw": 12, "rank": 2},
    {"index": 3, "raw": 15, "rank": 3},
    {"index": 4, "raw": 1000, "rank": 4}
  ],
  "lines": [
    {"dataKey": "rank", "stroke": "#10b981", "name": "Rank Value (Stable)"}
  ]
}
```
*Notice how the outlier (raw value = 1000) distorts the mean, but only occupies one step in the rank sequence. This is why rank tests are "immune" to extreme values that would otherwise ruin a t-test.*

## Related Topics

[[hypothesis-testing]] — the broader framework  
[[anova]] — the parametric counterpart for 3+ groups  
[[order-statistics]] — the mathematical foundation of ranks
---
