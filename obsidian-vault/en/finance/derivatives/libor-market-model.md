---
slug: "/finance/libor-market-model"
title: "LIBOR Market Model (BGM)"
category: "Pricing"
order: 135
lang: "en"
---
# LIBOR Market Model (BGM)

The **LIBOR Market Model** (LMM), also known as the **Brace-Gatarek-Musiela (BGM) model**, is the industry-standard framework for pricing and risk-managing interest rate exotics. Unlike short-rate models that specify an unobservable instantaneous rate, the LMM models each forward LIBOR rate $L_k(t)$ directly under its own forward measure. Its key advantage: caplet prices are given by **Black's formula by construction**, ensuring automatic calibration to the cap/floor market without approximation.

## Prerequisites

[[black-scholes]], [[brownian-motion]], [[cir-hull-white]], [[bond-options-gaussian]]

## Forward LIBOR Rates

Consider a tenor structure $0 = T_0 < T_1 < \cdots < T_N$ with accrual fractions $\delta_k = T_{k+1} - T_k$. The forward LIBOR rate $L_k(t)$ is the simply compounded rate for the period $[T_k, T_{k+1}]$ observed at time $t \le T_k$:

$$
L_k(t) = \frac{1}{\delta_k}\left(\frac{P(t,T_k)}{P(t,T_{k+1})} - 1\right)
$$

where $P(t,T)$ is the zero-coupon bond price. Each $L_k$ is a martingale under the forward measure $\mathbb{Q}^{T_{k+1}}$ associated with numeraire $P(t,T_{k+1})$.

## [[stochastic-differential-equations|SDE]] under the Forward Measure

Under $\mathbb{Q}^{T_{k+1}}$, the dynamics of $L_k$ are driftless:

$$
\frac{dL_k(t)}{L_k(t)} = \sigma_k(t) \cdot dW_k^{T_{k+1}}(t)
$$

where $\sigma_k(t)$ is a deterministic (or state-dependent) volatility function and $W_k^{T_{k+1}}$ is a standard Brownian motion under $\mathbb{Q}^{T_{k+1}}$.

## Drift under the Terminal Measure

For Monte Carlo simulation one works under a single measure, typically the **terminal measure** $\mathbb{Q}^{T_N}$. Via the change-of-numeraire machinery, the drift of $L_k$ under $\mathbb{Q}^{T_N}$ is:

$$
\mu_k(t) = -\sum_{j=k+1}^{N-1} \frac{\delta_j L_j(t)}{1 + \delta_j L_j(t)} \, \rho_{kj} \, \sigma_k(t) \, \sigma_j(t)
$$

where $\rho_{kj}$ is the instantaneous correlation between $L_k$ and $L_j$. The full SDE becomes:

$$
\frac{dL_k(t)}{L_k(t)} = \mu_k(t)\, dt + \sigma_k(t) \cdot dW_k^{T_N}(t)
$$

Under the **spot measure** (rolling bank account numeraire), the drift has the opposite sign convention, summing from $\beta(t)$ to $k$.

## Caplet Pricing — Black's Formula

A caplet on $L_k$ with strike $K$ pays $\delta_k \max(L_k(T_k) - K, 0)$ at $T_{k+1}$. Since $L_k$ is lognormal under $\mathbb{Q}^{T_{k+1}}$, the price is exactly Black's formula:

$$
\text{Cplt}_k = \delta_k P(0,T_{k+1}) \left[L_k(0)\Phi(d_1) - K\Phi(d_2)\right]
$$

$$
d_{1,2} = \frac{\ln(L_k(0)/K) \pm \frac{1}{2}\bar\sigma_k^2 T_k}{\bar\sigma_k \sqrt{T_k}}, \quad \bar\sigma_k^2 = \frac{1}{T_k}\int_0^{T_k} \|\sigma_k(t)\|^2\, dt
$$

This is the defining feature of the LMM: **cap/floor calibration is trivial**.

## Swaption Pricing — Rebonato's Approximation

Swaptions require approximation because swap rates are non-trivial functions of multiple forward rates. Rebonato's frozen-drift formula approximates the swap rate volatility:

$$
\bar\sigma_{\text{swap}}^2 T_0 \approx \sum_{i,j=\alpha}^{\beta-1} w_i(0) w_j(0) L_i(0) L_j(0) \rho_{ij} \int_0^{T_0} \sigma_i(t)\sigma_j(t)\, dt
$$

where $w_i(0) = \delta_i P(0,T_{i+1}) / A(0)$ are annuity weights and $A(0) = \sum_i \delta_i P(0,T_{i+1})$ is the annuity. The swaption is then priced via Black's formula with $\bar\sigma_{\text{swap}}$.

## Volatility and Correlation Parameterization

### Volatility

A common parametric form for $\sigma_k(t)$ (time-homogeneous):

$$
\sigma_k(t) = \left[a + b(T_k - t)\right] e^{-c(T_k - t)} + d
$$

where $(a,b,c,d)$ are calibrated to caplet implied vols.

### Correlation

Rank-reduced correlation via angles or exponential decay:

$$
\rho_{ij} = e^{-\beta |T_i - T_j|}
$$

or a two-factor parameterization $\rho_{ij} = \rho_\infty + (1 - \rho_\infty) e^{-\beta|i-j|}$.

## Calibration Procedure

1. **Caplet vols** $\to$ determine $\bar\sigma_k$ for each $k$; decompose into $\sigma_k(t)$ using the parametric form.
2. **Swaption vols** $\to$ calibrate correlation parameters $\rho_{ij}$ using Rebonato's formula.
3. **Joint optimization**: minimize weighted distance to both cap and swaption market quotes.

## Comparison with Other Models

| Feature | LMM (BGM) | HJM | Hull-White |
|:--------|:----------|:----|:-----------|
| State variable | Forward LIBORs $L_k$ | Instantaneous forwards $f(t,T)$ | Short rate $r_t$ |
| Cap pricing | Exact (Black) | Depends on vol spec | Approximate |
| Swaption pricing | Approximate (Rebonato) | Approximate | Closed-form (1-factor) |
| Calibration | Caplets automatic | Complex | To caps or swaptions |
| Simulation | Multi-factor MC | Infinite-dimensional | Low-dimensional lattice |
| Exotic pricing | Industry standard | Theoretically elegant | Too restrictive |

## Practical Applications

1. **Bermudan swaptions**: LMM Monte Carlo with Longstaff-Schwartz regression for early exercise.
2. **CMS products**: Constant Maturity Swap caps, floors, and spread options depend on the full forward rate distribution.
3. **Range accruals**: Path-dependent rates require multi-factor simulation; LMM captures decorrelation across tenors.
4. **SOFR transition**: Post-LIBOR, the same framework applies to forward-looking term SOFR rates or backward-looking compounded rates with adjusted conventions.

## Related Topics
- [[cir-hull-white]]
- [[bond-options-gaussian]]
- [[black-scholes]]
- [[monte-carlo-method]]
- [[swaps]]
- [[hjm-framework]] — the HJM framework from which LMM is derived
