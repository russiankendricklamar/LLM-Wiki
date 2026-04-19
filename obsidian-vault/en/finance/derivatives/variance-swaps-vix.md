---
slug: "/finance/variance-swaps-vix"
title: "Variance Swaps and the VIX"
category: "Risk Management"
order: 83
lang: "en"
---
# Variance Swaps and the VIX

A **variance swap** pays the difference between realized and strike variance at maturity. Its fair strike is determined model-free from a continuum of option prices — one of the deepest results in derivatives theory. The **VIX index** operationalizes this replication using SPX options, providing a real-time gauge of 30-day implied volatility. Together, variance swaps and the VIX form the backbone of volatility trading and tail-risk hedging.

## Variance Swap Mechanics

### Payoff

The variance swap pays notional $N_{\text{var}}$ times the difference between annualized realized variance and the pre-agreed strike:

$$
\text{Payoff} = N_{\text{var}} \cdot (\sigma^2_{\text{realized}} - K_{\text{var}})
$$

Realized variance under discrete monitoring with $n$ observations:

$$
\sigma^2_{\text{realized}} = \frac{252}{n} \sum_{i=1}^{n} \left(\ln \frac{S_{i}}{S_{i-1}}\right)^2
$$

No mean subtraction — variance swaps use the "mean-zero" convention, which aligns with the replication argument.

### Model-Free Replication

The fundamental result (Carr and Madan, 1998; Demeterfi, Derman, Kamal, Zou, 1999): the fair variance strike equals twice the price of a log contract:

$$
K_{\text{var}} = \frac{2}{T}\, e^{rT} \left[\int_0^{F} \frac{P(K)}{K^2}\,dK + \int_{F}^{\infty} \frac{C(K)}{K^2}\,dK\right]
$$

where $F$ is the forward price, $P(K)$ and $C(K)$ are OTM put and call prices. This is **model-independent** — no assumption on the underlying process beyond continuity of paths (jumps introduce a bias).

## The VIX Index

The CBOE VIX operationalizes the variance swap replication for a 30-day horizon on SPX options:

$$
\text{VIX}^2 = \frac{2}{T} \sum_i \frac{\Delta K_i}{K_i^2}\, e^{rT}\, Q(K_i) - \frac{1}{T}\left(\frac{F}{K_0} - 1\right)^2
$$

where $Q(K_i)$ are midpoint OTM option prices, $K_0$ is the first strike below $F$, and $T = 30/365$. The VIX is quoted in annualized volatility points: $\text{VIX} = 100 \cdot \sqrt{K_{\text{var}}}$.

Key properties:
- VIX ~ 15 indicates ~1% daily SPX moves; VIX ~ 30 indicates ~1.9%
- VIX is forward-looking (risk-neutral expectation), not a forecast of realized vol
- The **VIX term structure** (VIX futures at different expirations) is usually in contango

## Variance Swap vs Volatility Swap

A volatility swap pays $\sigma_{\text{realized}} - K_{\text{vol}}$, linear in volatility rather than variance. By Jensen's inequality:

$$
\mathbb{E}[\sigma] \leq \sqrt{\mathbb{E}[\sigma^2]}
$$

so the fair vol-swap strike is strictly below $\sqrt{K_{\text{var}}}$. The convexity adjustment:

$$
K_{\text{vol}} \approx \sqrt{K_{\text{var}}} - \frac{\text{Var}(\sigma)}{8\, K_{\text{var}}^{3/2}}
$$

Variance swaps are replicable; volatility swaps are not — they require a model for the vol-of-vol.

## P&L of a Delta-Hedged Option

The P&L of a continuously delta-hedged option decomposes into a variance bet:

$$
\text{P\&L} = \int_0^T \frac{1}{2}\,\Gamma_t\, S_t^2 \left(\sigma^2_{\text{realized},t} - \sigma^2_{\text{implied}}\right) dt
$$

