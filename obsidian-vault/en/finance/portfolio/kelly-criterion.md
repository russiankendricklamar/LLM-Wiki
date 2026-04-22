---
title: "Kelly Criterion"
category: "Risk"
order: 16
lang: "en"
slug: "kelly-criterion"
featured: true
image: "/featured/kelly.jpg"
---
# Kelly Criterion

The **Kelly Criterion** is a formula for determining the optimal fraction of capital to bet or invest in order to maximize the long-run geometric growth rate of wealth. Derived by John L. Kelly Jr. at Bell Labs in 1956, it is grounded in information theory and establishes the mathematically provable upper bound on sustainable leverage. In quantitative finance, it is a key tool for capital allocation, position sizing, and risk management.

## Background

Kelly derived his formula while analysing the relationship between information transmission rates and optimal betting. The key insight is that maximising the expected logarithm of wealth is equivalent to maximising the geometric growth rate — and this objective, unlike maximising arithmetic expected return, naturally penalises ruin risk. A bet sized above the Kelly fraction produces the same expected log-growth as a smaller bet but with higher variance and a positive probability of eventual ruin.

## Log-Wealth Maximization

The core objective is to maximise the expected logarithm of terminal wealth:

$$
\max_f \; \mathbb{E}[\ln W_n] = \mathbb{E}\!\left[\sum_{i=1}^n \ln(1 + f X_i)\right]
$$

where $f$ is the fraction of wealth committed and $X_i$ is the return of bet $i$. This is equivalent to maximising the geometric mean, which determines long-run wealth accumulation.

## The Kelly Formula: Discrete Case

For a bet with two outcomes:
- Win with probability $p$, receiving net profit $b$ per unit staked.
- Lose with probability $q = 1 - p$, losing the stake.

Maximise $\mathbb{E}[\ln W] = p\ln(1+fb) + q\ln(1-f)$ with respect to $f$:

$$
\frac{d}{df}\mathbb{E}[\ln W] = \frac{pb}{1+fb} - \frac{q}{1-f} = 0
$$

Solving:

$$
f^* = \frac{bp - q}{b} = \frac{p(b+1) - 1}{b}
$$

The formula is positive (bet is worthwhile) only when $\mathbb{E}[X] = pb - q > 0$ — i.e., the bet has positive expected value.

## The Kelly Formula: Continuous Case

For a risky asset following Geometric Brownian Motion with drift $\mu$, volatility $\sigma$, and risk-free rate $r$, the optimal Kelly fraction is:

$$
f^* = \frac{\mu - r}{\sigma^2}
$$

This is the **Sharpe ratio divided by $\sigma$**, or equivalently the excess return per unit of variance. It equals the optimal portfolio weight in Merton's continuous-time framework with log utility.

For a portfolio of $n$ risky assets with return vector $\mu$ and covariance $\Sigma$:

$$
f^* = \Sigma^{-1}(\mu - r\mathbf{1})
$$

This is the mean-variance efficient tangency portfolio weight vector — Kelly and Markowitz coincide under log utility.

## Expected Utility Foundation

The Kelly Criterion corresponds to a **logarithmic utility function** $U(W) = \ln W$, which implies constant relative risk aversion (CRRA) of exactly 1:

$$
\mathbb{E}[U(W)] = p\ln(1 + fb) + q\ln(1 - f)
$$

Investors with CRRA $> 1$ (more risk-averse) optimally bet less than Kelly; those with CRRA $< 1$ (less risk-averse) optimally bet more, at the cost of higher ruin probability.

## Fractional Kelly

In practice, exact Kelly sizing produces high short-run volatility and severe drawdowns when parameters $(\mu, \sigma)$ are estimated with error. A **Fractional Kelly** strategy bets $c \times f^*$ with $c \in (0,1)$:

- **Half-Kelly** ($c = 0.5$): ~75% of Kelly's asymptotic growth rate at ~50% of the variance.
- **Quarter-Kelly** ($c = 0.25$): ~44% growth rate at ~25% of variance.

The growth rate scales as $c(2-c)$ times the full Kelly rate, while variance scales as $c^2$ — so fractional Kelly is always more efficient in risk-adjusted growth terms.

## Drawdown Analysis

Under Kelly, the probability of a drawdown of magnitude $d$ (i.e., falling to fraction $(1-d)$ of peak wealth) is:

$$
P(\text{drawdown} \geq d) = (1-d)^{b/(b+1)} \quad \text{(binary bet case)}
$$

For example, with $b=1$ (even odds), the probability of a 50% drawdown is 50%. This illustrates why practitioners prefer Half-Kelly despite the lower asymptotic growth.

## Python Implementation: Growth Simulation

