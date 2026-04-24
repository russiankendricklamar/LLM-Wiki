---
title: "Fisher Information and the Cramér-Rao Bound"
category: "Asymptotic Statistics"
order: 3
lang: "en"
slug: "fisher-information"
growth: "evergreen"
---

# Fisher Information and the Cramér-Rao Bound

Fisher information is the central invariant of parametric statistics. It endows the space of distributions with a **Riemannian metric**, it sets a **hard lower bound** on the variance of any unbiased estimator (Cramér-Rao), it governs the **asymptotic efficiency** of the MLE, and it underlies **natural-gradient descent** in deep learning.

## 1. Definition

Let $\{p(x;\theta) : \theta \in \Theta \subseteq \mathbb{R}^k\}$ be a regular parametric family with respect to a σ-finite dominating measure $\mu$. The **score** is the gradient of the log-likelihood:

$$
s(x;\theta) := \nabla_\theta \log p(x;\theta) = \frac{\nabla_\theta p(x;\theta)}{p(x;\theta)}.
$$

The **Fisher information matrix (FIM)** is the covariance of the score:

$$
I(\theta) := \mathbb{E}_\theta\!\left[s(x;\theta)\, s(x;\theta)^\top\right] = \operatorname{Var}_\theta\bigl(s(x;\theta)\bigr),
$$

where the second equality uses $\mathbb{E}_\theta[s(x;\theta)] = 0$ (proved below).

### Regularity

The family is **regular** if:

1. the support $\{x : p(x;\theta)>0\}$ does not depend on $\theta$;
2. $p(x;\theta)$ is three-times continuously differentiable in $\theta$;
3. differentiation in $\theta$ and integration in $x$ can be swapped (dominated convergence holds).

## 2. Zero-mean score identity

**Claim.** In a regular model, $\mathbb{E}_\theta[s(x;\theta)] = 0$.

*Proof.*
$$
\mathbb{E}_\theta[s(x;\theta)] = \int \frac{\nabla_\theta p}{p}\, p\, d\mu = \int \nabla_\theta p\, d\mu = \nabla_\theta \int p\, d\mu = \nabla_\theta 1 = 0. \ \square
$$

Hence the FIM admits two equivalent forms:

$$
I(\theta) = \mathbb{E}_\theta[s s^\top] = -\mathbb{E}_\theta[\nabla^2_\theta \log p(x;\theta)].
$$

The second form — the **negative expected Hessian** of the log-likelihood — is the convenient one for numerical work.

## 3. Fisher information as a Riemannian metric

On the statistical manifold $\mathcal{M} = \{p_\theta\}$ the matrix $I(\theta)$ defines a Riemannian inner product on the tangent space:

$$
\langle u, v\rangle_\theta := u^\top I(\theta)\, v, \qquad u,v \in T_\theta \mathcal{M}.
$$

This metric is **reparameterisation-invariant**: if $\eta = \phi(\theta)$ is a diffeomorphism,

$$
\tilde I(\eta) = J_\phi^{-\top}\, I(\theta)\, J_\phi^{-1},
$$

where $J_\phi$ is the Jacobian. That is precisely the transformation law of a $(0,2)$-metric tensor.

**Corollary.** The Kullback-Leibler divergence is locally quadratic in the Fisher metric:

$$
D_{\mathrm{KL}}\bigl(p_\theta \,\|\, p_{\theta+d\theta}\bigr) = \tfrac{1}{2}\, d\theta^\top I(\theta)\, d\theta + o(\|d\theta\|^2).
$$

*Derivation:* Taylor-expand $\log p(x;\theta+d\theta)$, take expectation, use zero-mean score.

## 4. The Cramér-Rao bound

**Theorem (Cramér-Rao, scalar).** Let $\hat\theta(X)$ be an unbiased estimator of a scalar $\theta$ in a regular model. Then

$$
\operatorname{Var}_\theta(\hat\theta) \geq \frac{1}{I(\theta)}.
$$

*Proof.* Unbiasedness gives $\mathbb{E}_\theta[\hat\theta - \theta] = 0$. Differentiating in $\theta$,

$$
0 = \frac{d}{d\theta} \int (\hat\theta - \theta)\, p_\theta\, d\mu = \mathbb{E}_\theta[\hat\theta\, s] - 1,
$$

so $\operatorname{Cov}_\theta(\hat\theta, s) = 1$. Cauchy-Schwarz then gives $1 \leq \operatorname{Var}(\hat\theta)\, I(\theta)$. $\square$

**Multivariate case.** For an unbiased estimator $\hat\theta \in \mathbb{R}^k$,

$$
\operatorname{Cov}_\theta(\hat\theta) \succeq I(\theta)^{-1},
$$

in the Loewner order: $\operatorname{Cov}(\hat\theta) - I(\theta)^{-1} \succeq 0$.

### Efficient estimators

An estimator is **efficient** if it attains the Cramér-Rao bound. The sample mean of $X_i \sim \mathcal{N}(\mu,\sigma^2)$ with known $\sigma^2$ is efficient for $\mu$: $\operatorname{Var}(\bar X) = \sigma^2/n = 1/I_n(\mu)$.

## 5. Information in an i.i.d. sample

For $X_1,\dots,X_n$ i.i.d. from $p_\theta$, the FIM is **additive**:

