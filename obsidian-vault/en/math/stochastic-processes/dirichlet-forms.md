---
title: "Dirichlet Forms"
category: "Stochastic Processes"
order: 11
lang: "en"
slug: "dirichlet-forms"
---

# Dirichlet Forms

Dirichlet forms provide a powerful functional-analytic framework for studying **Markov processes**. They establish a one-to-one correspondence between a class of stochastic processes (symmetric Markov processes) and certain closed quadratic forms on a Hilbert space.

## The Core Concept: Energy and Entropy

A Dirichlet form is a quadratic form $\mathcal{E}(u, v)$ on $L^2(X, \mu)$ that can be thought of as the **energy** of a function. The classic example is the Dirichlet integral on $\mathbb{R}^n$:
$$\mathcal{E}(u, u) = \int_{\mathbb{R}^n} |\nabla u|^2 dx$$
This energy is associated with **Brownian motion**.

## Formal Definition

A symmetric form $\mathcal{E}$ with domain $\mathcal{D}(\mathcal{E}) \subseteq L^2$ is a **Dirichlet form** if it is:
1.  **Closed**: The domain is a Hilbert space under the inner product $\mathcal{E}_1(u, v) = \mathcal{E}(u, v) + \langle u, v \rangle_{L^2}$.
2.  **Markovian**: For any $u \in \mathcal{D}(\mathcal{E})$, its unit contraction $v = \min(1, \max(0, u))$ is also in the domain, and $\mathcal{E}(v, v) \leq \mathcal{E}(u, u)$.

The Markovian property is the functional-analytic version of the requirement that probabilities stay between 0 and 1.

## Connection to Operators and Processes

There is a triple correspondence:
1.  **Dirichlet Form** $\mathcal{E}$
2.  **Generator** $L$ (a self-adjoint operator such that $\mathcal{E}(u, v) = \langle -Lu, v \rangle$)
3.  **Markov Process** $X_t$ (the stochastic process whose transition semigroup is $P_t = e^{tL}$)

## Why Use Dirichlet Forms?

1.  **Fractals and Manifolds**: They allow us to define "Brownian motion" and "Laplacians" on spaces where there is no smooth structure (e.g., the Sierpinski gasket).
2.  **Stability**: Many properties of the process (like recurrence or transience) can be determined just by looking at the functional properties of the energy form.
3.  **SDEs with Bad Drift**: They provide a way to construct solutions to stochastic equations even when the coefficients are singular or non-smooth.

## Visualization: Energy Minimization

```chart
{
  "type": "line",
  "xAxis": "iteration",
  "data": [
    {"iteration": 0, "energy": 100, "smoothness": 10},
    {"iteration": 1, "energy": 45,  "smoothness": 60},
    {"iteration": 5, "energy": 12,  "smoothness": 92},
    {"iteration": 10,"energy": 2,   "smoothness": 99}
  ],
  "lines": [
    {"dataKey": "energy", "stroke": "#ef4444", "name": "Functional Energy (E)"},
    {"dataKey": "smoothness", "stroke": "#10b981", "name": "Process Stability"}
  ]
}
```
*The diffusion process can be viewed as the gradient flow of the Dirichlet energy. The system evolves to minimize energy, which corresponds to the process reaching its stationary distribution.*

## Related Topics

[[operator-semigroups]] — the link to transition operators  
stochastic-processes — the probabilistic target  
[[measure-theory]] — required for defining the $L^2$ space
---
