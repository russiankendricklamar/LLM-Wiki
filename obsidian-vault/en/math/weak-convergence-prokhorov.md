---
title: "Weak Convergence and Prokhorov's Theorem"
category: "Mathematics"
order: 9
lang: "en"
---

# Weak Convergence and Prokhorov's Theorem

"Convergence in distribution" is the subtlest of the convergence notions in probability theory. Random variables can "approach" a limit in many different ways: almost surely, in probability, in $L^p$, in distribution. The weakest of these — **weak convergence of distributions** — turns out to be simultaneously the most important for limit theorems (CLT, LLN, [[asymptotic-arbitrage-large-markets|convergence of financial models]]).

Chapter III of Shiryaev's [[shiryaev-probability|"Probability"]] is devoted entirely to weak convergence and the theorems around it — most importantly, **Prokhorov's compactness theorem**.

## Definition

**Definition.** A sequence of probability measures $\mu_n$ on $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ **converges weakly** to $\mu$ (written $\mu_n \Rightarrow \mu$) if

$$\int f \, d\mu_n \to \int f \, d\mu \quad \forall f \in C_b(\mathbb{R}),$$

where $C_b$ denotes bounded continuous functions.

Equivalently, for random variables $X_n \xrightarrow{d} X$ means $\mathbb{E}[f(X_n)] \to \mathbb{E}[f(X)]$ for every bounded continuous $f$.

**Equivalent forms:**

- $F_{X_n}(x) \to F_X(x)$ at every point $x$ where $F_X$ is continuous.
- $\varphi_{X_n}(t) \to \varphi_X(t)$ for every $t$ (Lévy continuity, see [[characteristic-functions]]).
- $\mathbb{P}(X_n \in B) \to \mathbb{P}(X \in B)$ for every "continuity set" $B$ (i.e. $\mu(\partial B) = 0$).

## Why such a strange definition

The simplest alternative — pointwise convergence of distribution functions $F_n(x) \to F(x)$ for every $x$ — is **too restrictive** at points where $F$ is discontinuous. For example, if $X_n = 1/n$ and $X = 0$, then $F_{X_n}(0) = 0$ for large $n$ while $F_X(0) = 1$, breaking pointwise convergence. But "$X_n$ is almost zero, $X$ is exactly zero" should reasonably count as convergence.

Weak convergence **excludes** points of discontinuity from the requirement, giving exactly the right notion: "values of $X_n$ converge to values of $X$ everywhere the limit distribution allows it."

## Skorokhod's representation theorem

**Theorem (Skorokhod).** If $X_n \xrightarrow{d} X$, then there exists a probability space and random variables $\widetilde{X}_n, \widetilde{X}$ on it such that:

1. $\widetilde{X}_n \stackrel{d}{=} X_n$ and $\widetilde{X} \stackrel{d}{=} X$.
2. $\widetilde{X}_n \to \widetilde{X}$ **almost surely**.

A striking result: weak convergence, defined via bounded continuous functions, can be "realized" as almost-sure convergence on a suitable space. Used as a technical trick to translate "in distribution" arguments into more convenient "almost surely" ones.

## Prokhorov's theorem

**Definition.** A family of measures $\{\mu_\alpha\}$ is **tight** if for every $\varepsilon > 0$ there exists a compact $K_\varepsilon$ such that $\mu_\alpha(K_\varepsilon^c) < \varepsilon$ for all $\alpha$. That is, "no mass escapes to infinity."

**Prokhorov's theorem (1956).** In a complete separable metric space, a family of probability measures is **relatively compact in the weak topology** if and only if it is **tight**.

So from any tight sequence of measures one can extract a weakly convergent subsequence. This is the **Bolzano-Weierstrass analogue** for the space of probability measures.

Yuri Vasilievich Prokhorov proved it in 1956 in Moscow as Kolmogorov's graduate student. The theorem is the foundation of the **functional central limit theorem** (Donsker's invariance principle) and of the entire convergence theory for stochastic processes.

## Why tightness

Tightness $\Leftrightarrow$ convergence in law has the limit measure $\mu$ being a true probability measure and not a "defective" measure with mass less than one. Without tightness it is possible, for instance, that $X_n$ "escapes to infinity": $\mathbb{P}(X_n > N) \to 0$ for every $N$, but mass leaks in the limit.

A simple criterion: **if $\sup_n \mathbb{E}[|X_n|^p] < \infty$ for some $p > 0$**, then $(X_n)$ is tight. By Markov's inequality the mass outside $[-K, K]$ is at most $K^{-p} \cdot \sup \mathbb{E}|X|^p$ and tends to zero as $K \to \infty$.

## Lévy continuity revisited

The main practical tool for verifying weak convergence is **Lévy's continuity theorem** (see [[characteristic-functions]]):

$$X_n \xrightarrow{d} X \iff \varphi_{X_n}(t) \to \varphi_X(t) \text{ for every } t,$$

provided the limit function $\varphi_X$ is continuous at zero (equivalent to tightness). All classical proofs of the CLT (see [[central-limit-theorem]]) implement exactly this scheme: compute the characteristic function of the sum, take the limit, recognize the result.

## Hierarchy of convergences

There are five distinct notions of convergence of random variables, arranged in a hierarchy:

1. **Almost surely** ($X_n \to X$ a.s.): $\mathbb{P}(\lim X_n = X) = 1$. The strongest.
2. **In $L^p$** ($p \geq 1$): $\mathbb{E}|X_n - X|^p \to 0$.
3. **In probability** ($X_n \xrightarrow{p} X$): $\mathbb{P}(|X_n - X| > \varepsilon) \to 0$ for every $\varepsilon$.
4. **In distribution** ($X_n \xrightarrow{d} X$): the topic of this article.

Implications: $1 \Rightarrow 3$, $2 \Rightarrow 3$, $3 \Rightarrow 4$. The reverse implications generally **fail**.

Weak convergence is the weakest, but precisely for that reason it is the most general. The CLT, for example, is weak convergence, and a passage to almost-sure convergence is usually impossible.

## Applications

**1. Central limit theorem:** $S_n / \sqrt{n} \xrightarrow{d} \mathcal{N}(0, 1)$. The strongest statement in probability theory.

**2. Functional CLT (Donsker):** the random walk $S_{[nt]} / \sqrt{n}$ converges in distribution to [[brownian-motion|Brownian motion]] $W_t$. The limit is an entire process, and weak convergence is needed **in a function space** (Wiener), not in $\mathbb{R}$.

**3. Convergence of the binomial model to Black-Scholes:** see [[crr-model]]. Binomial prices converge in distribution to the BS price, and Prokhorov's theorem provides moment convergence.

**4. Empirical distributions:** $F_n \Rightarrow F$ by Glivenko-Cantelli, with a known rate (Kolmogorov-Smirnov).

**5. Bayesian statistics:** posterior distributions converge to the point mass of the true parameter as $n \to \infty$ — weak convergence with refinements (Bernstein-von Mises).

## Related Articles

- [[characteristic-functions]] — main tool for verifying weak convergence.
- [[central-limit-theorem]] — main example of weak convergence in practice.
- [[law-of-large-numbers]] — cousin convergence in probability.
- [[kolmogorov-probability-axioms]] — framework in which weak convergence is defined.
- [[brownian-motion]] — function space $\mathbb{R}^\infty$ and Donsker's theorem.
- [[asymptotic-arbitrage-large-markets]] — financial application via contiguity.
- [[crr-model]] — binomial model converges in distribution to BS.
