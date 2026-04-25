---
title: "Fully Sharded Data Parallel (FSDP)"
category: "LLM Infrastructure"
order: 21
lang: "en"
slug: "fsdp"
---

# Fully Sharded Data Parallel (FSDP)

Fully Sharded Data Parallel (FSDP) is a type of data parallelism that shards model parameters, gradients, and optimizer states across all available GPUs. Introduced by Meta (FairScale/PyTorch), it is the open-source industry standard for training giant models, effectively implementing the ideas of **ZeRO-3**.

## How FSDP Works

In standard **Distributed Data Parallel (DDP)**, every [[inference-serving|GPU]] keeps a full copy of the model. FSDP breaks this rule.

### The Lifecycle of a Layer
For each layer (or "FSDP unit") during the training loop:
1.  **All-Gather**: Before the forward pass, the GPU collects the shards of the weights it needs from other GPUs to reconstruct the full layer.
2.  **Forward Pass**: The computation is performed locally.
3.  **Discard**: Immediately after the layer is finished, the full weights are discarded, and only the local shard is kept in memory.
4.  **Backward Pass**: The process is repeated to compute gradients.
5.  **Reduce-Scatter**: Gradients are sharded and distributed back to the respective "owner" GPUs.

## Key Advantages

1.  **Massive Memory Savings**: Memory usage per GPU decreases linearly as you add more GPUs. This allows training models that are far larger than any single GPU's VRAM.
2.  **Communication Efficiency**: FSDP overlaps the communication (All-Gather) with the computation of the *previous* layer, hiding latency.
3.  **Hybrid Sharding**: FSDP can be configured to shard weights within a node (fast NVLink) but replicate them across nodes (slower Ethernet), balancing speed and scale.

## Comparison: DDP vs. FSDP

| Feature | Distributed Data Parallel (DDP) | FSDP |
|---|---|---|
| **Weights** | Replicated on all GPUs | **Sharded** across GPUs |
| **Memory usage** | Static (size of model) | **Scales down** with more GPUs |
| **Max Model Size** | Limited by 1 GPU VRAM | **Virtually unlimited** (cluster-bound) |
| **Complexity** | Low | High |

## Visualization: Memory per GPU

```chart
{
  "type": "line",
  "xAxis": "num_gpus",
  "data": [
    {"num_gpus": 1, "ddp_mem": 80, "fsdp_mem": 80},
    {"num_gpus": 2, "ddp_mem": 80, "fsdp_mem": 42},
    {"num_gpus": 4, "ddp_mem": 80, "fsdp_mem": 22},
    {"num_gpus": 8, "ddp_mem": 80, "fsdp_mem": 12},
    {"num_gpus": 16,"ddp_mem": 80, "fsdp_mem": 7}
  ],
  "lines": [
    {"dataKey": "ddp_mem", "stroke": "#ef4444", "name": "DDP (Fixed)"},
    {"dataKey": "fsdp_mem", "stroke": "#10b981", "name": "FSDP (Sharded)"}
  ]
}
```
*While DDP hits a "VRAM wall" immediately, FSDP allows you to trade more hardware for the ability to fit larger models.*

## Related Topics

[[distributed-training]] — the ZeRO theory behind FSDP  
[[model-parallelism]] — the alternative for intra-layer scaling  
[[fine-tuning]] — FSDP is essential for full-parameter [[fine-tuning]] of 70B+ models
---
