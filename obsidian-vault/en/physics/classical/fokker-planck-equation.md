---
title: "Fokker-Planck Equation"
category: "Physics"
order: 31
lang: "en"
slug: "fokker-planck-equation"
growth: "seedling"
---

# Fokker-Planck Equation

The **Fokker-Planck equation (FP)** is a fundamental equation describing the evolution of probability density for stochastic systems driven by noise. It links deterministic drift and random diffusion through a parabolic partial differential equation, precisely characterizing the transition probability when translating [[stochastic-differential-equations|stochastic differential equations]] into probability measures.

## Derivation from the Kramers-Moyal expansion

Consider a scalar [[stochastic-differential-equations|SDE]] in Langevin form:

$$dX_t = a(X_t, t)\,dt + b(X_t, t)\,dW_t,$$

where $W_t$ is a standard Wiener process. For the probability density $p(x,t) = \Pr(X_t = x)$, the **Kramers-Moyal expansion** gives an exact series:

$$\frac{\partial p}{\partial t} = -\sum_{n=1}^{\infty} \frac{(-1)^n}{n!}\frac{\partial^n}{\partial x^n}\left[D_n(x,t) p(x,t)\right],$$

where $D_n(x,t) = \lim_{\Delta t \to 0} \mathbb{E}[\Delta X^n | X_t = x] / \Delta t$ is the $n$-th moment of the increment. For continuous processes, all moments $n \geq 3$ vanish. Only the first two remain:

$$D_1(x,t) = a(x,t), \quad D_2(x,t) = b(x,t)^2.$$

This yields the **Fokker-Planck equation** (also called the forward Kolmogorov equation):

$$\boxed{\frac{\partial p}{\partial t} = -\frac{\partial}{\partial x}[a(x,t) p(x,t)] + \frac{1}{2}\frac{\partial^2}{\partial x^2}[b(x,t)^2 p(x,t)]}.$$

## Multidimensional generalization

For a vector $\mathbf{X}_t \in \mathbb{R}^d$ with $d\mathbf{X}_t = \mathbf{a}(\mathbf{x},t)\,dt + \mathbf{B}(\mathbf{x},t)\,d\mathbf{W}_t$:

$$\frac{\partial p}{\partial t} = -\sum_{i=1}^d \frac{\partial}{\partial x_i}[a_i(\mathbf{x},t) p] + \frac{1}{2}\sum_{i,j=1}^d \frac{\partial^2}{\partial x_i \partial x_j}[D_{ij}(\mathbf{x},t) p],$$

where $D_{ij} = (BB^T)_{ij}$ is the diffusion matrix. In compact form:

$$\frac{\partial p}{\partial t} = -\nabla \cdot (\mathbf{a} p) + \frac{1}{2}\nabla^2 : (Dp) = -\nabla \cdot \mathbf{J},$$

where $\mathbf{J} = \mathbf{a} p - \frac{1}{2}\nabla \cdot (Dp)$ is the **probability current**.

## Stationary distribution

Setting $\partial p/\partial t = 0$ and requiring $\mathbf{J} \to 0$ at boundaries, we obtain the stationary equation. Integrating once:

$$a(x) p_{\text{st}} = \frac{1}{2}\frac{d}{dx}[b(x)^2 p_{\text{st}}].$$

This gives an explicit formula:

