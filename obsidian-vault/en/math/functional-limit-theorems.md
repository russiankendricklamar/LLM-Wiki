---
title: "Functional Limit Theorems"
category: "Limit Theorems"
order: 6
lang: "en"
---

# Functional Limit Theorems

The classical [[central-limit-theorem|central limit theorem]] says that $S_n / \sqrt{n} \to \mathcal{N}(0,1)$ in distribution — a statement about a single random variable at time $n$. A **functional** limit theorem promotes this to convergence of the entire **process**: the rescaled random walk converges, as a random element of a function space, to [[brownian-motion|Brownian motion]]. This passage from finite-dimensional convergence to process-level convergence is the organizing principle of Jacod and Shiryaev's treatment of weak convergence for semimartingales. It underpins diffusion approximations, high-frequency limit theorems in finance, and the justification of continuous-time models as limits of discrete ones.

## Donsker's Invariance Principle

Let $\xi_1, \xi_2, \ldots$ be i.i.d. with $\mathbb{E}[\xi_i] = 0$ and $\text{Var}(\xi_i) = 1$. Define the partial-sum process

$$X^n_t = \frac{1}{\sqrt{n}} \sum_{k=1}^{\lfloor nt \rfloor} \xi_k, \qquad t \in [0,1].$$

**Theorem (Donsker, 1951).** $X^n \Rightarrow W$ in $D([0,1], \mathbb{R})$ equipped with the [[skorokhod-topology|Skorokhod $J_1$-topology]], where $W$ is a standard Brownian motion.

The proof has two parts: (1) convergence of finite-dimensional distributions (the ordinary CLT), and (2) **tightness** in the Skorokhod space. Tightness is the hard part and requires controlling the modulus of continuity of $X^n$. The Skorokhod topology is essential here — it allows small time-shifts, which the uniform topology does not, and this flexibility is what makes the convergence work for processes with jumps.

## The Role of Skorokhod Topology

The space $D([0,T], \mathbb{R}^d)$ of cadlag functions, equipped with the Skorokhod $J_1$-topology, is a Polish space. This is the natural habitat for limit theorems involving processes with jumps. Key facts:

- Convergence in $J_1$ means: there exist time-changes $\lambda_n: [0,T] \to [0,T]$ (close to identity) such that $X^n \circ \lambda_n \to X$ uniformly.
- For continuous limits, $J_1$-convergence reduces to uniform convergence on compacts.
- The Prokhorov metric on probability measures on $D$ metrizes [[weak-convergence-prokhorov|weak convergence]].

Jacod and Shiryaev use $J_1$ throughout. For some applications (convergence of processes with many small jumps to a process with simultaneous jumps), the weaker $M_1$-topology is needed, but $J_1$ covers the main cases.

## Convergence via Predictable Characteristics

The central insight of Jacod and Shiryaev is that for semimartingales, functional convergence can be **read off from the predictable triplets**. Let $X^n$ be a sequence of semimartingales with [[semimartingale-models|predictable triplets]] $(B^n, C^n, \nu^n)$ and let $X$ have triplet $(B, C, \nu)$.

**Meta-theorem.** If $(B^n, C^n, \nu^n) \to (B, C, \nu)$ in an appropriate sense (see [[convergence-semimartingales]]), then $X^n \Rightarrow X$ in $D$.

This reduces functional limit theorems to checking convergence of three deterministic-looking objects, rather than working directly with the processes. It unifies dozens of classical results under a single roof.

## Rebolledo's Martingale CLT

For continuous martingales, the functional CLT takes an especially clean form.

**Theorem (Rebolledo, 1980).** Let $M^n$ be a sequence of locally square-integrable martingales. Suppose:

1. $\langle M^n \rangle_t \xrightarrow{P} C_t$ for each $t$, where $C$ is continuous and deterministic,
2. For each $\varepsilon > 0$: $\sum_{s \leq t} |\Delta M^n_s|^2 \mathbf{1}_{|\Delta M^n_s| > \varepsilon} \xrightarrow{P} 0$.

