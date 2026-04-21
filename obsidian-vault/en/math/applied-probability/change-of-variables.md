---
title: "Change of Variables"
category: "Applied Probability"
order: 8
lang: "en"
slug: "change-of-variables"
---

# Change of Variables: The Geometry of Probability

The Change of Variables technique is a fundamental tool for finding the probability density of a transformed random variable. If you know the distribution of $X$, and you apply a function $Y = g(X)$, the Change of Variables formula tells you the distribution of $Y$. This is the basis for **Generative AI** (VAEs, GANs, Normalizing Flows).

## 1. The 1D Case

For a strictly monotonic and differentiable function $g(x)$, if $Y = g(X)$, then the density of $Y$ is:
$$f_Y(y) = f_X(g^{-1}(y)) \cdot \left| \frac{d}{dy} g^{-1}(y) \right|$$

- **Intuition**: The first term accounts for the probability "mass" moving from $x$ to $y$. The second term (the derivative) is the **Scaling Factor**: it accounts for how much the function $g$ stretches or compresses the space. If the space is compressed, the density must rise to keep the total probability equal to 1.

## 2. The Multivariate Case (The Jacobian)

In multiple dimensions, where $Y = G(X)$ and $X, Y \in \mathbb{R}^n$, the scaling factor is the determinant of the **[[gradient-hessian-jacobian|Jacobian Matrix]]**:
$$f_Y(\mathbf{y}) = f_X(G^{-1}(\mathbf{y})) \cdot \left| \det \mathbf{J}_{G^{-1}}(\mathbf{y}) \right|$$

This formula is the heart of **Normalizing Flows** (a class of generative models). By applying a sequence of simple, invertible transformations with easy-to-calculate Jacobians, we can transform a simple Gaussian distribution into a highly complex distribution (like the pixels of a face).

## 3. Key Applications

### A. The Box-Muller Transform
How do computers generate Gaussian noise? They start with a Uniform distribution $U[0, 1]$ and apply a Change of Variables:
$$Z = \sqrt{-2 \ln U_1} \cos(2\pi U_2)$$
The Jacobian of this transformation ensures that the output $Z$ is perfectly normally distributed.

### B. Log-Normal Distribution
In finance, if we assume log-returns are normal ($X \sim \mathcal{N}$), then the price $Y = e^X$ follows a **Log-Normal** distribution. The Change of Variables formula provides the exact PDF for stock prices used in the [[black-scholes]] model.

### C. Differential Entropy
The entropy of a distribution (see [[shannon-entropy]]) changes under a change of variables. If you stretch a distribution, its entropy increases by $\ln |\det J|$. This relationship is vital for **Mutual Information** estimation in machine learning.

## Visualization: Stretching the Density

```mermaid
graph LR
    X[Input X: Flat Uniform] -->|g(x) = x^2| Y[Output Y: Skewed]
    X -->|Area dx| Y
    Y -->|Stretched dy| X
    Note[Density Y = Density X / g']
```
*If $g(x)$ is very steep, it spreads the probability mass over a large area, making the density $f_Y$ small. If $g(x)$ is flat, it "piles up" the mass, making the density large.*

## Related Topics

[[gradient-hessian-jacobian]] — the scaling engine (Jacobians)  
[[asymptotic-stats/mle]] — transforming parameters  
[[shannon-entropy]] — entropy under transformations  
[[variational-autoencoders]] — learning the transformation $G$
---