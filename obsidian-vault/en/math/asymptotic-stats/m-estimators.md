---
title: "M-Estimators and Z-Estimators"
category: "Asymptotic Statistics"
order: 18
lang: "en"
slug: "/math/m-estimators"
growth: "seedling"
---

# M-Estimators and Z-Estimators

M-estimators and Z-estimators are two closely related frameworks for statistical estimation that unify and generalize maximum likelihood, least squares, and robust estimation methods. An **M-estimator** is defined as the maximizer of a sample objective function, while a **Z-estimator** is defined as the zero of a sample moment equation. Both frameworks provide a unified treatment of consistency and asymptotic normality under minimal regularity conditions, with particular power in analyzing robust estimators that down-weight outliers.

## M-estimators: Definition and basic theory

An **M-estimator** (from "Maximum likelihood type estimator") is defined as:
$$\hat{\theta}_n = \arg\max_{\theta \in \Theta} M_n(\theta) = \arg\max_{\theta \in \Theta} \frac{1}{n} \sum_{i=1}^n m_\theta(X_i),$$
where $m_\theta: \mathcal{X} \to \mathbb{R}$ is the **objective function** or **criterion function**. The population objective is $M(\theta) = \mathbb{E}[m_\theta(X)]$.

The power of M-estimators lies in their generality. By choosing different objective functions $m_\theta$, we recover classical and robust estimators:

- **Maximum likelihood**: $m_\theta(x) = \log p(x; \theta)$. The MLE is the M-estimator with the log-likelihood criterion.
- **Least absolute deviations (LAD)**: $m_\theta(x) = -|x - \theta|$ for location estimation. This minimizes the sum of absolute residuals, less sensitive to outliers than least squares.
- **Huber's robust regression**: $m_\theta(x) = -\rho_H(x - \theta)$, where $\rho_H$ is the Huber loss function:
  $$\rho_H(u) = \begin{cases} \frac{u^2}{2} & |u| \leq k \\ k|u| - \frac{k^2}{2} & |u| > k \end{cases}$$
  This is quadratic in the center (near $\theta$) and linear in the tails, balancing efficiency and robustness.
- **Quantile regression**: $m_\theta(x) = \rho_\tau(x - \theta)$ where $\rho_\tau(u) = u(\tau - \mathbb{1}_{u < 0})$ for the $\tau$-th quantile.

## Consistency of M-estimators

**Theorem (Consistency via Uniform Law of Large Numbers):** Suppose:
1. $\Theta$ is compact.
2. $m_\theta(x)$ is measurable in $x$ for each $\theta$, and continuous in $\theta$ for each $x$.
3. There exists an integrable envelope: $\sup_\theta |m_\theta(x)| \leq M(x)$ with $\mathbb{E}[M(x)] < \infty$.
4. **Identifiability**: $\theta_0$ is the unique maximizer of $M(\theta)$ at the true parameter.

Then $\hat{\theta}_n \xrightarrow{P} \theta_0$ as $n \to \infty$.

The proof rests on the **uniform law of large numbers (uniform LLN)**: under the conditions above,
$$\sup_\theta \left| M_n(\theta) - M(\theta) \right| \xrightarrow{P} 0.$$

This uniform convergence implies that the sample maximizer $\hat{\theta}_n$ is close to the population maximizer $\theta_0$ for large $n$. If $\theta_0$ is the unique maximizer and the supremum converges uniformly, then $\hat{\theta}_n$ must be pulled toward $\theta_0$.

**Identifiability** is crucial. For example, in location estimation with symmetric loss $\rho$, if the true parameter $\theta_0 = 0$ but $\rho$ is symmetric around all points (e.g., $\rho(u) = |u|^p$ for $p > 0$), then the maximizer is non-unique. More subtle failures occur in overparametrized models where multiple parameter values yield the same distribution.

## Asymptotic normality of M-estimators

The remarkable result is that M-estimators are asymptotically normal under mild regularity conditions, with a variance formula that does **not** require knowledge of the likelihood.

