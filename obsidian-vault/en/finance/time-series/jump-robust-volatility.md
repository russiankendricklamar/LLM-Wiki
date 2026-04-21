---
title: "Jump-Robust Realized Variance"
category: "Time Series"
order: 16
lang: "en"
slug: "jump-robust-volatility"
---

# Jump-Robust Realized Variance (MinRV and MedRV)

Standard **Realized Variance (RV)** is calculated by summing squared high-frequency returns. While RV is a consistent estimator of total quadratic variation, it is contaminated by **Price Jumps** (discontinuous moves caused by news or large orders). To isolate the pure "diffusion" (volatility) from the "jumps," econometrics uses **Jump-Robust Estimators**.

## The Problem with Standard RV

Total Quadratic Variation consists of two parts:
$$[P, P]_T = \underbrace{\int_0^T \sigma_s^2 ds}_{\text{Integrated Variance (Continuous)}} + \underbrace{\sum_{0 \leq s \leq T} \Delta P_s^2}_{\text{Jump Component}}$$
Standard RV captures both. For risk management and option pricing, we often only care about the continuous $\sigma_s^2$. A single large jump can double the RV, making the asset appear much more volatile than it actually is.

## 1. Bipower Variation (BV)
The first jump-robust estimator (Barndorff-Nielsen & Shephard, 2004). It uses the product of adjacent absolute returns:
$$BV = \frac{\pi}{2} \sum |r_i| \cdot |r_{i-1}|$$
Since a jump usually only affects one interval, the product $|r_{jump}| \cdot |r_{normal}|$ remains relatively small, effectively "filtering out" the jump.

## 2. MinRV and MedRV (Andersen et al., 2012)
Modern estimators that are even more robust than BV in small samples.
- **MinRV**: Uses the minimum of adjacent absolute returns:
  $$MinRV = \frac{\pi}{\pi - 2} \sum \min(|r_i|, |r_{i-1}|)^2$$
- **MedRV**: Uses the median of three adjacent absolute returns.

These estimators are considered the "gold standard" for calculating the **volatility risk premium**, as they provide a cleaner signal of the underlying diffusion process.

## Why It Matters: Identifying Jumps

By comparing RV (total) and MinRV (continuous), we can statistically detect if a jump occurred on a given day.
- If $RV \gg MinRV$, the day was dominated by a discrete news event.
- If $RV \approx MinRV$, the price move was a smooth, continuous "diffusion" process.

## Visualization: Volatility vs. Jumps

```chart
{
  "type": "bar",
  "xAxis": "day",
  "data": [
    {"day": "Mon", "total_rv": 1.2, "robust_minrv": 1.1, "label": "Normal"},
    {"day": "Tue", "total_rv": 1.3, "robust_minrv": 1.2, "label": "Normal"},
    {"day": "Wed", "total_rv": 5.5, "robust_minrv": 1.4, "label": "Jump Event!"},
    {"day": "Thu", "total_rv": 1.8, "robust_minrv": 1.6, "label": "High Vol"},
    {"day": "Fri", "total_rv": 1.4, "robust_minrv": 1.3, "label": "Normal"}
  ],
  "lines": [
    {"dataKey": "total_rv", "stroke": "#ef4444", "name": "Total RV (with Jumps)"},
    {"dataKey": "robust_minrv", "stroke": "#10b981", "name": "Robust MinRV (Clean Vol)"}
  ]
}
```
*On Wednesday, a piece of news caused a massive price jump. Standard RV (red) spiked to 5.5, suggesting extreme risk. MinRV (green) stayed at 1.4, correctly identifying that the underlying market "nervousness" hasn't actually changed.*

## Related Topics

[[realized-kernels]] — handles noise in addition to jumps  
[[bipower-variation]] — the ancestor of MinRV  
[[merton-jump-diffusion]] — the model that describes these jumps
---
