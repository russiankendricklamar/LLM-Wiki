---
title: "Lévy-Itô Decomposition"
category: "Stochastic Calculus"
order: 20
lang: "en"
slug: "levy-ito-decomposition"
growth: "seedling"
---

## Definition of Lévy Processes

A **Lévy process** is a stochastic process $(X_t)_{t \geq 0}$ with $X_0 = 0$ satisfying:

1. **Stationary independent increments**: for $0 \leq s < t$, the increment $X_t - X_s$ is independent of $\mathcal{F}_s$ and has the same distribution as $X_{t-s}$;
2. **Right-continuity with left limits** (càdlàg): sample paths are a.s. right-continuous with left limits.

Every Lévy process is uniquely characterized by the **Lévy-Khintchine triplet** $(b, \sigma^2, \nu)$:
- $b \in \mathbb{R}$ — drift coefficient;
- $\sigma^2 \geq 0$ — squared volatility from the Brownian component;
- $\nu$ — **Lévy measure** on $\mathbb{R} \setminus \{0\}$.

## Lévy Measure and Characteristic Function

The Lévy measure $\nu$ characterizes the jump structure. It satisfies:
- $\nu(\{0\}) = 0$ (no point mass at zero);
- $\int (1 \wedge x^2) \, \nu(dx) < \infty$ (integrability condition).

This integrability condition splits jumps into two regimes:
- **Small jumps** $|x| \leq 1$: infinitely many in finite time, but bounded total impact due to size;
- **Large jumps** $|x| > 1$: finitely many on any finite interval.

The characteristic exponent (Lévy symbol) is given by the **Lévy-Khintchine formula**:

$$\psi(u) = ibu - \frac{1}{2}\sigma^2 u^2 + \int_{\mathbb{R}} \left( e^{iux} - 1 - iux \cdot \mathbb{1}_{|x| \leq 1} \right) \nu(dx)$$

Thus $\mathbb{E}[e^{iuX_t}] = e^{t\psi(u)}$.

## The Lévy-Itô Decomposition

**Theorem (Lévy-Itô)**: Every Lévy process admits the representation

$$X_t = bt + \sigma W_t + X_t^{\text{small}} + X_t^{\text{large}}$$

where the four components are independent.

### The Four Components

**1. Deterministic drift**: $bt$.

**2. Brownian component**: $\sigma W_t$, where $W$ is a standard Brownian motion.

**3. Compensated small jumps**:

$$X_t^{\text{small}} = \int_{\mathbb{R}} \int_0^t \int_{|x| \leq 1} x \, \tilde{N}(ds, dx)$$

where $\tilde{N}(ds, dx) = N(ds, dx) - \nu(dx) ds$ is the **compensated random measure** (a martingale).

**4. Large jumps**:

$$X_t^{\text{large}} = \int_{\mathbb{R}} \int_0^t \int_{|x| > 1} x \, N(ds, dx)$$

The small jumps are compensated by subtracting their expected value (embodied in $b$); large jumps contribute directly with no compensation.

### Poisson Random Measure

A **Poisson random measure** $N$ on $[0, \infty) \times \mathbb{R}$ counts jump events:

$$N(A \times B) = \#\{ (t, \Delta X_t) : t \in A, \Delta X_t \in B \}$$

where $A$ indexes time windows and $B$ indexes jump sizes. The measure $N$ is random but adapted; its realization depends on the jump times and sizes of the process.

The **compensator** (predictable compensator) is:

$$\tilde{N}(ds, dx) = N(ds, dx) - \nu(dx) ds$$

where $\nu(dx) ds$ is deterministic. The process $\tilde{N}$ is a **martingale random measure**: it has zero expected increment.

**Intuition**: The Lévy measure $\nu(dx)$ specifies the intensity at which jumps of size $dx$ arrive. Over an interval of length $dt$, we expect $dt \cdot \nu(dx)$ jumps of size roughly $dx$. Subtracting this expectation centers the measure, making it a martingale.

## Examples

**Poisson process**: $\nu = \lambda \delta_1$, $\sigma = 0$, $b = 0$. Then $X_t^{\text{large}} = N_t$ (the counting process), and all other components vanish.

