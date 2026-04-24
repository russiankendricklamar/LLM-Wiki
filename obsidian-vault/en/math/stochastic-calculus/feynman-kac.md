---
title: "Feynman-Kac Formula"
category: "Stochastic Calculus"
order: 15
lang: "en"
slug: "feynman-kac"
growth: "seedling"
---

# Feynman-Kac Formula

The Feynman-Kac formula establishes a fundamental duality between parabolic [[partial-differential-equations|partial differential equations]] (with appropriate boundary conditions) and [[stochastic-differential-equations|stochastic differential equations]]. It expresses the solution to the Cauchy problem for a parabolic PDE as a conditional expectation of a functional along a random trajectory governed by the PDE's generator. The formula is a cornerstone of Monte Carlo PDE solving (as opposed to finite differences), the essential bridge connecting the [[black-scholes|Black-Scholes model]] to risk-neutral valuation, and the foundation of the entire theory of American options through [[optimal-stopping-american|optimal stopping theory]].

## Formulation: The Main Result

Consider a parabolic PDE on $[0, T) \times \mathbb{R}^d$:

$$\frac{\partial u}{\partial t}(t, x) + \mathcal{L}u(t, x) + V(t, x) u(t, x) = 0$$

with terminal (boundary) condition

$$u(T, x) = g(x),$$

where $g: \mathbb{R}^d \to \mathbb{R}$ is a bounded measurable function.

Here $\mathcal{L}$ is the **infinitesimal generator of the diffusion**, defined as

$$\mathcal{L}u = b(t, x) \cdot \nabla u + \frac{1}{2}\text{Tr}(\sigma\sigma^\top \nabla^2 u),$$

where $b: [0,T] \times \mathbb{R}^d \to \mathbb{R}^d$ is the drift vector, $\sigma: [0,T] \times \mathbb{R}^d \to \mathbb{R}^{d \times m}$ is the volatility matrix, and $V: [0,T] \times \mathbb{R}^d \to \mathbb{R}$ is the potential (typically assumed non-positive).

**Theorem (Feynman-Kac).** Suppose $b$, $\sigma$, $V$, $g$ satisfy growth and regularity conditions ensuring existence and uniqueness of the PDE solution. Then

$$u(t, x) = \mathbb{E}\!\left[\exp\!\left(\int_t^T V(s, X_s)\,ds\right) \cdot g(X_T) \,\bigg|\, X_t = x\right],$$

where $(X_s)_{s \geq t}$ solves the [[stochastic-differential-equations|SDE]]

$$dX_s = b(s, X_s)\,ds + \sigma(s, X_s)\,dW_s, \quad X_t = x,$$

with $W$ a standard $m$-dimensional Wiener process.

The exponential factor $\exp(\int_t^T V(s, X_s)\,ds)$ is interpreted as the **stochastic discount factor** along the path.

## Proof Sketch: The Martingale Approach

Define the auxiliary process

$$M_s := \exp\!\left(\int_t^s V(u, X_u)\,du\right) \cdot u(s, X_s), \quad s \in [t, T].$$

**Key step:** show that $M_s$ is a martingale with respect to the natural filtration of $(X_s)$.

Apply Ito's lemma to the product $e^{\int_t^s V} \cdot u(s, X_s)$. Let $Y_s = \int_t^s V(u, X_u)\,du$, so $dY_s = V(s, X_s)\,ds$. By the Ito product rule:

$$d\left(e^{Y_s} u(s, X_s)\right) = e^{Y_s}\,du(s, X_s) + u(s, X_s)\,d(e^{Y_s}) + d\langle e^Y, u \rangle_s.$$

Computing each term:

1. $d(e^{Y_s}) = e^{Y_s} V(s, X_s)\,ds$ (chain rule, since $Y$ has bounded variation).
2. $du(s, X_s) = \left[\frac{\partial u}{\partial s} + \mathcal{L}u + \frac{1}{2}\text{Tr}(\sigma\sigma^\top \nabla^2 u)\right]ds + \nabla u \cdot \sigma\,dW_s$ (Ito for $u$).
3. The covariation between finite-variation and martingale terms vanishes: $d\langle e^Y, u \rangle_s = 0$.

