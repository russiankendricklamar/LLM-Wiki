---
slug: "/finance/interest-rate-term-structure"
title: "Interest Rate Term Structure"
category: "Pricing"
order: 158
lang: "en"
---
# Interest Rate Term Structure

The **term structure of interest rates** — the yield curve $y(T)$ as a function of maturity $T$ — is the most fundamental object in fixed income. It determines the pricing of every bond, swap, and interest rate derivative. Understanding why the curve has a particular shape, how to extract information from it, and how to model its dynamics is central to monetary policy analysis, bond relative value trading, and risk management.

## Rates and Their Relationships

### Spot Rates

The continuously compounded **zero-coupon (spot) rate** $r(T)$ is defined by the price of a zero-coupon bond:

$$
P(0, T) = e^{-r(T) \cdot T}
$$

The spot rate can be extracted from coupon bond prices via **bootstrapping** — sequentially solving for zero rates at successively longer maturities.

### Forward Rates

The **instantaneous forward rate** $f(0, T)$ is the rate for infinitesimal borrowing at future time $T$, locked in today:

$$
f(0, T) = -\frac{\partial \ln P(0,T)}{\partial T} = r(T) + T \cdot r'(T)
$$

The discrete forward rate between $T_1$ and $T_2$:

$$
f(T_1, T_2) = \frac{r(T_2)\, T_2 - r(T_1)\, T_1}{T_2 - T_1}
$$

### Par Rates

The **par rate** $c(T)$ is the coupon rate at which a bond prices at par. It equals the fixed rate in an interest rate swap of the same maturity:

$$
c(T) = \frac{1 - P(0,T)}{\sum_{i=1}^{n} P(0, t_i) \cdot \Delta t_i}
$$

The par curve is the most directly observable yield curve (from swap rates).

### Conversion Relations

Given any one of $\{P(0,T),\; r(T),\; f(0,T),\; c(T)\}$, the others are determined:

$$
P(0,T) = e^{-r(T)T} = \exp\!\left(-\int_0^T f(0,u)\,du\right)
$$

## Theories of the Term Structure

### Expectations Hypothesis

The **pure expectations hypothesis** (PEH) asserts that forward rates equal expected future short rates:

$$
f(0, T) = \mathbb{E}[r(T)]
$$

Equivalently, the long rate is the average of expected future short rates:

$$
r(T) = \frac{1}{T}\int_0^T \mathbb{E}[r(u)]\,du
$$

Under PEH, a flat curve signals unchanged rates, an upward-sloping curve signals expected rate increases. Empirically, PEH is rejected: forward rates systematically overpredict future spot rates.

### Liquidity Preference (Hicks, 1939)

Investors prefer short-term bonds (less interest rate risk). To induce them to hold long bonds, a **term premium** $\text{TP}(T)$ must be offered:

$$
f(0, T) = \mathbb{E}[r(T)] + \text{TP}(T), \qquad \text{TP}(T) > 0
$$

The term premium increases with maturity, explaining why the curve is typically upward-sloping even when rates are expected to remain flat.

### Preferred Habitat (Modigliani-Sutch, 1966)

Investors and issuers have **preferred maturities** driven by their liability structure. Supply-demand imbalances at each maturity create local term premia that need not increase monotonically. This explains humps and kinks in the curve.

### Market Segmentation

The extreme form of preferred habitat: investors at different maturities operate in completely separate markets. The yield at each maturity is determined solely by local supply and demand, with no arbitrage across maturities. Empirically too extreme — cross-maturity substitution clearly exists.

## Affine Term Structure Models

The yield is **affine** in a vector of state variables $\mathbf{X}_t$:

$$
r(t, T) = A(T-t) + \mathbf{B}(T-t)^{\top} \mathbf{X}_t
$$

where $A(\cdot)$ and $\mathbf{B}(\cdot)$ satisfy Riccati ODEs derived from the state dynamics under the risk-neutral measure. Major examples:

| Model | State dynamics | Factors |
|:------|:--------------|:--------|
| [[short-rate-models|Vasicek]] | $dr = a(b-r)\,dt + \sigma\,dW$ | 1 (mean-reverting Gaussian) |
| [[short-rate-models|CIR]] | $dr = a(b-r)\,dt + \sigma\sqrt{r}\,dW$ | 1 (non-negative) |
| Multi-factor Vasicek | $d\mathbf{X} = \mathbf{K}(\boldsymbol{\theta} - \mathbf{X})\,dt + \boldsymbol{\Sigma}\,d\mathbf{W}$ | 2-3 (level, slope, curvature) |

The bond price in affine models:

$$
P(t, T) = \exp\!\left(-A(T-t) - \mathbf{B}(T-t)^{\top} \mathbf{X}_t\right)
$$

## Term Premium Estimation

### Adrian-Crump-Moench (ACM, 2013)

The ACM model decomposes yields into expectations and term premium using a VAR of forward rates under both physical and risk-neutral measures:

$$
y(T) = \frac{1}{T}\sum_{h=0}^{T-1} \mathbb{E}^{\mathbb{P}}[r_{t+h}] + \text{TP}(T)
$$

