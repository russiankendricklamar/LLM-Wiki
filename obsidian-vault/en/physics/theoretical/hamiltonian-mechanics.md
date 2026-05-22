---
title: Hamiltonian Mechanics & Poisson Brackets
category: Advanced Theory
order: 144
lang: en
slug: hamiltonian-mechanics
---

Hamiltonian mechanics transitions from configuration space $(q, \dot{q})$ to phase space $(q, p)$ via a Legendre transformation.

### The Hamiltonian
Conjugate momenta are defined as $p_i = \frac{\partial L}{\partial \dot{q}_i}$. The Hamiltonian is:
$H(\mathbf{q}, \mathbf{p}, t) = \sum_i p_i \dot{q}_i - L(\mathbf{q}, \dot{\mathbf{q}}, t)$
Hamilton's equations of motion form a symplectic flow:
$\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}$

### Poisson Brackets
The time evolution of any observable $f(\mathbf{q}, \mathbf{p}, t)$ is governed by the Poisson bracket:
$\frac{df}{dt} = \{f, H\} + \frac{\partial f}{\partial t}$
where $\{f, g\} = \sum_i \left( \frac{\partial f}{\partial q_i}\frac{\partial g}{\partial p_i} - \frac{\partial f}{\partial p_i}\frac{\partial g}{\partial q_i} \right)$.
In quantum mechanics, Dirac replaced Poisson brackets with commutators: $\{f, g\} \to \frac{1}{i\hbar} [\hat{F}, \hat{G}]$, founding canonical quantization.
