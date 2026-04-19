---
slug: "/finance/avellaneda-stoikov"
title: "Avellaneda-Stoikov Model"
category: "Pricing Models"
order: 42
lang: "en"
---
# Avellaneda-Stoikov Model

The **Avellaneda-Stoikov model** is a seminal mathematical framework for market making, published in 2008. It provides a solution for the optimal bid and ask quotes that a market maker should set to maximize profit while managing the risk of accumulating an undesirable inventory position.

## Overview & Background

Market making — continuously quoting two-sided prices in a security — is one of the oldest financial activities, yet its mathematical treatment was primitive until the late 2000s. Early models (Garman, 1976; Ho & Stoll, 1981) laid groundwork but lacked tractable dynamic solutions. Avellaneda and Stoikov (2008) solved the problem using stochastic control theory, deriving closed-form expressions for optimal quotes under continuous-time dynamics.

The model assumes a market maker operating over a finite trading horizon $[0, T]$, facing a mid-price that follows Brownian motion and order arrivals that follow inhomogeneous Poisson processes. The key tension is between **spread income** (from buying low and selling high) and **inventory risk** (the P&L damage from adverse price moves while holding a position). Optimal quotes balance these two forces dynamically.

The Avellaneda-Stoikov framework became highly influential in electronic market making and high-frequency trading. Extensions by Guéant, Lehalle & Fernandez-Tapia (2013) introduced closed-form approximations under exponential utility, and further work added LOB (Limit Order Book) dynamics, adverse selection, and regime-switching.

## Mathematical Framework

### Model Setup

The mid-price follows arithmetic Brownian motion:

$$
dS_t = \sigma \, dW_t
$$

The market maker holds inventory $q_t \in \mathbb{Z}$ (number of units). Bid and ask quotes are placed at distances $\delta^b$ and $\delta^a$ from the mid-price:

$$
P^b_t = S_t - \delta^b_t, \qquad P^a_t = S_t + \delta^a_t
$$

Order arrivals follow Poisson processes with intensity depending on distance from mid:

$$
\lambda^{b}(\delta) = A e^{-\kappa \delta^b}, \qquad \lambda^{a}(\delta) = A e^{-\kappa \delta^a}
$$

where $A > 0$ is the base arrival rate and $\kappa > 0$ is the sensitivity of arrival rate to spread distance.

### HJB Equation

The value function $v(s, x, q, t)$ (where $x$ is cash, $q$ is inventory) satisfies the Hamilton-Jacobi-Bellman equation:

$$
\frac{\partial v}{\partial t} + \frac{\sigma^2}{2}\frac{\partial^2 v}{\partial s^2} + \max_{\delta^a, \delta^b} \left[ \lambda^a(\delta^a)(v(q-1) - v(q) + \delta^a) + \lambda^b(\delta^b)(v(q+1) - v(q) + \delta^b) \right] = 0
$$

with terminal condition $v(s, x, q, T) = x + qs - \ell(q)$ where $\ell(q)$ is a liquidation penalty.

### The Reservation Price

Under exponential utility $U(W) = -e^{-\gamma W}$ with risk aversion $\gamma$, the optimal solution yields a **reservation price** $r$ — the market maker's internal fair value adjusted for inventory:

$$
r(s, t, q) = s - q \gamma \sigma^2 (T - t)
$$

where:
- $s$ is the current market mid-price
- $q$ is the current inventory (positive = long, negative = short)
- $\gamma$ is the risk aversion parameter
- $\sigma$ is the market volatility
- $(T-t)$ is the remaining time in the trading session

**Intuition**: If you are long ($q > 0$), your internal fair value (reservation price) is *lower* than the market mid-price. This encourages you to sell and discourages buying more. The adjustment is proportional to inventory, risk aversion, variance, and time remaining.

### The Optimal Spread

The total optimal spread $\delta^* = \delta^a + \delta^b$ around the reservation price is:

$$
\delta^* = \gamma \sigma^2 (T - t) + \frac{2}{\gamma} \ln \left( 1 + \frac{\gamma}{\kappa} \right)
$$

This has two components:
1. $\gamma \sigma^2 (T-t)$: **Inventory risk component** — widens as volatility or risk aversion increases, or when more time remains
2. $\frac{2}{\gamma} \ln(1 + \gamma/\kappa)$: **Adverse selection component** — fixed spread to compensate for filling against informed traders

The individual quotes are:

$$
P^b = r - \frac{\delta^*}{2}, \qquad P^a = r + \frac{\delta^*}{2}
$$

## Key Properties

- **Symmetry**: When $q = 0$, quotes are symmetric around the mid-price since $r = s$.
- **Skewing**: When $q > 0$, both bid and ask shift down — encouraging buys and discouraging sells. The shift magnitude is $q \gamma \sigma^2 (T-t)$.
- **Volatility effect**: As $\sigma$ increases, the optimal spread widens to protect against larger adverse price swings.
- **Time effect**: Spread narrows as $T-t \to 0$ (urgency to flatten inventory increases near session end, reducing the inventory risk component).
- **Risk aversion duality**: Higher $\gamma$ causes more aggressive skewing (good for inventory control) but also widens spreads (fewer fills).

## Python Implementation

