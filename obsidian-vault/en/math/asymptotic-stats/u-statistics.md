---
title: "U-Statistics"
category: "Asymptotic Statistics"
order: 14
lang: "en"
slug: "/math/u-statistics"
growth: "seedling"
---

# U-Statistics

U-statistics represent a fundamental class of unbiased estimators of parameters defined by symmetric functions of finite subsamples, with profound asymptotic theory rooted in Hoeffding's decomposition. They unify treatment of many classical statistics and provide the foundation for understanding variance estimation via the jackknife.

## Definition and Core Concepts

A **U-statistic** of order $m$ is defined as:

$$U_n = \binom{n}{m}^{-1} \sum_{1 \leq i_1 < \cdots < i_m \leq n} h(X_{i_1}, \ldots, X_{i_m})$$

where $X_1, \ldots, X_n$ are i.i.d. random variables, $h: \mathcal{X}^m \to \mathbb{R}$ is a symmetric kernel function, and $m$ is fixed while $n \to \infty$. The symmetry of $h$ ensures that the statistic is well-defined: $h(x_{i_1}, \ldots, x_{i_m})$ yields the same value for any permutation of its arguments.

The key property is that $U_n$ is **unbiased** for the parameter:

$$\theta = \mathbb{E}[h(X_1, \ldots, X_m)]$$

that is, $\mathbb{E}[U_n] = \theta$ for all $n \geq m$.

## Classical Examples

**Sample Variance:** The sample variance $S^2 = \frac{1}{n-1}\sum_{i=1}^n (X_i - \bar{X})^2$ corresponds to the kernel $h(x,y) = \frac{1}{2}(x-y)^2$ of order $m=2$. The U-statistic form is:

$$U_n = \binom{n}{2}^{-1} \sum_{i < j} \frac{1}{2}(X_i - X_j)^2$$

which is an unbiased estimator of $\text{Var}(X)$.

**Gini Coefficient:** Defined as $U_n = \frac{2}{n(n-1)} \sum_{i < j} |X_i - X_j|$ with $h(x,y) = |x-y|$, it measures relative income inequality or distributional dispersion.

**Kendall's Tau:** The rank correlation statistic is a U-statistic with $h(x_1, x_2, y_1, y_2) = \text{sgn}[(x_1 - x_2)(y_1 - y_2)]$ of order $m=2$, measuring concordance between paired orderings.

**Wilcoxon Statistic:** The signed-rank test statistic naturally arises as a U-statistic, fundamental to nonparametric hypothesis testing.

## Hoeffding's Decomposition

The asymptotic behavior of U-statistics is governed by **Hoeffding's projection theorem**, which decomposes $U_n$ into orthogonal components. Define the **projected U-statistic** (first-order projection):

$$\tilde{U}_n^{(1)} = \binom{n}{m-1}^{-1} \sum_{1 \leq i_1 < \cdots < i_{m-1} \leq n} \mathbb{E}[h(X_{i_1}, \ldots, X_{i_{m-1}}, X_m) | X_{i_1}, \ldots, X_{i_{m-1}}]$$

Let $\tilde{h}(x_1, \ldots, x_{m-1}) = \mathbb{E}[h(x_1, \ldots, x_{m-1}, X_m)]$. The first-order projection decomposes as:

$$U_n - \theta = \frac{m}{n} \sum_{i=1}^n [\tilde{h}(X_i) - \theta + \delta_i] + \text{lower-order terms}$$

where $\delta_i$ are degenerate U-statistics satisfying $\mathbb{E}[\delta_i | X_i] = 0$.

The **variance structure** is given by:

$$\sigma_1^2 = \text{Var}(\tilde{h}(X_1)) = \text{Var}(\mathbb{E}[h(X_1, \ldots, X_m) | X_1])$$

which captures the marginal influence of a single observation.

## Asymptotic Normality

The fundamental result for U-statistics is the **Central Limit Theorem**: When $\sigma_1^2 > 0$ (non-degenerate case),

$$\sqrt{n}(U_n - \theta) \xrightarrow{d} N(0, m^2 \sigma_1^2)$$

