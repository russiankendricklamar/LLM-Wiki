---
slug: "/finance/energy-commodity-derivatives"
title: "Energy & Commodity Derivatives"
category: "Pricing Models"
order: 148
lang: "en"
---
# Energy & Commodity Derivatives

**Commodity derivatives** differ fundamentally from equity and fixed-income derivatives because the underlying is a physical good with storage costs, convenience yields, and often pronounced seasonality. These features break the simple cost-of-carry relationship and require specialised models for forward curves, option pricing, and risk management.

## Prerequisites

[[black-scholes]], [[brownian-motion]], [[swaps]]

## Forward Pricing and Cost of Carry

For a storable commodity with spot price $S$, the forward price is:

$$
\boxed{F(t,T) = S_t\, e^{(r + u - y)(T-t)}}
$$

where $r$ is the risk-free rate, $u$ is the storage cost rate, and $y$ is the **convenience yield** -- the flow of benefits from holding the physical commodity (inventory buffer, production continuity).

- **Contango** ($F > S$): storage costs dominate convenience yield; futures curve upward-sloping.
- **Backwardation** ($F < S$): convenience yield exceeds storage costs; futures curve downward-sloping, common for oil during supply squeezes.

The convenience yield is not directly observable; it is implied from the relationship $y = r + u - \frac{1}{T-t}\ln(F/S)$.

## Schwartz One-Factor Model

Schwartz (1997) models the spot price as **mean-reverting GBM** (Ornstein-Uhlenbeck in log-price):

$$
dS_t = \kappa(\mu - \ln S_t)S_t\,dt + \sigma S_t\,dW_t
$$

equivalently, letting $X_t = \ln S_t$:

$$
dX_t = \kappa(\alpha - X_t)\,dt + \sigma\,dW_t
$$

where $\alpha = \mu - \sigma^2/(2\kappa)$. Mean reversion captures the empirical tendency of commodity prices to revert to marginal production cost. Forward prices:

$$
\ln F(t,T) = e^{-\kappa(T-t)}X_t + \alpha(1 - e^{-\kappa(T-t)}) + \frac{\sigma^2}{4\kappa}(1 - e^{-2\kappa(T-t)}) - \lambda\frac{1 - e^{-\kappa(T-t)}}{\kappa}
$$

where $\lambda$ is the market price of risk.

## Schwartz-Smith Two-Factor Model

Schwartz and Smith (2000) decompose the log-price into a **short-term deviation** $\chi_t$ and an **equilibrium price** $\xi_t$:

$$
\ln S_t = \chi_t + \xi_t
$$

$$
d\chi_t = -\kappa\chi_t\,dt + \sigma_\chi\,dW_t^\chi
$$

$$
d\xi_t = \mu_\xi\,dt + \sigma_\xi\,dW_t^\xi
$$

with $d[W^\chi, W^\xi]_t = \rho\,dt$. The short-term factor $\chi_t$ is mean-reverting (captures temporary supply/demand shocks), while $\xi_t$ is a random walk (captures long-term equilibrium shifts). This model fits futures term structures well and is widely used in energy finance.

## Gibson-Schwartz: Stochastic Convenience Yield

Gibson and Schwartz (1990) model both the spot price and the convenience yield as stochastic:

$$
dS_t = (r - \delta_t)S_t\,dt + \sigma_S S_t\,dW_t^S
$$

$$
d\delta_t = \kappa(\bar{\delta} - \delta_t)\,dt + \sigma_\delta\,dW_t^\delta
$$

with $d[W^S, W^\delta]_t = \rho\,dt$. The stochastic convenience yield $\delta_t$ captures time-varying storage economics and inventory levels. Forward prices are affine in $(S_t, \delta_t)$, enabling efficient calibration.

## Electricity Markets

Electricity is **non-storable** (with minor exceptions like pumped hydro), which fundamentally changes the pricing:

- **Price spikes**: demand shocks cause extreme prices (10x or more), followed by rapid mean reversion to fuel cost.
- **Mean reversion**: much faster than oil or metals ($\kappa \gg 1$).
- **Seasonality**: daily (peak/off-peak), weekly (weekday/weekend), annual (summer/winter) patterns.
- **Regime switching**: normal regime (low vol, mean-reverting) vs spike regime (high vol, jump-like).

A common model combines mean-reversion, jumps, and seasonality:

$$
dX_t = \kappa(s(t) - X_t)\,dt + \sigma\,dW_t + J\,dN_t
$$

where $s(t)$ is a deterministic seasonal function and $J$ is a spike process with fast mean-reversion after the jump.

## Weather Derivatives

Weather derivatives hedge volumetric risk (energy demand depends on temperature):

- **Heating Degree Days (HDD)**: $\text{HDD}_i = \max(65°F - T_i, 0)$
- **Cooling Degree Days (CDD)**: $\text{CDD}_i = \max(T_i - 65°F, 0)$
- **Cumulative HDD/CDD** over a month or season is the underlying for swaps and options.

**Burn analysis**: historical simulation of payoffs using past temperature data. Model-based pricing uses Ornstein-Uhlenbeck with seasonality for daily temperature:

$$
dT_t = \kappa(s(t) - T_t)\,dt + \sigma(t)\,dW_t
$$

## Emission Permits

Carbon markets (EU ETS, California Cap-and-Trade) create derivative instruments on emission allowances. Key features:

- **Price floor at zero** (permits cannot have negative value), **price ceiling** from regulatory reserve.
- **Banking and borrowing** across compliance periods affects forward pricing.
- **Scarcity dynamics**: as the cap tightens, permit prices rise non-linearly near the compliance deadline.

## Storage as a Real Option

The decision to inject gas into storage or withdraw it is an **option on the spread** between future and current prices:

$$
V_{\text{storage}} = \max_{\{q_t\}} \mathbb{E}^{\mathbb{Q}}\!\left[\int_0^T e^{-rt}(S_t q_t - c|q_t|)\,dt\right]
$$

subject to inventory constraints $0 \leq I_t \leq I_{\max}$ and injection/withdrawal rate limits. This is solved by dynamic programming or least-squares Monte Carlo, connecting [[optimal-stopping-american]] theory to physical asset valuation.

## Calibration to Futures Term Structure

All commodity models are calibrated to the observed futures curve $\{F^{\text{mkt}}(t,T_i)\}_{i=1}^N$:

1. For each model, derive the theoretical forward price $F^{\text{model}}(t,T; \theta)$.
2. Minimise:
$$
\min_\theta \sum_i w_i \left(\ln F^{\text{model}}(t,T_i;\theta) - \ln F^{\text{mkt}}(t,T_i)\right)^2
$$
3. Optionally add option prices (caps on commodity price) to pin down volatility parameters.

## Related Topics

- [[black-scholes]]
- [[brownian-motion]]
- [[swaps]]
- [[real-options]]
- [[levy-processes]]
