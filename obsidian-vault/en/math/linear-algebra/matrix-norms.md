---
title: Matrix Norms
category: Linear Algebra
order: 116
lang: en
slug: matrix-norms
---

## Overview
A matrix norm extends the notion of a vector norm to matrices.

## Induced Norms
Induced norms are derived from vector norms:
$$ \|A\|_p = \sup_{\|x\|_p = 1} \|Ax\|_p $$
- $\|A\|_1$: maximum absolute column sum.
- $\|A\|_{\infty}$: maximum absolute row sum.
- $\|A\|_2$: the largest singular value of $A$ ($\sigma_{max}$).

## Frobenius Norm
$$ \|A\|_F = \sqrt{\sum_{i=1}^m \sum_{j=1}^n |a_{ij}|^2} = \sqrt{\text{Tr}(A^* A)} $$