---
title: "Bootstrap"
category: "Asymptotic Statistics"
order: 16
lang: "en"
slug: "/math/bootstrap"
growth: "seedling"
---

# Bootstrap

The bootstrap, introduced by Efron in 1979, is a computer-intensive resampling method that estimates the sampling distribution of a statistic by repeatedly sampling with replacement from the empirical distribution. This method bypasses restrictive parametric assumptions and provides principled confidence intervals and hypothesis tests through data-driven approximation of distributional properties.

## The Empirical Bootstrap

The **empirical bootstrap** or nonparametric bootstrap operates as follows: Given an i.i.d. sample $X_1, \ldots, X_n$ with empirical distribution function $\hat{F}_n$, we construct bootstrap replicates by sampling $X_1^*, \ldots, X_n^* \sim \hat{F}_n$ with replacement. For a statistic $T_n = g(X_1, \ldots, X_n)$, we compute bootstrap replicates:

$$T_n^{*(b)} = g(X_1^{*(b)}, \ldots, X_n^{*(b)}), \quad b = 1, \ldots, B$$

The **bootstrap distribution** approximates the sampling distribution of $T_n$. Under mild regularity conditions, the empirical quantiles of $\{T_n^{*(1)}, \ldots, T_n^{*(B)}\}$ converge to the true quantiles of $T_n$:

$$\mathbb{P}(T_n^* \leq t \mid \mathcal{D}_n) \xrightarrow{p} \mathbb{P}(T_n \leq t)$$

where $\mathcal{D}_n = (X_1, \ldots, X_n)$ and convergence holds as both $n, B \to \infty$.

## Theoretical Foundations

The consistency of the bootstrap relies on the **functional delta method** and [[empirical-processes]] theory. Define the bootstrap empirical distribution as $\mathbb{P}_{n,*}$. The key insight is that:

$$\sqrt{n}(\mathbb{P}_{n,*} - \hat{F}_n) \xrightarrow{d} G \quad \text{(bootstrap empirical process)}$$

where $G$ is a mean-zero Gaussian process with covariance structure inherited from the original empirical process. For a smooth functional $\Phi: \mathcal{D} \to \mathbb{R}$ (where $\mathcal{D}$ is a space of distribution functions),

$$\sqrt{n}(\Phi(\mathbb{P}_{n,*}) - \Phi(\hat{F}_n)) \approx \sqrt{n} D\Phi(\hat{F}_n)[G]$$

where $D\Phi$ is the Gâteaux derivative. This approximation is asymptotically distribution-free when $\Phi$ is Hadamard-differentiable, as shown by Beran and Ducharme.

## Conditions for Bootstrap Consistency

Bootstrap consistency requires **Hadamard differentiability** of the statistic at the true distribution $F_0$:

$$\sup_{h \in \mathcal{C}([-1,1])} \left| \frac{\Phi((1-t)F_0 + t(F_0 + h)) - \Phi(F_0)}{t} - D\Phi(F_0)[h] \right| \to 0$$

as $t \to 0$. This condition ensures that:

$$\sqrt{n}(T_n - \theta_0) \xrightarrow{d} L, \quad \sqrt{n}(T_n^* - T_n \mid \mathcal{D}_n) \xrightarrow{d} L$$

where $L$ is the limiting distribution and convergence in the bootstrap world mirrors convergence in reality. For statistics that are merely continuous (not Hadamard-differentiable), the bootstrap can fail, as occurs with maximum likelihood estimators at boundary parameters or order statistics.

## Confidence Interval Construction

Three primary bootstrap confidence interval methods exist:

**Percentile Method:** The simplest approach uses the bootstrap quantiles directly. For a $100(1-\alpha)\%$ confidence interval:

$$[T_n^{*(\alpha/2)}, T_n^{*(1-\alpha/2)}]$$

where $T_n^{*(p)}$ denotes the $p$-th quantile of the bootstrap distribution. This method is **pivotal** in the sense that it depends only on the rank of $T_n$ within the bootstrap sample, making it invariant to monotone transformations of the statistic.

**Basic (Percentile-t) Method:** Account for systematic bias and skewness using the [[central-limit-theorem]]-based approximation:

$$\left[ T_n - z_{1-\alpha/2} \cdot \widehat{\text{SE}}_{\text{boot}}, \quad T_n - z_{\alpha/2} \cdot \widehat{\text{SE}}_{\text{boot}} \right]$$

where $\widehat{\text{SE}}_{\text{boot}} = \sqrt{\text{Var}_*(T_n^*)}$ is the bootstrap standard error. This interval is **translation-invariant** and more accurate for statistics with asymptotic normality.

