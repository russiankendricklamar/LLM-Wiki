---
title: "Bootstrapping the Yield Curve"
category: "Pricing Models"
order: 136
lang: "en"
---
# Bootstrapping the Yield Curve

**Yield curve bootstrapping** is the foundational procedure for constructing the term structure of discount factors (equivalently, zero rates or forward rates) from observable market instruments. Every fixed-income pricing model, swap valuation, and risk calculation depends on a correctly built zero curve. The algorithm solves for discount factors sequentially, starting from the short end (deposits), passing through the middle (futures or FRAs), and extending to the long end (interest rate swaps).

## Prerequisites

[[swaps]], [[bond-options-gaussian]], [[nelson-siegel-svensson]]

## Discount Factors and Zero Rates

The discount factor $D(T)$ is the present value of \$1 received at time $T$. The continuously compounded zero rate $z(T)$ and the discount factor are related by:

$$
D(T) = e^{-z(T) \cdot T}, \qquad z(T) = -\frac{\ln D(T)}{T}
$$

The instantaneous forward rate:

$$
f(T) = -\frac{\partial \ln D(T)}{\partial T} = z(T) + T \cdot z'(T)
$$

The simply compounded forward rate for $[T_1, T_2]$ with day count fraction $\delta$:

$$
F(T_1, T_2) = \frac{1}{\delta}\left(\frac{D(T_1)}{D(T_2)} - 1\right)
$$

## Input Instruments

### Short End: Deposits (O/N to 12M)

A deposit at rate $r_d$ for maturity $T$ implies:

$$
D(T) = \frac{1}{1 + r_d \cdot \delta}
$$

### Middle: Futures or FRAs (3M to 2Y)

Eurodollar (or SOFR) futures give the implied forward rate $F$ for a 3-month period $[T_1, T_2]$. With a convexity adjustment $c$:

$$
F_{\text{adj}} = F_{\text{futures}} - c, \qquad D(T_2) = \frac{D(T_1)}{1 + F_{\text{adj}} \cdot \delta}
$$

The convexity adjustment arises because futures settle daily (marking to market), while FRAs settle in arrears. Under a Gaussian short-rate model:

$$
c \approx \frac{1}{2} \sigma^2 T_1 T_2
$$

### Long End: Swaps (2Y to 50Y)

A par swap with fixed rate $S_n$ and payment dates $T_1, \ldots, T_n$ satisfies:

$$
S_n \sum_{i=1}^{n} \delta_i D(T_i) = D(0) - D(T_n) = 1 - D(T_n)
$$

If discount factors $D(T_1), \ldots, D(T_{n-1})$ are already known, we solve for $D(T_n)$:

$$
D(T_n) = \frac{1 - S_n \sum_{i=1}^{n-1} \delta_i D(T_i)}{1 + S_n \cdot \delta_n}
$$

This is the **bootstrap equation** — applied sequentially for increasing swap maturities.

## Interpolation Methods

Between bootstrap nodes, an interpolation method determines the curve shape:

| Method | Continuity | Forward Smoothness | Arbitrage-Free |
|:-------|:-----------|:-------------------|:---------------|
| Linear on zero rates | $C^0$ | Discontinuous forwards | Yes |
| Log-linear on $D(T)$ | $C^0$ | Piecewise constant forwards | Yes |
| Cubic spline on zero rates | $C^2$ | Smooth but may oscillate | Risk of negative forwards |
| Monotone convex | $C^1$ | Positive forwards guaranteed | Yes |

**Monotone convex** (Hagan-West, 2006) is the industry standard for swap curves: it preserves positivity of forward rates while maintaining sufficient smoothness.

## Dual-Curve Stripping (Post-2008)

Before the 2008 crisis, a single LIBOR curve served for both discounting and projection. After the crisis, the OIS-LIBOR basis spread blew out, requiring **separate curves**:

- **Discounting curve**: built from OIS (overnight indexed swap) rates — reflects the risk-free rate
- **Projection curve**: built from LIBOR/SOFR swaps — used to project floating cash flows

The bootstrap system becomes coupled. For a LIBOR swap discounted at OIS:

$$
\sum_{i=1}^{n} \delta_i^{\text{fix}} S_n D^{\text{OIS}}(T_i) = \sum_{j=1}^{m} \delta_j^{\text{flt}} F_j^{\text{LIBOR}} D^{\text{OIS}}(T_j)
$$

where $F_j^{\text{LIBOR}} = (D^{\text{LIBOR}}(T_{j-1})/D^{\text{LIBOR}}(T_j) - 1)/\delta_j^{\text{flt}}$. Both $D^{\text{OIS}}$ and $D^{\text{LIBOR}}$ must be solved simultaneously.

## Curve Sensitivities (Jacobian)

The Jacobian $\partial D(T_i) / \partial r_j$ measures how each discount factor responds to a unit change in input rate $r_j$. For risk management:

$$
\text{DV01}_j = -\sum_i \frac{\partial \text{PV}}{\partial D(T_i)} \cdot \frac{\partial D(T_i)}{\partial r_j}
$$

The Jacobian is lower-triangular for sequential bootstrapping (each $D(T_n)$ depends only on rates at shorter maturities), making it efficient to compute.

## Turn-of-Year Effects

Rates spanning year-end dates (Dec 31) embed a premium due to bank balance-sheet constraints and regulatory reporting. The curve builder must insert **turn-of-year jumps** as discrete shifts in the overnight forward rate. Failure to account for turns causes pricing errors in short-dated instruments.

## Yield Curve Shape

```chart
{
  "type": "line",
  "xAxis": "maturity",
  "data": [
    {"maturity": "1M", "zero_rate": 4.50, "forward_rate": 4.50},
    {"maturity": "3M", "zero_rate": 4.55, "forward_rate": 4.65},
    {"maturity": "6M", "zero_rate": 4.52, "forward_rate": 4.46},
    {"maturity": "1Y", "zero_rate": 4.40, "forward_rate": 4.16},
    {"maturity": "2Y", "zero_rate": 4.15, "forward_rate": 3.65},
    {"maturity": "5Y", "zero_rate": 3.85, "forward_rate": 3.45},
    {"maturity": "10Y", "zero_rate": 3.75, "forward_rate": 3.60},
    {"maturity": "20Y", "zero_rate": 3.80, "forward_rate": 3.90},
    {"maturity": "30Y", "zero_rate": 3.85, "forward_rate": 4.00}
  ],
  "lines": [
    {"dataKey": "zero_rate", "stroke": "#3b82f6", "name": "Zero Rate (%)"},
    {"dataKey": "forward_rate", "stroke": "#ef4444", "name": "1Y Forward Rate (%)"}
  ]
}
```

## Practical Applications

1. **Swap pricing**: The bootstrapped curve provides $D(T_i)$ for discounting and forward rates $F_j$ for projecting floating legs of [[swaps]].
2. **Bond relative value**: Comparing a bond's market yield to the interpolated zero rate at the same maturity reveals cheapness or richness.
3. **Curve trades**: Flatteners (short 2Y, long 10Y) and steepeners profit from changes in the slope; the bootstrapped curve quantifies carry and roll-down.
4. **Model calibration**: Short-rate and LMM models calibrate to the bootstrapped curve as their initial term structure input.

## Related Topics
- [[swaps]]
- [[nelson-siegel-svensson]]
- [[cir-hull-white]]
- [[bond-options-gaussian]]
- [[libor-market-model]]
