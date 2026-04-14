---
title: "Intraday Volatility via Realized Kernels"
category: "Signal Analysis"
order: 104
lang: "en"
---
# Intraday Volatility Forecasting via Realized Kernels

**Realized Kernels** are a class of estimators designed to measure the integrated volatility of an asset price while being robust to **Market Microstructure Noise (MMN)**. Traditional realized variance (RV) fails at high frequencies (e.g., 1-second intervals) because bid-ask bounce, rounding errors, and latency bias the estimate upward. The realized kernel was introduced by Barndorff-Nielsen, Hansen, Lunde, and Shephard (2008) and remains the gold standard for tick-level volatility measurement.

## Background

The log-price process under a continuous semimartingale assumption is:
$$
Y_t = X_t + \epsilon_t
$$
where $X_t$ is the efficient (latency-free) log-price and $\epsilon_t \sim \text{IID}(0, \omega^2)$ is microstructure noise. The target quantity is the **Integrated Variance**:
$$
IV = \int_0^T \sigma_s^2 \, ds
$$
Naive realized variance $RV = \sum_{j=1}^n r_j^2$ (where $r_j = Y_{t_j} - Y_{t_{j-1}}$) is biased upward by $2n\omega^2$ at high sampling frequencies — the "bias-variance tradeoff" of realized measures.

## Mathematical Framework

### The Realized Kernel Estimator

The Realized Kernel $RK$ is a weighted sum of sample autocovariances of high-frequency returns:

$$
RK = \sum_{h=-H}^{H} k\!\left(\frac{h}{H+1}\right) \hat{\gamma}_h
$$

where the $h$-th sample autocovariance of returns $r_j = Y_{t_j} - Y_{t_{j-1}}$ is:

$$
\hat{\gamma}_h = \sum_{j=|h|+1}^{n} r_j \, r_{j-|h|}
$$

The kernel function $k: [0,1] \to [0,1]$ must satisfy $k(0) = 1$ and $k(1) = 0$, with $k'(0) = k'(1) = 0$ (flat at boundaries) for optimal bias reduction.

### Parzen Kernel

The **Parzen kernel** achieves the optimal rate among flat-top kernels:

$$
k_{Parzen}(x) = \begin{cases}
1 - 6x^2 + 6x^3 & 0 \le x \le \tfrac{1}{2} \\
2(1-x)^3 & \tfrac{1}{2} < x \le 1 \\
0 & x > 1
\end{cases}
$$

### Tukey-Hanning Kernel

$$
k_{TH}(x) = \begin{cases}
\tfrac{1}{2}\left[1 + \cos(\pi x)\right] & 0 \le x \le 1 \\
0 & x > 1
\end{cases}
$$

### Consistency and Convergence Rate

Under mild assumptions on $\sigma_s$ and IID noise:
$$
RK \xrightarrow{p} IV = \int_0^T \sigma_s^2 \, ds \quad \text{as } n \to \infty, H \to \infty, H/n^{1/2} \to c
$$

The optimal bandwidth is $H^* = c^* \cdot n^{1/2}$ where $c^*$ depends on the noise-to-signal ratio $\xi^2 = \omega^2 / \sqrt{IV}$. The convergence rate is $n^{1/4}$ — slower than parametric estimation due to the noise contamination.

### Optimal Sampling via Signature Plots

The **signature plot** of $RV(\Delta)$ vs. sampling interval $\Delta$ shows the bias-variance tradeoff: for large $\Delta$, variance dominates (few observations); for small $\Delta$, microstructure bias dominates. The optimal sampling frequency minimizes mean-squared error, typically around 5-minute returns for equity markets.

### Multivariate Realized Kernels

