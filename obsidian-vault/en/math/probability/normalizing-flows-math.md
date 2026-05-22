---
title: Mathematical Foundations of Normalizing Flows
category: Statistical Learning
order: 47
lang: en
slug: normalizing-flows-math
---

# Mathematical Foundations of Normalizing Flows

Normalizing flows construct complex probability distributions by passing a simple base distribution (e.g., standard Gaussian) through a sequence of invertible, differentiable transformations (diffeomorphisms).

## Change of Variables Theorem

Let $Z \sim p_Z(z)$ be a random variable defined on $\mathbb{R}^d$, and let $f: \mathbb{R}^d 	o \mathbb{R}^d$ be an invertible mapping with inverse $g = f^{-1}$. The random variable $X = f(Z)$ has the probability density function $p_X(x)$ given by the Change of Variables formula:

$$
p_X(x) = p_Z(f^{-1}(x)) \left| \det \left( rac{\partial f^{-1}(x)}{\partial x} ight) ight|
$$

Equivalently, expressing it using the forward mapping $f$:

$$
p_X(x) = p_Z(z) \left| \det \left( rac{\partial f(z)}{\partial z} ight) ight|^{-1}
$$

where $J_f(z) = rac{\partial f(z)}{\partial z}$ is the Jacobian matrix of $f$ evaluated at $z$.

## Composition of Flows

To create highly expressive transformations, we compose $K$ functions: $f = f_K \circ f_{K-1} \circ \dots \circ f_1$. By the chain rule, the determinant of the Jacobian of the composition is the product of the determinants:

$$
\det(J_f(z_0)) = \prod_{k=1}^K \det \left( rac{\partial f_k(z_{k-1})}{\partial z_{k-1}} ight)
$$

The log-likelihood of the data point $x$ becomes:

$$
\log p_X(x) = \log p_Z(z_0) - \sum_{k=1}^K \log \left| \det \left( rac{\partial f_k(z_{k-1})}{\partial z_{k-1}} ight) ight|
$$

## Continuous Normalizing Flows (CNFs)

Instead of discrete compositions, CNFs define the transformation using an Ordinary Differential Equation (ODE):

$$
rac{dz(t)}{dt} = h(z(t), t)
$$

where $z(0) \sim p_{Z_0}$ and $z(T) = x$. The change in log-density is governed by the continuous analog of the Jacobian determinant, known as the **Liouville Equation** or the instantaneous change of variables (Chen et al., 2018):

$$
rac{\partial \log p(z(t))}{\partial t} = -	ext{Tr}\left( rac{\partial h}{\partial z(t)} ight)
$$

Integrating this over time yields the exact log-likelihood without needing to compute full Jacobian determinants, requiring only the trace of the Jacobian.
