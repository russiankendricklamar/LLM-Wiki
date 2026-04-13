---
title: "Hawkes Process"
category: "Stochastic Processes"
order: 101
lang: "en"
---
# Hawkes Process

A **Hawkes process** is a class of self-exciting point processes where the occurrence of an event increases the probability of future events in the short term. Unlike a standard Poisson process where events are independent, Hawkes processes capture the "clustering" behavior often observed in financial markets, such as trade arrivals or volatility bursts.

## Mathematical Definition

The intensity function $\lambda(t)$ of a univariate Hawkes process is given by:

$$
\lambda(t) = \mu + \int_{-\infty}^t \phi(t-s) dN(s) = \mu + \sum_{T_i < t} \phi(t - T_i)
$$

Where:
- $\mu$ is the baseline intensity (exogenous arrivals).
- $\phi(\tau)$ is the kernel function, usually an exponential decay: $\phi(\tau) = \alpha e^{-\beta \tau}$.
- $T_i$ are the timestamps of previous events.

For the process to be stationary, the branching ratio $n = \int_0^\infty \phi(\tau) d\tau = \alpha / \beta$ must be less than 1.

## Financial Application

Hawkes processes are widely used in High-Frequency Trading (HFT) and Microstructure analysis to model:
1. **Order Book Dynamics**: Modeling the arrival of limit orders and market orders.
2. **Flash Crashes**: Understanding how a single large trade can trigger a cascade of liquidations.
3. **Volatility Clustering**: Since events beget events, it naturally explains why high volatility periods tend to persist.

## Python: Simulating a Hawkes Process

```python
import numpy as np

def simulate_hawkes(mu, alpha, beta, T):
    t = 0
    events = []
    lambda_curr = mu
    
    while t < T:
        # Thinning algorithm for simulation
        M = lambda_curr + alpha # Upper bound
        t += np.random.exponential(1/M)
        
        if t > T: break
        
        # Calculate actual intensity at time t
        lambda_t = mu + sum(alpha * np.exp(-beta * (t - np.array(events))))
        
        if np.random.rand() < lambda_t / M:
            events.append(t)
            lambda_curr = lambda_t
            
    return np.array(events)

# Parameters: mu=0.1, alpha=0.5, beta=0.8, Duration=100
events = simulate_hawkes(0.1, 0.5, 0.8, 100)
print(f"Simulated {len(events)} events.")
```

## Related Topics
- [[monte-carlo-method]]
- [[cox-process]]
---
