---
title: "Particle Filter (SMC)"
category: "Quantitative Finance"
order: 16
lang: "en"
---
# Particle Filter (SMC)

A **Particle Filter**, also known as **Sequential Monte Carlo** (SMC), is a sophisticated signal processing algorithm that uses a set of "particles" (random samples) to represent the posterior distribution of a system's hidden state.

Unlike the classical Kalman Filter, the Particle Filter does not require the system to be linear or the noise to be Gaussian. This flexibility makes it ideal for modeling complex financial processes such as stochastic volatility, regime switching, or non-linear asset dynamics.

## How It Works?

The algorithm approximates the probability density function (PDF) by a set of discrete particles, each assigned a specific weight. The process involves three recursive steps:

1.  **Prediction**: Each particle is propagated forward in time according to the system's dynamic model (with added stochastic noise).
2.  **Weighting (Update)**: When new market data arrives, each particle is assigned a weight proportional to the likelihood of that observation occurring given the particle's state.
3.  **Resampling**: Particles with low weights are discarded, while those with high weights are duplicated. This prevent the "degeneracy" problem, where the entire probability mass concentrates on a single particle.

## Applications in Finance

- **Volatility Estimation**: Inferring instantaneous volatility (as in the Heston model) from observed market prices.
- **Hidden State Tracking**: Estimating latent macroeconomic variables or unobserved interest rate factors.
- **Risk Management**: Pricing and risk-adjusting portfolios with non-linear instruments (options) under non-Gaussian "fat-tailed" distributions.

## Mathematical Concept

The posterior density $p(x_t | y_{1:t})$ is approximated as:

$$
p(x_t | y_{1:t}) \approx \sum_{i=1}^{N} w_t^{(i)} \delta(x_t - x_t^{(i)})
$$

Where:
- $x_t^{(i)}$ is the state of the $i$-th particle.
- $w_t^{(i)}$ is the normalized weight of the particle.
- $\delta$ is the Dirac delta function.

## Python: Conceptual Implementation

```python
import numpy as np

def particle_filter_step(particles, weights, observation, sigma_obs):
    # 1. Prediction (simple random walk)
    particles += np.random.normal(0, 0.1, len(particles))
    
    # 2. Weighting (Likelihood update)
    # How well does the particle explain the observation?
    weights *= np.exp(-0.5 * ((particles - observation) / sigma_obs)**2)
    weights /= np.sum(weights) # Normalization
    
    # 3. Resampling (if effective sample size is too low)
    if 1.0 / np.sum(np.square(weights)) < len(particles) / 2:
        indices = np.random.choice(len(particles), size=len(particles), p=weights)
        particles = particles[indices]
        weights.fill(1.0 / len(particles))
        
    return particles, weights
```

## Particle Cloud Visualization

```chart
{
  "type": "scatter",
  "xAxis": "state",
  "data": [
    {"state": 98.5, "weight": 0.05},
    {"state": 99.2, "weight": 0.15},
    {"state": 100.1, "weight": 0.45},
    {"state": 100.8, "weight": 0.25},
    {"state": 101.5, "weight": 0.10}
  ],
  "lines": [
    {"dataKey": "weight", "stroke": "#10b981", "name": "Particle Weight"}
  ]
}
```

## Comparison

| Feature | Particle Filter | Kalman Filter |
| :--- | :--- | :--- |
| **Linearity** | Any (Non-linear) | Strictly Linear |
| **Distributions** | Any (Non-Gaussian) | Strictly Gaussian |
| **Computation** | High (Scales with N) | Very Low |
| **Accuracy** | Asymptotically Optimal | Optimal only for Linear/Gaussian |