This arises from the projection decomposition: the dominant term $\frac{m}{n} \sum_{i=1}^n (\tilde{h}(X_i) - \theta)$ is a scaled sum of i.i.d. centered random variables, invoking the classical CLT with variance $m^2 \sigma_1^2$. The degenerate remainder terms vanish at higher asymptotic rate.

## Degenerate U-Statistics

When $\sigma_1^2 = 0$ (the **degenerate case**), the linear projection has zero variance. The U-statistic does converge, but at a slower rate. The limiting distribution involves U-statistics of quadratic and higher-order forms. For second-order degeneracy:

$$n(U_n - \theta) \xrightarrow{d} \int \int_0^1 W(s) W(t) K(s,t) \, ds \, dt$$

where $W$ is a Brownian bridge and $K$ is a kernel determined by the second-order expansion of $h$. Such **quadratic forms** appear in rank statistics and goodness-of-fit tests.

## Strong Law of Large Numbers

For U-statistics, a **Strong Law** holds without additional moment assumptions beyond integrability:

$$U_n \xrightarrow{\text{a.s.}} \theta$$

The proof leverages the kernel symmetry and the block structure of U-statistics summation, avoiding individual element dependencies via careful grouping arguments.

## Variance Estimation and the Jackknife

A crucial application of U-statistics is in **jackknife variance estimation**. Define the leave-one-out U-statistic:

$$U_n^{(-i)} = \binom{n-1}{m}^{-1} \sum_{1 \leq i_1 < \cdots < i_m \leq n, \, \text{all} \neq i} h(X_{i_1}, \ldots, X_{i_m})$$

The jackknife estimator of variance is:

$$\hat{\sigma}^2_{\text{jack}} = \frac{n-m}{m} \sum_{i=1}^n (U_n^{(-i)} - \bar{U}_n)^2, \quad \bar{U}_n = \frac{1}{n} \sum_{i=1}^n U_n^{(-i)}$$

This provides a **consistent estimator** of the asymptotic variance $m^2 \sigma_1^2$, enabling confidence interval construction without explicit knowledge of $\sigma_1$.

## Connections to Empirical Processes and V-Statistics

U-statistics relate intimately to [[empirical-processes]]: both encode distributional information via sample-level symmetries. The **V-statistic** variant,

$$V_n = \binom{n}{m}^{-1} \sum_{1 \leq i_1 < \cdots < i_m \leq n} h(X_{i_1}, \ldots, X_{i_m})$$

is identical in form but often paired with biased estimators for computational efficiency. The asymptotic variance properties link U-statistics to Rademacher complexity and empirical process theory through the projection decomposition.

## Role in Hypothesis Testing

U-statistics and their variance estimates underpin classical nonparametric tests (Wilcoxon, Mann-Whitney, Kruskal-Wallis). The asymptotic normality guarantees that test statistics are approximately normal under the null hypothesis, enabling the construction of asymptotically valid tests without parametric distributional assumptions.

## Key Theorems Summary

1. **Unbiasedness:** $\mathbb{E}[U_n] = \theta$ for all $n \geq m$
2. **Asymptotic Normality (non-degenerate):** $\sqrt{n}(U_n - \theta) \xrightarrow{d} N(0, m^2 \sigma_1^2)$
3. **Strong Consistency:** $U_n \xrightarrow{\text{a.s.}} \theta$
4. **Degenerate Convergence:** At rate $n^{1/r}$ where $r$ depends on the order of degeneracy
5. **Jackknife Consistency:** $\hat{\sigma}^2_{\text{jack}} \xrightarrow{p} m^2 \sigma_1^2$

These results establish U-statistics as a central tool in [[asymptotic-statistics]], linking [[central-limit-theorem]] theory to practical variance estimation via [[martingale-clt]] techniques and providing foundations for [[exponential-families]] inference and [[characteristic-functions]] analysis.

## References

The theory of U-statistics originated in Hoeffding (1948) and was systematically developed in Lee (1990). [[Cramer-Rao-bound]] results constrain the variance achievable by unbiased estimators, and U-statistics often achieve these bounds asymptotically when fully efficient.
