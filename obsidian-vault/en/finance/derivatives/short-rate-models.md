---
slug: "/finance/short-rate-models"
title: "Short Rate Models"
category: "Pricing"
order: 142
lang: "en"
---

# Short Rate Models

**Short rate models** describe the evolution of the instantaneous interest rate $r_t$ under the risk-neutral measure. They are the foundation of fixed-income derivatives pricing: once the short rate dynamics are specified, bond prices, caps, floors, and swaptions can all be computed.

## Prerequisites

[[brownian-motion]], [[black-scholes]], [[swaps]]

## Equilibrium Models

Equilibrium models specify the drift and diffusion of $r_t$ from economic considerations. They provide intuition but do not automatically fit the initial term structure.

### Vasicek (1977)

$$
dr_t = \kappa(\theta - r_t)\,dt + \sigma\,dW_t
$$

Mean-reverting Ornstein-Uhlenbeck process. Parameters: speed of mean reversion $\kappa > 0$, long-run level $\theta$, volatility $\sigma > 0$. The rate is **Gaussian** and can go negative -- once considered a flaw, now accepted after the era of negative rates.

The conditional distribution is $r_t \mid r_0 \sim \mathcal{N}(\theta + (r_0 - \theta)e^{-\kappa t},\; \sigma^2(1 - e^{-2\kappa t})/(2\kappa))$.

### Cox-Ingersoll-Ross (CIR, 1985)

$$
dr_t = \kappa(\theta - r_t)\,dt + \sigma\sqrt{r_t}\,dW_t
$$

The $\sqrt{r_t}$ diffusion ensures **non-negativity** when the Feller condition $2\kappa\theta \ge \sigma^2$ holds. The conditional distribution is non-central chi-squared. CIR was developed from a general equilibrium model of the economy.

## Affine Bond Pricing

Both Vasicek and CIR are **affine** models: the zero-coupon bond price has the exponential-affine form

$$
P(t, T) = e^{A(t,T) - B(t,T) r_t}
$$

where $A$ and $B$ satisfy Riccati ODEs. Explicit solutions:

**Vasicek:**

$$
B(t,T) = \frac{1 - e^{-\kappa(T-t)}}{\kappa}, \quad A(t,T) = \left(\theta - \frac{\sigma^2}{2\kappa^2}\right)\!\left[B - (T-t)\right] - \frac{\sigma^2}{4\kappa}B^2
$$

**CIR:**

$$
B(t,T) = \frac{2(e^{\gamma\tau} - 1)}{(\gamma + \kappa)(e^{\gamma\tau} - 1) + 2\gamma}, \quad \gamma = \sqrt{\kappa^2 + 2\sigma^2}
$$

with $\tau = T - t$ and a corresponding $A(t,T)$ involving $\gamma$.

## No-Arbitrage Models

No-arbitrage models introduce time-dependent parameters to **exactly fit the initial term structure** $P^{\text{mkt}}(0, T)$.

### Hull-White (1990)

$$
dr_t = (\theta(t) - a\,r_t)\,dt + \sigma\,dW_t
$$

This is Vasicek with a time-dependent drift $\theta(t)$ chosen to match the observed yield curve:

$$
\theta(t) = \frac{\partial f(0,t)}{\partial t} + a\,f(0,t) + \frac{\sigma^2}{2a}(1 - e^{-2at})
$$

where $f(0, t) = -\partial \ln P^{\text{mkt}}(0,t)/\partial t$ is the market instantaneous forward rate. Hull-White is the workhorse model for rates derivatives trading.

### Black-Derman-Toy (BDT, 1990)

$$
d\ln r_t = [\theta(t) + \sigma'(t)/\sigma(t) \cdot \ln r_t]\,dt + \sigma(t)\,dW_t
$$

Lognormal short rate with time-dependent volatility. Ensures $r_t > 0$. Calibrates to the initial curve and the term structure of caplet volatilities. Implemented via a binomial tree.

## Calibration

Hull-White is calibrated in two stages:

1. **Curve fitting**: $\theta(t)$ is determined analytically from the initial term structure (no optimization needed).
2. **Volatility calibration**: $a$ and $\sigma$ (or a piecewise $\sigma(t)$) are fitted to market cap/floor or swaption prices by minimizing:

$$
\min_{a, \sigma} \sum_i w_i \!\left(\sigma_{\text{model}}^{(i)} - \sigma_{\text{mkt}}^{(i)}\right)^2
$$

For swaptions, the Jamshidian decomposition reduces a swaption to a portfolio of bond options, each priced in closed form under Hull-White.

## Lattice Methods

The Hull-White trinomial tree (Hull-White, 1994):

1. Build a trinomial tree for $r^*_t = r_t - \alpha(t)$ where $\alpha(t)$ absorbs the time-dependent drift.
2. On the mean-reverting tree for $r^*$, choose branching probabilities to match the first two moments and ensure non-negativity.
3. Shift the tree by $\alpha(t_i)$ at each time step to match the market discount curve.
4. Price path-dependent products (Bermudan swaptions, callable bonds) by backward induction.

## Multi-Factor Extensions

Single-factor models force all yields to move in parallel. The **G2++ model** (two-factor Gaussian):

$$
r_t = x_t + y_t + \phi(t)
$$

where $dx_t = -a\,x_t\,dt + \sigma\,dW_t^1$ and $dy_t = -b\,y_t\,dt + \eta\,dW_t^2$ with $d[W^1, W^2]_t = \rho\,dt$. The function $\phi(t)$ fits the initial curve. G2++ captures decorrelation between short and long rates, producing richer yield curve dynamics (steepening, flattening, butterfly moves).

## Connection to HJM

The Heath-Jarrow-Morton (HJM) framework models the entire forward rate curve $f(t, T)$ simultaneously. **Every short rate model implies an HJM model**: given $dr_t$, one can derive $f(t, T) = -\partial_T \ln P(t, T)$ and its dynamics. But the converse is false: general HJM models are non-Markovian in $r_t$ and cannot be reduced to a short-rate [[stochastic-differential-equations|SDE]]. The HJM drift condition $\mu_f(t, T) = \sigma_f(t, T) \int_t^T \sigma_f(t, u)\,du$ ensures no-arbitrage.

## Comparison

| Feature | Vasicek | CIR | Hull-White | BDT |
|---------|---------|-----|------------|-----|
| Distribution | Gaussian | Non-central $\chi^2$ | Gaussian | Lognormal |
| Negative rates | Yes | No (if Feller) | Yes | No |
| Fits initial curve | No | No | Yes | Yes |
| Closed-form bonds | Yes | Yes | Yes | Tree |
| Calibrates to vols | Manual | Manual | Caps/swaptions | Caps |

Equilibrium models give economic intuition; no-arbitrage models are needed for trading and hedging.

## Related Articles

- [[bond-options-gaussian|Bond Options in Gaussian Models]] -- closed-form bond option formulas
- [[cir-hull-white|CIR and Hull-White]] -- detailed [[stochastic-differential-equations|SDE]] analysis
- [[swaps|Interest Rate Swaps]] -- the underlying instruments
- [[girsanov-semimartingales|Girsanov Theorem]] -- measure changes for rates
- [[brownian-motion|Brownian Motion]] -- the driving process
- [[interest-rate-term-structure]] -- affine and factor models of the yield curve