This is the Carr-Madan result: a delta-hedged option is effectively a position in realized vs implied variance, weighted by dollar gamma $\frac{1}{2}\Gamma S^2$. A variance swap eliminates the path-dependence of the gamma weighting.

## VIX Derivatives

**VIX futures** trade on CBOE Futures Exchange. The futures price $F_{\text{VIX}}(t,T)$ is not equal to the current VIX — it reflects the risk-neutral expectation of VIX at expiry. The **VIX basis**:

$$
\text{Basis} = F_{\text{VIX}}(t,T) - \text{VIX}(t)
$$

is typically positive (contango) due to the negative correlation between SPX returns and volatility, creating a persistent roll yield for short-vol strategies.

**VIX options** are European, settled on a special opening quotation (SOQ) of VIX. The implied volatility of VIX options — the "vol of vol" — typically exceeds 80%.

## Volatility Risk Premium

The **variance risk premium** (VRP) is the systematic wedge between implied and realized variance:

$$
\text{VRP} = K_{\text{var}} - \mathbb{E}^{\mathbb{P}}[\sigma^2_{\text{realized}}]
$$

Empirically, VRP is persistently positive: implied variance exceeds subsequent realized variance by 2-4 vol points on average. This premium compensates variance swap sellers for absorbing crash risk and is one of the most robust sources of alternative risk premium.

## Python Implementation

```python
import numpy as np

def vix_calculation(
    strikes: np.ndarray, otm_prices: np.ndarray,
    F: float, K0: float, T: float, r: float
) -> float:
    """Compute VIX-style implied variance from OTM option prices."""
    dK = np.diff(strikes)
    dK = np.append(dK, dK[-1])
    sigma_sq = (2 / T) * np.exp(r * T) * np.sum(
        dK / strikes**2 * otm_prices
    ) - (1 / T) * (F / K0 - 1)**2
    return np.sqrt(max(sigma_sq, 0)) * 100  # VIX in vol points

def realized_variance(prices: np.ndarray, ann_factor: int = 252) -> float:
    """Annualized realized variance from price series."""
    log_returns = np.log(prices[1:] / prices[:-1])
    return float(ann_factor * np.mean(log_returns**2))

def variance_swap_pnl(
    K_var: float, realized_var: float, notional_vega: float
) -> float:
    """P&L of long variance swap (vega notional convention)."""
    N_var = notional_vega / (2 * np.sqrt(K_var))
    return N_var * (realized_var - K_var)

def convexity_adjustment(K_var: float, vol_of_vol: float) -> float:
    """Fair vol swap strike with convexity correction."""
    return np.sqrt(K_var) - vol_of_vol**2 / (8 * K_var**1.5)
```

## VIX Term Structure (Typical Contango)

```chart
{
  "type": "line",
  "xAxis": "expiry",
  "data": [
    {"expiry": "Spot", "vix": 16.5},
    {"expiry": "1M", "vix": 17.8},
    {"expiry": "2M", "vix": 18.9},
    {"expiry": "3M", "vix": 19.6},
    {"expiry": "4M", "vix": 20.1},
    {"expiry": "5M", "vix": 20.4},
    {"expiry": "6M", "vix": 20.7},
    {"expiry": "7M", "vix": 20.9}
  ],
  "lines": [
    {"dataKey": "vix", "stroke": "#8b5cf6", "name": "VIX Term Structure"}
  ]
}
```

## Applications

1. **Volatility trading**: Take directional views on variance independent of equity direction
2. **Tail-risk hedging**: Long variance swap convexity pays disproportionately in crashes
3. **Dispersion trading**: Sell index variance, buy single-stock variance to monetize correlation risk premium
4. **Carry strategies**: Systematic short VIX futures harvests the contango roll yield (with significant tail risk)
5. **Risk budgeting**: VIX as a real-time input to dynamic asset allocation and leverage targeting

## Related Topics
- [[variance-swaps]]
- [[greeks-options]]
- [[black-scholes]]
- [[volatility-surface]]
- [[dispersion-trading]]
- [[garch-models]]