**Theorem (Asymptotic Normality of M-estimators):** Suppose:
1. Consistency holds (as above).
2. $m_\theta$ is twice differentiable in $\theta$ for each $x$, with derivatives $\dot{m}_\theta = \frac{\partial m_\theta}{\partial \theta}$ and $\ddot{m}_\theta = \frac{\partial^2 m_\theta}{\partial \theta^2}$.
3. **Regularity in the limit**: The first and second derivatives satisfy uniform integrability conditions near $\theta_0$.
4. $\mathbb{E}[\dot{m}_{\theta_0}(X)] = 0$ (score condition, following from maximization).
5. **Non-singularity**: The **information matrix**
   $$V(\theta_0) = \mathbb{E}[\ddot{m}_{\theta_0}(X)]$$
   is negative definite (since we are at a maximum, this is negative).

Then:
$$\sqrt{n}(\hat{\theta}_n - \theta_0) \xrightarrow{d} N(0, V^{-1} W V^{-1}),$$
where
$$V = -\mathbb{E}[\ddot{m}_{\theta_0}(X)], \quad W = \mathbb{Var}[\dot{m}_{\theta_0}(X)].$$

**The sandwich form** is key. When $V = W$ (as in maximum likelihood under the correct model), this reduces to the [[cramer-rao-bound|Fisher information]] formula. When $V \neq W$ (misspecified models, robust estimation), the sandwich captures the loss of efficiency.

### Proof sketch

By a Taylor expansion of the first-order condition $\frac{1}{n}\sum \dot{m}_{\hat{\theta}_n}(X_i) \approx 0$ around $\theta_0$:
$$0 \approx \frac{1}{n}\sum \dot{m}_{\theta_0}(X_i) + \left(\frac{1}{n}\sum \ddot{m}_{\theta_0}(X_i)\right)(\hat{\theta}_n - \theta_0),$$
rearranging:
$$\sqrt{n}(\hat{\theta}_n - \theta_0) \approx -\left(\frac{1}{n}\sum \ddot{m}_{\theta_0}(X_i)\right)^{-1} \frac{1}{\sqrt{n}}\sum \dot{m}_{\theta_0}(X_i).$$

The first term converges to $-V^{-1}$ (LLN on Hessian). The second term is a sum of iid random variables with mean zero, so by CLT it converges to $N(0, W)$. Thus:
$$\sqrt{n}(\hat{\theta}_n - \theta_0) \xrightarrow{d} N(0, V^{-1} W V^{-1}).$$

## Sandwich variance estimation

In practice, we rarely know $V$ and $W$ in closed form. The **empirical sandwich estimator** replaces expectations with sample averages:
$$\hat{V} = -\frac{1}{n}\sum_{i=1}^n \ddot{m}_{\hat{\theta}_n}(X_i), \quad \hat{W} = \frac{1}{n}\sum_{i=1}^n \dot{m}_{\hat{\theta}_n}(X_i) \dot{m}_{\hat{\theta}_n}(X_i)^T.$$

Then $\widehat{\text{Var}} = \hat{V}^{-1} \hat{W} \hat{V}^{-1}$ is a consistent estimator of the asymptotic covariance matrix. This is called the **Huber sandwich estimator** or **heteroscedasticity-consistent covariance matrix** in econometrics. It is robust to model misspecification.

## Z-estimators: Definition and theory

A **Z-estimator** is the solution to a sample moment equation:
$$\frac{1}{n}\sum_{i=1}^n \psi_{\hat{\theta}_n}(X_i) = 0,$$
where $\psi_\theta: \mathcal{X} \times \Theta \to \mathbb{R}^p$ is a vector-valued **score function** or **estimating function**. The population version is:
$$\mathbb{E}[\psi_{\theta_0}(X)] = 0.$$

Z-estimators include method of moments estimators, generalized method of moments (GMM), empirical likelihood, and many robust estimators. When $\psi_\theta = \dot{m}_\theta$, Z-estimators coincide with M-estimators (and with maximum likelihood for the MLE).

### Consistency of Z-estimators

