---
title: "Weight Averaging and SWA"
category: "LLM Infrastructure"
order: 18
lang: "en"
slug: "weight-averaging"
---

# Weight Averaging and Stochastic Weight Averaging (SWA)

Weight averaging is a simple yet powerful technique to improve the generalization of neural networks. Instead of picking the "best" checkpoint from a single training run, we average the weights of multiple checkpoints to find a solution that sits in the center of a wide, flat region of the loss landscape.

## The Problem: Sharp Minima

During training with SGD or Adam, the model often converges to a **sharp minimum** — a point where the loss is low, but moving slightly in any direction causes the loss to spike. These sharp minima often generalize poorly to new data.

## Stochastic Weight Averaging (SWA)

SWA (Izmailov et al., 2018) provides a structured way to find **flat minima**.
1.  **Phase 1**: Train the model normally until it reaches a good region of the loss landscape.
2.  **Phase 2**: Continue training with a constant or cyclical learning rate.
3.  **Averaging**: Periodically take snapshots of the weights $w_i$ and maintain a running average:
    $$w_{SWA} = \frac{1}{n} \sum_{i=1}^n w_i$$

As the model "circles" around the optimal region, the average of these points converges to the center, which is typically a flatter and more robust solution.

## Polyak-Ruppert Averaging (EMA)

A closely related technique is **Exponential Moving Average (EMA)**, also known as Polyak-Ruppert averaging. It maintains a weighted average where recent weights have more influence:
$$w_{EMA} = \alpha w_{EMA} + (1 - \alpha) w_{current}$$
EMA is standard practice in training Generative Adversarial Networks (GANs) and stable diffusion models to stabilize the training process and produce smoother outputs.

## Why It Works: The Flatness Hypothesis

Research has shown a strong correlation between the **flatness** of a minimum and its ability to generalize. A flat minimum means that small changes in the weights (caused by different data at test time) won't significantly change the model's performance. Weight averaging acts as an ensemble of models "for free" within a single set of parameters.

## Visualization: Converging to the Center

```chart
{
  "type": "scatter",
  "xAxis": "w1",
  "data": [
    {"w1": 0.2, "w2": 0.8, "type": "checkpoint"},
    {"w1": 0.8, "w2": 0.7, "type": "checkpoint"},
    {"w1": 0.5, "w2": 0.2, "type": "checkpoint"},
    {"w1": 0.5, "w2": 0.56, "type": "SWA_center"}
  ],
  "lines": [
    {"dataKey": "w2", "stroke": "#10b981", "name": "SWA Solution"}
  ]
}
```
*The individual checkpoints (blue) might be at the edges of a low-loss region. Their average (green) lands in the center, providing a more stable and robust final model.*

## Related Topics

[[training-dynamics]] — understanding the loss landscape  
[[fine-tuning]] — SWA is often used in the final stages of [[fine-tuning]]  
[[model-merging]] — merging models can be seen as a form of weight averaging
---
