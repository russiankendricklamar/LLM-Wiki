---
title: "Fixed Point Theorems"
category: "Math Foundations"
order: 57
lang: "en"
slug: "fixed-point-theorems"
---

# Fixed Point Theorems

A fixed point of a function $f: X \to X$ is an element $x \in X$ such that $f(x) = x$. Fixed point theorems provide conditions under which such points are guaranteed to exist (and sometimes be unique).

## Banach Fixed Point Theorem
Also known as the Contraction Mapping Theorem. Let $(X, d)$ be a complete metric space and $f: X \to X$ be a contraction mapping, meaning there exists a constant $L \in [0, 1)$ such that:
$$ d(f(x), f(y)) \le L \cdot d(x, y) \quad \forall x, y \in X $$
**Theorem:** $f$ admits a unique fixed point $x^* \in X$. Furthermore, the sequence $x_{n+1} = f(x_n)$ converges to $x^*$ for any initial $x_0 \in X$.

This is foundational for iterative numerical methods, dynamic programming (Bellman operator), and solving differential equations (Picard-Lindelöf theorem).

## Brouwer Fixed Point Theorem
Let $K$ be a compact, convex, non-empty subset of $\mathbb{R}^n$. Any continuous function $f: K \to K$ has at least one fixed point. 
Unlike Banach's theorem, Brouwer's does not guarantee uniqueness or provide a constructive algorithm to find the point.

## Role in Machine Learning
- **RNN Stability:** In Recurrent Neural Networks, hidden state updates $h_t = \sigma(W h_{t-1} + U x_t)$ can be viewed as iterative maps. If the spectral radius of $W$ is bounded appropriately, the mapping is a contraction, ensuring stability (avoiding exploding gradients).
- **Nash Equilibrium:** Fixed point theorems (specifically Kakutani's generalization of Brouwer's) are used to prove the existence of Nash Equilibria in game theory, which applies directly to Generative Adversarial Networks (GANs).
