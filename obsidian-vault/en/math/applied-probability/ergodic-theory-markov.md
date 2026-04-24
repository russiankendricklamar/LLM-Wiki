---
title: "Ergodic Theory of Markov Chains"
category: "Applied Probability"
order: 31
lang: "en"
slug: "ergodic-theory-markov"
---

# Ergodic Theory of Markov Chains

Ergodic Theory studies the long-term statistical behavior of dynamical systems. For Markov Chains, it answers a fundamental question: **Does the chain settle into a stable equilibrium (stationary distribution), regardless of where it started?**

## Stationary Distribution ($\pi$)

A probability distribution $\pi$ is stationary for a transition matrix $P$ if:
$$\pi P = \pi$$
This means that if the state of the system is distributed according to $\pi$, it will remain distributed according to $\pi$ after one step.

## The Ergodic Theorem for Markov Chains

For an **irreducible** (all states reachable) and **aperiodic** (no fixed cycles) Markov chain, the Ergodic Theorem states that:

1.  **Unique Equilibrium**: There exists a unique stationary distribution $\pi$.
2.  **Convergence**: The distribution at time $t$ converges to $\pi$ as $t \to \infty$:
    $$P^t(x, \cdot) \to \pi(\cdot)$$
3.  **Time Averages vs Space Averages**: For any function $f$, the average value of $f$ over a long trajectory equals the average value over the distribution $\pi$:
    $$\lim_{T \to \infty} \frac{1}{T} \sum_{t=1}^T f(X_t) = \sum_x f(x) \pi(x)$$

This is the mathematical justification for **MCMC (Markov Chain Monte Carlo)** algorithms.

## Reversibility and Detailed Balance

A chain is **reversible** if it satisfies the **detailed balance** condition:
$$\pi_i P_{ij} = \pi_j P_{ji}$$
This is a stronger condition than stationarity. It implies that at equilibrium, the probability of being at $i$ and moving to $j$ is the same as being at $j$ and moving to $i$. Reversible chains are much easier to analyze and form the basis of the **Metropolis-Hastings** algorithm.

## Mixing Time

Mixing time $t_{mix}(\epsilon)$ is the number of steps required for the chain to get within distance $\epsilon$ of the stationary distribution.
- **Rapid Mixing**: $t_{mix}$ scales as $poly(\log |S|)$.
- **Slow Mixing**: $t_{mix}$ scales as $poly(|S|)$.

The speed of mixing is determined by the **spectral gap** $\gamma = 1 - \lambda_2$, where $\lambda_2$ is the second largest eigenvalue of $P$.

## Visualization: Convergence to Stationarity

```chart
{
  "type": "line",
  "xAxis": "step",
  "data": [
    {"step": 0, "state_A": 1.00, "state_B": 0.00, "state_C": 0.00},
    {"step": 1, "state_A": 0.40, "state_B": 0.40, "state_C": 0.20},
    {"step": 2, "state_A": 0.32, "state_B": 0.38, "state_C": 0.30},
    {"step": 5, "state_A": 0.33, "state_B": 0.34, "state_C": 0.33},
    {"step": 10, "state_A": 0.333, "state_B": 0.333, "state_C": 0.333}
  ],
  "lines": [
    {"dataKey": "state_A", "stroke": "#3b82f6", "name": "Prob(State A)"},
    {"dataKey": "state_C", "stroke": "#ef4444", "name": "Prob(State C)"}
  ]
}
```
*Regardless of the starting point (State A), the probabilities eventually equalize to the stationary distribution (1/3, 1/3, 1/3) as the chain "forgets" its initial state.*

## Applications

1.  **Bayesian Inference**: Using MCMC to sample from posterior distributions that are impossible to compute analytically.
2.  **PageRank**: Google's original algorithm is the stationary distribution of a random walk on the web graph.
3.  **Statistical Physics**: The Ising model and other lattice models reach equilibrium via Markov processes.

## Related Topics

stochastic-processes — the broader family  
[[spectral-graph-theory]] — link between spectral gap and mixing  
[[information-theory]] — [[shannon-entropy|entropy]] and convergence speed
---
