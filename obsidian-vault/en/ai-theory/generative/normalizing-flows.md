---
title: 'Generative Models: Normalizing Flows'
category: AI Theory
order: 162
lang: en
slug: normalizing-flows
---

Normalizing Flows model complex distributions by transforming a simple base distribution (e.g., Gaussian) through a sequence of invertible, differentiable functions.

### Change of Variables
Let $z \sim p_0(z)$ and $x = f(z)$, where $f$ is a bijection. By the change of variables formula:
$p_x(x) = p_0(z) \left| \det \left( \frac{\partial f(z)}{\partial z^T} \right) \right|^{-1} = p_0(f^{-1}(x)) \left| \det J_{f^{-1}}(x) \right|$

### Flow Composition
A flow applies $K$ transformations: $z_K = f_K \circ \dots \circ f_1(z_0)$.
$\log p_K(z_K) = \log p_0(z_0) - \sum_{k=1}^K \log \left| \det J_{f_k} \right|$
The design of $f_k$ (e.g., RealNVP, Glow) must ensure that the Jacobian determinant is cheap to compute ($O(D)$ instead of $O(D^3)$), typically by using triangular Jacobians.
