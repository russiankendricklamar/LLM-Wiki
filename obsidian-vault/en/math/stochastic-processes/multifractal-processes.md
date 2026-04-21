---
title: "Multifractal Processes"
category: "Stochastic Processes"
order: 17
lang: "en"
slug: "multifractal-processes"
---

# Multifractal Processes

Multifractal processes are stochastic processes whose local regularity (Hurst exponent) is not constant but varies over time. While monofractal processes like **Brownian motion** ($H=0.5$) or [[fractional-brownian-motion|fBM]] have a single scaling behavior, multifractals are needed to model complex systems with "intermittency," such as turbulence or financial markets during crises.

## The Limitation of Monofractals

A monofractal process $X_t$ satisfies $\mathbb{E}[|X_{t+\tau} - X_t|^q] \approx C_q \tau^{qH}$. Here, $H$ is a single number.
In contrast, a **Multifractal Process** has a scaling function $\zeta(q)$ that is non-linear:
$$\mathbb{E}[|X_{t+\tau} - X_t|^q] \approx C_q \tau^{\zeta(q)}$$
The curvature of $\zeta(q)$ measures the "multifractality" or the diversity of scaling behaviors in the signal.

## Multifractal Cascade Models

The standard way to build a multifractal process is through a **Multiplicative Cascade**.
1.  Start with a uniform measure.
2.  Repeatedly fragment the measure, multiplying each part by a random "weight."
3.  In the limit, you get a highly singular measure (like **Multifractal Random Walk** or MRW).

## Multifractal Spectrum ($f(\alpha)$)

The multifractal spectrum $f(\alpha)$ describes the Hausdorff dimension of the set of points where the local Hölder exponent is exactly $\alpha$.
- A narrow spectrum means the process is nearly monofractal.
- A wide spectrum indicates a rich variety of local behaviors (smooth regions mixed with very jagged ones).

## Applications in Finance and Physics

1.  **Financial Markets (MSMR)**: The Multifractal Model of Asset Returns (Calvet & Fisher) captures the "volatility of volatility" and the long-memory of absolute returns better than GARCH or fBM.
2.  **Fluid Turbulence**: The Kolmogorov-Obukhov theory of turbulence uses multifractals to explain how energy dissipates across different scales in a fluid.
3.  **Network Traffic**: Modeling "bursty" traffic in internet backbones.

## Visualization: Monofractal vs. Multifractal

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": 1, "mono": 0.5, "multi": 0.5},
    {"t": 2, "mono": 0.8, "multi": 0.4},
    {"t": 3, "mono": 1.1, "multi": 1.5},
    {"t": 4, "mono": 0.9, "multi": 1.6},
    {"t": 5, "mono": 1.3, "multi": 0.2}
  ],
  "lines": [
    {"dataKey": "mono", "stroke": "#3b82f6", "name": "Monofractal (Steady)"},
    {"dataKey": "multi", "stroke": "#ef4444", "name": "Multifractal (Intermittent)"}
  ]
}
```
*The multifractal path (red) exhibits "intermittency": periods of relative calm followed by bursts of intense activity and rapid changes in roughness.*

## Related Topics

[[fractional-brownian-motion]] — the monofractal baseline  
[[levy-processes]] — another source of intermittency (via jumps)  
[[brownian-motion]] — the simplest fractal process
---
