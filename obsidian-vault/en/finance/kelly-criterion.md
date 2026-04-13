---
title: "Kelly Criterion"
category: "Risk Management"
order: 150
lang: "en"
slug: "kelly-criterion"
---
# Kelly Criterion

The **Kelly Criterion** is a formula used to determine the optimal size of a series of bets in order to maximize the logarithm of wealth. In the context of quantitative finance, it is a key tool for capital allocation and risk management.

## Log-Wealth Maximization

The core idea behind the Kelly Criterion is to maximize the expected value of the logarithm of wealth, which is equivalent to maximizing the geometric growth rate of capital. For a series of bets with outcomes $W_i$, the objective is to find the fraction $f$ of the current bankroll to bet that maximizes:

$$
E[\ln(W_n)] = E\left[\sum_{i=1}^n \ln(1 + f X_i)\right]
$$

where $X_i$ is the return of the $i$-th bet.

## The Kelly Formula

For a simple bet with two outcomes (win or lose):
- Win with probability $p$ and receive $b$ to 1 odds (net profit $b$).
- Lose with probability $q = 1 - p$ and lose the wager.

The optimal fraction $f^*$ to bet is given by:

$$
f^* = \frac{bp - q}{b} = \frac{p(b+1) - 1}{b}
$$

In a more general continuous case (e.g., stock returns following a GBM), the Kelly fraction is:

$$
f^* = \frac{\mu - r}{\sigma^2}
$$

where $\mu$ is the expected return, $r$ is the risk-free rate, and $\sigma$ is the volatility.

## Applications and Constraints

### Betting and Portfolio Sizing
The Kelly Criterion is widely used in gambling (sports betting, blackjack) and finance (position sizing in algorithmic trading). It provides a theoretical limit on how much leverage one should use.

### Fractional Kelly
In practice, using the full Kelly fraction ($1.0 \times f^*$) can lead to extreme volatility and "drawdown risk" if the underlying parameters $(\mu, \sigma)$ are misestimated. Many practitioners use **Fractional Kelly** (e.g., Half-Kelly, $0.5 \times f^*$) to reduce volatility while still capturing a significant portion of the growth rate.

## Expected Utility

The Kelly Criterion corresponds to a logarithmic utility function $U(W) = \ln(W)$, which implies a constant relative risk aversion (CRRA) of 1.

$$
E[U(W)] = p \ln(1 + fb) + q \ln(1 - f)
$$

Maximizing this with respect to $f$ yields the classic Kelly formula.

## Python Implementation: Growth Simulation

The following simulation compares Kelly sizing against a fixed fraction of capital.

```python
import numpy as np
import matplotlib.pyplot as plt

def simulate_kelly(p, b, initial_wealth=100, n_steps=100, fraction=1.0):
    f_star = (b * p - (1 - p)) / b
    bet_size = f_star * fraction
    
    wealth = [initial_wealth]
    outcomes = np.random.choice([b, -1], size=n_steps, p=[p, 1-p])
    
    for outcome in outcomes:
        current_wealth = wealth[-1]
        wager = current_wealth * bet_size
        wealth.append(current_wealth + wager * outcome)
        
    return np.array(wealth)

# Parameters
p = 0.55  # 55% win rate
b = 1     # 1:1 odds
n_steps = 500

kelly_wealth = simulate_kelly(p, b, n_steps=n_steps, fraction=1.0)
half_kelly_wealth = simulate_kelly(p, b, n_steps=n_steps, fraction=0.5)
fixed_wealth = simulate_kelly(p, b, n_steps=n_steps, fraction=1.5) # Over-betting

print(f"Final Kelly Wealth: {kelly_wealth[-1]:.2f}")
print(f"Final Half-Kelly Wealth: {half_kelly_wealth[-1]:.2f}")
```

## Related Topics
- [[levy-processes]]
- [[pairs-trading-strategy]]
- [[monte-carlo-method]]
- [[value-at-risk]]
- [[portfolio-optimization-ml]]
