---
slug: "/math/absolute-continuity-process-measures"
title: "Absolute Continuity of Process Measures"
category: "Asymptotic Statistics"
order: 6
lang: "en"
---

# Absolute Continuity of Process Measures

When can one diffusion process be statistically distinguished from another on a finite time horizon? The answer is governed by the **absolute continuity and singularity** of their path-space measures. Liptser and Shiryaev provide the definitive treatment: for Ito processes sharing the same volatility, the measures are equivalent if and only if an integral condition on the drift difference holds, and the Radon-Nikodym density takes the explicit Girsanov form. When volatilities differ, the quadratic variation reveals the truth instantly, and the measures are always singular. This dichotomy is the foundation of drift estimation, model comparison, and signal detection for continuous-time processes.

## The Setup

Consider two Ito processes on $[0, T]$:

$$dX_t = a_t \, dt + \sigma_t \, dW_t, \qquad dY_t = b_t \, dt + \sigma_t \, dW_t,$$

where $W$ is a standard [[brownian-motion|Brownian motion]] and $a, b, \sigma$ are adapted processes. Let $\mathbb{P}^X$ and $\mathbb{P}^Y$ denote their respective laws on the path space $C[0,T]$, equipped with the filtration $(\mathcal{F}_t)$.

The critical observation is that both processes share the **same diffusion coefficient** $\sigma$. This is the regime where absolute continuity is possible.

## The Liptser-Shiryaev Theorem

**Theorem.** If $\sigma_t > 0$ a.s. for Lebesgue-a.e. $t$, then $\mathbb{P}^X \ll \mathbb{P}^Y$ on $\mathcal{F}_T$ if and only if

$$\int_0^T \left(\frac{a_t - b_t}{\sigma_t}\right)^2 dt < \infty \quad \text{a.s.}$$

In that case, the Radon-Nikodym density is

$$\frac{d\mathbb{P}^X}{d\mathbb{P}^Y} = \exp\!\left(\int_0^T \frac{a_t - b_t}{\sigma_t} \, d\widetilde{W}_t - \frac{1}{2}\int_0^T \left(\frac{a_t - b_t}{\sigma_t}\right)^2 dt\right),$$

where $\widetilde{W}$ is a Brownian motion under $\mathbb{P}^Y$ (the [[innovation-process|innovation]] of $Y$). This is precisely the [[girsanov-semimartingales|Girsanov density]] with the adapted integrand $\theta_t = (a_t - b_t)/\sigma_t$.

When the drift difference is deterministic, this reduces to the [[cameron-martin-formula|Cameron-Martin formula]].

## Why Different Volatilities Imply Singularity

If the two processes have **different** diffusion coefficients $\sigma^X \neq \sigma^Y$, then their quadratic variations $\langle X \rangle_t = \int_0^t (\sigma^X_s)^2 \, ds$ and $\langle Y \rangle_t = \int_0^t (\sigma^Y_s)^2 \, ds$ differ. Since the quadratic variation is a **pathwise observable** (it can be recovered from the path with probability one), any single realization of the process reveals which volatility is in force. Therefore $\mathbb{P}^X \perp \mathbb{P}^Y$ — the measures are singular, and a perfect test exists.

This has a striking consequence in finance: one can **always** distinguish a [[geometric-brownian-motion|geometric Brownian motion]] from a local volatility model (or the [[heston-model|Heston model]]) given a continuous record of the price, because their instantaneous volatilities differ. The drift, however, cannot be estimated consistently from a single path on $[0, T]$ — only the volatility can.

## Novikov's Condition

For the Girsanov density to be a **true martingale** (not just a local martingale), one needs conditions ensuring $\mathbb{E}\!\left[\frac{d\mathbb{P}^X}{d\mathbb{P}^Y}\right] = 1$.

**Novikov's condition.** If

$$\mathbb{E}\!\left[\exp\!\left(\frac{1}{2}\int_0^T \theta_t^2 \, dt\right)\right] < \infty, \quad \theta_t = \frac{a_t - b_t}{\sigma_t},$$

