---
slug: "/math/martingale-problem"
title: "The Stroock-Varadhan Martingale Problem"
category: "Stochastic Calculus"
order: 6
lang: "en"
---

# The Stroock-Varadhan Martingale Problem

The classical approach to stochastic differential equations constructs solutions pathwise: given $dX_t = b(X_t)\,dt + \sigma(X_t)\,dW_t$, one seeks a process $X$ on a given probability space carrying a Brownian motion $W$. Stroock and Varadhan introduced a fundamentally different viewpoint. Instead of building paths, one looks for a **probability measure** $P$ on the canonical path space under which a certain functional of $X$ becomes a martingale. This is the **martingale problem**, and Jacod and Shiryaev place it at the heart of weak convergence theory for semimartingales: characterizing a limit process through its martingale problem is often far simpler than constructing it as a strong solution to an SDE.

## Formulation

Let $\mathcal{A}$ be a linear operator defined on a domain $\mathcal{D}(\mathcal{A}) \subset C_b(\mathbb{R}^d)$. A probability measure $P$ on the space of cadlag paths $D([0,\infty), \mathbb{R}^d)$ **solves the martingale problem** for $(\mathcal{A}, \nu)$ starting from the initial distribution $\nu$ if:

1. $P(X_0 \in \cdot) = \nu(\cdot)$, and
2. For every $f \in \mathcal{D}(\mathcal{A})$, the process

$$M_t^f = f(X_t) - f(X_0) - \int_0^t \mathcal{A}f(X_s)\,ds$$

is a $P$-martingale with respect to the canonical filtration.

**Well-posedness** means that a solution exists and is unique. When well-posedness holds, the solution defines a strong Markov process whose generator is $\mathcal{A}$.

## Connection to SDEs

Consider the SDE $dX_t = b(X_t)\,dt + \sigma(X_t)\,dW_t$ in $\mathbb{R}^d$. Applying Ito's formula to any $f \in C^2_c(\mathbb{R}^d)$ yields

$$f(X_t) - f(X_0) - \int_0^t Lf(X_s)\,ds = \text{local martingale},$$

where the generator is

$$Lf(x) = \sum_i b_i(x)\,\partial_i f(x) + \frac{1}{2}\sum_{i,j} a_{ij}(x)\,\partial_i\partial_j f(x), \qquad a = \sigma\sigma^\top.$$

Thus any weak solution of the SDE solves the martingale problem for $(L, \nu)$, and conversely, any solution to the martingale problem yields a weak solution. **Weak existence and uniqueness in law for the SDE are equivalent to well-posedness of the martingale problem.**

**Theorem (Stroock-Varadhan).** If $b:\mathbb{R}^d \to \mathbb{R}^d$ is bounded measurable and $a:\mathbb{R}^d \to \mathbb{R}^{d \times d}$ is continuous and uniformly elliptic ($a(x) \geq \lambda I$ for some $\lambda > 0$), then the martingale problem for $L$ is well-posed.

## Why Martingale Problems Are Easier

The martingale problem formulation avoids several difficulties inherent in the pathwise SDE approach:

- **No reference probability space needed.** One works directly on canonical path space; there is no need to construct a Brownian motion or a filtration supporting it.
- **Weak convergence is natural.** Showing that a sequence of probability measures $P_n$ converges weakly to a solution of the martingale problem requires only verifying convergence of the martingale conditions — there is no need to construct a coupling or a common probability space.
- **Localization.** If the martingale problem is well-posed locally (on each bounded domain), a patching argument yields global well-posedness. This is the **localization principle**, which has no clean analogue in the strong SDE theory.

## Diffusion Approximation

The martingale problem is the natural language for **diffusion approximation**: proving that discrete Markov chains converge to continuous diffusions.

**Theorem.** Let $X^n$ be a sequence of Markov chains with generators $\mathcal{A}_n$. If for all $f$ in a sufficiently rich class $\mathcal{D}$:

$$\mathcal{A}_n f(x) \to \mathcal{A}f(x) \qquad \text{uniformly on compacts},$$

and if the martingale problem for $\mathcal{A}$ is well-posed, then $X^n \Rightarrow X$ in the [[skorokhod-topology|Skorokhod topology]], where $X$ is the unique solution of the martingale problem for $\mathcal{A}$.

The proof combines tightness of $(X^n)$ (typically established via moment bounds on the generators) with identification of limits: any weak limit point must solve the martingale problem, and well-posedness forces uniqueness.

## Proof Sketch of Uniqueness

The Stroock-Varadhan uniqueness argument proceeds via a **duality** strategy:

1. For each solution $P$ of the martingale problem, define the one-dimensional marginals $\mu_t(dx) = P(X_t \in dx)$.
2. Show that $\mu_t$ solves the **Fokker-Planck equation** $\partial_t \mu = L^* \mu$ in the distributional sense, where $L^*$ is the formal adjoint of $L$.
3. Prove uniqueness for the Fokker-Planck equation using PDE techniques (parametrix method, Schauder estimates).
4. Since the finite-dimensional distributions are determined by the Markov property and the one-dimensional marginals, uniqueness of $\mu_t$ implies uniqueness of $P$.

## Examples and Applications

**Queueing systems.** A sequence of $M/M/n$ queues in heavy traffic, after diffusion scaling $\hat{Q}_t^n = (Q^n_{nt} - n)/\sqrt{n}$, has generators converging to that of an Ornstein-Uhlenbeck process. The martingale problem machinery yields the [[brownian-motion|Brownian]] diffusion limit without constructing explicit couplings.

**Interacting particle systems.** Mean-field limits of $N$-particle systems with pairwise interactions lead to McKean-Vlasov SDEs. The martingale problem formulation handles the nonlinearity (the generator depends on the law of the process itself) naturally through a fixed-point argument on the space of measures.

**Financial models.** Convergence of binomial tree models to [[geometric-brownian-motion|geometric Brownian motion]] is most cleanly established by showing the generators converge and the limiting martingale problem (for the Black-Scholes generator) is well-posed.

## Semimartingale Perspective

In the Jacod-Shiryaev framework, the martingale problem is reformulated in terms of [[predictable-compensator|predictable characteristics]]. A probability measure $P$ solves the martingale problem for a given operator if and only if the canonical process under $P$ is a semimartingale whose characteristics $(B, C, \nu)$ match those prescribed by the operator. This extends the theory beyond diffusions to processes with jumps, connecting to [[convergence-semimartingales|convergence of semimartingales]] and [[functional-limit-theorems|functional limit theorems]].

## Related Articles

- [[skorokhod-topology]] — the topology on path space in which diffusion approximations converge.
- [[brownian-motion]] — the prototypical solution of the simplest martingale problem.
- [[convergence-semimartingales]] — convergence criteria phrased via predictable characteristics.
- [[functional-limit-theorems]] — the broader framework of weak convergence of processes.
- [[predictable-compensator]] — the semimartingale characteristics that encode the martingale problem.
- [[doleans-dade-exponential]] — stochastic exponentials appearing in martingale problem solutions.
- [[geometric-brownian-motion]] — a key financial application of diffusion approximation.
