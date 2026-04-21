---
title: "Kernel Methods and RKHS"
category: "Statistical Learning"
order: 2
lang: "en"
slug: "kernel-methods-rkhs"
---

# Kernel Methods and RKHS

Kernel methods are a class of algorithms for pattern analysis, the best known of which is the **Support Vector Machine (SVM)**. They allow us to operate in a high-dimensional, implicit feature space without ever computing the coordinates of the data in that space. This is made mathematically rigorous through the theory of **Reproducing Kernel Hilbert Spaces (RKHS)**.

## The Kernel Trick

Given data $x \in \mathcal{X}$, we want to learn a non-linear function. We map the data into a feature space $\mathcal{H}$ via a map $\phi: \mathcal{X} \to \mathcal{H}$. A linear function in $\mathcal{H}$ corresponds to a non-linear function in $\mathcal{X}$. 

The "trick" is that if we only need to compute inner products $\langle \phi(x), \phi(x') \rangle_\mathcal{H}$, we can replace them with a **kernel function** $k(x, x')$.

## Reproducing Kernel Hilbert Space (RKHS)

A Hilbert space $\mathcal{H}$ of functions $f: \mathcal{X} \to \mathbb{R}$ is an RKHS if the evaluation functional $L_x(f) = f(x)$ is continuous for all $x \in \mathcal{X}$. By the Riesz Representation Theorem, this implies there exists a unique element $k_x \in \mathcal{H}$ such that:
$$f(x) = \langle f, k_x \rangle_\mathcal{H}$$
This is the **reproducing property**. The kernel is $k(x, x') = \langle k_x, k_{x'} \rangle_\mathcal{H}$.

## The Representer Theorem

The Representer Theorem (Kimeldorf & Wahba, 1970) provides the functional foundation for kernel methods. It states that for any empirical risk minimization problem:
$$\min_{f \in \mathcal{H}} \sum_{i=1}^n L(y_i, f(x_i)) + \lambda \|f\|_\mathcal{H}^2$$
the optimal solution $f^*$ has a finite-dimensional representation:
$$f^*(x) = \sum_{i=1}^n \alpha_i k(x, x_i)$$
This is profound: even though $\mathcal{H}$ might be infinite-dimensional (like for the RBF kernel), the optimal function is always a linear combination of kernels centered at the training points.

## Mercer's Theorem

Mercer's Theorem explains when a function $k(x, x')$ is a valid kernel. It must be symmetric and positive semi-definite (PSD), meaning the **Gram matrix** $K_{ij} = k(x_i, x_j)$ is PSD for any set of points.

## Common Kernels

1.  **Linear**: $k(x, x') = x^\top x'$
2.  **Polynomial**: $k(x, x') = (x^\top x' + c)^d$
3.  **Gaussian (RBF)**: $k(x, x') = \exp(-\frac{\|x - x'\|^2}{2\sigma^2})$. This corresponds to an **infinite-dimensional** feature space.

## Visualization: Kernel Mapping

```chart
{
  "type": "scatter",
  "xAxis": "x",
  "data": [
    {"x": -2, "phi_x": 4, "label": "Class A"},
    {"x": -1, "phi_x": 1, "label": "Class A"},
    {"x": 0, "phi_x": 0, "label": "Class B"},
    {"x": 1, "phi_x": 1, "label": "Class A"},
    {"x": 2, "phi_x": 4, "label": "Class A"}
  ],
  "lines": [
    {"dataKey": "phi_x", "stroke": "#3b82f6", "name": "Feature Map φ(x) = x²"}
  ]
}
```
*In 1D, Class A and B are not linearly separable. By mapping $x \to x^2$ (a simple kernel), they become perfectly separable by a straight line in the feature space.*

## Related Topics

[[functional-analysis]] — the Hilbert space background  
[[gaussian-processes]] — Bayesian view of kernel methods  
[[neural-tangent-kernel]] — connecting kernels to deep learning
---