**BCa (Bias-Corrected and Accelerated) Interval:** Addresses both bias and skewness in the bootstrap distribution via modified quantiles:

$$T_n^{*(p_1)} \leq \theta \leq T_n^{*(p_2)}$$

where $p_1, p_2$ are adjusted quantiles incorporating:
- **Bias correction factor:** $\hat{z}_0 = \Phi^{-1}[\mathbb{P}_*(T_n^* < T_n)]$
- **Acceleration factor:** $\hat{a} = \frac{\sum_i (T_n^{(-i)} - \bar{T}_n^{(-)})^3}{6[\sum_i (T_n^{(-i)} - \bar{T}_n^{(-)})^2]^{3/2}}$ (derived from jackknife [[influence-functions]])

The BCa method achieves $O(n^{-1})$ accuracy compared to $O(n^{-1/2})$ for percentile and basic methods.

## Parametric Bootstrap

When a parametric model $\{f(x; \theta) : \theta \in \Theta\}$ is assumed, the **parametric bootstrap** resamples from the fitted model rather than the empirical distribution. Given an estimate $\hat{\theta}$, draw $X_1^*, \ldots, X_n^* \sim f(\cdot; \hat{\theta})$ and compute $T_n^*$ as before. This approach:

- Leverages model structure for improved efficiency when the model is correct
- Can fail catastrophically if the model is misspecified
- Provides a natural framework for testing composite hypotheses and computing $p$-values under the null hypothesis

For testing $H_0: \theta = \theta_0$ vs. alternatives, the parametric bootstrap computes:

$$p\text{-value} = \frac{1}{B} \sum_{b=1}^B \mathbb{1}[|T_n^{*(b)}(\hat{\theta}_0)| \geq |T_n(\hat{\theta}_0)|]$$

where $\hat{\theta}_0$ is the MLE under the null.

## Bootstrap for Time Series: Block and Stationary Bootstrap

The standard i.i.d. bootstrap fails for dependent data. The **block bootstrap** (Künsch 1989) divides the time series $X_1, \ldots, X_n$ into blocks of length $\ell$ and resamples blocks with replacement. This preserves the temporal dependence structure up to lag $\ell$:

$$\text{Block } B_j = (X_{j\ell + 1}, \ldots, X_{j(\ell+1)})$$

Bootstrap sample: concatenate $m = \lceil n/\ell \rceil$ randomly selected blocks. The choice of block length $\ell$ balances bias (smaller $\ell$ = less dependence preservation) and variance (larger $\ell$ = higher variance due to fewer independent blocks). Optimal $\ell \sim n^{1/3}$ under moment conditions.

**Stationary Bootstrap** (Politis–Romano): Addresses boundary effects by drawing block lengths from a geometric distribution with mean $\bar{\ell}$. Each block is a random i.i.d. draw of length, producing a stationary bootstrap sample:

$$\mathbb{P}(\text{block length} = k) = (1 - p)^{k-1} p, \quad p = 1/\bar{\ell}$$

The stationary bootstrap is more robust to the choice of $\bar{\ell}$ and preserves the long-run variance structure of weakly dependent processes more effectively than fixed-block methods.

## Bootstrap for Regression and Generalized Linear Models

For regression $Y_i = m(X_i) + \epsilon_i$ with [[kernel-density-estimation]] or parametric smoothing, two approaches exist:

**Model-Based (Parametric) Bootstrap:** Fit the regression model, compute residuals $\hat{\epsilon}_i = Y_i - \hat{m}(X_i)$, resample residuals with replacement, and construct bootstrap observations:

$$Y_i^* = \hat{m}(X_i) + \epsilon_i^*$$

This assumes the errors are identically distributed, which can fail under heteroskedasticity.

**Pairs Bootstrap:** Resample $(X_i, Y_i)$ pairs directly with replacement. This requires no parametric assumptions but discards ordering information and can be less efficient for ordered categorical predictors. The pairs bootstrap is **robust** to any form of conditional heteroskedasticity.

For GLMs with nonlinear link $g(m(X_i)) = \eta(X_i)$, both approaches extend naturally, with model-based bootstrap using predicted $\mu_i^*$ and Poisson or binary resampling.

## M-out-of-n Bootstrap for Non-Regular Statistics

Bootstrap consistency fails for **non-regular statistics** like the maximum or range, where the limiting distribution is non-normal and the parameter may be at the boundary of the parameter space. The **m-out-of-n bootstrap**, due to Bickel, Götze, and van Zwet, addresses this by resampling $m < n$ observations:

