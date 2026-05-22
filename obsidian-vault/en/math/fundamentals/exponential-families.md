---
title: "Exponential Families"
category: "Math Foundations"
order: 61
lang: "en"
slug: "exponential-families"
---

# Exponential Families

The Exponential Family is a broad class of probability distributions that share a common algebraic form. This framework provides a unified theory for Generalized Linear Models (GLMs), conjugate priors in Bayesian statistics, and sufficient statistics.

## Canonical Form
A distribution belongs to the exponential family if its probability density (or mass) function can be written as:
$$ p(x | \eta) = h(x) \exp\left( \eta^T T(x) - A(\eta) \right) $$
where:
- $x$: The observed data.
- $\eta$: The **natural (or canonical) parameter** vector.
- $T(x)$: The **sufficient statistic**.
- $A(\eta)$: The **log-partition function** (or cumulant function), which ensures the distribution normalizes to 1. $A(\eta) = \ln \int h(x) \exp(\eta^T T(x)) dx$.
- $h(x)$: The base measure (independent of parameters).

## Properties of the Log-Partition Function
The log-partition function $A(\eta)$ captures the core statistical properties of the distribution. It is always convex, and its derivatives yield the moments of the sufficient statistic $T(x)$:
1. **Mean:** $\nabla_\eta A(\eta) = \mathbb{E}[T(x)]$
2. **Variance:** $\nabla^2_\eta A(\eta) = \text{Var}(T(x))$

## Examples
Many standard distributions belong to the exponential family, including:
- Normal (Gaussian) distribution
- Bernoulli and Binomial distributions
- Poisson distribution
- Gamma distribution
- Beta and Dirichlet distributions
*(Note: The Uniform distribution and Student's t-distribution with fixed degrees of freedom also belong, but distributions with bounds depending on parameters, like Uniform(0, $\theta$), do not).*

## Role in Machine Learning
In Generalized Linear Models, the response variable is assumed to follow an exponential family distribution. The natural parameter $\eta$ is modeled as a linear combination of inputs: $\eta = W^T x$. This elegantly unifies linear regression, logistic regression, and Poisson regression.
