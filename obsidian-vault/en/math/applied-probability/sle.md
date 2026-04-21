---
title: "Schramm-Loewner Evolution (SLE)"
category: "Applied Probability"
order: 48
lang: "en"
slug: "sle"
---

# Schramm-Loewner Evolution (SLE)

Schramm-Loewner Evolution (SLE), introduced by **Oded Schramm** in 1999, is a family of random planar curves that describe the scaling limits of various discrete models in statistical mechanics, such as **percolation**, the **Ising model**, and **self-avoiding walks**. It is the bridge between probability theory and conformal geometry.

## The Core Idea: Conformal Maps

SLE uses the **Loewner equation** to grow a curve in a 2D domain (usually the upper half-plane $\mathbb{H}$) by encoding the curve's growth into a 1D real-valued driving function $W_t$.

The Loewner equation is:
$$\frac{\partial g_t(z)}{\partial t} = \frac{2}{g_t(z) - W_t}$$
where $g_t(z)$ is a conformal map from the domain minus the curve back to the original domain.

## The Random Driver: Brownian Motion

The genius of Schramm was to set the driving function $W_t$ to be a scaled Brownian motion:
$$W_t = \sqrt{\kappa} B_t$$
where $\kappa \geq 0$ is a parameter that determines the "flavor" of the curve. This choice ensures that the resulting random curve is **conformally invariant** and satisfies the **domain Markov property**.

## The Phases of κ

The parameter $\kappa$ completely changes the geometry of the curve:
- **$0 \leq \kappa \leq 4$**: Simple curves (they don't touch themselves or the boundary).
- **$4 < \kappa < 8$**: Self-touching curves (they form loops and touch the boundary).
- **$\kappa \geq 8$**: Space-filling curves (they eventually visit every point in the 2D plane).

## Famous SLE Types

| $\kappa$ Value | Physical Model |
|---|---|
| $\kappa = 2$ | Loop-Erased Random Walk |
| $\kappa = 3$ | Ising Model interfaces |
| $\kappa = 4$ | Gaussian Free Field level lines |
| $\kappa = 6$ | Percolation boundaries (Smirnov's Theorem) |
| $\kappa = 8/3$ | Self-Avoiding Walk |

## Visualization: SLE Fractal Dimension

```chart
{
  "type": "line",
  "xAxis": "kappa",
  "data": [
    {"kappa": 0, "dim": 1.0},
    {"kappa": 2, "dim": 1.25},
    {"kappa": 4, "dim": 1.5},
    {"kappa": 6, "dim": 1.75},
    {"kappa": 8, "dim": 2.0}
  ],
  "lines": [
    {"dataKey": "dim", "stroke": "#ef4444", "name": "Hausdorff Dimension (1 + κ/8)"}
  ]
}
```
*The fractal dimension of the SLE curve grows linearly with $\kappa$. At $\kappa=8$, the curve becomes so "wiggly" that it fills the entire 2D space (dimension 2).*

## Related Topics

[[percolation]] — the discrete model where SLE was first proven  
[[gff]] — the field whose boundaries are SLE curves  
[[brownian-motion]] — the driving force behind the curve
---
