---
slug: "/math/hellinger-processes"
title: "Hellinger Integrals and Hellinger Processes"
category: "Asymptotic Statistics"
order: 2
lang: "en"
---

# Hellinger Integrals and Hellinger Processes

Comparing two probability measures on a single $\sigma$-algebra is a classical problem: total variation, Kullback-Leibler divergence, and the Hellinger distance all serve this purpose. But when the measures live on the path space of a stochastic process equipped with a **filtration**, one needs a tool that tracks how the "distance" between the measures **accumulates over time**. This is exactly what the **Hellinger process** does. Jacod and Shiryaev develop it as the central device for deciding whether two measures on filtered spaces are absolutely continuous, singular, or contiguous — questions that arise constantly in statistics of processes, hypothesis testing, and mathematical finance.

## Hellinger Integrals on a Single $\sigma$-Algebra

Let $P$ and $Q$ be two probability measures on $(\Omega, \mathcal{F})$, both absolutely continuous with respect to a dominating measure $\mu$. For $\alpha \in (0, 1)$, the **Hellinger integral** of order $\alpha$ is

$$h(\alpha; P, Q) = \int \left(\frac{dP}{d\mu}\right)^\alpha \left(\frac{dQ}{d\mu}\right)^{1-\alpha} \, d\mu.$$

This definition does not depend on the choice of $\mu$ (any $\mu \geq P + Q$ works). Key properties:

- $0 \leq h(\alpha; P, Q) \leq 1$ for all $\alpha \in (0,1)$.
- $h(\alpha; P, Q) = 1$ if and only if $P = Q$.
- The map $\alpha \mapsto h(\alpha; P, Q)$ is log-convex on $(0,1)$.
- The **Hellinger distance** $H(P,Q) = \sqrt{1 - h(1/2; P, Q)}$ metrizes [[weak-convergence-prokhorov|weak convergence]] on compact spaces and dominates total variation: $\|P - Q\|_{\text{TV}}^2 \leq 4(1 - h(1/2; P, Q))$.

The case $\alpha = 1/2$ is the most common. The **Hellinger affinity** $\rho(P,Q) = h(1/2; P,Q) = \int \sqrt{dP/d\mu}\,\sqrt{dQ/d\mu}\, d\mu$ measures how much the two densities "overlap."

## Hellinger Process for Filtered Spaces

Now let $(\Omega, \mathcal{F}, (\mathcal{F}_t)_{t \geq 0})$ be a filtered space carrying two probability measures $P$ and $Q$. Denote by $P_t$ and $Q_t$ the restrictions to $\mathcal{F}_t$.

**Definition.** The **Hellinger process** $H^{(\alpha)} = (H^{(\alpha)}_t)_{t \geq 0}$ of order $\alpha \in (0,1)$ is the unique predictable increasing process such that the process

$$h(\alpha; P_t, Q_t) \cdot \exp\bigl(H^{(\alpha)}_t\bigr)$$

is a $(P + Q)$-martingale. Equivalently, $H^{(\alpha)}$ is characterized by

$$h(\alpha; P_t, Q_t) = \mathbb{E}_{P+Q}\!\left[\exp\bigl(-H^{(\alpha)}_t\bigr) \mid \mathcal{F}_0\right] \cdot \exp\bigl(-H^{(\alpha)}_t\bigr) \cdot (\text{martingale}).$$

The Hellinger process measures the **rate at which the two measures separate** as information accumulates through the filtration. When $H^{(\alpha)}_t$ is small, the restrictions $P_t$ and $Q_t$ are still close; when it grows to infinity, the measures become singular.

## Connection to Likelihood Ratios

Let $Z_t = dP_t / dQ_t$ be the likelihood ratio process (the Radon-Nikodym density restricted to $\mathcal{F}_t$). Under $Q$, the process $Z$ is a non-negative supermartingale. In terms of $Z$:

$$h(\alpha; P_t, Q_t) = \mathbb{E}_Q\!\left[Z_t^\alpha\right].$$

