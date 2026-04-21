---
title: "Online Learning and Regret"
category: "Statistical Learning"
order: 3
lang: "en"
slug: "online-learning-regret"
---

# Online Learning and Regret Minimization

Online learning is a framework for machine learning where data arrives sequentially, and the model must make predictions and update itself at each step. Unlike batch learning, there is no fixed dataset. The goal is to minimize **Regret** — the difference between the model's total loss and the loss of the best possible fixed strategy in hindsight.

## The Online Protocol

For each round $t = 1, \dots, T$:
1.  The algorithm chooses a decision $w_t \in \mathcal{W}$.
2.  The adversary reveals a loss function $f_t: \mathcal{W} \to \mathbb{R}$.
3.  The algorithm incurs loss $f_t(w_t)$.
4.  The algorithm updates its strategy for round $t+1$.

## Definition of Regret

The **Cumulative Regret** is defined as:
$$\text{Regret}_T = \sum_{t=1}^T f_t(w_t) - \min_{w \in \mathcal{W}} \sum_{t=1}^T f_t(w)$$
An algorithm is said to **learn** if its regret is sub-linear in $T$, i.e., $\text{Regret}_T / T \to 0$ as $T \to \infty$. This means that on average, the algorithm performs as well as the best fixed expert.

## Key Algorithms

### 1. Follow the Leader (FTL)
Choose the decision that performed best in all previous rounds:
$$w_{t+1} = \arg\min_{w \in \mathcal{W}} \sum_{i=1}^t f_i(w)$$
FTL works well for stable environments but can have linear regret if the loss functions are adversarial (e.g., oscillating between -1 and 1).

### 2. Follow the Regularized Leader (FTRL)
Adds a regularization term to stabilize the decisions:
$$w_{t+1} = \arg\min_{w \in \mathcal{W}} \left( \sum_{i=1}^t f_i(w) + \frac{1}{\eta} \psi(w) \right)$$
Common choices for $\psi(w)$ include the $\ell_2$-norm (leading to Online [[convex-optimization|Gradient Descent]]) or [[shannon-entropy|Entropy]] (leading to Multiplicative Weights).

### 3. Multiplicative Weights Update (MWU) / Hedge
Used for picking among $N$ discrete experts. It maintains a weight $v_i$ for each expert and updates it exponentially based on their loss:
$$v_{i, t+1} = v_{i, t} e^{-\eta f_t(i)}$$
Hedge achieves $O(\sqrt{T \log N})$ regret, which is optimal for discrete experts.

## Multi-armed Bandits (MAB)

In the Bandit setting, the algorithm only observes the loss of the action it *actually chose*, not the full loss function. This introduces the **Exploration-Exploitation Trade-off**.
- **UCB (Upper Confidence Bound)**: Choose actions based on optimism in the face of uncertainty.
- **Thompson Sampling**: Sample actions from the posterior probability of being the best action.

## Visualization: Regret Scaling

```chart
{
  "type": "line",
  "xAxis": "T",
  "data": [
    {"T": 0, "linear": 0, "sublinear": 0},
    {"T": 100, "linear": 50, "sublinear": 20},
    {"T": 500, "linear": 250, "sublinear": 45},
    {"T": 1000, "linear": 500, "sublinear": 63},
    {"T": 5000, "linear": 2500, "sublinear": 141}
  ],
  "lines": [
    {"dataKey": "linear", "stroke": "#ef4444", "name": "Linear Regret (No Learning)"},
    {"dataKey": "sublinear", "stroke": "#10b981", "name": "√T Regret (Hedge/OGD)"}
  ]
}
```
*A successful online learning algorithm bends the regret curve downward. The slope $\text{Regret}/T$ vanishes over time.*

## Applications

1.  **Ad Placement**: Deciding which ad to show to maximize click-through rate.
2.  **Portfolio Selection**: Rebalancing assets daily to match the best constant-rebalanced portfolio (Universal Portfolios).
3.  **Optimization**: Adam and other deep learning optimizers are essentially FTRL variants.

## Related Topics

[[convex-optimization]] — the basis for FTRL  
[[reinforcement-learning]] — sequential decision making with state  
[[information-theory]] — regret is linked to the length of optimal codes
---