Collecting coefficients:

$$dM_s = e^{Y_s} \left[\frac{\partial u}{\partial s} + \mathcal{L}u + V \cdot u\right]ds + e^{Y_s} \nabla u \cdot \sigma\,dW_s.$$

By the PDE, the $ds$ coefficient vanishes: $\frac{\partial u}{\partial s} + \mathcal{L}u + V \cdot u = 0$. Therefore,

$$dM_s = e^{Y_s} \nabla u \cdot \sigma\,dW_s,$$

so $M_s$ is a martingale (under suitable integrability of $\nabla u$).

**Taking expectations:** by the martingale property and terminal condition $u(T, x) = g(x)$:

$$M_t = \mathbb{E}[M_T \mid \mathcal{F}_t] = \mathbb{E}\!\left[\exp\!\left(\int_t^T V(u, X_u)\,du\right) \cdot g(X_T) \,\bigg|\, X_t = x\right].$$

Since $M_t = \exp(0) \cdot u(t, x) = u(t, x)$, the formula follows.

## Example I: The Black-Scholes PDE

The classical Black-Scholes PDE for European call-option price:

$$\frac{\partial C}{\partial t} + \frac{\sigma^2 S^2}{2} \frac{\partial^2 C}{\partial S^2} + r S \frac{\partial C}{\partial S} - r C = 0,$$

with terminal condition $C(T, S) = (S - K)^+$.

In Feynman-Kac form: $b = rS$, $\sigma = \sigma S$, $V = -r$, where the generator drives the risk-neutral process $dS = rS\,dt + \sigma S\,dW^\mathbb{Q}$.

The formula yields:

$$C(t, S) = \mathbb{E}^\mathbb{Q}\!\left[e^{-r(T-t)}(S_T - K)^+ \,\bigg|\, S_t = S\right],$$

which matches exactly the [[risk-neutral-valuation|risk-neutral pricing]] formula in the [[black-scholes|Black-Scholes model]].

## Example II: The Heat Equation (V=0)

The classical case: the parabolic PDE

$$\frac{\partial u}{\partial t} = \frac{1}{2}\frac{\partial^2 u}{\partial x^2}$$

with initial condition $u(0, x) = g(x)$.

The generator corresponds to Brownian motion: $dX = dW$. The Feynman-Kac formula (with $V=0$) gives:

$$u(t, x) = \mathbb{E}[g(x + W_t) \mid W_0 = 0] = \int_{-\infty}^{\infty} g(x + y) \cdot \frac{1}{\sqrt{2\pi t}} e^{-y^2/(2t)}\,dy,$$

which is precisely the Gaussian formula for solving the heat equation.

## Connection to the Backward Kolmogorov Equation

The [[fokker-planck-equation|Fokker-Planck equation]] describes the forward-in-time evolution of the transition density. The **backward Kolmogorov equation**, by contrast, describes how the solution $u(t, x) = \mathbb{E}_x[f(X_T)]$ evolves as the starting point $x$ and current time $t$ vary:

$$\frac{\partial u}{\partial t} + \mathcal{L}u = 0,$$

a special case of Feynman-Kac with $V \equiv 0$.

The generalization to $V \neq 0$ permits absorption or weighting effects: the factor $\exp(\int V)$ in the Feynman-Kac formula is often interpreted as the **survival probability** along the path when absorption occurs with intensity rate $-V$.

## Discounting and the Stochastic Discount Factor

In financial applications, the potential $V(t, x) = -r(t, x)$ often represents the instantaneous interest rate. Then

$$\exp\!\left(\int_t^T V(s, X_s)\,ds\right) = \exp\!\left(-\int_t^T r(s, X_s)\,ds\right)$$

is the **stochastic discount factor** (a path-dependent random discount). The formula becomes:

$$u(t, x) = \mathbb{E}_x\!\left[e^{-\int_t^T r(s, X_s)\,ds} \cdot g(X_T)\right],$$

