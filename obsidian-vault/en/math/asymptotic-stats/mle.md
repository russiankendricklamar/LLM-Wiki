---
title: "Maximum Likelihood Estimation (MLE)"
category: "Asymptotic Statistics"
order: 1
lang: "en"
slug: "mle"
---

# Maximum Likelihood Estimation (MLE)

Maximum Likelihood Estimation (MLE) is the primary method for estimating parameters of a statistical model. It asks the question: "Which parameters $\theta$ make the observed data most probable?"

## 1. The Likelihood Function

Given observed data $X = \{x_1, \dots, x_n\}$ and a probability density $f(x \mid \theta)$, the **Likelihood Function** $L(\theta)$ is:
$$L(\theta) = \prod_{i=1}^n f(x_i \mid \theta)$$
In practice, we maximize the **Log-Likelihood** $\ell(\theta) = \ln L(\theta)$ because it transforms products into sums and is numerically more stable.

## 2. Asymptotic Properties

MLE is the gold standard because of its behavior as $n \to \infty$:
1.  **Consistency**: The estimator $\hat{\theta}_{MLE}$ converges in probability to the true parameter $\theta_0$.
2.  **Asymptotic Normality**: 
    $$\sqrt{n}(\hat{\theta}_{MLE} - \theta_0) \xrightarrow{d} \mathcal{N}(0, I^{-1}(\theta_0))$$
    This means that for large samples, the MLE error follows a normal distribution centered at zero.
3.  **Efficiency**: MLE achieves the **Cramér-Rao Lower Bound**, meaning no other unbiased estimator has a smaller variance.

## 3. Fisher Information ($I(\theta)$)

The variance of the MLE is determined by the **Fisher Information**, which measures the "sharpness" of the log-likelihood peak:
$$I(\theta) = -\mathbb{E}\left[ \frac{\partial^2 \ell(\theta)}{\partial \theta^2} \right]$$
- If $I(\theta)$ is high, the peak is sharp, and our estimate is very precise.
- In [[information-geometry-finance|Information Geometry]], $I(\theta)$ defines the metric of the statistical [[manifold-learning|manifold]].

## 4. Connection to Information Theory

Maximizing Likelihood is mathematically equivalent to minimizing the **Kullback-Leibler (KL) Divergence** between the empirical data distribution and the model distribution. 
In deep learning, the standard **Cross-[[shannon-entropy|Entropy]] Loss** used to train LLMs is exactly the MLE for a multinomial distribution.

## Related Topics

[[asymptotic-stats/bayesian-inference]] — the alternative approach  
[[asymptotic-stats/cramer-rao-bound]] — the limit of precision  
[[shannon-entropy]] — the link to information theory
---
