---
slug: "/math/tightness-semimartingales"
title: "Tightness of Semimartingales"
category: "Stochastic Calculus"
order: 4
lang: "en"
---

# Tightness of Semimartingales

Every limit theorem has two halves: convergence of finite-dimensional distributions, and **tightness** — the guarantee that the sequence of processes does not "escape" to pathological limits. In the [[skorokhod-topology|Skorokhod space]] $D([0,T], \mathbb{R}^d)$ of cadlag functions, [[weak-convergence-prokhorov|Prokhorov's theorem]] says that tightness is equivalent to relative compactness of the sequence of laws. Without tightness, one cannot extract convergent subsequences, and all [[functional-limit-theorems|functional limit theorems]] fail. Jacod and Shiryaev develop a complete toolkit for verifying tightness of semimartingale sequences: Aldous's condition, Rebolledo's theorem reducing tightness to conditions on the predictable triplet, C-tightness for continuous limits, and the UT condition ensuring that tightness is preserved under stochastic integration.

## Tightness in the Skorokhod Space

A sequence of probability measures $(\mu_n)$ on $D = D([0,T], \mathbb{R}^d)$ is **tight** if for every $\varepsilon > 0$ there exists a compact set $K \subset D$ with $\mu_n(K) \geq 1 - \varepsilon$ for all $n$. Prokhorov's theorem: since $D$ with the $J_1$-topology is a Polish space, tightness is equivalent to relative compactness — every subsequence has a further subsequence converging weakly.

The Arzela-Ascoli characterization of compact sets in $D$ translates tightness into two conditions:

1. **Bounded initial values:** $\sup_n P(|X^n_0| > a) \to 0$ as $a \to \infty$.
2. **Control of oscillations:** for each $\varepsilon, \eta > 0$, there exists $\delta > 0$ such that $\sup_n P(w'(X^n, \delta, T) > \eta) < \varepsilon$, where $w'(x, \delta, T)$ is the modulus of continuity adapted to the Skorokhod topology.

Checking condition (2) directly is usually impractical. The theorems below convert it into conditions on the semimartingale characteristics.

## Aldous's Condition

**Theorem (Aldous, 1978).** A sequence $(X^n)$ of cadlag processes is tight in $D$ if (a) for each $t$, the sequence $(X^n_t)$ is tight in $\mathbb{R}^d$, and (b) for every sequence of stopping times $\tau_n \leq T$ and every sequence $\delta_n \to 0$:

$$X^n_{\tau_n + \delta_n} - X^n_{\tau_n} \xrightarrow{P} 0.$$

Condition (b) says: the increments of $X^n$ over small random intervals vanish in probability. This is checkable via moment bounds: if $\mathbb{E}[|X^n_{\tau_n + \delta_n} - X^n_{\tau_n}|^p] \leq C \delta_n^q$ for some $p, q > 0$, then (b) holds.

Aldous's condition is the workhorse for tightness proofs in practice, but for semimartingales one can do better by decomposing the process into its drift, continuous martingale, and jump parts.

## Rebolledo's Theorem

**Theorem (Rebolledo, 1979).** Let $X^n$ be a sequence of semimartingales with [[predictable-compensator|predictable triplets]] $(B^n, C^n, \nu^n)$. Then $(X^n)$ is tight in $D$ provided:

1. The sequence of drift processes $(B^n)$ is tight in $D$.
2. The sequence of quadratic variation processes of the continuous martingale part, $(\langle M^{n,c} \rangle)$, equivalently $(C^n)$, is tight in $D$.
3. For every $\varepsilon > 0$, the sequence $\left(\int_0^{\cdot} \int_{|x| > \varepsilon} \nu^n(ds, dx)\right)$ is tight in $D$.

The power of Rebolledo's theorem is that it **reduces tightness of the process to tightness of its characteristics**, which are often deterministic or have simple structure. Conditions (1)-(3) say: the drift does not blow up, the continuous volatility does not blow up, and the rate of large jumps does not blow up.

**Converse direction.** If $(X^n)$ is tight and additional regularity holds, then the characteristics are themselves tight. This gives a necessary-and-sufficient characterization.

## C-Tightness

A sequence $(X^n)$ is **C-tight** if it is tight and every subsequential limit is a.s. continuous (its law is supported on $C([0,T], \mathbb{R}^d)$).

**Criterion.** $(X^n)$ is C-tight if and only if it is tight and the jumps vanish: for every $\varepsilon > 0$,

$$P\left(\sup_{t \leq T} |\Delta X^n_t| > \varepsilon\right) \to 0.$$

C-tightness is the relevant condition when the limit is known to be continuous (e.g., [[brownian-motion|Brownian motion]], diffusions, continuous [[semimartingale-models|semimartingales]]). It rules out the possibility that jumps in $X^n$ persist in the limit.

In terms of the triplet: C-tightness holds if $(B^n, C^n)$ are C-tight and $\nu^n([0,t] \times \{|x| > \varepsilon\}) \xrightarrow{P} 0$ for all $\varepsilon > 0$, $t > 0$.

## The UT Condition

The **UT (uniform tightness)** condition is the crucial link between tightness of semimartingales and preservation of the "good integrator" property in the limit.

**Definition.** A sequence $(X^n)$ of semimartingales satisfies UT if the set of stochastic integrals $\left\{ \int_0^T H^n_s\, dX^n_s : |H^n| \leq 1, H^n \text{ predictable} \right\}$ is tight in $\mathbb{R}$ for each $T$.

UT says: not only are the processes $X^n$ themselves well-behaved, but stochastic integrals against them remain bounded in probability, uniformly over all bounded integrands.

**Characterization.** UT is equivalent to the conjunction of: (a) tightness of $(X^n)$ in $D$, and (b) the sequences $(B^n_T)$, $(C^n_T)$, and $(\int_0^T \int (|x|^2 \wedge 1)\, \nu^n(ds, dx))$ are tight in $\mathbb{R}$.

UT is strictly stronger than tightness of $(X^n)$ in $D$. The additional strength is precisely what is needed for the [[convergence-semimartingales|convergence of stochastic integrals]]: under UT, if $H^n \to H$ then $\int H^n\, dX^n \Rightarrow \int H\, dX$.

## Tightness and the Main Convergence Theorem

In the [[convergence-semimartingales|Jacod-Shiryaev convergence theorem]], the hypothesis that the triplets $(B^n, C^n, \nu^n)$ converge automatically implies tightness of $(X^n)$ via Rebolledo's theorem. The proof structure is:

1. Triplet convergence $\Rightarrow$ tightness (Rebolledo).
2. Tightness $\Rightarrow$ existence of subsequential limits (Prokhorov).
3. Triplet convergence $\Rightarrow$ uniqueness of the limit (Levy-Khintchine identification).
4. Tightness + unique limit $\Rightarrow$ full sequence converges.

Without step (1), steps (2)-(4) are meaningless. Tightness is the foundation on which the entire edifice rests.

## Applications

**Donsker's invariance principle.** Tightness of rescaled random walks $X^n_t = n^{-1/2} S_{\lfloor nt \rfloor}$ is verified via Aldous's condition using moment bounds on increments. This is the hardest part of the proof; the finite-dimensional CLT is comparatively easy.

**Diffusion approximations.** When proving that a sequence of Markov chains converges to a diffusion, Rebolledo's theorem reduces the tightness step to showing that the drift and quadratic variation of the chain converge — conditions that are typically straightforward to check from the transition rates.

**High-frequency limits.** In financial econometrics, tightness of statistics (realized volatility, power variations) computed from high-frequency data is established through the UT condition, ensuring that discretization effects vanish in the limit.

**Numerical schemes.** Convergence of Euler-Maruyama discretizations to [[stochastic-differential-equations|SDE]] solutions requires tightness of the discrete approximations, which follows from Rebolledo's theorem applied to the scheme's characteristics.

## Related Articles

- [[skorokhod-topology]] — the topology on $D$ where tightness is defined.
- [[weak-convergence-prokhorov]] — Prokhorov's theorem linking tightness and compactness.
- [[convergence-semimartingales]] — the main theorem that tightness enables.
- [[functional-limit-theorems]] — classical results requiring tightness verification.
- [[predictable-compensator]] — the triplet $(B, C, \nu)$ driving Rebolledo's criterion.
- [[brownian-motion]] — the prototypical continuous limit (C-tightness).
- [[semimartingale-models]] — the class of processes under consideration.
- [[martingale-clt]] — Rebolledo's theorem as a tightness + identification result.
