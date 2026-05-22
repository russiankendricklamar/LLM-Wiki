---
title: "Stochastic Differential Equations"
category: "Stochastic Calculus"
order: 8
lang: "en"
slug: "stochastic-differential-equations"
---

# Stochastic Differential Equations (SDE)

Stochastic Differential Equations (SDEs) describe the dynamics of systems subject to random influences (noise). Unlike Ordinary Differential Equations (ODEs), SDE trajectories are not smooth. They are the fundamental language for **Mathematical Finance** (Black-Scholes model), **Physics**, and modern **Generative AI** (Diffusion models).

## 1. Foundations: Brownian Motion

The central element of an SDE is the **Wiener process** (Brownian Motion) $W_t$. Its properties are:
1. $W_0 = 0$.
2. Increments $W_{t+s} - W_t$ are independent and normally distributed $\mathcal{N}(0, s)$.
3. Trajectories are continuous but **nowhere differentiable** and have infinite variation.

## 2. General Form of an SDE

A typical Itô equation is written in differential form:
$$ dX_t = b(t, X_t) dt + \sigma(t, X_t) dW_t $$
Where:
- $b(t, X_t)$ is the **drift coefficient**, the deterministic part.
- $\sigma(t, X_t)$ is the **diffusion coefficient**, the amplitude of the random noise.

Integral form:
$$ X_t = X_0 + \int_0^t b(s, X_s) ds + \int_0^t \sigma(s, X_s) dW_s $$
The second integral is the **Itô integral**, which cannot be computed like a standard Riemann integral due to the infinite variation of $W_t$.

## 3. Itô's Lemma

The primary tool for SDEs is the analog of the chain rule. If $X_t$ satisfies an SDE and $f(x, t)$ is a twice-differentiable function, the differential $df$ is:
$$ df(X_t, t) = \left( \frac{\partial f}{\partial t} + b \frac{\partial f}{\partial x} + \frac{1}{2} \sigma^2 \frac{\partial^2 f}{\partial x^2} \right) dt + \sigma \frac{\partial f}{\partial x} dW_t $$
The second-order term $\frac{1}{2} \sigma^2 \frac{\partial^2 f}{\partial x^2}$ arises because $(dW_t)^2 \approx dt$. This is the fundamental departure from classical calculus.

## 4. Theory of Solutions

The theory divides into two fundamentally different notions of solution:

### Strong Solutions
A **strong solution** is a process $X$ built from a **given** Brownian motion $W$. It must be adapted to the filtration $\mathcal{F}_t^W$. If the coefficients $b$ and $\sigma$ are globally Lipschitz in $x$, a unique strong solution exists.

### Weak Solutions
A **weak solution** includes the probability space and the Brownian motion $W$ as **part of the solution**. We seek a process whose distribution satisfies the SDE. Weak solutions are essential when coefficients are not Lipschitz (e.g., $\sigma(x) = \sqrt{x}$).

**Yamada-Watanabe Theorem**: 
$$\text{Weak existence} + \text{Pathwise uniqueness} \implies \text{Strong existence}.$$

## 5. The Martingale Problem (Stroock-Varadhan)

An alternative approach to defining weak solutions. The problem is to find a measure $P$ such that for every smooth function $f$:
$$ f(X_t) - f(X_0) - \int_0^t \mathcal{L}f(X_s) ds $$
is a $P$-martingale, where $\mathcal{L}$ is the infinitesimal generator of the SDE.

## 6. Applications

### Finance
[[geometric-brownian-motion|Geometric Brownian Motion]] $dS_t = \mu S_t dt + \sigma S_t dW_t$ is the foundation of Black-Scholes theory. CIR-type SDEs are used for modeling interest rates and stochastic volatility ([[heston-model|Heston model]]).

### Generative AI (Diffusion Models)
Modern models (Stable Diffusion) use SDEs for data generation:
1. **Forward SDE**: Adding noise to data until it becomes chaos.
2. **Reverse SDE**: A neural network learns to reverse this process using the **Score function** $\nabla_x \ln p(x, t)$, effectively "sculpting" structure out of noise.

### Physics and Filtering
The evolution of a system's probability density is described by the deterministic **Fokker-Planck equation** (Kolmogorov Forward Equation), which is the macro-description of SDE trajectories.

## Related Topics

[[brownian-motion]] — the driving process  
[[geometric-brownian-motion]] — the canonical financial model  
[[feynman-kac]] — linking SDEs to partial differential equations  
[[nonlinear-filtering]] — SDEs in hidden state estimation  
[[martingale-problem]] — the probabilistic formulation of solutions
