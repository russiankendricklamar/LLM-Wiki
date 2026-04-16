---
title: "Nonlinear Filtering"
category: "Filtering Theory"
order: 1
lang: "en"
slug: "nonlinear-filtering"
---

# Nonlinear Filtering

Nonlinear filtering is the central problem studied by Liptser and Shiryaev: given a partially observed stochastic system, compute the conditional distribution of the hidden signal given the available observations. Unlike the [[kalman-filter|Kalman filter]], which handles only linear-Gaussian systems, the general nonlinear theory must track an infinite-dimensional object — the full conditional distribution — making it one of the deepest problems in stochastic analysis.

The mathematical framework connects measure-theoretic probability, stochastic calculus, and the theory of stochastic partial differential equations. The two main equations — Kushner-Stratonovich and Zakai — provide complementary descriptions of the evolving conditional distribution, and their study has driven much of the modern theory of filtering, stochastic control, and signal processing.

## The Partially Observed System

The standard signal-observation model has two components. The **signal** $\theta_t$ is a Markov diffusion satisfying:

$$d\theta_t = a(t, \theta_t)\,dt + b(t, \theta_t)\,dV_t,$$

where $V$ is a Wiener process. The signal is not observed directly. Instead, one observes the **observation process**:

$$\xi_t = \int_0^t h(s, \theta_s)\,ds + W_t,$$

where $W$ is a Wiener process independent of $V$, and $h$ is the sensor function. The goal of nonlinear filtering is to compute the **optimal filter**:

$$\pi_t(f) = \mathbb{E}[f(\theta_t) \mid \mathcal{F}_t^\xi],$$

for test functions $f$, where $\mathcal{F}_t^\xi = \sigma(\xi_s : 0 \leq s \leq t)$ is the observation filtration. The full conditional distribution $\pi_t$ is a random measure-valued process.

## The Kushner-Stratonovich Equation

The conditional distribution $\pi_t$ satisfies the **Kushner-Stratonovich (KS) equation**:

$$d\pi_t(f) = \pi_t(\mathcal{L}f)\,dt + \bigl[\pi_t(fh) - \pi_t(f)\pi_t(h)\bigr]\bigl(d\xi_t - \pi_t(h)\,dt\bigr),$$

where $\mathcal{L}$ is the generator of the signal diffusion:

$$\mathcal{L}f = a \cdot \nabla f + \tfrac{1}{2}\,\mathrm{tr}(bb^\top \nabla^2 f).$$

The term $d\xi_t - \pi_t(h)\,dt$ is the **innovation** $d\nu_t$ — the new information in the observations (see [[innovation-process]]). The KS equation is a nonlinear stochastic evolution equation: the coefficients depend on $\pi_t$ itself, making analysis difficult.

## The Zakai Equation

Duncan, Mortensen, and Zakai introduced an **unnormalized** conditional measure $\sigma_t$ satisfying the **Zakai equation**:

$$d\sigma_t(f) = \sigma_t(\mathcal{L}f)\,dt + \sigma_t(fh)\,d\xi_t.$$

The Zakai equation is **linear** in $\sigma_t$, which is a major technical advantage. The normalized filter is recovered via $\pi_t(f) = \sigma_t(f) / \sigma_t(1)$. The unnormalized measure $\sigma_t$ is related to the conditional distribution through a Girsanov-type change of measure: under a reference measure where $\xi$ is a Wiener process, $\sigma_t$ captures the Radon-Nikodym derivative weighted conditional expectation.

Existence and uniqueness of solutions to the Zakai equation can be established under broad conditions on $a$, $b$, and $h$, using the theory of measure-valued stochastic evolution equations.

## Why Nonlinear Filtering is Hard

The conditional distribution $\pi_t$ lives in an infinite-dimensional space (the space of probability measures on the state space). Unlike the linear-Gaussian case where $\pi_t$ is Gaussian and hence characterized by finitely many parameters (mean and covariance), in general no finite-dimensional sufficient statistic exists.

**Theorem (Benes-Hazewinkel-Marcus).** The only diffusion models for which the nonlinear filter admits a finite-dimensional recursive representation are essentially the linear-Gaussian case ([[kalman-filter]]), the Benes filter (where the drift satisfies a specific Riccati-type condition), and certain exponential families.