then the density process $Z_t = \frac{d\mathbb{P}^X}{d\mathbb{P}^Y}\bigg|_{\mathcal{F}_t}$ is a uniformly integrable martingale, guaranteeing $\mathbb{P}^X \equiv \mathbb{P}^Y$ (mutual absolute continuity) on $\mathcal{F}_T$.

Novikov's condition is sufficient but not necessary. The weaker **Kazamaki condition** — that the [[doleans-dade-exponential|stochastic exponential]] $\mathcal{E}(\theta \cdot W)$ is a martingale — is both necessary and sufficient.

## Structure Theorem

**Theorem.** Every probability measure $\mathbb{Q} \ll \mathbb{P}^W$ on $\mathcal{F}^W_T$ is the law of an Ito process of the form

$$dX_t = a_t \, dt + dW_t$$

for some adapted $a$ with $\int_0^T a_t^2 \, dt < \infty$ a.s. under $\mathbb{Q}$.

This is a converse to Girsanov: every absolutely continuous perturbation of Wiener measure is realized by adding a drift. Combined with the [[martingale-representation|martingale representation theorem]], it gives a complete characterization of the set of measures equivalent to Wiener measure.

## The Cramer-Rao Bound for Drift Estimation

When $dX_t = \mu \, dt + dW_t$ with unknown constant drift $\mu$, the Fisher information for $\mu$ based on observation over $[0, T]$ is $I_T(\mu) = T$. The Cramer-Rao lower bound gives

$$\text{Var}(\hat{\mu}) \geq \frac{1}{T}$$

for any unbiased estimator $\hat{\mu}$. The MLE $\hat{\mu} = X_T / T$ achieves this bound and is efficient. The [[local-asymptotic-normality|LAN]] property of the model as $T \to \infty$ shows that the statistical experiment converges to a Gaussian shift, and the bound is asymptotically sharp. For volatility estimation, the rate is $T^{-1}$ for continuous observation but deteriorates for discrete sampling — a fundamental asymmetry between drift and volatility.

## Connection to Filtering

In the [[nonlinear-filtering|nonlinear filtering]] framework, absolute continuity of the signal-plus-noise measure with respect to the pure-noise measure is the key structural assumption. The Radon-Nikodym density is the unnormalized filter, and the [[innovation-process|innovation process]] is the Brownian motion under the observation measure. The absolute continuity condition ensures that the filtering equations (Zakai, Kushner-Stratonovich) are well-posed.

## Applications

**Model comparison in finance.** Given a continuous price record, can one statistically distinguish Model A from Model B? If they share the same volatility structure but differ in drift, a finite-horizon likelihood ratio test is available via the Girsanov density. If volatilities differ, a single realized path suffices for perfect discrimination — explaining why calibrating volatility is the central task in options pricing, not drift estimation.

**Signal detection.** Testing $H_0$: pure noise ($a = 0$) versus $H_1$: signal present ($a \neq 0$) in Gaussian white noise is the prototypical [[sequential-hypothesis-testing|sequential testing]] problem. The error exponents are determined by $\int_0^T a_t^2 \, dt$.

**[[contiguity-measures|Contiguity]] analysis.** When comparing sequences of experiments (e.g., increasing observation horizons), the absolute continuity structure determines whether the experiments are contiguous or eventually singular — and thus whether consistent testing or estimation is possible.

## Related Articles

- [[girsanov-semimartingales]] — the measure-change machinery
- [[cameron-martin-formula]] — the deterministic-drift special case
- [[doleans-dade-exponential]] — the density as a stochastic exponential
- [[contiguity-measures]] — asymptotic regime for sequences of measures
- [[hellinger-processes]] — quantifying distance between measures
- [[density-processes]] — likelihood ratio dynamics
- [[local-asymptotic-normality]] — LAN and efficient inference
- [[innovation-process]] — the observation Brownian motion
- [[nonlinear-filtering]] — filtering as a consequence of absolute continuity
- [[geometric-brownian-motion]] — volatility identification in finance
- [[heston-model]] — stochastic volatility and singularity
- [[sequential-hypothesis-testing]] — testing based on the likelihood ratio