$$T_m^{*(b)} = g(X_1^{*(b)}, \ldots, X_m^{*(b)}) \quad \text{where} \quad m = m(n) \to \infty, \quad m/n \to 0$$

The choice $m \sim n^{2/3}$ is optimal for many non-regular statistics, yielding bootstrap consistency in distribution. The m-out-of-n bootstrap is particularly useful for extreme value statistics, order statistics, and maximum likelihood at boundary points.

## Connections to Jackknife and Influence Functions

The bootstrap relates intimately to the **jackknife** of Quenouille and Tukey. The jackknife computes:

$$\hat{\theta}_{\text{jack}} = n \cdot T_n - (n-1) \cdot \frac{1}{n}\sum_{i=1}^n T_n^{(-i)}$$

where $T_n^{(-i)}$ omits the $i$-th observation. For smooth functionals, the jackknife variance estimate:

$$\hat{\sigma}^2_{\text{jack}} = \frac{n-1}{n} \sum_{i=1}^n (T_n^{(-i)} - \bar{T}_n^{(-)})^2$$

approximates the bootstrap variance up to second order. Both methods capture the influence of individual observations through resampling, but the bootstrap directly approximates the sampling distribution while the jackknife is a Taylor-series approximation.

## Bootstrap Failure Modes

Despite its generality, the bootstrap has several failure modes:

1. **Non-Regular Statistics:** Maximum, range, and extreme value estimators can yield inconsistent bootstrap distributions when the true parameter is at the boundary.

2. **Weak Asymptotics:** For statistics with slowly converging distributions (e.g., ratios of normals), the bootstrap can be inaccurate in finite samples even when consistent asymptotically.

3. **Dependent Data with Long Memory:** The block bootstrap can be inefficient or inconsistent for strongly dependent processes with hyperbolically decaying autocorrelations ($\rho(k) \sim k^{-\alpha}$ with $0 < \alpha < 1$). The [[concentration-inequalities]] control bootstrap variance poorly in this regime.

4. **High-Dimensional Data:** In high dimensions, the empirical distribution becomes increasingly sparse, and the bootstrap distribution can diverge from the true distribution even for large $n$.

5. **[[Cramer-Rao-bound|Information-Theoretic Limits]]:** For statistics that are superefficient (beating the Cramér–Rao bound on a set of positive measure), the bootstrap fails to capture the correct asymptotic variance.

## Advanced Topics and Recent Developments

**Smoothed Bootstrap:** For continuous statistics, smoothing the empirical distribution before resampling (e.g., via kernel density estimation) can improve accuracy and alleviate boundary effects.

**Double Bootstrap:** Constructing confidence intervals for bootstrap confidence intervals via a nested bootstrap procedure for refined higher-order corrections.

**Subsampling and Subseries Methods:** Generalizations of m-out-of-n that apply to more general dependent structures and weak convergence conditions, avoiding the need for asymptotic normality.

**Multiplier Bootstrap:** Weights observations by i.i.d. random multipliers $w_i \sim \text{Exp}(1)$ or Rademacher(1/2) instead of resampling, reducing computational cost while preserving asymptotic theory.

## Key Results Summary

1. **Bootstrap Consistency (Hadamard-Differentiable Case):** $\sqrt{n}(T_n - \theta_0) \stackrel{d}{=} \sqrt{n}(T_n^* - T_n \mid \mathcal{D}_n)$ in distribution
2. **BCa Accuracy:** $O(n^{-1})$ error rate for confidence intervals vs. $O(n^{-1/2})$ for basic methods
3. **Block Bootstrap for Mixing:** Preserves long-run variance for weakly dependent processes with $\ell \sim n^{1/3}$
4. **M-out-of-n for Non-Regular:** Consistency restored with $m = o(n)$ for maximum and boundary statistics
5. **Parametric Bootstrap:** Asymptotically valid under correct model specification; can fail under misspecification

The bootstrap is a cornerstone of modern statistical inference, providing a unified framework that connects [[empirical-processes]] theory, [[u-statistics]], and [[local-asymptotic-normality]] through data-driven approximation.

## References

Efron (1979) introduced the bootstrap for general estimation and hypothesis testing. Beran and Ducharme (1991) established [[functional-delta-method]] conditions for bootstrap validity. Künsch (1989) developed the block bootstrap for time series, and Politis and Romano (1994) introduced the stationary bootstrap. Bickel, Götze, and van Zwet (1997) analyzed m-out-of-n bootstrap consistency for non-regular statistics. Hall (1992) provides a comprehensive treatment of bootstrap confidence intervals and [[concentration-inequalities]] on bootstrap failure modes.
