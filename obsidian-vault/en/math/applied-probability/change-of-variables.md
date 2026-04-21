---
title: "Change of Variables"
category: "Applied Probability"
order: 38
lang: "en"
slug: "change-of-variables"
---

# Change of Variables and Jacobians

Change of Variables is a fundamental technique in probability theory for finding the distribution of a random variable that is a transformation of another. It is the mathematical engine behind **Normalizing Flows** and many physics simulations.

## Univariate Case

If $X$ has density $f_X(x)$ and $Y = g(X)$ where $g$ is a monotonic, differentiable function, the density of $Y$ is:

$$f_Y(y) = f_X(g^{-1}(y)) \left| \frac{d}{dy} g^{-1}(y) \right|$$

The absolute value of the derivative acts as a **scaling factor** to ensure the area under the new density still integrates to 1. If the function stretches the space, the density must decrease proportionally.

## Multivariate Case (The Jacobian)

For a vector random variable $X \in \mathbb{R}^d$ and a transformation $Y = g(X)$, the joint density of $Y$ is:

$$f_Y(y) = f_X(g^{-1}(y)) \left| \det \mathbf{J}_{g^{-1}}(y) \right|$$

Where $\mathbf{J}$ is the **Jacobian Matrix** of the inverse transformation. The determinant of the Jacobian measures how much the transformation changes the local volume at each point.

## Why It Matters for AI: Normalizing Flows

Normalizing Flows (like RealNVP or Glow) are a class of generative models that use this principle:
1.  Start with a simple distribution $z \sim \mathcal{N}(0, I)$.
2.  Apply a sequence of invertible, differentiable transformations $g_1, g_2, \dots, g_n$.
3.  The final density $x$ is complex, but its likelihood can be calculated exactly using the Jacobian chain rule:
    $$\log p(x) = \log p(z) - \sum \log | \det \mathbf{J}_{g_i} |$$

The challenge in architecture design is creating transformations that are expressive yet have **cheap-to-compute Jacobian determinants**.

## Visualization: Probability Mass Compression

```chart
{
  "type": "line",
  "xAxis": "x",
  "data": [
    {"x": -2, "orig": 0.05, "trans": 0.01},
    {"x": -1, "orig": 0.24, "trans": 0.10},
    {"x": 0,  "orig": 0.40, "trans": 0.80},
    {"x": 1,  "orig": 0.24, "trans": 0.10},
    {"x": 2,  "orig": 0.05, "trans": 0.01}
  ],
  "lines": [
    {"dataKey": "orig", "stroke": "#94a3b8", "name": "Source (X)"},
    {"dataKey": "trans", "stroke": "#3b82f6", "name": "Transformed (Y=g(X))"}
  ]
}
```
*When $g(X)$ "squeezes" data toward the center, the Jacobian term compensates by increasing the density peak (blue), keeping the total probability constant.*

## Related Topics

[[flow-matching]] — a continuous version of change of variables  
[[variational-autoencoders]] — where latent space transformations are learned  
[[vector-calculus]] — the multivariable math foundation
---
