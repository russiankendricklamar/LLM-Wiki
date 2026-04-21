---
title: "Hardware IO and FlashAttention"
category: "LLM Infrastructure"
order: 13
lang: "en"
slug: "hardware-io-attention"
---

# Hardware IO and the Physics of FlashAttention

To understand why [[flash-attention|FlashAttention]] is so revolutionary, one must look at the physical architecture of a GPU. Modern deep learning is no longer limited by how many calculations (FLOPs) a chip can perform, but by how fast it can move data between different types of memory.

## The Memory Hierarchy of a GPU

A GPU (like an Nvidia A100 or H100) has two main memory levels:

1.  **HBM (High Bandwidth Memory)**:
    - **Size**: 40GB–80GB.
    - **Speed**: ~1.5–3.0 TB/s.
    - **Role**: This is the main "VRAM" where model weights and activations live. Accessing HBM is "slow" in relative terms.
2.  **SRAM (Static RAM)**:
    - **Size**: ~20MB–50MB total (spread across Streaming Multiprocessors).
    - **Speed**: ~20 TB/s.
    - **Role**: The extremely fast "workspace" located right next to the compute cores (Tensor Cores).

## The "Memory Wall" Problem

In standard attention, the $N \times N$ attention matrix is too large to fit in SRAM.
1.  Compute $QK^\top$ in cores $\to$ Write result to HBM.
2.  Read $QK^\top$ from HBM $\to$ Compute Softmax in cores $\to$ Write result back to HBM.
3.  Read Softmax from HBM $\to$ Compute Attention $\to$ Write final result to HBM.

The processor spends **90% of its time waiting** for data to travel back and forth over the HBM-SRAM bus. This is an **IO-bound** operation.

## FlashAttention: IO-Awareness

FlashAttention eliminates these intermediate HBM writes by using **Tiling**:
- It breaks the matrices into small blocks that *do* fit in SRAM.
- It performs the entire Attention calculation (Dot product + Softmax + Weighted sum) for a block **entirely within SRAM**.
- It only writes the final result back to HBM.

## Visualization: Memory Speed vs. Access

```chart
{
  "type": "bar",
  "xAxis": "memory_type",
  "data": [
    {"memory_type": "HBM (Main VRAM)", "bandwidth": 2, "latency": 100},
    {"memory_type": "SRAM (On-chip)", "bandwidth": 19, "latency": 1}
  ],
  "lines": [
    {"dataKey": "bandwidth", "stroke": "#3b82f6", "name": "Bandwidth (TB/s)"}
  ]
}
```
*The 10x difference in bandwidth and 100x difference in latency between HBM and SRAM is the reason why algorithms that minimize memory movement (like FlashAttention) outperform "naive" algorithms, even if they perform more total operations.*

## Why It Matters for the Future

As GPUs get more Tensor Cores, the "Compute" gets faster much quicker than the "Memory IO." This means the memory wall will get taller. Future architectures must be **Communication-Avoiding**: they will prioritize keeping data near the cores at all costs, even if it means re-calculating values (Recomputation) instead of saving them.

## Related Topics

[[flash-attention]] — the algorithmic implementation  
[[distributed-training]] — scaling IO across multiple nodes  
[[inference-serving]] — optimization for real-time delivery
---