When the likelihood ratio has the exponential form $Z_t = \mathcal{E}(L)_t$ for a local martingale $L$ under $Q$ (as in [[girsanov-semimartingales|Girsanov's theorem]]), the Hellinger process can be computed explicitly from the characteristics of $L$. For a continuous local martingale $L$ with $\langle L \rangle_t = C_t$:

$$H^{(\alpha)}_t = \frac{\alpha(1-\alpha)}{2} C_t.$$

This shows that the Hellinger process is proportional to the quadratic variation of the log-likelihood — an intuitive measure of the "information rate."

## Kakutani's Dichotomy Generalized

Kakutani's classical theorem states: for an infinite product of measures $\prod P_n$ and $\prod Q_n$, either $\prod P_n \ll \prod Q_n$ (if $\prod h(1/2; P_n, Q_n) > 0$) or $\prod P_n \perp \prod Q_n$ (if the product is zero). There is no intermediate case.

Jacod and Shiryaev prove the **filtration analogue**:

**Theorem (Kakutani dichotomy for filtrations).** Let $P$ and $Q$ be locally absolutely continuous (i.e., $P_t \ll Q_t$ for each $t$). Then exactly one of the following holds:

1. $P \ll Q$ on $\mathcal{F}_\infty$, and this happens if and only if $H^{(\alpha)}_\infty < \infty$ $P$-a.s. for some (equivalently, all) $\alpha \in (0,1)$.
2. $P \perp Q$ on $\mathcal{F}_\infty$, and this happens if and only if $H^{(\alpha)}_\infty = \infty$ $P$-a.s.

There is no "partial overlap" at infinity: locally absolutely continuous measures on a filtered space are either globally absolutely continuous or globally singular.

## Criteria for Absolute Continuity and Singularity

In practice, one computes $H^{(\alpha)}$ from the [[semimartingale-models|predictable characteristics]] of the likelihood ratio process. The key results:

**For diffusions.** If under $P$ the process $X$ satisfies $dX_t = b^P_t\, dt + \sigma_t\, dW_t$ and under $Q$ it satisfies $dX_t = b^Q_t\, dt + \sigma_t\, dW_t$ (same volatility, different drifts), then

$$H^{(1/2)}_t = \frac{1}{8} \int_0^t \frac{(b^P_s - b^Q_s)^2}{\sigma_s^2}\, ds.$$

So $P \ll Q$ on $\mathcal{F}_\infty$ iff $\int_0^\infty (b^P - b^Q)^2 / \sigma^2\, ds < \infty$ a.s., and $P \perp Q$ otherwise.

**For point processes.** If $N$ is a counting process with $P$-intensity $\lambda^P$ and $Q$-intensity $\lambda^Q$, then

$$H^{(1/2)}_t = \int_0^t \left(\sqrt{\lambda^P_s} - \sqrt{\lambda^Q_s}\right)^2 ds.$$

**For Lévy processes.** Two [[levy-processes|Lévy processes]] with the same jump structure but different drifts have $H^{(1/2)}_t = ct$ for an explicit constant $c$. Hence $P \perp Q$ on $\mathcal{F}_\infty$ whenever $c > 0$ — different drifts are always detectable.

## Connection to Contiguity

The Hellinger process is the natural tool for verifying [[contiguity-measures|contiguity]]. Recall that a sequence $Q_n$ is contiguous with respect to $P_n$ ($Q_n \triangleleft P_n$) if $P_n(A_n) \to 0$ implies $Q_n(A_n) \to 0$. The link:

$$Q_n \triangleleft P_n \iff h(\alpha; P_n, Q_n) \to 1 \quad \text{for some } \alpha \in (0,1).$$

For sequences of experiments indexed by $n$ (e.g., $n$ observations), the Hellinger process provides a uniform way to check contiguity by verifying that $H^{(\alpha)}_\infty$ remains bounded in probability along the sequence.

## Applications

**Statistical testing.** The Neyman-Pearson lemma gives optimal tests via the likelihood ratio; the Hellinger process quantifies the power by tracking how fast the likelihood ratio separates the hypotheses.

**Le Cam theory.** Local asymptotic normality (LAN) and its extensions to processes are stated in terms of Hellinger differentiability. The Hellinger process provides the "local information" that governs the efficiency of estimators.

**Mathematical finance.** Deciding whether the risk-neutral measure is equivalent to the physical measure (necessary for absence of arbitrage) reduces to checking $H^{(\alpha)}_\infty < \infty$ for the [[doleans-dade-exponential|stochastic exponential]] defining the measure change.

## Related Articles

- [[contiguity-measures]] — contiguity and Le Cam's third lemma.
- [[girsanov-semimartingales]] — measure changes for semimartingales via Girsanov's theorem.
- [[semimartingale-models]] — predictable characteristics from which Hellinger processes are computed.
- [[doleans-dade-exponential]] — the exponential martingale underlying likelihood ratios.
- [[levy-processes]] — Hellinger processes for processes with independent increments.
- [[sigma-algebra-measurability]] — foundations of measures and $\sigma$-algebras.
