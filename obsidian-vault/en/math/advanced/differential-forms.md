---
title: Differential Forms & Exterior Calculus
category: Advanced Theory
order: 147
lang: en
slug: differential-forms
---

Differential forms provide a coordinate-free approach to multivariable calculus and integration on manifolds.

### Wedge Product
The space of $k$-forms $\Omega^k(M)$ uses the associative and alternating wedge product $\wedge$. For a 1-form $dx^i \wedge dx^j = -dx^j \wedge dx^i$. Consequently, $dx^i \wedge dx^i = 0$.

### Exterior Derivative
The exterior derivative $d: \Omega^k(M) \to \Omega^{k+1}(M)$ satisfies $d^2 = 0$. For a $k$-form $\omega$, $d\omega$ generalizes grad, curl, and div. A form is **closed** if $d\omega = 0$ and **exact** if $\omega = d\eta$. De Rham cohomology measures the obstruction to closed forms being exact.

### Generalized Stokes' Theorem
The pinnacle is the elegant integration formula:
$\int_M d\omega = \int_{\partial M} \omega$
where $M$ is an oriented manifold and $\partial M$ is its boundary. This beautifully unifies the fundamental theorem of calculus, Green's, Stokes', and Divergence theorems.
