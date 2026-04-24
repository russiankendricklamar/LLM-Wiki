---
title: "Differential Privacy in ML"
category: "Statistical Learning"
order: 5
lang: "en"
slug: "differential-privacy"
---

# Differential Privacy in Machine Learning

Differential Privacy (DP) is a rigorous mathematical framework for providing privacy guarantees. In the context of machine learning, it ensures that the inclusion or exclusion of a single individual's data in the training set does not significantly affect the model's output, thereby preventing **membership inference attacks**.

## The Definition: (ε, δ)-Privacy

A randomized algorithm $\mathcal{A}$ satisfies **$(\epsilon, \delta)$-differential privacy** if for any two datasets $D$ and $D'$ that differ by only one element, and for all possible outputs $S$:
$$P(\mathcal{A}(D) \in S) \leq e^\epsilon P(\mathcal{A}(D') \in S) + \delta$$

- **$\epsilon$ (Privacy Budget)**: Smaller $\epsilon$ means stronger privacy. It bounds how much the probability of an outcome can change.
- **$\delta$**: The probability of a "catastrophic" privacy failure (usually very small, $< 10^{-5}$).

## DP-SGD: Training with Privacy

The standard method for training private models is **Differentially Private Stochastic [[convex-optimization|Gradient Descent]] (DP-SGD)**. It modifies regular SGD in two ways:

1.  **Gradient Clipping**: The gradient of each individual example is clipped to a maximum $\ell_2$-norm $C$. This limits the influence of any single data point.
    $$\bar{g}_i = g_i / \max(1, \|g_i\|/C)$$
2.  **Noise Addition**: Random Gaussian noise is added to the average of the clipped gradients before updating the weights.
    $$g_{step} = \frac{1}{B} \left( \sum \bar{g}_i + \mathcal{N}(0, \sigma^2 C^2 I) \right)$$

## The Privacy-Utility Trade-off

Adding noise protects privacy but hurts the model's performance (accuracy).
- **High Noise**: Strong privacy, low accuracy.
- **Low Noise**: Weak privacy, high accuracy.

The goal of DP research is to find the "Sweet Spot" where privacy is guaranteed without making the model useless.

## Visualization: Privacy Budget vs. Accuracy

```chart
{
  "type": "line",
  "xAxis": "epsilon",
  "data": [
    {"epsilon": 0.1, "accuracy": 45},
    {"epsilon": 0.5, "accuracy": 68},
    {"epsilon": 1.0, "accuracy": 82},
    {"epsilon": 2.0, "accuracy": 91},
    {"epsilon": 4.0, "accuracy": 96},
    {"epsilon": 8.0, "accuracy": 98}
  ],
  "lines": [
    {"dataKey": "accuracy", "stroke": "#ef4444", "name": "Model Accuracy (%)"}
  ]
}
```
*As the privacy budget $\epsilon$ increases (meaning privacy becomes weaker), the model accuracy approaches the non-private baseline. Most practical applications aim for $\epsilon \in [1, 8]$.*

## Why It Matters

1.  **Compliance**: Meeting legal requirements like GDPR or HIPAA.
2.  **User Trust**: Allowing companies to train on sensitive data (medical records, private chats) without leaking secrets.
3.  **Robustness**: DP training acts as a regularizer, often preventing overfitting to outliers.

## Related Topics

statistical-learning-theory — the theoretical bounds  
[[federated-learning]] — often combined with DP for distributed privacy  
[[adversarial-examples]] — DP models are sometimes more robust to attacks
---
