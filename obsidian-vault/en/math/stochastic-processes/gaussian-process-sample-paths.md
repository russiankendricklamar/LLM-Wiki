---
title: "Gaussian Process Sample Paths"
category: "Stochastic Processes"
order: 25
lang: "en"
slug: "/math/gaussian-process-sample-paths"
growth: "seedling"
---

## Overview

A **Gaussian process** is a stochastic process $(X_t)_{t \in T}$ where all finite-dimensional distributions are jointly Gaussian. Unlike the incremental definition of Brownian motion, Gaussian processes are defined directly via their covariance structure: given a symmetric, positive-definite function $K: T \times T \to \mathbb{R}$, the distribution is determined by $E[X_t] = 0$ (w.l.o.g.) and $\text{Cov}(X_s, X_t) = K(s,t)$.

The fundamental question is whether sample paths are **continuous** or even **smooth**. Unlike Lévy processes (whose paths are typically càdlàg), Gaussian processes may have wildly oscillating paths despite having finite variance. This article surveys the canonical criteria for path regularity: the **Kolmogorov continuity theorem**, **Dudley's [[shannon-entropy|entropy]] integral**, and **Fernique's theorem**.

## The Canonical Metric

Every Gaussian process induces a natural pseudo-metric on its index set:
$$d(s,t) = \sqrt{E|X_s - X_t|^2} = \sqrt{K(s,s) + K(t,t) - 2K(s,t)}.$$

For a centered Gaussian process, this equals $\sqrt{\text{Cov}(X_s - X_t, X_s - X_t)}$. Path continuity depends on the **metric structure** of $(T, d)$, not the original index topology.

**Key insight**: The problem of sample path continuity reduces to understanding oscillations of Gaussian processes on a metric space.

## Kolmogorov Continuity Criterion

The classical **Kolmogorov continuity theorem** applies directly to Gaussian processes.

**Theorem (Kolmogorov)** — If $(X_t)_{t \in [a,b]}$ is a centered Gaussian process satisfying
$$E|X_s - X_t|^p \leq C |s - t|^{1 + \alpha}$$
for constants $C > 0$ and $\alpha > 0$, then there exists a continuous version of the process, and almost all sample paths are **Hölder continuous of order** $\beta$ for any $\beta < \alpha/p$.

**Proof sketch**: The Kolmogorov proof uses Chebyshev's inequality applied to dyadic partitions. For Gaussians, the exponential tail bound $P(|X_s - X_t| > x) \leq 2\exp(-cx^2/|s-t|^{1+\alpha})$ ensures convergence of the Borel–Cantelli construction.

**Application to Brownian motion**: The standard Brownian motion satisfies $E|B_s - B_t|^2 = |s-t|$, so we may take $p=2, \alpha = 0$ in a generalized form, or verify directly that $E|B_s - B_t|^4 \leq C|s-t|^2$, yielding Hölder-$\alpha$ continuity for $\alpha < 1/2$.

## Dudley's Entropy Integral

Kolmogorov's criterion is sufficient but not always tight. **Dudley's theorem** provides a sharp, metric-based characterization using **metric entropy**.

**Definition** — The **metric entropy** is $N(T, d, \varepsilon) = $ minimum number of $d$-balls of radius $\varepsilon$ needed to cover $T$.

**Theorem (Dudley, 1967)** — Let $(X_t)_{t \in T}$ be a centered Gaussian process with canonical metric $d(s,t) = \sqrt{E|X_s-X_t|^2}$. Then
$$E\left[\sup_{t \in T} X_t\right] \leq C \int_0^\infty \sqrt{\log N(T, d, \varepsilon)}\, d\varepsilon.$$

Conversely, this bound is sharp: the right-hand side captures the supremum asymptotics up to constants.

**Interpretation**: High metric entropy (many points spread far apart in $d$-metric) requires large supremum. Processes on "intrinsically low-dimensional" spaces have small entropy and thus controlled suprema.

**Corollary** — If $\int_0^\infty \sqrt{\log N(T, d, \varepsilon)}\, d\varepsilon < \infty$, then with probability 1, $t \mapsto X_t$ has a continuous version (after modifying on a null set).

This is often sharper than Kolmogorov: it directly accounts for the geometric complexity of the index set and the metric distance function.

## Fernique's Theorem

**Fernique's theorem** (1964) characterizes the **integrability of the supremum** and is central to concentration inequalities and large-deviations theory.

**Theorem (Fernique)** — Let $(X_t)_{t \in T}$ be a centered Gaussian process with canonical metric $d$. Then there exists $\alpha > 0$ such that
$$E\left[\exp\left(\alpha \left\|X\right\|_\infty^2\right)\right] < \infty,$$
where $\|X\|_\infty = \sup_{t \in T} |X_t|$ is the supremum norm.

