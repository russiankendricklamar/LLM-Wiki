---
title: "Total Probability and Total Variance"
category: "Applied Probability"
order: 39
lang: "en"
slug: "total-probability-variance"
---

# Law of Total Probability and Total Variance

These fundamental decomposition theorems allow us to analyze complex systems by breaking them down into simpler, conditional components. They are the basis for hierarchical modeling and risk analysis.

## 1. Law of Total Probability

If $\{B_n\}$ is a partition of the sample space, then for any event $A$:
$$P(A) = \sum_n P(A \mid B_n) P(B_n)$$
In the continuous case, for random variables $X$ and $Y$:
$$P(A) = \int P(A \mid Y=y) f_Y(y) dy$$

## 2. Law of Total Expectation (Adam's Law)

The expected value of $X$ can be found by taking the expectation of the conditional expectation of $X$ given $Y$:
$$\mathbb{E}[X] = \mathbb{E}[\mathbb{E}[X \mid Y]]$$
*Intuition*: The overall average is the average of the group averages.

## 3. Law of Total Variance (Eve's Law)

The variance of a random variable $X$ can be decomposed into two distinct parts when conditioned on another variable $Y$:

$$\text{Var}(X) = \mathbb{E}[\text{Var}(X \mid Y)] + \text{Var}(\mathbb{E}[X \mid Y])$$

- **$\mathbb{E}[\text{Var}(X \mid Y)]$ (Within-group Variance)**: The average amount of uncertainty remaining in $X$ after we know $Y$.
- **$\text{Var}(\mathbb{E}[X \mid Y])$ (Between-group Variance)**: The amount of uncertainty in $X$ that is explained by the variation in $Y$.

## Why It Matters for AI and Finance

1.  **Mixture Models**: When modeling data as a mixture of Gaussians, the total variance is the sum of the variances of the individual clusters plus the variance between their means.
2.  **Risk Management**: In a credit portfolio, the total risk (variance of losses) is decomposed into "idiosyncratic risk" (within-borrower variance) and "systemic risk" (variance caused by macro factors).
3.  **Active Learning**: We can use Eve's Law to identify which data points will most reduce the *overall* variance of the model's predictions.

## Visualization: Variance Decomposition

```chart
{
  "type": "bar",
  "xAxis": "component",
  "data": [
    {"component": "Total Variance", "value": 100},
    {"component": "Explained (Between)", "value": 65},
    {"component": "Unexplained (Within)", "value": 35}
  ],
  "lines": [
    {"dataKey": "value", "stroke": "#3b82f6", "name": "Variance Contribution (%)"}
  ]
}
```
*If "Between-group variance" is high, it means the variable $Y$ is a powerful predictor of $X$. In ANOVA, we use the ratio of these two components to test for significance.*

## Related Topics

[[conditional-expectation-sigma]] — the measure-theoretic formalization  
[[anova]] — the statistical test based on this law  
[[gmm]] — application in mixture models
---
