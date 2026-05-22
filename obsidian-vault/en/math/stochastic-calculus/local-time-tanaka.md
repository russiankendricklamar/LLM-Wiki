---
title: "Local Time and Tanaka Formula"
category: "Stochastic Calculus"
order: 19
lang: "en"
slug: "local-time-tanaka"
growth: "seedling"
---

# Local Time and Tanaka's Formula

Local time is a mathematical concept that quantifies the amount of time a stochastic process, such as Brownian motion, spends at a specific point in its state space. It is a fundamental tool for studying the fine structure of random trajectories and is essential for the **Itô calculus of non-smooth functions**.

## Definition and Intuition: Measuring Residence

For a smooth path, the time spent at a single point is always zero. However, Brownian motion is so "wiggly" and fractal that it visits points infinitely many times. The **Local Time** $L_t^a$ at level $a \in \mathbb{R}$ can be understood as the **density of time** spent at $a$ up to time $t$.

The formal definition is given by the limit:
$$L_t^a = \lim_{\varepsilon \to 0^+} \frac{1}{2\varepsilon} \int_0^t \mathbf{1}_{\{|W_s - a| < \varepsilon\}} \, ds$$

The limit exists in probability. $L_t^a$ is a nonnegative, nondecreasing, continuous process that increases only when the process is actually at point $a$ ($W_t = a$).

## Occupation Time Formula

A fundamental identity connects integral functionals of the path to local time:
$$\int_0^t f(W_s) \, ds = \int_{-\infty}^{\infty} f(a) L_t^a \, da$$
for any measurable $f \geq 0$. This formula states that every functional of the path decomposes into contributions from each level, weighted by local time. It shows that local time completely encodes the "geometry" of the path—how the Brownian motion is distributed across space.

## Tanaka's Formula

Tanaka's formula extends Itô's formula to non-smooth functions, such as the absolute value $|x - a|$. Since the second derivative of the absolute value is the Dirac Delta distribution ($2\delta(x-a)$), standard calculus fails.

Tanaka's formula states:
$$|W_t - a| = |W_0 - a| + \int_0^t \operatorname{sgn}(W_s - a) \, dW_s + L_t^a$$

Here, local time $L_t^a$ acts as a "correcting term" that compensates for the lack of a second derivative at $a$. It provides a pathwise definition of local time as the leftover term needed to balance the equation.

## Lévy's Theorem and the Reflection Principle

The reflection principle for the maximum relates to local time at zero. **Paul Lévy's theorem** states:
$$(|W_t|, L_t^0) \stackrel{d}{=} (M_t - W_t, M_t)$$
where $M_t = \max_{s \leq t} W_s$ is the running maximum. The distribution of local time at zero equals the distribution of the maximum!

## Excursion Decomposition

Each time $W_t$ crosses level $a$, a new *excursion* begins. Itô's excursion theory shows that:
1. Excursions are independent and identically distributed.
2. The intensity of excursions is tied to local time; the measure $dL_t^a$ is the intensity measure for the Poisson point process of excursions.

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
*The local time acts as a "smooth histogram" of a single random trajectory, showing where the process lingered longest.*

## Applications

- **Yamada-Watanabe Theorem**: The proof of uniqueness for strong solutions to [[stochastic-differential-equations|SDEs]] uses local time to control the difference between two trajectories.
- **Sticky Brownian Motion**: Modeling processes that "stick" to a boundary where a stock price or particle tends to linger.
- **Dupire Local Volatility**: Connecting marginal densities to realized paths in quantitative finance.
- **Optimal Stopping**: Hitting times and duration of stopping rules in [[optimal-stopping-markov|sequential testing]] involve local time dynamics.

## Related Topics

[[brownian-motion]] — the primary process for local times  
[[doob-meyer-decomposition|Doob-Meyer]] — connection to submartingale compensators  
[[excursion-theory]] — how local time links different excursions  
[[stochastic-differential-equations|SDEs]] — role in solution uniqueness and boundary behavior
