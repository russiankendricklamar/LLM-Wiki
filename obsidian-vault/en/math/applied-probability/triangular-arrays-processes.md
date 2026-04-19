---
slug: "/math/triangular-arrays-processes"
title: "Triangular Arrays and Convergence to Processes with Independent Increments"
category: "Stochastic Calculus"
order: 7
lang: "en"
---

# Triangular Arrays and Convergence to Processes with Independent Increments

The classical central limit theorem describes when a sum of independent random variables converges to a Gaussian distribution. Its process-level generalization asks: when does a row-sum of independent processes $X^n = \sum_k X^n_k$ converge weakly in the Skorokhod space $D$ to a process with independent increments? Jacod and Shiryaev develop the definitive answer, lifting the Lindeberg-Feller theory from random variables to stochastic processes. The result provides the **functional Lindeberg-Feller theorem**: convergence holds if and only if the predictable characteristics of the array converge and no single summand dominates asymptotically.

## Setting: Triangular Arrays of Processes

For each $n \geq 1$, let $X^n_1, \ldots, X^n_{k_n}$ be row-wise independent processes (semimartingales) defined on a common probability space $(\Omega_n, \mathcal{F}_n, P_n)$. The row sum is

$$X^n_t = \sum_{k=1}^{k_n} X^n_{k,t}.$$

Each $X^n_k$ has [[predictable-compensator|predictable characteristics]] $(B^{n,k}, C^{n,k}, \nu^{n,k})$ relative to a truncation function $h$. By independence, the characteristics of $X^n$ are the sums:

$$B^n = \sum_k B^{n,k}, \quad C^n = \sum_k C^{n,k}, \quad \nu^n = \sum_k \nu^{n,k}.$$

## The Functional Lindeberg-Feller Theorem

**Theorem.** The sequence $X^n$ converges weakly in $D([0,T], \mathbb{R}^d)$ equipped with the [[skorokhod-topology|Skorokhod topology]] to a process $X$ with independent increments and characteristics $(B, C, \nu)$ if and only if:

1. **Drift convergence:** $B^n_t \xrightarrow{P} B_t$ for each $t$.
2. **Diffusion convergence:** $C^n_t \xrightarrow{P} C_t$ for each $t$.
3. **Jump measure convergence:** $\nu^n([0,t] \times A) \xrightarrow{P} \nu([0,t] \times A)$ for each $t$ and continuity set $A$ bounded away from 0.
4. **Infinitesimal condition (Lindeberg):** For every $\varepsilon > 0$,

$$\sum_{k=1}^{k_n} \mathbb{E}\left[\sup_{s \leq t} |X^n_{k,s}|^2 \,\mathbb{1}_{\{\sup_{s \leq t}|X^n_{k,s}| > \varepsilon\}}\right] \to 0.$$

The infinitesimal condition is the process-level analogue of the classical Lindeberg condition: it ensures that no single summand contributes a macroscopic fraction of the total variation. The limit $X$ is necessarily a process with independent increments — equivalently, a [[levy-processes|Levy process]] if it is additionally time-homogeneous.

## Connection to Classical Results

**Convergence to Brownian motion (functional CLT).** When the summands are i.i.d. with mean zero and finite variance, setting $X^n_{k,t} = n^{-1/2}\xi_k \mathbb{1}_{[k/n, \infty)}(t)$ gives the Donsker invariance principle: $X^n \Rightarrow \sigma W$ in $D$, where $W$ is a [[brownian-motion|Brownian motion]]. The conditions reduce to $C^n_t \to \sigma^2 t$ and the Lindeberg condition, exactly as in the [[central-limit-theorem|classical CLT]].

**Convergence to Levy processes.** If the array is formed from i.i.d. random variables with a distribution in the domain of attraction of a [[stable-distributions|stable law]] with index $\alpha \in (0,2)$, the limit is an $\alpha$-stable Levy process. The jump measure condition captures the heavy-tailed behavior, and the infinitesimal condition is automatically satisfied.

**Convergence to general processes with independent increments.** The full theorem handles time-inhomogeneous limits and non-stationary arrays, encompassing both the Gaussian and Poissonian components through the Levy-Khintchine triplet $(B_t, C_t, \nu_t)$.

## The Infinitesimal Condition

The Lindeberg-type condition deserves emphasis. It is equivalent to:

$$\max_{1 \leq k \leq k_n} P\!\left(\sup_{s \leq t} |X^n_{k,s}| > \varepsilon\right) \to 0 \qquad \text{for every } \varepsilon > 0.$$

This says that the array is **infinitesimal**: no single row element can produce a macroscopic contribution. Without this condition, the limit may fail to have independent increments (it could instead be a semimartingale with a more complex structure). The condition is the process-level version of the requirement $\max_k |X_{n,k}| \xrightarrow{P} 0$ in the classical theory.

## Proof Architecture

The proof follows the Jacod-Shiryaev paradigm for [[convergence-semimartingales|convergence of semimartingales]]:

1. **Tightness.** The convergence of characteristics plus the infinitesimal condition imply tightness of $(X^n)$ in $D$ via [[tightness-semimartingales|Rebolledo's criterion]].
2. **Identification of limits.** Any subsequential weak limit $P$ must be a law under which the canonical process has characteristics $(B, C, \nu)$. Since a process with independent increments is uniquely determined by its characteristics (the [[characteristic-functions|Levy-Khintchine formula]]), $P$ is unique.
3. **Uniqueness forces full convergence.** By the subsequence principle, tightness plus unique limit implies convergence of the entire sequence.

## Applications to High-Frequency Statistics

In the analysis of high-frequency financial data, tick-by-tick returns form a natural triangular array. Over an interval $[0, T]$, the $n$-th row consists of returns $\Delta^n_k X = X_{t^n_k} - X_{t^n_{k-1}}$ at observation times $0 = t^n_0 < t^n_1 < \cdots < t^n_{k_n} = T$ with mesh $\max_k (t^n_k - t^n_{k-1}) \to 0$.

If the underlying price process is a [[semimartingale-models|semimartingale]], the realized characteristics of the array converge to the true characteristics of the process. This is the theoretical foundation for:

- **Realized volatility** as an estimator of integrated variance $\int_0^T \sigma^2_s\,ds$.
- **Power variations** for detecting jumps and estimating jump activity.
- **Tests for the presence of a continuous martingale component** based on the behavior of truncated variations.

The triangular array theorem ensures that the discretization error vanishes asymptotically and identifies the limiting distribution of the estimation error.

## Multivariate Extensions

The theorem extends to $\mathbb{R}^d$-valued arrays, with $C^n$ becoming a matrix-valued process and $\nu^n$ a measure on $\mathbb{R}^d \setminus \{0\}$. The convergence conditions are stated component-wise, and the limit is characterized by a $d$-dimensional Levy-Khintchine triplet. This is essential for modeling multivariate high-frequency data, where cross-asset dependencies must be captured simultaneously.

## Related Articles

- [[central-limit-theorem]] — the scalar ancestor of the functional Lindeberg-Feller theorem.
- [[functional-limit-theorems]] — the general framework for weak convergence of processes.
- [[convergence-semimartingales]] — the broader semimartingale convergence theory.
- [[skorokhod-topology]] — the topology on cadlag path space.
- [[levy-processes]] — the time-homogeneous special case of the limit.
- [[stable-distributions]] — limits arising from heavy-tailed arrays.
- [[tightness-semimartingales]] — tightness criteria used in the proof.
- [[infinitely-divisible-distributions]] — the distributional class underlying processes with independent increments.
- [[characteristic-functions]] — the Levy-Khintchine representation of the limit.
