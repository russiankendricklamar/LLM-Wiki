---
title: "Fractional Fokker-Planck Equation"
category: "Quantitative Finance"
order: 30
lang: "en"
---
# Fractional Fokker-Planck Equation (FFPE)

The **Fractional Fokker-Planck Equation (FFPE)** is a generalization of the classical Fokker-Planck equation (also known as the Kolmogorov forward equation) used to describe the time evolution of the probability density function of a physical or financial system. By incorporating fractional-order derivatives, the FFPE provides a framework for modeling **anomalous diffusion**.

## Anomalous Diffusion in Markets

In the standard Black-Scholes world (based on Brownian Motion), the variance of asset returns grows linearly with time: $\text{Var}(x) \sim t$. Real-world financial data, however, often exhibits non-linear variance scaling:
- **Sub-diffusion** ($\text{Var} \sim t^\alpha, \alpha < 1$): Processes that spread slower than Brownian motion, often associated with strong mean reversion.
- **Super-diffusion** ($\text{Var} \sim t^\alpha, \alpha > 1$): Processes that spread faster, characteristic of markets with strong trends and "long memory."

## Mathematical Formulation

A common form of the FFPE using the Riemann-Liouville fractional derivative of order $\alpha$ is:

$$
\frac{\partial p(x, t)}{\partial t} = {}_0D_t^{1-\alpha} \left[ -\frac{\partial}{\partial x} (A(x) p(x, t)) + \frac{\partial^2}{\partial x^2} (B(x) p(x, t)) \right]
$$

Where:
- $p(x, t)$ is the probability density function.
- ${}_0D_t^{1-\alpha}$ is the fractional differentiation operator.
- $A(x)$ and $B(x)$ represent drift and diffusion coefficients.

## Why use FFPE in Quantitative Finance?

1.  **Modeling Fat Tails**: FFPE solutions naturally exhibit heavy-tailed behavior, matching the empirical properties of asset returns better than Gaussian models.
2.  **Memory Effects**: Unlike standard Markovian models, fractional derivatives incorporate the entire history of the process, making them suitable for assets with long-range dependence.
3.  **Complex Dynamics**: It captures the "bursty" nature of markets where periods of inactivity are followed by large price movements.

## Relation to the Hurst Exponent

The fractional order $\alpha$ is intrinsically linked to the Hurst exponent $H$. For many anomalous diffusion processes, the following relationship holds:
$$
H = \alpha / 2
$$

## Python: Numerical Concept (CTRW)

Numerical solutions often rely on simulating **Continuous Time Random Walks (CTRW)**, which converge to the FFPE in the limit.

```python
import numpy as np

def simulate_anomalous_diffusion(n_steps, alpha):
    """
    Simulate a Continuous Time Random Walk (CTRW).
    """
    # Waiting times follow a heavy-tailed distribution (e.g., Pareto)
    waiting_times = np.random.pareto(alpha, n_steps)
    # Jump sizes are Gaussian
    jumps = np.random.normal(0, 1, n_steps)
    
    time = np.cumsum(waiting_times)
    path = np.cumsum(jumps)
    return time, path

# Example of a super-diffusive process
t, x = simulate_anomalous_diffusion(1000, 0.8)
```

## Visualization: Standard vs. Fractional Scaling

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0", "standard": 0, "fractional": 0},
    {"time": "1", "standard": 1.0, "fractional": 1.2},
    {"time": "2", "standard": 2.0, "fractional": 2.8},
    {"time": "3", "standard": 3.0, "fractional": 5.1},
    {"time": "4", "standard": 4.0, "fractional": 8.4}
  ],
  "lines": [
    {"dataKey": "standard", "stroke": "#94a3b8", "name": "Standard (Linear Variance)"},
    {"dataKey": "fractional", "stroke": "#8b5cf6", "name": "Fractional (Anomalous Scaling)"}
  ]
}
```
---


## Related Topics
- [[hurst-exponent]]
- [[levy-processes]]
