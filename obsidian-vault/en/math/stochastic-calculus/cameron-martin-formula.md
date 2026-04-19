---
slug: "/math/cameron-martin-formula"
title: "Cameron-Martin Theorem"
category: "Measure Theory"
order: 5
lang: "en"
---

# Cameron-Martin Theorem

The Cameron-Martin theorem describes precisely what happens when one **shifts Wiener measure by a deterministic function**: the shifted measure is absolutely continuous with respect to the original if and only if the shift lies in a specific Hilbert space, the Cameron-Martin space. This result, which Liptser and Shiryaev employ as a cornerstone of their treatment of absolute continuity for process measures, is the prototype for all subsequent measure-change results in stochastic analysis — including the [[girsanov-semimartingales|Girsanov theorem]], which generalizes it to random, adapted drifts. The theorem also reveals a remarkable dichotomy: a Gaussian measure is either equivalent to its translate or completely singular, with no intermediate possibility.

## The Cameron-Martin Space

Let $W = (W_t)_{t \in [0,T]}$ be a standard Wiener process under measure $\mathbb{P}$ on $C[0,T]$.

**Definition.** The **Cameron-Martin space** is

$$\mathcal{H} = H^1_0[0,T] = \left\{ h \in C[0,T] : h(0) = 0, \; h \text{ absolutely continuous}, \; \int_0^T |\dot{h}(s)|^2 \, ds < \infty \right\},$$

equipped with the inner product $\langle h, g \rangle_{\mathcal{H}} = \int_0^T \dot{h}(s) \dot{g}(s) \, ds$.

The space $\mathcal{H}$ is a dense subset of $C[0,T]$ of **Wiener measure zero** — it is "large" topologically but "small" probabilistically. Almost every Brownian path has unbounded variation and does **not** belong to $\mathcal{H}$.

## The Theorem

**Theorem (Cameron-Martin).** Let $h \in \mathcal{H}$ and define $\mathbb{P}^h$ as the law of $W + h$ under $\mathbb{P}$. Then $\mathbb{P}^h \ll \mathbb{P}$ with Radon-Nikodym density

$$\frac{d\mathbb{P}^h}{d\mathbb{P}} = \exp\!\left(\int_0^T \dot{h}(s) \, dW_s - \frac{1}{2}\int_0^T |\dot{h}(s)|^2 \, ds\right).$$

Conversely, if $h \notin \mathcal{H}$, then $\mathbb{P}^h \perp \mathbb{P}$ — the measures are **mutually singular**.

The density is recognized as the [[doleans-dade-exponential|Doleans-Dade exponential]] $\mathcal{E}_T(\dot{h} \cdot W)$ with the deterministic integrand $\dot{h}$. Since $\dot{h}$ is non-random, Novikov's condition $\mathbb{E}\!\left[\exp\!\left(\frac{1}{2}\int_0^T |\dot{h}|^2 \, ds\right)\right] < \infty$ is trivially satisfied, so the density is a true martingale.

## Connection to Girsanov's Theorem

The Cameron-Martin theorem is the **deterministic special case** of the [[girsanov-semimartingales|Girsanov theorem]]. In Girsanov's framework, one changes the drift by an adapted process $\theta_t$; the Cameron-Martin case corresponds to $\theta_t = \dot{h}(t)$ being non-random. While Cameron-Martin preceded Girsanov historically, the conceptual arc is best understood in reverse: Girsanov generalizes Cameron-Martin from deterministic to stochastic shifts, at the cost of requiring adaptedness and integrability conditions.

## The Feldman-Hajek Dichotomy

The all-or-nothing character of the Cameron-Martin theorem extends to arbitrary Gaussian measures on Hilbert spaces.

**Theorem (Feldman-Hajek).** Let $\mu$ and $\nu$ be two Gaussian measures on a separable Hilbert space $H$. Then either $\mu \equiv \nu$ (equivalent) or $\mu \perp \nu$ (singular). There is no intermediate case.

For Gaussian measures with the same covariance, equivalence holds if and only if the difference of means lies in the **reproducing kernel Hilbert space** (RKHS), which for Wiener measure is precisely $\mathcal{H}$. This dichotomy underpins the analysis of [[contiguity-measures|contiguity]] and singularity throughout statistical inference for Gaussian processes.

## Abstract Wiener Spaces

Gross's **abstract Wiener space** framework $(i, \mathcal{H}, B)$ formalizes the Cameron-Martin structure: $\mathcal{H}$ is a separable Hilbert space, $B$ is the Banach space completion under a measurable norm, and $i: \mathcal{H} \hookrightarrow B$ is a continuous dense embedding. Wiener measure on $B$ is the canonical Gaussian measure, and the Cameron-Martin theorem states that admissible translates are exactly the elements of $i(\mathcal{H})$. This abstraction unifies the theory across Brownian motion, Gaussian random fields, and infinite-dimensional diffusions.

## Large Deviations: Freidlin-Wentzell Theory

The Cameron-Martin space is the **natural domain for rate functions** in the large deviations theory of diffusions. Consider the family of processes $X^\varepsilon$ solving $dX^\varepsilon = b(X^\varepsilon)\,dt + \sqrt{\varepsilon}\,dW$. The Freidlin-Wentzell theory states:

$$\mathbb{P}(X^\varepsilon \approx \phi) \asymp \exp\!\left(-\frac{1}{2\varepsilon} \int_0^T |\dot{\phi}(t) - b(\phi(t))|^2 \, dt\right)$$

for paths $\phi \in \mathcal{H}$. The rate function $I(\phi) = \frac{1}{2}\|\dot{\phi} - b(\phi)\|^2_{L^2}$ measures the "energy cost" of the path $\phi$ relative to the deterministic flow — and it is finite exactly on $\mathcal{H}$. The Cameron-Martin density provides the exponential tilt that makes this heuristic rigorous.

## Applications

**Importance sampling.** To estimate $\mathbb{E}[f(W)]$ by Monte Carlo, one simulates $W + h$ under the tilted measure and reweights by the Cameron-Martin density. Choosing $h$ to steer paths toward the important region dramatically reduces variance — this is the basis of importance sampling for rare-event simulation in finance and engineering.

**Signal detection.** Testing whether an observed path is pure noise ($H_0$: $X = W$) versus signal-plus-noise ($H_1$: $X = W + h$) reduces to a likelihood ratio given by the Cameron-Martin density. The Neyman-Pearson test is optimal, and the error exponents are determined by $\|h\|_{\mathcal{H}}^2$.

**Infinite-dimensional analysis.** The Cameron-Martin space serves as the tangent space for differential calculus on Wiener space (Malliavin calculus), where "derivatives" are taken along $\mathcal{H}$-directions.

## Related Articles

- [[sigma-algebra-measurability]] — measurability foundations
- [[conditional-expectation-sigma]] — conditional expectation machinery
- [[girsanov-semimartingales]] — stochastic generalization of Cameron-Martin
- [[doleans-dade-exponential]] — the exponential density
- [[contiguity-measures]] — equivalence and singularity of measures
- [[brownian-motion]] — the Wiener process and its paths
- [[hellinger-processes]] — tools for comparing Gaussian measures
- [[density-processes]] — likelihood ratios in continuous time
- [[local-asymptotic-normality]] — LAN and Gaussian shift experiments
- [[absolute-continuity-process-measures]] — criteria for absolute continuity of process measures
