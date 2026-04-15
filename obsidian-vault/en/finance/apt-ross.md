---
title: "Arbitrage Pricing Theory (APT)"
category: "Pricing Models"
order: 140
lang: "en"
---

# Arbitrage Pricing Theory (APT)

Arbitrage Pricing Theory (APT) is an asset pricing model proposed by Stephen Ross in 1976 as an **alternative to [[capm|CAPM]]**. The key idea: instead of an equilibrium argument (homogeneous investor expectations and mean-variance optimization), Ross uses **no asymptotic arbitrage in a large market** as the only assumption.

This makes APT a **weaker but more universal** theory: it requires neither investor rationality nor homogeneity, and admits multiple risk factors instead of a single "market" one. [[shiryaev-stochastic-finance|Shiryaev]] (Vol. 1, Ch. I, §2d) presents APT as the theoretical bridge between classical CAPM and the modern theory of [[asymptotic-arbitrage-large-markets|large markets]].

## Setup

Suppose the market has $n$ assets with returns $r_i$, each linearly depending on $K$ common risk factors:

$$r_i = \alpha_i + \sum_{k=1}^{K} \beta_{i,k} \cdot F_k + \varepsilon_i,$$

with:

- $F_k$ — common factors (e.g. GDP, inflation, oil, market-wide thermodynamics),
- $\beta_{i,k}$ — sensitivity of asset $i$ to factor $k$,
- $\varepsilon_i$ — idiosyncratic (asset-specific) noise,
- $\alpha_i$ — mean return.

Assumptions:

1. $\mathbb{E}[F_k] = 0$ (WLOG).
2. $\mathbb{E}[\varepsilon_i] = 0$ and idiosyncratic shocks are **uncorrelated across assets**: $\text{Cov}(\varepsilon_i, \varepsilon_j) = 0$ for $i \neq j$, also independent of factors.
3. Variances are bounded: $\text{Var}(\varepsilon_i) \leq \sigma^2$ for all $i$.

## Main statement

**APT theorem (Ross 1976; Huberman 1982).** As $n \to \infty$, absence of [[asymptotic-arbitrage-large-markets|asymptotic arbitrage]] forces mean returns to have a linear structure:

$$\alpha_i \approx r_f + \sum_{k=1}^{K} \beta_{i,k} \cdot \lambda_k,$$

where $\lambda_k$ is the premium for factor $k$ (the same across all assets). "Approximately" means: the sum of squared deviations $\sum_i (\alpha_i - r_f - \sum_k \beta_{i,k} \lambda_k)^2$ is bounded by a constant independent of $n$.

That is, **most assets** have expected return explained by factor betas, and only a small subset can deviate. If this failed, an asymptotically arbitraging strategy could be built.

## Proof (idea)

Consider a portfolio with weights $w$, neutral to all factors ($\sum_i w_i \beta_{i,k} = 0$ for every $k$) and zero net investment ($\sum_i w_i = 0$).

Then the portfolio return is

$$r_p = \sum_i w_i \alpha_i + \sum_i w_i \varepsilon_i.$$

The idiosyncratic part $\sum_i w_i \varepsilon_i$ has variance $\sum_i w_i^2 \sigma^2$, which tends to zero as $n \to \infty$ provided $\sum_i w_i^2 \to 0$ (LLN). So "arbitrage" risk vanishes.

But the deterministic part $\sum_i w_i \alpha_i$ must not yield systematic profit — otherwise this is asymptotic arbitrage. From this requirement the linear dependence of $\alpha_i$ on $\beta_{i,k}$ follows.

## Comparison with CAPM

| Aspect | CAPM | APT |
|---|---|---|
| Number of factors | One (market) | Arbitrary $K$ |
| Origin of factors | Market portfolio | Unspecified (analyst chooses) |
| Main assumption | Equilibrium + mean-variance | No asymptotic arbitrage |
| Investor homogeneity | Required | Not required |
| Empirical testability | Weak | Flexible (can change factors) |
| Premia $\lambda_k$ | Endogenous: $\lambda = \mathbb{E}[r_M] - r_f$ | Exogenous (estimated from data) |

CAPM is the special case of APT with $K = 1$ and the single factor being the market. The Fama-French multi-factor models (size, value, profitability, investment, momentum) are practical implementations of APT with $K = 5{-}6$.

## Weakness: choice of factors

APT does not say **which** factors to use. This is both a strength (the theory is universal) and a weakness (every analyst picks their own set). Decades of empirical work have produced a "factor zoo": market, size, value, profitability, investment, momentum, low-volatility, quality, BAB, and dozens of exotic ones. This has spawned the **factor zoo problem** (Cochrane, 2011): most factors are the result of random search rather than genuine risk premia.

Modern methods (LASSO, Elastic Net, machine learning) try to automatically select relevant factors from the zoo, but no definitive solution exists.

## Connection to large markets

APT is the **first** place in financial mathematics where an argument relies on infinitely many assets. This line was later formalized by Kabanov and Kramkov ([[asymptotic-arbitrage-large-markets|large financial markets]]) and led to the notions of asymptotic arbitrage, contiguity, and a generalized FTAP in the limit. APT can be viewed as the "engineering predecessor" of this more general theory.

From the [[ftap-first-fundamental-theorem|FTAP]] viewpoint, APT is a statement about the special structure of the martingale measure in factor models: in the $n \to \infty$ limit the EMM "focuses" on factor risk-neutrality, while idiosyncratic components become uncompensated.

## Related Articles

- [[capm]] — special case of APT with a single factor.
- [[asymptotic-arbitrage-large-markets]] — modern theoretical continuation of Ross's ideas.
- [[ftap-first-fundamental-theorem]] — general martingale theory in which APT is embedded.
- [[markowitz-mean-variance]] — portfolio foundation on which APT generalizes CAPM.
- [[fama-macbeth-regression]] — standard empirical test of APT models.
- [[factor-attribution]] — practical use of APT for fund return decomposition.
- [[alpha-stacking]] — practice of building portfolios from many factor strategies.
- [[efficient-market-hypothesis]] — theoretical context of APT.
