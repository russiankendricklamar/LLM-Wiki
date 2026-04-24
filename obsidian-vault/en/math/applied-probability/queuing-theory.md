---
title: "Queuing Theory"
category: "Applied Probability"
order: 46
lang: "en"
slug: "queuing-theory"
---

# Queuing Theory

Queuing theory is the mathematical study of waiting lines, or queues. It uses probability theory and stochastic models to predict line lengths and waiting times. It is a critical field for computer science (server load), telecommunications, and industrial engineering.

## Kendall's Notation

Queues are typically described using Kendall's notation: **A / S / c / K**
- **A (Arrival process)**: Usually **M** (Markovian/Poisson), **D** (Deterministic), or **G** (General).
- **S (Service time distribution)**: Usually **M**, **D**, or **G**.
- **c (Number of servers)**: 1, 2, or $n$.
- **K (System capacity)**: Maximum number of customers allowed.

## The M/M/1 Queue

The most fundamental model: Poisson arrivals, exponential service times, and one server.
- **Arrival Rate**: $\lambda$
- **Service Rate**: $\mu$
- **Utilization ($\rho$)**: $\rho = \lambda / \mu$. For the queue to be stable, $\rho < 1$.

### Key Results (Little's Law)
1.  **Probability of $n$ customers**: $P_n = (1-\rho)\rho^n$
2.  **Average number in system ($L$)**: $L = \frac{\rho}{1-\rho}$
3.  **Average time in system ($W$)**: $W = \frac{L}{\lambda} = \frac{1}{\mu - \lambda}$

## Little's Law

One of the few "universal" results in queuing theory. It states that the long-term average number of customers in a stable system $L$ is equal to the long-term average effective arrival rate $\lambda$ multiplied by the average time a customer spends in the system $W$:
$$L = \lambda W$$
This holds regardless of the arrival distribution, service distribution, or service order (FIFO, LIFO, etc.).

## Visualization: Queue Length vs. Utilization

```chart
{
  "type": "line",
  "xAxis": "rho",
  "data": [
    {"rho": 0.1, "length": 0.11},
    {"rho": 0.5, "length": 1.0},
    {"rho": 0.7, "length": 2.3},
    {"rho": 0.8, "length": 4.0},
    {"rho": 0.9, "length": 9.0},
    {"rho": 0.95, "length": 19.0},
    {"rho": 0.99, "length": 99.0}
  ],
  "lines": [
    {"dataKey": "length", "stroke": "#ef4444", "name": "Average Queue Length (L)"}
  ]
}
```
*As utilization $\rho$ approaches 1 (100% load), the queue length explodes to infinity. This non-linear behavior is why systems fail catastrophically even with a small increase in traffic when they are near capacity.*

## Applications in AI/CS

1.  **API Rate Limiting**: Determining buffer sizes for incoming requests.
2.  **GPU Scheduling**: Managing the queue of inference jobs in large clusters.
3.  **Network Congestion**: Modeling packet drops in routers.

## Related Topics

[[poisson-process]] — the standard arrival model  
stochastic-processes — the broader mathematical class  
[[markov-chain-mixing]] — how fast queues reach equilibrium
---
