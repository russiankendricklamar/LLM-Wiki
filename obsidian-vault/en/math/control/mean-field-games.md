---
title: "Mean Field Games"
category: "Analysis & Geometry"
order: 85
lang: "en"
slug: "mean-field-games"
---

# Mean Field Games

Mean Field Games (MFG) theory studies strategic decision-making in large populations of small, interacting agents. Introduced by Lasry and Lions (and independently by Huang, Caines, and Malhamé), it extends the concept of mean-field approximations from statistical mechanics to dynamic stochastic differential games.

## Mathematical Formulation

Consider a game with $N \to \infty$ agents. The state $X_t^i \in \mathbb{R}^d$ of agent $i$ evolves according to a controlled stochastic differential equation:
$$
dX_t^i = \alpha_t^i dt + \sqrt{2\nu} dW_t^i
$$
where $\alpha_t^i \in \mathbb{R}^d$ is the control chosen by agent $i$, $W_t^i$ are independent Brownian motions, and $\nu > 0$ is the noise intensity.

Each agent seeks to minimize a cost functional over a finite horizon $[0, T]$:
$$
J^i(\alpha) = \mathbb{E} \left[ \int_0^T \left( L(X_t^i, \alpha_t^i) + F(X_t^i, m_t) \right) dt + G(X_T^i, m_T) \right]
$$
where $L$ is the running cost of the control (often $\frac{1}{2}|\alpha|^2$), $F$ is the running cost depending on the empirical distribution $m_t$ of all agents, and $G$ is the terminal cost.

## The MFG System

In the mean-field limit, the empirical distribution $m_t$ is deterministic due to the Law of Large Numbers. A representative agent faces an optimal control problem against a known flow of probability measures $m(t, x)$. The value function $u(t, x)$ of this agent satisfies the **Hamilton-Jacobi-Bellman (HJB) equation**:
$$
-\partial_t u - \nu \Delta u + H(x, \nabla u) = F(x, m(t, x))
$$
with terminal condition $u(T, x) = G(x, m(T, x))$. The Hamiltonian is defined via the Legendre transform: $H(x, p) = \sup_\alpha \{ -p \cdot \alpha - L(x, \alpha) \}$.

Given the value function, the optimal control is $\alpha^*(t, x) = -H_p(x, \nabla u)$. Assuming all agents act optimally, the density $m(t, x)$ evolves according to the **Fokker-Planck (Kolmogorov forward) equation**:
$$
\partial_t m - \nu \Delta m - \nabla \cdot (m H_p(x, \nabla u)) = 0
$$
with initial condition $m(0, x) = m_0(x)$.

The coupled system of the backward HJB equation and the forward Fokker-Planck equation forms the core of MFG theory:
$$
\begin{cases}
-\partial_t u - \nu \Delta u + H(x, \nabla u) = F(x, m) \\
\partial_t m - \nu \Delta m - \nabla \cdot (m H_p(x, \nabla u)) = 0
\end{cases}
$$

## Variational Structure

When the coupling costs are potential, i.e., $F(x, m) = \frac{\delta \mathcal{F}}{\delta m}(m)$ and $G(x, m) = \frac{\delta \mathcal{G}}{\delta m}(m)$ for some functionals $\mathcal{F}$ and $\mathcal{G}$, the MFG system can be cast as an infinite-dimensional optimal control problem. This variational structure implies that the equilibria correspond to the critical points of a social cost functional, providing deep connections to optimal transport theory and allowing for efficient numerical solutions via optimization.
