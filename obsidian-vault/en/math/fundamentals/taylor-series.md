---
title: "Taylor Series and Approximation"
category: "Fundamentals"
order: 3
lang: "en"
slug: "taylor-series"
---

# Taylor Series: The Art of Polynomial Approximation

The **Taylor Series** is a representation of a function as an infinite sum of terms calculated from the values of its derivatives at a single point. It is the most powerful tool in numerical analysis, allowing us to turn complex transcendental functions (like $\sin x$, $e^x$, or $\ln x$) into simple, computable polynomials.

## 1. The Taylor Formula

If a function $f(x)$ is infinitely differentiable at a point $a$, its Taylor series is:
$$ f(x) = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots $$
In sigma notation:
$$ f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n $$
When $a = 0$, the series is specifically called a **Maclaurin Series**.

## 2. Intuition: Local Linearization and Beyond

- **0th Order**: $f(x) \approx f(a)$. The simplest guess (a constant).
- **1st Order (Linear)**: $f(x) \approx f(a) + f'(a)(x-a)$. This is the **Tangent Line**. It captures the direction of the function.
- **2nd Order (Quadratic)**: Adds $\frac{f''(a)}{2}(x-a)^2$. It captures the **Curvature** (concavity/convexity).

## 3. Important Expansions to Memorize

Around $x=0$:
1.  **Exponential**: $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$ (converges everywhere).
2.  **Sine**: $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$
3.  **Geometric**: $\frac{1}{1-x} = 1 + x + x^2 + x^3 + \dots$ (only for $|x| < 1$).

## 4. Why it Matters in Physics and AI

### A. Small Angle Approximation
In physics, we often use $\sin \theta \approx \theta$ for small $\theta$. This is simply the 1st-order Taylor expansion. It allows for the analytical solution of pendulums and wave equations.

### B. Euler's Identity
By plugging $ix$ into the Taylor series for $e^x$ and grouping real/imaginary parts, we derive:
$$ e^{ix} = \cos x + i \sin x $$
This is the bridge between calculus and complex analysis.

### C. Optimization
In Machine Learning, we often look at the **Second-order Taylor expansion** of the Loss function to understand its geometry:
$$ L(\theta) \approx L(\theta_0) + \nabla L^T \Delta \theta + \frac{1}{2} \Delta \theta^T \mathbf{H} \Delta \theta $$
where $\mathbf{H}$ is the [[multivariable-calculus|Hessian Matrix]].

## 5. Remainder and Convergence

A Taylor series is only useful if it converges. The **Taylor Polynomial of degree $n$** is the sum of the first $n$ terms. The error (Remainder) $R_n(x) = f(x) - P_n(x)$ tells us how accurate our approximation is. According to Taylor's Theorem, for $x$ close to $a$, the error decreases as we add more terms.

## Related Topics

[[linear-spaces-basis]] — linear maps as 1st-order approximations  
[[multivariable-calculus]] — Jacobians and Hessians  
[[black-scholes]] — using Taylor expansion (Itô's Lemma) for Greeks
---
