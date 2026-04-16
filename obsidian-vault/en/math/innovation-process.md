---
title: "Innovation Process"
category: "Filtering Theory"
order: 2
lang: "en"
slug: "innovation-process"
---

# Innovation Process

The innovation process is a fundamental construction in the theory of stochastic filtering. Given an observation process $\xi_t$ and the optimal filter $\pi_t(h)$, the innovation is the residual $\nu_t = \xi_t - \int_0^t \pi_s(h)\,ds$ — the part of the observations that cannot be predicted from the past. The remarkable fact, established by Liptser and Shiryaev, is that $\nu$ is always a Wiener process with respect to the observation filtration, regardless of the distribution of the hidden signal. This means that the "new information" arriving through observations is always Gaussian.

The innovation process transforms the nonlinear filtering problem: instead of working with the raw observations $\xi_t$ (which carry a complicated dependence on the signal), one can rewrite all filtering equations in terms of the innovation $\nu_t$, which has a clean probabilistic structure.

## Definition and Basic Properties

Consider the standard filtering model: a signal $\theta_t$ and observations:

$$\xi_t = \int_0^t h(s, \theta_s)\,ds + W_t,$$

where $W$ is a Wiener process independent of $\theta$. The **innovation process** is defined as:

$$\nu_t = \xi_t - \int_0^t \pi_s(h)\,ds = \int_0^t \bigl[h(s, \theta_s) - \pi_s(h)\bigr]\,ds + W_t,$$

where $\pi_s(h) = \mathbb{E}[h(s, \theta_s) \mid \mathcal{F}_s^\xi]$ is the optimal filter estimate of the observation drift.

**Theorem (Liptser-Shiryaev).** The innovation process $\nu_t$ is a Wiener process with respect to the observation filtration $(\mathcal{F}_t^\xi)$ and the original probability measure $P$.

The proof uses the Levy characterization of Brownian motion: one shows that $\nu$ is a continuous $\mathcal{F}_t^\xi$-local martingale with quadratic variation $\langle \nu \rangle_t = t$. The martingale property follows from the projection: $\mathbb{E}[d\xi_t - \pi_t(h)\,dt \mid \mathcal{F}_t^\xi] = 0$ by definition of [[conditional-expectation-sigma|conditional expectation]].

## The Innovation Representation Theorem

**Theorem.** The observation filtration and the innovation filtration coincide:

$$\mathcal{F}_t^\xi = \mathcal{F}_t^\nu \quad \text{for all } t \geq 0.$$

This is a deep result. The inclusion $\mathcal{F}_t^\nu \subseteq \mathcal{F}_t^\xi$ is immediate since $\nu$ is constructed from $\xi$ and $\pi_s(h)$ (which is $\mathcal{F}_s^\xi$-measurable). The reverse inclusion $\mathcal{F}_t^\xi \subseteq \mathcal{F}_t^\nu$ requires showing that $\xi_t$ can be recovered from $\{\nu_s : 0 \leq s \leq t\}$: since $\pi_s(h)$ is $\mathcal{F}_s^\xi = \mathcal{F}_s^\nu$-measurable, one can reconstruct $\xi_t = \nu_t + \int_0^t \pi_s(h)\,ds$ from the innovation alone (the integral is adapted to $\mathcal{F}^\nu$).

**Consequence.** Every $\mathcal{F}_t^\xi$-martingale $M_t$ has an **integral representation** with respect to the innovation:

$$M_t = M_0 + \int_0^t \varphi_s\,d\nu_s$$

for some $\mathcal{F}_t^\nu$-predictable process $\varphi$. This is the analog of the martingale representation theorem for [[brownian-motion|Brownian motion]], but in the observation filtration.

## Connection to Girsanov's Theorem

