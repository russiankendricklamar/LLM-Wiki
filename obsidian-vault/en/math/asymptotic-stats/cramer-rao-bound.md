---
title: "Cramér–Rao Bound"
category: "Asymptotic Statistics"
order: 13
lang: "en"
slug: "/math/cramer-rao-bound"
growth: "seedling"
---

# Cramér–Rao Bound

The Cramér–Rao bound is a fundamental inequality in statistical estimation that provides a universal lower bound on the variance of any unbiased estimator. Formally, for an unbiased estimator $T$ of a scalar parameter $\theta$:
$$\text{Var}_\theta(T) \geq \frac{1}{I(\theta)},$$
where $I(\theta)$ is the **Fisher information**. This inequality has three major implications: (1) it establishes what precision is theoretically achievable in parameter estimation, (2) it defines a standard of **efficiency** for estimators, and (3) it reveals deep connections between information-theoretic and statistical concepts via the score function and Fisher matrix. Maximum likelihood estimators (MLEs) achieve this bound asymptotically under regularity conditions, making them asymptotically optimal.

## Fisher information and the score function

The **score function** is the gradient of the log-likelihood:
$$s_\theta(x) = \frac{\partial}{\partial \theta} \log p(x; \theta).$$

For iid data $X = (x_1, \ldots, x_n)$, the total score is $S_\theta(X) = \sum_{i=1}^n s_\theta(x_i)$. Under regularity (smoothness and integrability), the expected score is zero:
$$\mathbb{E}_\theta[s_\theta(X)] = 0.$$

This follows from differentiating under the integral sign in $\int p(x; \theta) dx = 1$.

**Fisher information** for a single observation is defined as:
$$I(\theta) = \mathbb{E}_\theta[s_\theta(X)^2] = \mathbb{E}_\theta\left[\left(\frac{\partial \log p(x; \theta)}{\partial \theta}\right)^2\right].$$

Under regularity conditions (smoothness, dominated convergence), an equivalent form is:
$$I(\theta) = -\mathbb{E}_\theta\left[\frac{\partial^2 \log p(x; \theta)}{\partial \theta^2}\right].$$

Both expressions equal the expected squared score and the negative expected Hessian of log-likelihood. For $n$ iid observations, the total Fisher information is $I_n(\theta) = nI(\theta)$.

Intuitively, Fisher information measures how much the likelihood surface *curves* around the true parameter. High information means the likelihood is sharply peaked; low information means it is flat and estimation is difficult.

## The Cramér–Rao inequality

**Theorem (Cramér-Rao, unbiased case):** Let $T(X)$ be an unbiased estimator of $\theta$, i.e., $\mathbb{E}_\theta[T(X)] = \theta$. Under [[neyman-pearson|regularity conditions]] (smoothness, integrability, differentiability under the integral):
$$\text{Var}_\theta(T) \geq \frac{1}{I(\theta)}.$$

The proof is elegant: from $\mathbb{E}_\theta[T(X)] = \theta$, differentiate with respect to $\theta$:
$$\mathbb{E}_\theta\left[\frac{\partial T(X)}{\partial \theta}\right] = 1.$$

(Differentiating under the integral is allowed under regularity.) Next, consider the covariance:
$$\text{Cov}_\theta(T, S) = \mathbb{E}_\theta[T \cdot S] - \mathbb{E}_\theta[T] \mathbb{E}_\theta[S] = \mathbb{E}_\theta[T \cdot S],$$
since $\mathbb{E}[S] = 0$. By Cauchy-Schwarz:
$$(\text{Cov}_\theta(T, S))^2 \leq \text{Var}_\theta(T) \cdot \text{Var}_\theta(S) = \text{Var}_\theta(T) \cdot I(\theta).$$

So $\text{Var}_\theta(T) \geq \frac{(\text{Cov}_\theta(T, S))^2}{I(\theta)}$.

