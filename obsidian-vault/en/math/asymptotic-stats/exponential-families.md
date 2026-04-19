---
title: "Exponential Families"
category: "Asymptotic Statistics"
order: 11
lang: "en"
slug: "/math/exponential-families"
growth: "seedling"
---

# Exponential Families

Exponential families form a fundamental class of probability distributions characterized by a special parametric structure that unifies sufficient statistics, completeness, and asymptotic properties into a single mathematical framework. They lie at the intersection of classical statistics, information geometry, and Bayesian inference.

## Canonical Form and Natural Parameters

A distribution belongs to an exponential family with parameter $\theta \in \Theta$ if its density (or mass function) admits the representation:

$$p_\theta(x) = h(x) \exp\left(\eta(\theta)^T T(x) - A(\theta)\right)$$

where:
- $h(x) \geq 0$ — the **base measure** (support function)
- $\eta(\theta) \in \mathbb{R}^k$ — the **natural parameters** (canonical parameters)
- $T(x) \in \mathbb{R}^k$ — the **sufficient statistic**
- $A(\theta)$ — the **log-partition function** (cumulant generating function), which ensures proper normalization

It is often convenient to work directly in the **natural parameterization**, replacing $\eta(\theta)$ with $\eta \in \mathcal{H}$ (the natural parameter space):

$$p_\eta(x) = h(x) \exp\left(\eta^T T(x) - A(\eta)\right)$$

The function $A(\eta)$ is defined through the normalization constraint:

$$A(\eta) = \log \int h(x) \exp(\eta^T T(x)) \, dx$$

Its differentiability and convexity (for almost all $\eta$) ensure the existence of moments and define the geometric structure of the exponential family.

## Sufficient Statistics and Neyman–Fisher Factorization

The **Neyman–Fisher Factorization Theorem** states: a statistic $T(X_1, \ldots, X_n)$ is sufficient for $\theta$ if and only if the likelihood function factors as

$$L(\theta; x_1, \ldots, x_n) = g(T(x_1, \ldots, x_n); \theta) \cdot h(x_1, \ldots, x_n),$$

where $h$ does not depend on $\theta$.

For a sample drawn from an exponential family:

$$L(\eta; x_1, \ldots, x_n) = \exp\left(\eta^T \sum_{i=1}^n T(x_i) - n A(\eta)\right) \prod_{i=1}^n h(x_i)$$

Therefore, **$\sum_{i=1}^n T(X_i)$ is the minimal sufficient statistic**. This property compresses all information about $\theta$ into $k$ scalar quantities, irrespective of sample size. This data reduction is fundamental to statistical inference and enables both efficient estimation and hypothesis testing.

## Completeness and the Lehmann–Scheffé Theorem

The family $\{p_\eta: \eta \in \mathcal{H}\}$ is a **complete exponential family** if the natural parameter space $\mathcal{H}$ contains an open subset of $\mathbb{R}^k$ and the function $A(\eta)$ is finite for all $\eta \in \mathcal{H}$.

**Lehmann–Scheffé Theorem**: For a complete exponential family, the sufficient statistic $T(X)$ is also complete and minimal. If $\phi(T)$ is an unbiased estimator of some function $g(\eta)$, then it is the **uniformly minimum variance unbiased estimator (UMVUE)**.

Completeness means that $\mathbb{E}_\eta[f(T)] = 0$ for all $\eta$ implies $f(T) = 0$ almost surely. This is an exceptionally strong condition: it guarantees the uniqueness of unbiased estimators and ensures optimality of Bayesian procedures. Complete exponential families therefore occupy a privileged position in classical statistical inference.

## Moments and Generating Properties of $A(\eta)$

The log-partition function $A(\eta)$ completely determines the moment structure:

$$\mathbb{E}_\eta[T(X)] = \nabla A(\eta)$$
$$\text{Cov}_\eta[T(X)] = \nabla^2 A(\eta)$$

The first derivative (gradient) links natural parameters to the sufficient statistic via the **canonical link function**. The matrix of second derivatives—the Hessian of $A$—equals the covariance matrix of $T(X)$ and is always positive definite when the family is complete.

