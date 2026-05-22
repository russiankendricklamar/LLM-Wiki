---
title: "Positive Definite Matrices"
category: "Math Foundations"
order: 53
lang: "en"
slug: "positive-definite-matrices"
---

# Positive Definite Matrices

A real symmetric matrix $A \in \mathbb{R}^{n \times n}$ is **positive definite (PD)**, denoted as $A \succ 0$, if for every non-zero vector $x \in \mathbb{R}^n$:
$$ x^T A x > 0 $$
If $x^T A x \ge 0$, the matrix is **positive semi-definite (PSD)** ($A \succeq 0$).

## Properties
1. **Eigenvalues:** All eigenvalues of a PD matrix are strictly positive ($\lambda_i > 0$). For a PSD matrix, $\lambda_i \ge 0$.
2. **Invertibility:** Every PD matrix is non-singular and its inverse is also positive definite.
3. **Trace and Determinant:** Because eigenvalues are positive, $\text{Tr}(A) > 0$ and $\det(A) > 0$.
4. **Principal Minors:** By Sylvester's criterion, $A$ is PD iff all its leading principal minors are strictly positive.

## Cholesky Decomposition
Every symmetric positive definite matrix $A$ can be uniquely factored as:
$$ A = L L^T $$
where $L$ is a lower triangular matrix with strictly positive diagonal entries. The Cholesky decomposition is computationally efficient (roughly half the cost of LU decomposition) and is vital in numerical solutions for ordinary least squares and simulating from a [[multivariate-normal-distribution|Multivariate Normal Distribution]].

## Role in Kernels and Optimization
- **Optimization:** A function $f(x)$ is strictly convex if its Hessian $\nabla^2 f(x)$ is positive definite everywhere. This ensures any local minimum is a global minimum.
- **Kernels:** By Mercer's Theorem, a symmetric function $k(x, y)$ is a valid kernel (corresponding to an inner product in some feature space) if and only if its Gram matrix is positive semi-definite for any set of inputs.