```python
import numpy as np
from typing import Optional

def kelly_fraction_binary(p: float, b: float) -> float:
    """Optimal Kelly fraction for binary bet: win b with prob p, lose 1 with prob 1-p."""
    return (b * p - (1 - p)) / b

def kelly_fraction_continuous(mu: float, r: float, sigma: float) -> float:
    """Kelly fraction for GBM asset: (mu - r) / sigma^2."""
    return (mu - r) / sigma**2

def simulate_kelly_wealth(
    p: float,
    b: float,
    n_steps: int,
    fraction: float = 1.0,
    initial_wealth: float = 1.0,
    seed: Optional[int] = None,
) -> np.ndarray:
    """Simulate wealth path under fractional Kelly sizing."""
    rng = np.random.default_rng(seed)
    f_star = kelly_fraction_binary(p, b)
    bet = f_star * fraction

    wealth = np.empty(n_steps + 1)
    wealth[0] = initial_wealth

    for i in range(n_steps):
        w = wealth[i]
        outcome = b if rng.random() < p else -1.0
        wealth[i+1] = max(w * (1 + bet * outcome), 1e-12)  # absorb at near-zero

    return wealth

# --- Simulation comparison ---
p, b = 0.55, 1.0    # 55% win rate, even odds
f_star = kelly_fraction_binary(p, b)
print(f"Kelly fraction f* = {f_star:.4f}  ({f_star*100:.1f}% of wealth per bet)")

n_steps = 500
seeds = range(10)

results = {}
for label, frac in [("Full Kelly", 1.0), ("Half Kelly", 0.5), ("Over-bet 1.5x", 1.5)]:
    terminal = [simulate_kelly_wealth(p, b, n_steps, frac, seed=s)[-1] for s in seeds]
    results[label] = np.mean(terminal)
    print(f"{label:18s}: mean terminal wealth = {results[label]:.2f}")
```

## Wealth Growth Comparison

```chart
{
  "type": "line",
  "xAxis": "bets",
  "data": [
    {"bets": "0",   "kelly": 1.0,  "half_kelly": 1.0,  "overbet": 1.0},
    {"bets": "100", "kelly": 2.1,  "half_kelly": 1.6,  "overbet": 1.8},
    {"bets": "200", "kelly": 4.4,  "half_kelly": 2.5,  "overbet": 2.1},
    {"bets": "300", "kelly": 9.2,  "half_kelly": 3.9,  "overbet": 1.5},
    {"bets": "400", "kelly": 19.0, "half_kelly": 6.1,  "overbet": 0.8},
    {"bets": "500", "kelly": 40.0, "half_kelly": 9.5,  "overbet": 0.3}
  ],
  "lines": [
    {"dataKey": "kelly",      "stroke": "#10b981", "name": "Full Kelly (f*)"},
    {"dataKey": "half_kelly", "stroke": "#3b82f6", "name": "Half Kelly (0.5f*)"},
    {"dataKey": "overbet",    "stroke": "#ef4444", "name": "Over-bet (1.5f*) — ruin"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Value |
|--------|------|-------------|---------------|
| $f^*$ | Kelly fraction | Optimal bet as fraction of wealth | 0.01–0.30 |
| $p$ | Win probability | Probability of favourable outcome | 0.50–0.65 |
| $b$ | Payoff odds | Net profit per unit staked | 0.5–3 |
| $\mu - r$ | Excess return | Expected return above risk-free | Annualised |
| $\sigma^2$ | Variance | Return variance (annualised) | 0.01–0.25 |
| $c$ | Kelly fraction | Scaling factor for Fractional Kelly | 0.25–0.75 |

## Limitations and Extensions

- **Parameter estimation risk**: Kelly requires accurate $\mu$ and $\sigma$; small errors in $\mu$ produce large errors in $f^*$. The Kelly fraction is highly sensitive to overestimation of edge.
- **Non-stationarity**: If the bet distribution changes over time, the fixed Kelly fraction is sub-optimal; adaptive Kelly updates $f^*$ as estimates are refined.
- **Correlation**: In multi-asset portfolios, the continuous Kelly formula requires the full covariance matrix; ignoring correlation can result in aggregate over-betting.
- **Discrete vs. continuous time**: The continuous Kelly formula assumes GBM; for discrete returns with fat tails, a more conservative fraction is warranted.
- **Practical constraints**: Transaction costs, minimum bet sizes, regulatory capital limits, and liquidity constraints all reduce the achievable fraction below $f^*$.
- **Proportional Kelly with drawdown control**: Combine Kelly sizing with a drawdown stop: reduce fraction $c$ proportionally as the portfolio approaches its maximum acceptable drawdown level.

## Practical Applications

1. **Algorithmic trading position sizing**: Size each strategy's position as a fraction of the Kelly-optimal allocation to the strategy's edge, adjusted for estimation uncertainty.
2. **Sports betting and prediction markets**: The original application; Kelly is the provably optimal long-run growth strategy for any gambler with an edge.
3. **Venture capital allocation**: Allocate between portfolio companies according to Kelly weights derived from success probability and payoff multiple estimates.
4. **Leverage management**: The continuous Kelly fraction gives the maximum sustainable leverage for a risky asset; exceeding it leads to eventual ruin with probability 1.

## Interactive Simulation

Use the simulator below to explore how different bet sizes affect capital growth. Note how betting more than the Kelly fraction leads to higher volatility and eventual ruin.

```simulation
{
  "type": "kelly"
}
```

## Related Topics
- [[levy-processes]]
- [[pairs-trading-strategy]]
- [[monte-carlo-method]]
- [[value-at-risk]]
- [[portfolio-optimization-ml]]
