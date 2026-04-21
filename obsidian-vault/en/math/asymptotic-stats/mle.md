---
title: "Maximum Likelihood Estimation"
category: "Asymptotic Statistics"
order: 1
lang: "en"
slug: "mle"
---

# Maximum Likelihood Estimation (MLE)

Maximum Likelihood Estimation is a fundamental method in statistics for estimating the parameters of a probability distribution by maximizing a **likelihood function**. It is the engine behind most of modern machine learning, from linear regression to the training of Large Language Models.

## The Likelihood Function

Suppose we have observed data $X = \{x_1, x_2, \dots, x_n\}$ drawn from a distribution $p(x; \theta)$ with unknown parameters $\theta$. The **Likelihood** $\mathcal{L}(\theta)$ is the probability (or density) of observing the data given a specific $\theta$:

$$\mathcal{L}(\theta; X) = \prod_{i=1}^n p(x_i; \theta)$$

## The Log-Likelihood

For mathematical and numerical convenience, we almost always work with the **Log-Likelihood** $\ell(\theta)$, as the product turns into a sum:

$$\ell(\theta) = \log \mathcal{L}(\theta) = \sum_{i=1}^n \log p(x_i; \theta)$$

Maximizing $\ell(\theta)$ is equivalent to maximizing $\mathcal{L}(\theta)$ because the logarithm is a strictly increasing function.

## The MLE Estimator

The MLE estimate $\hat{\theta}_{MLE}$ is the value that makes the observed data "most likely":

$$\hat{\theta}_{MLE} = \arg\max_{\theta \in \Theta} \ell(\theta)$$

To find it, we typically solve the **Score Equation**:
$$\nabla_\theta \ell(\theta) = 0$$

## Asymptotic Properties

Under mild regularity conditions, the MLE has remarkable properties as $n \to \infty$:

1.  **Consistency**: $\hat{\theta}_{MLE} \xrightarrow{p} \theta_0$ (it converges to the true parameter).
2.  **Asymptotic Normality**: $\sqrt{n}(\hat{\theta}_{MLE} - \theta_0) \xrightarrow{d} \mathcal{N}(0, I(\theta_0)^{-1})$, where $I(\theta_0)$ is the [[fisher-information|Fisher Information]].
3.  **Efficiency**: No other unbiased estimator has lower asymptotic variance.

## Example: Gaussian Mean

If $x_i \sim \mathcal{N}(\mu, \sigma^2)$, the log-likelihood for $\mu$ is:
$$\ell(\mu) = -\frac{n}{2}\log(2\pi\sigma^2) - \sum \frac{(x_i - \mu)^2}{2\sigma^2}$$
Differentiating with respect to $\mu$ and setting to zero yields $\hat{\mu}_{MLE} = \frac{1}{n} \sum x_i$, the sample mean.

## Visualization: Likelihood Surface

```chart
{
  "type": "line",
  "xAxis": "theta",
  "data": [
    {"theta": 0.0, "likelihood": 0.01},
    {"theta": 1.0, "likelihood": 0.15},
    {"theta": 2.0, "likelihood": 0.85},
    {"theta": 3.0, "likelihood": 0.40},
    {"theta": 4.0, "likelihood": 0.05}
  ],
  "lines": [
    {"dataKey": "likelihood", "stroke": "#3b82f6", "name": "L(θ)"}
  ]
}
```
*The MLE picks the peak of the likelihood curve. As more data is collected, this curve becomes narrower and taller, reflecting increased certainty.*

## Related Topics

[[fisher-information]] — defines the precision of MLE  
[[bayesian-inference]] — adding a prior to MLE leads to MAP  
[[expectation-maximization]] — solving MLE with missing data
---
