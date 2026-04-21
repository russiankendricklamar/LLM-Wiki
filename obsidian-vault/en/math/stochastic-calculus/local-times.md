---
title: "Local Times and Tanaka's Formula"
category: "Stochastic Calculus"
order: 24
lang: "en"
slug: "local-times"
---

# Local Times and Tanaka's Formula

Local time is a mathematical concept that quantifies the amount of time a stochastic process, such as Brownian motion, spends at a specific point in its state space. It is a fundamental tool for studying the fine structure of random trajectories and is essential for the **Itô calculus of non-smooth functions**.

## The Intuition: Measuring Residence

For a smooth path, the time spent at a single point is always zero. However, Brownian motion is so "wiggly" and fractal that it visits points infinitely many times. The **Local Time** $L_t^a$ is the density of the occupation measure:
$$\int_0^t f(B_s) ds = \int_{-\infty}^{\infty} f(a) L_t^a da$$
In simple terms, $L_t^a$ measures how "thick" the trajectory is at level $a$ up to time $t$.

## Tanaka's Formula

Tanaka's formula is the generalization of Itô's formula to the non-smooth function $f(x) = |x - a|$. Since the derivative of $|x|$ is the sign function (discontinuous) and its second derivative is the Dirac Delta (a distribution), standard Itô fails. 

Tanaka's formula states:
$$|B_t - a| = |B_0 - a| + \int_0^t \text{sgn}(B_s - a) dB_s + L_t^a$$

This identity provides a pathwise definition of local time: $L_t^a$ is the "leftover" term needed to balance the equation when we try to apply calculus to absolute values.

## Key Properties

1.  **Continuity**: For a fixed $t$, the map $a \mapsto L_t^a$ is continuous. This means the time spent at nearby levels is similar.
2.  **Support**: The local time $L_t^a$ increases only when the process is actually at point $a$ ($B_t = a$).
3.  **Ray-Knight Theorems**: These theorems describe the distribution of local times as a squared Bessel process, linking local time to other famous stochastic processes.

## Applications

1.  **Stochastic Differential Equations**: Used to solve SDEs with reflection (e.g., modeling a particle trapped in a box).
2.  **Finance**: Modeling "sticky" prices or barriers where a stock price tends to linger.
3.  **Physics**: Analyzing the behavior of polymers and the statistics of random walks in random environments.

## Visualization: The Occupation Density

```chart
{
  "type": "line",
  "xAxis": "a",
  "data": [
    {"a": -2.0, "local_time": 0.1},
    {"a": -1.0, "local_time": 0.8},
    {"a": 0.0,  "local_time": 2.5},
    {"a": 1.0,  "local_time": 0.7},
    {"a": 2.0,  "local_time": 0.2}
  ],
  "lines": [
    {"dataKey": "local_time", "stroke": "#ef4444", "name": "Local Time L_t^a"}
  ]
}
```
*The local time is highest at levels where the process spent the most time. It acts as a "smooth histogram" of a single random trajectory.*

## Related Topics

[[brownian-motion]] — the primary process for local times  
[[schwartz-distributions]] — understanding the second derivative of absolute value  
[[excursion-theory]] — how local time links different excursions
---