**Compound Poisson process**: $\nu = \lambda F$, where $F$ is a probability measure, $\sigma = 0$, $b = 0$. Jumps occur at rate $\lambda$ with size distributed as $F$.

**Stable process** of index $\alpha \in (0, 2)$:

$$\nu(dx) = c_+ x^{-\alpha - 1} \mathbb{1}_{x > 0} \, dx + c_- |x|^{-\alpha - 1} \mathbb{1}_{x < 0} \, dx$$

Stable processes have heavy tails: $P(|X_t| > x) \sim x^{-\alpha}$ as $x \to \infty$. When $\alpha = 2$, the Lévy measure vanishes and we recover Brownian motion.

**Gamma-Variance process**: Parameters $(t, \kappa, \sigma, \nu)$ govern volatility, skewness, and tail behavior through $\nu(dx) = C_+ e^{-G_+ x} x^{-1} \mathbb{1}_{x > 0} + C_- e^{G_- |x|} |x|^{-1} \mathbb{1}_{x < 0}$.

## Itô Formula for Semimartingales

For $f \in C^2(\mathbb{R})$ and a Lévy process $X$:

$$f(X_t) = f(0) + \int_0^t f'(X_{s-}) \, dX_s^c + \sum_{0 < s \leq t} \left[ f(X_s) - f(X_{s-}) - f'(X_{s-}) \Delta X_s \right]$$

Here:
- $X_s^c = bs + \sigma W_s + X_s^{\text{small}}$ is the continuous martingale part;
- $\Delta X_s = X_s - X_{s-}$ is the jump at time $s$;
- The sum accounts for nonlinearity of $f$ applied to jumps.

When $f$ is smooth and $X$ has no jumps, this reduces to the classical Itô formula.

## Financial Applications

**Merton Jump-Diffusion**: Log-price follows a Lévy process with $\nu$ being a compound Poisson distribution. Allows simultaneous modeling of continuous price movements and discrete crashes.

**Variance-Gamma**: Three free parameters calibrate to realized market skewness, excess kurtosis, and variance. Characteristic function has closed form; option prices via Fourier inversion avoid computing unknown densities.

**CGMY Model**: Generalizes variance-gamma with four parameters controlling tail behavior independently. Encompasses subordinated Brownian motions.

**Normal Inverse Gaussian (NIG)**: A subordinated Brownian motion where subordination is an inverse Gaussian process. Flexible skewness and kurtosis; closed-form characteristic function.

All these jump-diffusion and pure-jump models fit into the Lévy framework. **Advantages**:
- Tractable characteristic functions for Fourier pricing;
- Stationary independent increments match market horizons;
- Finite second moment (when satisfied) enables risk modeling via variance.

## Key Insights

1. **Decomposition isolates sources**: Drift drives expected return; Brownian motion adds Gaussian diffusive risk; small jumps (compensated) embed tail risk of bounded frequency; large jumps capture rare disasters.

2. **Small vs. large jump distinction is mathematical, not economic**: The threshold $|x| = 1$ is arbitrary and should be rescaled to data units; the split ensures convergence of the small-jump integral.

3. **Poisson random measure is universal**: Every pure-jump Lévy process is driven by a Poisson random measure with intensity $\nu$. This decouples the random arrival mechanism from the jump size distribution.

4. **Quadratic variation is discontinuous**: Lévy processes jump; hence $[X, X]_t = \sigma^2 t + \sum_{s \leq t} (\Delta X_s)^2$, mixing the continuous Brownian variance with accumulated squared jumps.

## References and Related Topics

[[levy-processes|Lévy Processes]]  
[[stochastic-differential-equations|Stochastic Differential Equations]]  
[[infinitely-divisible-distributions|Infinitely Divisible Distributions]]  
[[merton-jump-diffusion|Merton Jump-Diffusion Model]]  
[[variance-gamma|Variance-Gamma Process]]  
[[doleans-dade-exponential|Doléans-Dade Exponential]]  
[[predictable-compensator|Predictable Compensator]]
