---
title: "Signed Measures and Decomposition Theorems"
category: "Measure Theory"
order: 17
lang: "en"
slug: "/math/signed-measures"
growth: "seedling"
---

# Signed Measures and Decomposition Theorems

Signed measures form a fundamental extension of classical measure theory, permitting measures to take both positive and negative values. They are essential in functional analysis, probability theory, and applications ranging from martingale theory to mathematical finance and financial engineering.

## Definition and Basic Properties

**Definition.** Let $(\Omega, \mathcal{F})$ be a measurable space. A signed measure (or simply measure with sign) is a function $\nu: \mathcal{F} \to \mathbb{R}$ (or $\mathbb{R} \cup \{-\infty, +\infty\}$) satisfying:

1. $\nu(\emptyset) = 0$
2. **Countable additivity**: for any countable sequence of pairwise disjoint sets $\{A_n\}_{n=1}^{\infty} \in \mathcal{F}$:
$$\nu\left(\bigcup_{n=1}^{\infty} A_n\right) = \sum_{n=1}^{\infty} \nu(A_n)$$

Unlike positive measures, the countable series on the right may be negative. To avoid indeterminate forms like $+\infty - \infty$, it is conventional to distinguish two classes:

- **Finite measures**: $|\nu(A)| < \infty$ for all $A \in \mathcal{F}$
- **$\sigma$-finite measures**: $\Omega$ admits a representation $\Omega = \bigcup_{n=1}^{\infty} A_n$ with $|\nu(A_n)| < \infty$

A key consequence of countable additivity is continuity of $\nu$: if $A_n \uparrow A$ (a monotone increasing sequence), then $\nu(A_n) \to \nu(A)$.

## Hahn Decomposition Theorem

**Theorem (Hahn).** Let $\nu$ be a signed measure on $(\Omega, \mathcal{F})$. Then there exist sets $P, N \in \mathcal{F}$ such that:

1. $P \cap N = \emptyset$ and $P \cup N = \Omega$
2. $\nu(A) \geq 0$ for all $A \subseteq P$, $A \in \mathcal{F}$ (positive set)
3. $\nu(A) \leq 0$ for all $A \subseteq N$, $A \in \mathcal{F}$ (negative set)

The pair $(P, N)$ is called a **Hahn decomposition** for $\nu$.