$$p_{\text{st}}(x) \propto \frac{1}{b(x)^2} \exp\!\left(2\int \frac{a(x')}{b(x')^2}\,dx'\right).$$

## Ornstein-Uhlenbeck process

The canonical example is the [[ornstein-uhlenbeck-process|Ornstein-Uhlenbeck process]]: $dX_t = -\theta(X_t - \mu)\,dt + \sigma\,dW_t$. Here $a(x) = -\theta(x - \mu)$ and $b(x) = \sigma$. The FP equation becomes:

$$\frac{\partial p}{\partial t} = \theta\frac{\partial}{\partial x}[(x - \mu) p] + \frac{\sigma^2}{2}\frac{\partial^2 p}{\partial x^2}.$$

The stationary distribution is:

$$p_{\text{st}}(x) \propto \exp\!\left(-\frac{2\theta(x - \mu)^2}{\sigma^2}\right) = \mathcal{N}\!\left(\mu, \frac{\sigma^2}{2\theta}\right).$$

This is a Gaussian with variance $\sigma^2/(2\theta)$, showing how the balance between mean-reversion and noise shapes the distribution.

## Heat equation as a special case

When $a = 0$ (no drift) and $b = \sqrt{D}$ (constant diffusion):

$$\frac{\partial p}{\partial t} = D \frac{\partial^2 p}{\partial x^2},$$

this is the **heat equation** — free diffusion. With initial condition $p(x, 0) = \delta(x - x_0)$:

$$p(x,t) = \frac{1}{\sqrt{4\pi D t}} \exp\!\left(-\frac{(x - x_0)^2}{4Dt}\right).$$

## Forward and backward Kolmogorov equations

The **forward equation (FP)** describes the evolution of the probability density $p(x,t)$. The dual **backward Kolmogorov equation** evolves the transition density with respect to initial conditions:

$$\frac{\partial P(x,t|y,s)}{\partial s} = -a(y,s)\frac{\partial P}{\partial y} - \frac{1}{2}b(y,s)^2\frac{\partial^2 P}{\partial y^2}.$$

The transition probability $P(x,t|y,s) = \Pr(X_t = x | X_s = y)$ satisfies this PDE in variables $(y, s)$ with boundary condition $P(x,t|y,t) = \delta(x - y)$. The backward equation is fundamental for computing option prices.

## Detailed balance and statistical mechanics

For a system in contact with a thermal reservoir at temperature $T$, the **detailed balance condition** requires:

$$p_{\text{st}}(x) P(y,t|x, 0) = p_{\text{st}}(y) P(x,t|y, 0).$$

When satisfied, the stationary distribution becomes the **Boltzmann distribution**:

$$p_{\text{st}}(x) \propto \exp\!\left(-\frac{U(x)}{k_B T}\right),$$

where $U(x)$ is the potential energy. This is the foundation connecting the FP equation to statistical mechanics.

## Application to option pricing

In stochastic pricing, the transition density enters the fair value formula:

$$C(S, t) = \mathbb{E}^{\mathbb{Q}}[e^{-r(T-t)} \Phi(S_T) | S_t = S].$$

For [[geometric-brownian-motion|geometric Brownian motion]] $dS = rS\,dt + \sigma S\,dW$, the FP equation yields the lognormal distribution and leads to the Black-Scholes formula.

## Path integral representation

The [[path-integral|path integral]] gives the transition density:

$$p(x, t | x_0, t_0) = \int \mathcal{D}[x(\cdot)] \, \exp\!\left(-\frac{1}{2}\int_{t_0}^t \frac{(dx - a \, dt)^2}{b^2} \right).$$

This connects stochastic processes with differential equations via functional integration, providing an alternative computational approach.

## Computational methods

Solving the FP equation numerically requires space-time discretization:

- **Finite differences:** Replace $\partial p/\partial x$ with $(p_{i+1} - p_{i-1})/(2\Delta x)$ on a grid.
- **Finite elements:** Variational formulation with piecewise polynomial basis, handles complex geometries naturally.
- **Spectral methods:** Expand in global bases (polynomials, sines) for smooth solutions; exponential convergence.
- **Direct simulation:** Instead of solving FP, numerically simulate many realizations of the SDE and empirically reconstruct $p(x,t)$ via histograms (Monte Carlo).

## Related Topics

- [[stochastic-differential-equations]] — SDEs and their solutions
- [[ornstein-uhlenbeck-process]] — canonical model with explicit Gaussian stationary distribution
- [[brownian-motion]] — Brownian motion as drift-free diffusion
- [[geometric-brownian-motion]] — stock price model in finance
- [[kolmogorov-equations-ctmc]] — Kolmogorov equations for Markov chains
- [[partial-differential-equations]] — classification and solution methods for PDEs
- [[path-integral]] — path integrals in stochastic systems
