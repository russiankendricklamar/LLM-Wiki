---
title: "L^p Spaces"
category: "Measure Theory"
order: 12
lang: "en"
slug: "/math/lp-spaces"
growth: "seedling"
---

## Definition and Norm

Let $(X, \mathcal{F}, \mu)$ be a measure space and $1 \leq p < \infty$. The space $L^p(\mu)$ consists of all measurable functions $f : X \to \mathbb{R}$ (or $\mathbb{C}$) for which the integral $\int_X |f(x)|^p \, d\mu(x)$ is finite:

$$L^p(\mu) = \left\{ f : \int_X |f(x)|^p \, d\mu(x) < \infty \right\}$$

Two functions are considered equivalent if they agree almost everywhere with respect to the measure $\mu$. In fact, $L^p(\mu)$ is a space of equivalence classes of functions.

On elements of $L^p$, we define the norm:

$$\|f\|_p = \left( \int_X |f(x)|^p \, d\mu(x) \right)^{1/p}$$

This norm possesses the standard properties: positivity, homogeneity, and additivity (the triangle inequality). The last property is called **Minkowski's inequality**.

## Hölder's Inequality

One of the fundamental inequalities in analysis relates functions from different $L^p$ spaces. For conjugate exponents $p$ and $q$ satisfying:

$$\frac{1}{p} + \frac{1}{q} = 1, \quad 1 < p < \infty$$

**Hölder's inequality** states:

$$\|fg\|_1 = \int_X |f(x)g(x)| \, d\mu(x) \leq \|f\|_p \cdot \|g\|_q$$

for all $f \in L^p(\mu)$ and $g \in L^q(\mu)$.

Hölder's inequality immediately implies **Minkowski's inequality**:

$$\|f + g\|_p \leq \|f\|_p + \|g\|_p$$

which shows that $L^p$ with norm $\|\cdot\|_p$ forms a normed vector space.

## Completeness and the Riesz–Fischer Theorem

The space $L^p(\mu)$ is a **complete normed vector space**, that is, a **Banach space**. This means that every Cauchy sequence in $L^p$ converges to an element of $L^p$.

**Riesz–Fischer Theorem**: If $\{f_n\}$ is a sequence in $L^p$ such that $\sum_{n=1}^{\infty} \|f_n\|_p < \infty$, then there exists a function $f \in L^p$ such that $\|f - \sum_{k=1}^n f_k\|_p \to 0$ as $n \to \infty$.

This result guarantees that functions with integrable $p$-th power sum to an integrable function.

## Hilbert Structure of $L^2$

The space $L^2(\mu)$ has a special structure. On it, we define an **inner product**:

$$\langle f, g \rangle = \int_X f(x) \overline{g(x)} \, d\mu(x)$$

which induces the norm $\|f\|_2 = \sqrt{\langle f, f \rangle}$. Thus, $L^2(\mu)$ is a **Hilbert space**, possessing all properties of Euclidean spaces in the infinite-dimensional setting.

In a Hilbert space, the **Cauchy–Schwarz inequality** holds:

$$|\langle f, g \rangle| \leq \|f\|_2 \cdot \|g\|_2$$

and the **projection theorem** states that every non-empty closed convex subset contains a unique element of minimal norm.

## Duality: The Riesz Representation Theorem

For every linear continuous functional $\phi$ on $L^p(\mu)$, where $1 \leq p < \infty$, there exists a unique element $g \in L^q(\mu)$ (where $1/p + 1/q = 1$) such that:

$$\phi(f) = \int_X f(x) g(x) \, d\mu(x) \quad \text{for all } f \in L^p$$

and $\|\phi\| = \|g\|_q$. This **Riesz representation theorem** establishes an isomorphism:

$$(L^p)^* \cong L^q$$

The dual space of $L^p$ coincides with $L^q$ in the sense of linear continuous functionals.

## Embeddings on Finite Measure Spaces

On a space with finite measure $\mu(X) < \infty$, we have the following embedding relationship: if $p \geq r$, then

$$L^p(\mu) \subseteq L^r(\mu)$$

with continuous embedding and the estimate:

$$\|f\|_r \leq \mu(X)^{1/r - 1/p} \cdot \|f\|_p$$

This follows from Hölder's inequality. The reverse inclusion does not hold for infinite measure.

## The Space $L^\infty$ and Essential Supremum

The space $L^\infty(\mu)$ is defined as the set of all measurable functions that are bounded almost everywhere:

$$L^\infty(\mu) = \{ f : \exists C \geq 0, \, |f(x)| \leq C \text{ a.e.} \}$$

We define on it the norm of **essential supremum**:

$$\|f\|_\infty = \inf \{ C \geq 0 : |f(x)| \leq C \text{ a.e.} \}$$

$L^\infty$ is a Banach space, and its dual $(L^\infty)^*$ is isomorphic to the space of all finitely additive measures, which is significantly larger than $L^1$.

## Weak $L^p$ Spaces and Marcinkiewicz Interpolation

The **weak $L^p$ space** $L^{p,\infty}(\mu)$ (also called Marcinkiewicz $L^p$) consists of functions satisfying

$$\lambda^\alpha \mu(\{|f| > \lambda\})^{1/p} \leq C$$

for some constant $C$ and all $\lambda > 0$. Weak $L^p$ spaces properly contain all $L^p$ functions.

**Marcinkiewicz Interpolation Theorem** asserts that linear operators acting weakly with prescribed bounds on two spaces $L^{p_0}$ and $L^{p_1}$ act with controlled norms on intermediate spaces $L^p$ for $p_0 < p < p_1$.

## Sobolev Spaces and Generalizations

The $L^p$ spaces form the foundation for defining **Sobolev spaces** $W^{k,p}$, consisting of functions whose weak derivatives up to order $k$ belong to $L^p$. These are central tools in the theory of partial differential equations.

Furthermore, $L^p$ theory extends to operator spaces, vector-valued functions, and constitutes the foundation of modern functional and harmonic analysis.

## Related Concepts

- [[lebesgue-integral]] — the Lebesgue integral on which $L^p$ is built
- [[sigma-algebra-measurability]] — measure theory and σ-algebras
- [[sobolev-spaces]] — Sobolev spaces $W^{k,p}$
- [[functional-analysis]] — Banach and Hilbert spaces
- [[radon-nikodym]] — the Radon–Nikodym theorem on representation of measures
- [[conditional-expectation-sigma]] — conditional expectations in $L^2$
