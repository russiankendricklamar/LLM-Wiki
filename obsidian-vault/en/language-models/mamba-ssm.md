---
title: "State Space Models (Mamba)"
category: "Language Models"
date: 2026-04-28
tags:
  - architecture
  - mamba
  - ssm
  - llm
aliases:
  - Mamba
  - State Space Models
---

# State Space Models and Mamba Architecture

**State Space Models (SSM)** are a class of architectures that unify the strengths of Recurrent Neural Networks (RNNs) and Convolutional Neural Networks (CNNs). The **Mamba** architecture (Gu & Dao, 2023) represents a milestone in the field, enabling **linear-time complexity** for sequence processing while matching Transformer performance.

## The Transformer Bottleneck

Standard Attention mechanisms scale quadratically $O(L^2)$ with sequence length $L$. This becomes a massive computational barrier for processing very long contexts (100k+ tokens). SSMs bypass this by treating sequence processing as a continuous state update.

## The SSM Framework

SSMs are inspired by linear dynamical systems in control theory:
1. $h'(t) = \mathbf{A}h(t) + \mathbf{B}x(t)$
2. $y(t) = \mathbf{C}h(t)$

Where $h(t)$ is the hidden state (the system's "memory"). For digital implementation, these equations are discretized into a recurrent form.

### The Mamba Innovation: Selection Mechanism
Traditional SSMs use static matrices $\mathbf{A, B, C}$. **Mamba** introduces **Selection**, making these matrices input-dependent. This allows the model to:
- **Selectively** remember or forget information based on current context.
- Filter out irrelevant noise while maintaining an efficient $O(L)$ memory footprint.

## Why Mamba Matters

1. **Scalable Context:** Theoretically, Mamba can handle millions of tokens without the quadratic slowdown of Transformers.
2. **Inference Speed:** Throughput is significantly higher during generation because there is no massive KV-cache to manage.
3. **Hardware-Aware Design:** Mamba utilizes a custom CUDA kernel to minimize memory IO between GPU SRAM and HBM, making it incredibly fast on modern hardware.

## Limitations
While powerful, Mamba can sometimes struggle with tasks requiring precise "copying" or "recalling" of information from specific distant positions, an area where the global look-up of Attention still excels.

## Related Topics
[[transformer-architecture|Transformer Architecture]] | [[linear-algebra|Linear Algebra]] | [[time-series|Time Series Analysis]]
