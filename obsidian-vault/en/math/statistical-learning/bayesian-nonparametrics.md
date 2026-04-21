---
title: "Bayesian Non-parametrics"
category: "Statistical Learning"
order: 1
lang: "en"
slug: "bayesian-nonparametrics"
---

# Bayesian Non-parametrics

Bayesian Non-parametrics (BNP) is a branch of statistics where the number of parameters is not fixed, but grows with the amount of data. Instead of assuming a data-generating process with $k$ clusters, a BNP model assumes an **infinite-dimensional** parameter space, allowing the complexity of the model to adapt to the data automatically.

## The Dirichlet Process (DP)

The Dirichlet Process is the "Gaussian distribution" of BNP. It is a distribution over distributions. A sample from a DP is a discrete distribution consisting of an infinite number of point masses:
$$G = \sum_{i=1}^\infty \pi_i \delta_{\theta_i}$$
where $\theta_i$ are locations and $\pi_i$ are weights (sampled via the **Stick-Breaking construction**).

### Chinese Restaurant Process (CRP)
The CRP is a metaphor for the clustering property of the Dirichlet Process. Customers (data points) enter a restaurant with infinite tables. They sit at an occupied table with probability proportional to the number of people already there, or at a new table with probability $\alpha$. 
This leads to the **rich-get-richer** clustering effect.

## Gaussian Processes (GP)

While the DP is used for discrete structures (clustering), **Gaussian Processes** are used for continuous structures (functions). A GP defines a distribution over functions such that any finite set of points follows a multivariate normal distribution.
$$f(x) \sim \mathcal{GP}(m(x), k(x, x'))$$
GPs are the gold standard for uncertainty quantification in regression.

## Indian Buffet Process (IBP)

The IBP is a BNP prior for **latent feature models**. Instead of assigning each point to one cluster (like DP), it allows each point to possess an arbitrary number of features from an infinite set.

## Why Use BNP?

1.  **Automatic Complexity Selection**: No need to perform "grid search" for the number of clusters $k$ or the degree of a polynomial.
2.  **Uncertainty Quantification**: BNP provides a full posterior distribution over the infinite-dimensional space.
3.  **Flexibility**: BNP models can capture highly complex, non-linear structures that parametric models might miss.

## Visualization: Model Growth

```chart
{
  "type": "bar",
  "xAxis": "data_points",
  "data": [
    {"data_points": 10, "n_clusters": 2},
    {"data_points": 100, "n_clusters": 5},
    {"data_points": 1000, "n_clusters": 12},
    {"data_points": 10000, "n_clusters": 28}
  ],
  "lines": [
    {"dataKey": "n_clusters", "stroke": "#10b981", "name": "Active Parameters (K)"}
  ]
}
```
*In BNP, the number of active parameters (e.g., clusters) scales logarithmically or as a power law with the amount of data, preventing underfitting on small datasets and overfitting on large ones.*

## Related Topics

[[gaussian-processes]] — the functional subset of BNP  
[[asymptotic-stats]] — how BNP models behave as $n \to \infty$  
[[mixture-of-experts]] — BNP can be used to select the number of experts
---
