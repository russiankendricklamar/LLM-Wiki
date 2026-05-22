---
title: "Point Estimation: Maximum Likelihood Estimation (MLE)"
category: "Applied Probability"
order: 33
lang: "en"
slug: "mle-estimation"
---

# Point Estimation: Maximum Likelihood Estimation (MLE)

Maximum Likelihood Estimation (MLE) is a method of estimating the parameters of a probability distribution by maximizing a likelihood function, so that under the assumed statistical model the observed data is most probable.

## 1. Formal Derivation

Given a sample $X_1, ..., X_n$ from a distribution $f(x; \theta)$, the **Likelihood Function** is:
$$L(\theta) = \prod_{i=1}^n f(x_i; \theta)$$
The **Log-Likelihood** is usually maximized for computational simplicity:
$$\ell(\theta) = \sum_{i=1}^n \log f(x_i; \theta)$$
The MLE estimator $\hat{\theta}_{MLE}$ is:
$$\hat{\theta}_{MLE} = \arg \max_{\theta} \ell(\theta)$$

## 2. Properties of MLE

MLE estimators possess several desirable asymptotic properties:

1. **Consistency**: $\hat{\theta}_{MLE} \xrightarrow{P} \theta_0$ as $n \to \infty$.
2. **Asymptotic Normality**:
   $$\sqrt{n}(\hat{\theta}_{MLE} - \theta_0) \xrightarrow{d} \mathcal{N}(0, I(\theta_0)^{-1})$$
   where $I(\theta_0)$ is the [[fisher-information|Fisher Information]].
3. **Efficiency**: MLE is asymptotically efficient, achieving the [[cramer-rao-bound|Cramér-Rao Lower Bound]].
4. **Invariance**: If $\hat{\theta}$ is the MLE of $\theta$, then $g(\hat{\theta})$ is the MLE of $g(\theta)$.

## 3. Example: Gaussian Mean
For $X_i \sim \mathcal{N}(\mu, \sigma^2)$, the log-likelihood is:
$$\ell(\mu) = -\frac{n}{2}\log(2\pi\sigma^2) - \sum \frac{(x_i - \mu)^2}{2\sigma^2}$$
Differentiating with respect to $\mu$ and setting to zero:
$$\frac{\partial \ell}{\partial \mu} = \frac{1}{\sigma^2} \sum (x_i - \mu) = 0 \implies \hat{\mu}_{MLE} = \bar{X}$$

## Related Topics
[[statistical-inference]]
[[map-estimation]]
[[cramer-rao-bound]]
[[fisher-information]]
