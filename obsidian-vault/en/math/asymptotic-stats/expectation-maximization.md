---
title: "Expectation-Maximization (EM)"
category: "Asymptotic Statistics"
order: 4
lang: "en"
slug: "expectation-maximization"
---

# Expectation-Maximization (EM) Algorithm

The EM algorithm is an iterative method to find **Maximum Likelihood (MLE)** or **MAP** estimates of parameters in statistical models that depend on unobserved **latent variables**. It is the standard tool for fitting Gaussian Mixture Models (GMM), Hidden Markov Models (HMM), and handling missing data.

## The Problem: Latent Variables

Suppose we have observed data $X$ and hidden data $Z$. The goal is to maximize the marginal likelihood:
$$\mathcal{L}(\theta; X) = p(X \mid \theta) = \sum_Z p(X, Z \mid \theta)$$
This summation inside the logarithm makes direct maximization difficult. EM simplifies this by iterating between estimating $Z$ and maximizing $\theta$.

## The Two Steps

The algorithm alternates between two steps:

### 1. E-Step (Expectation)
Calculate the expected value of the log-likelihood function, with respect to the conditional distribution of $Z$ given $X$ and the *current* estimate of the parameters $\theta^{(t)}$:
$$Q(\theta \mid \theta^{(t)}) = \mathbb{E}_{Z \mid X, \theta^{(t)}} [ \log p(X, Z \mid \theta) ]$$
Essentially, we "fill in" the missing data $Z$ with our best guess.

### 2. M-Step (Maximization)
Find the parameter $\theta$ that maximizes this $Q$ function:
$$\theta^{(t+1)} = \arg\max_\theta Q(\theta \mid \theta^{(t)})$$
This new estimate is then used for the next E-step.

## Convergence Properties

A key property of the EM algorithm is that it is guaranteed to increase the likelihood at each iteration:
$$\mathcal{L}(\theta^{(t+1)}) \geq \mathcal{L}(\theta^{(t)})$$
The algorithm converges to a **local maximum** (or a saddle point) of the likelihood function.

## Applications

1.  **Gaussian Mixture Models**: Clustering data by assuming it comes from several Gaussian distributions with unknown means and variances.
2.  **Natural Language Processing**: Training HMMs for part-of-speech tagging or Baumb-Welch algorithm for speech recognition.
3.  **Missing Data**: Estimating parameters when some observations are incomplete.

## Visualization: Clustering Progress

```chart
{
  "type": "scatter",
  "xAxis": "x",
  "data": [
    {"x": -2.1, "y": -1.8, "cluster": "A"},
    {"x": -1.9, "y": -2.2, "cluster": "A"},
    {"x": 2.2,  "y": 1.9,  "cluster": "B"},
    {"x": 1.8,  "y": 2.1,  "cluster": "B"}
  ],
  "lines": [
    {"dataKey": "y", "stroke": "#8b5cf6", "name": "Converged Centroids"}
  ]
}
```
*In a GMM, the EM algorithm starts with random cluster assignments (E-step) and refines the centers (M-step) until the groups are clearly separated.*

## Related Topics

[[mle]] — the objective EM solves  
[[variational-inference]] — a generalization of EM for complex distributions  
unsupervised-learning — where EM is most commonly used
---
