---
title: "Bayesian Non-parametrics: Dirichlet Processes"
category: "Statistical Learning"
order: 87
lang: "en"
slug: "dirichlet-processes"
---

# Bayesian Non-parametrics: Dirichlet Processes

In Bayesian statistics, the Dirichlet Process (DP) is a cornerstone of non-parametric methods, providing a prior over probability distributions. A DP allows models to automatically infer the complexity (e.g., the number of clusters) from the data, growing as more data is observed.

## Mathematical Definition

A Dirichlet Process, denoted $DP(\alpha, H)$, is parameterized by a scaling parameter $\alpha > 0$ and a base probability distribution $H$ over a measurable space $\Theta$. A random distribution $G$ is distributed according to a DP if, for any finite measurable partition $A_1, \dots, A_K$ of $\Theta$, the vector of probabilities follows a Dirichlet distribution:
$$
(G(A_1), \dots, G(A_K)) \sim \text{Dir}(\alpha H(A_1), \dots, \alpha H(A_K))
$$
$G$ is almost surely discrete. Thus, it can be written as:
$$
G = \sum_{k=1}^\infty \pi_k \delta_{\theta_k}
$$
where $\theta_k \sim H$ are the cluster locations and $\pi_k$ are the weights.

## Stick-Breaking Construction

Sethuraman (1994) provided a constructive definition for the weights $\pi_k$ known as the stick-breaking process. Let $\beta_k \sim \text{Beta}(1, \alpha)$ for $k = 1, 2, \dots$. The weights are given by:
$$
\pi_k = \beta_k \prod_{j=1}^{k-1} (1 - \beta_j)
$$
This can be visualized as taking a stick of unit length, breaking off a fraction $\beta_1$ for $\pi_1$, then breaking off a fraction $\beta_2$ of the remaining stick for $\pi_2$, and so on.

## The Chinese Restaurant Process (CRP)

The marginal distribution of the data drawn from a Dirichlet Process mixture model exhibits a rich clustering structure. If we integrate out the random measure $G$, the sequence of observations $\theta_1, \theta_2, \dots$ follows the Blackwell-MacQueen urn scheme. This leads to the Chinese Restaurant Process analogy.

Imagine a restaurant with infinitely many tables. The first customer sits at the first table. The $n$-th customer sits at an occupied table $k$ with probability proportional to the number of people already sitting there ($n_k$), or at a new table with probability proportional to $\alpha$:
$$
\mathbb{P}(\text{customer } n \text{ joins table } k) = \frac{n_k}{n - 1 + \alpha}
$$
$$
\mathbb{P}(\text{customer } n \text{ opens new table}) = \frac{\alpha}{n - 1 + \alpha}
$$
This rich-get-richer property naturally enforces clustering, while the $\alpha$ parameter controls the rate at which new clusters are formed. As $n \to \infty$, the number of clusters grows logarithmically as $O(\alpha \log n)$.

## Applications in Clustering

The Dirichlet Process is primarily used in the DP Mixture Model (DPMM) for clustering where the number of clusters $K$ is unknown. For data $x_i$:
$$
G \sim DP(\alpha, H)
$$
$$
\theta_i \sim G
$$
$$
x_i \sim p(\cdot \mid \theta_i)
$$
Inference is typically performed using Markov Chain Monte Carlo (MCMC) methods, such as collapsed Gibbs sampling, which iterates through data points and reassigns them to clusters based on the CRP probabilities multiplied by the data likelihood.
