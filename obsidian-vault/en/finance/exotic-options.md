---
title: "Exotic Options"
category: "Pricing Models"
order: 139
lang: "en"
---

# Exotic Options

**Exotic options** are derivatives whose payoffs depend on the path of the underlying, on multiple underlyings, or on non-standard exercise features. Unlike vanilla calls and puts, most exotics require Monte Carlo simulation or PDE methods because closed-form solutions rarely exist.

## Prerequisites

[[black-scholes]], [[barrier-asian-options]], [[geometric-brownian-motion]]

## Barrier Options

A barrier option activates (knock-in) or extinguishes (knock-out) when the underlying touches a barrier $H$.

**Down-and-out call** payoff:

$$
(S_T - K)^+ \cdot \mathbf{1}\!\left[\min_{0 \le t \le T} S_t > H\right]
$$

Pricing under GBM uses the **reflection principle**: the density of paths hitting $H$ is related to that of paths starting at the reflected spot $S_0^* = H^2/S_0$. With $\lambda = (r - q + \sigma^2/2)/\sigma^2$:

$$
C_{\text{DO}} = C_{\text{BS}}(S_0) - \left(\frac{H}{S_0}\right)^{2\lambda} C_{\text{BS}}(S_0^*)
$$

In-out parity guarantees $C_{\text{DI}} + C_{\text{DO}} = C_{\text{BS}}$ (plus any rebate). **Rebates** pay a fixed amount $R$ upon knock-out, valued as $R \cdot \mathbb{E}^{\mathbb{Q}}[e^{-r\tau_H} \mathbf{1}_{\tau_H \le T}]$.

## Asian Options

The payoff depends on an average price $\bar{S}$ over the life of the contract.

**Geometric average** admits a closed form because $\prod S_{t_i}$ is lognormal under GBM. The effective parameters are $\sigma_G = \sigma\sqrt{(n+1)(2n+1)/(6n^2)}$ and an adjusted rate $r_G$.

**Arithmetic average** $\bar{S} = \frac{1}{n}\sum S_{t_i}$ is not lognormal. No closed-form price exists. The **Turnbull-Wakeman** approximation matches the first two moments of the arithmetic average to a lognormal distribution, yielding a modified Black-Scholes formula.

$$
C_{\text{arith}} \approx e^{-rT}\!\left[M_1 N(d_1) - K N(d_2)\right], \quad d_{1,2} = \frac{\ln(M_1/K) \pm \frac{1}{2}\sigma_{\text{eff}}^2 T}{\sigma_{\text{eff}}\sqrt{T}}
$$

where $M_1, M_2$ are the first two moments of $\bar{S}$ and $\sigma_{\text{eff}}^2 T = \ln(M_2/M_1^2)$.

## Lookback Options

**Floating-strike lookback call**: payoff $S_T - \min_{t \le T} S_t$. The holder buys at the realized minimum. Under GBM the closed form involves the running minimum distribution derived from the reflection principle.

**Fixed-strike lookback call**: payoff $(\max_{t \le T} S_t - K)^+$. Goldman-Sosin-Gatto (1979) formulas give the price using the CDF of the running maximum of a drifted Brownian motion.

## Compound Options (Option on Option)

A compound call on a call gives the right at $T_1$ to pay $K_1$ and receive a vanilla call expiring at $T_2 > T_1$ with strike $K_2$. The **Geske formula** (1979) prices this via a bivariate normal integral:

$$
C_{\text{compound}} = S_0 N_2(a_1, b_1; \sqrt{T_1/T_2}) - K_2 e^{-rT_2} N_2(a_2, b_2; \sqrt{T_1/T_2}) - K_1 e^{-rT_1} N(a_2)
$$

where $a_{1,2}, b_{1,2}$ depend on $S_0, K_1, K_2, T_1, T_2, r, \sigma$ and $S^*$ is the critical stock price at $T_1$.

## Chooser Options

At time $T_c < T$, the holder chooses whether the option becomes a call or a put with strike $K$ and maturity $T$. By put-call parity:

$$
\max(C, P) = C + \max(0, P - C) = C + (K e^{-r(T-T_c)} - S_{T_c})^+
$$

So a chooser equals a call plus a put with strike $K e^{-r(T-T_c)}$ expiring at $T_c$.

## Binary (Digital) Options

**Cash-or-nothing call**: pays $Q$ if $S_T > K$, else zero. Price $= Q e^{-rT} N(d_2)$.

**Asset-or-nothing call**: pays $S_T$ if $S_T > K$, else zero. Price $= S_0 e^{-qT} N(d_1)$.

Digital options are building blocks for **static replication**: any European payoff $f(S_T)$ can be decomposed as $f(S_T) = f(K_0) + f'(K_0)(S_T - K_0) + \int_0^{K_0} f''(K)(K - S_T)^+ dK + \int_{K_0}^{\infty} f''(K)(S_T - K)^+ dK$.

## Forward Start Options

The strike is set at a future date $T_1$ as $K = \alpha S_{T_1}$. Common in **employee stock options**. Under GBM with constant vol, a forward start call has the same value as an at-the-money option scaled by $\alpha$, because the ratio $S_T/S_{T_1}$ is independent of $\mathcal{F}_{T_1}$.

## Quanto Options

A **quanto** option has payoff in currency $X$ on an underlying denominated in currency $Y$. The quanto forward is $F^Q = S_0 e^{(r_X - r_Y + \rho_{SX}\sigma_S \sigma_X)T}$, where $\rho_{SX}$ is the correlation between the asset and the exchange rate. Quanto adjustments arise because hedging removes FX risk, introducing a drift correction proportional to $\rho_{SX}\sigma_S\sigma_X$.

## General Pricing Principle

| Payoff type | Method |
|-------------|--------|
| Path-independent | May have closed form (digitals, compounds) |
| Path-dependent, geometric average | Closed form possible under GBM |
| Path-dependent, arithmetic | Monte Carlo or PDE |
| Early exercise | Longstaff-Schwartz, PDE with free boundary |
| Multi-asset | MC with correlated Brownian motions |

For path-dependent exotics the [[monte-carlo-method|Monte Carlo method]] is the universal tool, though PDE methods on low-dimensional state spaces can be faster. Variance reduction via control variates (use geometric Asian as control for arithmetic Asian) is standard practice.

## Related Articles

- [[barrier-asian-options|Barrier and Asian Options]] -- formulas and Python implementation
- [[black-scholes|Black-Scholes]] -- baseline constant-vol framework
- [[heston-model|Heston Model]] -- stochastic vol for more realistic exotic pricing
- [[longstaff-schwartz|Longstaff-Schwartz]] -- American-style early exercise via regression
- [[monte-carlo-method|Monte Carlo]] -- simulation engine for path-dependent payoffs