Then $M^n \Rightarrow W_C$ in $D$, where $W_C$ is a continuous Gaussian martingale with $\langle W_C \rangle = C$.

Condition (1) says the quadratic variation converges to a deterministic limit. Condition (2) is the Lindeberg condition in continuous time: no single jump contributes significantly. This is the continuous-time generalization of the [[martingale-clt|martingale CLT]].

## Convergence of Compound Poisson to Levy

Let $X^n_t = \sum_{k=1}^{N^n_t} Y^n_k$ be a compound Poisson process with arrival rate $\lambda_n$ and jump distribution $F_n$. Consider the rescaling regime where $\lambda_n \to \infty$ and the jumps become small.

**Theorem.** If $\lambda_n \int x\, dF_n(x) \to b$, $\lambda_n \int x^2\, dF_n(x) \to c + \int x^2\, d\nu(x)$, and $\lambda_n F_n \to \nu$ on $\mathbb{R} \setminus \{0\}$, then $X^n \Rightarrow X$ where $X$ is a [[levy-processes|Levy process]] with characteristic triplet $(b, c, \nu)$.

This is the "Poisson approximation in reverse": many small jumps aggregate into an arbitrary Levy process. It provides the theoretical justification for modeling asset returns with Levy processes rather than pure diffusions.

## Convergence of Discrete to Continuous Semimartingales

Let $X^n$ be a process observed on a grid $\{0, \Delta_n, 2\Delta_n, \ldots\}$ with $\Delta_n \to 0$. In high-frequency finance, $X^n$ represents returns at increasing sampling frequency. The key result:

If $X^n$ has discrete triplet $(B^n, C^n, \nu^n)$ that converges (after rescaling) to the triplet $(B, C, \nu)$ of a continuous semimartingale $X$, then $X^n \Rightarrow X$ in $D$.

This is the rigorous foundation for passing from tick-by-tick data to continuous-time models like [[geometric-brownian-motion|geometric Brownian motion]] or the [[heston-model|Heston model]].

## Tightness Criteria

Functional limit theorems always require tightness. Jacod and Shiryaev provide the key criterion:

**Theorem (Aldous-Rebolledo).** A sequence $(X^n)$ of semimartingales is tight in $D$ if and only if:

1. The sequence of compensators $(B^n)$ is C-tight (tight with continuous limits).
2. The sequence of quadratic variations $(\langle M^{n,c} \rangle)$ is C-tight.
3. For every $\varepsilon > 0$, $\nu^n(\{|x| > \varepsilon\} \times [0,t])$ is tight for each $t$.

This criterion converts the analytic problem of tightness into checkable conditions on the triplet components.

## Applications

**Diffusion approximations.** Continuous-time Markov chains with fast transitions can be approximated by diffusion processes. The functional CLT provides the rigorous justification: the predictable characteristics of the chain converge to those of the limiting diffusion.

**High-frequency finance.** Convergence of discrete returns to continuous semimartingales is the basis for realized volatility estimation, market microstructure theory, and the infill asymptotic framework used in modern econometrics.

**Queueing theory.** Heavy-traffic limits for queues (the Kingman-Prokhorov-Iglehart theorems) are functional CLTs: the rescaled queue-length process converges to a reflected Brownian motion.

**Population genetics.** The Wright-Fisher diffusion arises as the functional limit of discrete-generation models — a direct application of Donsker-type theorems to Markov chains on the simplex.

## Related Articles

- [[central-limit-theorem]] — the finite-dimensional precursor.
- [[martingale-clt]] — the martingale CLT that Rebolledo's theorem generalizes.
- [[brownian-motion]] — the canonical limit process.
- [[skorokhod-topology]] — the topology on cadlag path space.
- [[weak-convergence-prokhorov]] — Prokhorov's theorem on tightness.
- [[semimartingale-models]] — predictable characteristics driving the convergence.
- [[convergence-semimartingales]] — the full Jacod-Shiryaev convergence theorem.
- [[levy-processes]] — limits of compound Poisson approximations.
- [[triangular-arrays-processes]] — functional limits for triangular array schemes.
