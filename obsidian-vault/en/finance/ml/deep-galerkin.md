---
title: "Deep Galerkin Method (DGM)"
category: "Algorithms and ML"
order: 30
lang: "en"
slug: "deep-galerkin"
---

# Deep Galerkin Method (DGM) in Finance

In quantitative finance, pricing a basket option on 100 different stocks requires solving a 100-dimensional Partial Differential Equation (PDE). Traditional methods (Finite Difference) fail due to the **Curse of Dimensionality** (the grid size grows exponentially). Monte Carlo is slow. The **Deep Galerkin Method (DGM)**, introduced by Sirignano and Spiliopoulos (2018), uses deep learning to solve high-dimensional PDEs.

## The Core Idea: PDE as a Loss Function

Instead of discretizing space into a grid, DGM uses a **Neural Network** $f(t, x; \theta)$ to approximate the unknown solution (e.g., the option price) at any time $t$ and state $x$.

The network is trained to satisfy the PDE. If the Black-Scholes PDE is $\mathcal{L}f = 0$ with terminal condition $f(T, x) = g(x)$, the loss function is defined as:

$$J(\theta) = \|\mathcal{L}f(t, x; \theta)\|^2_{Domain} + \|f(T, x; \theta) - g(x)\|^2_{Boundary}$$

## How It Works

1.  **Sampling**: Instead of a fixed grid, the algorithm randomly samples points $(t, x)$ from the domain (e.g., random times and stock prices).
2.  **Automatic Differentiation**: To calculate the PDE operator $\mathcal{L}$ (which contains partial derivatives $\frac{\partial f}{\partial t}$ and $\frac{\partial^2 f}{\partial x^2}$), DGM uses **Autograd** (exactly like backpropagation). This provides exact derivatives without approximation errors.
3.  **Optimization**: The network weights $\theta$ are updated using Stochastic Gradient Descent (SGD) to minimize the PDE residual $J(\theta)$. When the loss reaches zero, the neural network *is* the exact solution to the PDE.

## Why Tier-1 Quants Use It

- **High Dimensions**: DGM can solve PDEs in 200+ dimensions, which was previously considered mathematically impossible. This allows pricing complex multi-asset derivatives (like CDOs or massive basket options).
- **Continuous Solution**: Unlike Monte Carlo (which gives a single number for a specific starting point), DGM yields a fully analytical function. Once trained, you can get the price and the "Greeks" (Delta, Gamma) for *any* stock price instantly just by querying the network.

## Visualization: The Curse Broken

```chart
{
  "type": "line",
  "xAxis": "dimensions",
  "data": [
    {"dimensions": 1, "grid_time": 0.1, "dgm_time": 5},
    {"dimensions": 2, "grid_time": 1, "dgm_time": 6},
    {"dimensions": 3, "grid_time": 100, "dgm_time": 7},
    {"dimensions": 4, "grid_time": 10000, "dgm_time": 8},
    {"dimensions": 10, "grid_time": 1000000, "dgm_time": 15}
  ],
  "lines": [
    {"dataKey": "grid_time", "stroke": "#ef4444", "name": "Finite Difference (Explodes)"},
    {"dataKey": "dgm_time", "stroke": "#10b981", "name": "Deep Galerkin (Scales)"}
  ]
}
```

## Related Topics

[[numerical-pde-finance]] — traditional grid-based methods  
[[neural-sdes-finance]] — the stochastic equivalent  
[[black-scholes]] — the classic PDE being solved
---
