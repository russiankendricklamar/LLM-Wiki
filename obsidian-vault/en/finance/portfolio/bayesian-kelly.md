---
title: "Bayesian Kelly Criterion"
category: "Portfolio"
order: 30
lang: "en"
slug: "bayesian-kelly"
---

# Bayesian Kelly Criterion and Parameter Uncertainty

The standard [[kelly-criterion|Kelly Criterion]] ($\pi^* = \mu / \sigma^2$) is mathematically guaranteed to maximize the long-term growth rate of wealth. However, in practice, it is notorious for bankrupting traders. Why? Because the formula assumes you know the true expected return $\mu$ and variance $\sigma^2$ with 100% certainty. 

In financial markets, $\mu$ is incredibly noisy and difficult to estimate. If you overestimate your edge, the Kelly formula will tell you to over-bet, leading to catastrophic drawdowns. **Bayesian Kelly** solves this.

## The Flaw of Plug-in Estimates

Standard optimization uses "plug-in" estimates: calculate the historical average return $\hat{\mu}$, plug it into the Kelly formula, and bet.
The problem is that the Kelly curve (growth rate vs. bet size) is highly asymmetric. Betting slightly *less* than optimal reduces your growth rate slightly. Betting slightly *more* than optimal pushes you off a cliff into negative growth and ruin. 

## The Bayesian Solution

Instead of assuming a single value for $\mu$, the Bayesian approach treats $\mu$ as a random variable with a **Posterior Distribution** $P(\mu \mid Data)$.
The Bayesian Kelly investor does not maximize growth for a single $\mu$; they maximize the **expected growth across all possible values of $\mu$**, weighted by their posterior probabilities.

$$\max_{\pi} \int \left( \pi \mu - \frac{1}{2}\pi^2 \sigma^2 \right) P(\mu \mid Data) d\mu$$

## Fractional Kelly as a Heuristic

In the industry, traders often use "Fractional Kelly" (e.g., betting "Half-Kelly"). Historically, this was just an ad-hoc safety mechanism to sleep better at night.
The beautiful result of Bayesian Kelly is that it provides a **mathematical justification for Fractional Kelly**. When parameter uncertainty is introduced, the rigorous Bayesian optimal bet size is naturally smaller than the naive plug-in Kelly bet. The higher the uncertainty in your Alpha model, the smaller the "fraction" you should bet.

## Drawdown Control

Even with true parameters, Kelly betting is extremely volatile (a true Kelly bettor has a 1/3 chance of halving their wealth before doubling it). 
Modern implementations (Continuous-Time Kelly with Drawdown constraints) solve a constrained stochastic control problem:
"Maximize expected log-growth subject to the constraint that the probability of a 20% drawdown never exceeds 5%."
This drastically limits the leverage $\pi^*$ applied during highly volatile regimes.

## Visualization: The Kelly Cliff

```chart
{
  "type": "line",
  "xAxis": "bet_size",
  "data": [
    {"bet_size": 0.1, "growth": 0.05, "bayesian_growth": 0.04},
    {"bet_size": 0.2, "growth": 0.08, "bayesian_growth": 0.06},
    {"bet_size": 0.3, "growth": 0.10, "bayesian_growth": 0.07},
    {"bet_size": 0.4, "growth": 0.08, "bayesian_growth": 0.05},
    {"bet_size": 0.5, "growth": 0.00, "bayesian_growth": -0.05},
    {"bet_size": 0.6, "growth": -0.20, "bayesian_growth": -0.30}
  ],
  "lines": [
    {"dataKey": "growth", "stroke": "#94a3b8", "name": "True Kelly Curve"},
    {"dataKey": "bayesian_growth", "stroke": "#10b981", "name": "Bayesian Expected Curve (Uncertainty)"}
  ]
}
```
*If you are uncertain about the true parameters, the expected growth curve (green) shifts left and down. The optimal bet (the peak) is much smaller than the naive Kelly bet (peak of the grey curve).*

## Related Topics

[[kelly-criterion]] — the classical foundation  
[[merton-portfolio]] — the continuous-time equivalent  
[[variational-inference]] — techniques for estimating the posterior $P(\mu \mid Data)$
---