$$
I_n(\theta) = n\, I(\theta).
$$

*Proof.* The total log-likelihood $\ell_n(\theta) = \sum_i \log p(X_i;\theta)$ has score $s_n = \sum_i s(X_i;\theta)$. By independence $\operatorname{Var}(s_n) = \sum_i \operatorname{Var}(s(X_i;\theta)) = n I(\theta)$.

Consequently the Cramér-Rao bound decays as $1/n$: no unbiased estimator beats parametric rate.

## 6. Asymptotic efficiency of the MLE

**Theorem.** In a regular model, the MLE $\hat\theta_n$ satisfies

$$
\sqrt{n}\,(\hat\theta_n - \theta_0) \xrightarrow{d} \mathcal{N}\bigl(0,\, I(\theta_0)^{-1}\bigr).
$$

That is, the MLE is **asymptotically efficient**: its limiting variance is the lower bound.

Sketch: starting from $\nabla \ell_n(\hat\theta_n) = 0$ and Taylor-expanding around $\theta_0$,

$$
\sqrt{n}(\hat\theta_n - \theta_0) \approx \Bigl(-\tfrac{1}{n}\nabla^2 \ell_n(\theta_0)\Bigr)^{-1} \tfrac{1}{\sqrt n}\nabla\ell_n(\theta_0).
$$

The first factor converges to $I(\theta_0)^{-1}$ by the LLN; the second to $\mathcal{N}(0, I(\theta_0))$ by the CLT.

## 7. Natural-gradient descent

Plain gradient descent on a parameter $\theta$ in the Euclidean metric,

$$
\theta_{t+1} = \theta_t - \eta\, \nabla_\theta \mathcal{L}(\theta_t),
$$

is **not reparameterisation-invariant**. Natural-gradient descent (Amari, 1998) takes the steepest direction **on the statistical manifold**:

$$
\theta_{t+1} = \theta_t - \eta\, I(\theta_t)^{-1}\nabla_\theta \mathcal{L}(\theta_t).
$$

The update is then invariant under smooth reparameterisations. **K-FAC** (Martens & Grosse, 2015) and **TRPO** (Schulman et al., 2015) are scalable approximations that exploit the block-diagonal Kronecker-factored structure of $I(\theta)$ in neural networks.

## 8. Examples

### 8.1. Normal $\mathcal{N}(\mu, \sigma^2)$

For fixed $\sigma^2$:

$$
s(x;\mu) = \frac{x-\mu}{\sigma^2}, \qquad I(\mu) = \frac{1}{\sigma^2}.
$$

CRLB: $\operatorname{Var}(\hat\mu) \geq \sigma^2/n$, attained by $\bar X$.

Joint $(\mu,\sigma^2)$:

$$
I(\mu,\sigma^2) = \begin{pmatrix} 1/\sigma^2 & 0 \\ 0 & 1/(2\sigma^4) \end{pmatrix}.
$$

The zero off-diagonals mean **orthogonal parameterisation**: $\hat\mu$ and $\hat\sigma^2$ are asymptotically independent.

### 8.2. Bernoulli $\text{Bern}(p)$

$$
s(x;p) = \frac{x-p}{p(1-p)}, \qquad I(p) = \frac{1}{p(1-p)}.
$$

The FIM grows near the boundary, so information concentrates where $p$ is close to 0 or 1.

### 8.3. Exponential $\text{Exp}(\lambda)$

$$
I(\lambda) = \frac{1}{\lambda^2}.
$$

## 9. Fisher information and the chi-squared test

The log-likelihood-ratio statistic $\Lambda_n = -2\log \mathcal{L}(\theta_0)/\mathcal{L}(\hat\theta_n)$ satisfies

$$
\Lambda_n \xrightarrow{d} \chi^2_k \quad \text{under } H_0: \theta=\theta_0.
$$

Rate of convergence and test power are governed by the FIM: the **non-centrality parameter** under the alternative is the squared Fisher-metric distance between $\theta_0$ and the truth.

## 10. Observed vs. expected information

In practice the **observed Fisher information** is often used:

$$
\hat I_n(\theta) = -\nabla^2_\theta \ell_n(\theta) \Big|_{\theta=\hat\theta_n}.
$$

By the LLN $\hat I_n(\hat\theta_n)/n \xrightarrow{a.s.} I(\theta_0)$. Software packages (statsmodels, R's `glm`) report the observed FIM because no analytic integration is required.

**Caveat.** By Efron-Hinkley, in Gaussian models the observed FIM produces **tighter finite-sample confidence intervals** than the expected one.

## 11. Related topics

- [[cramer-rao-bound|Cramér-Rao bound]] — the direct consequence of the FIM.
- [[mle|Maximum likelihood estimation]] — asymptotically attains $1/I(\theta)$.
- [[information-geometry|Information geometry]] — the FIM as a Riemannian metric on $\mathcal{M}$.
- [[exponential-families|Exponential families]] — FIM equals the Hessian of the log-partition function.
- [[f-divergences|f-divergences]] — all second-order expansions give back the Fisher metric.
- [[local-asymptotic-normality|LAN]] — Le Cam's framework generalising the MLE asymptotics.
- [[sufficient-statistics|Sufficient statistics]] — preserve the full FIM (Fisher-Neyman factorisation).
