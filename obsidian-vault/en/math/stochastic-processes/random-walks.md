---
title: "Random Walks"
category: "Stochastic Processes"
order: 24
lang: "en"
slug: "/math/random-walks"
growth: "seedling"
---

# Random Walks

A **random walk** is a stochastic process describing movement along discrete steps in random directions. Despite its simplicity, random walk theory connects fundamental phenomena across probability, combinatorics, and physics—from the gambler's ruin to anomalous diffusion in porous media.

## Simple Symmetric Random Walk

The canonical model begins with i.i.d. steps $\xi_1, \xi_2, \ldots$ where $\xi_i \in \{-1, +1\}$ with equal probability. The position at time $n$ is

$$S_n = \sum_{i=1}^n \xi_i$$

with $S_0 = 0$. By construction, $\mathbb{E}[S_n] = 0$ and $\mathrm{Var}(S_n) = n$, making $S_n$ a **martingale** with quadratic variation $[S]_n = n$.

## Recurrence and Transience (Pólya's Theorem)

The critical question is whether a random walk returns to the origin. Define the **return probability** as $p_n = P(S_n = 0)$, achievable only if $n$ is even. The walk is **recurrent** if $\sum_{n=1}^\infty p_n = \infty$ and **transient** if this sum converges.

**Pólya's Theorem**: A simple symmetric random walk on $\mathbb{Z}^d$ is:
- Recurrent for $d = 1, 2$
- Transient for $d \geq 3$

The dichotomy arises from dimensional scaling. In dimension $d$, the number of lattice points at distance $\approx n^{1/2}$ from the origin grows as $(n^{1/2})^{d-1} = n^{(d-1)/2}$, while the time to reach each point scales as $n$. For $d \leq 2$, the walk spends sufficient time revisiting neighborhoods; for $d \geq 3$, it escapes to infinity almost surely.

## Reflection Principle and Ballot Problem

The **reflection principle** provides an elegant combinatorial tool. For $m > 0$ and $n$ even:

$$P\left(\max_{k \leq n} S_k \geq m\right) = 2P(S_n \geq m) - P(S_n = m)$$

The intuition: any path reaching height $m$ may be reflected about the line $y = m$ at the first passage time, creating a bijection between paths ending at height $\geq m$ and all paths above the line.

The **ballot problem** applies this principle: if candidate $A$ receives $a$ votes and candidate $B$ receives $b$ votes with $a > b$, the probability that $A$ leads throughout the counting is $\frac{a - b}{a + b}$. This is the $(a, b)$-ballot sequence, foundational to the cycle lemma.

## Arc-Sine Laws (Lévy)

Among the most surprising results in random walk theory are **Lévy's arc-sine laws**, quantifying the distribution of time spent in positive territory.

Define:
- $L_n = \sum_{i=1}^n \mathbf{1}_{S_i > 0}$ (number of times walk is positive)
- $Z_n = \max\{k \leq n : S_k = 0\}$ (time of last return to origin)

**Arc-sine Law I**: For any $u \in [0, 1]$,
$$\lim_{n \to \infty} P\left(\frac{L_n}{n} \leq u\right) = \frac{2}{\pi} \arcsin\sqrt{u}$$

This counterintuitive result shows that the walk is likely to spend nearly all its time in one half-plane, not balanced as intuition suggests.

**Arc-sine Law II**: The time $Z_n / n$ of the last visit to zero before time $n$ also obeys the arc-sine distribution.

## Generating Functions and Fourier Analysis

For integer-valued random walks, generating functions provide powerful machinery. The **characteristic function** is $\phi(t) = \mathbb{E}[e^{itS_1}] = \frac{e^{it} + e^{-it}}{2} = \cos t$ for the symmetric walk.

Return probabilities admit the expansion:
$$p_{2n} = P(S_{2n} = 0) = \frac{1}{2\pi} \int_{-\pi}^\pi \cos^{2n}(t) \, dt$$

Asymptotically, using Laplace's method, $p_{2n} \sim \frac{1}{\sqrt{\pi n}}$, confirming the integral test for recurrence in dimension 1.

