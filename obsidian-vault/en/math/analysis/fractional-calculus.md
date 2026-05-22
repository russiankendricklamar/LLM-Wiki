---
title: 'Analysis: Fractional Calculus'
category: Advanced Math and Stats
order: 174
lang: en
slug: fractional-calculus
---

Fractional calculus extends differentiation and integration to real or complex orders.

### Riemann-Liouville Integral
Using the Gamma function $\Gamma(z)$ to generalize factorials, the fractional integral of order $\alpha > 0$ is:
$I^\alpha f(t) = \frac{1}{\Gamma(\alpha)} \int_0^t (t-\tau)^{\alpha-1} f(\tau) d\tau$

### Caputo Derivative
The Caputo fractional derivative of order $\alpha$ (where $n-1 < \alpha < n$) is widely used in physics because it allows standard initial conditions:
$^C D^\alpha f(t) = I^{n-\alpha} \left( \frac{d^n}{dt^n} f(t) \right) = \frac{1}{\Gamma(n-\alpha)} \int_0^t (t-\tau)^{n-\alpha-1} f^{(n)}(\tau) d\tau$
Fractional calculus naturally models systems with "memory" or non-local effects, such as anomalous diffusion, viscoelasticity, and fractional quantum mechanics.
