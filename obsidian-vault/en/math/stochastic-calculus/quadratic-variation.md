---
title: "Quadratic Variation"
category: "Stochastic Calculus"
order: 23
lang: "en"
slug: "/math/quadratic-variation"
growth: "seedling"
---

# Quadratic Variation

Quadratic variation is a fundamental concept in modern stochastic calculus, capturing the "volatility" or oscillatory behavior of a random process at small time scales. Unlike classical analysis, where the quadratic variation of a smooth function is zero, stochastic processes possess nonzero quadratic variation, fundamentally altering the rules of differentiation and leading to the revolutionary insights of Itô calculus.

## Definition and fundamental properties

For an adapted process $M = (M_t)_{t \geq 0}$ with $M_0 = 0$, the quadratic variation is defined via a limit in probability:

$$[M]_t = \lim_{|\Pi| \to 0} \sum_{i=0}^{n-1} (M_{t_{i+1}} - M_{t_i})^2$$

where the limit is taken as the mesh $\Pi = \{0 = t_0 < t_1 < \cdots < t_n = t\}$ satisfies $|\Pi| = \max_i (t_{i+1} - t_i) \to 0$. This convergence is understood in the sense of convergence in probability and $L^2$. The process $[M]_t$ is a nondecreasing random process starting at zero; its quadratic variation grows monotonically and is deterministic for many natural processes like Brownian motion.

Key properties of quadratic variation:

- **Bilinearity**: quadratic variation exhibits bilinear structure (for vector-valued processes)
- **Path continuity** (in stochastic sense) for typical semimartingales
- **Itô isometry**: if $H$ is a predictable process, then $E[(\int_0^t H_s dM_s)^2] = E[\int_0^t H_s^2 d[M]_s]$
- **Monotonicity**: $[M]_t$ is nondecreasing in $t$ for fixed $\omega$

## Brownian motion: the canonical example

For standard Brownian motion $W = (W_t)_{t \geq 0}$, the quadratic variation has a remarkably simple form:

$$[W]_t = t \quad \text{a.s.}$$

This is a cornerstone result: although Brownian motion has unbounded total variation almost surely on every finite interval, its quadratic variation grows linearly with time. This phenomenon reflects Brownian motion's rough, infinitesimal randomness at all time scales. The result follows from analyzing the expected squared increments and applying martingale concentration inequalities.

A direct consequence is that for the Itô integral $\int_0^t H_s dW_s$:

$$E\left[\left(\int_0^t H_s dW_s\right)^2\right] = E\left[\int_0^t H_s^2 ds\right]$$

This equality is the **Itô isometry**, one of the most powerful tools in stochastic integration.

## The Itô isometry through quadratic variation

The Itô isometry expresses the profound relationship between the stochastic integral and quadratic variation. For a semimartingale $M$ and a predictable integrand $H \in L^2(M)$:

$$E\left[\left(\int_0^t H_s dM_s\right)^2\right] = E\left[\int_0^t H_s^2 d[M]_s\right]$$

This isometry permits us to define the space of square-integrable stochastic integrands rigorously, to prove completeness of martingale spaces, and to establish a canonical extension of the integral to broader classes of integrands. It also extends to complex-valued processes and general martingale measures. The isometry enables moment calculations and provides control on the norm of stochastic integrals—essential for convergence arguments in probability theory.

## Covariation and the polarization identity

For two semimartingales $M$ and $N$, the **quadratic covariation** (or bracket) is defined via polarization:

$$[M, N]_t = \frac{1}{2} \left([M + N]_t - [M]_t - [N]_t\right)$$

This is a finite-variation process, often denoted as $\langle M, N \rangle_t$ when referring to the predictable (angular bracket) version. The covariation measures the joint oscillation of two processes. The **polarization identity** connects quadratic variation with covariation:

$$[M + N]_t = [M]_t + 2[M, N]_t + [N]_t$$

This allows computation of covariances through quadratic variations. Covariation becomes indispensable in multivariate stochastic calculus and in financial mathematics when modeling correlations between assets. For independent Brownian motions $W^1$ and $W^2$, we have $[W^1, W^2]_t = 0$.

## The Kunita–Watanabe inequality

One of the deepest inequalities in stochastic analysis, the Kunita–Watanabe inequality bounds the stochastic integral of a product in terms of the individual quadratic variations:

$$\left|\int_0^t H_s K_s d[M, N]_s\right| \leq \left(\int_0^t H_s^2 d[M]_s\right)^{1/2} \left(\int_0^t K_s^2 d[N]_s\right)^{1/2}$$

where $H$ and $K$ are predictable processes. In expectation form:

