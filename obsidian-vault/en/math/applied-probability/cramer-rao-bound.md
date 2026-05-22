---
title: "Cramer-Rao Lower Bound"
category: "Applied Probability"
order: 37
lang: "en"
slug: "cramer-rao-bound"
---

# Cramer-Rao Lower Bound (CRLB)

The Cramér-Rao Lower Bound (CRLB) provides a fundamental limit on the variance of unbiased estimators. It defines the minimum possible variance that an unbiased estimator can achieve.

## 1. Fisher Information

The **Score Function** is the derivative of the log-likelihood:
$$S(\theta) = \frac{\partial}{\partial \theta} \log f(X; \theta)$$
The **Fisher Information** $I(\theta)$ is the variance of the score function:
$$I(\theta) = \mathbb{E}\left[ \left( \frac{\partial}{\partial \theta} \log f(X; \theta) \right)^2 \right] = -\mathbb{E}\left[ \frac{\partial^2}{\partial \theta^2} \log f(X; \theta) \right]$$

## 2. The Inequality

For any unbiased estimator $\hat{\theta}$ of $\theta$:
$$\text{Var}(\hat{\theta}) \geq \frac{1}{n I(\theta)}$$
where $n$ is the sample size.

### Efficiency
An unbiased estimator that achieves the CRLB is called an **Efficient Estimator**. The ratio of the CRLB to the actual variance is called the **Statistical Efficiency**.

## 3. General Form (Biased Estimators)
If $\hat{\theta}$ is a biased estimator with expectation $\mathbb{E}[\hat{\theta}] = \psi(\theta)$, the bound becomes:
$$\text{Var}(\hat{\theta}) \geq \frac{[\psi'(\theta)]^2}{n I(\theta)}$$

## 4. Importance in Estimation Theory
- **MLE**: Under regularity conditions, [[mle-estimation|Maximum Likelihood Estimators]] are asymptotically efficient, meaning they achieve the CRLB as $n \to \infty$.
- **UMVUE**: The CRLB helps in identifying the Uniformly Minimum Variance Unbiased Estimator (UMVUE).

## Related Topics
[[statistical-inference]]
[[mle-estimation]]
[[estimator-properties]]
[[fisher-information]]
