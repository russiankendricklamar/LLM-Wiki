---
title: "Concentration Inequalities"
category: "Applied Probability"
order: 18
lang: "en"
slug: "/math/concentration-inequalities"
growth: "seedling"
---

# Concentration Inequalities

Concentration inequalities quantify how tightly a sum of random variables (or a more complex random quantity) clusters around its mean or median. Unlike the [[central-limit-theorem|Central Limit Theorem]], which describes the **shape** of the distribution of a sum, concentration inequalities give **exponential bounds** on the probability of large deviations — they control the **tails**.

This is the mathematical foundation of statistical learning theory, randomized algorithms, and Monte Carlo methods. Whenever you ask "how many samples do I need?" or "what is the probability of a rare bad event?", a concentration inequality answers it.

## Markov and Chebyshev: warm-up bounds

**Markov's inequality.** For any non-negative random variable $X$ and $a > 0$:

$$\mathbb{P}(X \geq a) \leq \frac{\mathbb{E}[X]}{a}.$$

This is **distribution-free**: it uses only the mean. But it is very loose — for $a = 2\mathbb{E}[X]$, we merely get $\mathbb{P}(X \geq 2\mathbb{E}[X]) \leq 1/2$.

**Chebyshev's inequality.** For any random variable $X$ with finite mean $\mu$ and variance $\sigma^2$:

$$\mathbb{P}(|X - \mu| \geq t) \leq \frac{\sigma^2}{t^2}.$$

Still loose: for $t = 3\sigma$, this gives $\mathbb{P} \leq 1/9$. But in the same direction — tail probability vanishes as $t/\sigma \to \infty$.

These are **polynomial** bounds. The frontier leaps when we add **independence** and apply the moment generating function method.

## Moment generating function method

Let $X_1, \ldots, X_n$ be independent random variables with $S_n = \sum_i X_i$. For any $\lambda > 0$:

$$\mathbb{P}(S_n \geq a) = \mathbb{P}(e^{\lambda S_n} \geq e^{\lambda a}) \leq \frac{\mathbb{E}[e^{\lambda S_n}]}{e^{\lambda a}}.$$

By independence:

$$\mathbb{E}[e^{\lambda S_n}] = \prod_{i=1}^n \mathbb{E}[e^{\lambda X_i}] = \prod_{i=1}^n M_{X_i}(\lambda),$$

where $M_X(\lambda) = \mathbb{E}[e^{\lambda X}]$ is the **moment generating function**. Thus:

$$\mathbb{P}(S_n \geq a) \leq \inf_{\lambda > 0} e^{-\lambda a} \prod_{i=1}^n M_{X_i}(\lambda).$$

This **change of measure** is the seed of all modern concentration theory. The art lies in bounding the product $\prod M_{X_i}(\lambda)$.

## Chernoff bound for Bernoulli sums

Let $X_1, \ldots, X_n$ be i.i.d. Bernoulli($p$), and let $S_n = \sum_i X_i$. Then $\mathbb{E}[S_n] = np$. For $a > np$:

$$\mathbb{E}[e^{\lambda X_i}] = (1-p) + p e^{\lambda}.$$

So:

$$\mathbb{P}(S_n \geq a) \leq \inf_{\lambda > 0} e^{-\lambda a} \left( (1-p) + p e^{\lambda} \right)^n.$$

Choosing $\lambda^* = \log\left(\frac{a/n}{p}\right)$ and simplifying yields the **Chernoff bound**:

$$\mathbb{P}(S_n \geq (1 + \delta) np) \leq \exp\left( -\frac{\delta^2 np}{2 + \delta} \right) \quad \text{for } \delta > 0.$$

For small $\delta$, this is roughly $\exp(-\delta^2 np / 3)$. **Exponential in $n$** — far sharper than Chebyshev's polynomial bound.

## Hoeffding's inequality

Hoeffding (1963) gave a remarkably general bound for **bounded i.i.d. random variables**.

**Theorem (Hoeffding).** Let $X_1, \ldots, X_n$ be independent random variables with $a_i \leq X_i \leq b_i$ almost surely, and let $S_n = \sum_i X_i$. Then for any $t > 0$:

$$\mathbb{P}(S_n - \mathbb{E}[S_n] \geq t) \leq \exp\left( -\frac{2t^2}{\sum_i (b_i - a_i)^2} \right).$$

**Key insight:** The bound depends **only on the range** $(b_i - a_i)$, not on the shape of the distribution. A random variable uniform on $[0, 1]$ and one on $[0, 1]$ with a point mass at $0.5$ give the same bound.

For i.i.d. bounded in $[0, 1]$ with $n$ samples:

$$\mathbb{P}\left( \hat{\mu} - \mu \geq t \right) \leq \exp(-2nt^2),$$

where $\hat{\mu} = S_n / n$ is the empirical mean.

