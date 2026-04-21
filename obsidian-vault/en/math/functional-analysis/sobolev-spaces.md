---
title: "Sobolev Spaces"
category: "Functional Analysis"
order: 1
lang: "en"
slug: "sobolev-spaces"
---

# Sobolev Spaces

Sobolev spaces are vector spaces of functions equipped with a norm that combines properties of both the function's size and its derivatives. They are the natural setting for the modern theory of **Partial Differential Equations (PDEs)** and are increasingly important in Machine Learning for analyzing **Neural Operators** and **PINNs**.

## Weak Derivatives

The core idea of Sobolev spaces is the **weak derivative**. A function $u$ has a weak derivative $v = \partial_i u$ if for all infinitely differentiable functions $\phi$ with compact support (test functions), the integration-by-parts formula holds:

$$\int_{\Omega} u \frac{\partial \phi}{\partial x_i} dx = -\int_{\Omega} v \phi dx$$

This allows us to differentiate functions that are not differentiable in the classical sense (e.g., functions with "kinks").

## Definition: $W^{k,p}$ Spaces

The Sobolev space $W^{k,p}(\Omega)$ consists of functions whose weak derivatives up to order $k$ are in the $L^p$ space:

$$\|u\|_{W^{k,p}} = \left( \sum_{|\alpha| \leq k} \|D^\alpha u\|_{L^p}^p \right)^{1/p}$$

- **$H^k$ Spaces**: When $p=2$, the space is a Hilbert space, denoted as $H^k(\Omega)$. These are most common in physics and engineering.
- **$H^1$**: Functions are square-integrable and have square-integrable first derivatives. This is where "energy" is usually defined.

## Sobolev Embedding Theorems

One of the most powerful aspects of the theory is the **Embedding Theorem**. It tells us when a function in a Sobolev space (defined by integrability) is actually continuous or differentiable in the classical sense.

For example, if $u \in W^{k,p}(\mathbb{R}^n)$ and $kp > n$, then $u$ is continuous ($u \in C^0$). This "trade-off" between the number of derivatives $k$ and the dimension $n$ is fundamental to the existence of solutions for PDEs.

## Application in AI: Physics-Informed NNs (PINNs)

In PINNs, we train a neural network to minimize a residual that involves derivatives:
$$\mathcal{L} = \| \Delta u_\theta - f \|_{L^2}^2$$
For this loss to be well-defined and for the optimizer to converge to a meaningful solution, the network $u_\theta$ must live in an appropriate Sobolev space. Sobolev norms are also used as regularizers to ensure the learned functions are "smooth" not just in values, but in their derivatives.

## Visualization: Smoothness vs. Integrability

```chart
{
  "type": "line",
  "xAxis": "x",
  "data": [
    {"x": -1.0, "l2": 1.0, "h1": 1.0},
    {"x": -0.5, "l2": 1.0, "h1": 0.5},
    {"x": 0.0, "l2": 1.0, "h1": 0.0},
    {"x": 0.5, "l2": 1.0, "h1": 0.5},
    {"x": 1.0, "l2": 1.0, "h1": 1.0}
  ],
  "lines": [
    {"dataKey": "l2", "stroke": "#ef4444", "name": "L2 (Discontinuous)"},
    {"dataKey": "h1", "stroke": "#10b981", "name": "H1 (Weakly Differentiable)"}
  ]
}
```
*An L2 function can be wildly discontinuous (red). An H1 function (green) must be "tied together" by its derivative, ensuring a higher degree of structural integrity.*

## Related Topics

[[measure-theory]] — the foundation of L-p spaces  
[[physics/classical/partial-differential-equations]] — where Sobolev spaces are used  
[[neural-operators]] — mapping between Sobolev spaces
---