**Remark on uniqueness**: the decomposition is not unique (one can shift sets of measure zero), but the class $P$ is determined modulo sets of measure zero: if $(P', N')$ is another Hahn decomposition, then $P \triangle P' = (P \setminus P') \cup (P' \setminus P)$ has $\nu$-measure zero.

**Proof sketch**: one maximizes $\sup \{\nu(A) : A \in \mathcal{F}\}$, then inductively selects a growing sequence of sets approaching this supremum. The union of this sequence is $P$.

## Jordan Decomposition

The Hahn decomposition directly yields the Jordan decomposition, a fundamental instrument for analyzing signed measures.

**Theorem (Jordan).** Let $\nu$ be a signed measure and $(P, N)$ be its Hahn decomposition. Define the set functions:

$$\nu^+(A) := \nu(A \cap P), \quad \nu^-(A) := -\nu(A \cap N)$$

Then $\nu^+$ and $\nu^-$ are positive measures, called the **upper and lower variations** (or Jordan decomposition), satisfying:

$$\nu = \nu^+ - \nu^-$$

Moreover, this decomposition is **minimal**: if $\nu = \mu_1 - \mu_2$ for positive measures $\mu_1, \mu_2$, then $\nu^+ \leq \mu_1$ and $\nu^- \leq \mu_2$.

**Mutual singularity**: $\nu^+ \perp \nu^-$, that is, there exists $E \in \mathcal{F}$ such that $\nu^+(E^c) = 0$ and $\nu^-(E) = 0$.

The Jordan decomposition is unique: if $\nu = \mu_1 - \mu_2$ and $\nu = \mu_1' - \mu_2'$ with pairwise singular pairs, then $\mu_1 = \mu_1'$ and $\mu_2 = \mu_2'$ (modulo null sets).

## Total Variation and Variational Norm

**Definition.** The total variation of a signed measure $\nu$ is the positive measure:

$$|\nu|(A) := \nu^+(A) + \nu^-(A)$$

Clearly, $|\nu| = \nu^+ + \nu^-$ is the least positive measure $\lambda$ such that $|\nu(A)| \leq \lambda(A)$ for all $A \in \mathcal{F}$.

**Total variation norm** is defined as:

$$\|\nu\| := |\nu|(\Omega) = \nu^+(\Omega) + \nu^-(\Omega)$$

The space of all signed measures on $(\Omega, \mathcal{F})$, denoted $\mathcal{M}(\Omega, \mathcal{F})$ or $ba(\mathcal{F})$, equipped with the norm $\|\cdot\|$, becomes a **Banach space**. For a positive measure $\mu$, if $\nu \ll \mu$ (absolutely continuous), then $\|\nu\| = \int_{\Omega} |d\nu|$.

## Absolute Continuity and Singularity

In the context of signed measures, the notions of absolute continuity and singularity remain central.

**Definition.** Let $\mu$ be a positive measure on $(\Omega, \mathcal{F})$ and $\nu$ a signed measure on the same space.

- $\nu$ is **absolutely continuous** with respect to $\mu$ (notation $\nu \ll \mu$) if $\mu(A) = 0 \Rightarrow \nu(A) = 0$ for all $A \in \mathcal{F}$
- $\nu$ is **singular** with respect to $\mu$ (notation $\nu \perp \mu$) if there exists $E \in \mathcal{F}$ with $\mu(E^c) = 0$ and $|\nu|(E) = 0$

For a signed measure $\nu$, absolute continuity means that both components $\nu^+, \nu^-$ are absolutely continuous with respect to $\mu$.

## Lebesgue Decomposition

**Theorem (Lebesgue Decomposition).** Let $\mu$ be a positive measure and $\nu$ a signed $\sigma$-finite measure. Then there exists a unique decomposition:

$$\nu = \nu_{ac} + \nu_s$$

where $\nu_{ac} \ll \mu$ (absolutely continuous) and $\nu_s \perp \mu$ (singular).

This decomposition is "orthogonal" in the sense that the families of null sets for $\mu$ and $|\nu_s|$ complement each other.

## Radon–Nikodym Theorem for Signed Measures

If $\nu$ is a finite signed measure with $\nu \ll \mu$, then by Jordan decomposition and the classical [[radon-nikodym|Radon–Nikodym theorem]]:

$$\nu^+(A) = \int_A f^+ \, d\mu, \quad \nu^-(A) = \int_A f^- \, d\mu$$

for a $\mu$-almost everywhere unique pair of non-negative functions $f^+, f^-$. Thus:

$$\nu(A) = \int_A f \, d\mu \quad \text{where} \quad f = f^+ - f^-$$

The **Radon–Nikodym derivative** $\frac{d\nu}{d\mu} = f$ is defined $\mu$-almost everywhere and is integrable with respect to $\mu$. Note that $f$ may be positive, negative, or complex-valued.

**Chain rule**: if $\nu \ll \lambda \ll \mu$, then:
$$\frac{d\nu}{d\mu} = \frac{d\nu}{d\lambda} \cdot \frac{d\lambda}{d\mu} \quad \mu\text{-a.e.}$$

## Complex Measures

A natural extension consists of complex measures $\nu: \mathcal{F} \to \mathbb{C}$ satisfying countable additivity. Every complex measure can be written as $\nu = \nu_1 + i\nu_2$ with real signed measures $\nu_1, \nu_2$.

The total variation of a complex measure is:
$$|\nu|(A) := \sup \sum_{n=1}^{\infty} |\nu(A_n)|$$
where the supremum is taken over all countable partitions $A = \bigcup A_n$.

The space of finite complex measures on a compact set $K$, denoted $M(K)$, is the dual of the space of continuous functions $C(K)$ by the **Riesz representation theorem**: every bounded linear functional $\phi: C(K) \to \mathbb{C}$ has the form:
$$\phi(f) = \int_K f \, d\nu$$
for a unique complex measure $\nu \in M(K)$.

## Applications: Martingale Measure Change and Mathematical Finance

Signed and complex measures are critical in stochastic analysis. The **measure change process** (Girsanov theorem) frequently employs a Radon–Nikodym density:

$$\frac{d\mathbb{Q}}{d\mathbb{P}} = L_T$$

where $L$ is a martingale defining an equivalent measure $\mathbb{Q}$. In financial applications, $\mathbb{Q}$ is the risk-neutral measure, and the density $L_T$ is related to the stock price through the discount process.

**Density processes** in filtered probability spaces are expressed through conditional Radon–Nikodym derivatives:
$$L_t = \mathbb{E}\left[\frac{d\mathbb{Q}}{d\mathbb{P}} \,\bigg|\, \mathcal{F}_t\right]$$

This allows analysis of absolute continuity and singularity of measures in a ''dynamic'' setting, leading to Lemmermann decomposition and [[contiguity-measures|contiguity of measures]].

The **likelihood ratio** $\Lambda(y) := \frac{d\mu_1}{d\mu_0}(y)$ in statistical inference is the Radon–Nikodym density. The Neyman–Pearson lemma relies on monotone likelihood, which requires deep understanding of absolute continuity and singularity.

## Related Topics

- **[[radon-nikodym|Radon–Nikodym Theorem]]** — foundation for measure derivatives
- **[[lebesgue-integral|Lebesgue Integral]]** — integration with respect to signed measures
- **[[absolute-continuity-process-measures|Absolute Continuity of Processes and Measures]]** — dynamic aspect
- **[[density-processes|Density Processes]]** — applications in stochastic analysis
- **[[contiguity-measures|Contiguity of Measures]]** — asymptotic analysis of families of probability measures
- **[[hellinger-processes|Hellinger Processes]]** — geometry of measure spaces
- **[[lp-spaces|$L^p$ Spaces]]** — duality and normed spaces of measures
