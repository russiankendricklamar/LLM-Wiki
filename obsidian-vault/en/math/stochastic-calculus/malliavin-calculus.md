---
title: "Malliavin Calculus"
category: "Stochastic Calculus"
order: 22
lang: "en"
slug: "/math/malliavin-calculus"
growth: "seedling"
---

# Malliavin Calculus

Malliavin calculus is a differential calculus on Wiener space, also known as the stochastic calculus of variations. Developed by Paul Malliavin in the 1970s, it provides a powerful framework for analyzing smooth functionals of Brownian motion and has become indispensable in mathematical finance, probability theory, and analysis.

## Wiener Space and the Cameron–Martin Space

The foundation of Malliavin calculus is the **Wiener space** $(\Omega, \mathcal{H}, P)$, where $\Omega$ is the space of continuous paths starting at zero, $P$ is the Wiener measure. Each path $\omega \in \Omega$ represents a trajectory of Brownian motion $(W_t(\omega))_{t \in [0,T]}$.

The **Cameron–Martin space** $\mathcal{H} = L^2([0,T], \mathbb{R}^d)$ is the Hilbert space of square-integrable functions on $[0,T]$. It serves as the tangent space to Wiener space: each vector $h \in \mathcal{H}$ defines a direction of path perturbation in the Cameron–Martin sense.

The inner product in $\mathcal{H}$ is given by:
$$\langle h, g \rangle_\mathcal{H} = \int_0^T h_t g_t dt$$

## Malliavin Derivative

The **Malliavin derivative** $D_t F$ of a functional $F: \Omega \to \mathbb{R}$ is defined through the variation of $F$ in directions within the Cameron–Martin space. For a smooth functional (e.g., polynomial in $(W_t)$):

$$DF = \left(D_t F\right)_{t \in [0,T]}$$

where $D_t F$ is a process representing the Fréchet derivative of $F$ in the direction of a unit vector concentrated at time $t$.

For functionals of the form $F = f(W_{t_1}, \ldots, W_{t_n})$ where $f$ is smooth, the Malliavin derivative has an explicit formula:
$$D_t F = \sum_{i=1}^n \frac{\partial f}{\partial x_i}(W_{t_1}, \ldots, W_{t_n}) \cdot \mathbb{1}_{[0,t_i]}(t)$$

The **chain rule** for smooth functionals $F, G$ is:
$$D_t (FG) = F D_t G + G D_t F$$

## Sobolev Spaces on Wiener Space

**Sobolev spaces** $\mathbb{D}^{k,p}$ on Wiener space consist of functionals $F$ for which iterated Malliavin derivatives $D^{(i)} F$ exist in the $L^p(\Omega)$ sense:

$$\|F\|_{\mathbb{D}^{k,p}}^p = E[|F|^p] + \sum_{i=1}^k E\left[\left\|D^{(i)} F\right\|_{\mathcal{H}^{\otimes i}}^p\right]$$

These spaces form Banach spaces under the natural norm, and smooth functionals are dense in $\mathbb{D}^{k,p}$. The space $\mathbb{D}^{1,2}$ is particularly important for applications.

## Divergence Operator

The **divergence operator** (or Skorohod integral) $\delta: L^2(\Omega \times [0,T]) \to L^0(\Omega)$ is defined as the **adjoint** of the Malliavin derivative:

$$E[F \delta(u)] = E\left[\left\langle DF, u \right\rangle_\mathcal{H}\right]$$

for all $F \in \mathbb{D}^{1,2}$ and $u \in L^2(\Omega \times [0,T])$.

The **Malliavin–Skorohod integration by parts formula** states:
$$E\left[\delta(u) F\right] = E\left[\left\langle DF, u\right\rangle_\mathcal{H}\right] + E[F \text{div}(u)]$$

For a predictable process $(u_t)$, this can be written as:
$$E\left[\int_0^T u_t dW_t \cdot F\right] = E\left[\left\langle DF, u\right\rangle_\mathcal{H}\right]$$

