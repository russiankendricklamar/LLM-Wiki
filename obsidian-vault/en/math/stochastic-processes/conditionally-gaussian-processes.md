---
title: "Conditionally Gaussian Processes"
category: "Filtering Theory"
order: 3
lang: "en"
slug: "conditionally-gaussian-processes"
---

# Conditionally Gaussian Processes

A partially observed system $(\theta, \xi)$ is called conditionally Gaussian if the conditional distribution of the signal $\theta$ given the observations $\xi$ is Gaussian, even though the joint distribution of $(\theta, \xi)$ may be far from Gaussian. This concept, developed extensively by Liptser and Shiryaev, identifies the broadest natural class of [[nonlinear-filtering|nonlinear filtering]] problems admitting a finite-dimensional solution: the conditional distribution is fully characterized by the conditional mean $m_t$ and conditional covariance $\gamma_t$, and both satisfy explicit stochastic differential equations.

The conditionally Gaussian framework strictly generalizes the classical [[kalman-filter|Kalman-Bucy filter]]. In the Kalman-Bucy setting, both signal and observation equations are linear with additive Gaussian noise, making the covariance $\gamma_t$ deterministic (it satisfies a Riccati ODE independent of the observations). In the conditionally Gaussian case, the observation coefficients may depend on the state, so $\gamma_t$ can be random — yet the Gaussian structure of the conditional distribution is preserved.

## The Conditionally Gaussian Model

Consider the system:

$$d\theta_t = \bigl[a_0(t, \xi) + a_1(t, \xi)\,\theta_t\bigr]\,dt + b(t, \xi)\,dV_t,$$

$$d\xi_t = \bigl[A_0(t, \xi) + A_1(t, \xi)\,\theta_t\bigr]\,dt + B(t, \xi)\,dW_t,$$

where $V$ and $W$ are independent Wiener processes, and the coefficients $a_0, a_1, b, A_0, A_1, B$ are non-anticipative functionals of the observation path $\xi$. The signal equation is **linear in $\theta$** given the observations, but the coefficients may depend on $\xi$ in an arbitrary (adapted) way.

**Definition.** The pair $(\theta, \xi)$ is **conditionally Gaussian** if for each $t$, the conditional distribution of $\theta_t$ given $\mathcal{F}_t^\xi$ is Gaussian:

$$\mathcal{L}(\theta_t \mid \mathcal{F}_t^\xi) = \mathcal{N}(m_t, \gamma_t),$$

where $m_t = \mathbb{E}[\theta_t \mid \mathcal{F}_t^\xi]$ and $\gamma_t = \mathbb{E}[(\theta_t - m_t)(\theta_t - m_t)^\top \mid \mathcal{F}_t^\xi]$.

## The Filtering Equations

**Theorem (Liptser-Shiryaev).** Under regularity conditions on the coefficients, the conditional mean and covariance satisfy:

$$dm_t = \bigl[a_0(t,\xi) + a_1(t,\xi)\,m_t\bigr]\,dt + \gamma_t A_1^\top(t,\xi)\,\bigl[B B^\top\bigr]^{-1}(t,\xi)\,d\nu_t,$$

where $\nu_t$ is the [[innovation-process|innovation process]]:

$$d\nu_t = d\xi_t - \bigl[A_0(t,\xi) + A_1(t,\xi)\,m_t\bigr]\,dt.$$

The conditional covariance satisfies:

$$\frac{d\gamma_t}{dt} = a_1(t,\xi)\,\gamma_t + \gamma_t\,a_1^\top(t,\xi) + b\,b^\top(t,\xi) - \gamma_t\,A_1^\top(t,\xi)\,\bigl[BB^\top\bigr]^{-1}(t,\xi)\,A_1(t,\xi)\,\gamma_t.$$

This is a **matrix Riccati equation**, but unlike in the Kalman-Bucy case, the coefficients $a_1, A_1, b, B$ depend on $\xi$ and are therefore random. The Riccati equation is driven pathwise by the observation trajectory.

**Key structural point:** The equation for $m_t$ is a stochastic differential equation driven by the innovation $\nu_t$. The equation for $\gamma_t$ is an ordinary differential equation along each observation path — no stochastic integral appears. However, since the coefficients depend on $\xi$, the covariance $\gamma_t$ is a random process.

## Comparison with Kalman-Bucy

In the classical [[kalman-filter|Kalman-Bucy filter]], the coefficients $a_1, A_1, b, B$ are deterministic (they do not depend on $\xi$). Then:

