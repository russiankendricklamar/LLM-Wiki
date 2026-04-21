---
title: "Queue-Reactive Models (LOB Dynamics)"
category: "Microstructure"
order: 10
lang: "en"
slug: "queue-reactive-models"
---

# Queue-Reactive Models of the Limit Order Book

While models like [[lob-propagators|Propagators]] explain how trades impact prices, they don't explain the granular physics of the **Limit Order Book (LOB)** itself. How do the queues of limit orders grow and shrink? **Queue-Reactive Models** (Huang, Lehalle, Rosenbaum, 2015) model the LOB as a multidimensional continuous-time Markov chain.

## The Physics of the Queue

At any moment, the state of the LOB is defined by the number of shares sitting at the Best Bid ($Q_b$) and the Best Ask ($Q_a$). The state changes due to three distinct Poisson point processes:
1.  **Limit Orders (Arrivals)**: People adding liquidity (queue grows). Rate: $\lambda$.
2.  **Cancellations**: People removing liquidity (queue shrinks). Rate: $\theta$.
3.  **Market Orders**: People consuming liquidity (queue shrinks, trade occurs). Rate: $\mu$.

## The "Reactive" Insight

Early models assumed these rates ($\lambda, \theta, \mu$) were constant. The breakthrough of Queue-Reactive Models is the empirical proof that **these rates depend strongly on the current size of the queues**.

- If the Bid queue $Q_b$ is very small, cancellations $\theta$ drop to zero (no one wants to cancel and lose their priority place), and limit order arrivals $\lambda$ spike (people rush to provide liquidity).
- If the Bid queue $Q_b$ is massive, the rate of market orders hitting it $\mu$ increases, because aggressive sellers know there is enough liquidity to absorb their trades without slippage.

The transition rates are functions of the state: $\lambda(Q_a, Q_b)$, $\theta(Q_a, Q_b)$, $\mu(Q_a, Q_b)$.

## The Micro-Price

By solving the equations of this Markov chain, quants can calculate the exact probability that the next price move will be an "Up-tick" or a "Down-tick" based on the current queue sizes. This leads to the definition of the **Micro-Price**:
$$P_{micro} = P_{mid} + \text{Adjustment}(Q_a, Q_b)$$
Unlike the simple mid-price (which is just an average), the Micro-Price is a martingale. It is the "true" fair value of the asset in the microsecond domain.

## Why HFTs Use It

Queue-reactive modeling is the engine of **Market Making**. 
If the model calculates that the probability of a downward tick is 80% (because the Ask queue is huge and the Bid queue is thin), a market maker will instantly:
1.  Cancel their own Bid orders (to avoid buying an asset that is about to drop).
2.  Aggressively sell at the Bid (to clear inventory before the price falls).

## Visualization: Transition Intensities

```chart
{
  "type": "line",
  "xAxis": "queue_size",
  "data": [
    {"queue_size": 1, "limit_rate": 100, "cancel_rate": 5},
    {"queue_size": 5, "limit_rate": 50, "cancel_rate": 20},
    {"queue_size": 10, "limit_rate": 30, "cancel_rate": 50},
    {"queue_size": 20, "limit_rate": 10, "cancel_rate": 90}
  ],
  "lines": [
    {"dataKey": "limit_rate", "stroke": "#10b981", "name": "Limit Order Arrival Rate (λ)"},
    {"dataKey": "cancel_rate", "stroke": "#ef4444", "name": "Cancellation Rate (θ)"}
  ]
}
```
*As the queue grows larger (moving right), people stop placing new limit orders (green line drops) and start canceling existing ones (red line rises) because waiting at the back of a huge line is unprofitable.*

## Related Topics

[[limit-order-book]] — the structure being modeled  
[[hawkes-process]] — modeling the clustering of these events  
[[order-flow-imbalance]] — the macroscopic summary of queue differences
---
