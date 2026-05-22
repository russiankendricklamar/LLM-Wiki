---
title: "Hypothesis Testing II: Likelihood Ratio Tests"
category: "Applied Probability"
order: 39
lang: "en"
slug: "likelihood-ratio-tests"
---

# Hypothesis Testing II: Likelihood Ratio Tests

Likelihood Ratio Tests (LRT) are a general class of hypothesis tests used to compare the fit of two models, one of which is a nested version of the other.

## 1. The Likelihood Ratio

Consider testing a null hypothesis $H_0: \theta \in \Theta_0$ against $H_1: \theta \in \Theta$. The Likelihood Ratio $\Lambda$ is defined as:
$$\Lambda = \frac{\sup_{\theta \in \Theta_0} L(\theta)}{\sup_{\theta \in \Theta} L(\theta)}$$
Since $\Theta_0 \subset \Theta$, the ratio $\Lambda$ is always between 0 and 1. A small value of $\Lambda$ suggests that the data is much more probable under the alternative hypothesis than under the null.

## 2. Wilks' Theorem

Wilks' Theorem states that for large samples, the distribution of $-2 \log \Lambda$ follows a Chi-squared distribution:
$$-2 \log \Lambda \xrightarrow{d} \chi^2_k$$
where $k$ is the difference in the number of parameters between the general model and the null model (the number of constraints).

## 3. Power of the Test

The **Power** of a test is the probability of correctly rejecting a false null hypothesis:
$$\text{Power} = P(\text{Reject } H_0 | H_1 \text{ is true}) = 1 - \beta$$
According to the **Neyman-Pearson Lemma**, for a simple null vs. simple alternative, the Likelihood Ratio Test is the **Most Powerful** test at a given significance level $\alpha$.

## 4. Relation to Other Tests

- **Wald Test**: Uses the distance between the MLE and the null value.
- **Score Test (Lagrange Multiplier)**: Uses the gradient of the log-likelihood at the null value.
Asymptotically, the LRT, Wald, and Score tests are all equivalent.

## Related Topics
[[statistical-inference]]
[[mle-estimation]]
[[fisher-information]]