The innovation process has a natural interpretation through change of measure. Under the **reference measure** $\tilde{P}$ (constructed via [[girsanov-semimartingales|Girsanov's theorem]]), the observation $\xi$ is a Wiener process. Under the original measure $P$, the observation has drift $h(\theta_t)$. The innovation $\nu_t$ is obtained by subtracting the best estimate of this drift:

$$\nu_t = \xi_t - \int_0^t \pi_s(h)\,ds.$$

Under $\tilde{P}$, the innovation $\nu$ equals $\xi$ minus a predictable drift, which is still a semimartingale. But under $P$, the innovation is a Wiener process — a cleaner object than $\xi$ itself. This is precisely because the filter $\pi_t(h)$ removes all predictable structure from the observations.

## The Innovation Approach to Filtering

The filtering equations from [[nonlinear-filtering]] can be rewritten entirely in terms of the innovation. The **Kushner-Stratonovich equation** becomes:

$$d\pi_t(f) = \pi_t(\mathcal{L}f)\,dt + \bigl[\pi_t(fh) - \pi_t(f)\pi_t(h)\bigr]\,d\nu_t.$$

This form makes the structure transparent: the filter evolves via a deterministic drift $\pi_t(\mathcal{L}f)\,dt$ (the signal dynamics averaged over the current conditional distribution) plus a correction driven by the innovation (new information). When $d\nu_t$ is large — meaning the observation departs from the prediction — the filter updates significantly. When $d\nu_t$ is small, the filter relies on the signal model.

## Causal vs. Non-Causal Estimation

The innovation formulation sharply distinguishes three estimation problems:

- **Filtering** (causal): estimate $\theta_t$ given $\{\xi_s : 0 \leq s \leq t\}$. The innovation $\nu_s$ for $s \leq t$ suffices.
- **Prediction**: estimate $\theta_{t+\delta}$ given $\{\xi_s : 0 \leq s \leq t\}$. One propagates the filter forward using the signal dynamics without new innovation input.
- **Smoothing** (non-causal): estimate $\theta_s$ for $s < t$ given $\{\xi_u : 0 \leq u \leq t\}$. Requires "future" innovations $\nu_u$ for $u > s$, leading to backward stochastic equations.

The innovation representation theorem guarantees that the observation filtration carries exactly the same information as the innovation filtration, so no information is lost by working with $\nu$ instead of $\xi$.

## Whitening Interpretation

In signal processing terminology, the innovation process **whitens** the observations. The raw observation $\xi_t$ has a complicated correlation structure (because of the signal $\theta$). The innovation $\nu_t$ has independent increments — it is white noise. The map $\xi \mapsto \nu$ is an **invertible causal transformation** (by the innovation representation theorem), so the whitening loses no information.

This has practical consequences: any causal estimator that is optimal for white noise input remains optimal when applied to the innovation extracted from colored observations. The [[kalman-filter|Kalman filter]] can be derived entirely from this principle.

## Example: Scalar Linear Model

For the linear system $d\theta_t = a\theta_t\,dt + b\,dV_t$, $d\xi_t = h\theta_t\,dt + dW_t$, the innovation is:

$$d\nu_t = d\xi_t - h\,m_t\,dt,$$

where $m_t = \mathbb{E}[\theta_t \mid \mathcal{F}_t^\xi]$ is the conditional mean. The Kalman-Bucy filter in innovation form reads:

$$dm_t = a\,m_t\,dt + \gamma_t h\,d\nu_t,$$

where $\gamma_t$ solves the Riccati equation $\dot{\gamma} = 2a\gamma + b^2 - \gamma^2 h^2$. The innovation gain $\gamma_t h$ quantifies how strongly the filter responds to new information. See [[conditionally-gaussian-processes]] for generalizations where the observation coefficient depends on the state.

## Applications

**Recursive estimation.** Any causal estimation algorithm can be reformulated as a functional of the innovation process. This is the basis of modern adaptive filtering in signal processing.

**Likelihood computation.** The log-likelihood of the observations given model parameters can be expressed as $\ell = \int_0^T \pi_t(h)\,d\xi_t - \frac{1}{2}\int_0^T \pi_t(h)^2\,dt = \int_0^T \pi_t(h)\,d\nu_t + \frac{1}{2}\int_0^T \pi_t(h)^2\,dt$, enabling maximum likelihood estimation for partially observed systems.

**Control theory.** In stochastic optimal control with partial observations, the separation principle states that the optimal control is a function of the filter $\pi_t$, and the innovation process drives the controller's information updates.

## Related Articles

- [[nonlinear-filtering]] — the filtering equations that the innovation process drives.
- [[conditionally-gaussian-processes]] — the innovation form of the Kalman-Bucy filter.
- [[kalman-filter]] — the linear-Gaussian case where the innovation approach is most explicit.
- [[brownian-motion]] — the innovation is a Brownian motion in the observation filtration.
- [[girsanov-semimartingales]] — change of measure linking the reference measure and the signal measure.
- [[conditional-expectation-sigma]] — the projection that defines the optimal filter.
- [[discrete-martingales]] — martingale representation in the innovation filtration.
