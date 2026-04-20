---
title: "Hausdorff Measure and Fractal Dimension"
category: "Measure Theory"
order: 16
lang: "en"
slug: "/math/hausdorff-measure"
growth: "seedling"
---

## Introduction

Hausdorff measure stands as a foundational object in modern geometric measure theory, enabling the measurement of "sizes" of sets in non-integer dimensions. It extends classical Lebesgue measure and adapts naturally to the study of fractal sets, which exhibit intricate geometric structure at all scales. Unlike Lebesgue measure, which operates only in integer dimensions, Hausdorff measure allows us to assign a well-defined "size" to sets in arbitrary positive dimension $s > 0$. This opens the possibility of precisely analyzing sets of dimension $\log 2 / \log 3$ (the Cantor set) or $\log 4 / \log 3$ (the Koch snowflake)—calculations beyond the reach of classical measure theory.

The Hausdorff dimension of a set often coincides with its "visual" fractal dimension and serves as a bridge connecting geometry, probability theory, and analysis.

## Definition via $\delta$-Covers

### $\delta$-Approximation to Hausdorff Measure

Fix a parameter $s > 0$ (dimension) and $\delta > 0$ (diameter bound). For a bounded set $E \subset \mathbb{R}^n$, the **$s$-dimensional $\delta$-approximation to Hausdorff measure** is defined as:

$$\mathcal{H}^s_\delta(E) = \inf\left\{\sum_{i=1}^\infty |U_i|^s : E \subset \bigcup_{i=1}^\infty U_i,\, |U_i| \le \delta\right\},$$

where $|U_i|$ denotes the diameter of set $U_i$, and the infimum is taken over all countable covers of $E$ by sets of diameter at most $\delta$.

**Key property:** As $\delta$ decreases, $\mathcal{H}^s_\delta(E)$ is non-decreasing (since we require ever-finer covers). Equivalently, the family $\{\mathcal{H}^s_\delta(E)\}_{\delta > 0}$ is monotonically decreasing in $\delta$.

### $s$-Dimensional Hausdorff Measure

The limit defines the **$s$-dimensional Hausdorff measure**:

$$\mathcal{H}^s(E) = \lim_{\delta \to 0} \mathcal{H}^s_\delta(E) = \sup_{\delta > 0} \mathcal{H}^s_\delta(E).$$

This definition is entirely well-posed thanks to the monotonicity of the sequence.

### Normalization Constant

In applications, a normalization constant $\omega_s$ is often introduced so that Hausdorff measure agrees with the classical measure in integer dimensions. The standard choice is:

$$\omega_s = \frac{\pi^{s/2}}{2^s \Gamma(s/2 + 1)}.$$

With this normalization, the $n$-dimensional Hausdorff measure on $\mathbb{R}^n$ coincides with Lebesgue measure, and for a ball of radius $r$:

$$\mathcal{H}^s(\text{Ball}(r)) = \omega_s \cdot (2r)^s.$$

## Fundamental Properties

### Metric Outer Measure

Hausdorff measure $\mathcal{H}^s$ is a **metric outer measure**, meaning that for any sets $A, B \subset \mathbb{R}^n$ at positive distance from each other:

$$\mathcal{H}^s(A \cup B) = \mathcal{H}^s(A) + \mathcal{H}^s(B) \quad \text{whenever } d(A, B) > 0.$$

This property is critical for working with fractal sets, which often preserve structure under magnification.

### Carathéodory's Criterion

By Carathéodory's criterion, a set $E$ is called **$\mathcal{H}^s$-measurable** if for all sets $A$:

$$\mathcal{H}^s(A) = \mathcal{H}^s(A \cap E) + \mathcal{H}^s(A \cap E^c).$$

The restriction of Hausdorff measure to the $\sigma$-algebra of $\mathcal{H}^s$-measurable sets yields a **countably additive regular measure**.

### Agreement with Lebesgue Measure

In dimension $s = n$ (integer dimension of the space), Hausdorff measure (with proper normalization) coincides with Lebesgue measure on $\mathbb{R}^n$:

$$\mathcal{H}^n(E) = \lambda_n(E) \quad \text{for all Borel sets } E \subset \mathbb{R}^n,$$

where $\lambda_n$ is the standard $n$-dimensional Lebesgue measure. This grants Hausdorff measure the status of a natural generalization of classical measure theory.

## Hausdorff Dimension

### Definition and Jump Criterion

For a set $E \subset \mathbb{R}^n$, the **Hausdorff dimension** is defined as:

$$\dim_H(E) = \inf\{s \ge 0 : \mathcal{H}^s(E) = 0\}.$$

Equivalently:

$$\dim_H(E) = \sup\{s \ge 0 : \mathcal{H}^s(E) = \infty\}.$$

Between these two definitions, a "gap" can occur (a set may be both zero and infinite at its own dimension in some pathological cases), but for typical sets the **jump criterion** holds: $0 < \mathcal{H}^{\dim_H(E)}(E) < \infty$.

### Computation of Dimension

**The Standard Cantor Set in $[0,1]$**

The classical Cantor set is constructed by recursively removing the middle third:

$$\dim_H(C) = \frac{\log 2}{\log 3} \approx 0.631.$$

This is computed via self-similarity: the set consists of two disjoint scaled copies, each at scale $1/3$.

**The Koch Snowflake**

The boundary of the Koch snowflake arises as the limit of an iterative process where each line segment is replaced by four segments at scale $1/3$:

$$\dim_H(\text{Koch}) = \frac{\log 4}{\log 3} \approx 1.262.$$

The dimension exceeds 1 but falls short of 2, reflecting its "thickness" between curve and surface.

## Self-Similar Sets and Hutchinson's Theorem

