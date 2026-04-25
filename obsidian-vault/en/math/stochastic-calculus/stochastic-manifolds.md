---
title: "Stochastic Calculus on Manifolds"
category: "Stochastic Calculus"
order: 22
lang: "en"
slug: "stochastic-manifolds"
---

# Stochastic Calculus on Manifolds

Stochastic Calculus on Manifolds integrates **Differential Geometry** with **Probability Theory**. It describes how random processes, like Brownian motion, behave when they are constrained to move on curved surfaces or more general differentiable manifolds.

## The Challenge of Curvature

In Euclidean space, we define Brownian motion as $W_t$. On a [[manifold-learning|manifold]] $M$, we cannot simply write $dX_t = dW_t$ because the sum of two points is not defined, and "moving in a straight line" depends on the curvature.

## Stratonovich vs. Itô

On manifolds, the **Stratonovich integral** is usually preferred over the Itô integral.
- **Itô**: Does not obey the standard chain rule ($d(f(x)) \neq f'(x)dx$).
- **Stratonovich**: Obeys the standard rules of calculus, which makes it compatible with the coordinate transformations of differential geometry.

## Stochastic Differential Equations (SDEs) on Manifolds

An [[stochastic-differential-equations|SDE]] on a manifold is typically defined using a family of vector fields $\{A_1, \dots, A_k\}$ and is written in Stratonovich form:
$$dX_t = A_0(X_t) dt + \sum_{i=1}^k A_i(X_t) \circ dW^i_t$$
The solution $X_t$ is a process that stays on the manifold $M$ for all time.

## Brownian Motion on a Manifold

Brownian motion on a Riemannian manifold $(M, g)$ is the Markov process whose generator is **half the Laplace-Beltrami operator**:
$$\mathcal{G} = \frac{1}{2} \Delta_M$$
It can be constructed via the **Eells-Elworthy-Malliavin (EEM)** approach:
1.  Take a Brownian motion in a flat Euclidean space.
2.  "Roll" the manifold along this path without slipping (using the **stochastic parallel transport** on the frame bundle).

## Applications

1.  **Robotics and Control**: Modeling noise in the joints of a robot arm (which live on a product of circles/spheres).
2.  **Information Geometry**: Studying the trajectory of optimization algorithms on the manifold of probability distributions.
3.  **Biophysics**: Modeling the diffusion of proteins on the curved surface of a cell membrane.

## Visualization: Random Walk on a Sphere

```chart
{
  "type": "scatter",
  "xAxis": "lon",
  "data": [
    {"lon": 0,   "lat": 0,   "t": 0},
    {"lon": 10,  "lat": 5,   "t": 1},
    {"lon": 15,  "lat": -10, "t": 2},
    {"lon": -5,  "lat": -20, "t": 3},
    {"lon": -20, "lat": -15, "t": 4},
    {"lon": -25, "lat": 5,   "t": 5}
  ],
  "lines": [
    {"dataKey": "lat", "stroke": "#3b82f6", "name": "Trajectory on Sphere"}
  ]
}
```
*A random process on a sphere is "pulled" by the curvature. Near the poles, the coordinate representation of the walk becomes highly non-linear, though the intrinsic motion remains a standard Brownian motion.*

## Related Topics

[[differential-geometry]] — the manifold foundation  
[[stochastic-differential-equations]] — Euclidean background  
[[ricci-flow]] — how curvature itself evolves
---
