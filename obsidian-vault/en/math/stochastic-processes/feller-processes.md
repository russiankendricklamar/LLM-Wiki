---
title: "Feller Processes"
category: "Stochastic Processes"
order: 15
lang: "en"
slug: "feller-processes"
---

# Feller Processes: The Analytic Foundation of Markov Dynamics

A **Feller process** is a rich class of continuous-time Markov processes that are "well-behaved" in a functional-analytic sense. Introduced by William Feller, they provide the rigorous mathematical bridge between **probability theory** (random paths) and **functional analysis** (operator semigroups and PDEs). Most stochastic processes used in quantitative finance and physics—such as Brownian motion, Poisson processes, Lévy processes, and Ornstein-Uhlenbeck processes—are Feller processes.

## 1. The Functional Analytic Definition

To define a Feller process, we move away from looking at individual random paths $X_t$ and instead look at how the process "moves" functions. Let $C_0(X)$ be the Banach space of continuous functions on a locally compact state space $X$ (e.g., $\mathbb{R}^d$) that vanish at infinity, equipped with the supremum norm $\|f\|_\infty$.

A Markov process $X_t$ is a **Feller process** if its transition semigroup, defined by:
$$P_t f(x) = \mathbb{E}[f(X_t) \mid X_0 = x]$$
satisfies the following Feller properties:
1.  **Feller Property (Invariant Space)**: $P_t: C_0(X) \to C_0(X)$. This means if you start with a continuous function that vanishes at infinity, taking its expected value after time $t$ yields another continuous function that vanishes at infinity. The process doesn't "break" continuity or create mass at infinity.
2.  **Strong Continuity**: $\lim_{t \to 0} \|P_t f - f\|_\infty = 0$ for all $f \in C_0(X)$. This ensures that for very short times, the expected value of the function is very close to its initial value.

## 2. The Infinitesimal Generator ($A$)

The most powerful aspect of Feller theory is that the entire global behavior of the process is uniquely characterized by its **Infinitesimal Generator** $A$. The generator acts as the "time derivative" of the semigroup at $t=0$:
$$Af(x) = \lim_{t \to 0} \frac{P_t f(x) - f(x)}{t}$$
The set of functions for which this limit exists uniformly is the domain $\mathcal{D}(A)$. By the **Hille-Yosida Theorem**, $\mathcal{D}(A)$ is dense in $C_0(X)$, and the semigroup can be formally written as $P_t = e^{tA}$.

This transforms the probabilistic problem of finding transition densities into the analytic problem of solving the evolution equation (Kolmogorov backward equation):
$$\frac{\partial}{\partial t} u(t, x) = A u(t, x)$$

## 3. Courrège's Theorem: The Anatomy of a Generator

What does a Feller generator actually look like? **Courrège's Theorem** (1965) states that any linear operator satisfying the positive maximum principle (a requirement for Feller generators) on $\mathbb{R}^d$ must take the form of a **pseudo-differential operator** with a specific structure. 

For $f \in C_c^\infty(\mathbb{R}^d)$, the generator must be a **Lévy-type operator**:
$$Af(x) = \underbrace{\sum_{i,j=1}^d a_{ij}(x) \frac{\partial^2 f}{\partial x_i \partial x_j}}_{\text{Diffusion}} + \underbrace{\sum_{i=1}^d b_i(x) \frac{\partial f}{\partial x_i}}_{\text{Drift}} + \underbrace{\int_{\mathbb{R}^d \setminus \{0\}} \left( f(x+y) - f(x) - y \cdot \nabla f(x) \mathbf{1}_{|y|<1} \right) \nu(x, dy)}_{\text{Jumps}}$$

This profound formula decomposes any well-behaved Markov process into exactly three intuitive physical mechanisms:
1.  **Diffusion matrix $a_{ij}(x)$**: Continuous Gaussian noise (local variance).
2.  **Drift vector $b_i(x)$**: Deterministic motion (local mean).
3.  **Lévy jump kernel $\nu(x, dy)$**: Discontinuous jumps of size $y$.

If $a$, $b$, and $\nu$ do not depend on $x$, the Feller process reduces to a **[[levy-processes|Lévy Process]]**.

## 4. Probabilistic Consequences

The analytic regularity of Feller semigroups translates into strict probabilistic guarantees:
- **Càdlàg Paths**: Every Feller process has a modification whose paths are right-continuous with left limits (càdlàg). This means the paths don't oscillate infinitely wildly in finite time.
- **Strong Markov Property**: Feller processes naturally satisfy the Strong Markov Property. This means the process "forgets its past" not just at fixed times $t$, but also at random **Stopping Times** $\tau$ (e.g., the exact moment an asset hits a barrier). This is absolutely critical for pricing American or Barrier options.

## 5. Modern Applications

### A. Feller Processes in Quantitative Finance
In mathematical finance, defining a new pricing model usually means proposing a new [[stochastic-differential-equations|SDE]]. To prove that this SDE actually has a unique, non-exploding solution, quants prove that the corresponding differential operator $A$ generates a Feller semigroup. The famous **Cox-Ingersoll-Ross (CIR)** interest rate model and the **Heston stochastic volatility** model are driven by "Feller diffusions" (where the diffusion coefficient is proportional to $\sqrt{x}$ to prevent negative rates).

### B. Fractional Kinetics and Anomalous Diffusion
If the generator is a fractional [[spectral-graph-theory|Laplacian]] $A = -(-\Delta)^{\alpha/2}$, the resulting Feller process is an $\alpha$-stable Lévy flight. This is used to model anomalous diffusion in turbulent plasmas and extreme jump risks in crypto markets.

## Related Topics

[[operator-semigroups]] — the underlying functional analytic framework  
markov-processes — the general class of memoryless processes  
[[levy-processes]] — Feller processes with spatially homogeneous generators  
[[stochastic-differential-equations]] — how Feller processes are constructed in practice
---