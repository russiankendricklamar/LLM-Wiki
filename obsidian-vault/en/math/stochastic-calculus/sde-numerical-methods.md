---
title: "Numerical Methods for SDEs"
category: "Stochastic Calculus"
order: 21
lang: "en"
slug: "/math/sde-numerical-methods"
growth: "seedling"
---

# Numerical Methods for SDEs

Stochastic differential equations (SDEs) rarely admit closed-form solutions; numerical approximation is fundamental to applications spanning physics, finance, and generative modeling. This article surveys the main schemes for discretizing [[stochastic-differential-equations]] and measures of their convergence.

## The Standard [[stochastic-differential-equations|SDE]]

Consider an Itô [[stochastic-differential-equations|SDE]]:
$$dX_t = \mu(X_t, t)\,dt + \sigma(X_t, t)\,dW_t,$$
with initial condition $X_0 = x_0$. The drift $\mu$ and diffusion $\sigma$ are assumed sufficiently regular. Our goal is to compute $X_{t_0}, X_{t_1}, \ldots, X_{t_N}$ on a time grid $0 = t_0 < t_1 < \cdots < t_N = T$ with uniform step $h = T/N$.

## Euler–Maruyama Scheme

The simplest and most widely used discretization is **Euler–Maruyama**:
$$X_{n+1} = X_n + \mu(X_n)\,h + \sigma(X_n)\,\Delta W_n,$$
where $\Delta W_n = W_{t_{n+1}} - W_{t_n} \sim N(0, h)$ are independent increments. This scheme is the natural extension of deterministic Euler's method to the stochastic setting.

**Strong order of convergence**: $1/2$. The expected error $\mathbb{E}[\max_{0 \le n \le N} |X_{t_n} - X_n|]$ decreases as $O(h^{1/2})$.

**Weak order of convergence**: $1$. The functional error $|\mathbb{E}[f(X_T)] - \mathbb{E}[f(X_N)]|$ decreases as $O(h)$ for smooth test functions $f$.

Euler–Maruyama is weak-convergent enough for [[monte-carlo-method|Monte Carlo]] estimation of expectations but weak for path-dependent estimates. Its ease of implementation and low computational cost make it the de facto standard in practice.

## Milstein Scheme

Higher strong convergence requires knowledge of higher-order derivatives. The **Milstein scheme** incorporates the first-order Itô correction:
$$X_{n+1} = X_n + \mu(X_n)\,h + \sigma(X_n)\,\Delta W_n + \frac{1}{2}\sigma'(X_n)\sigma(X_n)\,[(\Delta W_n)^2 - h].$$

Here $\sigma'$ denotes the derivative of $\sigma$ with respect to $X$. The additional term $\frac{1}{2}\sigma\sigma'[(\Delta W)^2 - h]$ comes from the quadratic variation $d\langle W \rangle_t = dt$ and the product rule in Itô calculus.

**Strong order of convergence**: $1$. The expected error drops to $O(h)$, a substantial gain over Euler–Maruyama.

**Computational cost**: One extra derivative evaluation per step. In moderate dimensions, this overhead is acceptable.

The Milstein scheme generalizes to systems: for multivariate $X_t \in \mathbb{R}^d$, the correction term becomes
$$\frac{1}{2}\sum_{i,j} \frac{\partial\sigma_i}{\partial x_j}\sigma_j\,[(\Delta W_i\Delta W_j) - \mathbb{1}_{i=j}h],$$
which can grow expensive in high dimensions without careful matrix-free implementation.

## Runge–Kutta Methods for SDEs

Deterministic Runge–Kutta schemes generalize to SDEs with careful treatment of multiple Wiener increments. A second-order strong scheme (Rung–Kutta type) looks like:
$$X_{n+1} = X_n + \mu(X_n)\,h + \sigma(X_n)\,\Delta W_n + O(h^{3/2}).$$

Higher-order schemes typically require simulating higher-order Lévy increments (e.g., $\int_{t_n}^{t_{n+1}} W_s\,ds$), which increases both complexity and dimension. **Wagner–Platen expansion** (discussed below) provides a systematic framework for deriving these.

## Strong vs. Weak Convergence

**Strong convergence** measures error along paths:
$$e_n^{\text{strong}} = \mathbb{E}[|X_{t_n} - X_n|].$$
Required when you care about individual trajectories: path-dependent payoffs, stopped times, extreme-value estimates.

**Weak convergence** measures error in expectations:
$$e_N^{\text{weak}} = |\mathbb{E}[f(X_T)] - \mathbb{E}[f(X_N)]|.$$
Sufficient for pricing, moments, and densities. Weak schemes can be cheaper: coarser grids, fewer steps, simpler increments.