**Theorem (Consistency via Argmax Theorem):** Suppose:
1. For each $\theta$, $\mathbb{E}[\psi_\theta(X)] = 0$ only at $\theta = \theta_0$ (identifiability).
2. $\psi_\theta$ is continuous in $\theta$.
3. [[empirical-processes|Uniform convergence]] in probability:
   $$\left\| \frac{1}{n}\sum_{i=1}^n \psi_{\theta}(X_i) - \mathbb{E}[\psi_\theta(X)] \right\| \to 0$$
   uniformly in $\theta$ (can be ensured by uniform integrability or [[shannon-entropy|entropy]] conditions on the class $\{\psi_\theta\}$).

Then any solution $\hat{\theta}_n$ to $\frac{1}{n}\sum \psi_{\hat{\theta}_n}(X_i) = 0$ satisfies $\hat{\theta}_n \xrightarrow{P} \theta_0$.

This is an application of the **epi-convergence** or **argmax theorem** of van der Vaart (1994). The intuition: if the empirical criterion $\frac{1}{n}\sum \psi_\theta$ converges uniformly to its expectation $\mathbb{E}[\psi_\theta]$, then the zero of the empirical criterion is close to the zero of the population criterion.

### Asymptotic normality of Z-estimators

**Theorem (Asymptotic Normality of Z-estimators):** Suppose:
1. Consistency holds.
2. $\psi_\theta$ is differentiable in $\theta$ with derivative $\dot{\psi}_\theta = \frac{\partial \psi_\theta}{\partial \theta}$.
3. **Jacobian non-singular**: 
   $$J(\theta_0) = \mathbb{E}[\dot{\psi}_{\theta_0}(X)]$$
   is invertible.
4. Uniform integrability of gradients near $\theta_0$.

Then:
$$\sqrt{n}(\hat{\theta}_n - \theta_0) \xrightarrow{d} N\left(0, J(\theta_0)^{-1} \Sigma(\theta_0) J(\theta_0)^{-T}\right),$$
where $\Sigma(\theta_0) = \text{Cov}[\psi_{\theta_0}(X)]$ is the covariance of the estimating function.

The proof follows the same Taylor expansion as M-estimators: near the solution, $0 \approx \psi_{mean} + J(\hat{\theta}_n - \theta_0)$ where $\psi_{mean}$ is the sample mean of $\psi$. This gives the asymptotic normality formula.

## Robust M-estimators

Robustness addresses the concern that real data contain outliers which can disproportionately influence estimators. Classical least squares (with objective $m_\theta(x) = -(x - \theta)^2$) is extremely sensitive to outliers; a single extreme observation can shift the estimator unboundedly.

**Robust M-estimators** use loss functions that grow sublinearly (slower than linearly) in the absolute residual, limiting the influence of outliers.

### Huber's estimator

Huber's loss (defined above) is the most widely used robust loss. It is:
- Quadratic for small residuals $|u| \leq k$ (statistically efficient in the interior).
- Linear for large residuals $|u| > k$ (bounded influence).
- Twice continuously differentiable everywhere, enabling Newton-Raphson optimization.

