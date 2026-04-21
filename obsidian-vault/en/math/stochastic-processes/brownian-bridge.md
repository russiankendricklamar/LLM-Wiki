---
title: "Brownian Bridge"
category: "Stochastic Processes"
order: 20
lang: "en"
slug: "brownian-bridge"
growth: "seedling"
---

## Definition

The Brownian bridge $B_t^{\text{br}}$ on the interval $[0, T]$ is a Gaussian process obtained by conditioning standard Brownian motion $W_t$ on the constraint $W_T = 0$. Formally, it is Brownian motion pinned at both endpoints: $B_0^{\text{br}} = 0$ and $B_T^{\text{br}} = 0$.

The explicit construction in terms of Brownian motion reads:

$$B_t^{\text{br}} = W_t - \frac{t}{T} W_T$$

This representation shows that the bridge is obtained from $W_t$ by subtracting the linear interpolation of the final value. The process is Gaussian with zero mean $\mathbb{E}[B_t^{\text{br}}] = 0$ and covariance:

$$\text{Cov}(B_s^{\text{br}}, B_t^{\text{br}}) = \min(s, t) - \frac{st}{T} = s\left(1 - \frac{t}{T}\right), \quad s \leq t$$

The variance is maximized at the midpoint $t = T/2$, where $\text{Var}(B_{T/2}^{\text{br}}) = T/4$.

## Bridge Between Arbitrary Points

A generalized bridge connecting points $a$ and $b$ over interval $[0, T]$ is defined as:

$$X_t = a + (b - a)\frac{t}{T} + B_t^{\text{br}}$$

Here the linear trend $a + (b - a)t/T$ enforces the boundary conditions $X_0 = a$ and $X_T = b$, while the Brownian bridge adds random fluctuation with pinned endpoints.

## [[stochastic-differential-equations|SDE]] Representation and Numerical Singularity

The Brownian bridge satisfies the stochastic differential equation:

$$dB_t^{\text{br}} = -\frac{B_t^{\text{br}}}{T - t} dt + dW_t$$

The defining technical feature is a singularity in the drift coefficient of the form $1/(T-t)$ as $t \to T$. The diffusion coefficient remains regular, but the drift diverges. This means that as $t$ approaches $T$, the bridge develops a strong repulsive force pulling the process toward zero.

When integrating this SDE numerically, adaptive or non-uniform time grids are necessary to stabilize computations near the terminal point. Explicit Euler schemes become unstable; implicit methods or specialized quadrature formulas are preferred. Care must be taken to handle the singularity; standard discretization schemes fail without appropriate modifications.

## Karhunen-Loève Expansion

The bridge admits an orthogonal expansion in the eigenfunctions of its covariance kernel:

$$B_t^{\text{br}} = \sqrt{2} \sum_{n=1}^{\infty} Z_n \frac{\sin(n\pi t/T)}{n\pi}$$

where $Z_n \sim \mathcal{N}(0, 1)$ are independent standard Gaussians, and the corresponding [[spectral-theory-operators|eigenvalues]] are:

$$\lambda_n = \frac{1}{(n\pi)^2}$$

This expansion connects the process geometry to harmonic analysis. The series converges in the $L^2([0, T])$ norm, and for practical applications (including [[monte-carlo-method|Monte Carlo]]), the first few terms suffice since energy concentrates in low-frequency components.

## Kolmogorov-Smirnov Statistics

The empirical cumulative distribution function $F_n$ of a sample of size $n$ from a distribution $F$ is asymptotically linked to the Brownian bridge. The normalized deviation:

$$\sqrt{n}(F_n(x) - F(x)) \xrightarrow{d} B_x^{\text{br}}$$

in the sense of weak convergence in the Skorohod space $D[0, 1]$ (holding for fixed $x$). The Kolmogorov-Smirnov test statistic is:

$$D_n = \sup_{x} |F_n(x) - F(x)|$$

and in the limit, the distribution of $\sqrt{n} D_n$ coincides with that of $\sup_{t \in [0, 1]} |B_t^{\text{br}}|$. Critical values for significance level $\alpha$ are tabulated via the Kolmogorov distribution, which is given by:

$$P\left(\sup_{0 \leq t \leq 1} |B_t^{\text{br}}| > x\right) = 2 \sum_{k=1}^{\infty} (-1)^{k-1} e^{-2k^2x^2}$$

This formula enables the construction of nonparametric goodness-of-fit tests, widely applied in mathematical statistics.

## Brownian Meanders and Excursions

Brownian motion conditioned to remain positive on $[0, T]$ is called the Brownian meander. Closely related is the notion of an excursion — a path of Brownian motion emanating from zero and returning to zero, constrained to be nonnegative in between. An excursion is formally a bridge of the process $|W_t|$. These constructions arise in combinatorics, the theory of random trees, and parking functions.

## Applications in Finance and Numerical Methods

**Barrier option pricing:** when valuing derivatives with barrier conditions (e.g., [[barrier-asian-options|barrier options]]), between discrete time steps $t_i$ and $t_{i+1}$, the Brownian bridge trajectory is used to accurately detect barrier crossings. This reduces [[monte-carlo-method|Monte Carlo]] simulation error.

**Bridge sampling:** in [[monte-carlo-method|Monte Carlo simulation]], constructing random paths through intermediate points via bridges decreases estimator variance, since it pins endpoint values and generates intermediate layers more efficiently.

**Sequential testing:** in adaptive trading strategies and sequential statistical tests, cumulative sums of returns or statistics are conditioned on pre-specified terminal thresholds, yielding Brownian bridges.

## Related Constructions

The [[ornstein-uhlenbeck-process|Ornstein-Uhlenbeck bridge]] is an Ornstein-Uhlenbeck process conditioned on a fixed endpoint value. It appears in functional integral representations of quantum mechanics and gauge theories. More generally, any diffusion conditioned to achieve a specified endpoint becomes a pinned or bridged version of that diffusion.

