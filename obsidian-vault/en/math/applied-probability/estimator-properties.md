---
title: "Properties of Estimators: Bias, Variance, and MSE"
category: "Applied Probability"
order: 35
lang: "en"
slug: "estimator-properties"
---

# Properties of Estimators: Bias, Variance, and MSE

Evaluating the quality of a point estimator $\hat{\theta}$ requires analyzing its sampling distribution. The most common metrics are Bias, Variance, and Mean Squared Error (MSE).

## 1. Definitions

### Bias
The Bias of an estimator is the difference between its expected value and the true parameter value:
$$\text{Bias}(\hat{\theta}) = \mathbb{E}[\hat{\theta}] - \theta$$
An estimator is **unbiased** if $\mathbb{E}[\hat{\theta}] = \theta$.

### Variance
The Variance measures how much the estimator fluctuates around its mean:
$$\text{Var}(\hat{\theta}) = \mathbb{E}[(\hat{\theta} - \mathbb{E}[\hat{\theta}])^2]$$

## 2. The Bias-Variance Tradeoff

The **Mean Squared Error (MSE)** measures the average squared distance from the true parameter:
$$\text{MSE}(\hat{\theta}) = \mathbb{E}[(\hat{\theta} - \theta)^2]$$

It can be decomposed as follows:
$$\text{MSE}(\hat{\theta}) = \text{Var}(\hat{\theta}) + [\text{Bias}(\hat{\theta})]^2$$

### Interpretation
- Reducing Bias often increases Variance (e.g., overfitting in complex models).
- Increasing Bias can sometimes lead to a significant reduction in Variance, resulting in a lower overall MSE (e.g., [[linear-regression-ols|regularization]]).

## 3. Consistency

An estimator is **consistent** if it converges in probability to the true parameter as the sample size $n \to \infty$:
$$\hat{\theta}_n \xrightarrow{P} \theta$$
A sufficient condition for consistency is that both Bias and Variance go to zero as $n \to \infty$.

## Related Topics
[[statistical-inference]]
[[mle-estimation]]
[[cramer-rao-bound]]
[[sufficient-statistics]]