- The Riccati equation for $\gamma_t$ has deterministic coefficients, so $\gamma_t$ is deterministic.
- The filter gain $K_t = \gamma_t A_1^\top [BB^\top]^{-1}$ is deterministic.
- The conditional mean $m_t$ is the only random quantity, driven linearly by the innovation.

In the conditionally Gaussian case:

- The Riccati equation has random coefficients ($\xi$-dependent), so $\gamma_t$ is random.
- The filter gain is random.
- The system remains finite-dimensional (two quantities $m_t, \gamma_t$ suffice), but both are stochastic processes.

This is the maximal extension of the Kalman-Bucy filter that preserves the Gaussian conditional structure.

## Proof Sketch

The proof that the conditional distribution remains Gaussian proceeds by:

1. **Reference measure.** Pass to the measure $\tilde{P}$ under which $\xi$ is a Wiener process independent of $\theta$. Under $\tilde{P}$, the signal $\theta$ is a Gaussian process (since its [[stochastic-differential-equations|SDE]] is linear with coefficients depending only on $\xi$, which under $\tilde{P}$ is independent).
2. **Conditional Gaussianity under $\tilde{P}$.** Under $\tilde{P}$, the conditional distribution $\tilde{P}(\theta_t \in \cdot \mid \mathcal{F}_t^\xi)$ is Gaussian because $\theta$ and $\xi$ are independent and $\theta$ is Gaussian.
3. **Absolute continuity.** Return to the original measure $P$ via the [[doleans-dade-exponential|Doleans-Dade exponential]]. The Radon-Nikodym derivative is an exponential martingale that is **log-linear in $\theta$** (because $A_1 \theta$ appears linearly in the observation drift). An exponential-linear transformation of a Gaussian remains Gaussian.
4. **Derive the equations** for $m_t$ and $\gamma_t$ by Ito's formula applied to the Kallianpur-Striebel representation.

## Examples and Applications

**Target tracking with range-dependent noise.** A target moves linearly: $d\theta_t = v\,dt + \sigma_\theta\,dV_t$. The radar observation has noise intensity depending on the range (a function of position observations): $d\xi_t = H\theta_t\,dt + B(\xi)\,dW_t$. The system is conditionally Gaussian: the observation noise $B(\xi)$ depends on $\xi$ but the signal enters linearly. The covariance $\gamma_t$ is random, adapting to the quality of the observations.

**Stochastic volatility filtering.** Consider a log-volatility model where $\theta_t = \log V_t$ follows an Ornstein-Uhlenbeck process, and log-returns depend linearly on $\theta_t$. If the observation noise depends on past returns (heteroskedastic), the conditionally Gaussian framework applies, giving a finite-dimensional filter for the log-volatility.

**Credit risk with latent state.** A firm's credit quality $\theta_t$ evolves as a linear diffusion, and the observed credit spread depends linearly on $\theta_t$ with noise intensity that varies with market conditions (observable). The conditional mean $m_t$ gives the optimal estimate of credit quality, while $\gamma_t$ quantifies estimation uncertainty.

**Interest rate models.** In affine term structure models, short rate factors follow conditionally Gaussian dynamics when observed through bond yields with maturity-dependent coefficients. The resulting filter provides real-time factor estimates from the yield curve.

## Multivariate Extensions

For $\theta \in \mathbb{R}^n$ and $\xi \in \mathbb{R}^m$, the conditional distribution is $\mathcal{N}(m_t, \Gamma_t)$ where $\Gamma_t$ is an $n \times n$ matrix. The Riccati equation becomes a matrix ODE. The innovation is $m$-dimensional, and the gain matrix is $K_t = \Gamma_t A_1^\top [BB^\top]^{-1} \in \mathbb{R}^{n \times m}$.

The computational cost scales as $O(n^2 m + n^3)$ per time step (matrix Riccati update plus gain computation), which is tractable for moderate dimensions — a vast improvement over the infinite-dimensional [[nonlinear-filtering|general nonlinear filter]] or [[particle-filter|particle methods]] whose cost grows exponentially with dimension.

## Related Articles

- [[nonlinear-filtering]] — the general theory; conditionally Gaussian models are the primary finite-dimensional special case.
- [[innovation-process]] — the innovation driving the conditional mean equation.
- [[kalman-filter]] — the fully linear special case where $\gamma_t$ is deterministic.
- [[heston-model]] — stochastic volatility filtering as an application.
- [[hidden-markov-models]] — discrete-state analog: the conditional distribution is a finite mixture.
- [[particle-filter]] — numerical alternative when conditional Gaussianity fails.
- [[doleans-dade-exponential]] — the exponential martingale in the reference measure construction.
- [[stochastic-differential-equations]] — the signal [[stochastic-differential-equations|SDE]] with linear structure.
