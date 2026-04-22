---
title: "Signature-based Models"
category: "Stochastic"
order: 20
lang: "en"
slug: "signature-based-models"
---

# Signature-based Models in Finance

Signature-based models are a novel class of models that use the **Path Signature** from **Rough Path Theory** to represent financial time series. They provide a "universal" way to model path-dependent phenomena without making strong parametric assumptions.

## What is a Path Signature?

The signature of a path $X:[0, T] \to \mathbb{R}^d$ is an infinite sequence of iterated integrals:
$$S(X)_{0,T} = \left( 1, \int dX, \int \int dX dX, \dots \right)$$
- It acts as a **feature map** that captures the geometric structure of the path.
- **Universal Property**: Any continuous function of a path can be approximated arbitrarily well by a **linear** function of its signature.

## Signatures in Quantitative Finance

In finance, we often want to predict future rewards or risks based on the past path. The signature allows us to turn a difficult **non-linear functional** problem into a simple **linear regression** problem in "signature space."

### 1. Market Simulation (Generative Models)
Using **Sig-GANs** or **Sig-VAEs**, researchers generate synthetic price paths that preserve the "signature" (and thus the statistical moments and lead-lag relationships) of real market data. This is superior to standard GANs for time series.

### 2. Pricing and Hedging
Instead of solving complex PDEs, the price of an option can be represented as:
$$Price = \langle W, S(X_{past}) \rangle$$
where $W$ are weights learned from data or model calibration. This allows for extremely fast pricing of path-dependent options.

### 3. Lead-Lag Relationships
Signatures naturally capture how one asset follows another with a delay, making them powerful for high-frequency pairs trading.

## Why It's a "Game Changer"

- **Dimensionality Reduction**: The signature provides a fixed-length summary of a path regardless of its sampling frequency.
- **Mathematical Rigor**: Unlike "black-box" LSTMs, signatures are grounded in the theory of stochastic integration, allowing for formal proofs of convergence.

## Visualization: The First Few Terms

```chart
{
  "type": "bar",
  "xAxis": "term",
  "data": [
    {"term": "1st Order (Mean)", "val": 0.8},
    {"term": "2nd Order (Variance)", "val": 0.4},
    {"term": "2nd Order (Area)", "val": -0.1},
    {"term": "3rd Order (Skew)", "val": 0.05}
  ],
  "lines": [
    {"dataKey": "val", "stroke": "#8b5cf6", "name": "Signature Component Value"}
  ]
}
```
*Higher-order terms in the signature capture subtle features like the "Levy Area" (the tendency of a path to circle around a point), which is critical for detecting price manipulation or trend reversals.*

## Related Topics

[[rough-paths]] — the underlying mathematical theory  
[[path-dependent-volatility]] — a key application area  
[[generative-models]] — Sig-GAN context
---