### Interpretation via Iterated Function Systems

An **Iterated Function System (IFS)** is a finite collection of contracting maps $\{f_1, \ldots, f_m\}$ of a metric space to itself with contraction ratios $r_1, \ldots, r_m \in (0,1)$.

An IFS admits a **unique fixed compact** $F$ (existence and uniqueness):

$$F = \bigcup_{i=1}^m f_i(F).$$

**Hutchinson's theorem** establishes the connection between contraction ratios and Hausdorff dimension.

### Case of the Open Set Condition

Assume the IFS satisfies the **open set condition (OSC)**: there exists a non-empty bounded open set $U$ such that

$$f_i(U) \cap f_j(U) = \emptyset \quad \text{for all } i \ne j, \quad \text{and} \quad \bigcup_{i=1}^m f_i(U) \subset U.$$

Then the **Hausdorff dimension** of the attractor $F$ satisfies:

$$\sum_{i=1}^m r_i^{s} = 1,$$

where $s = \dim_H(F)$. Moreover, $0 < \mathcal{H}^s(F) < \infty$.

This means $s$ is the **unique root** of the equation $\sum r_i^s = 1$. For the Cantor set ($r_1 = r_2 = 1/3$) we obtain:

$$2 \cdot (1/3)^s = 1 \Rightarrow s = \frac{\log 2}{\log 3}.$$

### General Case: Borel Sets

Without the open set condition, one can only guarantee:

$$\dim_H(F) \le \frac{\log m}{\log \min(1/r_i)},$$

which is considerably weaker.

## Box-Counting Dimension

### Definition

**Box-counting dimension** offers an alternative measure of set complexity. For $E \subset \mathbb{R}^n$, let $N_\epsilon(E)$ denote the minimum number of cubes of side length $\epsilon$ needed to cover $E$. Then:

$$\overline{\dim}_B(E) = \limsup_{\epsilon \to 0} \frac{\log N_\epsilon(E)}{-\log \epsilon}, \quad \underline{\dim}_B(E) = \liminf_{\epsilon \to 0} \frac{\log N_\epsilon(E)}{-\log \epsilon}.$$

When $\overline{\dim}_B(E) = \underline{\dim}_B(E)$, the common value is called the **box-counting dimension** $\dim_B(E)$.

### Comparison with Hausdorff Dimension

The inequalities:

$$\dim_H(E) \le \underline{\dim}_B(E) \le \overline{\dim}_B(E)$$

always hold. For self-similar sets satisfying the open set condition, $\dim_H(E) = \dim_B(E)$. However, examples exist where Hausdorff dimension is strictly less than box-counting dimension.

## Besicovitch Covering Theorem

### Statement

The **Besicovitch covering theorem** is one of the cornerstones of geometric measure theory. It asserts: if $F$ is a bounded set in $\mathbb{R}^n$, and to each point $x \in F$ is assigned a system of closed balls containing $x$, then one can select a subsystem of balls (respecting the assigned points) such that this subsystem forms a **countable disjoint cover** of the set (up to a remainder).

### Application: Differentiation of Measures

From the Besicovitch theorem follows that for a regular measure $\mu$ and a set $E$ of full $\mu$-measure:

$$\lim_{\epsilon \to 0} \frac{\mu(B(x, \epsilon))}{(2\epsilon)^n} = \rho(x) \quad \text{for $\mu$-almost all } x \in E,$$

where $\rho$ is the local density of the measure. This allows us to "differentiate" measures, analogous to how derivatives differentiate functions.

## Applications and Examples

### Brownian Motion

The sample path of a **standard Brownian motion** $\{B_t : t \ge 0\}$ in $\mathbb{R}^d$ has Hausdorff dimension:

$$\dim_H(\{B_t : 0 \le t \le 1\}) = \min(2, d) \quad \text{almost surely.}$$

In particular, in $\mathbb{R}^2$ the path is "thick" (dimension 2), reflecting its intricate, self-intersecting nature. In $\mathbb{R}^d$ with $d \ge 3$, the dimension stabilizes at 2.

### Sets of Exceptional Points

In differentiation theory, the set of points where differentiation "fails" (density oscillates or does not exist) often has small Hausdorff dimension. This permits proving differentiation results in "full generality."

### Multifractal Analysis in Finance

In the analysis of financial time series, one studies the set of points where the Lipschitz exponent of the process takes a fixed value $\alpha$:

$$E_\alpha = \{t : \limsup_{h \to 0} \frac{\log |X(t+h) - X(t)|}{\log h} = \alpha\}.$$

The Hausdorff dimension of $E_\alpha$ characterizes the distribution of local smoothness, providing a quantitative portrait of data turbulence.

## Conclusion

Hausdorff measure and Hausdorff dimension form a powerful toolkit for analyzing fractal geometry. They naturally extend classical Lebesgue measure theory, enabling work in non-integer dimensions, and find application ranging from pure geometry to probability and finance. Hutchinson's theorem links algebraic structure (contraction ratios) to geometry (Hausdorff dimension), opening pathways to exact dimension computation for a broad class of self-similar sets.

## References and Further Reading

- [[lebesgue-integral|Lebesgue Integral]] — foundation for Hausdorff measure construction
- [[sigma-algebra-measurability|Sigma-Algebras and Measurability]] — structure of measurable sets
- [[radon-nikodym|Radon-Nikodym Theorem]] — differentiation of measures
- [[topology-basics|Topology Basics]] — open sets and open covers
- [[brownian-motion|Brownian Motion]] — probabilistic application
- [[product-measures-fubini|Product Measures and Fubini's Theorem]] — measure construction on products
- [[differentiation-of-measures|Differentiation of Measures]] — densities and Radon-Nikodym derivatives
