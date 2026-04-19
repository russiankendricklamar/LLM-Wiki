---
title: "Lebesgue Integral"
category: "Measure Theory"
order: 11
lang: "en"
slug: "/math/lebesgue-integral"
growth: "seedling"
---

# Lebesgue Integral

The **Lebesgue integral** is a generalization of the Riemann integral that extends the notion of integration to a much broader class of functions and measure spaces. Rather than partitioning the domain (as Riemann integration does), the Lebesgue approach partitions the range, making it more naturally compatible with limits and with integration over abstract measure spaces.

## Simple Functions and Elementary Integration

The construction begins with **simple functions**. A measurable function $s : X \to [0, \infty)$ is simple if it takes only finitely many values; write
$$s = \sum_{i=1}^n a_i \mathbb{1}_{E_i}$$
where $a_i \geq 0$ and $E_i$ are disjoint measurable sets with $\bigcup_i E_i = X$.

For a simple function $s$ and a measure $\mu$, the integral is defined naturally:
$$\int_X s \, d\mu = \sum_{i=1}^n a_i \mu(E_i),$$
with the convention that $0 \cdot \infty = 0$. This definition is independent of the representation of $s$.

## Integration of Nonnegative Functions

For a nonnegative measurable function $f : X \to [0, \infty]$, define
$$\int_X f \, d\mu = \sup \left\{ \int_X s \, d\mu : s \text{ simple and } s \leq f \right\}.$$

This supremum is always well-defined (possibly infinite). Key properties hold immediately:
- **Monotonicity**: if $f \leq g$, then $\int f \leq \int g$
- **Homogeneity**: $\int cf = c \int f$ for $c \geq 0$
- **Additivity**: $\int (f + g) = \int f + \int g$

## Extension to Signed and Complex Functions

For a signed or complex measurable function $f$, decompose it as $f = f^+ - f^-$, where
$$f^+ = \max(f, 0), \quad f^- = \max(-f, 0)$$
are both nonnegative measurable functions. Say $f$ is **integrable** (or in $L^1(\mu)$) if $\int f^+ d\mu < \infty$ and $\int f^- d\mu < \infty$. Then define
$$\int_X f \, d\mu = \int_X f^+ \, d\mu - \int_X f^- \, d\mu.$$

For complex-valued $f = u + iv$, require both $u$ and $v$ to be in $L^1(\mu)$, and set $\int f = \int u + i \int v$.

## Convergence Theorems

The Lebesgue integral's power lies in its handling of limits. The most important convergence results are:

### Monotone Convergence Theorem (MCT)
If $(f_n)$ is an increasing sequence of nonnegative measurable functions, then
$$\lim_{n \to \infty} \int f_n \, d\mu = \int \lim_{n \to \infty} f_n \, d\mu.$$
No additional assumptions are needed; the theorem holds for almost every convergence or pointwise convergence.

### Dominated Convergence Theorem (DCT)
If $(f_n)$ is a sequence of complex-valued measurable functions with $f_n \to f$ almost everywhere, and if there exists an integrable function $g \in L^1(\mu)$ such that $|f_n| \leq g$ almost everywhere for all $n$, then
$$\lim_{n \to \infty} \int f_n \, d\mu = \int f \, d\mu.$$

*Proof sketch*: By dominated convergence applied to $|f_n - f|$, and since $|f_n - f| \leq 2g$ on the set where $f_n \to f$, the dominated convergence theorem for nonnegative functions (via Fatou) implies $\int |f_n - f| \to 0$.

### Fatou's Lemma
For any sequence of nonnegative measurable functions $(f_n)$,
$$\int \liminf_{n \to \infty} f_n \, d\mu \leq \liminf_{n \to \infty} \int f_n \, d\mu.$$
This is the weakest convergence result and requires no domination hypothesis.

## Comparison with Riemann Integration

The Riemann integral, which partitions the domain, requires uniform convergence of function sequences for the integral to commute with the limit. The Lebesgue integral, by partitioning the range, requires only pointwise a.e. convergence and an integrable bound (DCT). This makes Lebesgue integration far more flexible for applications in analysis and probability.

Moreover, every Riemann integrable function on $[a,b]$ is Lebesgue integrable with respect to Lebesgue measure, and the integrals agree.

## $L^1$ as a Banach Space

The space $L^1(\mu)$ of all integrable functions (identified up to equality $\mu$-almost everywhere) is a [[lp-spaces|Banach space]] with the norm
$$\|f\|_{L^1} = \int_X |f| \, d\mu.$$

Completeness follows from the MCT: if $(f_n)$ is a Cauchy sequence in $L^1$, a subsequence converges a.e. to some $f \in L^1$, and the full sequence converges to $f$ in $L^1$ norm.

## Approximation Results

Every $f \in L^1(\mu)$ can be approximated:
- By simple functions in $L^1$ norm (by definition of the integral)
- By continuous functions of compact support if $\mu$ is a regular Borel measure on a locally compact Hausdorff space (Lusin's theorem)

## Change of Variables

Let $\phi : X \to Y$ be measurable and let $\nu = \mu \circ \phi^{-1}$ be the pushforward measure on $Y$. For any nonnegative or integrable function $f : Y \to \mathbb{R}$,
$$\int_Y f \, d\nu = \int_X f \circ \phi \, d\mu.$$

This abstraction generalizes classical change-of-variables formulas and underlies the construction of measures on quotient spaces.

## Product Integration and Fubini-Tonelli

For [[product-measures-fubini|$\sigma$-finite measure spaces]] $(X, \mathcal{F}, \mu)$ and $(Y, \mathcal{G}, \nu)$, the product $\mu \times \nu$ on $X \times Y$ satisfies **Fubini's theorem**:
$$\int_{X \times Y} f \, d(\mu \times \nu) = \int_X \left( \int_Y f(x, y) \, d\nu(y) \right) d\mu(x) = \int_Y \left( \int_X f(x, y) \, d\mu(x) \right) d\nu(y),$$
provided $f \in L^1(\mu \times \nu)$. Tonelli's theorem allows us to compute $\|f\|_{L^1}$ by iterated integration when $f \geq 0$.

## Related Concepts

The Lebesgue integral is foundational to:
- [[sigma-algebra-measurability|Measure theory and $\sigma$-algebras]], which formalize the class of integrable sets
- [[radon-nikodym|The Radon–Nikodym theorem]], which describes absolutely continuous measures
- [[conditional-expectation-sigma|Conditional expectation]], defined as a solution to an $L^2$ minimization via the Lebesgue integral
- [[borel-cantelli-zero-one|The Borel–Cantelli lemma]], which uses Fatou's lemma to bound tail events

---

**References**:
- Folland, G. B. *Real Analysis: Modern Techniques and Their Applications* (2nd ed.)
- Rudin, W. *Real and Complex Analysis* (3rd ed.)
- Halmos, P. R. *Measure Theory*