```python
import numpy as np
import pandas as pd

def calculate_quotes(
    s: float, q: int, gamma: float, sigma: float,
    time_left: float, kappa: float
) -> dict:
    """
    Compute Avellaneda-Stoikov optimal bid/ask quotes.

    Parameters
    ----------
    s         : current mid-price
    q         : current inventory (signed)
    gamma     : risk aversion coefficient
    sigma     : price volatility (annualized or per-session)
    time_left : remaining session time (same units as sigma)
    kappa     : order arrival rate sensitivity to spread distance
    """
    res_price = s - q * gamma * (sigma ** 2) * time_left
    spread = gamma * (sigma ** 2) * time_left + (2 / gamma) * np.log(1 + gamma / kappa)
    bid = res_price - spread / 2
    ask = res_price + spread / 2
    return {'bid': bid, 'ask': ask, 'reservation': res_price, 'spread': spread}

def simulate_market_making(
    n_steps: int = 1000,
    gamma: float = 0.1,
    sigma: float = 2.0,
    kappa: float = 1.5,
    A: float = 140.0,
    dt: float = 1.0 / 1000
) -> pd.DataFrame:
    """
    Simulate market maker P&L under the Avellaneda-Stoikov policy.
    Returns a DataFrame with time, mid-price, inventory, wealth, and quotes.
    """
    np.random.seed(42)
    T = n_steps * dt
    s = 100.0
    q = 0
    cash = 0.0
    records = []

    for step in range(n_steps):
        t = step * dt
        time_left = max(T - t, dt)

        quotes = calculate_quotes(s, q, gamma, sigma, time_left, kappa)
        bid, ask = quotes['bid'], quotes['ask']

        # Order arrivals (Poisson with exponential intensity)
        delta_a = ask - s
        delta_b = s - bid
        prob_buy = A * np.exp(-kappa * delta_a) * dt
        prob_sell = A * np.exp(-kappa * delta_b) * dt

        buy_fill = np.random.random() < prob_buy    # Market sell hits our bid
        sell_fill = np.random.random() < prob_sell  # Market buy hits our ask

        if buy_fill and not sell_fill:
            q += 1
            cash -= bid
        elif sell_fill and not buy_fill:
            q -= 1
            cash += ask

        # Mid-price evolves
        s += np.random.normal(0, sigma * np.sqrt(dt))

        wealth = cash + q * s
        records.append({
            'step': step, 'mid': s, 'inventory': q,
            'wealth': wealth, 'bid': bid, 'ask': ask
        })

    return pd.DataFrame(records)

# Example run
params = dict(s=100, q=10, gamma=0.1, sigma=2.0, time_left=0.5, kappa=1.5)
quotes = calculate_quotes(**params)
sim = simulate_market_making(n_steps=500)
```

## Reservation Price vs. Inventory

```chart
{
  "type": "line",
  "xAxis": "inventory",
  "data": [
    {"inventory": -10, "mid": 100, "res": 104},
    {"inventory": -5, "mid": 100, "res": 102},
    {"inventory": 0, "mid": 100, "res": 100},
    {"inventory": 5, "mid": 100, "res": 98},
    {"inventory": 10, "mid": 100, "res": 96}
  ],
  "lines": [
    {"dataKey": "mid", "stroke": "#94a3b8", "name": "Market Mid-Price"},
    {"dataKey": "res", "stroke": "#3b82f6", "name": "Internal Reservation Price"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---:|:---|:---|
| $\gamma$ | Risk aversion | Controls inventory skewing aggressiveness | 0.01 – 1.0 |
| $\sigma$ | Volatility | Price standard deviation per unit time | Asset-specific |
| $\kappa$ | Arrival sensitivity | Decay rate of order arrival with distance | 0.5 – 5.0 |
| $A$ | Base arrival rate | Orders per unit time at zero spread | 50 – 500 |
| $T-t$ | Time remaining | Session horizon minus elapsed time | 0 to 1 (normalized) |
| $q$ | Inventory | Current net position | $\mathbb{Z}$, often $[-Q_{max}, Q_{max}]$ |

## Limitations & Extensions

**Limitations:**
- **Arithmetic Brownian motion**: Prices can go negative in the model. In practice, GBM or log-normal price dynamics are more appropriate for equity market making.
- **Symmetric arrival rates**: The model assumes buy and sell orders arrive symmetrically. Real LOBs exhibit asymmetric flow driven by informed traders and correlated order routing.
- **Constant parameters**: $\sigma$, $\kappa$, $A$ are assumed constant over the session. In practice these vary significantly intraday (U-shaped volume pattern).
- **Single asset**: The multivariate generalization (Cartea, Jaimungal & Penalva) is significantly more complex.
- **No adverse selection**: The model does not explicitly account for the adverse selection cost of filling against informed traders, though the $\kappa$ term partially captures it.

**Extensions:**
- **Guéant, Lehalle & Fernandez-Tapia (2013)**: Closed-form approximations that handle inventory limits and exponential utility more tractably.
- **Cartea & Jaimungal**: Extensions with alpha signals, multiple assets, and LOB shape.
- **Regime-switching**: Embedding [[hidden-markov-models]] for volatility regime detection allows dynamic recalibration of $\sigma$.

## Practical Applications

1. **Equity Market Making**: High-frequency traders use variants of the model to quote single stocks, adjusting quotes in real time based on inventory accumulated during the session.
2. **FX Spot Market Making**: Banks running automated FX desks use inventory-based quote skewing to manage directional exposure across thousands of client trades.
3. **Crypto Market Making**: Decentralized exchange (DEX) AMM designers and centralized crypto market makers adapt the framework for 24/7 continuous sessions.
4. **Options Market Making**: With modifications for gamma/vega inventory, the framework extends to options books where delta-hedging interacts with spread income.
5. **Bond Market Making**: Corporate bond market makers adapt the model for wider spreads and less frequent order arrivals.

## Related Topics
- [[hidden-markov-models]]
- [[monte-carlo-method]]
- [[brownian-motion]]
- [[optimal-execution]]
- [[cox-process]]
