---
title: "Markov Chain Mixing Times"
category: "Stochastic Processes"
order: 22
lang: "en"
slug: "/math/markov-chain-mixing"
growth: "seedling"
---

The mixing time of a Markov chain quantifies how long it takes the chain to "forget" its initial state and approach its stationary distribution. This is the central question in the theory of convergence: starting from any initial state, how many steps until the distribution over states is close to equilibrium? The answer is critical for [[discrete-markov-chains|Markov chain]] Monte Carlo (MCMC), randomized algorithms, and the design of efficient samplers.

## Total Variation Distance and Stationarity

To measure closeness to equilibrium, we use the **total variation distance**:

$$d_{\text{TV}}(\mu, \nu) = \frac{1}{2} \sum_{i \in S} |\mu(i) - \nu(i)|.$$

For a chain starting in state $i$, let $\mu_i^{(n)}$ denote the distribution after $n$ steps (with $\mu_i^{(0)} = \delta_i$, the point mass at $i$). The **$n$-step total variation distance to stationarity** from state $i$ is:

$$d_i(n) = d_{\text{TV}}(\mu_i^{(n)}, \pi),$$

where $\pi$ is the stationary distribution. Define:

$$d(n) = \max_{i \in S} d_i(n).$$

This is the worst-case distance: if you start in the hardest-to-mix state, how far are you from $\pi$ after $n$ steps?

## Mixing Time Definition

The **mixing time at tolerance $\varepsilon$** is defined as:

$$t_{\text{mix}}(\varepsilon) = \min\{n : d(n) \leq \varepsilon\}.$$

Standard convention sets $\varepsilon = 1/4$ for a dimensionless mixing time:

$$t_{\text{mix}} = t_{\text{mix}}(1/4).$$

Intuitively, $t_{\text{mix}}$ is the number of steps needed for the chain to mix to within relative error $\varepsilon$ of equilibrium, regardless of starting state.

## Spectral Gap and Convergence Rate

For a finite irreducible aperiodic Markov chain, the transition matrix $P$ has eigenvalues $1 = \lambda_1 > |\lambda_2| \geq \cdots \geq |\lambda_n|$. The **spectral gap** is:

$$\text{gap} = 1 - |\lambda_2|,$$

where $\lambda_2$ is the second-largest-modulus eigenvalue. The spectral gap controls the rate of convergence exponentially:

$$d(n) \leq C \cdot |\lambda_2|^n = C \cdot (1 - \text{gap})^n$$

for some constant $C$ depending on the chain structure and the minimum stationary probability $\pi_{\min} = \min_i \pi_i$.

More precisely, for many chains (reversible chains in particular):

$$t_{\text{mix}}(\varepsilon) \leq \frac{\log(1/(\varepsilon \pi_{\min}))}{\text{gap}}.$$

Large spectral gap → fast mixing; gap near 0 → very slow convergence.

## Reversibility and the Poincaré Inequality

A chain is **reversible** if it satisfies the **detailed balance condition**:

$$\pi_i p_{ij} = \pi_j p_{ji} \quad \text{for all } i, j.$$

Reversible chains are easier to analyze because their transition matrix is symmetric in the inner product weighted by $\pi$. For reversible chains, the spectral gap is related to the **Poincaré inequality**:

$$\text{Var}_\pi(f) \leq \frac{1}{\text{gap}} \cdot \mathcal{E}(f, f),$$

where $\text{Var}_\pi(f) = \mathbb{E}_\pi[f^2] - (\mathbb{E}_\pi[f])^2$ and $\mathcal{E}(f, f)$ is the Dirichlet energy:

$$\mathcal{E}(f, f) = \frac{1}{2} \sum_{i,j} \pi_i p_{ij} (f(i) - f(j))^2.$$

The Poincaré inequality quantifies: if your function oscillates a lot (high Dirichlet energy), then it cannot be too concentrated (high variance). This is one of the deepest tools in mixing time analysis.

## Conductance and Cheeger's Inequality

The **conductance** (or **Cheeger constant**) bounds the spectral gap from below:

$$\text{gap} \geq \frac{\Phi^2}{2},$$

where

$$\Phi = \min_{A \subseteq S : \pi(A) \leq 1/2} \frac{\text{flow}(A, A^c)}{\pi(A)}.$$

Here $\text{flow}(A, A^c) = \sum_{i \in A, j \notin A} \pi_i p_{ij}$ is the probability flux leaving set $A$ at equilibrium. **Cheeger's inequality** provides:

$$\Phi^2 / 2 \leq \text{gap} \leq \Phi \sqrt{2}.$$