Fourier analysis on $\mathbb{Z}^d$ (viewing the lattice as $(\mathbb{R}/2\pi\mathbb{Z})^d$) connects random walk properties to spectral theory: the return probability scales as $(2\pi)^{-d} \int_{[-\pi,\pi]^d} e^{n\psi(k)} dk$, where $\psi(k) = \log \mathbb{E}[e^{i k \cdot \xi}]$ is the log-moment generating function.

## Donsker's Theorem and Functional Limit Theory

**Donsker's Invariance Principle** states that appropriately scaled random walks converge to Brownian motion:

$$\left(n^{-1/2} S_{\lfloor nt \rfloor}\right)_{t \in [0,1]} \Rightarrow \left(W_t\right)_{t \in [0,1]}$$

in the space $\mathcal{C}[0,1]$ of continuous functions, where $W$ is a standard Brownian motion. This is the **functional central limit theorem**, embedding discrete randomness into continuous diffusion.

Convergence extends to functionals: the **Brownian bridge** emerges as the conditional distribution of $W$ given $W_1 = 0$. Higher-order corrections involve **Strassen's law of the iterated logarithm**:

$$\limsup_{n \to \infty} \frac{S_n}{\sqrt{2n \log \log n}} = 1 \quad \text{a.s.}$$

## First Passage Times and Spitzer's Identity

Define $\tau_m = \inf\{n : S_n = m\}$, the first passage time to level $m > 0$. Its generating function satisfies a functional equation. Let $\tau_1 = \tau$ and denote $\mathbb{E}[z^\tau] = f(z)$ for $|z| \leq 1$.

**Spitzer's Identity** relates the generating function to the renewal structure:

$$\sum_{n=1}^\infty P(S_n > 0) z^n = \frac{1}{1 - \phi(z)}$$

where $\phi(z) = \mathbb{E}[z^\tau]$ is the generating function of the first passage time. This connects **Wiener–Hopf factorization**, decomposing characteristic functions into analytic pieces above and below the real axis.

## Wald's Identity and Optional Stopping

A cornerstone of martingale theory, **Wald's Identity**, asserts that if $\tau$ is a stopping time with $\mathbb{E}[\tau] < \infty$, then:

$$\mathbb{E}[S_\tau] = \mathbb{E}[\tau] \cdot \mathbb{E}[\xi_1] = 0$$

for the symmetric walk. This follows from the optional stopping theorem applied to the martingale $S_n$.

If $\mathbb{E}[\xi_1] = \mu \neq 0$, the walk drifts, and $\mathbb{E}[S_\tau] = \mu \mathbb{E}[\tau]$ governs expected ruin time in the gambler's problem.

## General Random Walks and Cramér Condition

For arbitrary i.i.d. steps $\xi_i$ with finite moment generating function in a neighborhood of zero, **Cramér's Condition** controls the tail behavior of large deviations. The **rate function** is $I(x) = \sup_{t} (tx - \log \mathbb{E}[e^{t\xi}])$, and:

$$P(S_n / n \geq x) \approx e^{-nI(x)}$$

When steps possess only moments (not MGF), the contraction principle in [[large-deviations-cramer]] applies via empirical measures.

## Random Walks on Groups and Lattices

Extending beyond $\mathbb{Z}$: random walks on finite groups, free groups, and higher-dimensional lattices exhibit rich mixing behavior governed by the **spectral gap**. On $\mathbb{Z}^d$, the walk mixes in time $O(n^2 / d)$. The **trace** of the heat kernel (sum of return probabilities) reveals the dimension of the underlying space.

## Applications and References

Random walk theory underpins:
- **Electrical networks** (connection between random walks and resistance)
- **Renewal theory** and [[renewal-theory]] (waiting time distributions)
- **Queuing theory** (M/M/1 queues as birth–death chains)
- **Biophysics** (diffusion-limited reactions, protein folding)

The classical [[functional-limit-theorems]] framework connects discrete models to continuous diffusion, with [[brownian-bridge]] and [[wiener-hopf-factorization]] providing refined asymptotics. [[discrete-martingales]] formalize the probabilistic foundation, while [[central-limit-theorem]] justifies Gaussian limits.
