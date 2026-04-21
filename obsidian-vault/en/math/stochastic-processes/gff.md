---
title: "Gaussian Free Fields"
category: "Stochastic Processes"
order: 14
lang: "en"
slug: "gff"
---

# Gaussian Free Fields (GFF)

The Gaussian Free Field (GFF) is the $d$-dimensional generalization of Brownian motion. While Brownian motion is a random function of a 1D time parameter, the GFF is a random function (or more accurately, a distribution) defined over a multi-dimensional domain. It is a central object in **Statistical Mechanics** and **Quantum Field Theory**.

## Definition

The GFF on a domain $\Omega \subset \mathbb{R}^d$ is a Gaussian random field $h$ whose covariance is given by the **Green's function** $G(x, y)$ of the Laplacian with Dirichlet boundary conditions.

Mathematically, the GFF is the Gaussian measure on the space of functions (or distributions) with the "energy" given by the Dirichlet integral:
$$S(h) = \frac{1}{2} \int_\Omega |\nabla h(x)|^2 dx$$
The probability density is informally $P(h) \propto \exp(-S(h))$.

## The 2D Case: Conformal Invariance

The 2D GFF is particularly special because it is **conformally invariant**. This means that if you deform the domain $\Omega$ using a conformal (angle-preserving) map, the law of the GFF remains the same. 

This link to complex analysis makes the 2D GFF a cornerstone of modern probability, connecting it to:
- **Liouville Quantum Gravity**: Using the GFF to define a "random metric" on a surface.
- **SLE**: The GFF's level lines are related to Schramm-Loewner Evolutions.

## Roughness and Distributions

A crucial property of the GFF in dimensions $d \geq 2$ is that it is **not a function**. It is too "rough" to have a well-defined value at a single point. 
- In 1D, the GFF is Brownian motion (a continuous function).
- In 2D, the variance at a point is infinite. The GFF only makes sense when averaged against a smooth test function $\phi$: $\langle h, \phi \rangle$.

## Visualization: Random Landscape

```chart
{
  "type": "line",
  "xAxis": "x",
  "data": [
    {"x": -2, "h": 0.5},
    {"x": -1.5, "h": 1.2},
    {"x": -1, "h": -0.8},
    {"x": -0.5, "h": 2.1},
    {"x": 0, "h": 0.0},
    {"x": 0.5, "h": -1.5},
    {"x": 1, "h": 0.4},
    {"x": 1.5, "h": 1.8},
    {"x": 2, "h": -0.2}
  ],
  "lines": [
    {"dataKey": "h", "stroke": "#3b82f6", "name": "GFF Slice (Roughness)"}
  ]
}
```
*A 1D slice of a 2D GFF looks like a jagged, fractal mountain range. The lack of smoothness is a fundamental characteristic of high-dimensional random fields.*

## Related Topics

[[schwartz-distributions]] — the mathematical space where GFF lives  
[[brownian-motion]] — the 1D version of GFF  
[[physics/gravity/ads-cft]] — GFFs appear in the holographic boundary theories
---
