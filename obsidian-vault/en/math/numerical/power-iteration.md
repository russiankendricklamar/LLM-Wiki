---
title: Power Iteration
category: Numerical Methods
order: 100
lang: en
slug: power-iteration
---

## Overview
Power iteration is an eigenvalue algorithm that finds the dominant eigenvalue and its corresponding eigenvector.

## Algorithm
Given a diagonalizable matrix $A$, start with a random vector $b_0$. Iteratively update:
$$ b_{k+1} = \frac{A b_k}{\|A b_k\|} $$
The sequence $b_k$ converges to the eigenvector associated with the largest absolute eigenvalue. The eigenvalue can be found via the Rayleigh quotient:
$$ \lambda \approx \frac{b_k^T A b_k}{b_k^T b_k} $$