This is the foundational integration by parts formula in stochastic analysis.

## Clark–Ocone Formula

The **Clark–Ocone formula** is one of the central results of Malliavin calculus. It represents any square-integrable functional $F \in L^2(\Omega)$ as:

$$F = E[F] + \int_0^T E[D_t F \mid \mathcal{F}_t] dW_t$$

where $\mathcal{F}_t = \sigma(W_s, s \leq t)$ is the natural filtration of Brownian motion.

This formula establishes that $F$ decomposes uniquely into a constant and a martingale part. The predictable process $(E[D_t F \mid \mathcal{F}_t])_{t \in [0,T]}$ represents the perfect hedging strategy in a frictionless market—it is the explicit formula for the replicating portfolio in stochastic finance.

## Stroock–Varadhan Theorem

The **Stroock–Varadhan theorem** connects the non-degeneracy of the Malliavin matrix to absolute continuity of the distribution of a functional.

For a functional $F = (F^1, \ldots, F^d) \in \mathbb{D}^{1,2}$, define the **Malliavin matrix** (Hessian of $F$ in the Wiener direction):

$$\gamma_F = \left(\left\langle DF^i, DF^j \right\rangle_\mathcal{H}\right)_{i,j=1}^d$$

**Theorem** (Stroock–Varadhan): If $\det(\gamma_F) > 0$ almost surely, then the distribution of $F$ is absolutely continuous with respect to Lebesgue measure on $\mathbb{R}^d$, and the density is bounded.

This result is fundamental for studying the regularity of solutions to SDEs and has deep connections to [[stochastic-differential-equations|stochastic differential equations]].

## Applications

### Greeks in Mathematical Finance

In stochastic finance, the Clark–Ocone formula is essential for computing hedging strategies. For a derivative price:
$$C(t, S_t) = E[e^{-r(T-t)} (S_T - K)_+ \mid \mathcal{F}_t]$$

the Greeks (sensitivities) such as delta, vega, and gamma can be computed explicitly using the Malliavin derivative:
$$\Delta = \frac{\partial C}{\partial S} = E\left[D_S(S_T - K)_+ \mid \mathcal{F}_t\right]$$

This approach avoids finite-difference approximations and provides exact, numerically stable computations.

### Stein–Malliavin Method

The **Stein–Malliavin method** combines Malliavin calculus with [[stein-method|Stein's method]] to prove central limit theorems on the Wiener chaos and obtain convergence rates. For functionals $F_n$ in the $n$-th Wiener chaos:

$$d_W(F_n, N) \leq C \left( E\left[\|DF_n\|_\mathcal{H}^2 - 1\right]^2 + E[\|D^2 F_n\|_{\text{HS}}^2] \right)^{1/2}$$

where $d_W$ denotes the Wasserstein distance. This has applications to quantitative bounds in probability, quantum field theory, and stochastic geometry.

### Absolute Continuity and Density Estimates

Malliavin calculus provides tools for proving that solutions to SDEs have smooth densities. Combined with [[levy-ito-decomposition|Lévy–Itô decomposition]], one can analyze the structure of martingales and identify conditions for density existence.

## Related Topics

[[cameron-martin-formula|Cameron–Martin formula]] describes absolute continuity of shifts of Wiener measure and is closely related to the variation of the law under perturbations. [[levy-ito-decomposition|Lévy–Itô decomposition]] classifies martingales in continuous time, essential for understanding the structure of stochastic integrals. [[local-time-tanaka|Local time and Tanaka's formula]] study singular behavior of Brownian paths, complementing the smooth calculus developed by Malliavin. [[conditional-expectation-sigma|Conditional expectation]] is fundamental to the Clark–Ocone formula and martingale representations. [[feynman-kac|Feynman–Kac formula]] connects parabolic PDEs to diffusion processes, and Malliavin calculus enables regularity analysis of solutions. [[stochastic-differential-equations|Stochastic differential equations]] are the primary domain of application, where Malliavin calculus determines the regularity of solution laws.
