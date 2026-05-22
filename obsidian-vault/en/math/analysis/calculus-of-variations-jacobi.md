---
title: 'Calculus of Variations: Second Variation'
category: Advanced Math and Stats
order: 173
lang: en
slug: calculus-of-variations-jacobi
---

While the Euler-Lagrange equations provide necessary conditions for an extremum (first variation vanishes), sufficient conditions require analyzing the second variation.

### The Second Variation
For a functional $J[y] = \int_a^b L(x, y, y') dx$, the second variation at an extremal $y(x)$ with perturbation $h(x)$ is:
$\delta^2 J = \int_a^b (P h'^2 + Q h^2) dx$
where $P = \frac{1}{2} L_{y'y'}$ and $Q = \frac{1}{2} (L_{yy} - \frac{d}{dx} L_{yy'})$.

### Jacobi Fields and Conjugate Points
Legendre's condition requires $P > 0$ strictly. The Jacobi equation is the Euler-Lagrange equation of the second variation:
$-\frac{d}{dx}(P h') + Q h = 0$
A point $c \in (a, b]$ is conjugate to $a$ if there is a non-trivial solution $h(x)$ vanishing at $a$ and $c$. Jacobi's condition states that for a strong local minimum, there must be no conjugate points to $a$ in the interval $(a, b]$.
