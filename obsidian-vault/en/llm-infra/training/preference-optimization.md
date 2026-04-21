---
title: "Beyond DPO: KTO & IPO"
category: "LLM Infrastructure"
order: 12
lang: "en"
slug: "preference-optimization"
---

# Beyond [[dpo]]: KTO and IPO

While **Direct Preference Optimization (DPO)** simplified model alignment, it has limitations, such as a tendency to overfit to the preferred data and a requirement for strict binary pairs (Chosen vs. Rejected). New methods like **KTO** and **IPO** address these issues by using different mathematical foundations.

## 1. KTO: Kahneman-Tversky Optimization

KTO (Ethayarajh et al., 2024) is inspired by **Prospect Theory** from behavioral economics. It doesn't require paired data. Instead, it only needs to know if a completion is "good" or "bad."

### The Key Idea
Humans don't perceive absolute values; we perceive changes relative to a reference point. KTO models the "utility" of an output using a value function that is concave for gains and convex for losses (loss aversion).

### Advantages
- **Data Efficiency**: Can use unpaired datasets (e.g., just a list of good responses).
- **Human-Centric**: Better matches how humans actually judge quality compared to the Bradley-Terry model used in DPO.

## 2. IPO: Identity Preference Optimization

IPO (Azar et al., 2023) was designed to solve the **overfitting problem** in DPO. DPO can drive the log-likelihood of preferred completions to infinity, causing the model to collapse and lose its creative diversity.

### The Key Idea
IPO adds a regularization term that forces the difference in log-probabilities between chosen and rejected responses to stay close to a target value, rather than just maximizing it indefinitely.

$$\mathcal{L}_{\text{IPO}}(\theta) = \mathbb{E} \left[ \left( \log \frac{\pi_\theta(y_w \mid x)}{\pi_{ref}(y_w \mid x)} - \log \frac{\pi_\theta(y_l \mid x)}{\pi_{ref}(y_l \mid x)} - \frac{1}{2\beta} \right)^2 \right]$$

### Advantages
- **Stability**: Prevents the model from "cheating" by focusing on a few tokens.
- **Diversity**: Maintains better distribution of outputs compared to standard DPO.

## Visualization: Loss Landscape Comparison

```chart
{
  "type": "line",
  "xAxis": "margin",
  "data": [
    {"margin": 0, "dpo": 0.69, "ipo": 1.0, "kto": 0.5},
    {"margin": 1, "dpo": 0.31, "ipo": 0.25, "kto": 0.2},
    {"margin": 2, "dpo": 0.12, "ipo": 0.1, "kto": 0.05},
    {"margin": 5, "dpo": 0.01, "ipo": 4.0, "kto": 0.01}
  ],
  "lines": [
    {"dataKey": "dpo", "stroke": "#ef4444", "name": "DPO (Sigmoid)"},
    {"dataKey": "ipo", "stroke": "#3b82f6", "name": "IPO (Quadratic)"}
  ]
}
```
*DPO's loss keeps decreasing as the margin grows, potentially leading to overfitting. IPO's loss increases if the margin exceeds the regularization threshold, keeping the model stable.*

## Which One to Choose?

| Feature | DPO | IPO | KTO |
|---|---|---|---|
| **Data Requirement** | Paired | Paired | **Unpaired (Binary)** |
| **Stability** | Moderate | **High** | High |
| **Foundation** | Bradley-Terry | Regularization | Prospect Theory |
| **Best For** | Standard Align | Preventing Overfit | Noisy/Unpaired Data |

## Related Topics

[[dpo]] — the direct predecessor  
[[rlhf]] — the classical RL framework  
[[fine-tuning]] — the stage before preference optimization
---
