---
title: "Gradient, Hessian, and Jacobian"
category: "Fundamentals"
order: 2
lang: "en"
slug: "gradient-hessian-jacobian"
---

# Gradient, Hessian, and Jacobian

These three operators are the fundamental tools of vector calculus used in optimization, machine learning, and general relativity. They describe the first and second-order local behavior of functions.

## 1. The Gradient ($\nabla f$)

The Gradient is a vector of all first-order partial derivatives of a **scalar** function $f: \mathbb{R}^n \to \mathbb{R}$.
$$\nabla f = \left[ \frac{\partial f}{\partial x_1}, \dots, \frac{\partial f}{\partial x_n} \right]^\top$$
- **Direction**: It points in the direction of steepest ascent.
- **AI Use**: Gradient Descent uses $-\nabla f$ to find local minima of the loss function.

## 2. The Jacobian ($J$)

The Jacobian is a matrix of all first-order partial derivatives of a **vector-valued** function $F: \mathbb{R}^n \to \mathbb{R}^m$.
$$J_{ij} = \frac{\partial F_i}{\partial x_j}$$
- **Linearization**: $J$ is the best linear approximation of a complex non-linear transformation near a point.
- **AI Use**: Backpropagation is essentially a chain of Jacobian-vector products.

## 3. The Hessian ($H$)

The Hessian is a square matrix of second-order partial derivatives of a **scalar** function $f$.
$$H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}$$
- **Curvature**: It describes the local geometry (convexity/concavity) of the landscape.
- **Eigenvalues**: The eigenvalues of the Hessian determine the stability and speed of optimization.
- **AI Use**: Second-order optimizers (like K-FAC or Newton's method) use $H^{-1}$ to take more intelligent steps.

## Comparison Table

| Operator | Input | Output | Order | Information |
| :--- | :--- | :--- | :--- | :--- |
| **Gradient** | Scalar | Vector | 1st | Slope / Direction |
| **Jacobian** | Vector | Matrix | 1st | Linear Transformation |
| **Hessian** | Scalar | Matrix | 2nd | Curvature / Stability |

## Related Topics

[[convex-optimization-trading]] — using Hessian for faster convergence  
[[backpropagation]] — calculating Jacobians automatically  
[[spectral-theorem-unbounded]] — why Hessian eigenvalues matter
---