Estimated term premia vary substantially over time: near zero in 2012-2013, rising to 100-200bp in the 1980s. They provide a cleaner signal of monetary policy stance than raw yields.

## Nelson-Siegel Empirical Model

The [[nelson-siegel-svensson]] parameterization fits the yield curve with interpretable factors:

$$
y(\tau) = \beta_0 + \beta_1 \frac{1 - e^{-\lambda\tau}}{\lambda\tau} + \beta_2 \left(\frac{1 - e^{-\lambda\tau}}{\lambda\tau} - e^{-\lambda\tau}\right)
$$

where $\beta_0$ = long-term level, $\beta_1$ = slope (short-long spread), $\beta_2$ = curvature (hump), $\lambda$ = decay rate. Used by central banks globally for daily curve fitting.

## The Inverted Yield Curve

When $r(T_{\text{short}}) > r(T_{\text{long}})$, the curve is **inverted**. Under the expectations hypothesis, inversion signals expected rate cuts — typically preceding recessions. The 10Y-2Y spread has inverted before every U.S. recession since 1955 with only one false positive.

The predictive power comes from term premium dynamics: as the economy weakens, the market prices aggressive easing, pulling long rates below short rates even as the Fed has not yet cut.

## Python Implementation

```python
import numpy as np

def bootstrap_zero_rates(
    par_rates: np.ndarray, maturities: np.ndarray
) -> np.ndarray:
    """Bootstrap zero rates from par swap rates (annual compounding)."""
    n = len(maturities)
    zero_rates = np.zeros(n)
    discount = np.zeros(n)

    for i in range(n):
        if i == 0:
            zero_rates[i] = par_rates[i]
            discount[i] = 1 / (1 + zero_rates[i]) ** maturities[i]
        else:
            coupon_pv = par_rates[i] * np.sum(discount[:i])
            discount[i] = (1 - coupon_pv) / (1 + par_rates[i])
            zero_rates[i] = (1 / discount[i]) ** (1 / maturities[i]) - 1
    return zero_rates

def forward_rate(zero_rates, maturities, t1_idx, t2_idx):
    """Discrete forward rate between two maturities."""
    r1, T1 = zero_rates[t1_idx], maturities[t1_idx]
    r2, T2 = zero_rates[t2_idx], maturities[t2_idx]
    return (r2 * T2 - r1 * T1) / (T2 - T1)

def nelson_siegel(tau, beta0, beta1, beta2, lam):
    """Nelson-Siegel yield curve model."""
    factor1 = (1 - np.exp(-lam * tau)) / (lam * tau)
    factor2 = factor1 - np.exp(-lam * tau)
    return beta0 + beta1 * factor1 + beta2 * factor2

# Example: typical upward-sloping curve
maturities = np.array([0.25, 0.5, 1, 2, 3, 5, 7, 10, 20, 30])
yields = nelson_siegel(maturities, beta0=0.045, beta1=-0.02,
                        beta2=-0.01, lam=0.6)
```

## Yield Curve Shapes

```chart
{
  "type": "line",
  "xAxis": "maturity",
  "data": [
    {"maturity": "3M", "normal": 3.0, "flat": 4.0, "inverted": 5.2},
    {"maturity": "6M", "normal": 3.2, "flat": 4.0, "inverted": 5.0},
    {"maturity": "1Y", "normal": 3.5, "flat": 4.0, "inverted": 4.8},
    {"maturity": "2Y", "normal": 3.8, "flat": 4.0, "inverted": 4.5},
    {"maturity": "3Y", "normal": 4.0, "flat": 4.0, "inverted": 4.3},
    {"maturity": "5Y", "normal": 4.3, "flat": 4.0, "inverted": 4.0},
    {"maturity": "7Y", "normal": 4.5, "flat": 4.0, "inverted": 3.8},
    {"maturity": "10Y", "normal": 4.7, "flat": 4.0, "inverted": 3.6},
    {"maturity": "30Y", "normal": 5.0, "flat": 4.0, "inverted": 3.3}
  ],
  "lines": [
    {"dataKey": "normal", "stroke": "#3b82f6", "name": "Normal (upward-sloping)"},
    {"dataKey": "flat", "stroke": "#6b7280", "name": "Flat"},
    {"dataKey": "inverted", "stroke": "#ef4444", "name": "Inverted"}
  ]
}
```

## Applications

1. **Bond relative value**: Identify rich/cheap bonds by comparing market yields to the fitted curve
2. **Curve trading**: Steepeners, flatteners, and butterfly trades express views on curve shape changes
3. **Monetary policy analysis**: Decompose yields into rate expectations and term premium to assess policy stance
4. **Derivatives pricing**: The discount curve underlies all swap, swaption, and cap/floor pricing
5. **Risk management**: PCA of the curve (level, slope, curvature) explains >99% of yield variation for key rate duration hedging

## Related Topics
- [[short-rate-models]]
- [[nelson-siegel-svensson]]
- [[swaps]]
- [[dv01]]
- [[libor-sofr]]
- [[bond-options-gaussian]]