**Sketch of proof**: The proof uses a **truncation and rescaling** argument. Define $M = E[\|X\|_\infty]$ (finite by Dudley's theorem). For $n \geq 1$, consider $Y_n = \sup_{t \in T}(X_t - nM)$. Gaussian concentration implies
$$P(\|X\|_\infty > nM + x) \leq P(Y_n > x) \leq A \exp(-Bx^2/\sigma^2)$$
where $\sigma^2$ is a variance parameter. Integrating yields $\exp(\alpha \|X\|_\infty^2)$ integrability.

**Consequence**: The tail bounds are **sub-Gaussian**:
$$P(\|X\|_\infty > t) \leq K\exp(-ct^2)$$
for all $t$ large. This is much stronger than polynomial decay.

## Talagrand's Majorizing Measures

**Talagrand** (1987) and **Fernique** later showed the **two-sided bound**: the entropy integral is not merely an upper bound but **equivalent** to the supremum under a generalization.

The optimal reformulation uses **majorizing measures** (also called chaining): for each $t \in T$, a sequence of covering sets $(A_n(t))_{n \geq 0}$ where $A_n(t) \subseteq T$, $|A_n(t)| \lesssim N(T,d,2^{-n})$, and $t \in A_n(t)$ for all $n$. The **Talagrand majorizing measure theorem** states that
$$E[\|X\|_\infty] \approx \inf_\sigma \left[\sigma(T) + \int_0^\infty \Delta_n(\sigma)\, dn\right]$$
where $\sigma$ ranges over majorizing measures and $\Delta_n(\sigma)$ captures the worst-case chaining increment at scale $2^{-n}$.

This unifies Dudley's bound, Fernique's exponential integrability, and optimal comparison principles under a single framework.

## Reproducing Kernel Hilbert Space (RKHS)

Every centered Gaussian process $X$ corresponds to a **reproducing kernel Hilbert space** $\mathcal{H}$ with kernel $K(s,t) = \text{Cov}(X_s, X_t)$. The RKHS consists of functions $f$ such that $f(t) = \langle f, K_t \rangle_\mathcal{H}$ where $K_t(s) = K(s,t)$.

**Cameron–Martin formula**: If $h \in \mathcal{H}$, then shifting the process by $h$ (i.e., replacing $X_t \to X_t + h(t)$) gives a measure **absolutely continuous** with respect to the original. The Radon–Nikodym derivative is
$$\frac{dP_h}{dP} = \exp\left(\langle X, h \rangle_\mathcal{H} - \frac{1}{2}\|h\|_\mathcal{H}^2\right).$$

This is fundamental for Girsanov-type theorems and variational problems on Gaussian spaces.

## Sample Path Differentiability

For a Gaussian process to be **mean-square differentiable**, the covariance kernel $K$ must be twice differentiable at $(t,t)$:
$$E[(X_t' )^2] = -\frac{\partial^2 K}{\partial s \partial t}\Big|_{s=t}.$$

**Example (Brownian motion)**: $K(s,t) = \min(s,t)$ is not twice differentiable at $(t,t)$; hence Brownian motion paths are **not** differentiable anywhere almost surely.

**Example (Ornstein–Uhlenbeck)**: $K(s,t) = \exp(-\theta|s-t|)$ is twice differentiable everywhere; OU processes have differentiable paths.

## Hölder Exponents and Fractional Brownian Motion

The **fractional Brownian motion** $B_H^t$ with Hurst parameter $H \in (0,1)$ has covariance
$$K(s,t) = \frac{1}{2}(|s|^{2H} + |t|^{2H} - |s-t|^{2H}).$$

The canonical metric satisfies $d(s,t) \sim |s-t|^H$, so by Kolmogorov's criterion, sample paths are Hölder-$\alpha$ for all $\alpha < H$. The paths are **almost surely not Hölder-$H$**, revealing the optimality of the continuity exponent.

## Brownian Motion Paths: Hölder but Not Differentiable

Standard Brownian motion $(B_t)_{t \geq 0}$ is Hölder-$(1/2 - \varepsilon)$ for every $\varepsilon > 0$, but **not** Hölder-$1/2$. The modulus of continuity is
$$\lim_{\delta \to 0^+} \sup_{|s-t| < \delta} \frac{|B_s - B_t|}{\sqrt{2\delta \log(1/\delta)}} = 1 \quad \text{a.s.},$$
a result of Lévy. This demonstrates the sharp boundary where continuous sample paths become non-differentiable.

## Connections to Other Processes

- **[[Brownian bridge]]**: Continuous Gaussian bridge from 0 to 0; similar entropy and Fernique analysis.
- **[[Fractional Brownian motion]]**: Self-similar Gaussian process; Hölder exponent $H$ is tight.
- **[[Cameron–Martin formula]]**: Absolutely continuous perturbations on the RKHS.
- **[[Empirical processes]]**: Gaussian processes indexed by classes of functions; Dudley entropy applies.
- **[[Concentration inequalities]]**: Fernique's exponential integrability is foundational.
- **[[Martingale representation]]**: Gaussian processes via Wiener chaos expansion.

## Key Takeaways

1. **Canonical metric** $d(s,t) = \sqrt{E[|X_s - X_t|^2]}$ captures path regularity.
2. **Kolmogorov criterion** gives moment conditions; **Dudley's entropy integral** is metric and sharp.
3. **Fernique's theorem** ensures sub-Gaussian tail bounds on the supremum.
4. **Talagrand's majorizing measures** provide two-sided bounds.
5. **RKHS** connects geometry of paths to optimal perturbations and the Cameron–Martin formula.
6. Brownian motion and fractional Brownian motion exemplify tight Hölder regularity.