This **curse of dimensionality** motivates both the study of [[conditionally-gaussian-processes|conditionally Gaussian]] approximations and numerical methods such as the [[particle-filter|particle filter]].

## Proof Architecture

The derivation of the filtering equations proceeds in several stages:

1. **Reference measure method.** Construct a probability measure $\tilde{P}$ under which $\xi$ is a standard Wiener process independent of $\theta$. By Girsanov's theorem ([[girsanov-semimartingales]]), the Radon-Nikodym derivative is the [[doleans-dade-exponential|Doleans-Dade exponential]] $\mathcal{E}_t = \exp\bigl(\int_0^t h(\theta_s)\,d\xi_s - \frac{1}{2}\int_0^t h^2(\theta_s)\,ds\bigr)$.
2. **Kallianpur-Striebel formula.** Under $\tilde{P}$: $\pi_t(f) = \tilde{\mathbb{E}}[f(\theta_t)\mathcal{E}_t \mid \mathcal{F}_t^\xi] / \tilde{\mathbb{E}}[\mathcal{E}_t \mid \mathcal{F}_t^\xi]$.
3. **Derive the Zakai equation** by applying Ito's formula to the numerator $\sigma_t(f) = \tilde{\mathbb{E}}[f(\theta_t)\mathcal{E}_t \mid \mathcal{F}_t^\xi]$.
4. **Derive KS** from Zakai by Ito's formula for the ratio $\sigma_t(f)/\sigma_t(1)$.

## Examples and Applications

**Linear-Gaussian case.** When $a(\theta) = A\theta$, $b = \text{const}$, and $h(\theta) = H\theta$, the conditional distribution is Gaussian. The KS equation reduces to the Kalman-Bucy filter: $dm_t = Am_t\,dt + \gamma_t H^\top(d\xi_t - Hm_t\,dt)$ with $\gamma_t$ satisfying a matrix Riccati ODE. See [[kalman-filter]].

**Benes filter.** When $h$ is constant and the drift $a$ satisfies $a' + a^2/2 = \text{quadratic}$, the conditional density remains in a known exponential family, giving an exactly solvable nonlinear filter.

**Stochastic volatility.** In the [[heston-model]], the volatility $V_t$ plays the role of $\theta_t$ and asset returns provide the observations. Filtering $V_t$ from discrete returns is a nonlinear filtering problem typically solved by [[particle-filter|particle methods]] or [[hidden-markov-models|HMM]] discretizations.

**Target tracking and navigation.** Radar and sonar systems observe range and bearing — highly nonlinear functions of the target state — making this a canonical application of nonlinear filtering theory.

## Numerical Methods

Because the nonlinear filter is infinite-dimensional, practical implementation requires approximation. The main approaches are:

- **Extended Kalman filter (EKF).** Linearize $h$ around the current estimate and apply the [[kalman-filter|Kalman update]]. Simple but can diverge when the nonlinearity is severe.
- **Particle filters.** Represent $\pi_t$ by a weighted empirical measure with $N$ particles, propagated by sequential Monte Carlo. See [[particle-filter]]. Convergence as $N \to \infty$ follows from the law of large numbers for interacting particle systems.
- **Projection filters.** Project the Kushner-Stratonovich equation onto a finite-dimensional manifold of densities (e.g., exponential families), yielding a finite SDE for the parameters.
- **Spectral methods.** Expand the conditional density in eigenfunctions of $\mathcal{L}$ and truncate, converting the Zakai SPDE into a finite system of SDEs.

The choice among these methods depends on the dimension of $\theta$, the severity of the nonlinearity in $h$, and the real-time constraints of the application.

## Related Articles

- [[innovation-process]] — the innovation process driving the filtering equations.
- [[conditionally-gaussian-processes]] — the class of models where the filter remains finite-dimensional.
- [[kalman-filter]] — the linear-Gaussian special case.
- [[particle-filter]] — numerical approximation of the nonlinear filter.
- [[hidden-markov-models]] — discrete-state filtering.
- [[girsanov-semimartingales]] — the change of measure underlying the reference measure approach.
- [[doleans-dade-exponential]] — the exponential martingale in the Radon-Nikodym derivative.
- [[stochastic-differential-equations]] — the signal dynamics.
- [[brownian-motion]] — the driving noise in observation and signal.
