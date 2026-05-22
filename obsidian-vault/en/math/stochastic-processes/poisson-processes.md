---
title: "Poisson Processes"
category: "Stochastic Processes"
order: 12
lang: "en"
slug: "poisson-process"
---

# Poisson Processes

The Poisson Process is the most fundamental model for **counting random events** that occur over time or space. It describes phenomena where events happen at a constant average rate, but independently of the time since the last event.

## Definition

A counting process $\{N(t), t \geq 0\}$ is a **Poisson Process** with rate $\lambda > 0$ if:
1.  **Start**: $N(0) = 0$.
2.  **Independent Increments**: The number of events in non-overlapping time intervals are independent.
3.  **Poisson Distribution**: The number of events in any interval of length $t$ follows a Poisson distribution with mean $\lambda t$:
    $$P(N(t+s) - N(s) = n) = \frac{(\lambda t)^n e^{-\lambda t}}{n!}$$

## Key Properties

### 1. Inter-arrival Times
The time between consecutive events in a Poisson process follows an **Exponential Distribution** with parameter $\lambda$:
$$T_i \sim \text{Exp}(\lambda)$$
Because the exponential distribution is **memoryless**, the Poisson process is also memoryless: the probability of an event in the next minute doesn't depend on how long you've already been waiting.

### 2. Waiting Times (Arrival Times)
The time until the $n$-th event occurs follows a **Gamma Distribution** (or Erlang distribution) with parameters $n$ and $\lambda$:
$$S_n = \sum_{i=1}^n T_i \sim \text{Gamma}(n, \lambda)$$

### 3. Superposition and Thinning
- **Superposition**: The sum of two independent Poisson processes with rates $\lambda_1$ and $\lambda_2$ is a Poisson process with rate $\lambda_1 + \lambda_2$.
- **Thinning**: If we randomly keep events from a Poisson process with probability $p$, the resulting process is a Poisson process with rate $\lambda p$.

## Applications

1.  **Queueing Theory**: Modeling customer arrivals at a bank or requests to a web server.
2.  **Reliability**: Modeling the failure of components over time.
3.  **Physics**: Radioactive decay (the number of particles emitted per second).
4.  **Finance**: Modeling discrete jumps in stock prices (Jump-Diffusion models).

## Visualization: Arrivals over Time

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": 0, "n": 0},
    {"time": 1, "n": 2},
    {"time": 2, "n": 5},
    {"time": 3, "n": 6},
    {"time": 4, "n": 8},
    {"time": 5, "n": 12}
  ],
  "lines": [
    {"dataKey": "n", "stroke": "#3b82f6", "name": "Event Count (N(t))"}
  ]
}
```
*The Poisson process is a "step function" that jumps up by 1 every time an event occurs. The slope of the imaginary line connecting the steps is the rate $\lambda$.*

## Related Topics

[[distributions-zoo]] — Poisson and Exponential distributions  
[[renewal-theory]] — generalizing Poisson to non-exponential times  
[[point-processes]] — the broader mathematical class
---
