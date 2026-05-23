---
title: "Optimization 101: Gradient Descent & Newton's Method"
category: "Math Fundamentals"
order: 7
lang: "en"
slug: "optimization-basics"
---

# Optimization 101: Training the Machines

Optimization is the process of finding the inputs that minimize (or maximize) a function. In AI, this usually means finding the weights that minimize a **Loss Function**. Most optimization algorithms are iterative: they start with a guess and refine it step-by-step.

## 1. [[convex-optimization|Gradient Descent]]: The First-Order Workhorse

Gradient Descent (GD) is based on the observation that if you want to find the minimum of a function $f(x)$, you should move in the direction of the negative gradient $-\nabla f(x)$.

### The Update Rule
$$x_{t+1} = x_t - \eta \nabla f(x_t)$$
- $\eta$ (eta): The **Learning Rate**. If it's too high, the algorithm overshoots; if too low, it takes forever to converge.

### Variations in ML
- **Stochastic Gradient Descent (SGD)**: Updates parameters using only one random sample at a time. Much faster for large datasets.
- **Adam**: An adaptive optimizer that computes individual learning rates for different parameters based on past gradients.

## 2. Newton's Method: The Second-Order Specialist

Newton's method uses not just the slope (gradient), but also the curvature (the **Hessian** matrix of second derivatives).

### The Update Rule
$$x_{t+1} = x_t - H(x_t)^{-1} \nabla f(x_t)$$
Where $H(x_t)$ is the Hessian matrix.

### Why use it?
- **Convergence**: Newton's method has **quadratic convergence** (it gets to the minimum much faster than GD).
- **No Learning Rate**: In its pure form, it doesn't require a learning rate $\eta$.

### Why avoid it?
- **Computation**: Calculating and inverting the Hessian $H$ is $O(n^3)$. For a neural network with 1 billion parameters, this is impossible.
- **Saddle Points**: Newton's method can be attracted to saddle points (points where the slope is zero but it's not a minimum).

## 3. The Hessian Intuition

The Hessian $H$ tells you how the gradient is changing.
- If $H$ is **Positive Definite**, the function is locally convex (like a bowl).
- The [[spectral-theory-operators|eigenvalues]] of $H$ determine the "sharpness" of the minimum. Large eigenvalues mean the loss surface is very steep in those directions.

## 4. Key Challenges

- **Local Minima**: Getting stuck in a shallow valley instead of the global lowest point.
- **Vanishing/Exploding Gradients**: When gradients become so small or large that updates fail.
- **Conditioning**: If the function is much steeper in one direction than another, GD will oscillate wildly.

## Related Topics
[[gradient-hessian-jacobian|Gradients & Hessians]] — The underlying calculus definitions  
[[convex-optimization|Convex Optimization]] — When we can guarantee finding the global minimum  
[[chain-rule-autodiff|Chain Rule & Auto-Diff]] — How we compute these gradients efficiently
