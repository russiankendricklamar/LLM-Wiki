---
title: "Backward Stochastic Differential Equations"
category: "Stochastic Calculus"
order: 24
lang: "en"
slug: "/math/backward-sde"
growth: "seedling"
---

# Backward Stochastic Differential Equations

Backward stochastic differential equations (BSDEs) are fundamental objects in modern probability theory and mathematical finance, connecting complex stochastic problems to nonlinear partial differential equations through a powerful duality principle.

## Definition and basic structure

A classical BSDE takes the form:
$$-dY_t = f(t, Y_t, Z_t)dt - Z_t dW_t, \quad Y_T = \xi$$

where:
- $W_t$ is a standard Brownian motion on a filtered probability space
- $\xi \in L^2(\mathcal{F}_T)$ is the terminal condition (often called the "payoff")
- $f: [0,T] \times \mathbb{R} \times \mathbb{R}^d \to \mathbb{R}$ is the **generator** of the BSDE
- **$(Y_t, Z_t)$ is the unknown pair**: $Y$ is a scalar adapted process, $Z$ is a $d$-dimensional adapted process

The negative sign indicates backward evolution: time runs from terminal condition $T$ down to initial time $0$. The critical property is that $Z_t$ must be **adapted to the filtration**, which ensures that $Y$ behaves like a supermartingale after accounting for the drift.

## Existence and uniqueness theory

The **El Karoui–Peng–Quenez (1997) theorem** established the cornerstone result: if the generator $f$ satisfies a Lipschitz condition
$$|f(t,y_1,z_1) - f(t,y_2,z_2)| \leq L(|y_1 - y_2| + |z_1 - z_2|)$$
and the terminal condition satisfies $\mathbb{E}[\xi^2] < \infty$, then there exists a **unique solution** $(Y, Z)$ in the space of adapted processes with square-integrable paths:
$$\mathbb{E}\left[\sup_{t \in [0,T]} |Y_t|^2 + \int_0^T |Z_t|^2 dt\right] < \infty$$

This foundational result—arguably the most important theorem in BSDE theory—immediately enabled applications across stochastic control, option pricing, and risk measurement.

## Comparison theorem

For two BSDEs sharing the same noise but differing generators and terminal payoffs, a powerful monotonicity property holds:

If $f_1(t,y,z) \leq f_2(t,y,z)$ for all $(t,y,z)$ and $\xi_1 \leq \xi_2$ almost surely, then the corresponding solutions satisfy $Y_t^1 \leq Y_t^2$ almost surely for all $t \in [0,T]$.

The comparison theorem provides bounds on solutions without explicit computation and is essential for proving uniqueness and comparing competing financial instruments.

## Nonlinear Feynman–Kac and connection to PDEs

The most remarkable feature of BSDE theory is the **nonlinear Feynman–Kac formula**, which links BSDE solutions to semilinear parabolic PDEs. The initial condition $Y_0$ of the BSDE equals the value at the origin of the solution $u(t,x)$ to:
$$\frac{\partial u}{\partial t}(t,x) + \mathcal{L}u(t,x) + f(t, x, u(t,x), \sigma(t,x)^T \nabla u(t,x)) = 0$$
with terminal condition $u(T,x) = \xi(x)$, where $\mathcal{L}$ is the generator of the underlying diffusion.

Moreover, the component $Z_t = \sigma(t, X_t)^T \nabla u(t, X_t)$ recovers the spatial gradient of the PDE solution. This correspondence explains why BSDEs are the natural probabilistic projection of nonlinear PDEs and enables numerics by Monte Carlo simulation of SDEs rather than solving PDEs on grids.

## Linear BSDEs and martingale representation

When the generator is independent of $(Y,Z)$—i.e., $f(t,y,z) = g(t)$—the BSDE linearizes:
$$-dY_t = g(t)dt - Z_t dW_t, \quad Y_T = \xi$$

The solution becomes:
$$Y_t = \mathbb{E}\left[\xi + \int_t^T g(s)ds \mid \mathcal{F}_t\right]$$

The process $Z_t$ serves as a **martingale representation** in the sense of [[martingale-representation]]: the classical theorem states that any square-integrable martingale can be uniquely decomposed as an integral against Brownian motion, and $Z$ is precisely that integrand.

## Reflected BSDEs and optimal stopping

**Reflected BSDEs** incorporate a lower boundary or obstacle $L_t$:
$$-dY_t = f(t, Y_t, Z_t)dt + dK_t - Z_t dW_t, \quad Y_T = \xi, \quad Y_t \geq L_t$$

where $K_t$ is a non-decreasing process that enforces the reflection whenever $Y$ touches the boundary. Reflected BSDEs are intimately connected to [[optional-decomposition]], [[stochastic-control]], and the theory of optimal stopping problems. They also appear in American option pricing and utility maximization with constraints.

## G-expectation and sublinear expectations

**G-expectation** (introduced by Shige Peng) generalizes classical expectation by defining it as the initial value $Y_0$ of a special BSDE:
$$-dY_t = f(t, Z_t)dt - Z_t dW_t, \quad Y_T = \xi$$

where the generator now depends *nonlinearly* on $Z$ (typically quadratic in $Z$). This elegant construction yields **sublinear expectations** that violate classical axioms of probability but preserve monotonicity and consistency. G-expectations are particularly useful for modeling model uncertainty and ambiguity aversion in finance.

## Core applications

**Stochastic control:** The value function of a finite-horizon stochastic control problem often satisfies a BSDE derived from the Hamilton-Jacobi-Bellman principle; solving the BSDE recovers the optimal policy and value.

**Utility maximization:** Portfolio optimization problems with constraints or proportional transaction costs naturally lead to nonlinear BSDEs whose solutions encode the optimal wealth process.

**Option pricing under incompleteness:** In incomplete markets, fair prices of derivatives are determined via reflected BSDEs, with the reflection barrier modeling the absence of perfect hedging.

**Risk measures:** Conditional Value-at-Risk (CVaR), average loss, and other tail risk metrics are elegantly expressed as BSDE expectations and possess axiomatic properties desirable for risk management.

**Malliavin calculus:** Via [[malliavin-calculus]], Greeks (sensitivities of option prices to parameters) can be computed as expectations of BSDE solutions, enabling efficient hedging strategies.

**[[quadratic-variation]] and paths:** The quadratic covariation between $Y$ and $W$ encodes information about price dynamics and correlation structure in the underlying model.

## Numerical methods

In practice, BSDEs are solved numerically via several approaches:
- **Euler discretization** in time combined with regression in space (dynamic programming)
- **Regression Monte Carlo** methods (Longstaff-Schwartz type) that solve the BSDE backward
- **Polynomial chaos** and basis function approximations for high-dimensional state spaces
- **Deep neural networks** (machine learning methods) for problems with large dimension

## Historical and contemporary significance

BSDEs emerged in the 1990s and revolutionized stochastic analysis and financial mathematics. The foundational El Karoui, Peng, Quenez (1997) paper in *Probability Theory and Related Fields* is among the most influential in modern probability. Beyond finance, BSDEs now appear in mean-field games, partial information problems, and purely mathematical settings in Riemannian geometry and stochastic homogenization.

## Related concepts

BSDE theory is closely interwoven with [[stochastic-differential-equations]], [[feynman-kac]], [[stochastic-control]], and [[quadratic-variation]]. Extensions appear in [[malliavin-calculus]] for regularity analysis, and connections exist to [[optional-decomposition]] for obstacle problems and optimal stopping.