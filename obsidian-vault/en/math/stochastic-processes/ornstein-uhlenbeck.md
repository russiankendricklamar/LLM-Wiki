---
title: "Ornstein-Uhlenbeck Process"
category: "Stochastic Processes"
order: 13
lang: "en"
slug: "ornstein-uhlenbeck"
---

# Ornstein-Uhlenbeck Process

The Ornstein-Uhlenbeck (OU) process is a stationary Gauss-Markov process that models the velocity of a massive Brownian particle under the influence of friction. In modern finance and AI, it is the primary model for **mean-reverting** behavior.

## The SDE Definition

The OU process $X_t$ is defined by the following Stochastic Differential Equation:

$$dX_t = \theta (\mu - X_t) dt + \sigma dW_t$$

Where:
- **$\theta > 0$ (Rate of mean reversion)**: How quickly the process returns to the mean.
- **$\mu$ (Long-term mean)**: The equilibrium level.
- **$\sigma > 0$ (Volatility)**: The degree of randomness.
- **$W_t$**: A standard Wiener process.

## Key Properties

### 1. Mean Reversion
Unlike Brownian motion, which wanders aimlessly, the OU process is "pulled" back toward $\mu$. If $X_t > \mu$, the drift $\theta(\mu - X_t)$ is negative, pushing it down. If $X_t < \mu$, the drift is positive.

### 2. Stationarity and Normality
As $t \to \infty$, the distribution of $X_t$ converges to a **stationary Gaussian distribution**:
$$X_\infty \sim \mathcal{N}\left(\mu, \frac{\sigma^2}{2\theta}\right)$$
This makes it a popular model for physical systems in thermal equilibrium.

### 3. Autocovariance
The covariance between two points in time $t$ and $s$ decays exponentially:
$$\text{Cov}(X_t, X_s) = \frac{\sigma^2}{2\theta} e^{-\theta|t-s|}$$
This exponential decay is a hallmark of the OU process.

## Applications

1.  **Finance (Vasicek Model)**: Modeling interest rates, which tend to stay within a specific range rather than growing to infinity.
2.  **Physics**: Modeling the velocity of particles in a fluid (Langevin equation).
3.  **AI (Diffusion Models)**: Many diffusion models use an OU-like forward process to transform data into noise while keeping the variance bounded.

## Visualization: Mean Reversion Path

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": 0, "path": 2.5, "mean": 1.0},
    {"t": 1, "path": 2.1, "mean": 1.0},
    {"t": 2, "path": 1.4, "mean": 1.0},
    {"t": 3, "path": 0.8, "mean": 1.0},
    {"t": 4, "path": 1.2, "mean": 1.0},
    {"t": 5, "path": 0.9, "mean": 1.0},
    {"t": 10,"path": 1.05,"mean": 1.0}
  ],
  "lines": [
    {"dataKey": "path", "stroke": "#3b82f6", "name": "OU Process Path"},
    {"dataKey": "mean", "stroke": "#ef4444", "name": "Long-term Mean (μ)"}
  ]
}
```
*The blue trajectory fluctuates around the red mean line. Even after a large spike, the deterministic drift eventually pulls the process back to equilibrium.*

## Related Topics

[[stochastic-differential-equations]] — the mathematical language  
[[brownian-motion]] — the driving noise source  
[[stationary-wide-spectral]] — the long-term behavior
---
