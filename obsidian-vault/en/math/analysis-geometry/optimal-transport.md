---
title: "Optimal Transport"
category: "Analysis & Geometry"
order: 1
lang: "en"
slug: "optimal-transport"
growth: "seedling"
---

Optimal transport is a foundational framework in probability theory and functional analysis that defines distances between probability measures and recovers structure in measure-coupling problems. Beginning with Monge's classical 1781 formulation, the theory has evolved into a powerful computational apparatus woven throughout machine learning, mathematical physics, and quantitative finance.

## Monge's Problem and Its Limitations

The classical formulation: given two probability measures $\mu$ and $\nu$ on $\mathbb{R}^d$, find a transport map $T: \mathbb{R}^d \to \mathbb{R}^d$ minimizing

$$\int_{\mathbb{R}^d} c(x, T(x)) \, d\mu(x),$$

where $c: \mathbb{R}^d \times \mathbb{R}^d \to \mathbb{R}_+$ is a cost function, subject to the pushforward constraint $T_\# \mu = \nu$ (the image of $\mu$ under $T$ equals $\nu$).

Critical limitation: a deterministic transport map does not always exist. If $\mu$ is atomic (a sum of Dirac masses) and $\nu$ is absolutely continuous, no map can satisfy both marginal constraints simultaneously. Monge could not resolve this impasse.

## Kantorovich's Relaxation

Kantorovich (1942) achieved a revolutionary pivot from deterministic to probabilistic: instead of a map $T$, seek a coupling $\gamma$—a joint distribution with prescribed marginals $\mu$ and $\nu$:

$$\gamma \in \Gamma(\mu, \nu) = \{\gamma \in \mathcal{P}(\mathbb{R}^d \times \mathbb{R}^d) : \text{pr}_1 \# \gamma = \mu, \, \text{pr}_2 \# \gamma = \nu\}.$$

Kantorovich's problem:

$$W_p(\mu, \nu) = \left( \inf_{\gamma \in \Gamma(\mu, \nu)} \int_{\mathbb{R}^d \times \mathbb{R}^d} c(x,y)^p \, d\gamma(x,y) \right)^{1/p}.$$

Core advantage: the set $\Gamma(\mu, \nu)$ is always nonempty and convex; the problem becomes a linear program in measure space. Existence of a minimizer is guaranteed by compactness and lower semicontinuity.

## Wasserstein-1 Distance and Duality

The Wasserstein-1 distance (cost $c(x,y) = |x-y|$) admits an elegant dual characterization. By the Kantorovich-Rubinstein duality theorem:

$$W_1(\mu, \nu) = \sup_{\|f\|_{\text{Lip}} \leq 1} \left| \mathbb{E}_\mu[f] - \mathbb{E}_\nu[f] \right|,$$

where the supremum ranges over all 1-Lipschitz functions $f: \mathbb{R}^d \to \mathbb{R}$. This outperforms Kullback-Leibler divergence: $W_1$ is properly defined for measures with disjoint support, whereas $\text{KL}(\mu \| \nu) = \infty$ in such cases.

The duality reveals why $W_1$ is geometrically meaningful: it measures the worst-case expectation gap under all slowly-varying functions, a robust notion of distributional distance.

## Visualization: Mass Displacement

```chart
{
  "type": "line",
  "xAxis": "x",
  "data": [
    {"x": -2, "source": 0.1, "target": 0.0},
    {"x": -1, "source": 0.8, "target": 0.1},
    {"x": 0, "source": 0.1, "target": 0.4},
    {"x": 1, "source": 0.0, "target": 0.8},
    {"x": 2, "source": 0.0, "target": 0.1}
  ],
  "lines": [
    {"dataKey": "source", "stroke": "#3b82f6", "name": "Source Distribution (μ)"},
    {"dataKey": "target", "stroke": "#ef4444", "name": "Target Distribution (ν)"}
  ]
}
```

## Sinkhorn's Algorithm

For numerical solution, add entropic regularization:

$$W_p^\varepsilon(\mu, \nu) = \inf_{\gamma \in \Gamma(\mu,\nu)} \int c(x,y)^p \, d\gamma - \varepsilon H(\gamma),$$

where $H(\gamma)$ is the [[shannon-entropy|entropy]] of $\gamma$. The problem remains convex but becomes differentiable and tractable. Sinkhorn's algorithm solves this via alternating scaling updates, which is critical for [[automatic-differentiation|backpropagation]] in neural networks.

## Machine Learning Applications

**Wasserstein GANs.** The discriminator (critic) is trained as a 1-Lipschitz function, estimating $W_1$ between real and generated distributions via Kantorovich-Rubinstein duality. This eliminates the vanishing gradient problem endemic to standard GANs.

**Interpolation and geodesics.** The optimal transport plan $\gamma^*$ defines meaningful pathways between distributions. Wasserstein geodesics minimize path energy and respect the geometry of probability space.

## Related Topics

[[mean-field-games]] — interacting agents as mass transport  
[[flow-matching]] — OT-based generative path  
[[measure-theory]] — the underlying language  
[[convex-optimization]] — solving the Kantorovich dual
