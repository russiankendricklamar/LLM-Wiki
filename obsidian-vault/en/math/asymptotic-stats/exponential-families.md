---
title: "Exponential Families"
category: "Asymptotic Statistics"
order: 8
lang: "en"
slug: "exponential-families"
growth: "evergreen"
---

# Exponential Families

Exponential families are the fundamental class of distributions distinguished by a single algebraic form. The class contains: Gaussian, Bernoulli, Poisson, Gamma, Beta, Dirichlet, Multinomial, Wishart. For these families **MLE is convex**, **sufficient statistics are finite-dimensional**, **moments are derivatives of the log-partition**, and **conjugate priors always exist**. Information geometry calls them **e-flat manifolds** — geodesics in the natural parameter $\eta$ are straight lines.

## 1. Canonical form

A family $\{p(x\mid \eta) : \eta \in \Xi\}$ is **exponential** if its density (with respect to a dominating measure $\mu$) has the form

$$
p(x\mid \eta) = h(x)\, \exp\!\left(\eta^\top T(x) - A(\eta)\right).
$$

Components:

- $T(x) \in \mathbb{R}^d$ — the **sufficient statistic** (all the parametric information about $x$ lives in $T$).
- $\eta \in \Xi \subseteq \mathbb{R}^d$ — the **natural parameter**.
- $h(x) \geq 0$ — the **base measure**.
- $A(\eta) = \log\!\int h(x) e^{\eta^\top T(x)}\, d\mu(x)$ — the **log-partition function** (ensures normalisation).

**Natural parameter space:**

$$
\Xi = \{\eta : \int h(x) e^{\eta^\top T(x)}\, d\mu(x) < \infty\}
$$

