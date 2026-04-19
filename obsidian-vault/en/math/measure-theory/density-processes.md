---
slug: "/math/density-processes"
title: "Density Processes and Likelihood Ratios"
category: "Asymptotic Statistics"
order: 4
lang: "en"
---

# Density Processes and Likelihood Ratios

When two probability measures $P$ and $Q$ live on a filtered space $(\Omega, \mathcal{F}, (\mathcal{F}_t)_{t \geq 0})$, the static Radon-Nikodym derivative $dQ/dP$ is replaced by a dynamic object: the **density process** $Z_t = dQ|_{\mathcal{F}_t}/dP|_{\mathcal{F}_t}$. This process tracks how the likelihood ratio evolves as information accumulates. It is the central device connecting measure changes, Girsanov's theorem, and the statistical analysis of stochastic processes. Jacod and Shiryaev build their entire theory of contiguity, absolute continuity, and singularity of measures on filtered spaces around the density process and its logarithm.

## Definition and Basic Properties

Let $P$ and $Q$ be probability measures on $(\Omega, \mathcal{F})$ with $\mathcal{F} = \mathcal{F}_\infty$, and assume $Q \ll P$ on each $\mathcal{F}_t$ (local absolute continuity).

**Definition.** The **density process** of $Q$ with respect to $P$ is

$$Z_t = \frac{dQ|_{\mathcal{F}_t}}{dP|_{\mathcal{F}_t}}, \qquad t \geq 0.$$

**Fundamental properties:**

1. $Z$ is a **$P$-martingale**: $\mathbb{E}_P[Z_t \mid \mathcal{F}_s] = Z_s$ for $s \leq t$. This follows immediately from the tower property applied to the conditional Radon-Nikodym derivatives.
2. $Z_t \geq 0$ a.s., and $\mathbb{E}_P[Z_t] = 1$ for all $t$.
3. If $Q$ is only **locally absolutely continuous** (not globally), then $Z$ is a $P$-**supermartingale** with $\mathbb{E}_P[Z_t] \leq 1$. The mass defect $1 - \mathbb{E}_P[Z_t]$ measures the singularity that has accumulated by time $t$.
4. $Z$ is cadlag and adapted. The set $\{Z_t > 0\}$ is $P$-a.s. non-increasing; once $Z$ hits zero, it stays there.

## Representation via Stochastic Exponential

The density process admits a canonical representation through the [[doleans-dade-exponential|Doleans-Dade exponential]].

**Theorem.** If $Z > 0$ $P$-a.s. (equivalently, $Q$ is locally equivalent to $P$), there exists a unique local $P$-martingale $M$ with $M_0 = 0$ such that

$$Z = \mathcal{E}(M),$$

where $\mathcal{E}(M)_t = \exp\!\left(M_t - \frac{1}{2}\langle M^c\rangle_t\right)\prod_{s \leq t}(1 + \Delta M_s)\,e^{-\Delta M_s}.$

The local martingale $M$ is called the **innovation martingale** of the measure change. Its continuous part $M^c$ captures the Girsanov drift change, while its jumps $\Delta M$ modify the jump compensator.

**Log-likelihood process.** The **log-likelihood** $\ell_t = \log Z_t$ satisfies:

$$\ell_t = M_t - \frac{1}{2}\langle M^c\rangle_t + \sum_{s \leq t}\left[\log(1 + \Delta M_s) - \Delta M_s\right].$$

This decomposition separates the martingale fluctuation ($M$) from the predictable information accumulation.

## Girsanov's Theorem as a Corollary

