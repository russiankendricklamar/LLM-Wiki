---
title: "Sequences, Series & Convergence"
category: "Math Fundamentals"
order: 10
lang: "en"
slug: "sequences-series-convergence"
---

# Sequences, Series & Convergence: The Math of Infinite Approximation

Calculus is the study of limits. Whether we are training a neural network or calculating the value of $\pi$, we are often dealing with sequences of numbers that approach a specific value. Understanding when and how these sequences "settle down" (converge) is vital for numerical stability and algorithm design.

## 1. Sequences and Limits

A **Sequence** $\{a_n\}$ is an ordered list of numbers. We say a sequence **converges** to a limit $L$ if, as $n$ goes to infinity, the terms get arbitrarily close to $L$:
$$\lim_{n \to \infty} a_n = L$$

**In ML**: When we use [[optimization-basics|Gradient Descent]], the sequence of weights $\{w_0, w_1, w_2, \dots\}$ must converge to the optimal weights $w^*$.

## 2. Infinite Series

A **Series** is the sum of the terms of a sequence:
$$S = \sum_{n=1}^\infty a_n$$
A series converges if the sequence of its **partial sums** converges.
- **Geometric Series**: $\sum r^n$ converges if $|r| < 1$. This is used in reinforcement learning to calculate the "discounted return."
- **Harmonic Series**: $\sum \frac{1}{n}$ diverges (goes to infinity), even though the individual terms go to zero.

## 3. Taylor Series: Approximating Functions

A Taylor series allows us to represent a complex function as an infinite sum of polynomials centered at a point $a$:
$$f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(a)}{n!} (x-a)^n$$

### Why it matters in AI
- **Linearization**: Many complex functions in physics and AI are too hard to solve exactly. We use the first two terms of the Taylor series (the **Linear Approximation**) to simplify them.
- **Hessian Intuition**: The second-order Taylor expansion of a loss function gives us the **Hessian**, which tells us about the curvature of the loss surface.

## 4. Radius of Convergence

A power series (like Taylor) only works within a certain distance from the center $a$. This distance is the **Radius of Convergence** ($R$). If $|x-a| > R$, the series explodes to infinity and the approximation fails.

## 5. Convergence in Probability

In statistics and ML, we deal with sequences of *random variables*.
- **Convergence in Distribution**: The shape of the histogram settles down (e.g., [[lln-clt|Central Limit Theorem]]).
- **Convergence in Probability**: The probability that the estimate differs from the true value goes to zero (e.g., Law of Large Numbers).

## Related Topics
[[optimization-basics|Optimization]] — Converging to a minimum  
[[lln-clt|LLN & CLT]] — Convergence of averages  
[[taylor-series|Taylor Series]] — Deeper dive into approximations
