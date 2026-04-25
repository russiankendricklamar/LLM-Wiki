---
title: "Neural SDEs in Finance"
category: "Algorithms and ML"
order: 16
lang: "en"
slug: "neural-sdes-finance"
---

# Neural SDEs in Finance

**Neural Stochastic Differential Equations (Neural SDEs)** represent the ultimate fusion of deep learning and mathematical finance. They generalize both **Neural ODEs** and classical stochastic models (like Heston or SABR) by using neural networks to approximate the drift and diffusion coefficients of an [[stochastic-differential-equations|SDE]].

## The Mathematical Framework

A Neural SDE models the price process $X_t$ as:
$$dX_t = \mu_\theta(t, X_t) dt + \sigma_\phi(t, X_t) dW_t$$
where:
- $\mu_\theta$ is a neural network (the **Drift Network**).
- $\sigma_\phi$ is a neural network (the **Diffusion Network**).

Unlike a standard GAN or LSTM, which are discrete-time and often lack probabilistic rigor, a Neural SDE provides a **continuous-time generative model** that is consistent with the laws of stochastic calculus.

## Why Use Neural SDEs?

1.  **Model Discovery**: Instead of assuming the market follows Geometric Brownian Motion, the model "learns" the true physics of the price movement from data.
2.  **Calibration**: Neural SDEs can be trained to match the entire [[volatility-surface|Volatility Surface]] simultaneously. The networks find the optimal non-linear shapes for drift and vol that minimize the distance to market prices.
3.  **Path-Dependency**: By making the networks depend on a hidden state $h_t$ (Latent SDE), the model can capture complex memory effects like [[rough-volatility|Rough Volatility]].

## Training via Adjoint Sensitivity

Training a Neural SDE is challenging because you need to backpropagate through a stochastic integral.
- **The Adjoint Method**: Allows for memory-efficient gradient calculation without storing intermediate states of the solver.
- **Stochastic Re-parameterization**: Using the "Gumbel-max" or "Gaussian" re-parameterization tricks to allow gradients to flow through the random $dW_t$ terms.

## Applications

- **Generative Market Simulation**: Creating thousands of realistic "what-if" scenarios for stress testing.
- **High-Dimensional Pricing**: Solving option pricing problems in 100+ dimensions (e.g., basket options) where standard finite-difference methods fail due to the curse of dimensionality.

## Visualization: Neural vs. Classical Diffusion

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": 0, "gbm": 100, "neural": 100},
    {"t": 1, "gbm": 105, "neural": 102},
    {"t": 2, "gbm": 103, "neural": 110},
    {"t": 3, "gbm": 110, "neural": 108},
    {"t": 4, "gbm": 115, "neural": 115}
  ],
  "lines": [
    {"dataKey": "gbm", "stroke": "#94a3b8", "name": "Classical GBM (Fixed Vol)"},
    {"dataKey": "neural", "stroke": "#8b5cf6", "name": "Neural SDE (Learned Vol)"}
  ]
}
```
*The Neural SDE (purple) can learn to change its volatility and drift dynamically based on the price level, capturing "fat tails" and "skew" that the rigid classical model (grey) misses.*

## Related Topics

[[neural-odes]] — the deterministic foundation  
[[stochastic-differential-equations]] — the mathematical language  
[[rough-volatility]] — a phenomenon Neural SDEs are used to model
---
