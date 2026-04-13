---
title: "Avellaneda-Stoikov Model"
category: "Quantitative Finance"
order: 19
lang: "en"
---
# Avellaneda-Stoikov Model

The **Avellaneda-Stoikov model** is a seminal mathematical framework for market making, published in 2008. It provides a solution for the optimal bid and ask quotes that a market maker should set to maximize profit while managing the risk of accumulating an undesirable inventory position.

## The Core Problem: Inventory Risk

A market maker profits from the bid-ask spread. However, as they execute trades, they accumulate a "position" or **inventory**. If the market price moves against this inventory, the market maker suffers a loss. This is known as **inventory risk**.

## Key Formulations

### 1. The Reservation Price

Instead of quoting symmetrically around the market mid-price $s$, the market maker calculates a "reservation price" $r$ that accounts for their current inventory $q$:

$$
r(s, t, q) = s - q \gamma \sigma^2 (T - t)
$$

Where:
- $s$ is the current market mid-price.
- $q$ is the current inventory (number of units held).
- $\gamma$ is the risk aversion parameter.
- $\sigma$ is the market volatility.
- $(T-t)$ is the remaining time in the trading session.

**Intuition**: If you are long ($q > 0$), your internal fair value (reservation price) is *lower* than the market mid-price. This encourages you to sell and discourages you from buying more.

### 2. The Optimal Spread

The optimal bid and ask quotes are set as $r \pm \delta/2$. The total spread $\delta$ is calculated as:

$$
\delta^a + \delta^b = \gamma \sigma^2 (T - t) + \frac{2}{\gamma} \ln \left( 1 + \frac{\gamma}{\kappa} \right)
$$

Where $\kappa$ is the order flow intensity parameter (representing the probability of an order hitting your quote based on its distance from the mid-price).

## Python: Quote Adjustment Simulation

```python
import numpy as np

def calculate_quotes(s, q, gamma, sigma, time_left, kappa):
    # 1. Calculate the reservation price
    res_price = s - q * gamma * (sigma**2) * time_left
    
    # 2. Calculate the optimal spread
    spread = gamma * (sigma**2) * time_left + (2/gamma) * np.log(1 + gamma/kappa)
    
    bid = res_price - spread / 2
    ask = res_price + spread / 2
    return bid, ask, res_price

# Example: Mid-price 100, we have +10 units (Long position)
s, q, gamma, sigma, t, k = 100, 10, 0.1, 2.0, 0.5, 1.5
bid, ask, r = calculate_quotes(s, q, gamma, sigma, t, k)

print(f"Mid-price: {s}, Reservation Price: {r:.2f}")
print(f"Quotes shifted down: Bid {bid:.2f} / Ask {ask:.2f}")
```

## Visualization: Reservation Price vs. Inventory

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

## Model Implications

- **Symmetry**: When $q = 0$, quotes are symmetric around the mid-price.
- **Skewing**: When $q > 0$, quotes are skewed downward to encourage selling. When $q < 0$, quotes are skewed upward to encourage buying.
- **Volatility**: As $\sigma$ increases, the optimal spread widens to protect against larger price swings.
- **Risk Aversion**: A higher $\gamma$ leads to more aggressive price skewing and wider spreads.
---


## Related Topics
- [[hidden-markov-models]]
- [[monte-carlo-method]]
