---
title: Stochastic Maximum Principle
category: Stochastic Calculus
order: 155
lang: en
slug: stochastic-maximum-principle
---

# Stochastic Maximum Principle

The Stochastic Maximum Principle (SMP) extends Pontryagin's maximum principle to stochastic systems, providing necessary conditions for optimality in [[stochastic-control]] problems.

## Hamiltonian and Adjoint Equations

Consider the controlled SDE:
$$ dX_t = b(t, X_t, u_t) dt + \sigma(t, X_t, u_t) dW_t $$
with cost functional $J(u) = \mathbb{E}\left[ \int_0^T f(t, X_t, u_t) dt + g(X_T) \right]$.

The Hamiltonian is defined as:
$$ H(t, x, u, p, q) = p \cdot b(t, x, u) + \text{Tr}(q^T \sigma(t, x, u)) + f(t, x, u) $$

The adjoint equations (a pair of [[bsdes]]) are:
$$ dp_t = -\nabla_x H(t, X_t, u_t, p_t, q_t) dt + q_t dW_t, \quad p_T = \nabla_x g(X_T) $$

## Maximum Principle

If $u^*$ is an optimal control, then almost surely for almost every $t$:
$$ H(t, X_t^*, u_t^*, p_t, q_t) = \max_{v \in U} H(t, X_t^*, v, p_t, q_t) $$

## Comparison with HJB

While the Hamilton-Jacobi-Bellman (HJB) equation relies on dynamic programming and requires the value function to be a solution to a nonlinear PDE, the SMP relies on adjoint BSDEs and only explores trajectories starting from a specific initial state. The two approaches are linked via the relation $p_t = \nabla_x V(t, X_t^*)$ when the value function $V$ is smooth.
