---
title: "Gaussian Mixture Models (GMM)"
category: "Statistical Learning"
order: 8
lang: "en"
slug: "gmm"
---

# Gaussian Mixture Models (GMM)

A Gaussian Mixture Model (GMM) is a probabilistic model that assumes all the data points are generated from a mixture of a finite number of Gaussian distributions with unknown parameters. It is the most widely used tool for "soft" continuous clustering.

## The Model Definition

A GMM represents the probability distribution of data $x$ as a weighted sum of $K$ component Gaussian densities:

$$p(x \mid \Theta) = \sum_{k=1}^K \pi_k \mathcal{N}(x \mid \mu_k, \Sigma_k)$$

Where:
- $\pi_k$ is the **mixing weight** (the prior probability that a point comes from cluster $k$), with $\sum \pi_k = 1$.
- $\mathcal{N}(x \mid \mu_k, \Sigma_k)$ is the multivariate Gaussian density for cluster $k$ with mean $\mu_k$ and covariance matrix $\Sigma_k$.
- $\Theta = \{ \pi_k, \mu_k, \Sigma_k \}$ are the parameters of the model.

## Soft Clustering (Responsibilities)

Unlike K-Means (which assigns each point strictly to one cluster), a GMM provides a **soft assignment**. Using Bayes' theorem, we can calculate the probability that cluster $k$ generated point $x_i$ (often called the **responsibility** $\gamma_{ik}$):

$$\gamma_{ik} = p(z_i = k \mid x_i, \Theta) = \frac{\pi_k \mathcal{N}(x_i \mid \mu_k, \Sigma_k)}{\sum_{j=1}^K \pi_j \mathcal{N}(x_i \mid \mu_j, \Sigma_j)}$$

## Fitting the Model: The EM Algorithm

Because of the sum inside the logarithm of the likelihood function, finding the MLE for a GMM directly is intractable. Instead, we use the [[expectation-maximization|EM Algorithm]]:

1.  **Initialize**: Randomly guess $\pi_k, \mu_k, \Sigma_k$.
2.  **E-step**: Calculate the responsibilities $\gamma_{ik}$ for all points and all clusters using the current parameters.
3.  **M-step**: Update the parameters using the responsibilities as weights:
    - $N_k = \sum_i \gamma_{ik}$ (Effective number of points in cluster $k$)
    - $\mu_k^{new} = \frac{1}{N_k} \sum_i \gamma_{ik} x_i$
    - $\Sigma_k^{new} = \frac{1}{N_k} \sum_i \gamma_{ik} (x_i - \mu_k^{new})(x_i - \mu_k^{new})^\top$
    - $\pi_k^{new} = \frac{N_k}{N}$
4.  **Repeat** until the log-likelihood converges.

## Relationship to K-Means

K-Means is a special case of a GMM where:
1.  All covariance matrices are fixed, spherical, and equal: $\Sigma_k = \sigma^2 I$.
2.  The variance $\sigma^2 \to 0$. This forces the responsibilities $\gamma_{ik}$ to become binary (0 or 1), making the soft assignment a "hard" assignment.

## Visualization: GMM vs K-Means

```chart
{
  "type": "scatter",
  "xAxis": "x1",
  "data": [
    {"x1": 0.5, "x2": 0.5, "cluster1_prob": 0.99, "cluster2_prob": 0.01},
    {"x1": 1.0, "x2": 1.0, "cluster1_prob": 0.80, "cluster2_prob": 0.20},
    {"x1": 1.5, "x2": 1.5, "cluster1_prob": 0.50, "cluster2_prob": 0.50},
    {"x1": 2.0, "x2": 2.0, "cluster1_prob": 0.20, "cluster2_prob": 0.80},
    {"x1": 2.5, "x2": 2.5, "cluster1_prob": 0.01, "cluster2_prob": 0.99}
  ],
  "lines": [
    {"dataKey": "cluster1_prob", "stroke": "#3b82f6", "name": "Probability of Cluster A"},
    {"dataKey": "cluster2_prob", "stroke": "#ef4444", "name": "Probability of Cluster B"}
  ]
}
```
*In a GMM, a point sitting exactly between two clusters (x=1.5) belongs 50% to A and 50% to B, reflecting uncertainty. K-Means would forcibly assign it 100% to one side.*

## Related Topics

[[expectation-maximization]] — the algorithm used to train GMMs  
[[unsupervised-learning]] — the broader field of clustering  
[[bayesian-nonparametrics]] — Dirichlet processes for GMMs with an infinite number of clusters
---
