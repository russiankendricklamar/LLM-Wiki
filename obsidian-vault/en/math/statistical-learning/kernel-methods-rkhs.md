---
title: "Kernel Methods & RKHS"
category: "Statistical Learning"
order: 83
lang: "en"
slug: "kernel-methods-rkhs"
---

# Kernel Methods & Reproducing Kernel Hilbert Spaces (RKHS)

Kernel methods provide a powerful framework for extending linear algorithms to nonlinear settings by implicitly mapping data into a high-dimensional feature space. The mathematical foundation of these methods lies in the theory of Reproducing Kernel Hilbert Spaces (RKHS).

## Reproducing Kernel Hilbert Space

A Hilbert space $\mathcal{H}$ of functions $f : \mathcal{X} \to \mathbb{R}$ is an RKHS if the point evaluation functional $E_x(f) = f(x)$ is continuous for all $x \in \mathcal{X}$. By the Riesz Representation Theorem, there exists a unique element $k_x \in \mathcal{H}$ such that:
$$
f(x) = \langle f, k_x \rangle_{\mathcal{H}} \quad \forall f \in \mathcal{H}
$$
This is the **reproducing property**. We define the kernel function $k : \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ as:
$$
k(x, y) = \langle k_x, k_y \rangle_{\mathcal{H}}
$$
A symmetric function $k(x, y)$ is a reproducing kernel if and only if it is positive semi-definite (Moore-Aronszajn theorem); that is, for any $x_1, \dots, x_n \in \mathcal{X}$ and $c_1, \dots, c_n \in \mathbb{R}$:
$$
\sum_{i=1}^n \sum_{j=1}^n c_i c_j k(x_i, x_j) \geq 0
$$

## Mercer's Theorem

Mercer's theorem formalizes the connection between kernels and integral operators. Let $\mathcal{X}$ be a compact metric space and $k$ a continuous positive semi-definite kernel. Then there exists an orthonormal basis of eigenfunctions $\{\phi_i\}_{i=1}^\infty$ of $L^2(\mathcal{X})$ and non-negative eigenvalues $\{\lambda_i\}_{i=1}^\infty$ such that:
$$
k(x, y) = \sum_{i=1}^\infty \lambda_i \phi_i(x) \phi_i(y)
$$
where the convergence is absolute and uniform. The implicit feature map is thus $\Phi(x) = (\sqrt{\lambda_1} \phi_1(x), \sqrt{\lambda_2} \phi_2(x), \dots)$.

## The Representer Theorem

The Representer Theorem is the cornerstone of practical kernel methods. It states that the minimizer $f^* \in \mathcal{H}$ of a regularized empirical risk functional:
$$
f^* = \arg\min_{f \in \mathcal{H}} \left( \sum_{i=1}^n L(y_i, f(x_i)) + \lambda \|f\|_{\mathcal{H}}^2 \right)
$$
admits a representation as a finite linear combination of the kernel evaluated at the training points:
$$
f^*(x) = \sum_{i=1}^n \alpha_i k(x_i, x)
$$
This theorem reduces an optimization problem over an infinite-dimensional space to a finite-dimensional optimization over $\alpha \in \mathbb{R}^n$, independent of the dimensionality of the feature space.

## Kernel Mean Embeddings

Kernel mean embeddings extend RKHS concepts to probability distributions. The embedding of a distribution $\mathbb{P}$ is defined as the expected feature map:
$$
\mu_{\mathbb{P}} = \mathbb{E}_{X \sim \mathbb{P}}[k(X, \cdot)] \in \mathcal{H}
$$
If the kernel is **characteristic** (e.g., the Gaussian RBF kernel), the embedding is injective: $\mu_{\mathbb{P}} = \mu_{\mathbb{Q}} \iff \mathbb{P} = \mathbb{Q}$. This allows for the computation of the Maximum Mean Discrepancy (MMD) as a metric between distributions:
$$
\text{MMD}^2(\mathbb{P}, \mathbb{Q}) = \|\mu_{\mathbb{P}} - \mu_{\mathbb{Q}}\|_{\mathcal{H}}^2
$$
which can be evaluated efficiently without density estimation.
