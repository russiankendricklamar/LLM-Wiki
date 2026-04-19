---
title: "Bayesian Asymptotics"
category: "Asymptotic Statistics"
order: 19
lang: "en"
slug: "/math/bayesian-asymptotics"
growth: "seedling"
---

# Bayesian Asymptotics

Bayesian asymptotics studies the limiting behavior of posterior distributions as sample size $n \to \infty$. The two central results—the **Bernstein–von Mises theorem** and **posterior contraction rates**—establish when Bayesian inference recovers frequentist guarantees and how fast posteriors concentrate around the true parameter.

## Bernstein–von Mises Theorem

The Bernstein–von Mises (BvM) theorem asserts that under regularity conditions, the posterior distribution is asymptotically normal and centered at the maximum likelihood estimate.

### Statement

Let $X^n = (X_1, \ldots, X_n)$ be i.i.d. observations from density $p(x | \theta_0)$ where $\theta_0 \in \Theta \subseteq \mathbb{R}^d$. Under regularity conditions:

$$\Pi\left( \sqrt{n}(\theta - \hat{\theta}_n) \in \cdot \, \big| \, X^n \right) \xrightarrow{d} N(0, I(\theta_0)^{-1})$$

in total variation distance, where $\hat{\theta}_n$ is the MLE and $I(\theta_0)$ is the Fisher information matrix. Equivalently, the posterior is approximately:

$$\Pi(\cdot | X^n) \approx N\left( \hat{\theta}_n, n^{-1}I(\theta_0)^{-1} \right)$$

### Key Implications

1. **Credible sets ≈ confidence sets**: A Bayesian $(1-\alpha)$-credible set asymptotically covers the true parameter with probability $1-\alpha$ in the frequentist sense.

2. **Efficiency**: The posterior variance matches the Cramér–Rao lower bound, confirming asymptotic efficiency.

3. **Prior irrelevance**: The posterior forgets the prior at rate $n^{-1/2}$, depending only on the likelihood for large $n$.

### Regularity Conditions

The BvM theorem requires:

- **Prior positivity**: $\Pi(\theta \in U) > 0$ for all neighborhoods $U$ of $\theta_0$ (absolutely continuous prior needed locally).
- **Identifiability**: The map $\theta \mapsto p(x | \theta)$ is injective; $\theta_0$ is the unique maximizer of $\mathbb{E}[\log p(X | \theta)]$.
- **Cramér regularity**: Fisher information $I(\theta_0)$ is positive definite, score function $\nabla_\theta \log p(X | \theta)$ is mean-zero with finite variance, and smoothness conditions on the log-likelihood.

## Bernstein–von Mises Failure

The classical BvM theorem does not hold in several important regimes:

### Infinite-Dimensional Models

In nonparametric settings (e.g., estimating a density or regression function), the posterior typically contracts at rates faster than $n^{-1/2}$. The asymptotic distribution is not normal but supported on infinite-dimensional spaces. Under Gaussian process priors with appropriate smoothness, posteriors can achieve minimax-optimal nonparametric rates (e.g., $n^{-\beta/(2\beta+d)}$ for Hölder-$\beta$ functions in dimension $d$).

### Model Misspecification

When the data-generating process is not in the model class, the posterior may not concentrate at the MLE. Instead, it contracts toward the KL divergence minimizer $\theta^* = \arg\min_\theta D_{\text{KL}}(p_0 \| p(\cdot|\theta))$. The asymptotic variance can exceed the Cramér–Rao bound.

### Boundary Issues

When $\theta_0$ lies on the boundary of $\Theta$, the normal approximation fails. The limiting distribution is typically a reflected Brownian motion or mixture thereof.

## Nonparametric Bayesian Asymptotics

**Castillo and Nickl** developed a nonparametric BvM theory for infinite-dimensional function spaces. Under conditions on the prior (mass on Sobolev balls, exponential tails), the posterior is approximately Gaussian in a suitable Hellinger or Wasserstein topology. The posterior mean enjoys the same contraction rate as the posterior's median absolute deviation.

