---
slug: "/finance/cointegration"
title: "Cointegration"
category: "Algorithms and ML"
order: 40
lang: "en"
---

# Cointegration

Two time series that individually wander like random walks (integrated of order 1, or I(1)) can nonetheless maintain a **stable long-run equilibrium**: their linear combination is stationary. This phenomenon, called **cointegration** (Engle and Granger, 1987; Johansen, 1988), resolved the "spurious regression" problem that had plagued econometrics and became the standard framework for modelling long-run relationships in macroeconomics, finance, and pairs trading.

## Integration and spurious regression

A time series $y_t$ is **integrated of order $d$**, written $y_t \sim I(d)$, if it requires $d$ differences to become stationary. A random walk $y_t = y_{t-1} + \varepsilon_t$ is $I(1)$: its first difference $\Delta y_t = \varepsilon_t$ is white noise.

**Spurious regression (Granger and Newbold, 1974).** Regressing one $I(1)$ series on another unrelated $I(1)$ series produces high $R^2$ and significant $t$-statistics even when the series are independent. Standard OLS inference breaks down because the residuals are $I(1)$, not stationary. This was the motivating puzzle that led to cointegration theory.

## Definition

**Definition.** Components of a vector $\mathbf{y}_t \in \mathbb{R}^p$ are **cointegrated** if each $y_{it} \sim I(1)$ but there exists a nonzero vector $\beta \in \mathbb{R}^p$ such that:

$$\beta' \mathbf{y}_t \sim I(0).$$

The vector $\beta$ is the **cointegrating vector**. Intuitively, the series share a common stochastic trend; $\beta' \mathbf{y}_t$ cancels the trend, leaving a stationary residual (the "equilibrium error").

The number of linearly independent cointegrating vectors is the **cointegrating rank** $r$, with $0 \leq r \leq p - 1$. If $r = 0$, no cointegration; if $r = p - 1$, all common trends are eliminated.

## Engle-Granger two-step method

For two series $y_t$ and $x_t$:

**Step 1.** Run OLS: $y_t = \alpha + \beta x_t + u_t$. The residual $\hat{u}_t = y_t - \hat{\alpha} - \hat{\beta} x_t$ estimates the equilibrium error.

**Step 2.** Test $\hat{u}_t$ for stationarity using an **augmented Dickey-Fuller (ADF)** test. Critical values differ from the standard ADF table (Phillips-Ouliaris, 1990) because $\hat{u}_t$ is a residual from an estimated regression.

If $\hat{u}_t$ is stationary, $y_t$ and $x_t$ are cointegrated with cointegrating vector $(1, -\hat{\beta})$.

The method is simple but has limitations: it assumes a single cointegrating relationship, normalises on one variable, and has low power in small samples.

## The error correction model (ECM)

**Granger Representation Theorem.** If $y_t$ and $x_t$ are cointegrated, there exists an **error correction representation**:

$$\Delta y_t = \alpha (y_{t-1} - \beta x_{t-1}) + \sum_{k=1}^{p} \gamma_k \Delta y_{t-k} + \sum_{k=1}^{p} \delta_k \Delta x_{t-k} + \varepsilon_t.$$

The term $\alpha(y_{t-1} - \beta x_{t-1})$ is the **error correction term**: when $y$ deviates above its equilibrium with $x$, the negative $\alpha$ pulls $\Delta y$ downward, restoring equilibrium. The speed of adjustment $\alpha < 0$ measures how fast deviations are corrected.

This duality — cointegration and error correction are two views of the same phenomenon — is a cornerstone of modern time series econometrics.

## Johansen procedure

For $p > 2$ variables, Johansen's (1988, 1991) method is the standard. Start from a VAR($k$) in levels:

$$\mathbf{y}_t = A_1 \mathbf{y}_{t-1} + \cdots + A_k \mathbf{y}_{t-k} + \varepsilon_t,$$

and rewrite as a **vector error correction model (VECM)**:

$$\Delta \mathbf{y}_t = \Pi \mathbf{y}_{t-1} + \sum_{i=1}^{k-1} \Gamma_i \Delta \mathbf{y}_{t-i} + \varepsilon_t,$$

where $\Pi = \sum A_i - I$. The key insight: $\text{rank}(\Pi) = r$ is the cointegrating rank. Factor $\Pi = \alpha \beta'$, where $\beta \in \mathbb{R}^{p \times r}$ contains the cointegrating vectors and $\alpha \in \mathbb{R}^{p \times r}$ contains the **adjustment speeds**.

**Testing.** The **trace test** checks $H_0: r \leq r_0$ vs $H_1: r > r_0$, and the **max-eigenvalue test** checks $H_0: r = r_0$ vs $H_1: r = r_0 + 1$. Both use the eigenvalues of a reduced-rank regression problem. Critical values are non-standard (depend on $p - r_0$, trend specification) and tabulated by Johansen and Juselius.

## Applications in finance

**Pairs trading and statistical arbitrage.** Find stocks (or ETFs) that are cointegrated. The spread $\beta' \mathbf{y}_t$ is mean-reverting: go long the spread when it is below its mean, short when above. The [[arima-models|ARIMA]] framework models the spread dynamics. This is the theoretical justification for the most common quant trading strategy.

**Yield curve modelling.** Interest rates at different maturities are individually $I(1)$ but cointegrated: spreads (e.g., 10y minus 2y) are stationary. This is the empirical manifestation of no-arbitrage in term structure models.

**Purchasing power parity (PPP).** The real exchange rate $e_t + p_t^* - p_t$ (log nominal rate plus foreign minus domestic price level) should be $I(0)$ under PPP. Testing for cointegration among $(e_t, p_t, p_t^*)$ is the standard empirical approach.

**Portfolio construction.** Cointegrated portfolios provide natural hedges against common stochastic trends. The cointegrating vector $\beta$ gives portfolio weights that eliminate non-stationary risk factors.

## Pitfalls

**Structural breaks** can masquerade as unit roots or destroy cointegration. Gregory-Hansen (1996) tests allow for a single structural break under the alternative.

**Near-integration.** A highly persistent but stationary series ($\rho = 0.99$) is hard to distinguish from $I(1)$ in finite samples. Cointegration tests have low power against near-$I(1)$ alternatives.

**Overfitting in pairs trading.** In-sample cointegration does not guarantee out-of-sample mean reversion. The cointegrating relationship can break down, leading to large losses. See [[value-at-risk]] for risk measurement.

## Related Articles

- [[arima-models]] — ARIMA modelling of the stationary spread.
- [[value-at-risk]] — risk management of cointegrated portfolios.
- [[kalman-filter]] — state-space estimation of time-varying cointegrating vectors.
- [[hidden-markov-models]] — regime-dependent cointegration.
- [[law-of-large-numbers]] — consistency of cointegration estimators.
- [[central-limit-theorem]] — asymptotic distributions (non-standard in the cointegration setting).
- [[copula-models]] — modelling dependence beyond linear comovement.
