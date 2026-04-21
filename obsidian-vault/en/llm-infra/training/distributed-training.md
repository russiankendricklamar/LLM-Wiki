---
title: "Distributed Training Patterns"
category: "LLM Infrastructure"
order: 19
lang: "en"
slug: "distributed-training"
---

# Distributed Training Patterns: DP, DDP, and ZeRO

Training Large Language Models (LLMs) requires far more memory and compute than any single GPU can provide. Distributed training patterns allow us to split the workload across multiple GPUs and nodes efficiently.

## 1. Data Parallelism (DP)

The simplest form of distributed training. 
- **The Idea**: Each GPU has a complete copy of the model. The dataset is split into batches, and each GPU processes a different batch.
- **The Sync**: After the backward pass, gradients from all GPUs are averaged (All-Reduce operation) to update the weights.
- **Limitation**: If the model is too large to fit into one GPU's memory (VRAM), standard DP fails.

## 2. Distributed Data Parallel (DDP)

An optimized version of DP. Instead of having a "master" GPU that collects and distributes data, DDP uses a multi-process approach where each GPU independently communicates with others. This eliminates the bottleneck of a single master node.

## 3. ZeRO (Zero Redundancy Optimizer)

Introduced by Microsoft (DeepSpeed), **ZeRO** is a breakthrough that eliminates the memory redundancy inherent in DDP.
In standard DDP, every GPU stores:
1.  **Model Weights**
2.  **Gradients**
3.  **Optimizer States** (e.g., Adam's momentum and variance)

**ZeRO-1, 2, and 3** progressively shard these components:
- **ZeRO-1**: Shards Optimizer States across GPUs.
- **ZeRO-2**: Shards Gradients.
- **ZeRO-3**: Shards Weights.

With ZeRO-3, a 175B parameter model can be trained on hardware where each individual GPU could only fit a 10B model.

## Visualization: Memory Redundancy vs. ZeRO

```chart
{
  "type": "bar",
  "xAxis": "strategy",
  "data": [
    {"strategy": "Standard DDP", "weights": 33, "grads": 33, "opt_states": 34},
    {"strategy": "ZeRO-1", "weights": 33, "grads": 33, "opt_states": 5},
    {"strategy": "ZeRO-2", "weights": 33, "grads": 5, "opt_states": 5},
    {"strategy": "ZeRO-3 (Sharded)", "weights": 5, "grads": 5, "opt_states": 5}
  ],
  "lines": [
    {"dataKey": "opt_states", "stroke": "#ef4444", "name": "Memory per GPU (%)"}
  ]
}
```
*ZeRO dramatically reduces the VRAM "tax" required to keep the model in a ready-to-train state, allowing for massive scaling.*

## Related Topics

[[model-parallelism]] — the alternative for giant layers  
[[fsdp]] — the PyTorch implementation of ZeRO ideas  
[[inference-serving]] — scale issues on the delivery side
---
