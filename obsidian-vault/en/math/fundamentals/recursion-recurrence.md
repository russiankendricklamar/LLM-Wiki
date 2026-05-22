---
title: 'Discrete Math: Recursion & Recurrence'
category: Math Foundations
order: 73
lang: en
slug: recursion-recurrence
---

Recurrence relations define a sequence based on previous terms.

### Fibonacci Sequence
The classic example is the Fibonacci sequence:
$F_n = F_{n-1} + F_{n-2}$
Solving this explicitly requires finding the roots of its characteristic equation, $r^2 - r - 1 = 0$, leading to Binet's formula. We can also use [[generating-functions|Generating Functions]].

### Master Theorem
In algorithm analysis, the **Master Theorem** provides asymptotic bounds for divide-and-conquer recurrences of the form:
$T(n) = a T\left(\frac{n}{b}\right) + f(n)$
Depending on how $f(n)$ compares to $n^{\log_b a}$, $T(n)$ is bound by:
1. $\Theta(n^{\log_b a})$ if $f(n)$ is polynomially smaller.
2. $\Theta(n^{\log_b a} \log n)$ if $f(n) \approx n^{\log_b a}$.
3. $\Theta(f(n))$ if $f(n)$ is polynomially larger.

These bounds are foundational for [[formal-proof-techniques|Proof Techniques]] in complexity.