is open and convex (proof via Hölder's inequality).

## 2. Log-partition function = cumulant generator

**Theorem.** $A(\eta)$ is the logarithm of the moment generating function of $T(X)$ under the measure $h\, d\mu$. Therefore

$$
\nabla A(\eta) = \mathbb{E}_\eta[T(X)] =: \mu(\eta), \qquad \nabla^2 A(\eta) = \operatorname{Cov}_\eta(T(X)).
$$

The second formula immediately tells us that **$A(\eta)$ is convex** (the Hessian is a covariance matrix, hence positive semidefinite). This is a structural result that follows directly from the form of the density.

**Corollary (one-to-one correspondence).** If $T$ is minimal (no almost-sure linear dependence among its components) then $\mu(\eta) = \nabla A(\eta)$ is a bijection between the natural parameter $\eta$ and the **mean parameter** $\mu$. Every exponential family carries two canonical parametrisations.

## 3. Natural and mean parameters

Legendre transform of $A$:

$$
A^*(\mu) = \sup_\eta (\eta^\top \mu - A(\eta)).
$$

The two parameters are linked by Legendre duality: $\eta = \nabla A^*(\mu)$, $\mu = \nabla A(\eta)$. In information-geometric language this is **Amari's dual affine structure** (e- and m-flat coordinates).

## 4. MLE and convexity

**Setup.** $n$ i.i.d. observations $x_1,\dots,x_n$. Log-likelihood:

$$
\ell_n(\eta) = \eta^\top \sum_i T(x_i) - n A(\eta) + \sum_i \log h(x_i).
$$

Gradient $\nabla \ell_n = \sum_i T(x_i) - n\nabla A(\eta) = 0 \Longrightarrow \boxed{\nabla A(\hat\eta) = \bar T_n}$.

In words, the MLE makes the **theoretical mean of $T$ equal the empirical mean**. It is a **convex optimisation problem** (because $A$ is convex), with a unique solution whenever $T$ is minimal.

## 5. Fisher information and the log-partition

**Theorem.** For an exponential family

$$
I(\eta) = \nabla^2 A(\eta) = \operatorname{Cov}_\eta(T(X)).
$$

So **the Fisher information matrix coincides with the Hessian of the log-partition function**. This is one of the most elegant facts in parametric statistics. Consequences:

- $A(\eta)$ defines the Fisher–Rao Riemannian metric on the manifold $\mathcal{M}$.
- The MLE is asymptotically efficient: $\sqrt n (\hat\eta_n - \eta_0) \xrightarrow{d} \mathcal{N}(0, I(\eta_0)^{-1})$.

## 6. Conjugate priors

**Theorem.** Every exponential family admits a **conjugate prior family** on $\eta$:

$$
p(\eta \mid \nu, \tau) \propto \exp\!\left(\tau^\top \eta - \nu A(\eta)\right),
$$

parameterised by an "effective sample size" $\nu > 0$ and an "effective sum of sufficient statistics" $\tau$. Bayesian update is trivial:

$$
(\nu, \tau) \;\xrightarrow{x_{1:n}}\; \left(\nu + n,\; \tau + \sum_i T(x_i)\right).
$$

This is what makes EM and variational inference algebraically closed for GMMs, LDA, Bernoulli–Beta, Poisson–Gamma, and so on.

## 7. Pitman–Koopman–Darmois theorem

**Theorem.** A parametric family with parameter-independent support admits a **non-trivial sufficient statistic of fixed dimension** if and only if it is exponential.

This explains why exponential families are the universal object: they are the only families for which the parametric information compresses into a finite number of summaries, no matter how much data you collect.

## 8. Maximum entropy

**Theorem.** Among all distributions on $\mathcal{X}$ with fixed expectations $\mathbb{E}[T_j(X)] = \mu_j$ for $j=1,\dots,d$, the maximum of differential entropy is achieved by the **exponential family** with sufficient statistic $T = (T_1,\dots,T_d)$.

Examples:

- $\mathcal{X} = \mathbb{R}$, $\mathbb{E}[X], \mathbb{E}[X^2]$ fixed → Gaussian.
- $\mathcal{X} = \mathbb{R}_+$, $\mathbb{E}[X]$ fixed → Exponential.
- $\mathcal{X} = \{0,1\}$, $\mathbb{E}[X]$ fixed → Bernoulli.
- $\mathcal{X} = \mathbb{R}_+$, $\mathbb{E}[\log X], \mathbb{E}[X]$ fixed → Gamma.

MaxEnt gives a principled justification for treating these distributions as "default choices": they minimise structural assumptions subject to the stated constraints.

## 9. Examples table

| Family | $\eta$ | $T(x)$ | $A(\eta)$ | $h(x)$ |
|---|---|---|---|---|
| Bernoulli $(p)$ | $\log\!\tfrac{p}{1-p}$ | $x$ | $\log(1+e^\eta)$ | 1 |
| Poisson $(\lambda)$ | $\log \lambda$ | $x$ | $e^\eta$ | $1/x!$ |
| $\mathcal{N}(\mu,\sigma^2)$ | $(\mu/\sigma^2,\, -1/(2\sigma^2))$ | $(x, x^2)$ | $-\eta_1^2/(4\eta_2) - \tfrac{1}{2}\log(-2\eta_2)$ | $1/\sqrt{2\pi}$ |
| Gamma $(\alpha,\beta)$ | $(\alpha-1,\, -\beta)$ | $(\log x, x)$ | $\log\Gamma(\eta_1+1) - (\eta_1+1)\log(-\eta_2)$ | 1 |
| Beta $(\alpha,\beta)$ | $(\alpha-1, \beta-1)$ | $(\log x, \log(1-x))$ | $\log B(\eta_1+1,\eta_2+1)$ | 1 |
| Dirichlet $(\alpha)$ | $\alpha - \mathbf{1}$ | $(\log x_1,\dots,\log x_K)$ | $\sum \log\Gamma(\eta_i+1) - \log\Gamma(\sum \eta_i + K)$ | 1 |

## 10. Generalised linear models (GLM)

**GLM.** Observations $y_i$ belong to an exponential family with parameter $\eta_i = \mathbf{x}_i^\top \boldsymbol{\beta}$. The link function $g(\mu_i) = \eta_i$, where $g$ is the canonical link associated with the natural parametrisation.

**Examples:**

- **Logistic regression:** $y_i \in \{0,1\}$, Bernoulli, $g(\mu) = \log\tfrac{\mu}{1-\mu}$.
- **Poisson regression:** $y_i \in \mathbb{N}$, $g(\mu) = \log \mu$.
- **Linear regression:** $y_i \in \mathbb{R}$, Gaussian, $g(\mu) = \mu$.

All of these are convex MLE problems; IRLS (iteratively reweighted least squares) is the standard algorithm.

## 11. Variational inference

In modern ML, exponential families power **mean-field VI**: the approximate posterior is parameterised by a natural parameter $\eta$, and ELBO optimisation reduces to coordinate updates over $\eta$-blocks (CAVI). Blei et al. (2017) showed that if the variational family is exponential and updates are performed in mean-parameter coordinates, CAVI is exactly natural gradient descent in statistical geometry.

## 12. Visualisation: mean → natural parameter

```chart
{
  "type": "line",
  "xAxis": "eta",
  "data": [
    {"eta": -3, "mean": 0.05},
    {"eta": -2, "mean": 0.12},
    {"eta": -1, "mean": 0.27},
    {"eta": 0,  "mean": 0.50},
    {"eta": 1,  "mean": 0.73},
    {"eta": 2,  "mean": 0.88},
    {"eta": 3,  "mean": 0.95}
  ],
  "lines": [
    {"dataKey": "mean", "stroke": "#8b5cf6", "name": "μ(η) = ∇A(η) for Bernoulli"}
  ]
}
```

*The plot $\mu = \sigma(\eta)$ for Bernoulli illustrates Legendre duality: a smooth bijection between natural and mean parameters.*

## 13. Related topics

- [[sufficient-statistics|Sufficient statistics]] — $T(x)$ carries all the information.
- [[fisher-information|Fisher information]] — $I(\eta) = \nabla^2 A(\eta)$.
- [[information-geometry|Information geometry]] — e-flat manifolds.
- [[maximum-entropy|Maximum entropy]] — justification for the choice of family.
- [[mle|Maximum likelihood estimation]] — always a convex problem.
- [[bayesian-inference|Bayesian inference]] — closed-form conjugate priors.
- [[variational-inference|Variational inference]] — mean-field updates.