The final step is computing $\text{Cov}_\theta(T, S)$. Since $\mathbb{E}[S] = 0$ and using integration by parts (assuming boundary terms vanish):
$$\text{Cov}_\theta(T, S) = \mathbb{E}_\theta[T \cdot s_\theta] = \int T(x) \frac{\partial \log p(x; \theta)}{\partial \theta} p(x; \theta) dx = \int T(x) \frac{\partial p(x; \theta)}{\partial \theta} dx.$$

Assuming we can differentiate the left side $\mathbb{E}_\theta[T(X)] = \theta$ under the integral:
$$1 = \mathbb{E}_\theta\left[\frac{\partial T}{\partial \theta}\right] + \text{Cov}_\theta(T, s_\theta).$$

For the case where $T$ depends only on the data (not the parameter), the first term is 0, so $\text{Cov}_\theta(T, S) = 1$, yielding:
$$\text{Var}_\theta(T) \geq \frac{1}{I(\theta)}.$$

**The bound is tight (equality) if and only if the score is a linear function of the statistic $T$:**
$$s_\theta(X) = a(\theta) [T(X) - \theta],$$
for some function $a(\theta)$. This characterizes **efficient estimators**.

## Regularity conditions (Cramér regularity)

The Cramér–Rao inequality holds under **Cramér regularity conditions**:

1. **Support independent of $\theta$:** The support $\{x : p(x; \theta) > 0\}$ does not depend on $\theta$.
2. **Three derivatives exist:** $\log p(x; \theta)$ is three times continuously differentiable in $\theta$ for each $x$.
3. **Dominated convergence:** For $i = 1, 2, 3$,
   $$\left|\frac{\partial^i \log p(x; \theta)}{\partial \theta^i}\right| \leq M_i(x),$$
   where $\int M_i(x) p(x; \theta) dx < \infty$.
4. **Fisher information finite and positive:** $0 < I(\theta) < \infty$.

Violations of these conditions (e.g., Pareto distribution where support depends on $\theta$, or Cauchy distribution where the second moment is undefined) can cause the CR bound to fail or not apply.

## Biased estimators and general linear forms

