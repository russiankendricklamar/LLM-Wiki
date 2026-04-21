---
title: "MCMC and Sampling Methods"
category: "Applied Probability"
order: 32
lang: "en"
slug: "mcmc"
---

# MCMC and Sampling Methods

Markov Chain Monte Carlo (MCMC) is a class of algorithms for sampling from a probability distribution. By constructing a Markov chain that has the desired distribution as its **stationary distribution**, we can explore complex, high-dimensional spaces that are otherwise impossible to analyze.

## Why Sample?

In many problems (Bayesian statistics, physics), we know the "shape" of a distribution $p(x) \propto f(x)$, but we don't know the normalization constant. Sampling allows us to calculate expectations $\mathbb{E}[g(X)]$ just by looking at the frequency of points in the sample.

## 1. Metropolis-Hastings Algorithm

This is the most general MCMC algorithm. To sample from $p(x)$:
1.  **Propose**: From the current state $x_t$, suggest a new state $x'$ from a proposal distribution $q(x' \mid x_t)$.
2.  **Accept/Reject**: Calculate the acceptance probability:
    $$\alpha = \min \left( 1, \frac{p(x') q(x_t \mid x')}{p(x_t) q(x' \mid x_t)} \right)$$
3.  Move to $x'$ with probability $\alpha$, otherwise stay at $x_t$.

## 2. Gibbs Sampling

A special case of Metropolis-Hastings for multi-dimensional variables. Instead of moving in all dimensions at once, it updates one coordinate at a time by sampling from the **full conditional distribution**:
$$x_i^{(t+1)} \sim p(x_i \mid x_1^{(t+1)}, \dots, x_{i-1}^{(t+1)}, x_{i+1}^{(t)}, \dots, x_n^{(t)})$$
Gibbs sampling is efficient because the acceptance probability is always 1.

## 3. Hamiltonian Monte Carlo (HMC)

HMC uses ideas from [[symplectic-geometry|physics]] to move through the distribution more efficiently. It treats the log-probability as a potential energy surface and uses **Hamiltonian dynamics** to take long, purposeful steps, avoiding the "random walk" behavior that slows down standard Metropolis.

## Visualization: Random Walk vs. HMC

```chart
{
  "type": "scatter",
  "xAxis": "x",
  "data": [
    {"x": 0.1, "y": 0.1, "type": "RW"},
    {"x": 0.2, "y": 0.15, "type": "RW"},
    {"x": 0.15, "y": 0.3, "type": "RW"},
    {"x": 0.5, "y": 1.2, "type": "HMC"},
    {"x": 1.2, "y": 2.5, "type": "HMC"},
    {"x": 2.5, "y": 3.8, "type": "HMC"}
  ],
  "lines": [
    {"dataKey": "y", "stroke": "#ef4444", "name": "Random Walk (Slow)"},
    {"dataKey": "y", "stroke": "#10b981", "name": "HMC (Fast/Directional)"}
  ]
}
```
*Standard MCMC (red) wanders aimlessly, taking a long time to cover the space. HMC (green) uses gradients to "glide" along the distribution, exploring it much faster.*

## Related Topics

[[ergodic-theory-markov]] — the mathematical proof of convergence  
[[bayesian-inference]] — the primary use case  
[[importance-sampling]] — a non-Markovian sampling alternative
---
