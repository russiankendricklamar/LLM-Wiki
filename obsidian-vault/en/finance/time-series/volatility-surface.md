---
slug: "/finance/volatility-surface"
title: "Volatility Surface"
category: "Pricing Models"
order: 140
lang: "en"
---

# Volatility Surface

The **implied volatility surface** $\sigma_{\text{imp}}(K, T)$ is the function that, when plugged into the [[black-scholes|Black-Scholes]] formula, reproduces observed market option prices. It encodes all market information about the risk-neutral distribution of the underlying that Black-Scholes with a single constant $\sigma$ cannot capture.

## Prerequisites

[[black-scholes]], [[heston-model]], [[geometric-brownian-motion]]

## The Smile and Skew

Under Black-Scholes, $\sigma_{\text{imp}}$ would be flat across strikes and maturities. In reality:

- **Equity indices** exhibit a **skew** (smirk): OTM puts have higher implied vol than ATM options. This reflects crash risk and leverage effects.
- **FX markets** exhibit a **symmetric smile**: both OTM puts and calls trade at elevated implied vol relative to ATM, reflecting fat tails in currency returns.
- **Commodity markets** may show either pattern depending on supply-demand asymmetries.

The smile exists because the true risk-neutral distribution has **fatter tails** and possibly **skewness** relative to the lognormal. Sources include stochastic volatility, jumps, and discrete hedging costs.

## Sticky Strike vs Sticky Delta

Two local dynamics rules describe how the surface moves when spot changes:

**Sticky strike**: $\sigma_{\text{imp}}(K, T)$ stays fixed at each absolute strike $K$. Consistent with [[dupire-local-vol|local volatility]] models. Delta of a vanilla call differs from Black-Scholes delta by a correction from the slope of the skew.

**Sticky delta**: $\sigma_{\text{imp}}$ stays fixed at each moneyness level $\Delta$ (or $\ln(K/S)$). The smile translates with spot. More consistent with [[heston-model|stochastic volatility]] models.

Neither rule holds exactly; the true dynamics lie between them. Empirically, short-dated options behave closer to sticky strike, long-dated closer to sticky delta.

## Connection to Risk-Neutral Density: Breeden-Litzenberger

The risk-neutral probability density $f(K)$ of $S_T$ is recovered from call prices via:

$$
f(K) = e^{rT} \frac{\partial^2 C}{\partial K^2}
$$

This is the **Breeden-Litzenberger** formula (1978). It shows that the curvature of call prices in strike space directly reveals the market's probability beliefs. The butterfly spread $C(K - \Delta K) - 2C(K) + C(K + \Delta K)$ approximates $f(K) \cdot e^{-rT} (\Delta K)^2$.

## Local Volatility via Dupire

Given the call price surface $C(K, T)$, the [[dupire-local-vol|Dupire formula]] extracts the unique local volatility:

$$
\sigma_{\text{loc}}^2(K, T) = \frac{2\!\left(\frac{\partial C}{\partial T} + (r-q)K\frac{\partial C}{\partial K} + qC\right)}{K^2 \frac{\partial^2 C}{\partial K^2}}
$$

Local vol is the instantaneous volatility in the unique one-factor diffusion consistent with all European option prices.

## No-Arbitrage Constraints

The implied vol surface must satisfy:

1. **Butterfly constraint** (no negative probability): $\partial^2 C/\partial K^2 \ge 0$ for all $K$. Equivalently, $f(K) \ge 0$.
2. **Calendar spread constraint**: $C(K, T_2) \ge C(K, T_1)$ for $T_2 > T_1$. Total variance $w(K, T) = \sigma_{\text{imp}}^2(K, T) \cdot T$ must be non-decreasing in $T$ for each $K$.
3. **Lee's moment formula**: $\limsup_{|x|\to\infty} \sigma_{\text{imp}}^2(x, T) / |x| \le 2/T$ where $x = \ln(K/F)$ is log-moneyness. This bounds the wings.

Violations of these constraints create model-free arbitrage.

## SVI Parameterization (Gatheral)

The **Stochastic Volatility Inspired** (SVI) model of Gatheral (2004) parameterizes total implied variance $w(k) = \sigma_{\text{imp}}^2 T$ as a function of log-moneyness $k = \ln(K/F)$:

$$
w(k) = a + b\!\left[\rho(k - m) + \sqrt{(k - m)^2 + \sigma_{\text{SVI}}^2}\right]
$$

Five parameters: $a$ (overall level), $b$ (angle of wings), $\rho$ (asymmetry/skew), $m$ (translation), $\sigma_{\text{SVI}}$ (smoothness at the vertex). SVI is calibrated per maturity slice.

**SSVI** (Surface SVI) extends this to the full surface by making $a, b, \rho$ functions of total ATM variance $\theta_T = \sigma_{\text{ATM}}^2 T$, enforcing calendar spread arbitrage-freedom across maturities automatically.

## Term Structure of Skew

The slope of the smile (skew) typically **flattens with maturity**. For equity indices the 25-delta skew $\sigma_{\text{imp}}(25\Delta_P) - \sigma_{\text{imp}}(\text{ATM})$ scales approximately as $1/\sqrt{T}$ for short maturities and flattens for long maturities. This is because:

- Short maturities are dominated by jump risk (steep skew).
- Long maturities are dominated by diffusive stochastic vol (moderate skew).

Heston's term structure of skew decays as $1/T$ for large $T$, while models with jumps produce a non-zero asymptotic skew.

## Practical Calibration Workflow

1. Collect bid-ask mid implied vols across the strike-maturity grid.
2. Filter outliers and illiquid points.
3. Fit SVI per maturity slice; check butterfly constraint.
4. Interpolate across maturities (SSVI or linear in total variance); check calendar constraint.
5. Extract local vol surface via Dupire for exotic pricing.
6. Alternatively, calibrate a parametric model ([[heston-model|Heston]], [[sabr-model|SABR]]) to the surface.

## Related Articles

- [[black-scholes|Black-Scholes]] -- constant-vol baseline
- [[dupire-local-vol|Dupire Local Volatility]] -- the surface converted to a diffusion model
- [[heston-model|Heston Model]] -- stochastic vol that generates a smile
- [[sabr-model|SABR Model]] -- analytical smile for rates/FX
- [[variance-swaps|Variance Swaps]] -- model-free volatility instruments