[[girsanov-semimartingales|Girsanov's theorem]] is a direct consequence of the density process structure. If $X$ is a $P$-semimartingale with characteristics $(B^P, C, \nu^P)$, then under $Q = Z \cdot P$ the characteristics become $(B^Q, C, \nu^Q)$, where:

- The continuous martingale part acquires a drift: $B^Q = B^P + \langle X^c, M^c \rangle$.
- The quadratic variation $C$ is **unchanged** (measures equivalent on each $\mathcal{F}_t$ cannot alter the continuous local martingale bracket).
- The compensator of the jump measure changes: $\nu^Q(dt, dx) = (1 + \beta_t(x))\,\nu^P(dt, dx)$, where $\beta$ is determined by $M$.

This shows that the density process $Z$ (through its innovation $M$) completely determines how the [[predictable-compensator|predictable characteristics]] transform under the measure change.

## Hellinger Process Connection

The [[hellinger-processes|Hellinger process]] of order $\alpha \in (0,1)$ between $P$ and $Q$ is the predictable increasing process $h^{(\alpha)}$ defined by:

$$h^{(\alpha)}_t = \frac{\alpha(1-\alpha)}{2}\langle M^c\rangle_t + \int_0^t\!\!\int \left[1 - (1+x)^\alpha(1+x)^{-(1-\alpha)} + \ldots\right]\nu^P(ds, dx).$$

For the important case $\alpha = 1/2$ (squared Hellinger distance):

$$h^{(1/2)}_t = \frac{1}{8}\langle M^c\rangle_t + \int_0^t\!\!\int\left(1 - \sqrt{1 + \beta_s(x)}\right)^2 \nu^P(ds, dx).$$

The Hellinger process governs absolute continuity and singularity: $Q \ll P$ on $\mathcal{F}_\infty$ if and only if $h^{(1/2)}_\infty < \infty$ a.s., and $Q \perp P$ on $\mathcal{F}_\infty$ if and only if $h^{(1/2)}_\infty = \infty$ a.s.

## Fisher Information and the Density Process

The **Fisher information** for a parametric family $\{P_\theta\}$ can be expressed as a functional of the density process. If $Z^\theta_t = dP_\theta|_{\mathcal{F}_t}/dP_{\theta_0}|_{\mathcal{F}_t}$, then the Fisher information rate is:

$$I(\theta_0) = \lim_{h \to 0} \frac{1}{h^2}\, \mathbb{E}_{\theta_0}\!\left[\left(\sqrt{Z^{\theta_0+h}_t} - 1\right)^2\right] \cdot \frac{2}{t}.$$

For diffusion models, this reduces to $I(\theta_0) = \mathbb{E}[(\dot{b}(X_0, \theta_0))^2/\sigma^2(X_0)]$ under ergodicity, connecting the density process to the [[local-asymptotic-normality|LAN]] framework.

## Applications

**Sequential testing (SPRT).** Wald's sequential probability ratio test monitors $Z_t$ and stops at $\tau = \inf\{t : Z_t \notin (A, B)\}$. The martingale property of $Z$ under $P$ and the optional stopping theorem yield the Wald identities for the operating characteristics (error probabilities and expected sample size). The SPRT is **optimal** among all sequential tests with the same error bounds — this is a consequence of $Z$ being a martingale.

**Parameter estimation for diffusions.** The MLE for the drift parameter of a continuously observed diffusion is obtained by maximizing $\ell_t(\theta) = \log Z^\theta_t$. The score function $\dot{\ell}_t(\theta_0)$ is a martingale, and its predictable quadratic variation is the observed Fisher information, connecting to the [[local-asymptotic-normality|LAN]] theory.

**Change-point detection.** Suppose the law of a process switches from $P$ to $Q$ at an unknown time $\tau$. The CUSUM procedure monitors $\max_{s \leq t} \log(Z_t / Z_s)$, and the density process structure provides sharp bounds on the detection delay through martingale inequalities.

## Singularity and Absolute Continuity Dichotomy

For measures on the path space of continuous semimartingales, there is a sharp **dichotomy**: if $P$ and $Q$ are laws of Ito processes with different drifts but the same diffusion coefficient, they are either mutually absolutely continuous or mutually singular on $\mathcal{F}_\infty$ (on the entire path). Absolute continuity holds if and only if the Novikov or Kazamaki condition is satisfied by the innovation martingale $M$.

For processes with jumps, the situation is richer: absolute continuity on $\mathcal{F}_\infty$ requires both the continuous and jump components of the Hellinger process to remain finite, and these conditions can fail independently.

## Related Articles

- [[doleans-dade-exponential]] — the stochastic exponential $\mathcal{E}(M)$ representing the density process.
- [[girsanov-semimartingales]] — measure change for semimartingales, derived from the density process.
- [[hellinger-processes]] — information accumulation and absolute continuity criteria.
- [[contiguity-measures]] — asymptotic theory built on sequences of density processes.
- [[local-asymptotic-normality]] — LAN as a consequence of density process expansions.
- [[predictable-compensator]] — the characteristics that transform under measure change.
- [[doob-meyer-decomposition]] — the supermartingale decomposition when $Q$ is not absolutely continuous.
- [[convergence-semimartingales]] — convergence of density processes in statistical limit theorems.
