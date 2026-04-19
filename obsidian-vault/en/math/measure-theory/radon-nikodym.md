---
title: "Radon-Nikodym Theorem"
category: "Measure Theory"
order: 10
lang: "en"
slug: "radon-nikodym"
growth: "seedling"
---

# Radon-Nikodym Theorem

The Radon-Nikodym theorem is a cornerstone result in measure theory that characterizes when one measure can be represented as an integral with respect to another measure. It establishes the condition of **absolute continuity** and provides an explicit representation for **measure derivatives** (densities). In probabilistic terms, it underpins conditional expectation and change-of-measure techniques fundamental to mathematical finance.

Let $(Ω, \mathcal{F})$ be a measurable space with σ-finite measures $\mu$ and $\nu$ on it.

## Absolute Continuity

**Definition.** A measure $\mu$ is *absolutely continuous* with respect to $\nu$ (written $\mu \ll \nu$) if
$$\nu(A) = 0 \implies \mu(A) = 0 \quad \text{for all} \quad A \in \mathcal{F}.$$

This condition is necessary for the existence of a density. If $\mu$ admits a density $f$ with respect to $\nu$, then $\mu(A) = \int_A f \, d\nu$ automatically implies $\mu \ll \nu$.

## The Radon-Nikodym Theorem

**Theorem.** Suppose $\mu$ and $\nu$ are σ-finite measures on $(Ω, \mathcal{F})$ and $\mu \ll \nu$. Then there exists a non-negative $\mathcal{F}$-measurable function $f : Ω \to [0, ∞]$ such that
$$\mu(A) = \int_A f \, d\nu \quad \text{for all} \quad A \in \mathcal{F}.$$

The function $f$ is called the **Radon-Nikodym derivative** (or **density**) and is denoted $\frac{d\mu}{d\nu}$ or $f = \frac{d\mu}{d\nu}$. It is unique **$\nu$-almost everywhere**.

**Proof sketch (Hilbert space method).** Model $\mu$ as the action of a functional on $L^2(ν)$. By the Riesz representation theorem, there exists $g \in L^2(\nu)$ such that
$$\mu(A) = \int_A g \, d\nu \quad \text{for all simple sets} \quad A.$$
The monotone class theorem and σ-finiteness extend this to all $A \in \mathcal{F}$. Setting $f = g$ yields the desired density; uniqueness follows from the representation's uniqueness $\nu$-a.e.

## Chain Rule and Change of Variables

If $\lambda$ is a third σ-finite measure with $\mu \ll \nu \ll \lambda$, then
$$\frac{d\mu}{d\lambda} = \frac{d\mu}{d\nu} \cdot \frac{d\nu}{d\lambda} \quad \lambda\text{-almost everywhere}.$$

For a transformation $T : (Ω, \mathcal{F}) \to (Ω', \mathcal{F}')$ with Jacobian $J_T$:
$$\frac{d(\mu \circ T^{-1})}{d\lambda} = \frac{d\mu}{d\nu}(T(x)) \cdot |\det J_T(x)| \quad \text{wherever } T \text{ is differentiable}.$$

## Lebesgue Decomposition

For any σ-finite measures $\mu$, $\nu$ there exists a unique decomposition
$$\mu = \mu_{\text{ac}} + \mu_{\text{s}},$$
where $\mu_{\text{ac}} \ll \nu$ (absolutely continuous part) and $\mu_{\text{s}} \perp \nu$ (singular part: there exists $A \in \mathcal{F}$ with $\nu(A) = 0$ and $\mu_{\text{s}}(A^c) = 0$).

The density $f = \frac{d\mu_{\text{ac}}}{d\nu}$ captures the absolutely continuous component.

## Conditional Expectation

On a probability space $(Ω, \mathcal{F}, \mathbb{P})$, for an integrable random variable $X$ and a σ-subalgebra $\mathcal{G} \subset \mathcal{F}$, the conditional expectation $\mathbb{E}[X | \mathcal{G}]$ is precisely the Radon-Nikodym derivative:
$$\mathbb{E}[X | \mathcal{G}] = \frac{d\mu}{d\mathbb{P}|_{\mathcal{G}}},$$
where the measure $\mu$ on $\mathcal{G}$ is defined by $\mu(A) = \int_A X \, d\mathbb{P}$ for $A \in \mathcal{G}$.

This illuminates why $\mathbb{E}[X | \mathcal{G}]$ is $\mathcal{G}$-measurable and unique a.s.: it is the unique density making the representation hold.

## Girsanov Theorem and Measure Change

In stochastic analysis, a change of probability measure $\mathbb{P} \to \mathbb{Q}$ is mediated through the **Radon-Nikodym multiplicative functional** (likelihood ratio):
$$\frac{d\mathbb{Q}}{d\mathbb{P}} = Z_T,$$
where $Z_T$ is a random variable with $\mathbb{E}_\mathbb{P}[Z_T] = 1$.

[[girsanov-semimartingales|Girsanov's theorem]] asserts that when a measure $\mathbb{P}$ is replaced by $\mathbb{Q}$ with density $Z_T$, a Wiener process gains an additional drift term (determined by $Z_T$), while diffusion coefficients remain invariant. This is the theoretical backbone of risk-neutral valuation in quantitative finance: different measures encode different beliefs about the future, and the Radon-Nikodym derivative is the object that translates expectations between them.

## Applications in Quantitative Finance

**Risk-Neutral Pricing.** The distinction between the physical (real-world) measure $\mathbb{P}$ and the risk-neutral measure $\mathbb{Q}$ (for arbitrage-free pricing) is encoded in the density:
$$\frac{d\mathbb{Q}}{d\mathbb{P}} = e^{-\int_0^T r_s \, ds} \cdot M_T,$$
where $M_T$ is a market discount factor. The ratio $\frac{d\mathbb{Q}}{d\mathbb{P}}$ is called the **market price of risk**. Derivatives are priced as expectations under $\mathbb{Q}$, and the Radon-Nikodym derivative encodes how to adjust from real-world probabilities to pricing probabilities.

Optimal portfolio choice, hedging strategies, and parameter estimation all reduce to computing conditional expectations (i.e., Radon-Nikodym derivatives with respect to filtrations), making this theorem indispensable for applied quantitative analysis.

## Duality of $L^p$ Spaces

For a σ-finite measure $\nu$ and $1 \le p < ∞$, the dual space $(L^p(\nu))^* \cong L^q(\nu)$ (where $\frac{1}{p} + \frac{1}{q} = 1$) via the linear functional:
$$\Lambda_g(f) = \int f \cdot g \, d\nu.$$
This isometry is a consequence of the Radon-Nikodym theorem applied to the functional $\Lambda \in (L^p(\nu))'$.

---

**Essential properties:**
- **Uniqueness:** the density is determined $\nu$-a.e., so changes on $\nu$-null sets are immaterial
- **σ-finiteness:** critical assumption; the theorem fails for arbitrary measures without it
- **Extensions:** signed and complex measures require prior Hahn and Jordan decompositions

**See also:** [[sigma-algebra-measurability|σ-algebras]], [[conditional-expectation-sigma|conditional expectation]], [[girsanov-semimartingales|Girsanov's theorem]], [[kolmogorov-probability-axioms|Kolmogorov axioms]], [[optimal-transport|optimal transport]]