For a biased estimator $T$ with bias $b(\theta) = \mathbb{E}_\theta[T] - \theta$ and a general linear unbiased functional $L(T) = aT + b$, the Cramér–Rao inequality generalizes to:
$$\text{Var}_\theta(T) \geq \frac{[b'(\theta) + 1]^2}{I(\theta)},$$
where $b'(\theta) = d b(\theta) / d\theta$ is the derivative of the bias.

For unbiased estimators, $b(\theta) = 0$, so $b'(\theta) = 0$ and we recover the standard bound.

## Multiparameter case: Fisher matrix and information inequality

For a $d$-dimensional parameter $\theta = (\theta_1, \ldots, \theta_d)$, the **Fisher information matrix** is:
$$I_{jk}(\theta) = \mathbb{E}_\theta\left[\frac{\partial \log p(X; \theta)}{\partial \theta_j} \frac{\partial \log p(X; \theta)}{\partial \theta_k}\right] = -\mathbb{E}_\theta\left[\frac{\partial^2 \log p(X; \theta)}{\partial \theta_j \partial \theta_k}\right].$$

Let $T = (T_1, \ldots, T_d)$ be an unbiased estimator of $\theta$, and define the covariance matrix $V(\theta) = \text{Cov}_\theta(T)$. The **multiparameter Cramér-Rao inequality** states:
$$V(\theta) - I(\theta)^{-1} \geq 0$$
in the **positive semi-definite order** (Loewner order): the difference is a positive semi-definite matrix.

This means that for each linear combination $c^T T$, the variance satisfies:
$$\text{Var}_\theta(c^T T) \geq c^T I(\theta)^{-1} c.$$

The Fisher matrix is always positive semi-definite and singular in degenerate models (e.g., when parameters are unidentifiable).

## Efficiency and UMVUE

An estimator $T^*$ is **efficient** if it achieves the Cramér–Rao lower bound with equality:
$$\text{Var}_\theta(T^*) = \frac{1}{I(\theta)}.$$

This occurs if and only if the score is a linear function of the estimator. Efficient estimators are rare and exist mainly for [[exponential-families|exponential family]] models. For example, the sample mean is an efficient estimator of the parameter in a Bernoulli distribution.

A **uniformly minimum variance unbiased estimator (UMVUE)** is an unbiased estimator with minimum variance among all unbiased estimators. Efficient estimators are automatically UMVUE. The Lehmann–Scheffé theorem provides a route to finding UMVUEs: if $T$ is a complete sufficient statistic and $\phi(T)$ is unbiased for $\theta$, then $\phi(T)$ is UMVUE.

The Rao–Blackwell theorem connects to the CR bound: if $T$ is unbiased for $\theta$ and $S$ is sufficient, then $\mathbb{E}_\theta[T | S]$ is (1) also unbiased and (2) has variance no greater than $T$. For certain families (exponential families with complete sufficient statistics), this process converges to the UMVUE, which may achieve the CR bound.

## Asymptotic efficiency

The Cramér–Rao bound's greatest power emerges in **asymptotic theory**. Under [[local-asymptotic-normality|local asymptotic normality (LAN)]], the maximum likelihood estimator $\hat{\theta}_n$ satisfies:
$$\sqrt{n}(\hat{\theta}_n - \theta) \xrightarrow{d} N(0, I(\theta)^{-1}),$$
where $I(\theta)$ is the Fisher information for a single observation.

More precisely, the **standardized squared error** of the MLE approaches the CR bound:
$$\lim_{n \to \infty} n \cdot \text{Var}(\hat{\theta}_n) = \frac{1}{I(\theta)}.$$

An estimator is **asymptotically efficient** if its asymptotic variance equals the inverse of Fisher information. MLEs are asymptotically efficient under regularity conditions. Other estimators (method of moments, GMM, robust estimators) may be consistent but typically have larger asymptotic variance.

The LAN framework generalizes the CR bound to a local neighborhood: near the true parameter, all regular estimators have the same asymptotic distribution up to multiplicative constants—the Fisher information sets the fundamental limit.

## Connection to information geometry

The Fisher information matrix is the Riemannian metric on the [[information-geometry|statistical manifold]] of distributions. The Cramér–Rao bound says that parameter estimation variance cannot shrink below the inverse metric distance. Under the Kullback-Leibler divergence, nearby parameters at distance $d\theta$ induce distributions with KL divergence $\approx \frac{1}{2} d\theta^T I(\theta) d\theta$. Estimation uncertainty is bounded by this geometric distance—a deep principle linking differential geometry to statistics.

## Quantum Fisher information

In quantum statistics and quantum metrology, the classical Fisher information generalizes to the **quantum Fisher information** (QFI):
$$I_Q(\theta) = 4 \langle \psi | L^2 | \psi \rangle,$$
where $|\psi\rangle$ is a quantum state and $L$ is the symmetric logarithmic derivative operator. The quantum Cramér–Rao bound provides limits on precision in quantum parameter estimation. Entangled quantum states can achieve QFI values exponentially larger than classical Fisher information, enabling **quantum advantage** in metrology.

## Related concepts

- [[exponential-families|Exponential families]] — where efficient estimators exist.
- [[local-asymptotic-normality|Local asymptotic normality (LAN)]] — asymptotic theory framework.
- [[information-geometry|Information geometry]] — geometric interpretation of Fisher information.
- [[neyman-pearson|Neyman-Pearson lemma]] — foundational hypothesis testing result.
- [[conditional-expectation-sigma|Conditional expectation and sufficiency]] — foundations of UMVUE.
- [[empirical-processes|Empirical processes]] — tools for analyzing estimator convergence.
