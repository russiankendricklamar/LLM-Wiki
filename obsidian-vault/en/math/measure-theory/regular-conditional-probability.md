---
title: "Regular Conditional Probability"
category: "Measure Theory"
order: 14
lang: "en"
slug: "/math/regular-conditional-probability"
growth: "seedling"
---

## The Problem with Naive Conditioning

Classical conditional probability $P(A|B) = \frac{P(A \cap B)}{P(B)}$ breaks down when $P(B) = 0$. In continuous probability spaces, conditioning on a single point—say $X = x$ where $X$ is a continuous random variable—yields a zero-probability event. Yet we intuitively understand what it means for a process to take a specific continuous value; we need a rigorous framework that respects this intuition.

**Regular conditional probability** extends conditioning to zero-measure events by introducing a **conditional probability kernel**: a measurable function that assigns a probability measure to each conditioning value. Rather than attempting the impossible division $\frac{0}{0}$, we construct a family of probability measures indexed by the conditioning random variable.

## Conditional Probability Kernels

Fix a probability space $(\Omega, \mathcal{F}, P)$ and two sub-σ-algebras $\mathcal{G}, \mathcal{H} \subset \mathcal{F}$. A **conditional probability kernel** (or **regular version of the conditional probability**) is a function $\mu: \mathcal{F} \times \Omega \to [0, 1]$ satisfying:

1. **Measurability in the second argument**: For every $A \in \mathcal{F}$, the map $\omega \mapsto \mu(A, \omega)$ is $\mathcal{G}$-measurable.
2. **Probability measure in the first argument**: For each $\omega \in \Omega$, the map $A \mapsto \mu(A, \omega)$ is a probability measure on $(\Omega, \mathcal{F})$.
3. **Conditional expectation property**: For all $A \in \mathcal{F}$ and $B \in \mathcal{G}$,
$$\int_B \mu(A, \omega)\, dP(\omega) = P(A \cap B).$$

The third condition ensures consistency with the abstract [[conditional-expectation-sigma|conditional expectation]] $E[1_A | \mathcal{G}]$: integrating the kernel against $P$ over a $\mathcal{G}$-set recovers the original measure of intersections.

For a random variable $X$ with values in a measurable space $(E, \mathcal{E})$, a regular conditional distribution is a kernel $\mu(\cdot | x): \mathcal{F} \to [0,1]$ such that:
$$P(A | X = x) := \mu(A | x) \text{ is } \sigma(X)\text{-measurable in } x$$
and satisfies the consistency condition: $E[1_A | X] = \int \mu(A|x)\, dP_X(x)$ almost surely.

## Existence and Uniqueness

**Theorem (Disintegration on Polish Spaces):** Let $(E, \mathcal{E})$ be a Polish space (complete separable metric space with its Borel σ-algebra) and let $X: (\Omega, \mathcal{F}, P) \to (E, \mathcal{E})$ be a random variable. Then there exists a regular conditional probability $P(\cdot | X)$. Moreover, if $\mu$ and $\mu'$ are two such kernels, then $\mu(\cdot | x) = \mu'(\cdot | x)$ for $P_X$-almost every $x \in E$, where $P_X = P \circ X^{-1}$ is the distribution of $X$.

The proof hinges on the **Radon-Nikodym theorem** and the Borel isomorphism theorem: Polish spaces are sufficiently rich to admit disintegrations that naive Euclidean conditioning cannot.

## Disintegration of Measures

The regular conditional probability is the centerpiece of **measure disintegration**, a fundamental decomposition:

$$P = \int_E P(\cdot | X = x)\, dP_X(x).$$

More generally, given a probability measure $\mu$ on a product space $(E \times F, \mathcal{E} \otimes \mathcal{F})$, the disintegration theorem provides kernels $\mu(\cdot | x): \mathcal{F} \to [0,1]$ such that:
$$\mu(A \times B) = \int_A \mu(B | x)\, d\mu_E(x),$$
where $\mu_E$ is the marginal of $\mu$ on $E$. This decomposition is unique $\mu_E$-almost everywhere.

Disintegrations exist whenever the spaces involved are Polish, or more generally Radon (locally compact Hausdorff), and they underpin the theory of [[product-measures-fubini|Fubini's theorem in measure-theoretic form]]: instead of integrating with respect to a product measure, we integrate via the kernel against the marginal.

## Markov Kernels and Stochastic Processes

A regular conditional probability is an example of a **Markov kernel** (or **transition probability**). More broadly, a Markov kernel from $(E, \mathcal{E})$ to $(F, \mathcal{F})$ is a function $K: \mathcal{F} \times E \to [0,1]$ that is a probability measure in the first argument for each $x \in E$, and measurable in the second.

Markov kernels compose: if $K_1: E \to F$ and $K_2: F \to G$ are kernels, their composition $(K_2 \circ K_1)(C|x) = \int_F K_2(C|y)\, K_1(dy|x)$ is a kernel from $E$ to $G$. This compositional structure is the foundation of **Markov processes** and their theory: a Markov chain or diffusion is built by stacking kernels through time.

## Conditional Independence and Bayes' Theorem

For three events $A, B, C$, we say $A$ and $B$ are **conditionally independent given $C$** if $P(A \cap B | C) = P(A|C)P(B|C)$. Using regular conditional probabilities, this extends naturally: $\sigma(X)$ and $\sigma(Y)$ are conditionally independent given $\sigma(Z)$ if their conditional densities factor,
$$p(x, y | z) = p(x | z) \cdot p(y | z) \quad \text{for } P_Z\text{-almost all } z.$$

**Bayes' formula** arises as a consequence of disintegration. The posterior distribution after observing $Y = y$ is precisely the regular conditional probability:
$$P_{\text{post}}(A) := P(X \in A | Y = y) = \frac{P(Y \in B | X) \cdot P_X(A)}{P(Y \in B)},$$
where the numerator involves the **likelihood kernel** $P(Y \in \cdot | X)$.

## Gaussian Conditional Distributions

For a Gaussian random vector $(X, Y)$ with joint covariance $\Sigma$, the conditional distribution of $X$ given $Y = y$ is again Gaussian, with explicit formulas for the conditional mean and covariance:
$$X | (Y = y) \sim N\left( \mu_X + \Sigma_{XY} \Sigma_Y^{-1}(y - \mu_Y), \quad \Sigma_X - \Sigma_{XY} \Sigma_Y^{-1} \Sigma_{YX} \right).$$

The conditional covariance is independent of $y$; only the mean shifts. These formulas extend to infinite-dimensional Hilbert spaces, forming the basis for [[density-processes|filtering theory and stochastic differential equations]].

## The Borel Isomorphism Theorem

**Theorem (Borel):** Any two uncountable Polish spaces are Borel isomorphic—there exists a bijection that is measurable in both directions. This guarantees that the disintegration theorem holds uniformly across all Polish spaces: a measure on $\mathbb{R}$ can be disintegrated into kernels just as robustly as one on a more exotic Polish space.

The theorem underpins why we can freely apply regular conditional probability to any Polish-valued random variable without special cases: the measure-theoretic structure is universal.

## References and Further Reading

- [[sigma-algebra-measurability|Measurability and σ-algebras]]
- [[radon-nikodym|Radon-Nikodym theorem and absolute continuity]]
- [[kolmogorov-probability-axioms|Kolmogorov's axioms and foundational probability theory]]
- Kallenberg, *Foundations of Modern Probability* (2nd ed.), Chapter 6
- Cinlar, *Probability and Stochastics*