**Multilevel Monte Carlo** (Giles) exploits this: use coarse-grid weak approximations for variance reduction, then compute fine-grid corrections on a fraction of paths. With $L$ levels and level $l$ using $N_l = 2^l$ steps, the cost is $O(\varepsilon^{-2})$ vs. $O(\varepsilon^{-2}\log^2\varepsilon^{-1})$ for naive Monte Carlo—a factor of $\log^2 N$ savings.

## Wagner–Platen Expansion

For SDEs, the analogue of Taylor expansion is the **Wagner–Platen (stochastic Taylor) expansion**:
$$dX_t = \left[ L^{(0)}X_t\,dt + L^{(1)}X_t\,dW_t \right] + \text{higher-order terms},$$
where $L^{(0)} = \mu\frac{\partial}{\partial x} + \frac{1}{2}\sigma^2\frac{\partial^2}{\partial x^2}$ (the [[feynman-kac|infinitesimal generator]]) and $L^{(1)} = \sigma\frac{\partial}{\partial x}$.

Truncating this expansion at different orders gives schemes of varying accuracy. For instance, retaining up to $L^{(1)}L^{(1)}$ yields the Milstein scheme. Full expansions to order $3/2$ or $2$ produce higher-order schemes but demand many derivative evaluations—rarely justified unless smoothness is guaranteed and dimension is low.

## Implicit Methods for Stiff SDEs

When drift or diffusion coefficients exhibit large Lipschitz constants or wide spectral gaps (stiff systems), explicit methods require prohibitively small step sizes. **Implicit Euler** generalizes naturally:
$$X_{n+1} = X_n + \mu(X_{n+1})\,h + \sigma(X_n)\,\Delta W_n.$$

Implicit schemes are $A$-stable (in the sense of deterministic theory) and tolerate larger steps, though they require solving a nonlinear system per step. **Semi-implicit** variants (implicit in drift, explicit in diffusion) balance stability and cost.

Stability analysis of implicit SDEs is subtle: standard linear stability concepts must be adapted to account for noise, typically via mean-square or asymptotic stability notions.

## Split-Step Methods

For systems with special structure—separable drift and diffusion, or additive noise—**split-step** (or **Lie–Trotter**) schemes are attractive:
$$X^{(1)}_{n+1} = X_n + \sigma(X_n)\,\Delta W_n,$$
$$X_{n+1} = X^{(1)}_{n+1} + \mu(X_{n+1})\,h.$$

Order can be improved by reversing the splits in alternating steps (**Strang splitting**). These methods reduce computational cost when $\sigma$ is cheaper to invert or has special form (e.g., diagonal in [[diffusion-models]]).

## Applications

**Generative Modeling**: Diffusion-based models generate images via SDEs of the form $dX_t = f(X_t, t)\,dt + g(t)\,dW_t$. Score-matching learns the drift, and simulation (via Euler–Maruyama or higher-order schemes) reverses the noise. Weak convergence suffices; the choice of scheme trades off speed vs. sample quality.

**Physics Simulations**: Langevin dynamics for molecular simulation require stable, reversible integrators. Leapfrog and similar symplectic schemes are used; one must balance fidelity to the continuous-time SDE with conservation laws.

**Mathematical Finance**: Pricing derivatives under stochastic volatility or jump models (Heston, jump-diffusion) relies on Monte Carlo with Euler–Maruyama. Weak convergence $O(h)$ is standard; multilevel schemes reduce variance for nested expectations (American options, CVA).

**Stochastic Filtering**: Kalman and particle filters discretize SDEs for state-space inference. Exact simulation (Gillespie for jump processes) or high-order schemes ensure filter consistency.

## Practical Considerations

1. **Derivative access**: Milstein and higher schemes require $\nabla\sigma$ and $\nabla\mu$. Automatic differentiation alleviates pain, but cost scales with dimension.
2. **Dimension**: In $d \gg 100$, Euler–Maruyama dominates; high-order schemes' overhead outweighs accuracy gains.
3. **Step-size tuning**: Adaptive step-size selection (monitoring local error) helps, especially near discontinuities or low-diffusion regimes.
4. **Verification**: Compare against exact solutions (geometric Brownian motion, Ornstein–Uhlenbeck) or benchmark problems to validate implementation.

## Related Concepts

[[stochastic-differential-equations]] · [[feynman-kac]] · [[brownian-bridge]] · [[levy-ito-decomposition]] · [[monte-carlo-method]] · [[diffusion-models]] · [[cameron-martin-formula]]
