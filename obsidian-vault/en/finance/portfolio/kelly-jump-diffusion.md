---
title: "Kelly Criterion with Jump-Diffusion"
category: "Portfolio Management"
order: 45
lang: "en"
slug: "kelly-jump-diffusion"
---

# Kelly Criterion in Jump-Diffusion Models

The classical [[kelly-criterion|Kelly Criterion]] ($\pi^* = \mu / \sigma^2$) and [[merton-portfolio|Merton's Portfolio]] tell an investor exactly how much leverage to use to maximize long-term growth. However, these formulas rely on a fatal assumption: that asset prices follow a continuous **Geometric Brownian Motion (GBM)**. 

In a world described by GBM, a stock cannot drop 50% in one second; it must pass through 49%, 48%, etc., giving you time to sell. In reality, markets experience **Jumps** (Flash Crashes, overnight gaps). Incorporating jumps transforms the Kelly Criterion from an aggressive leveraging tool into a deeply conservative risk-management framework.

## The Jump-Diffusion Setup

Assume the stock follows a [[merton-jump-diffusion|Merton Jump-Diffusion]] process:
$$dS_t = \mu S_t dt + \sigma S_t dZ_t + S_{t-} dJ_t$$
where $J_t$ is a Poisson jump process. When a jump occurs, the stock drops by a random percentage $Y$.

## The Danger of Continuous Leverage

In classical Kelly, if a stock has $\mu = 10\%$ and $\sigma = 10\%$, the optimal leverage is $\pi^* = 0.10 / 0.01 = 10$. You borrow money to hold 10x your wealth in the stock.
If the stock drops 10% over a week, you lose 100% of your wealth, but in continuous time, you constantly rebalance downward, surviving the drawdown.

However, if the stock **jumps** down 11% overnight ($Y = -0.11$), your portfolio value instantly drops by $10 \times 11\% = 110\%$. **You are bankrupt.** You owe the broker money. 

## The Modified Kelly Formula

When maximizing the expected log-growth $g(\pi) = \mathbb{E}[\ln(1 + \pi R)]$ under jump-diffusion, the optimization problem becomes a non-linear integro-differential equation.

The objective is:
$$g(\pi) = \pi \mu - \frac{1}{2} \pi^2 \sigma^2 + \lambda \mathbb{E}_Y[\ln(1 + \pi Y) - \pi Y]$$
Where $\lambda$ is the jump arrival rate, and $Y$ is the jump size.

### The Bankruptcy Constraint
Because of the $\ln(1 + \pi Y)$ term, if there is even a tiny probability that the stock could jump down by $50\%$ ($Y = -0.50$), the mathematical growth rate of any leverage $\pi \geq 2$ approaches **negative infinity**. 
The modified Kelly formula mathematically forbids any leverage that could result in instant bankruptcy during the worst-case possible jump.

## Why Funds Use Fractional Kelly

While [[bayesian-kelly]] justifies using "Half-Kelly" due to parameter uncertainty, **Jump-Diffusion Kelly** justifies it purely based on tail risk. The presence of jumps drastically pulls the optimal peak of the Kelly curve to the left. Elite funds calibrate $\lambda$ and the worst-case jump size $Y_{min}$ to historical crashes (e.g., 1987, 2020) to strictly cap their maximum leverage.

## Visualization: The Jump-Aware Curve

```chart
{
  "type": "line",
  "xAxis": "leverage",
  "data": [
    {"leverage": 1, "gbm": 0.04, "jump": 0.03},
    {"leverage": 2, "gbm": 0.07, "jump": 0.04},
    {"leverage": 3, "gbm": 0.09, "jump": 0.02},
    {"leverage": 4, "gbm": 0.10, "jump": -0.15},
    {"leverage": 5, "gbm": 0.08, "jump": -1.0}
  ],
  "lines": [
    {"dataKey": "gbm", "stroke": "#94a3b8", "name": "Classic Kelly (No Jumps)"},
    {"dataKey": "jump", "stroke": "#ef4444", "name": "Jump-Aware Kelly"}
  ]
}
```
*The classic model (grey) says leverage 4x is optimal. But if we add a 1% chance of a 25% sudden crash, the jump-aware model (red) punishes high leverage so severely that the optimal leverage drops to 1.5x.*

## Related Topics

[[kelly-criterion]] — the continuous-time base  
[[merton-jump-diffusion]] — the price process  
[[frtb-es]] — regulatory approach to this exact tail risk
---
