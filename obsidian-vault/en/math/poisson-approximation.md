---
title: "Poisson Approximation"
category: "Limit Theorems"
order: 10
lang: "en"
---

# Poisson Approximation

When a random variable counts the total number of **rare events** among many independent (or weakly dependent) trials, its distribution is approximately Poisson. This is one of the oldest and most useful limit theorems in probability, going back to Poisson himself (1837). Borovkov treats the classical Poisson limit theorem and its refinements, including explicit error bounds that make the approximation quantitatively useful.

## Classical Poisson limit theorem

**Theorem.** Let $X_1, \ldots, X_n$ be independent Bernoulli random variables with $P(X_i = 1) = p_i$. Set $S_n = \sum_{i=1}^n X_i$ and $\lambda_n = \sum_{i=1}^n p_i$. If $\lambda_n \to \lambda > 0$ and $\max_i p_i \to 0$ as $n \to \infty$, then

$$P(S_n = k) \to \frac{\lambda^k e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \ldots$$

The proof uses [[characteristic-functions|characteristic functions]]: the characteristic function of $S_n$ is $\prod_i (1 - p_i + p_i e^{it})$, and under the given conditions it converges to $\exp(\lambda(e^{it} - 1))$ — the characteristic function of $\text{Poi}(\lambda)$.

**The classical special case.** If $X_i \sim \text{Bernoulli}(p)$ with $np \to \lambda$, then $\text{Bin}(n, p) \xrightarrow{d} \text{Poi}(\lambda)$. This is the "law of rare events" — a phrase coined by Bortkiewicz, who famously verified it on data about Prussian soldiers killed by horse kicks.

**Proof sketch (direct calculation).** For the homogeneous case $p_i = \lambda/n$:

$$P(S_n = k) = \binom{n}{k}\left(\frac{\lambda}{n}\right)^k \left(1 - \frac{\lambda}{n}\right)^{n-k}.$$

As $n \to \infty$ with $k$ fixed: $\binom{n}{k}/n^k \to 1/k!$ and $(1 - \lambda/n)^{n-k} \to e^{-\lambda}$, giving $P(S_n = k) \to \lambda^k e^{-\lambda}/k!$. The convergence is remarkably fast — for $n = 100$ and $\lambda = 1$ the maximum pointwise error is already below $10^{-2}$.

## The Le Cam inequality

Le Cam (1960) quantified the approximation with a celebrated bound in total variation distance.

**Theorem (Le Cam).** Under the same setup as above:

$$d_{TV}\!\big(\mathcal{L}(S_n),\, \text{Poi}(\lambda_n)\big) \leq \sum_{i=1}^n p_i^2.$$

Here $d_{TV}(P, Q) = \sup_A |P(A) - Q(A)|$ is the total variation distance. The bound is remarkably clean: the approximation error is controlled by the sum of squares of individual success probabilities. When all $p_i = \lambda/n$, the bound is $\lambda^2/n$, confirming that the Poisson approximation improves as events become rarer.

A refined version due to Barbour and Hall (1984) gives a two-sided bound:

$$\frac{1}{32} \min\!\left(1, \frac{1}{\lambda_n}\right) \sum p_i^2 \leq d_{TV}\!\big(\mathcal{L}(S_n),\, \text{Poi}(\lambda_n)\big) \leq \min\!\left(1, \frac{1}{\lambda_n}\right) \sum p_i^2,$$

showing that Le Cam's bound is tight up to a universal constant.

## The Chen-Stein method

The most powerful modern approach, due to Chen (1975) and developed by Arratia, Goldstein, and Gordon, provides Poisson approximation bounds even for **dependent** indicators.

Let $W = \sum_{i \in I} I_i$ where $I_i$ are indicator random variables (not necessarily independent). For each $i$, let $N_i \subseteq I$ be a "neighborhood of dependence" — a set such that $I_i$ is independent of $\{I_j : j \notin N_i\}$. Set $\lambda = \mathbb{E}[W] = \sum_i p_i$ where $p_i = P(I_i = 1)$.

**Theorem (Chen-Stein bound).** With $b_1 = \sum_{i} \sum_{j \in N_i} p_i p_j$, $b_2 = \sum_i \sum_{j \in N_i, j \neq i} \mathbb{E}[I_i I_j]$:

$$d_{TV}\!\big(\mathcal{L}(W),\, \text{Poi}(\lambda)\big) \leq \frac{1 - e^{-\lambda}}{\lambda}\,(b_1 + b_2).$$

The magic: the bound depends on the **local dependence structure**, not on global independence. This makes the method applicable to problems where classical limit theorems fail.

## Proof sketch of Chen-Stein

The method rests on Stein's characterization of the Poisson distribution: $W \sim \text{Poi}(\lambda)$ if and only if

$$\mathbb{E}[\lambda f(W+1) - W f(W)] = 0$$

for all bounded $f$. To bound $d_{TV}$, one solves the **Stein equation** $\lambda f(w+1) - w f(w) = \mathbf{1}_{w \in A} - \text{Poi}(\lambda)(A)$ for each set $A$, then bounds the resulting expectation using the local dependence structure. The solution $f$ satisfies $\|f\| \leq 1$ and $\|\Delta f\| \leq (1 - e^{-\lambda})/\lambda$, giving the theorem.

## Applications

**Birthday problem.** Among $n$ people, let $I_{ij}$ indicate that persons $i$ and $j$ share a birthday. Then $W = \sum_{i < j} I_{ij}$ counts coincidences. The indicators are dependent (if $i,j$ share a birthday and $j,k$ share one, this says something about $i,k$). Chen-Stein gives $W \approx \text{Poi}(\binom{n}{2}/365)$, recovering the classical birthday formula with an explicit error bound.

**Random graphs.** In the Erdos-Renyi graph $G(n, p)$, the number of isolated vertices, triangles, or copies of a fixed subgraph is asymptotically Poisson near the threshold. The Chen-Stein method yields the threshold for connectivity: $p = (\log n)/n$.

**Coupon collector.** The number of missing coupons after $n$ draws from $m$ types is approximately Poisson when the expected number remaining is $O(1)$.

**Random permutations.** The number of fixed points in a uniformly random permutation of $\{1, \ldots, n\}$ is asymptotically $\text{Poi}(1)$. In fact the joint distribution of cycles of lengths $1, 2, \ldots, k$ converges to independent Poissons.

**Insurance mathematics.** The number of large claims in a portfolio of many policies with small individual claim probabilities is well approximated by a Poisson distribution — this is the foundation of collective risk theory and connects to the [[lundberg-cramer-ruin|Lundberg-Cramer ruin model]].

**Extreme values.** The number of exceedances of a high threshold $u_n$ in a sequence $X_1, \ldots, X_n$ of i.i.d. random variables is approximately Poisson when $nP(X > u_n) \to \tau$.

**Hashing and computer science.** In a hash table with $m$ slots and $n$ keys, the number of collisions at a given slot is approximately $\text{Poi}(n/m)$. The maximum load (most loaded slot) is governed by the Poisson tail, giving the classical bound $\Theta(\log n / \log \log n)$ for uniform hashing.

## Beyond the basics

**Compound Poisson approximation.** When rare events come in clusters (e.g., runs of successes), the limiting distribution is compound Poisson rather than simple Poisson. The Chen-Stein method extends to this setting.

**Poisson process approximation.** The point process of event times converges to a Poisson process, not just the count. This strengthening is essential in extreme value theory and in the theory of [[renewal-theory|renewal processes]].

**Negative binomial and mixed Poisson.** When the Poisson parameter $\lambda$ is itself random (e.g., $\lambda \sim \text{Gamma}(\alpha, \beta)$), the marginal distribution is negative binomial. This "mixed Poisson" model is central to actuarial science and overdispersed count data in biostatistics.

## Relation to the Central Limit Theorem

The Poisson and Gaussian approximations are complementary regimes for sums of Bernoulli variables. When $np \to \lambda$ (fixed), the Poisson approximation applies; when $np \to \infty$, the [[central-limit-theorem|CLT]] takes over: $\text{Poi}(\lambda)$ is itself approximately $\mathcal{N}(\lambda, \lambda)$ for large $\lambda$. The transition between regimes is smooth — for moderate $\lambda$ both approximations have comparable accuracy, and the choice depends on the application. Borovkov makes this duality precise through uniform estimates that interpolate between the two.

## Historical note

Poisson stated the limit theorem in 1837, but it was Bortkiewicz (1898) who demonstrated its practical relevance with his study of rare events. The quantitative theory began with Prohorov (1953), who gave the first explicit error bounds, and Le Cam (1960), whose elegant inequality became a benchmark. The Chen-Stein revolution of the 1970s-1990s transformed the subject from a collection of ad hoc arguments into a coherent methodology with applications far beyond the original probabilistic setting. Borovkov's treatment integrates the classical Russian contributions (Prohorov, Kolmogorov) with these modern developments.

## Related Articles

- [[central-limit-theorem]] — the other major limit theorem; CLT applies when events are not rare
- [[characteristic-functions]] — the analytic tool behind the classical proof
- [[law-of-large-numbers]] — the simplest limit theorem for sums
- [[borel-cantelli-zero-one]] — complementary results on rare events
- [[large-deviations-cramer]] — large deviations refine the CLT in a different direction
- [[renewal-theory]] — Poisson processes as a special case
