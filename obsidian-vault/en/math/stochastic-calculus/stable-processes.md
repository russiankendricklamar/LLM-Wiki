---
title: "Stable Processes and Lévy Flights"
category: "Stochastic Calculus"
order: 23
lang: "en"
slug: "stable-processes"
---

# Stable Processes and Lévy Flights

While Brownian motion is the limit of random walks with finite variance, **Stable Processes** (specifically $\alpha$-stable Lévy processes) are the limits of random walks with **infinite variance**. They model systems with "bursty" dynamics, characterized by rare but extreme jumps, known as **Lévy Flights**.

## Alpha-Stable Distributions

A random variable is **stable** if a linear combination of two independent copies has the same distribution (up to scaling and shift). They are defined by four parameters, but the most important is the **stability index** $\alpha \in (0, 2]$:

- **$\alpha = 2$**: The Normal distribution (the only stable distribution with finite variance).
- **$\alpha = 1$**: The Cauchy distribution.
- **$\alpha < 2$**: Distributions with **Heavy Tails**. The variance is infinite.

The characteristic function of a symmetric $\alpha$-stable variable is:
$$\varphi(t) = \exp(-\gamma |t|^\alpha)$$

## Lévy Flights vs. Brownian Motion

A **Lévy Flight** is a random walk where the step lengths follow a heavy-tailed stable distribution.
1.  **Brownian Motion**: Steps are small and frequent. The path is continuous. The typical distance traveled scales as $t^{1/2}$.
2.  **Lévy Flight**: Occasional massive "jumps" occur. The path is discontinuous. The distance scales as $t^{1/\alpha}$, meaning the process spreads out much faster than diffusion (**Super-diffusion**).

## The Fractional Laplacian

Just as Brownian motion is linked to the standard Laplacian $\Delta$, stable processes are linked to the **Fractional Laplacian** $(-\Delta)^{\alpha/2}$. This operator is non-local: the evolution at one point depends on the values of the function everywhere, reflecting the ability of the process to "jump" across space.

## Applications

1.  **Foraging Patterns**: Many animals (and even human search behaviors) follow Lévy flights to optimize finding resources in sparse environments.
2.  **Financial Crashes**: Stock market returns often exhibit $\alpha \approx 1.7$ behavior, explaining why "10-sigma events" happen much more often than Gaussian models predict.
3.  **Optimization**: **Lévy-flight-based Metaheuristics** help optimization algorithms jump out of local minima more effectively than random noise.

## Visualization: Trajectory Comparison

```chart
{
  "type": "scatter",
  "xAxis": "x",
  "data": [
    {"x": 0.1, "y": 0.1, "type": "Brownian"},
    {"x": 0.2, "y": 0.2, "type": "Brownian"},
    {"x": 0.3, "y": 0.15, "type": "Brownian"},
    {"x": 0.5, "y": 0.5, "type": "Levy"},
    {"x": 0.6, "y": 0.6, "type": "Levy"},
    {"x": 4.5, "y": 4.8, "type": "Levy"}
  ],
  "lines": [
    {"dataKey": "y", "stroke": "#10b981", "name": "Brownian (Local)"},
    {"dataKey": "y", "stroke": "#ef4444", "name": "Lévy Flight (Jump)"}
  ]
}
```
*The green points show a local, continuous crawl. The red points show a sudden, massive jump (the "flight"), which is a signature of infinite-variance processes.*

## Related Topics

[[levy-processes]] — the broader mathematical class  
[[extreme-value-theory]] — studying the statistics of the jumps  
[[fractional-brownian-motion]] — another way to generalize Brownian motion
---