$$E\left[\int_0^t |H_s| |K_s| d|[M, N]|_s\right] \leq \left(E\left[\int_0^t H_s^2 d[M]_s\right]\right)^{1/2} \left(E\left[\int_0^t K_s^2 d[N]_s\right]\right)^{1/2}$$

This inequality is the stochastic analogue of the classical Cauchy–Schwarz inequality for integrals and is essential in proving convergence of stochastic integrals and in establishing completeness of certain functional spaces.

## Semimartingale decomposition and predictable quadratic variation

A **semimartingale** is a process admitting the decomposition:

$$X_t = X_0 + M_t + A_t$$

where $M$ is a local martingale and $A$ is a finite-variation process. The quadratic variation of a semimartingale is primarily determined by its martingale part.

For a local martingale $M$, the **predictable quadratic variation** (denoted with angle brackets $\langle M \rangle$) is defined as:

$$\langle M \rangle_t = \lim_{|\Pi| \to 0} \sum_{i=0}^{n-1} E[(M_{t_{i+1}} - M_{t_i})^2 \mid \mathcal{F}_{t_i}]$$

in probability. This is a continuous, nondecreasing, predictable process. By the Doob–Meyer decomposition theorem, every continuous local martingale square can be uniquely written as $M_t^2 = \langle M \rangle_t + N_t$ where $N$ is a local martingale. For a true martingale, $\langle M \rangle$ equals the compensator of $[M]$.

## Itô's formula through quadratic variation

**Itô's formula** stands as the bedrock of stochastic calculus, and quadratic variation reveals its essential mechanism. For a smooth function $f \in C^2(\mathbb{R})$ and a semimartingale $M$:

$$f(M_t) = f(M_0) + \int_0^t f'(M_s) dM_s + \frac{1}{2} \int_0^t f''(M_s) d[M]_s$$

The second integral, weighted by $\frac{1}{2} d[M]_s$, is the distinctive stochastic correction absent in classical calculus, arising precisely because $[M]$ is nonzero. For functions of two variables, $f(x, y)$:

$$f(M_t, N_t) = f(M_0, N_0) + \int_0^t \frac{\partial f}{\partial x} dM_s + \int_0^t \frac{\partial f}{\partial y} dN_s + \frac{1}{2} \int_0^t \frac{\partial^2 f}{\partial x^2} d[M]_s + \int_0^t \frac{\partial^2 f}{\partial y^2} d[N]_s + \int_0^t \frac{\partial^2 f}{\partial x \partial y} d[M, N]_s$$

The mixed partial derivatives couple via the covariation, demonstrating the power of understanding bracket processes.

## Discontinuous semimartingales and jump decomposition

For a general semimartingale with jumps, the quadratic variation splits into continuous and jump components:

$$[M]_t = [M]_t^c + \sum_{s \leq t} (\Delta M_s)^2$$

where $[M]_t^c$ is the continuous part (arising from the Brownian component) and the second term sums the squared magnitudes of all jumps up to time $t$. This decomposition is crucial in modeling jump-diffusion processes common in financial mathematics and in analyzing the regularity of the paths.

The **local time** of Tanaka, denoted $L^a_t(M)$, quantifies the amount of time a semimartingale spends at a level $a$. It appears in the **Tanaka formula**, a generalization of Itô's formula to non-smooth functions:

$$|M_t| = |M_0| + \int_0^t \text{sgn}(M_s) dM_s + L^0_t$$

where $L^0_t$ compensates for the singularity of the absolute value function at zero. This formula demonstrates that Itô calculus handles even singular functions when supplemented by local time.

## Applications in mathematical finance

Quadratic variation is absolutely central to financial modeling and risk management. **Realized variance** is the empirical analogue of quadratic variation, computed from observed asset prices at discrete times:

$$\text{RV}_t = \sum_{i=0}^{n-1} (\log S_{t_{i+1}} - \log S_{t_i})^2$$

where $S_t$ is an asset price. This quantity estimates the historical volatility. Understanding quadratic variation is indispensable when developing GARCH models, stochastic volatility models, and jump-diffusion models. It informs optimal portfolio construction, option pricing via realized volatility swaps, and variance targeting strategies.

Quadratic variation also interconnects with [[levy-ito-decomposition|the Lévy–Itô decomposition]] and [[doob-meyer-decomposition|Doob–Meyer decomposition]], enabling classification and analysis of stochastic processes across multiple financial paradigms.

## Related foundations

Mastery of quadratic variation requires understanding [[stochastic-differential-equations|stochastic differential equations]], [[predictable-compensator|predictable compensators and martingale decompositions]], and the machinery of [[malliavin-calculus|Malliavin calculus]]. Key convergence results appear in [[convergence-stochastic-integrals|convergence of stochastic integrals]], and the subtle interplay between classical and stochastic time appears in [[local-time-tanaka|local time and the Tanaka formula]].
