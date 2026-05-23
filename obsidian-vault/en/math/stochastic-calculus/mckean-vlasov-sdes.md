---
title: McKean-Vlasov SDEs
category: Stochastic Calculus
order: 155
lang: en
slug: mckean-vlasov-sdes
---

# McKean-Vlasov SDEs

McKean-Vlasov Stochastic Differential Equations (SDEs) characterize the mean-field limit of interacting particle systems. Unlike classical SDEs, the drift and diffusion coefficients depend on the law of the solution.

## Definition

A typical McKean-Vlasov SDE is given by:
$$ dX_t = b(t, X_t, \mu_t) dt + \sigma(t, X_t, \mu_t) dW_t, \quad X_0 \sim \mu_0 $$
where $\mu_t = \text{Law}(X_t)$. This is the continuous state space analog of a [[mean-field-game]].

## $N$-Particle System and Propagation of Chaos

Consider an $N$-particle system:
$$ dX_t^{i,N} = b\left(t, X_t^{i,N}, \mu_t^N\right) dt + \sigma\left(t, X_t^{i,N}, \mu_t^N\right) dW_t^i $$
where $\mu_t^N = \frac{1}{N} \sum_{j=1}^N \delta_{X_t^{j,N}}$ is the empirical measure. As $N \to \infty$, the empirical measure weakly converges to $\mu_t$, and the particles become asymptotically independent, a phenomenon known as propagation of chaos.

## Non-linear Fokker-Planck Equation

The marginal densities $p(t, x)$ of $X_t$ evolve according to the non-linear Fokker-Planck equation:
$$ \partial_t p(t, x) = -\nabla \cdot \left( b(t, x, p(t, \cdot)) p(t, x) \right) + \frac{1}{2} \sum_{i,j} \partial^2_{x_i x_j} \left( (\sigma \sigma^T)_{ij}(t, x, p(t, \cdot)) p(t, x) \right) $$

This formulation bridges the gap between stochastic analysis and [[partial-differential-equations]].
