---
title: "Matrix Calculus"
category: "Math Foundations"
order: 52
lang: "en"
slug: "matrix-calculus"
---

# Matrix Calculus

Matrix calculus provides a systematic way to compute derivatives of scalars, vectors, and matrices with respect to other vectors and matrices. This is foundational for optimizing loss functions in Machine Learning.

## Layout Conventions
We adopt the **denominator layout** (Hessian is symmetric), which is standard in ML optimization.
Let $y \in \mathbb{R}$ be a scalar, $x \in \mathbb{R}^n$ a vector, and $X \in \mathbb{R}^{m \times n}$ a matrix.
- Gradient of scalar w.r.t. vector: $\nabla_x y \in \mathbb{R}^n$.
- Gradient of scalar w.r.t. matrix: $\nabla_X y \in \mathbb{R}^{m \times n}$.

## Gradients of Quadratic Forms
For a symmetric matrix $A$ and vector $x$:
$$ f(x) = x^T A x \implies \nabla_x (x^T A x) = 2Ax $$
If $A$ is not symmetric, $\nabla_x (x^T A x) = (A + A^T)x$.

## Gradients Involving Traces
The trace operator $\text{Tr}(A) = \sum_{i} A_{ii}$ allows cyclic permutations: $\text{Tr}(ABC) = \text{Tr}(BCA) = \text{Tr}(CAB)$.
Common derivatives:
1. $\nabla_X \text{Tr}(A X) = A^T$
2. $\nabla_X \text{Tr}(X^T A X) = (A + A^T)X$
3. $\nabla_X \text{Tr}(X^T X) = 2X$ (Frobenius norm squared derivative)

## Gradients Involving Determinants
For a square invertible matrix $X$:
$$ \nabla_X \ln \det(X) = X^{-T} = (X^{-1})^T $$
$$ \nabla_X \det(X) = \det(X) X^{-T} $$
These identities are crucial for deriving update equations in [[em-algorithm|The EM Algorithm]] for [[gmm|Gaussian Mixture Models]] and maximum likelihood estimation of the [[multivariate-normal-distribution|Multivariate Normal Distribution]].
