---
title: Lagrangian Mechanics & Euler-Lagrange
category: Advanced Theory
order: 143
lang: en
slug: lagrangian-mechanics
---

Lagrangian mechanics reframes classical mechanics using the principle of stationary action, avoiding explicit constraint forces.

### The Action Principle
The action $\mathcal{S}$ is a functional of the trajectory $\mathbf{q}(t)$:
$\mathcal{S}[\mathbf{q}] = \int_{t_1}^{t_2} L(\mathbf{q}, \dot{\mathbf{q}}, t) \, dt$
where the Lagrangian $L = T - V$ is the difference between kinetic and potential energy. Hamilton's Principle states that the true path renders $\mathcal{S}$ stationary ($\delta \mathcal{S} = 0$).

### Euler-Lagrange Equations
Using the calculus of variations, setting the first variation of the action to zero yields:
$\frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}_i} \right) - \frac{\partial L}{\partial q_i} = 0 \quad \text{for } i=1, \dots, n$
This generalizes beautifully to field theory, where $L$ becomes a Lagrangian density $\mathcal{L}(\phi, \partial_\mu \phi)$. Noether's theorem directly ties symmetries of $L$ to conserved quantities.