Intuition: if the chain is "bottlenecked" (small conductance, hard to move between regions), it mixes slowly. Conductance directly measures how "well-connected" the state space is.

## Coupon Collector Example

Consider a discrete-time random walk that collects coupons: at each step, pick a coupon uniformly at random from $n$ types. What is the mixing time?

The state is the set of collected coupons; the stationary distribution is uniform over all $2^n$ subsets. This chain has:

$$t_{\text{mix}} = \Theta(n \log n).$$

This is because you need roughly $n$ steps to collect all coupons (coupon collector problem), but you also need $\log n$ extra steps at the end to "smooth out" the distribution. The spectral gap is $\Theta(1/n)$, and the formula $t_{\text{mix}} \approx \frac{\log(1/\pi_{\min})}{\text{gap}}$ gives $\approx \frac{\log(2^n)}{1/n} = \Theta(n \log n)$.

## Card Shuffling: Diaconis' Classical Result

The most famous application of mixing time theory is analyzing shuffling algorithms. Diaconis and Bayer (1992) proved that riffle shuffling (the standard in-shuffle) of a deck of $n = 52$ cards requires:

$$t_{\text{mix}} = \log_2(52) + O(1) \approx 7 \text{ shuffles}$$

to mix. This is the number of shuffles after which the deck is "random" in the sense of total variation distance $\leq 1/2$.

The key insight is that riffle shuffling has **spectral gap $\approx 1 / \log n$**, so:

$$t_{\text{mix}}(1/2) \approx \frac{\log(1/2 \pi_{\min})}{\text{gap}} \approx \log n.$$

Empirically, 7 shuffles are indeed sufficient for a shuffled deck to pass statistical randomness tests.

## MCMC and Convergence Diagnostics

In Markov Chain Monte Carlo, the mixing time is the length of the **burn-in period**: after $t_{\text{mix}}$ steps, samples are approximately stationary and can be used for inference.

For a Metropolis-Hastings chain on a $d$-dimensional Gaussian target with covariance $\Sigma$, the mixing time satisfies:

$$t_{\text{mix}} = \Omega\left(\frac{\lambda_{\max}(\Sigma)}{\lambda_{\min}(\Sigma)}\right) = \Omega(\text{condition number}).$$

Poorly conditioned targets (high condition number) lead to slow mixing. This motivates **preconditioning** in HMC and other advanced samplers.

**Practical diagnostics:** $\widehat{R}$ (potential scale reduction factor), effective sample size (ESS), and autocorrelation plots estimate mixing time from samples. If $\widehat{R} < 1.05$ and ESS is large, the chain is likely past burn-in.

## Upper Bounds and Hitting Times

A fundamental upper bound relates mixing time to expected hitting times. For a chain that is **lazy** (can stay in place with probability $\geq 1/2$ at each step):

$$t_{\text{mix}}(\varepsilon) = O\left(\log(1/(\varepsilon \pi_{\min})) \cdot \max_{i,j} \mathbb{E}_i[\tau_j]\right),$$

where $\mathbb{E}_i[\tau_j]$ is the expected time to hit state $j$ starting from $i$. This shows that chains with short "worst-case hitting times" mix faster.

Equivalently, for [[coupling-methods|coupling methods]], if you can couple two trajectories to meet in time $\tau$, then $t_{\text{mix}}(\varepsilon) = O(\log(1/\varepsilon) + \log(1/\pi_{\min}) + \tau)$.

## Summary of Key Results

The mixing time is controlled by:

1. **Spectral gap** ($\text{gap} = 1 - |\lambda_2|$): larger gap $\Rightarrow$ faster mixing
2. **Conductance** $\Phi$: bottlenecks slow the chain
3. **Minimum stationary probability** $\pi_{\min}$: rare states take longer to reach
4. **Reversibility:** enables use of Poincaré inequality and symmetric spectral analysis
5. **Geometry of state space:** hitting times, [[concentration-inequalities|concentration]], and [[renewal-theory|renewal structure]] all matter

The formula $t_{\text{mix}}(\varepsilon) \lesssim \frac{\log(1/(\varepsilon\pi_{\min}))}{\text{gap}}$ is the working estimate for most applications. Understanding mixing is essential for both [[ergodic-theorems-birkhoff|ergodic theory]] and practical algorithm design in sampling, optimization, and inference.

## See also

- [[discrete-markov-chains]]
- [[ergodic-theorems-birkhoff]]
- [[coupling-methods]]
- [[central-limit-theorem]]
- [[concentration-inequalities]]
- [[renewal-theory]]
