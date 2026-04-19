---
title: "Stein's Method"
category: "Applied Probability"
order: 19
lang: "en"
slug: "/math/stein-method"
growth: "seedling"
---

# Stein's Method

Stein's method is a powerful probabilistic technique for obtaining distributional approximation bounds without explicit computation of characteristic functions or generating functions. Developed by Charles Stein in the 1970s, it provides quantitative [[central-limit-theorem|central limit theorems]] and bounds for [[poisson-approximation|Poisson approximation]], with applications spanning combinatorics, graph theory, and statistical mechanics.

## The Stein Operator and Stein Equation

The foundation of Stein's method rests on a remarkable characterization: a random variable $X$ follows a standard normal distribution $\mathcal{N}(0,1)$ if and only if

$$\mathbb{E}[f'(X) - Xf(X)] = 0$$

for all absolutely continuous functions $f$ with $\mathbb{E}[|f'(X)|] < \infty$. The operator $\mathcal{A}f(x) = f'(x) - xf(x)$ is called the **Stein operator** for the normal distribution.

To measure distance between distributions, we fix a test function $f$ and solve the **Stein equation**:

$$f'(x) - xf(x) = h(x)$$

where $h$ is a prespecified "smooth" function (typically bounded). If $W$ approximates $\mathcal{N}(0,1)$, then $\mathbb{E}[h(W)]$ should be close to zero. Standard bounds on derivatives of solutions to the Stein equation yield:

$$\|f'\|_\infty \leq 2\sqrt{\pi/2} \|h\|_\infty, \quad \|f''\|_\infty \leq 2\|h\|_\infty$$

These bounds decouple approximation analysis from properties of $h$, enabling comparison through [[concentration-inequalities|concentration inequalities]] and [[characteristic-functions|characteristic function]] estimates.

## Exchangeable Pairs and Stein Discrepancy

A practical technique for applying Stein's method is the **exchangeable pairs** approach. If $(W, W')$ is an exchangeable pair of random variables with $\mathbb{E}[W] = 0$ and $\text{Var}(W) = 1$, then under regularity conditions,

$$d_W(W, \mathcal{N}(0,1)) \lesssim \mathbb{E}[|W(W' - W)|] + \text{higher-order corrections}$$

where $d_W$ denotes Wasserstein distance. The quantity $\mathbb{E}[|W(W' - W)|]$ measures how much $W$ "regresses" toward zero on average when coupled with a "near-identical" copy. This provides a quantitative local limit theorem effect without computing densities.

## Chen–Stein Method for Poisson Approximation

For the Poisson distribution, the Stein operator is

$$\mathcal{A}_\lambda f(k) = \lambda[f(k+1) - f(k)] - kf(k), \quad k \in \mathbb{Z}_{\geq 0}$$

where $\lambda > 0$ is the rate parameter. A discrete random variable $K$ satisfies $\mathbb{E}[\mathcal{A}_\lambda f(K)] = 0$ for all bounded functions $f$ if and only if $K \sim \text{Poisson}(\lambda)$.

The Chen–Stein method characterizes distributional approximation by solving

$$\lambda[f(k+1) - f(k)] - kf(k) = h(k) - \mathbb{E}[h(Y)]$$

where $Y \sim \text{Poisson}(\lambda)$. Solutions satisfy uniform bounds:

$$\|f\|_\infty \leq \frac{2}{\lambda}\|h\|_\infty, \quad \|f(k+1) - f(k)\| \leq \frac{1}{\lambda}\|h\|_\infty$$

## Local Dependence and Dissociation

Real-world random variables are rarely independent. Stein's method handles dependence through the concept of **local dependence**: if $W = \sum_{i=1}^n X_i$ and each $X_i$ depends significantly on only a bounded neighborhood of indices, Stein's method yields

$$d_{TV}(W, Y) \lesssim \sum_{i=1}^n \mathbb{E}[\mathbb{E}[X_i | \text{neighbors}]] + \text{variance adjustments}$$

where $d_{TV}$ is total variation distance. The dissociation condition formalizes when a sum of dependent random variables has "locally independent" structure, allowing Poisson or normal approximations with explicit error rates.

## Bounds and Metrics

Stein's method naturally yields bounds in multiple metrics:

- **Wasserstein distance**: $d_W(\mathcal{L}(W), \mathcal{N}(0,1)) \sim O(\text{third moment})$
- **Total variation distance**: $d_{TV}(\mathcal{L}(K), \text{Poisson}(\lambda)) \sim O(\lambda^{-1})$ under dissociation
- **Kolmogorov distance**: Bounds on $\sup_x |P(W \leq x) - \Phi(x)|$ via [[local-limit-theorems|local limit theorems]]

These bounds often match lower bounds in the literature, showing Stein's method is tight.

## Concrete Example: Fixed Points in Random Permutations

Let $\sigma$ be a uniformly random permutation of $\{1,2,\ldots,n\}$, and let $K_n = \sum_{i=1}^n \mathbb{1}_{\sigma(i)=i}$ count the number of fixed points. Stein's method shows:

$$d_{TV}(\mathcal{L}(K_n), \text{Poisson}(1)) \leq \frac{2}{n}$$

The argument: decompose $K_n = \sum_{i=1}^n X_i$ where $X_i = \mathbb{1}_{\sigma(i)=i}$. Each $X_i$ has $\mathbb{P}(X_i = 1) = 1/n$, so $\mathbb{E}[K_n] = 1$. The dissociation condition holds because $X_i$ and $X_j$ are independent if $|i-j| > 1$, with controlled dependence for neighbors. The Chen–Stein method then yields the bound above without computing the full distribution of $K_n$ — even though for moderate $n$, $K_n$ clearly deviates from Poisson(1) due to the dependence structure.

## Applications and Extensions

Stein's method underpins modern analyses in:

- **Graph theory**: counting motifs and subgraphs in random graphs via local dependence bounds
- **Combinatorics**: distribution of pattern occurrences in random sequences
- **Number theory**: approximating counts of primes and other number-theoretic structures
- **Statistical physics**: phase transitions and [[de-finetti-exchangeability|exchangeability]] in spin systems

Recent extensions include multidimensional Stein's method (for multivariate normal and copula approximations) and nonsmooth Stein operators for approximating non-standard limiting distributions.

## References and Further Reading

Stein's method continues to evolve, with modern treatments emphasizing generator-based perspectives and applications to sampling algorithms. The foundational texts remain Stein (1986) and Chen (1998); modern surveys emphasize computational efficiency and multi-dimensional generalizations.
