---
title: "Merton's Portfolio Problem"
category: "Portfolio Management"
order: 10
lang: "en"
slug: "merton-portfolio"
---

# Merton's Portfolio Problem

Merton's Portfolio Problem (1969) is a foundational result in continuous-time finance. It solves the problem of how an investor should optimally choose between consumption and investment in a risky asset (stock) versus a risk-free asset (bond) over time to maximize their expected lifetime utility. 

It is the continuous-time generalization of the [[kelly-criterion|Kelly Criterion]] and the dynamic equivalent of Markowitz optimization.

## The Mathematical Setup

Consider an investor with wealth $W_t$. They can invest a fraction $\pi_t$ in a risky asset and $(1-\pi_t)$ in a risk-free bond. They also consume money at a rate $c_t$.
- **Risk-free Bond**: $dB_t = r B_t dt$
- **Risky Asset (Stock)**: $dS_t = \mu S_t dt + \sigma S_t dZ_t$ (Geometric Brownian Motion)

The wealth equation evolves as a Stochastic Differential Equation (SDE):
$$dW_t = [W_t(\pi_t(\mu - r) + r) - c_t] dt + W_t \pi_t \sigma dZ_t$$

The investor wants to maximize the expected discounted utility of consumption and terminal wealth:
$$\max_{\pi, c} \mathbb{E} \left[ \int_0^T e^{-\rho t} U(c_t) dt + e^{-\rho T} U(W_T) \right]$$
where $\rho$ is the discount rate and $U(c)$ is a utility function (often CRRA: $U(c) = \frac{c^{1-\gamma}}{1-\gamma}$, where $\gamma$ is the coefficient of relative risk aversion).

## Solving via the HJB Equation

This is a stochastic optimal control problem. We define the Value Function $V(t, w)$, which represents the maximum expected utility given current wealth $w$ at time $t$. 
By applying Itô's Lemma and the principle of dynamic programming, we arrive at the **Hamilton-Jacobi-Bellman (HJB) Equation**:

$$\rho V - V_t = \max_{\pi, c} \left\{ U(c) + V_w [w(\pi(\mu - r) + r) - c] + \frac{1}{2} V_{ww} w^2 \pi^2 \sigma^2 \right\}$$

## The Elegant Solution

For an investor with CRRA utility (constant relative risk aversion $\gamma$), the HJB equation yields a stunningly simple closed-form solution for the optimal portfolio weight $\pi^*$:

$$\pi^* = \frac{\mu - r}{\gamma \sigma^2}$$

### Key Insights from the Formula:
1.  **Myopic Behavior**: The optimal fraction of wealth to invest in the risky asset $\pi^*$ is **constant** over time and independent of current wealth $W_t$ and the investment horizon $T$.
2.  **Risk Premium**: You invest proportionally to the excess return $(\mu - r)$.
3.  **Risk Adjustment**: You divide the investment by the variance of the asset $\sigma^2$ and your personal risk aversion $\gamma$.
4.  **Kelly Criterion Limit**: If $\gamma = 1$ (logarithmic utility $U(x) = \log(x)$), the formula simplifies to $\frac{\mu - r}{\sigma^2}$, which is exactly the continuous-time **Kelly Criterion** for maximizing long-term compound growth.

## Visualization: The Optimal Path

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": 0, "wealth_conservative": 100, "wealth_optimal": 100, "wealth_kelly": 100},
    {"t": 1, "wealth_conservative": 102, "wealth_optimal": 110, "wealth_kelly": 120},
    {"t": 2, "wealth_conservative": 104, "wealth_optimal": 122, "wealth_kelly": 105},
    {"t": 3, "wealth_conservative": 106, "wealth_optimal": 135, "wealth_kelly": 160},
    {"t": 4, "wealth_conservative": 108, "wealth_optimal": 150, "wealth_kelly": 110},
    {"t": 5, "wealth_conservative": 110, "wealth_optimal": 170, "wealth_kelly": 190}
  ],
  "lines": [
    {"dataKey": "wealth_conservative", "stroke": "#94a3b8", "name": "Bond Only (γ → ∞)"},
    {"dataKey": "wealth_optimal", "stroke": "#3b82f6", "name": "Merton Optimal (γ = 3)"},
    {"dataKey": "wealth_kelly", "stroke": "#ef4444", "name": "Kelly/Log Utility (γ = 1)"}
  ]
}
```
*The Kelly bettor (red) maximizes expected growth but suffers massive drawdowns. The Merton investor with higher risk aversion (blue) accepts slightly lower growth in exchange for a much smoother wealth trajectory.*

## Related Topics

[[stochastic-control]] — the general mathematical theory (HJB)  
[[kelly-criterion]] — the specific case for $\gamma = 1$  
[[geometric-brownian-motion]] — the assumed dynamics of the stock
---
