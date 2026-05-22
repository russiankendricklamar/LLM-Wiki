---
title: "Inner Product Spaces & Norms"
category: "Math Foundations"
order: 51
lang: "en"
slug: "inner-product-spaces-norms"
---

# Inner Product Spaces & Norms

In functional analysis and linear algebra, an **inner product space** is a vector space $V$ over a field $\mathbb{F}$ (usually $\mathbb{R}$ or $\mathbb{C}$) equipped with an inner product $\langle \cdot, \cdot \rangle$.

## $L_p$ Norms
For a vector $x \in \mathbb{R}^n$, the $L_p$ norm is defined as:
$$ \|x\|_p = \left( \sum_{i=1}^n |x_i|^p \right)^{1/p} $$
where $p \ge 1$. Important special cases include:
- **$L_1$ Norm (Manhattan distance):** $\|x\|_1 = \sum |x_i|$, which induces sparsity in optimization.
- **$L_2$ Norm (Euclidean norm):** $\|x\|_2 = \sqrt{\sum x_i^2}$, uniquely induced by the standard inner product $\|x\|_2 = \sqrt{\langle x, x \rangle}$.
- **$L_\infty$ Norm (Chebyshev norm):** $\|x\|_\infty = \max_i |x_i|$.

## Frobenius Norm
For a matrix $A \in \mathbb{R}^{m \times n}$, the Frobenius norm is the matrix equivalent of the $L_2$ vector norm:
$$ \|A\|_F = \sqrt{\sum_{i=1}^m \sum_{j=1}^n |a_{ij}|^2} = \sqrt{\text{Tr}(A^T A)} $$
It is sub-multiplicative and heavily used in matrix approximations (e.g., [[pca-math|PCA]] and [[eigendecomposition-vs-svd|SVD]]).

## Dual Norms
Given a norm $\|\cdot\|$, its dual norm $\|\cdot\|_*$ is defined as:
$$ \|z\|_* = \sup_{x : \|x\| \le 1} z^T x $$
By Hölder's inequality, the dual of the $L_p$ norm is the $L_q$ norm where $\frac{1}{p} + \frac{1}{q} = 1$. Consequently, the dual of $L_1$ is $L_\infty$, and $L_2$ is self-dual. Dual norms are critical in constrained optimization, particularly in formulating [[kkt-conditions|KKT conditions]] and robust optimization objectives.
