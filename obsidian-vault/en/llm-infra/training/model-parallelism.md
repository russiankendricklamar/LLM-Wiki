---
title: "Model Parallelism: Tensor and Pipeline"
category: "LLM Infrastructure"
order: 20
lang: "en"
slug: "model-parallelism"
---

# Model Parallelism: Tensor vs. Pipeline

When a single layer or the entire set of layers of a Large Language Model is too massive to fit into the VRAM of one GPU, we must use **Model Parallelism**. This involves splitting the model itself, rather than the data.

## 1. Tensor Parallelism (TP)

Tensor Parallelism (also called intra-layer parallelism) splits individual weight matrices across multiple GPUs.

- **The Idea**: A large matrix multiplication $Y = XW$ is split. For example, if we have 2 GPUs, $W$ is split into $W_1$ and $W_2$. Each GPU computes a partial result, and they are combined via an All-Reduce operation.
- **Pros**: Perfectly scales giant layers (like the FFN or Attention heads).
- **Cons**: High communication overhead. It requires extremely fast interconnects (like **NVLink**) between GPUs because synchronization happens *inside* every layer.

## 2. Pipeline Parallelism (PP)

Pipeline Parallelism (inter-layer parallelism) splits the model by layers.

- **The Idea**: If a model has 80 layers, GPU 1 handles layers 1-20, GPU 2 handles 21-40, and so on.
- **The Problem: Pipeline Bubbles**: While GPU 4 is processing the 80th layer, GPUs 1, 2, and 3 are sitting idle, waiting for the next batch. This idleness is called a "bubble."
- **The Solution: Micro-batching**: Splitting a batch into tiny micro-batches and "pipelining" them through the GPUs so that all cards are busy most of the time.

## 3. Comparison and 3D Parallelism

Modern giant models use **3D Parallelism**, which combines all three techniques:
1.  **Data Parallelism (DP/ZeRO)**: To handle huge datasets.
2.  **Tensor Parallelism (TP)**: To handle massive individual layers.
3.  **Pipeline Parallelism (PP)**: To handle models with hundreds of layers.

| Feature | Tensor Parallelism | Pipeline Parallelism |
|---|---|---|
| **Split unit** | Inside a layer (Matrix) | Between layers |
| **Communication** | High (intra-layer) | Medium (between stages) |
| **Hardware** | Best within one node (NVLink) | Good across multiple nodes |
| **Efficiency** | Very high | Subject to bubbles |

## Visualization: The Pipeline Bubble

```chart
{
  "type": "bar",
  "xAxis": "time_step",
  "data": [
    {"time_step": "T1", "gpu1": "Batch1", "gpu2": "Idle", "gpu3": "Idle"},
    {"time_step": "T2", "gpu1": "Batch2", "gpu2": "Batch1", "gpu3": "Idle"},
    {"time_step": "T3", "gpu1": "Batch3", "gpu2": "Batch2", "gpu3": "Batch1"},
    {"time_step": "T4", "gpu1": "Idle", "gpu2": "Batch3", "gpu3": "Batch2"}
  ],
  "lines": [
    {"dataKey": "gpu1", "stroke": "#3b82f6", "name": "GPU Activity"}
  ]
}
```
*The "Idle" states at the beginning and end of the sequence represent the pipeline bubble. Micro-batching minimizes these gaps, keeping the utilization high.*

## Related Topics

[[distributed-training]] — the data-parallel counterpart  
[[transformer-architecture]] — the structure being parallelized  
[[fsdp]] — advanced sharding for memory efficiency
---
