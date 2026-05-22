---
title: "Statistical Inference & Hypothesis Testing"
category: "Math Fundamentals"
order: 5
lang: "en"
slug: "statistical-inference"
---

# Statistical Inference: Drawing Conclusions from Data

Statistical inference is the process of using data from a sample to make generalizations about a population. In AI, this is the basis for evaluating whether a model's improvement is "real" or just a result of random chance.

## 1. Hypothesis Testing: The Framework

We start with two competing hypotheses:
- **Null Hypothesis ($H_0$)**: The status quo. There is no effect, no difference, or no relationship (e.g., "The new model is not better than the old one").
- **Alternative Hypothesis ($H_a$ or $H_1$)**: What we want to prove (e.g., "The new model is significantly better").

### The p-value
The **p-value** is the probability of observing a result at least as extreme as the one we got, *assuming the null hypothesis is true*. 
- If $p < \alpha$ (usually $0.05$), we reject $H_0$.
- **Crucial**: A small p-value doesn't mean the effect is *large*; it just means it's unlikely to be a fluke.

## 2. Type I and Type II Errors

| Decision | $H_0$ is True | $H_0$ is False |
| :--- | :--- | :--- |
| **Reject $H_0$** | **Type I Error** (False Positive) | Correct (Power) |
| **Fail to Reject $H_0$** | Correct | **Type II Error** (False Negative) |

- **Significance Level ($\alpha$)**: The probability of a Type I error.
- **Power ($1 - \beta$)**: The probability of correctly rejecting a false $H_0$. In ML, high power means our test can reliably detect a better model.

## 3. Confidence Intervals (CI)

A confidence interval provides a range of values that is likely to contain the true population parameter.
- **Example**: "We are 95% confident that the true accuracy of the model is between 88% and 92%."
- **Interpretation**: If we repeated the experiment 100 times, 95 of the calculated intervals would contain the true parameter.

## 4. Common Tests

- **Z-test / T-test**: Comparing means between groups.
- **Chi-Squared Test**: Testing relationships between categorical variables.
- **ANOVA**: Comparing means across three or more groups.

## 5. Bayesian Inference vs. Frequentist

- **Frequentist**: Parameters are fixed, data is random. We talk about p-values and long-run frequencies.
- **Bayesian**: Data is fixed, parameters are random (we have beliefs about them). We use [[bayes-theorem|Bayes' Theorem]] to update our beliefs as new data arrives.

## Related Topics
[[probability-distributions|Probability Distributions]] — Prerequisite for understanding test statistics  
[[bayes-theorem|Bayes' Theorem]] — The alternative way of thinking  
[[ab-testing|A/B Testing]] — The primary application in industry
