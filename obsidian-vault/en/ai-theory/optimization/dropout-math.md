---
title: Dropout Math
category: Optimization
order: 135
lang: en
slug: dropout-math
---

## Overview
Dropout is a regularization technique where randomly selected neurons are ignored during training.

## Mechanism
During each forward pass, each neuron is retained with probability $p$. The activation becomes:
$$ y = f(Wx) \odot M $$
where $M$ is a binary mask $M \sim \text{Bernoulli}(p)$. During inference, the full network is used, but weights are scaled by $p$ to match the expected value of activations seen during training (or inverted dropout is used during training).