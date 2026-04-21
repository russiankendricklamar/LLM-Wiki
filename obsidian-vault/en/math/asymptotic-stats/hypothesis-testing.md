---
title: "Hypothesis Testing"
category: "Asymptotic Statistics"
order: 11
lang: "en"
slug: "hypothesis-testing"
---

# Hypothesis Testing Foundations

Hypothesis testing is the formal process of making inferences about populations based on samples. It is the mathematical backbone of the scientific method and modern **A/B Testing** in tech companies.

## The Framework

1.  **Null Hypothesis ($H_0$)**: The default position, usually stating that there is "no effect" or "no difference" (e.g., "The new website button does not increase conversion").
2.  **Alternative Hypothesis ($H_1$)**: What you are trying to prove (e.g., "The new button increases conversion").
3.  **Test Statistic**: A standardized value calculated from sample data during a hypothesis test.
4.  **p-value**: The probability of obtaining test results at least as extreme as the results actually observed, *assuming that the null hypothesis is true*.

**Rule**: If $\text{p-value} < \alpha$ (where $\alpha$ is usually 0.05), we reject the null hypothesis.

## Type I and Type II Errors

| Decision \ Reality | $H_0$ is True (No Effect) | $H_1$ is True (Real Effect) |
|---|---|---|
| **Reject $H_0$** | **Type I Error** (False Positive) $\alpha$ | True Positive (Power) $1-\beta$ |
| **Fail to Reject $H_0$** | True Negative $1-\alpha$ | **Type II Error** (False Negative) $\beta$ |

- **$\alpha$ (Significance Level)**: The probability of making a Type I error.
- **Power ($1-\beta$)**: The probability of correctly rejecting a false null hypothesis. To increase power, you usually need a larger sample size.

## Common Tests

### 1. Student's t-test
Used to compare the means of two groups when the variance is unknown and the sample is relatively small.
$$t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}$$
Thanks to the [[central-limit-theorem]], the t-test is robust to non-normal data if $n$ is large.

### 2. Pearson's Chi-Square Test ($\chi^2$)
Used for categorical data to assess whether observed frequencies match expected frequencies (e.g., testing if a die is fair).

### 3. Kolmogorov-Smirnov Test
A non-parametric test used to check if two continuous distributions are the same, measuring the maximum distance between their Empirical CDFs.

## The P-Value Misinterpretation

The p-value is **not** the probability that $H_0$ is true ($P(H_0 \mid Data)$). It is the probability of the data given $H_0$ ($P(Data \mid H_0)$). Confusing these two is the "Prosecutor's Fallacy."

## Multiple Testing Problem

If you test 20 different button colors at $\alpha = 0.05$, you have a $1 - (0.95)^{20} \approx 64\%$ chance of finding a "statistically significant" winner entirely by random noise.
- **Bonferroni Correction**: A strict method that divides $\alpha$ by the number of tests.
- **FDR (False Discovery Rate)**: Benjamini-Hochberg procedure, a modern method that controls the expected proportion of false discoveries among the rejected hypotheses.

## Related Topics

[[central-limit-theorem]] — justifies the use of normal distributions in tests  
[[neyman-pearson]] — the theoretical lemma for optimal tests  
[[bootstrap]] — non-parametric ways to calculate p-values
---