The **influence function** (a measure of robustness) for Huber's estimator is bounded:
$$\text{IF}_\theta(x; \hat{\theta}) = \frac{\rho_H'(x - \theta)}{-\int \rho_H''(u) du}.$$
For $|x - \theta| > k$, the influence caps out (is constant), preventing outliers from having unbounded leverage.

### Tukey bisquare

Another popular choice is Tukey's bisquare loss:
$$\rho_T(u) = \begin{cases} \frac{k^2}{6}\left[1 - \left(1 - \frac{u^2}{k^2}\right)^3\right] & |u| \leq k \\ \frac{k^2}{6} & |u| > k \end{cases}$$

This has **bounded support**: observations beyond $\pm k$ are completely down-weighted (have zero influence). This is very robust but can be inefficient when the model is correct, since good observations outside $[-k, k]$ are ignored.

### Iteratively reweighted least squares (IRLS)

One way to compute M-estimates is via **iteratively reweighted least squares**. Rewrite the first-order condition as:
$$\frac{1}{n}\sum \dot{m}_\theta(X_i) = \sum w_i(X_i, \theta) (X_i - \theta) = 0,$$
where $w_i$ are data-dependent weights. This is equivalent to weighted least squares. Iterative algorithms:
1. Initialize $\theta^{(0)}$.
2. Compute weights $w_i^{(t)} = \frac{\dot{m}_{\theta^{(t)}}(X_i)}{X_i - \theta^{(t)}}$.
3. Solve the weighted least squares problem to get $\theta^{(t+1)}$.
4. Repeat until convergence.

For Huber's loss with tuning constant $k$, the weights are $w_i = \min(1, k / |r_i|)$ where $r_i = X_i - \theta$ are residuals.

## Connection to empirical processes and [[shannon-entropy|entropy]]

The consistency and asymptotic normality of M- and Z-estimators depend on the complexity of the class of functions $\{m_\theta : \theta \in \Theta\}$ or $\{\psi_\theta : \theta \in \Theta\}$. This complexity is quantified by **covering numbers** and **VC-dimension** in [[empirical-processes|empirical process theory]].

For finite-dimensional parameters, uniform convergence holds under:
- **Donsker condition**: The function class is Donsker (has bracketing integral finite).
- **VC-subgraph condition**: The graphs of the functions form a VC-subgraph with finite VC-dimension.

For high-dimensional or infinite-dimensional parameters, more delicate arguments (Rademacher complexity, metric entropy) are needed. The theory becomes especially important in modern applications like sparse models ($\ell_1$-penalized regression) where dimension grows with $n$.

## Special case: Maximum likelihood and local asymptotic normality

When $m_\theta(x) = \log p(x; \theta)$, the M-estimator is the MLE. The asymptotic normality formula becomes:
$$\sqrt{n}(\hat{\theta}_n^{\text{MLE}} - \theta_0) \xrightarrow{d} N(0, I(\theta_0)^{-1}),$$
where $I(\theta_0)$ is the [[cramer-rao-bound|Fisher information]]. Here, $V = W = I(\theta_0)$ under the correct specification, so the sandwich simplifies.

This is a special case of the broader theory of [[local-asymptotic-normality|local asymptotic normality (LAN)]], which shows that the likelihood ratio converges to a normal random variable in a local neighbourhood of the true parameter. LAN is the bridge between classical asymptotic statistics and modern nonparametric theory.

## Influence function and breakdown point

The **influence function** (Hampel, 1968) measures the effect of a small contamination on an estimator:
$$\text{IF}(x; T, F) = \lim_{\epsilon \to 0} \frac{T(F_{\epsilon,x}) - T(F)}{\epsilon},$$
where $F_{\epsilon,x} = (1-\epsilon)F + \epsilon \delta_x$ is a contaminated distribution. For M-estimators with objective $m_\theta$, the influence is proportional to $\dot{m}_{\theta_0}(x)$.

The **breakdown point** (Donoho-Huber) is the smallest fraction of data that, if replaced arbitrarily, can cause the estimator to break down (become unbounded):
$$\epsilon^* = \min\left\{\epsilon : \sup_{F'} |T(F')| = \infty\right\}.$$

Classical least squares has breakdown point $\epsilon^* = 1/n$ (one outlier can break it). Tukey bisquare can achieve $\epsilon^* \approx 50\%$ (half the data contaminated, estimator still bounded). This robustness comes at a cost in asymptotic efficiency.

## Related concepts and extensions

- [[empirical-processes|Empirical processes]] — Technical foundation for uniform convergence.
- [[local-asymptotic-normality|Local asymptotic normality (LAN)]] — Theoretical framework unifying asymptotics.
- [[cramer-rao-bound|Cramér–Rao bound]] — Information lower bound for unbiased estimators.
- [[exponential-families|Exponential families]] — Classes where MLEs have explicit form.
- [[concentration-inequalities|Concentration inequalities]] — Tail bounds for sums of random variables.
- [[neyman-pearson|Neyman-Pearson lemma]] — Optimality of likelihood ratio tests.
- [[bootstrap|Bootstrap]] — Resampling method for variance estimation and confidence intervals.
