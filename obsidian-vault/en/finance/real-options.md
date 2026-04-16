---
title: "Real Options"
category: "Pricing Models"
order: 147
lang: "en"
---
# Real Options

**Real options** apply the theory of financial option pricing to irreversible investment decisions under uncertainty. Unlike traditional Net Present Value (NPV) analysis, which treats investment as a now-or-never decision, real options recognise that managers have **flexibility**: the option to defer, expand, abandon, or switch a project. This flexibility has value, and option pricing theory provides the framework to quantify it.

## Prerequisites

[[black-scholes]], [[optimal-stopping-american]], [[brownian-motion]]

## NPV vs Real Options

Classical NPV:

$$
\text{NPV} = -I + \sum_{t=1}^{T} \frac{\mathbb{E}[C_t]}{(1+r)^t}
$$

NPV ignores the value of waiting and managerial flexibility. A project with negative NPV today may have positive value if the firm retains the **option to invest later** when uncertainty resolves.

| Feature | NPV | Real Options |
|:--------|:----|:-------------|
| Uncertainty treatment | Expected cash flows | Distribution of outcomes |
| Flexibility | Ignored | Valued explicitly |
| Decision | Accept/reject now | Optimal timing/strategy |
| Discount rate | WACC (constant) | Risk-neutral / replicating |

## Types of Real Options

**Option to defer** (American call): The firm holds the right, but not the obligation, to invest $I$ at any time $t \leq T$. The underlying is the project value $V_t$, the strike is the investment cost $I$.

**Option to expand** (call): After initial investment, the firm can invest an additional $I_e$ to scale up the project by a factor $\gamma$, exercisable when demand turns out high.

**Option to abandon** (put): The firm can sell the project's assets for salvage value $A$ if the project underperforms. Payoff: $\max(V_t, A)$.

**Option to switch** (exchange option): The firm can switch between inputs (e.g., fuel types) or outputs (e.g., product lines), exercising a Margrabe-type exchange option.

## Pricing Framework

If the project's underlying asset $V_t$ is traded (or spanned by traded assets), risk-neutral pricing applies. Assume $V_t$ follows GBM:

$$
dV_t = \mu V_t\,dt + \sigma V_t\,dW_t
$$

Under $\mathbb{Q}$, the drift becomes $r - \delta$, where $\delta$ is the **dividend-like yield** (convenience yield, cash flow rate):

$$
dV_t = (r - \delta)V_t\,dt + \sigma V_t\,dW_t^{\mathbb{Q}}
$$

If $V$ is not traded, one uses either the **equilibrium approach** (CAPM to determine risk-adjusted drift) or the **Marketed Asset Disclaimer (MAD)** assumption: use the project's NPV as a proxy for its market value.

## Perpetual Option to Invest

The simplest and most instructive case: a firm holds forever the right to invest $I$ in a project worth $V_t$. The value $F(V)$ satisfies the ODE:

$$
\frac{1}{2}\sigma^2 V^2 F''(V) + (r - \delta)V F'(V) - rF(V) = 0
$$

with boundary conditions $F(0) = 0$, $F(V^*) = V^* - I$ (value matching), and $F'(V^*) = 1$ (smooth pasting). The solution:

$$
F(V) = \begin{cases} \left(\frac{V}{V^*}\right)^{\beta_1}(V^* - I) & V < V^* \\ V - I & V \geq V^* \end{cases}
$$

where the optimal trigger is:

$$
\boxed{V^* = \frac{\beta_1}{\beta_1 - 1}\,I}
$$

and $\beta_1 > 1$ is the positive root of:

$$
\frac{1}{2}\sigma^2\beta(\beta - 1) + (r - \delta)\beta - r = 0
$$

Since $\beta_1/(\beta_1 - 1) > 1$, the firm waits until $V$ exceeds $I$ by a **substantial premium**. Higher uncertainty ($\sigma$) raises the trigger, increasing the value of waiting.

## Hysteresis: Entry and Exit

When firms face both entry cost $I$ and exit cost $E$, the optimal policy exhibits **hysteresis**: the entry trigger $V_H$ and exit trigger $V_L$ satisfy $V_L < V_H$, creating an inaction region. A firm that entered the market stays even if $V$ drops below $V_H$, and a firm that exited stays out even if $V$ rises above $V_L$. The gap $V_H - V_L$ widens with uncertainty.

## Finite-Horizon Real Options

For finite-lived projects, there is no closed-form solution in general. Numerical methods:

- **Binomial trees**: discretise $V_t$ on a recombining lattice; American exercise at each node.
- **Finite difference PDE**: solve the Black-Scholes-Merton PDE with free boundary.
- **Least-squares Monte Carlo** (Longstaff-Schwartz): simulate paths, regress continuation value on basis functions.

## Criticisms and Limitations

- **Parameter sensitivity**: $V^*$ depends critically on $\sigma$, which is hard to estimate for non-traded real assets.
- **Model risk**: GBM may not describe project value dynamics (jumps, regime changes, mean reversion).
- **Suboptimal exercise**: managers may not exercise options optimally due to agency problems, bounded rationality, or strategic interactions.
- **Spanning assumption**: if the project cannot be replicated by traded assets, risk-neutral pricing is invalid and the MAD approximation is debatable.

## Applications

- **Oil exploration**: the right to drill is a call option on oil reserves; exercise depends on oil price exceeding a threshold.
- **Pharmaceutical R&D**: each clinical trial phase is a compound option (option on an option); value early-stage projects by staging investment.
- **Technology investment**: IT infrastructure investments have expansion options; cloud computing converts CapEx into OpEx, changing the option structure.
- **M&A**: acquiring a firm is exercising a call; the bidding premium reflects option value of synergies.

## Related Topics

- [[black-scholes]]
- [[optimal-stopping-american]]
- [[brownian-motion]]
- [[heston-model]]
- [[swaps]]
