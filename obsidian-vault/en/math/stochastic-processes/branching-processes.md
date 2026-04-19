---
slug: "/math/branching-processes"
title: "Branching Processes"
category: "Applied Probability"
order: 3
lang: "en"
---

# Branching Processes

Branching processes model populations in which each individual independently produces a random number of offspring. The Galton-Watson process, introduced in 1874 to study the extinction of family names, remains the prototype: a single ancestor spawns children, each of whom independently reproduces according to the same law. Despite its simplicity the model exhibits a sharp phase transition — extinction versus exponential growth — controlled by a single parameter, the mean offspring number. Borovkov develops the theory through generating functions and martingale arguments, connecting it to the [[law-of-large-numbers|law of large numbers]], [[central-limit-theorem|central limit theorem]], and [[characteristic-functions|characteristic functions]].

## The Galton-Watson process

Let $X$ be a non-negative integer-valued random variable (offspring distribution) with probability generating function (pgf)

$$f(s) = \mathbb{E}[s^X] = \sum_{k=0}^{\infty} p_k s^k, \quad |s| \leq 1.$$

Define the process recursively: $Z_0 = 1$ and

$$Z_{n+1} = \sum_{i=1}^{Z_n} X_i^{(n)},$$

where $X_i^{(n)}$ are i.i.d. copies of $X$. The key parameter is the **mean offspring number** $m = \mathbb{E}[X] = f'(1)$.

The pgf of $Z_n$ satisfies the **iteration relation** $f_n(s) = f(f_{n-1}(s))$, where $f_1 = f$. This reduces the analysis of the $n$-th generation to composition of a single function — the generating function approach that makes the theory so elegant.

## Extinction probability

Let $q = \mathbb{P}(Z_n = 0 \text{ for some } n \geq 1)$ be the extinction probability.

**Theorem.** The extinction probability $q$ is the smallest non-negative root of $f(s) = s$. Moreover:

- **Subcritical** ($m < 1$): $q = 1$. Extinction is certain.
- **Critical** ($m = 1$, $\sigma^2 > 0$): $q = 1$. Extinction is still certain, but slower.
- **Supercritical** ($m > 1$): $q < 1$. There is positive probability of indefinite survival.

The proof is a fixed-point argument: since $f$ is convex on $[0,1]$ with $f(1) = 1$, the equation $f(s) = s$ has at most one root in $[0,1)$. In the supercritical case the convexity forces this root to exist strictly below 1.

**Proof sketch.** The extinction probabilities $q_n = \mathbb{P}(Z_n = 0)$ satisfy $q_{n+1} = f(q_n)$ with $q_0 = 0$. Since $f$ is non-decreasing and $q_1 = f(0) = p_0 \geq 0$, the sequence $(q_n)$ is non-decreasing and bounded by 1, so $q_n \uparrow q$ where $q = f(q)$. Convexity of $f$ ensures that the smallest fixed point in $[0,1]$ equals 1 when $f'(1) = m \leq 1$, and is strictly less than 1 when $m > 1$.

## Asymptotic behaviour

**Critical case (Kolmogorov, 1938).** If $m = 1$ and $\sigma^2 = \text{Var}(X) \in (0, \infty)$, then

$$\mathbb{P}(Z_n > 0) \sim \frac{2}{\sigma^2 n}, \quad n \to \infty.$$

Conditioned on survival, $Z_n / n$ converges in distribution to an exponential random variable. The population survives only through rare, large fluctuations.

**Supercritical case (Kesten-Stigum theorem).** If $m > 1$ and $\mathbb{E}[X \log X] < \infty$, then

$$W_n = \frac{Z_n}{m^n} \to W \quad \text{a.s.},$$

where $W$ is a non-negative random variable with $\mathbb{P}(W > 0) = 1 - q$. The limit $W$ satisfies the **functional equation** $\mathbb{E}[e^{-tW}] = f(\mathbb{E}[e^{-tW/m}])$ and has a continuous density on $(0, \infty)$.

**Subcritical case.** If $m < 1$, then $\mathbb{P}(Z_n > 0) \sim C \cdot m^n$ for a constant $C$, and conditioned on non-extinction the population size has a limiting distribution supported on $\{1, 2, \ldots\}$.

## The martingale $W_n$

The normalised process $W_n = Z_n / m^n$ is a non-negative [[discrete-martingales|martingale]]:

