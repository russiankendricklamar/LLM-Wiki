---
title: "ANOVA (Analysis of Variance)"
category: "Asymptotic Statistics"
order: 14
lang: "en"
slug: "anova"
---

# ANOVA (Analysis of Variance)

Analysis of Variance (ANOVA) is a statistical framework used to compare the means of three or more groups. It tests the null hypothesis that all group means are equal against the alternative that at least one mean is different. 

Despite its name, it uses **variances** to make inferences about **means**.

## The Core Idea: F-Ratio

ANOVA decomposes the total variation in the data into two components:
1.  **Between-group Variance**: Variation due to the interaction between the groups (the "signal").
2.  **Within-group Variance**: Variation within each group (the "noise").

The **F-statistic** is the ratio of these two:
$$F = \frac{\text{MS}_{between}}{\text{MS}_{within}}$$
If $F$ is significantly larger than 1, we conclude that the differences between the group means are too large to be explained by random chance alone.

## Types of ANOVA

### 1. One-Way ANOVA
One independent variable with 3+ levels (e.g., comparing the effect of 3 different drugs on blood pressure).

### 2. Two-Way ANOVA
Two independent variables (e.g., effect of drug type AND gender). This allows for testing **interaction effects** — where the effect of one variable depends on the level of the other.

### 3. MANOVA (Multivariate ANOVA)
Used when there are multiple dependent variables.

## Assumptions

For ANOVA results to be valid, the data should satisfy:
- **Independence**: Observations are independent.
- **Normality**: Residuals follow a normal distribution.
- **Homogeneity of Variance (Homoscedasticity)**: The variance is roughly the same across all groups (checked via Levene's test).

## Post-hoc Tests

ANOVA tells you *that* a difference exists, but not *where* it is. If you reject the null hypothesis, you must perform **Post-hoc tests** (like Tukey’s HSD or Bonferroni) to find which specific pairs of groups are different.

## Visualization: Signal vs. Noise

```chart
{
  "type": "scatter",
  "xAxis": "group",
  "data": [
    {"group": "A", "val": 10, "type": "mean"},
    {"group": "A", "val": 9,  "type": "obs"},
    {"group": "A", "val": 11, "type": "obs"},
    {"group": "B", "val": 20, "type": "mean"},
    {"group": "B", "val": 19, "type": "obs"},
    {"group": "B", "val": 21, "type": "obs"},
    {"group": "C", "val": 15, "type": "mean"},
    {"group": "C", "val": 14, "type": "obs"}
  ],
  "lines": [
    {"dataKey": "val", "stroke": "#ef4444", "name": "Group Mean"}
  ]
}
```
*ANOVA passes when the distance between the red lines (group means) is significantly larger than the spread of the points around each line.*

## Related Topics

[[hypothesis-testing]] — the broader framework  
[[linear-regression]] — ANOVA is mathematically a special case of linear regression  
[[total-probability-variance]] — the mathematical law underlying the decomposition
---