For covariance estimation between assets $i$ and $j$:
$$
RK_{ij} = \sum_{h=-H}^{H} k\!\left(\frac{h}{H+1}\right) \hat{\gamma}_h^{ij}
$$
where $\hat{\gamma}_h^{ij} = \sum_{j'} r_{j'}^i r_{j'-h}^j$ uses a **refresh-time** synchronization scheme (Barndorff-Nielsen et al. 2011) to handle asynchronous trading.

## Key Properties

- **Unbiasedness**: $\mathbb{E}[RK] \approx IV$ for large $n$ under IID noise.
- **Positive semi-definiteness**: The multivariate RK matrix is guaranteed PSD if a positive definite kernel is used.
- **Robustness**: RK is robust to serial correlation in noise (up to order $H$), endogenous noise, and irregular sampling grids.
- **HAR-RK model**: The HAR (Heterogeneous AR) model with RK as input significantly outperforms GARCH in out-of-sample volatility forecasting.

## Python Implementation

```python
import numpy as np
from typing import Literal

KernelType = Literal["parzen", "tukey-hanning", "bartlett"]

def kernel_weight(x: float, kernel: KernelType = "parzen") -> float:
    """Evaluate kernel function at x in [0, 1]."""
    x = abs(x)
    if x > 1:
        return 0.0
    if kernel == "parzen":
        if x <= 0.5:
            return 1 - 6*x**2 + 6*x**3
        return 2*(1 - x)**3
    if kernel == "tukey-hanning":
        return 0.5 * (1 + np.cos(np.pi * x))
    if kernel == "bartlett":
        return 1 - x
    raise ValueError(f"Unknown kernel: {kernel}")


def realized_kernel(
    prices: np.ndarray,
    H: int | None = None,
    kernel: KernelType = "parzen"
) -> float:
    """
    Compute the Realized Kernel estimator of integrated variance.

    Args:
        prices: 1D array of high-frequency log-prices (or raw prices)
        H: bandwidth; if None, set to floor(n^0.5)
        kernel: kernel function name

    Returns:
        Realized Kernel estimate (variance units, same scale as returns^2)
    """
    returns = np.diff(np.log(prices)) if prices.min() > 0 else np.diff(prices)
    n = len(returns)
    if H is None:
        H = max(1, int(np.floor(n**0.5)))

    rk = 0.0
    for h in range(-H, H + 1):
        w = kernel_weight(h / (H + 1), kernel)
        if w == 0:
            continue
        if h >= 0:
            gamma_h = float(np.dot(returns[h:], returns[:n - h])) if h < n else 0.0
        else:
            gamma_h = float(np.dot(returns[:n + h], returns[-h:])) if -h < n else 0.0
        rk += w * gamma_h

    return float(rk)


def signature_plot(prices: np.ndarray, max_lag: int = 50) -> dict:
    """
    Compute RV at different sampling intervals to visualize noise bias.

    Returns dict with 'lags' and 'rv_values'.
    """
    log_p = np.log(prices)
    lags = list(range(1, max_lag + 1))
    rv_values = []
    for lag in lags:
        sampled = log_p[::lag]
        rets = np.diff(sampled)
        rv_values.append(float(np.sum(rets**2)))
    return {"lags": lags, "rv_values": rv_values}


def har_rk_forecast(
    daily_rk: np.ndarray,
    horizon: int = 1
) -> np.ndarray:
    """
    HAR-RK(1,5,22) model: forecast realized volatility using
    daily, weekly, and monthly RK averages.
    """
    from numpy.linalg import lstsq

    T = len(daily_rk)
    rv_d = daily_rk[22:]
    rv_w = np.array([daily_rk[i-5:i].mean() for i in range(22, T)])
    rv_m = np.array([daily_rk[i-22:i].mean() for i in range(22, T)])
    target = daily_rk[22:]

    X = np.column_stack([np.ones(len(target)), rv_d, rv_w, rv_m])
    betas, _, _, _ = lstsq(X[:-horizon], target[horizon:], rcond=None)

    # One-step-ahead forecast for the last observation
    last_features = np.array([1, daily_rk[-1], daily_rk[-5:].mean(), daily_rk[-22:].mean()])
    return float(last_features @ betas)


# ---- Example ----
np.random.seed(42)
n_ticks = 23400   # one trading day at 1-second resolution (6.5 hrs)

# Simulate GBM + IID microstructure noise
sigma_true = 0.20 / np.sqrt(252 * 23400)   # per-tick vol
noise_std = 0.0005 / np.sqrt(23400)

log_prices_true = np.cumsum(np.random.normal(0, sigma_true, n_ticks))
noise = np.random.normal(0, noise_std, n_ticks)
observed_prices = np.exp(log_prices_true + noise)

# True IV (annualized)
true_iv_annualized = sigma_true**2 * n_ticks * 252

rk_estimate = realized_kernel(observed_prices, kernel="parzen")
rk_annualized = rk_estimate * 252 * 23400
naive_rv = np.sum(np.diff(np.log(observed_prices))**2)
naive_annualized = naive_rv * 252 * 23400

print(f"True annualized variance:    {true_iv_annualized:.6f}")
print(f"Naive RV (biased by noise):  {naive_annualized:.6f}")
print(f"Realized Kernel (corrected): {rk_annualized:.6f}")
print(f"RK annualized vol:           {np.sqrt(rk_annualized):.4f}")
```

## Signature Plot: Sampling Frequency vs. RV Bias

```chart
{
  "type": "line",
  "xAxis": "lag_seconds",
  "data": [
    {"lag_seconds": "1s",   "rv": 0.085},
    {"lag_seconds": "5s",   "rv": 0.055},
    {"lag_seconds": "30s",  "rv": 0.042},
    {"lag_seconds": "1min", "rv": 0.038},
    {"lag_seconds": "5min", "rv": 0.036},
    {"lag_seconds": "15min","rv": 0.037},
    {"lag_seconds": "30min","rv": 0.040}
  ],
  "lines": [
    {"dataKey": "rv", "stroke": "#3b82f6", "name": "Realized Variance RV(Δ)"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Value |
| :--- | :--- | :--- | :--- |
| $H$ | Bandwidth | Number of autocovariance lags included | $\lfloor n^{0.5} \rfloor$ |
| $k(\cdot)$ | Kernel function | Weights applied to autocovariances | Parzen or Tukey-Hanning |
| $\omega^2$ | Noise variance | Variance of microstructure noise | $10^{-8}$–$10^{-6}$ |
| $\xi^2$ | Noise ratio | $\omega^2 / \sqrt{IV}$ — determines optimal $H$ | 0.001–0.10 |
| $n$ | Tick count | Number of high-frequency observations | 1000–100000/day |
| $c^*$ | Optimal constant | Controls $H^* = c^* n^{1/2}$ | $\approx 3.5$ (Parzen) |

## Limitations and Extensions

- **Jumps**: RK estimates $IV + $ jump variation; separating the two requires jump-robust estimators (bipower variation, threshold RK).
- **Asynchronous trading**: Multi-asset RK requires refresh-time or previous-tick synchronization; the Hayashi-Yoshida estimator is an alternative for covariances.
- **Dependent noise**: If $\epsilon_t$ is serially correlated (e.g., due to quote staleness), bandwidth $H$ must be increased accordingly.
- **Pre-averaging**: The pre-averaging estimator (Jacod et al. 2009) achieves the same $n^{1/4}$ rate with simpler implementation by smoothing prices before computing RV.
- **Ultra-high-frequency**: At sub-millisecond frequencies, the IID noise assumption fails due to queue dynamics; LOB-based models are needed.

## Practical Applications

1. **Options pricing**: Accurate daily RK feeds into stochastic volatility model calibration (Heston, SABR) for short-dated options.
2. **VaR models**: Replacing GARCH conditional variance with RK-based realized vol significantly improves 1-day VaR forecast accuracy.
3. **Execution algorithms**: Almgren-Chriss VWAP schedulers adapt urgency in real time using intraday RK to estimate current impact costs.
4. **Statistical arbitrage**: Pairs trading models use RK-based covariance to estimate the co-integration residual's volatility for dynamic position sizing.
5. **Volatility risk premia**: The variance risk premium ($\text{VRP} = IV_{implied} - \mathbb{E}[RK]$) is a tradeable signal constructed from RK forecasts and VIX.

## Related Topics
- [[spectral-analysis]]
- [[wavelet-transform]]
- [[volatility-forecasting]]
- [[garch-models]]
- [[value-at-risk]]
