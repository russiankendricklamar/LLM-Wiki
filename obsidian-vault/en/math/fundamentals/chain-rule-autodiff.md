---
title: "The Chain Rule & Auto-Diff Foundations"
category: "Math Fundamentals"
order: 3
lang: "en"
slug: "chain-rule-autodiff"
---

# The Chain Rule & Auto-Diff: The Engine of Deep Learning

Behind every modern AI "learning" something lies a single mathematical principle: the **Chain Rule**. When we talk about **Backpropagation**, we are really talking about the efficient application of the chain rule to compute gradients across millions of parameters.

## 1. The Single Variable Chain Rule

If $y = f(u)$ and $u = g(x)$, then the derivative of $y$ with respect to $x$ is:
$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$
Essentially, the rate of change of the output is the product of the rates of change of each intermediate step.

## 2. Multivariable Chain Rule

In neural networks, functions have thousands of inputs. If $z = f(x, y)$ and $x, y$ both depend on $t$, then:
$$\frac{dz}{dt} = \frac{\partial z}{\partial x}\frac{dx}{dt} + \frac{\partial z}{\partial y}\frac{dy}{dt}$$
In vector notation, for a function $f: \mathbb{R}^n \to \mathbb{R}$ where $x = g(t)$:
$$\nabla_t f(g(t)) = J_g(t)^T \nabla_x f(x)$$
Where $J_g$ is the **Jacobian** matrix of partial derivatives.

## 3. Automatic Differentiation (Auto-Diff)

Auto-diff is not symbolic differentiation (like Mathematica) nor numerical differentiation (using small $\epsilon$). It is a way to compute derivatives exactly by decomposing programs into elementary operations.

### Reverse Mode vs. Forward Mode
1. **Forward Mode**: Computes $\frac{\partial \text{outputs}}{\partial \text{single input}}$. Good for functions with few inputs and many outputs.
2. **Reverse Mode (Backprop)**: Computes $\frac{\partial \text{single output}}{\partial \text{all inputs}}$. This is what we use in ML because our "single output" is the **Loss Function**, and we have millions of "inputs" (weights).

## 4. The Computational Graph

To perform Reverse-Mode Auto-Diff:
1. **Forward Pass**: Compute the value of the function, saving intermediate values (the "cache").
2. **Backward Pass**: Apply the chain rule starting from the output, moving backward through the graph to compute gradients for every node.

**Example**:
- $z = x \cdot y + \sin(x)$
- Forward: $a = x \cdot y$, $b = \sin(x)$, $z = a + b$.
- Backward: $\frac{\partial z}{\partial z} = 1$, then $\frac{\partial z}{\partial a} = 1$, $\frac{\partial z}{\partial b} = 1$, then $\frac{\partial z}{\partial x} = \frac{\partial z}{\partial a}\frac{\partial a}{\partial x} + \frac{\partial z}{\partial b}\frac{\partial b}{\partial x} = y + \cos(x)$.

## 5. Why it Matters in AI

- **Efficiency**: Backpropagation allows us to compute gradients for *all* weights in a single backward pass, with the same computational cost as the forward pass (roughly 2-3x).
- **Optimization**: Without the chain rule, we couldn't use [[optimization-basics|Gradient Descent]] to update weights.

## Related Topics
[[gradient-hessian-jacobian|Gradients & Jacobians]] — The vector calculus definitions  
[[optimization-basics|Optimization]] — Using these gradients to learn  
[[backpropagation|Backpropagation]] — The algorithm implementation in detail
