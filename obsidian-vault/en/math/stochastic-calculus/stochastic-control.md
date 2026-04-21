---
title: "Stochastic Control"
category: "Stochastic Calculus"
order: 16
lang: "en"
slug: "stochastic-control"
growth: "seedling"
---

# Stochastic Control

**Stochastic control** solves the foundational problem: given a system whose evolution we can influence, how do we choose actions to optimize a cumulative objective? The theory bridges optimal stopping, differential games, portfolio optimization, and modern reinforcement learning.

Consider a state $X_t$ evolving as a stochastic differential equation ([[stochastic-differential-equations|SDE]]) under our influence:

$$dX_t = b(X_t, u_t) dt + \sigma(X_t, u_t) dW_t$$

where $u_t$ is an **adapted control process** we choose and $W_t$ is standard Brownian motion. We aim to maximize the expected payoff:

$$J(t, x, u) = \mathbb{E}\left[\int_t^T f(X_s, u_s) ds + g(X_T) \mid X_t = x\right]$$

The **value function** $V(t, x) = \sup_u J(t, x, u)$ answers: *What is the best payoff achievable starting from state $x$ at time $t$?* The optimal control $u^*(t, x)$ is the policy attaining this supremum.

## The Hamilton-Jacobi-Bellman Equation

The **HJB equation** is the central PDE of stochastic control. It states that if $V$ is the value function and sufficiently smooth, then:

$$-\frac{\partial V}{\partial t}(t, x) = \sup_{u} \left\{ f(x, u) + b(x, u) \cdot \nabla_x V(t, x) + \frac{1}{2} \text{tr}(\sigma(x, u) \sigma(x, u)^T \nabla_x^2 V(t, x)) \right\}$$

with terminal condition $V(T, x) = g(x)$.

Intuitively: the negative time derivative (rate of value decay) equals the best immediate gain plus the drift and diffusion effects on future value. The supremum identifies the optimal control action:

$$u^*(t, x) = \arg\max_u \left\{ f(x, u) + b(x, u) \cdot \nabla_x V + \frac{1}{2} \text{tr}(\sigma(x, u) \sigma(x, u)^T \nabla_x^2 V) \right\}$$

**Verification theorem**: If $V$ is a smooth solution to the HJB equation with terminal condition $V(T, x) = g(x)$, then $V$ is indeed the value function, and the control defined by the supremum is optimal.

## The Merton Portfolio Problem (1969)

Robert Merton's **portfolio optimization** is the canonical application. An investor has wealth $X_t$, allocates a fraction $u_t$ to a risky asset (return $\mu$, volatility $\sigma$) and remainder to a risk-free bond (return $r$), and consumes at rate $c_t$. The wealth dynamics are:

$$dX_t = X_t [u_t(\mu - r) + r - c_t] dt + X_t u_t \sigma dW_t$$

Maximize expected lifetime utility:

$$J = \mathbb{E}\left[\int_0^\infty e^{-\rho t} U(c_t) dt\right]$$

where $\rho$ is the time-discount rate and $U$ is CRRA utility $U(c) = \frac{c^{1-\gamma}}{1-\gamma}$ (relative risk aversion $\gamma$).

The HJB equation reduces to:

$$\rho V(x) = \max_{u, c} \left\{ U(c) + \left[u(\mu - r) + r - c\right] x V'(x) + \frac{1}{2} u^2 \sigma^2 x^2 V''(x) \right\}$$

Optimizing over $u$ yields the remarkable result:

$$u^* = \frac{\mu - r}{\gamma \sigma^2}$$

**The optimal risky allocation is constant**, independent of wealth and time! Similarly, consumption grows optimally. This simplicity—despite stochasticity—is one of control theory's great insights and explains why constant-proportion strategies underlie real portfolio management.

## Optimal Execution and Market Microstructure

A trader with inventory $Q_t$ must liquidate by time $T$, choosing execution rate $u_t$ (shares/unit time). The value function minimizes:

$$\mathbb{E}\left[\int_0^T (\text{impact}(u_s) + \text{inventory cost}(Q_s)) ds\right]$$

Market impact (permanent and temporary) couples execution speed to realized price; holding risk penalizes slow unwinding. The HJB equation here leads to the [[avellaneda-stoikov|Avellaneda-Stoikov]] and [[almgren-chriss|Almgren-Chriss]] frameworks for [[optimal-execution|optimal execution]], fundamental in algorithmic trading.

## Linear-Quadratic-Gaussian (LQG) Control

When dynamics are linear and costs quadratic, the HJB equation becomes tractable:

$$dX_t = (A X_t + B u_t) dt + \Sigma dW_t$$
$$J = \mathbb{E}\left[\int_0^T (X_t^T Q X_t + u_t^T R u_t) dt + X_T^T G X_T\right]$$

The optimal control is **linear in state**: $u^*(t) = -K(t) X_t$, where $K$ solves a backward **Riccati differential equation**. This forms the foundation of modern control theory and extends to stochastic filtering (Kalman filter).

## Viscosity Solutions and Singular Control

Classical smooth solutions to the HJB equation may not exist. **Viscosity solution** theory (Crandall-Lions) defines generalized solutions that are stable under limits and perturbations. This is essential for [[optimal-stopping-american|American option pricing]], where the value function has a non-smooth boundary (the optimal stopping surface).

When control is **singular** (e.g., impulse actions), the HJB equation is replaced by a **free boundary problem**: the control region and no-control region are separated by a smooth curve determined implicitly.

## Connections to Reinforcement Learning

Infinite-horizon stochastic control, with discounting $e^{-\rho t}$, is precisely the **policy optimization** objective in modern RL. The HJB equation is the continuous-time analog of the **Bellman equation** for discrete Markov decision processes. Temporal-difference (TD) learning and policy gradient methods are approximate solvers for HJB; neural network approximators fit the value function $V$.

The [[reinforcement-learning|RL]] community has recently embraced continuous-time formulations, particularly for robotics and finance, recognizing that stochastic control theory provides both theoretical guarantees and tractable algorithms for high-dimensional problems.

## Further Reading

- **[[feynman-kac|Feynman-Kac formula]]**: Links parabolic PDEs to expectations, foundational for control and option pricing.
- **[[numerical-pde-finance|Numerical PDE methods]]**: Finite difference, finite element, spectral schemes for solving HJB.
- **[[stochastic-differential-equations|Stochastic differential equations]]**: The underlying dynamics.
- **[[markowitz-mean-variance|Markowitz portfolio theory]]**: Static precursor to dynamic Merton optimization.