$$\mathbb{E}[W_{n+1} \mid \mathcal{F}_n] = \frac{\mathbb{E}[Z_{n+1} \mid Z_n]}{m^{n+1}} = \frac{m Z_n}{m^{n+1}} = W_n.$$

By the martingale convergence theorem, $W_n \to W$ a.s. The Kesten-Stigum condition $\mathbb{E}[X \log X] < \infty$ is necessary and sufficient for $\mathbb{E}[W] = 1$ (i.e., convergence in $L^1$ and non-degeneracy on the survival event). Without this condition, $W = 0$ a.s. even in the supercritical case — the normalisation $m^n$ is too crude.

## Extensions

**Continuous-time branching (Bellman-Harris process).** Each individual lives for a random time $L$ with distribution $G$, then produces offspring. The population at time $t$ depends on the age structure. Under regularity conditions, $\mathbb{E}[Z(t)] \sim C e^{\alpha t}$ where $\alpha$ is the Malthusian parameter, the unique root of $m \int_0^\infty e^{-\alpha t}\, dG(t) = 1$.

**Multi-type branching.** Individuals of $d$ types reproduce according to type-dependent offspring laws. The mean offspring matrix $M$ replaces the scalar $m$; criticality is governed by the Perron-Frobenius eigenvalue $\rho(M)$, and the Kesten-Stigum theorem generalises with the leading eigenvector determining the asymptotic type composition.

**Branching in random environment.** The offspring distribution changes randomly from generation to generation. The classification into sub/super/critical depends on $\mathbb{E}[\log m_n]$ rather than $\mathbb{E}[m_n]$, leading to phenomena absent in the classical theory (e.g., survival with $\mathbb{E}[m_n] < 1$).

## Examples

**1. Binary splitting.** Each individual produces exactly 2 offspring ($p_2 = 1$). Then $m = 2$, $Z_n = 2^n$ deterministically, and $W = 1$ a.s. This is the degenerate supercritical case with no randomness.

**2. Geometric offspring.** Let $p_k = (1-p)p^k$ for $k = 0, 1, 2, \ldots$ Then $f(s) = (1-p)/(1-ps)$, $m = p/(1-p)$. The process is supercritical iff $p > 1/2$. The extinction probability satisfies $f(q) = q$, giving $q = (1-p)/p$ for $p > 1/2$.

**3. Poisson offspring.** Let $X \sim \text{Poisson}(\lambda)$. Then $f(s) = e^{\lambda(s-1)}$, $m = \lambda$, and $q$ is the unique root of $e^{\lambda(s-1)} = s$ in $[0,1)$ when $\lambda > 1$. No closed form exists, but $q \approx 1 - 2(\lambda - 1)/\lambda^2$ for $\lambda$ slightly above 1.

## Applications

**1. Population genetics.** The Wright-Fisher model with mutation can be viewed through branching: a beneficial allele with selective advantage $s$ establishes itself with probability $\approx 2s$, derivable from a supercritical Galton-Watson approximation.

**2. Nuclear chain reactions.** The original physical motivation: each fission event produces a random number of neutrons, each of which may trigger further fissions. Criticality ($m = 1$) is the design point of a controlled reactor.

**3. Epidemic modelling.** The basic reproduction number $R_0$ in epidemiology is the mean offspring number. An epidemic dies out a.s. iff $R_0 \leq 1$ — the branching process extinction theorem in epidemiological language.

**4. Viral content propagation.** Each share of content generates a random number of reshares. The probability of "going viral" (non-extinction) is $1 - q$ where $q$ solves $f(s) = s$ for the reshare distribution.

## Related Articles

- [[discrete-martingales]] — the normalised process $W_n = Z_n/m^n$ is a martingale.
- [[law-of-large-numbers]] — underlies the growth rate $Z_n \approx m^n$.
- [[central-limit-theorem]] — CLT refinements for $Z_n$ in the supercritical case.
- [[characteristic-functions]] — pgf iteration is the main analytic tool.
- [[discrete-markov-chains]] — $Z_n$ is a Markov chain on $\mathbb{N}_0$ with absorbing state 0.
- [[ergodic-theorems-birkhoff]] — ergodic structure of multi-type branching.
- [[renewal-theory]] — embedded renewal structure in branching with immigration.
- [[large-deviations-cramer]] — large deviation principles for $Z_n/m^n$.
- [[wiener-hopf-factorization]] — first-passage in branching random walks.
- [[borel-cantelli-zero-one]] — zero-one laws for extinction events.
