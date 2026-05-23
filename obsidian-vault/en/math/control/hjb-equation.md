---
title: Hamilton-Jacobi-Bellman (HJB) Equation
category: Analysis & Geometry
order: 43
lang: en
slug: hjb-equation
---

# Hamilton-Jacobi-Bellman (HJB) Equation

The Hamilton-Jacobi-Bellman (HJB) equation is a partial differential equation (PDE) that is central to optimal control theory and continuous-time [[deep-rl-execution|Reinforcement Learning]]. It provides the necessary and sufficient conditions for optimality of a control strategy with respect to a loss function.

## Mathematical Formulation

Consider a continuous-time dynamical system governed by the stochastic differential equation ([[stochastic-differential-equations|SDE]]):

$$
dx_t = f(x_t, u_t, t)dt + \sigma(x_t, u_t, t)dW_t
$$

where $x_t \in \mathbb{R}^n$ is the state, $u_t \in U \subset \mathbb{R}^m$ is the control input, and $W_t$ is a standard Wiener process.

The objective is to minimize the expected cost functional from time $t$ to $T$:

$$
V(x, t) = \min_{u_{[t, T]}} \mathbb{E} \left[ \int_{t}^{T} L(x_s, u_s, s)ds + \Phi(x_T) \Big| x_t = x 
ight]
$$

where $V(x, t)$ is the value function, $L$ is the running cost, and $\Phi$ is the terminal cost.

### Derivation using Bellman's Principle of Optimality

By applying Itô's Lemma to $V(x_t, t)$ and utilizing Bellman's Principle of Optimality, we derive the continuous-time HJB equation:

$$
-rac{\partial V(x, t)}{\partial t} = \min_{u \in U} \left\{ L(x, u, t) + 
abla_x V(x, t)^T f(x, u, t) + rac{1}{2} 	ext{Tr}\left( \sigma(x, u, t) \sigma(x, u, t)^T 
abla_{xx}^2 V(x, t) 
ight) 
ight\}
$$

with the terminal condition $V(x, T) = \Phi(x)$.

## Relation to the Hamiltonian

We can define the Hamiltonian $H$ as:

$$
H(x, u, p, P, t) = L(x, u, t) + p^T f(x, u, t) + rac{1}{2} 	ext{Tr}\left( \sigma(x, u, t) \sigma(x, u, t)^T P 
ight)
$$

where $p = 
abla_x V$ and $P = 
abla_{xx}^2 V$. The HJB equation then becomes:

$$
-rac{\partial V}{\partial t} = \min_{u \in U} H(x, u, 
abla_x V, 
abla_{xx}^2 V, t)
$$

## Viscosity Solutions

Because the value function $V(x, t)$ might not be everywhere differentiable, classical solutions to the HJB PDE do not always exist. The concept of *viscosity solutions*, introduced by Crandall and Lions, extends the definition of solutions to continuous functions, making HJB practically applicable for almost all control problems.
