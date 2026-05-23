---
title: Stochastic Gradient Descent
category: Optimization
order: 131
lang: en
slug: sgd-variants
---

## Overview
Stochastic [[convex-optimization|Gradient Descent]] (SGD) optimizes an objective function by updating parameters based on a randomly selected subset (mini-batch) of the data.

## Variants
- **Vanilla SGD:** $\theta_{t+1} = \theta_t - \eta \nabla L(\theta_t; x_i)$
- **Adam:** Combines momentum and RMSProp. It computes adaptive learning rates for each parameter based on exponential moving averages of first and second moments of gradients.
- **RMSProp:** Divides the learning rate by an exponentially decaying average of squared gradients.