**Sample complexity for PAC learning:** If we want $\mathbb{P}(\hat{\mu} - \mu > \varepsilon) \leq \delta$, we need:

$$n \geq \frac{1}{2\varepsilon^2} \log\left(\frac{1}{\delta}\right).$$

This is the **statistical sample complexity** behind all PAC (Probably Approximately Correct) learning bounds.

## Azuma–Hoeffding inequality for martingales

Many algorithms are naturally **martingales**, not sums of i.i.d. variables. Azuma (1967) extended the MGF method to martingales with bounded increments.

**Theorem (Azuma–Hoeffding).** Let $(M_k)_{k=0}^n$ be a martingale with $|M_k - M_{k-1}| \leq c_k$ for all $k$. Then for any $t > 0$:

$$\mathbb{P}(M_n - M_0 \geq t) \leq \exp\left( -\frac{2t^2}{\sum_k c_k^2} \right).$$

**Application:** Randomized algorithms often maintain a martingale of "progress." For example, in a random graph coloring algorithm, $M_k$ = (expected number of uncoloured vertices after $k$ steps). By Azuma–Hoeffding, the true number stays close to the expectation with high probability.

The martingale framework is essential because it handles **adaptive sampling** — the distribution at step $k+1$ depends on the history up to step $k$.

## McDiarmid's bounded differences inequality

A further generalization: suppose a random quantity depends on $n$ independent variables, and changing any one variable changes the quantity by at most $c_i$.

**Theorem (McDiarmid, 1989).** Let $X_1, \ldots, X_n$ be independent, and let $f(X_1, \ldots, X_n)$ be a measurable function such that:

$$|f(x_1, \ldots, x_n) - f(x_1, \ldots, x_i', \ldots, x_n)| \leq c_i$$

for all $i$ and all values $x_1, \ldots, x_n, x_i'$. Then:

$$\mathbb{P}\left( f(X_1, \ldots, X_n) - \mathbb{E}[f] \geq t \right) \leq \exp\left( -\frac{2t^2}{\sum_i c_i^2} \right).$$

This applies to **any function** of independent variables, not just sums. Examples:
- The maximum of $n$ independent random variables.
- The $k$-th order statistic.
- The length of the longest increasing subsequence in a random permutation.
- The chromatic number of a random graph.

McDiarmid is the most flexible tool in the arsenal.

## Sub-Gaussian random variables

A random variable $X$ is **sub-Gaussian** with parameter $\sigma$ if:

$$\mathbb{E}[e^{\lambda X}] \leq e^{\lambda^2 \sigma^2 / 2} \quad \text{for all } \lambda \in \mathbb{R}.$$

**Examples:**
- $X \sim \mathcal{N}(0, \sigma^2)$: exactly sub-Gaussian with parameter $\sigma$.
- Bounded $X \in [a, b]$: sub-Gaussian with parameter $\sigma = (b - a)/2$ (by Hoeffding).

**Sum of sub-Gaussians:** If $X_1, \ldots, X_n$ are independent sub-Gaussian with parameters $\sigma_1, \ldots, \sigma_n$ and $\mathbb{E}[X_i] = 0$, then $S_n = \sum_i X_i$ is sub-Gaussian with parameter $\sqrt{\sum_i \sigma_i^2}$, and:

$$\mathbb{P}(S_n \geq t) \leq \exp\left( -\frac{t^2}{2 \sum_i \sigma_i^2} \right).$$

Sub-Gaussian variables are the "sweet spot": they enjoy exponential concentration without needing boundedness.

## Applications and perspective

**PAC learning:** Hoeffding's inequality is the foundation. To learn a hypothesis class $\mathcal{H}$ to accuracy $\varepsilon$ with confidence $1 - \delta$, sample complexity is $O(|\mathcal{H}| / \varepsilon^2 \cdot \log(1/\delta))$ for finite classes (union bound over $\mathcal{H}$).

**Randomized algorithms:** McDiarmid and Azuma–Hoeffding bound the deviation of random quantities from their expectation, justifying probabilistic arguments.

**High-dimensional statistics:** When $n \ll d$ (samples $\ll$ dimensions), concentration inequalities are the only tool to get distribution-free sample complexity bounds.

**Large deviations theory:** The exponent $-t^2 / \sigma^2$ is the **rate function**. Concentration inequalities are the "first-order" statement; [[large-deviations-cramer|large deviations theory]] refines this to the entropy-energy balance.

## Related Articles

- [[central-limit-theorem]] — describes the bulk; concentration inequalities describe the tails.
- [[law-of-large-numbers]] — weak form; concentration gives quantitative bounds.
- [[characteristic-functions]] — MGF method builds on characteristic functions.
- [[martingale-clt]] — CLT for martingales, refined by Azuma–Hoeffding.
- [[empirical-processes]] — concentration for empirical distribution functions.
- [[large-deviations-cramer]] — refined asymptotic theory of rare events.
