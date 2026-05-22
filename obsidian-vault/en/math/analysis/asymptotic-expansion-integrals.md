---
title: Asymptotic Analysis of Integrals
category: Advanced Analysis
order: 46
lang: en
slug: asymptotic-expansion-integrals
---

# Asymptotic Analysis of Integrals

The asymptotic evaluation of integrals is crucial in statistical physics, partition functions, and Bayesian scaling laws for large models. Key techniques include Laplace's method, the Method of Stationary Phase, and the Method of Steepest Descent (Saddle-point method).

## Laplace's Method

Laplace's method approximates integrals of the form:

$$
I(\lambda) = \int_{a}^{b} f(x) e^{-\lambda g(x)} dx
$$

as $\lambda 	o \infty$. The dominant contribution comes from the global minimum of $g(x)$. Suppose $g(x)$ attains its unique minimum at $x_0 \in (a, b)$, with $g'(x_0) = 0$ and $g''(x_0) > 0$. 

Taylor expanding $g(x)$ around $x_0$:

$$
g(x) pprox g(x_0) + rac{1}{2} g''(x_0) (x - x_0)^2
$$

Substituting this into the integral yields a Gaussian integral:

$$
I(\lambda) pprox e^{-\lambda g(x_0)} f(x_0) \int_{-\infty}^{\infty} e^{-rac{\lambda}{2} g''(x_0) (x - x_0)^2} dx
$$

Evaluating the Gaussian integral gives the first-order asymptotic approximation:

$$
I(\lambda) \sim f(x_0) e^{-\lambda g(x_0)} \sqrt{rac{2\pi}{\lambda g''(x_0)}} \quad 	ext{as } \lambda 	o \infty
$$

## Method of Stationary Phase

For highly oscillatory integrals, we use the method of stationary phase:

$$
I(\lambda) = \int_{a}^{b} f(x) e^{i \lambda g(x)} dx
$$

As $\lambda 	o \infty$, the rapid oscillations cancel out the integral everywhere except at points where the phase is stationary, i.e., $g'(x_0) = 0$. Using a similar expansion:

$$
I(\lambda) \sim f(x_0) e^{i \lambda g(x_0)} \sqrt{rac{2\pi}{\lambda |g''(x_0)|}} e^{i rac{\pi}{4} 	ext{sgn}(g''(x_0))}
$$

## The Saddle-Point Method (Method of Steepest Descent)

When $g(z)$ is a complex-analytic function, we deform the contour of integration in the complex plane to pass through the saddle points (where $g'(z) = 0$) along paths of steepest descent. By Cauchy's Integral Theorem, the integral along the new contour equals the original integral.

Along the steepest descent path, $	ext{Im}(g(z))$ is constant, converting the highly oscillatory integral into a Laplace-type integral, which can then be evaluated precisely.
