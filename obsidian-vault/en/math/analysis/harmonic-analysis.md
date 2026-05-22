---
title: 'Harmonic Analysis: Fourier Convergence'
category: Advanced Math and Stats
order: 171
lang: en
slug: harmonic-analysis
---

Harmonic analysis expands functions into superpositions of fundamental waves.

### Fourier Series
For a $2\pi$-periodic function $f \in L^1([-\pi, \pi])$, the Fourier coefficients are:
$\hat{f}(n) = \frac{1}{2\pi} \int_{-\pi}^\pi f(x) e^{-inx} dx$
The series is $\sum_{n=-\infty}^\infty \hat{f}(n) e^{inx}$.

### Convergence Theorems
- **$L^2$ Convergence:** By Parseval's identity and Riesz-Fischer, if $f \in L^2$, the series converges to $f$ in the $L^2$ norm.
- **Pointwise Convergence (Dirichlet/Jordan):** If $f$ is of bounded variation, the series converges pointwise to $\frac{f(x^+) + f(x^-)}{2}$.
- **Carleson's Theorem:** A profound result stating that the Fourier series of any $L^2$ function converges almost everywhere (a.e.).
