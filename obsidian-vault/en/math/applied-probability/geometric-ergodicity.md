---
title: "Geometric Ergodicity"
category: "Applied Probability"
order: 24
lang: "en"
slug: "/math/geometric-ergodicity"
growth: "seedling"
---

# Geometric Ergodicity

Geometric ergodicity is a strong convergence condition asserting that the distribution of a Markov chain converges to its stationary distribution at an exponential rate. It is a cornerstone of modern Markov chain theory, underpinning convergence guarantees for Markov chain Monte Carlo (MCMC) methods and stochastic algorithms.

## Definition and convergence rate

A Markov chain $(X_n)_{n \geq 0}$ with transition operator $P$ and stationary distribution $\pi$ is called **geometrically ergodic** if there exist constants $M(x) < \infty$ and $0 < r < 1$ such that for all states $x$ and all $n \geq 1$:

$$\|P^n(x, \cdot) - \pi\|_{\text{TV}} \leq M(x) r^n$$

where $\|\cdot\|_{\text{TV}}$ denotes the total variation norm. This bound quantifies exponential decay with a fixed rate $r$, controlled by a state-dependent function $M(x)$. If $M(x) = C$ is a constant independent of $x$, the chain is called **uniformly geometrically ergodic**.

## The Foster–Lyapunov drift condition

The practical pathway to proving geometric ergodicity involves constructing a Lyapunov function. The **drift condition** (Foster–Lyapunov) states: there exists a function $V: \mathcal{X} \to [1, \infty)$, constants $\lambda < 1$ and $b < \infty$, and a set $C$ such that

$$PV(x) := \mathbb{E}[V(X_1) \mid X_0 = x] \leq \lambda V(x) + b \mathbf{1}_C(x),$$

where $\mathbf{1}_C$ is the indicator of $C$. Intuitively, outside $C$ the process systematically shrinks $V$ at a geometric rate $\lambda$. Typical choices: $V(x) = 1 + \|x\|^p$ for $p > 0$, or $V(x) = e^{\theta \|x\|}$ for heavy-tailed problems.

## The minorization condition and Meyn–Tweedie theorem

The second key ingredient is the **minorization condition**: there exist $\varepsilon > 0$, a probability measure $\nu$, and a set $C$ (the **petite set**) such that for all $x \in C$ and measurable $A$:

$$P(x, A) \geq \varepsilon \nu(A).$$

This asserts that when the chain enters $C$, the transition probabilities are "minorized" by a fixed measure $\nu$ — there is a lower bound, uniform in $x \in C$, on the one-step probability of reaching any set.

**Meyn–Tweedie Theorem**: If the drift condition and minorization condition both hold, then the chain is geometrically ergodic. This is one of the most powerful results in Markov chain theory, providing a constructive pathway from verifiable conditions to exponential convergence.

## Subgeometric rates and polynomial ergodicity

Relaxing the drift condition to allow $\lambda = 1$ yields **polynomial ergodicity**: $\|P^n(x, \cdot) - \pi\|_{\text{TV}} \sim n^{-\alpha}$ for some $\alpha > 0$. More broadly, **subgeometric convergence rates** encompass polynomial, logarithmic, and intermediate regimes arising from weaker drift and minorization conditions. These are important for applications where geometric ergodicity fails but subexponential convergence suffices.

## Harris recurrence and spectral gaps

A Markov chain is **Harris recurrent** if every set of positive measure is visited infinitely often with probability 1. Geometric ergodicity implies Harris recurrence and the existence of a unique invariant distribution.

When the chain acts on a measure space with a density, geometric ergodicity is equivalent to the existence of a **spectral gap** in the weighted space $L^2(\pi)$: if $P$ is viewed as a self-adjoint operator on this space, then

$$\rho := \sup\{|\lambda| : \lambda \text{ is an eigenvalue and } \lambda \neq 1\} < 1.$$

The spectral gap $1 - \rho$ directly determines the convergence rate $r$ in the total variation bound. This connection is fundamental for understanding mixing time in terms of functional analysis.

## Construction of Lyapunov functions

Finding an explicit Lyapunov function that certifies drift requires deep understanding of the chain's dynamics. Common strategies:

**Langevin diffusion** (overdamped gradient flow with noise): $V(x) = \|x\|^2$ often works if the potential is smooth and grows sufficiently fast at infinity.

**Heavy-tailed or jump processes**: logarithmic or exponential growth, e.g., $V(x) = \log(1 + |x|^{\alpha})$, may be necessary to control rare large excursions.

**Gibbs samplers and conditional models**: the petite set $C$ is often chosen as the Cartesian product of finite supports for certain coordinates, exploiting conditional independence to verify minorization.

## Applications to MCMC

Geometric ergodicity is crucial for establishing the validity and efficiency of Markov chain Monte Carlo:

1. **[[markov-chain-mixing|Mixing time]]**: Ensures rapid approach to the target distribution, justifying the use of the chain to approximate expectations under $\pi$.

2. **Central Limit Theorem (CLT)**: For geometrically ergodic chains, the sample average obeys
$$\sqrt{n}(\bar{f}_n - \pi(f)) \xrightarrow{d} \mathcal{N}(0, \sigma_f^2)$$
where $\sigma_f^2 = \text{Var}_\pi(f) + 2\sum_{k=1}^{\infty}\text{Cov}_\pi(f(X_0), f(X_k))$ is the **asymptotic variance**.

3. **Convergence diagnostics**: Justifies standard heuristics (Gelman–Rubin potential scale reduction, trace plots, autocorrelation function) by guaranteeing exponential decay of dependence.

4. **Gibbs and Metropolis–Hastings**: Under mild conditions, both samplers inherit geometric ergodicity from the target distribution and architecture, enabling practitioners to confidently run long chains.

## Connections to related concepts

[[coupling-methods|Coupling arguments]] provide probabilistic proofs of geometric ergodicity by constructing two copies of the chain that meet (coalesce) in finite time with high probability.

[[large-deviations-cramer|Large deviations principles]] complement ergodic theory, describing probabilities of rare events far from the typical trajectory.

[[stochastic-recursive-sequences|Stochastic recursive sequences]] and random dynamical systems naturally exhibit drift and minorization, serving as a proving ground for theory.

[[discrete-markov-chains|Discrete Markov chains]] on countable or finite spaces offer simplified versions of the theory, where geometric ergodicity reduces to primitivity and aperiodicity.

## Practical significance

Knowledge of geometric ergodicity enables:
- **Burn-in estimation**: Determining how many initial samples to discard before the chain reaches "stationarity."
- **Sample size planning**: Assessing how many MCMC iterations are needed to achieve a target Monte Carlo error.
- **Sampler comparison**: Evaluating different Gibbs or Metropolis proposals by computing or bounding spectral gaps.
- **Diagnostics**: Using empirical spectral estimates (e.g., from lag-1 correlation) to check when convergence is plausible.

However, rigorously establishing geometric ergodicity for a concrete Markov chain remains nontrivial, often requiring both theoretical analysis (constructing $V$, $C$, and $\nu$) and numerical verification (long-run simulations, spectral estimates).
