---
title: "FlashAttention (1, 2 & 3)"
category: "LLM Infrastructure"
order: 11
lang: "en"
slug: "flash-attention"
---

# FlashAttention

## What Is It

FlashAttention is a series of IO-aware exact [[attention-mechanisms|attention]] algorithms designed to speed up Transformers and reduce their memory footprint. While standard attention is $O(L^2)$ in time and memory, the real bottleneck on modern GPUs is not the number of floating-point operations (FLOPs) but the **Memory Access (IO)**.

FlashAttention changes the way attention is computed by keeping as much data as possible in the **SRAM** (fast, small memory) of the [[inference-serving|GPU]], minimizing the slow transfers to and from the **HBM** (High Bandwidth Memory).

## The IO Bottleneck

Modern GPUs have two main types of memory:
1.  **HBM (High Bandwidth Memory)**: Large (40GB-80GB), but relatively slow.
2.  **SRAM**: Small (order of 100KB per stream processor), but extremely fast.

Standard attention computes the $N \times N$ attention matrix $S = QK^T$, writes it to HBM, reads it back to compute Softmax, and writes the result $P = \text{softmax}(S)$ back to HBM. These HBM accesses are the reason attention is slow.

## FlashAttention-1: Tiling and Recomputation

FlashAttention-1 introduced two key ideas:
1.  **Tiling**: Divide the $Q, K, V$ matrices into blocks that fit into SRAM. Compute attention block-by-block.
2.  **Recomputation**: Instead of storing the large $N \times N$ attention matrix for the backward pass, we only store the softmax normalization constants. During the backward pass, we recompute the blocks of the attention matrix in SRAM. This reduces memory usage from $O(L^2)$ to $O(L)$.

## FlashAttention-2: Better Parallelism

FlashAttention-2 (2023) improved the algorithm by:
- Reducing the number of non-matmul operations (which are slow on GPUs).
- Better partitioning of the work across GPU threads (Warp-level parallelism).
- Achieving up to 2x speedup over FlashAttention-1, reaching 70% of theoretical peak FLOPs on A100 GPUs.

## FlashAttention-3: Asynchronous Execution

FlashAttention-3 (2024) targets the H100 GPUs (Hopper architecture) by exploiting **asynchronous execution** and **FP8 precision**:
- **Tensor Memory Accelerator (TMA)**: Uses specialized hardware to move data between HBM and SRAM asynchronously while the Tensor Cores are still computing.
- **Warp-specialization**: Assigns different tasks (reading data vs. computing) to different warps to hide latency.

## Performance Comparison

```chart
{
  "type": "bar",
  "xAxis": "method",
  "data": [
    {"method": "Standard Attention", "throughput": 1.0, "memory": 100},
    {"method": "FlashAttention-1", "throughput": 3.2, "memory": 15},
    {"method": "FlashAttention-2", "throughput": 5.8, "memory": 12},
    {"method": "FlashAttention-3 (H100)", "throughput": 9.4, "memory": 10}
  ],
  "lines": [
    {"dataKey": "throughput", "stroke": "#10b981", "name": "Relative Throughput"},
    {"dataKey": "memory", "stroke": "#ef4444", "name": "Memory Usage (%)"}
  ]
}
```

## Why It Matters

FlashAttention is the reason we can now train models with 128k, 1M, or even 10M token contexts. By reducing the memory bottleneck, it makes long-context Transformers computationally tractable. It is currently integrated into almost all major [[llm]] frameworks (PyTorch, HuggingFace, vLLM).

## Related Topics

[[transformer-architecture]] — the architecture it optimizes  
[[inference-serving]] — why IO-awareness is critical for production  
[[context-length]] — how we reach 1M+ tokens
