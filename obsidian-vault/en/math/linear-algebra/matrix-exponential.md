---
title: Matrix Exponential
category: Linear Algebra
order: 120
lang: en
slug: matrix-exponential
---

## Overview
The matrix exponential is a matrix function defined analogously to the ordinary exponential function.

## Definition
For an $n \times n$ matrix $A$:
$$ e^A = I + A + \frac{A^2}{2!} + \frac{A^3}{3!} + \dots = \sum_{k=0}^{\infty} \frac{A^k}{k!} $$
It is heavily used in solving systems of linear differential equations $y' = Ay$, where the solution is $y(t) = e^{At} y(0)$.