The log-partition function $A(\eta)$ serves as the **cumulant-generating function**: the $k$-th cumulant is $\frac{\partial^k A(\eta)}{\partial \eta^k}$ (in natural parametrization). All cumulants of order $\geq 2$ are determined by $A$, making exponential families especially tractable for theoretical analysis.

## Steepness, Regularity, and Information Geometry

An exponential family is called **steep** if the natural parameter space $\mathcal{H}$ equals the closure of the set $\{\nabla A(\eta): \eta \in \mathcal{H}\}$. Steepness ensures that the mean of the sufficient statistic can achieve any value in the closure of the support of the distribution.

A **regular** exponential family is a complete, steep family with an open natural parameter space. Regularity is the sufficient condition for [[local-asymptotic-normality|local asymptotic normality]] (LAN) and asymptotic efficiency of maximum likelihood estimators. Regular families also enjoy stable asymptotic behavior: the Fisher Information Matrix is invertible and likelihood equations have solutions with probability approaching one.

**Information geometry** of exponential families is built upon the convexity of $A(\eta)$. The [[cramer-rao-bound|Fisher Information Matrix]] equals the Hessian $\nabla^2 A(\eta)$ in natural parametrization. This connection links the geometry of the parameter space to the geometry of statistical inference, and is central to [[information-geometry|differential geometric approaches]] to statistics.

## Conjugate Priors in Bayesian Analysis

In Bayesian inference, the natural parameters of exponential families permit the construction of **conjugate (natural conjugate) prior distributions**.

If $X | \eta \sim p_\eta(x)$ from an exponential family with natural parameter $\eta$, then the conjugate prior takes the form:

$$p(\eta) \propto \exp(\eta^T \tau - \xi A(\eta))$$

where $\tau$ and $\xi$ are hyperparameters. After observing a sample $x_1, \ldots, x_n$, the posterior also follows the same functional form with updated hyperparameters $\tau + \sum_i T(x_i)$ and $\xi + n$. This closure under Bayesian updating makes conjugate priors computationally convenient and provides closed-form posterior inference. The conjugate structure is unique to exponential families (up to weak regularity conditions).

## Standard Examples

**Normal Distribution** $N(\mu, \sigma^2)$ has natural parameters $\eta = (\mu/\sigma^2, -1/(2\sigma^2))$, sufficient statistic $T(x) = (x, x^2)$, and log-partition function $A(\eta) = -\eta_1^2/(4\eta_2) + \frac{1}{2}\log(-1/(2\eta_2))$.

**Poisson Distribution** with intensity $\lambda$ is represented as $\eta = \log \lambda$, $T(x) = x$, $A(\eta) = e^\eta$.

**Gamma Distribution** (shape $\alpha$, rate $\beta$): natural parameters $\eta = (\alpha - 1, -\beta)$, sufficient statistic $T(x) = (\log x, x)$.

**Multinomial Distribution** with probabilities $(p_1, \ldots, p_k)$ has natural parameters $\eta_j = \log(p_j/p_k)$ for $j < k$ and log-partition function $A(\eta) = -\log p_k$.

Each example exhibits the canonical structure; recognizing this structure enables immediate computation of moments, conjugate priors, and asymptotic properties.

## Connections to Asymptotic Statistics

Regular exponential families provide the natural framework for [[empirical-processes|empirical process theory]] and [[neyman-pearson|hypothesis testing]]. The likelihood ratio principle, [[cramer-rao-bound|Cramér–Rao lower bounds]], and asymptotic efficiency of maximum likelihood estimators all emerge from the structure of exponential families.

Exponential families are fundamental to [[sigma-algebra-measurability|filtration-based]] statistical models and sequential inference. The asymptotic properties of M-estimators, the asymptotic distribution of likelihood ratio statistics, and the optimality of score-based tests all rest upon the geometry and completeness properties of exponential families.

The deep connection between sufficiency, completeness, conjugacy, and information geometry makes exponential families central to modern mathematical statistics.
