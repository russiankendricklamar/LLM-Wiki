---
title: "Bayesian Inference and MAP"
category: "Asymptotic Statistics"
order: 2
lang: "en"
slug: "bayesian-inference"
---

# Bayesian Inference and MAP

Bayesian inference is a method of statistical inference in which **Bayes' theorem** is used to update the probability for a hypothesis as more evidence or information becomes available. Unlike the frequentist approach (MLE), it treats parameters $\theta$ as random variables with their own distributions.

## Bayes' Theorem for Parameters

The central formula links the **Prior**, **Likelihood**, and **Posterior**:

$$p(\theta \mid X) = \frac{p(X \mid \theta) p(\theta)}{p(X)}$$

- **Prior $p(\theta)$**: Our belief about the parameter *before* seeing the data.
- **Likelihood $p(X \mid \theta)$**: The data-generating process (same as in MLE).
- **Posterior $p(\theta \mid X)$**: Our updated belief *after* seeing the data.
- **Evidence $p(X)$**: A normalization constant (the marginal likelihood).

## Maximum A Posteriori (MAP)

MAP is a point estimate that chooses the most probable value of $\theta$ under the posterior distribution:

$$\hat{\theta}_{MAP} = \arg\max_{\theta} p(\theta \mid X) = \arg\max_{\theta} \left[ \log p(X \mid \theta) + \log p(\theta) \right]$$

MAP is essentially **MLE with Regularization**. 
- If the prior is Gaussian, MAP is equivalent to **L2 regularization** (Weight Decay).
- If the prior is Laplace, MAP is equivalent to **L1 regularization** (Lasso).

## Bayesian vs. Frequentist

| Feature | Frequentist (MLE) | Bayesian (MAP/Posterior) |
|---|---|---|
| **Parameter $\theta$** | Fixed, unknown constant | Random variable |
| **Prior** | Not used | Essential |
| **Result** | A single point estimate | A full distribution |
| **Overfitting** | Prone without extra steps | Robust due to priors |

## Conjugate Priors

Bayesian updating is often hard because the evidence $p(X) = \int p(X|\theta)p(\theta)d\theta$ is difficult to compute. **Conjugate priors** are special priors where the posterior stays in the same family as the prior (e.g., Beta prior + Binomial likelihood = Beta posterior).

## Visualization: Updating Beliefs

```chart
{
  "type": "line",
  "xAxis": "x",
  "data": [
    {"x": 0, "prior": 0.2, "likelihood": 0.05, "posterior": 0.1},
    {"x": 1, "prior": 0.4, "likelihood": 0.20, "posterior": 0.3},
    {"x": 2, "prior": 0.4, "likelihood": 0.80, "posterior": 0.9},
    {"x": 3, "prior": 0.2, "likelihood": 0.10, "posterior": 0.1}
  ],
  "lines": [
    {"dataKey": "prior", "stroke": "#94a3b8", "name": "Prior (Before Data)"},
    {"dataKey": "likelihood", "stroke": "#ef4444", "name": "Likelihood (Data)"},
    {"dataKey": "posterior", "stroke": "#10b981", "name": "Posterior (Result)"}
  ]
}
```
*The posterior is a "compromise" between our prior beliefs and the evidence provided by the data. As we get more data, the likelihood dominates the prior.*

## Related Topics

[[mle]] — the no-prior version  
[[variational-inference]] — approximating the posterior  
[[bayesian-nonparametrics]] — infinite-dimensional priors
---