expressing the derivative price as a discounted conditional expectation of the payoff — this is the bridge between local PDE accuracy and global financial meaning through [[martingale-representation|martingale representation]].

## Numerical Solution: Monte Carlo Instead of Finite Differences

The traditional approach to solving a parabolic PDE is space-time discretization (finite differences, finite elements). The Feynman-Kac formula offers an **alternative**: numerically estimate the conditional expectation by Monte Carlo:

1. Simulate $N$ independent trajectories $(X_s^{(i)})_{s \in [t, T]}$ from the [[stochastic-differential-equations|SDE]], starting at $X_t = x$.
2. For each trajectory, compute the weighted terminal payoff: $e^{\int_t^T V(s, X_s^{(i)})\,ds} \cdot g(X_T^{(i)})$.
3. Average: $u(t, x) \approx \frac{1}{N}\sum_{i=1}^N e^{\int_t^T V(s, X_s^{(i)})\,ds} \cdot g(X_T^{(i)})$.

Convergence at rate $O(N^{-1/2})$ is **dimension-independent**, unlike finite differences which suffer from the **curse of dimensionality**. This approach is critical for high-dimensional simulation, as in multi-asset volatility models and complex portfolio structures.

## Connection to Martingale Representation

The [[martingale-representation|martingale representation theorem]] (Ito-Ventzel, Davis) states that under suitable regularity, any square-integrable functional $F(X)$ of the path admits the decomposition:

$$F(X) = \mathbb{E}[F(X)] + \int_0^T \xi_s\,dW_s$$

for some adapted process $\xi$. The Feynman-Kac formula implicitly encodes this process $\xi$ through the gradient $\nabla u$ appearing in the diffusion term: in the proof sketch, the martingale part $d\langle M \rangle_s$ is proportional to $\nabla u \cdot \sigma$, which determines the hedging position for replication in continuous time.

## Applications

**American option theory.** The price of an American option satisfies a [[optimal-stopping-american|variational inequality system]]: on continuation regions the Black-Scholes PDE holds; on exercise regions the boundary is hit. The Feynman-Kac formula connects the local PDE to the global optimal stopping problem, providing the foundation for computational iteration schemes.

**Structural credit risk models.** The probability of firm default is modeled via a heat equation with absorption at a boundary (asset value falls below debt threshold). The Feynman-Kac formula gives the distribution of hitting time, exactly what is needed to compute credit default swap spreads.

**Physics and the Schrödinger equation.** The Feynman-Kac formula has a quantum-mechanical interpretation: the wave function in the Schrödinger equation $i\hbar\frac{\partial \psi}{\partial t} = -\frac{\hbar^2}{2m}\nabla^2\psi + V\psi$ is recovered from an integral over paths, the **path-integral formulation of quantum mechanics**. The potential $V$ becomes a phase factor $e^{iS/\hbar}$ in the Feynman path integral.

**Obstacle problems in turbulence.** In computational fluid dynamics and turbulence theory, the formula is used to numerically compute ensemble averages of functionals of the velocity field by tracking Lagrangian particles.

## Related Articles

- [[stochastic-differential-equations|Stochastic Differential Equations]] — foundation for understanding the generator SDE.
- Ito's Lemma — key tool in the proof.
- [[black-scholes|The Black-Scholes Model]] — canonical application.
- [[risk-neutral-valuation|Risk-Neutral Valuation]] — financial interpretation.
- [[optimal-stopping-american|Optimal Stopping and American Options]] — extension to variational inequalities.
- [[fokker-planck-equation|The Fokker-Planck Equation]] — the forward evolution equation.
- [[martingale-representation|Martingale Representation]] — connection to hedging and market completeness.
- [[girsanov-semimartingales|Girsanov's Theorem]] — measure change in the formula (when shifting to risk-neutral measure).
- [[numerical-pde-finance|Numerical PDE Methods in Finance]] — practical algorithms.
- [[path-integral|Path Integrals]] — quantum-mechanical interpretation.