## Posterior Contraction Rates

Rather than focusing on asymptotic normality, modern Bayesian asymptotics characterizes how fast posteriors concentrate around the truth:

$$\Pi\left( \theta : d(\theta, \theta_0) > M_n \varepsilon_n \, \Big| \, X^n \right) \to 0 \quad \text{in } \mathbb{P}_{\theta_0}\text{-probability}$$

where $\varepsilon_n$ is the contraction rate and $M_n$ is a random factor (typically $\sqrt{\log n}$).

### Ghosal–Ghosh–van der Vaart (GGvV) Theory

The **GGvV framework** gives sufficient conditions for posterior contraction:

1. **Prior mass condition**: The prior must assign sufficiently large mass near the true parameter,
$$\Pi\left( \mathcal{B}(\theta_0, \varepsilon) \right) \geq e^{-n\varepsilon^2}$$

2. **Metric entropy**: The covering number satisfies
$$N(\varepsilon, \Theta, d) \leq e^{D\varepsilon^{-d}}$$
for some dimension $d$.

3. **Kullback–Leibler divergence**: The prior assigns large mass to distributions within $\delta$ in KL divergence,
$$\Pi\left( KL(\theta_0, \theta) \leq \delta \right) \geq e^{-n\delta}$$

Under these conditions, the posterior contracts at rate $\varepsilon_n$ (often $n^{-1/2}$ parametrically, slower in nonparametric models).

## Gaussian Process Priors and Rate-Optimal Posteriors

Gaussian process (GP) priors are particularly well-suited for nonparametric Bayesian asymptotics. A GP with squared-exponential or Matérn kernel induces a prior on Sobolev/Hölder spaces. The posterior under a GP prior contracts at rate $n^{-\beta/(2\beta+d)}$ for estimating a $\beta$-Hölder function in $\mathbb{R}^d$—matching the minimax rate. This optimality holds under a "small ball probability" condition that balances the prior's willingness to place mass on complex functions against the data's pull toward simpler explanations.

## Variational Bayes Asymptotics

**Variational Bayes** (VB) approximates the posterior with a distribution from a tractable family, minimizing KL divergence. VB inherits many asymptotic properties of the true posterior under regularity:

- VB posteriors exhibit BvM-type normality in parametric models.
- In nonparametric settings, VB asymptotics depend on the variational family's expressiveness.
- Mean-field VB can underestimate posterior variance, particularly in high dimensions.

## Connections to Other Topics

The interplay of Bayesian asymptotics with related areas:

- **[[local-asymptotic-normality]]**: LAN provides the theoretical foundation for BvM as a consequence of the local likelihood structure.
- **[[cramer-rao-bound]]**: The Cramér–Rao bound sets the optimal variance that efficient Bayesian procedures must achieve.
- **[[exponential-families]]**: BvM is simplest to verify for exponential families; natural parameterizations ensure Cramér regularity.
- **[[minimax-estimation]]**: Posterior contraction rates in nonparametric models often match minimax rates, showing Bayesian procedures are adaptively optimal.
- **[[empirical-processes]]**: Posterior contraction proofs rely on empirical process concentration via Glivenko–Cantelli and Donsker classes.
- **[[information-geometry]]**: Information geometry clarifies the role of Fisher information and the geometry of parameter spaces under KL divergence.
- **[[m-estimators]]**: The BvM theorem extends to M-estimators; GMMs and robust statistics inherit Bayesian asymptotics under regularity.

## References

- Ghosal, S., Ghosh, J. K., & van der Vaart, A. W. (2000). Convergence rates of posterior distributions. *Ann. Statist.*, 28(2), 500–531.
- Van der Vaart, A. W., & Wellner, J. A. (1996). *Weak Convergence and Empirical Processes*. Springer.
- Castillo, I., & Nickl, R. (2013). Nonparametric Bernstein–von Mises theorems in Gaussian white noise. *Ann. Statist.*, 41(4), 1999–2028.
- Ghosh, J. K., & Ramamoorthi, R. V. (2003). *Bayesian Nonparametrics*. Springer.
