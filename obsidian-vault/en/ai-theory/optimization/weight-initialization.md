---
title: Weight Initialization
category: Optimization
order: 134
lang: en
slug: weight-initialization
---

## Overview
Proper initialization of network weights prevents the vanishing or exploding gradient problems during forward and backward passes.

## Techniques
- **Xavier/Glorot Initialization:** Designed for symmetric activations (tanh, sigmoid). Variance is scaled by $\frac{2}{n_{in} + n_{out}}$.
- **He (Kaiming) Initialization:** Designed for ReLU-like activations. Variance is scaled by $\frac{2}{n_{in}}$, accounting for the fact that ReLU zeroes out half of the pre-activations.