---
title: "Moment Generating Functions (MGFs) and Characteristic Functions"
category: "Applied Probability"
order: 30
lang: "en"
slug: "mgf-characteristic-functions"
---

# Moment Generating Functions (MGFs) and Characteristic Functions

Moment Generating Functions (MGFs) and Characteristic Functions are transform-based methods used to uniquely characterize probability distributions. They simplify the calculation of moments and are essential in proving limit theorems.

## 1. Moment Generating Functions (MGF)

The MGF of a random variable $X$ is defined as:
$$M_X(t) = \mathbb{E}[e^{tX}]$$
for $t$ in some neighborhood of zero.

### Properties
1. **Moment Generation**: The $n$-th moment is given by the $n$-th derivative at zero:
   $$\mathbb{E}[X^n] = M_X^{(n)}(0)$$
2. **Linear Transformation**: $M_{aX+b}(t) = e^{bt}M_X(at)$.
3. **Independent Sums**: If $X, Y$ are independent, $M_{X+Y}(t) = M_X(t)M_Y(t)$.

## 2. Characteristic Functions

The Characteristic Function $\phi_X(t)$ is defined as:
$$\phi_X(t) = \mathbb{E}[e^{itX}] = \int_{-\infty}^{\infty} e^{itx} dF(x)$$
Unlike the MGF, the characteristic function **always exists** because $|e^{itx}| = 1$.

### Properties
1. **Uniqueness Theorem**: There is a one-to-one correspondence between distributions and characteristic functions (Lévy's Continuity Theorem).
2. **Inversion Formula**: The PDF $f(x)$ can be recovered via:
   $$f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-itx} \phi_X(t) dt$$
3. **Symmetry**: $X$ is symmetric about 0 iff $\phi_X(t)$ is real-valued.

## 3. Applications

- **Limit Theorems**: Proving the [[clt|Central Limit Theorem]] by showing the convergence of characteristic functions to $e^{-t^2/2}$.
- **Summation of Distributions**: Easily finding the distribution of sums (e.g., sum of independent Poisson variables).

## Related Topics
[[probability-distributions]]
[[clt]]
[[fourier-transform]]
